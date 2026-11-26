// Tải ảnh / PDF lên để thêm từ vựng & ngữ pháp vào kho "Của tôi".
// Nhận dạng chữ ngay trong trình duyệt (Tesseract.js, không gửi ảnh đi đâu), đọc PDF bằng pdf.js.
// Mọi thư viện và dữ liệu ngôn ngữ nằm trong thư mục vendor/, chạy được khi không có Internet.
(function () {
  const abs = (p) => new URL(p, location.href).href;
  const CJK = /[㐀-鿿豈-﫿]/;
  const loaded = {};
  function loadScript(src) {
    if (!loaded[src]) loaded[src] = new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = src; s.onload = res; s.onerror = () => { loaded[src] = null; rej(new Error("Không tải được " + src)); };
      document.head.appendChild(s);
    });
    return loaded[src];
  }

  // ── Đọc file thành danh sách trang (ảnh hoặc văn bản có sẵn) ──
  async function pdfPages(file, onStatus) {
    await loadScript("vendor/pdfjs/pdf.min.js");
    const pdfjs = window.pdfjsLib;
    pdfjs.GlobalWorkerOptions.workerSrc = abs("vendor/pdfjs/pdf.worker.min.js");
    const doc = await pdfjs.getDocument({ data: await file.arrayBuffer() }).promise;
    const max = Math.min(doc.numPages, 20);
    const pages = [];
    for (let n = 1; n <= max; n++) {
      onStatus(`Đang đọc PDF: trang ${n}/${max}…`);
      const page = await doc.getPage(n);
      // PDF có sẵn chữ (không phải bản scan) → lấy chữ trực tiếp, nhanh và chính xác hơn OCR
      const tc = await page.getTextContent();
      const lines = [];
      let lastY = null;
      for (const it of tc.items) {
        const y = Math.round(it.transform[5]);
        if (lastY === null || Math.abs(y - lastY) > 3) lines.push(it.str); else lines[lines.length - 1] += (it.str.match(/^\s/) ? "" : " ") + it.str;
        lastY = y;
      }
      const text = lines.join("\n").trim();
      const vp = page.getViewport({ scale: 2 });
      const canvas = document.createElement("canvas");
      canvas.width = vp.width; canvas.height = vp.height;
      await page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
      pages.push({ name: `${file.name} · trang ${n}`, canvas, text: CJK.test(text) || text.length > 20 ? text : null });
    }
    if (doc.numPages > max) UI.toast(`PDF có ${doc.numPages} trang — chỉ đọc ${max} trang đầu.`);
    return pages;
  }
  function imagePage(file) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.onload = () => {
        // Phóng to ảnh nhỏ để nhận dạng chữ Hán tốt hơn
        const scale = Math.max(1, Math.min(3, 1600 / Math.max(img.width, img.height)));
        const c = document.createElement("canvas");
        c.width = img.width * scale; c.height = img.height * scale;
        const ctx = c.getContext("2d");
        ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0, c.width, c.height);
        res({ name: file.name || "Ảnh dán", canvas: c, text: null });
      };
      img.onerror = () => rej(new Error("Không mở được ảnh " + file.name));
      img.src = URL.createObjectURL(file);
    });
  }

  // ── Nhận dạng chữ ──
  const workers = {};
  async function getWorker(langs, onStatus) {
    await loadScript("vendor/tesseract/tesseract.min.js");
    if (workers[langs]) return workers[langs];
    onStatus("Đang khởi động bộ nhận dạng chữ (lần đầu mất ~10 giây)…");
    const worker = await Tesseract.createWorker(langs.split("+"), 1, {
      workerPath: abs("vendor/tesseract/worker.min.js"),
      corePath: abs("vendor/tesseract/core"),
      langPath: abs("vendor/tesseract/lang"),
      gzip: true,
      logger: (m) => { if (m.status === "recognizing text") onStatus(`Đang nhận dạng chữ… ${Math.round(m.progress * 100)}%`); }
    });
    await worker.setParameters({ preserve_interword_spaces: "1" });
    workers[langs] = worker;
    return worker;
  }

  const wordsOf = (data) => (data.blocks || []).flatMap((b) => b.paragraphs.flatMap((p) => p.lines.flatMap((l) => l.words)));
  // Hai lượt nhận dạng: lượt chữ Hán (chi_tra) giữ đúng chữ Hán, lượt Latin (vie/eng) giữ đúng dấu tiếng Việt & pinyin.
  // Ghép lại theo vị trí từng từ trên ảnh.
  function mergeWords(cjkData, latinData) {
    const cjk = wordsOf(cjkData).filter((w) => CJK.test(w.text));
    const overlaps = (a, b) => {
      const ix = Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0), iy = Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0);
      return ix > 0 && iy > 0 && ix * iy > 0.3 * Math.min((a.x1 - a.x0) * (a.y1 - a.y0), (b.x1 - b.x0) * (b.y1 - b.y0));
    };
    const latin = wordsOf(latinData).filter((w) => !CJK.test(w.text) && /[\p{L}\d]/u.test(w.text) && !cjk.some((c) => overlaps(c.bbox, w.bbox)));
    const all = cjk.concat(latin).map((w) => ({ text: w.text, x: w.bbox.x0, y: (w.bbox.y0 + w.bbox.y1) / 2, h: w.bbox.y1 - w.bbox.y0 }));
    if (!all.length) return "";
    const hs = all.map((w) => w.h).sort((a, b) => a - b), tol = hs[Math.floor(hs.length / 2)] * 0.6;
    all.sort((a, b) => a.y - b.y);
    const lines = [];
    for (const w of all) {
      const line = lines.find((l) => Math.abs(l.y - w.y) < tol);
      if (line) { line.words.push(w); line.y = (line.y * (line.words.length - 1) + w.y) / line.words.length; } else lines.push({ y: w.y, words: [w] });
    }
    return lines.sort((a, b) => a.y - b.y).map((l) => l.words.sort((a, b) => a.x - b.x).map((w) => w.text).join(" ")).join("\n");
  }
  async function recognizeMixed(canvas, langs, onStatus) {
    const list = langs.split("+");
    const latinLangs = list.filter((l) => l !== "chi_tra");
    if (!list.includes("chi_tra") || !latinLangs.length) {
      const w = await getWorker(langs, onStatus);
      return (await w.recognize(canvas)).data.text;
    }
    const wc = await getWorker("chi_tra", onStatus);
    onStatus("Lượt 1/2: nhận dạng chữ Hán…");
    const a = (await wc.recognize(canvas, {}, { text: true, blocks: true })).data;
    const wl = await getWorker(latinLangs.join("+"), onStatus);
    onStatus("Lượt 2/2: nhận dạng pinyin & tiếng Việt…");
    const b = (await wl.recognize(canvas, {}, { text: true, blocks: true })).data;
    const merged = mergeWords(a, b);
    return merged || a.text;
  }
  const cleanText = (t) => t
    .replace(/([㐀-鿿豈-﫿，。、！？：；（）「」])[ \t]+(?=[㐀-鿿豈-﫿，。、！？：；（）「」])/g, "$1")
    .replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();

  // ── Tách dòng thành từ vựng: chữ Hán · pinyin · nghĩa ──
  function parseLine(raw) {
    const line = cleanText(raw).replace(/^\s*(\d+[.)、:：]|[-•*·●○▪])\s*/, "");
    const m = line.match(/[㐀-鿿豈-﫿]+/);
    if (!m || m[0].length > 10) return null;
    const hz = m[0];
    const rest = (line.slice(0, m.index) + " " + line.slice(m.index + hz.length)).trim();
    const tokens = rest.split(/\s+/).filter(Boolean);
    let py = "", used = 0, count = 0;
    for (const t of tokens) {
      const tok = t.replace(/[()（）\[\]【】:：,，;；/|=-]/g, "");
      if (!tok) { used++; continue; }
      const conv = UserContent.pinyinToZhuyin(tok);
      if (!conv || count + conv.count > [...hz].length) break;
      py += (py ? " " : "") + tok; count += conv.count; used++;
      if (count === [...hz].length) break;
    }
    if (count !== [...hz].length) { py = ""; used = 0; }
    const vi = tokens.slice(used).join(" ").replace(/^[\s:：=\-–—|/,，.]+/, "").trim();
    return { hz: UserContent.toTraditional(hz), py, vi };
  }

  // ── Giao diện ──
  let pages = [];
  function viewScan($t) {
    $t.innerHTML = `
      <section class="gram">
        <h2>📷 Thêm từ ảnh hoặc PDF</h2>
        <p>Chụp ảnh trang sách / danh sách từ, hoặc chọn file PDF. Trang web sẽ <b>đọc chữ ngay trên máy bạn</b> (không gửi ảnh đi đâu), rồi bạn chọn dòng nào là từ vựng, dòng nào là ngữ pháp và sửa lại trước khi lưu.</p>
        <label class="drop" id="drop">
          <input type="file" id="files" accept="image/*,application/pdf" multiple hidden>
          <span class="drop-big">⬆️</span>
          <b>Bấm để chọn ảnh / PDF</b><span class="muted">hoặc kéo thả vào đây · hoặc dán ảnh (Ctrl+V)</span>
        </label>
        <div class="row">Ngôn ngữ trong ảnh:
          <label class="check"><input type="checkbox" name="lang" value="chi_tra" checked> 繁體中文</label>
          <label class="check"><input type="checkbox" name="lang" value="vie" checked> Tiếng Việt</label>
          <label class="check"><input type="checkbox" name="lang" value="eng"> English</label>
        </div>
        <p class="muted small">Mẹo: ảnh rõ, thẳng, đủ sáng cho kết quả tốt nhất. Chữ viết tay khó nhận dạng. Pinyin có dấu thanh thường bị đọc sai — trang web sẽ cố tự khớp, bạn kiểm tra lại nhé.</p>
        <div id="ocr-status" class="muted"></div>
      </section>
      <div id="ocr-pages"></div>`;
    const input = document.getElementById("files"), drop = document.getElementById("drop");
    input.onchange = () => handle([...input.files]);
    drop.ondragover = (e) => { e.preventDefault(); drop.classList.add("over"); };
    drop.ondragleave = () => drop.classList.remove("over");
    drop.ondrop = (e) => { e.preventDefault(); drop.classList.remove("over"); handle([...e.dataTransfer.files]); };
    document.onpaste = (e) => {
      if (!document.getElementById("drop")) { document.onpaste = null; return; }
      const imgs = [...(e.clipboardData || {}).items || []].filter((i) => i.type.startsWith("image/")).map((i) => i.getAsFile());
      if (imgs.length) handle(imgs);
    };
    if (pages.length) drawPages();
  }

  async function handle(files) {
    const status = (t) => { const el = document.getElementById("ocr-status"); if (el) el.textContent = t; };
    // Tiếng Việt / English đặt trước để giữ dấu tiếng Việt; chữ Hán vẫn được nhận dạng
    const order = ["vie", "eng", "chi_tra"];
    const langs = [...document.querySelectorAll('[name="lang"]:checked')].map((c) => c.value).sort((a, b) => order.indexOf(a) - order.indexOf(b)).join("+") || "chi_tra";
    try {
      for (const f of files) {
        const ps = f.type === "application/pdf" || /\.pdf$/i.test(f.name) ? await pdfPages(f, status) : [await imagePage(f)];
        for (const p of ps) {
          if (p.text == null) {
            status(`Đang nhận dạng chữ: ${p.name}…`);
            p.text = cleanText(await recognizeMixed(p.canvas, langs, status));
          } else p.text = cleanText(p.text);
          pages.push(p);
          drawPages();
        }
      }
      status(`Xong. Đã đọc ${pages.length} trang.`);
    } catch (err) {
      console.error(err);
      status("⚠️ Lỗi: " + (err && err.message ? err.message : err));
    }
  }

  function drawPages() {
    const box = document.getElementById("ocr-pages");
    if (!box) return;
    const { esc } = UI;
    box.innerHTML = pages.map((p, i) => `
      <section class="gram ocr-page">
        <div class="row" style="justify-content:space-between"><h3>${esc(p.name)}</h3><button class="btn small danger" data-rm="${i}">Bỏ trang này</button></div>
        <div class="ocr-grid">
          <div class="ocr-img"></div>
          <div>
            <label class="muted small">Chữ đọc được — sửa trực tiếp nếu sai:</label>
            <textarea class="ocr-text bulk" data-i="${i}" rows="12">${esc(p.text || "")}</textarea>
            <div class="row">
              <button class="btn primary" data-words="${i}">📖 Tách thành từ vựng</button>
              <button class="btn" data-gram="${i}">✏️ Dùng làm ngữ pháp</button>
              ${UserContent.simplifiedChars(p.text || "").length ? `<button class="btn small" data-trad="${i}">Đổi giản thể → phồn thể</button>` : ""}
            </div>
            <p class="muted small">Mẹo: bôi đen một đoạn trước khi bấm để chỉ dùng phần đó.</p>
          </div>
        </div>
        <div class="ocr-words" id="ocr-words-${i}"></div>
      </section>`).join("");
    pages.forEach((p, i) => {
      const holder = box.querySelectorAll(".ocr-img")[i];
      p.canvas.classList.add("ocr-canvas");
      holder.appendChild(p.canvas);
    });
    box.querySelectorAll(".ocr-text").forEach((ta) => (ta.oninput = () => (pages[+ta.dataset.i].text = ta.value)));
    box.querySelectorAll("[data-rm]").forEach((b) => (b.onclick = () => { pages.splice(+b.dataset.rm, 1); drawPages(); }));
    box.querySelectorAll("[data-trad]").forEach((b) => (b.onclick = () => { const p = pages[+b.dataset.trad]; p.text = UserContent.toTraditional(p.text); drawPages(); }));
    const selected = (i) => { const ta = box.querySelector(`.ocr-text[data-i="${i}"]`); const s = ta.value.slice(ta.selectionStart, ta.selectionEnd); return s.trim() ? s : ta.value; };
    box.querySelectorAll("[data-words]").forEach((b) => (b.onclick = () => wordTable(+b.dataset.words, selected(+b.dataset.words))));
    box.querySelectorAll("[data-gram]").forEach((b) => (b.onclick = () => toGrammar(selected(+b.dataset.gram))));
  }

  function wordTable(i, text) {
    const rows = text.split("\n").map(parseLine).filter(Boolean);
    const el = document.getElementById("ocr-words-" + i);
    const { esc } = UI;
    if (!rows.length) { el.innerHTML = '<p class="warn">Không tìm thấy dòng nào có chữ Hán.</p>'; return; }
    const have = new Set(UserContent.pool().words.map((w) => w.hz));
    el.innerHTML = `
      <h3>Từ tìm thấy (${rows.length}) — kiểm tra rồi lưu</h3>
      <table class="wordlist ocr-table"><thead><tr><th><input type="checkbox" id="all-${i}" checked></th><th>Chữ Hán</th><th>Pinyin</th><th>Nghĩa tiếng Việt</th><th></th></tr></thead><tbody>
      ${rows.map((r, k) => `<tr data-k="${k}">
        <td><input type="checkbox" class="pick" ${have.has(r.hz) || !r.py ? "" : "checked"}></td>
        <td><input class="c-hz" value="${esc(r.hz)}"></td>
        <td><input class="c-py" value="${esc(r.py)}" placeholder="vd: xue2 xi2"><div class="c-zy muted small"></div></td>
        <td><input class="c-vi" value="${esc(r.vi)}" placeholder="nghĩa…">${have.has(r.hz) ? '<div class="warn small">Đã có trong kho của bạn</div>' : ""}</td>
        <td><button class="btn small c-open" title="Mở biểu mẫu đầy đủ để thêm Hán-Việt, câu chuyện, ví dụ">✎ Biểu mẫu</button></td></tr>`).join("")}
      </tbody></table>
      <div class="row"><label>Đơn vị<select id="unit-${i}">${UNITS.map((u) => `<option value="${u.id}" ${u.id === UNITS[UNITS.length - 1].id ? "selected" : ""}>${esc(u.title)}</option>`).join("")}</select></label>
        <label class="check"><input type="checkbox" id="rev-${i}" checked> Thêm vào ôn tập</label>
        <button class="btn primary" id="save-${i}">Lưu các từ đã chọn</button></div>
      <p class="muted small">Dòng không khớp được pinyin sẽ không được chọn sẵn — điền pinyin rồi tích chọn. Câu chuyện ghi nhớ, Hán-Việt và câu ví dụ có thể thêm sau trong mục “Từ của tôi” → ✎ Sửa.</p>`;
    const zyOf = (tr) => {
      const c = UserContent.pinyinToZhuyin(tr.querySelector(".c-py").value);
      tr.querySelector(".c-zy").textContent = c ? c.zy : tr.querySelector(".c-py").value ? "⚠️ pinyin chưa đúng" : "";
      return c;
    };
    el.querySelectorAll("tbody tr").forEach((tr) => { zyOf(tr); tr.querySelector(".c-py").oninput = () => zyOf(tr); });
    document.getElementById("all-" + i).onchange = (e) => el.querySelectorAll(".pick").forEach((c) => (c.checked = e.target.checked));
    const rowWord = (tr) => {
      const c = zyOf(tr);
      return { hz: UserContent.toTraditional(tr.querySelector(".c-hz").value.trim()), py: c ? c.py : tr.querySelector(".c-py").value.trim(), zy: c ? c.zy : "", vi: tr.querySelector(".c-vi").value.trim(), hv: "", story: "", unit: +document.getElementById("unit-" + i).value };
    };
    el.querySelectorAll(".c-open").forEach((b) => (b.onclick = () => { UserContent.setDraft("word", rowWord(b.closest("tr"))); location.hash = "#/mine/word/new"; }));
    document.getElementById("save-" + i).onclick = () => {
      const words = [...el.querySelectorAll("tbody tr")].filter((tr) => tr.querySelector(".pick").checked).map(rowWord).filter((w) => w.hz && w.vi);
      const skippedNoVi = el.querySelectorAll("tbody tr .pick:checked").length - words.length;
      const fresh = words.filter((w) => !have.has(w.hz));
      fresh.forEach((w) => UserContent.saveWord(w));
      if (document.getElementById("rev-" + i).checked) Store.addCards(fresh);
      UI.toast(`Đã lưu ${fresh.length} từ.` + (skippedNoVi ? ` ${skippedNoVi} dòng thiếu nghĩa chưa lưu.` : "") + (words.length - fresh.length ? ` Bỏ qua ${words.length - fresh.length} từ đã có.` : ""));
      UI.updateNavBadge();
      fresh.forEach((w) => have.add(w.hz));
      wordTable(i, text);
    };
  }

  function toGrammar(text) {
    const lines = text.split("\n").map((l) => cleanText(l)).filter(Boolean);
    const title = lines[0] || "";
    const zhLines = lines.slice(1).filter((l) => CJK.test(l) && (l.match(/[㐀-鿿]/g) || []).length >= 3);
    const other = lines.slice(1).filter((l) => !zhLines.includes(l));
    UserContent.setDraft("grammar", {
      title: UserContent.toTraditional(title),
      explain: UserContent.toTraditional(other.join("\n")),
      pattern: "",
      examples: zhLines.map((l) => ({ zh: UserContent.toTraditional(l), py: "", vi: "" })),
      exercises: []
    });
    location.hash = "#/mine/grammar/new";
  }

  window.OCR = { viewScan, parseLine, cleanText };
})();
