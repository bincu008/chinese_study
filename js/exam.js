// Bài thi mô phỏng TOCFL Band A (Level 2 / A2): Nghe (4 phần) + Đọc (5 phần).
// Câu hỏi lấy từ kho mặc định (bài học + ngân hàng đề) TRỘN với kho "Của tôi".
(function () {
  const PARTS = {
    L1: { sec: "listening", no: "第一部分", zh: "看圖回答", vi: "Nghe một từ/câu, chọn hình đúng (3 lựa chọn).", n: [5, 15] },
    L2: { sec: "listening", no: "第二部分", zh: "問答理解", vi: "Nghe một câu, chọn câu đáp phù hợp nhất (3 lựa chọn).", n: [6, 15] },
    L3: { sec: "listening", no: "第三部分", zh: "對話理解", vi: "Nghe đoạn hội thoại ngắn, trả lời câu hỏi (3 lựa chọn).", n: [5, 10] },
    L4: { sec: "listening", no: "第四部分", zh: "對話", vi: "Nghe đoạn hội thoại dài hơn, trả lời câu hỏi (4 lựa chọn).", n: [4, 10] },
    R1: { sec: "reading", no: "第一部分", zh: "單句理解", vi: "Đọc một câu, chọn nghĩa đúng (3 lựa chọn).", n: [4, 10] },
    R2: { sec: "reading", no: "第二部分", zh: "看圖釋義", vi: "Nhìn hình, chọn từ mô tả đúng (3 lựa chọn).", n: [4, 10] },
    R3: { sec: "reading", no: "第三部分", zh: "選詞填空", vi: "Chọn từ / cấu trúc đúng điền vào chỗ trống.", n: [6, 15] },
    R4: { sec: "reading", no: "第四部分", zh: "完成段落", vi: "Hoàn thành đoạn văn hoặc câu.", n: [3, 7] },
    R5: { sec: "reading", no: "第五部分", zh: "閱讀理解", vi: "Đọc văn bản ngắn (tin nhắn, thông báo…), trả lời câu hỏi (4 lựa chọn).", n: [3, 8] }
  };
  const SEC = { listening: { zh: "聽力測驗", vi: "Nghe hiểu" }, reading: { zh: "閱讀測驗", vi: "Đọc hiểu" } };
  const PASS_A2 = 60, PASS_A1 = 41; // thang điểm /80 của TOCFL

  const $app = () => document.getElementById("app");

  function scopeData(scope) {
    const units = scope === "all" ? UNITS.map((u) => u.id) : [scope];
    const sysWords = UI.systemWords().filter((w) => units.includes(w.unit));
    const myWords = UI.userWords().filter((w) => scope === "all" || +w.unit === scope);
    const words = sysWords.concat(myWords);
    const sysGrammar = LESSONS.filter((l) => units.includes(l.unit)).flatMap((l) => l.grammar);
    const myGrammar = UserContent.pool().grammar.filter((g) => scope === "all" || +g.unit === scope);
    const grammar = sysGrammar.concat(myGrammar);
    const bank = { qa: [], dialog: [], longDialog: [], cloze: [], reading: [] };
    units.forEach((u) => { const b = EXAM_BANK[u]; if (b) Object.keys(bank).forEach((k) => bank[k].push(...(b[k] || []))); });
    const examples = words.filter((w) => w.ex && w.ex.zh && w.ex.vi).map((w) => Object.assign({ hz: w.hz }, w.ex))
      .concat(grammar.flatMap((g) => (g.examples || []).filter((e) => e.zh && e.vi)));
    return { units, words, myWords, myGrammar, grammar, bank, examples };
  }

  const picOf = (w) => w.pic || (window.PICS || {})[w.hz];

  function build(scope, full) {
    const { shuffle, sample } = UI;
    const D = scopeData(scope);
    const want = (p) => PARTS[p].n[full ? 1 : 0];
    const qs = { listening: [], reading: [] };
    const add = (part, q) => qs[PARTS[part].sec].push(Object.assign({ part }, q));
    const mc = (correct, wrong) => { const choices = shuffle([correct, ...wrong]); return { choices, answer: choices.indexOf(correct) }; };
    const others = (pool, not, n) => sample([...new Set(pool.filter((x) => x && x !== not))], n);

    // Ưu tiên câu từ kho của người dùng để chắc chắn được kiểm tra
    const mineFirst = (arr, n, isMine) => {
      const a = shuffle(arr.filter(isMine)), b = shuffle(arr.filter((x) => !isMine(x)));
      const takeMine = Math.min(a.length, Math.ceil(n / 2));
      return shuffle(a.slice(0, takeMine).concat(b).slice(0, n).concat(a.slice(takeMine, takeMine + Math.max(0, n - takeMine - b.length))));
    };
    const myHz = new Set(D.myWords.map((w) => w.hz));
    const isMineW = (w) => myHz.has(w.hz);

    // ── Nghe ──
    const picWords = []; const seenPic = new Set();
    D.words.forEach((w) => { const p = picOf(w); if (p && !seenPic.has(p)) { seenPic.add(p); picWords.push(w); } });
    const allPics = picWords.map(picOf);
    if (picWords.length >= 3) mineFirst(picWords, want("L1"), isMineW).forEach((w) =>
      add("L1", Object.assign({ kind: "mc", pics: true, say: w.hz, transcript: `${w.hz} (${w.py}) — ${w.vi}`, prompt: "請選出正確的圖片。" }, mc(picOf(w), others(allPics, picOf(w), 2)))));

    const exVis = D.examples.map((e) => e.vi);
    sample(D.bank.qa, want("L2")).forEach((q) =>
      add("L2", Object.assign({ kind: "mc", say: q.say, transcript: q.say, prompt: "請選出最適當的回答。" }, mc(q.answer, q.wrong))));
    let lack = want("L2") - D.bank.qa.length;
    if (lack > 0) mineFirst(D.examples, lack, (e) => myHz.has(e.hz)).forEach((e) =>
      add("L2", Object.assign({ kind: "mc", say: e.zh, transcript: `${e.zh} — ${e.vi}`, prompt: "Câu bạn vừa nghe có nghĩa là gì?" }, mc(e.vi, others(exVis, e.vi, 2)))));

    sample(D.bank.dialog, want("L3")).forEach((d) =>
      add("L3", Object.assign({ kind: "mc", lines: d.lines, question: d.q, transcript: d.lines.map(([w, t]) => `${w}：${t}`).join("\n"), prompt: d.q }, mc(d.choices[d.answer], d.choices.filter((_, i) => i !== d.answer)))));
    sample(D.bank.longDialog, want("L4")).forEach((d) =>
      add("L4", Object.assign({ kind: "mc", lines: d.lines, question: d.q, transcript: d.lines.map(([w, t]) => `${w}：${t}`).join("\n"), prompt: d.q }, mc(d.choices[d.answer], d.choices.filter((_, i) => i !== d.answer)))));

    // ── Đọc ──
    mineFirst(D.examples, want("R1"), (e) => myHz.has(e.hz)).forEach((e) =>
      add("R1", Object.assign({ kind: "mc", text: e.zh, prompt: "這個句子是什麼意思？", transcript: e.py ? `${e.zh}\n${e.py}` : e.zh }, mc(e.vi, others(exVis, e.vi, 2)))));

    if (picWords.length >= 3) mineFirst(picWords, want("R2"), isMineW).forEach((w) =>
      add("R2", Object.assign({ kind: "mc", bigPic: picOf(w), prompt: "哪一個詞和圖片的意思一樣？", transcript: `${w.hz} — ${w.vi}` }, mc(w.hz, others(picWords.map((x) => x.hz), w.hz, 2)))));

    // 選詞填空: câu ví dụ có chứa từ → khoét trống; cộng thêm bài tập ngữ pháp trắc nghiệm
    const gaps = D.words.filter((w) => w.ex && w.ex.zh && w.ex.zh.includes(w.hz) && w.ex.zh !== w.hz + "。" && w.ex.zh.length > w.hz.length + 1);
    const allHz = D.words.map((w) => w.hz);
    const gapQs = gaps.map((w) => {
      const sameLen = allHz.filter((h) => h.length === w.hz.length && h !== w.hz && !w.ex.zh.includes(h));
      return Object.assign({ kind: "mc", mine: isMineW(w), text: w.ex.zh.replace(w.hz, "（　　）"), prompt: "請選出最適當的詞填入空格。", transcript: `${w.ex.zh} — ${w.ex.vi}` }, mc(w.hz, others(sameLen.length >= 2 ? sameLen : allHz, w.hz, 2)));
    });
    const myG = new Set(D.myGrammar);
    const gramMc = D.grammar.flatMap((g) => (g.exercises || []).filter((e) => e.type === "mc").map((e) => ({ e, mine: myG.has(g) }))).map(({ e, mine }) => {
      const right = e.choices[e.answer];
      const wrong = UI.sample(e.choices.filter((_, i) => i !== e.answer), 2);
      return Object.assign({ kind: "mc", mine, text: e.q, prompt: "請選出正確的答案。", explain: e.explain, transcript: e.q }, mc(right, wrong));
    });
    const r3n = want("R3");
    mineFirst(gapQs, Math.ceil(r3n / 2), (q) => q.mine).concat(mineFirst(gramMc, Math.floor(r3n / 2), (q) => q.mine)).forEach((q) => add("R3", q));

    // 完成段落: đoạn văn có chỗ trống + câu sắp xếp
    const clozeItems = D.bank.cloze.flatMap((c) => c.blanks.map((b, bi) => ({ c, b, bi })));
    const orderEx = D.grammar.flatMap((g) => (g.exercises || []).filter((e) => e.type === "order").map((e) => Object.assign({ mine: myG.has(g) }, e)));
    const r4n = want("R4");
    sample(clozeItems, Math.ceil(r4n * 0.6)).forEach(({ c, b, bi }) => {
      const text = c.text.replace(/\((\d)\)/g, (m, d) => (+d === bi + 1 ? "【　　】" : `（${c.blanks[+d - 1].choices[c.blanks[+d - 1].answer]}）`));
      add("R4", Object.assign({ kind: "mc", text, prompt: "請選出最適當的詞填入【　　】。", transcript: c.text }, mc(b.choices[b.answer], b.choices.filter((_, i) => i !== b.answer))));
    });
    mineFirst(orderEx, r4n - qs.reading.filter((q) => q.part === "R4").length, (e) => e.mine).forEach((e) =>
      add("R4", { kind: "order", words: e.words, vi: e.vi, prompt: "請把詞語排成正確的句子。", transcript: e.words.join("") }));

    const readItems = D.bank.reading.flatMap((r) => r.qs.map((q) => ({ r, q })));
    sample(readItems, want("R5")).forEach(({ r, q }) =>
      add("R5", Object.assign({ kind: "mc", passage: r, prompt: q.q, transcript: r.text }, mc(q.choices[q.answer], q.choices.filter((_, i) => i !== q.answer)))));

    // Sắp xếp theo thứ tự phần
    for (const k of ["listening", "reading"]) qs[k].sort((a, b) => a.part.localeCompare(b.part));
    return { qs, D };
  }

  // ── Màn hình bắt đầu ──────────────────────────────────
  function viewExam(scope) {
    const isAll = scope === "all";
    const unit = isAll ? null : UNITS.find((u) => u.id === scope);
    if (!isAll && !unit) { location.hash = "#/"; return; }
    const key = isAll ? "all" : scope;
    const prev = Store.state.exams[key];
    const D = scopeData(scope);
    const title = isAll ? "TOCFL 模擬考 — Thi thử TOCFL Band A (A2)" : `測驗 ${unit.id} — Bài thi ${unit.title}`;
    const counts = (full) => { const { qs } = build(scope, full); return [qs.listening.length, qs.reading.length]; };
    const [sl, sr] = counts(false), [fl, fr] = counts(true);
    $app().innerHTML = `
      <div class="crumbs"><a href="#/">Trang chủ</a> › ${isAll ? "Thi thử" : "Bài thi " + unit.id}</div>
      <div class="center-box wide">
        <h1>${UI.esc(title)}</h1>
        <p>Cấu trúc giống đề TOCFL Band A: <b>聽力 Nghe</b> (看圖回答 · 問答理解 · 對話理解 · 對話) và <b>閱讀 Đọc</b> (單句理解 · 看圖釋義 · 選詞填空 · 完成段落 · 閱讀理解). Điểm quy đổi thang <b>80</b>; đạt <b>A2 ≥ ${PASS_A2}</b>, A1 ≥ ${PASS_A1} cho mỗi kỹ năng.</p>
        <p class="muted">Nội dung: ${isAll ? "tất cả các đơn vị" : "bài " + unit.lessons.join(", ")} (${D.words.length - D.myWords.length} từ mặc định) + kho của bạn (${D.myWords.length} từ, ${D.myGrammar.length} điểm ngữ pháp${isAll ? "" : " gắn với đơn vị này"}).</p>
        <div class="mode-pick">
          <label class="mode"><input type="radio" name="mode" value="short" checked><b>Đề rút gọn</b><span>${sl} câu nghe + ${sr} câu đọc · 20 + 20 phút</span></label>
          <label class="mode"><input type="radio" name="mode" value="full"><b>Đề đầy đủ</b><span>${fl} câu nghe + ${fr} câu đọc · 60 + 60 phút<br><small class="muted">(đề thật: 50 + 50 câu)</small></span></label>
        </div>
        <label class="check center"><input type="checkbox" id="once"> Chỉ được nghe một lần (giống thi thật)</label>
        ${prev && prev.attempts ? `<p>Lần gần nhất: Nghe <b>${prev.last.listening}</b> · Đọc <b>${prev.last.reading}</b> /80 · ${prev.attempts} lần thi</p>` : ""}
        <button class="btn primary big" id="go">Bắt đầu làm bài</button>
        <p class="muted">Bật loa. Không có đáp án ngay — bạn sẽ xem kết quả và lời giải sau khi nộp bài.</p>
      </div>`;
    document.getElementById("go").onclick = () => {
      const full = document.querySelector('[name="mode"]:checked').value === "full";
      run(scope, key, full, document.getElementById("once").checked);
    };
  }

  // ── Làm bài ───────────────────────────────────────────
  let tick = null;
  function run(scope, key, full, once) {
    const { qs } = build(scope, full);
    const answers = { listening: [], reading: [] };
    const minutes = full ? 60 : 20;
    let sec = "listening", i = 0, deadline = 0;

    function startSection(s) {
      sec = s; i = 0;
      if (!qs[s].length) return s === "listening" ? breakScreen() : finish();
      deadline = Date.now() + minutes * 60 * 1000;
      clearInterval(tick);
      const fmt = (ms) => `⏱ ${String(Math.floor(ms / 60000)).padStart(2, "0")}:${String(Math.floor(ms / 1000) % 60).padStart(2, "0")}`;
      setTimeout(() => { const el = document.getElementById("timer"); if (el) el.textContent = fmt(minutes * 60000); }, 0);
      tick = setInterval(() => {
        const el = document.getElementById("timer");
        if (!document.getElementById("exam-run")) { clearInterval(tick); return; }
        const left = Math.max(0, deadline - Date.now());
        if (el) el.textContent = `⏱ ${String(Math.floor(left / 60000)).padStart(2, "0")}:${String(Math.floor(left / 1000) % 60).padStart(2, "0")}`;
        if (left <= 0) { clearInterval(tick); speechSynthesis && speechSynthesis.cancel(); UI.toast("Hết giờ!"); endSection(); }
      }, 500);
      draw();
    }
    function endSection() { clearInterval(tick); if (sec === "listening") breakScreen(); else finish(); }
    function breakScreen() {
      $app().innerHTML = `<div class="center-box" id="exam-run"><h1>聽力測驗結束</h1><p>Đã xong phần Nghe (${answers.listening.filter((a) => a !== undefined).length}/${qs.listening.length} câu đã trả lời).</p>
        <p>Tiếp theo: <b>閱讀測驗 — Đọc hiểu</b>, ${qs.reading.length} câu, ${minutes} phút.</p><button class="btn primary big" id="go-r">Bắt đầu phần Đọc</button></div>`;
      document.getElementById("go-r").onclick = () => startSection("reading");
    }

    function draw() {
      const list = qs[sec];
      if (i >= list.length) return endSection();
      const q = list[i], P = PARTS[q.part];
      const firstOfPart = i === 0 || list[i - 1].part !== q.part;
      const done = answers[sec].filter((a) => a !== undefined).length;
      $app().innerHTML = `
        <div id="exam-run">
          <div class="exam-top"><span><b>${SEC[sec].zh}</b> ${SEC[sec].vi} · ${P.no} ${P.zh}</span><span>Câu ${i + 1}/${list.length}</span><span id="timer" class="timer">⏱</span></div>
          <div class="bar"><i style="width:${(done / list.length) * 100}%"></i></div>
          ${firstOfPart ? `<div class="part-intro"><b>${P.no}：${P.zh}</b> — ${P.vi}</div>` : ""}
          <div class="exercise exam-q" id="q"></div>
          <div class="row" style="justify-content:space-between">
            <button class="btn" id="pv" ${i === 0 ? "disabled" : ""}>← Câu trước</button>
            <button class="btn small" id="end">Nộp phần ${SEC[sec].vi}</button>
            <button class="btn primary" id="nx">${i === list.length - 1 ? "Hoàn thành phần này" : "Câu tiếp →"}</button>
          </div>
        </div>`;
      const el = document.getElementById("q");
      renderQ(el, q, answers[sec][i], (val) => (answers[sec][i] = val));
      document.getElementById("pv").onclick = () => { i--; draw(); };
      document.getElementById("nx").onclick = () => { i++; draw(); };
      const endB = document.getElementById("end");
      endB.onclick = () => { if (!endB.dataset.c) { endB.dataset.c = 1; endB.textContent = "Bấm lần nữa để nộp"; return; } endSection(); };
    }

    const played = new Set();
    function renderQ(el, q, current, set) {
      const { esc } = UI;
      const isL = PARTS[q.part].sec === "listening";
      let head = "";
      if (isL) head = `<div class="listen"><button class="btn big" id="play">🔊 ${once ? "Nghe" : "Nghe / nghe lại"}</button> <span class="muted" id="play-note"></span></div>`;
      if (q.text) head += `<div class="q-text">${esc(q.text)}</div>`;
      if (q.bigPic) head += `<div class="big-pic">${q.bigPic}</div>`;
      if (q.passage) head += `<div class="passage"><div class="passage-title">${esc(q.passage.title)}</div><pre>${esc(q.passage.text)}</pre></div>`;
      if (q.kind === "order") {
        el.innerHTML = `<div class="q">${esc(q.prompt)}</div>`;
        const box = document.createElement("div"); el.appendChild(box);
        if (current !== undefined) box.innerHTML = '<p class="muted">Bạn đã trả lời câu này.</p>';
        else UI.renderOrder(box, { words: q.words, vi: q.vi }, (ok) => set(ok ? "ok" : "bad"), true);
        return;
      }
      const letters = "ABCD";
      el.innerHTML = `${head}<div class="q">${esc(q.prompt)}</div>
        <div class="choices ${q.pics ? "pics" : ""}">${q.choices.map((c, k) => `<button class="choice ${current === k ? "picked" : ""}" data-k="${k}"><span class="letter">${letters[k]}</span> ${q.pics ? `<span class="pic">${c}</span>` : esc(c)}</button>`).join("")}</div>`;
      el.querySelectorAll(".choice").forEach((b) => (b.onclick = () => {
        el.querySelectorAll(".choice").forEach((x) => x.classList.remove("picked"));
        b.classList.add("picked"); set(+b.dataset.k);
      }));
      if (isL) {
        const btn = document.getElementById("play"), note = document.getElementById("play-note");
        const id = q.part + (q.say || q.question);
        const play = () => {
          if (once && played.has(id)) return;
          played.add(id);
          if (q.lines) Speech.speakLines(q.lines.concat([["", "問題：" + q.question]]));
          else Speech.speak(q.say);
          if (once) { btn.disabled = true; note.textContent = "Chỉ nghe một lần."; }
        };
        btn.onclick = play;
        if (!played.has(id)) setTimeout(play, 350);
        else if (once) { btn.disabled = true; note.textContent = "Đã nghe."; }
      }
    }

    function finish() {
      clearInterval(tick);
      const score = (s) => {
        const list = qs[s];
        if (!list.length) return null;
        const c = list.filter((q, k) => (q.kind === "order" ? answers[s][k] === "ok" : answers[s][k] === q.answer)).length;
        return { correct: c, total: list.length, scaled: Math.round((c / list.length) * 80) };
      };
      const L = score("listening"), R = score("reading");
      const lvl = (x) => (!x ? "–" : x.scaled >= PASS_A2 ? "A2 ✓" : x.scaled >= PASS_A1 ? "A1" : "Chưa đạt");
      const passed = (!L || L.scaled >= PASS_A2) && (!R || R.scaled >= PASS_A2);
      Store.recordExam(key, { listening: L ? L.scaled : null, reading: R ? R.scaled : null, passed, full });
      const byPart = {};
      ["listening", "reading"].forEach((s) => qs[s].forEach((q, k) => {
        const b = (byPart[q.part] = byPart[q.part] || [0, 0]); b[1]++;
        if (q.kind === "order" ? answers[s][k] === "ok" : answers[s][k] === q.answer) b[0]++;
      }));
      const wrong = [];
      ["listening", "reading"].forEach((s) => qs[s].forEach((q, k) => {
        const ok = q.kind === "order" ? answers[s][k] === "ok" : answers[s][k] === q.answer;
        if (!ok) wrong.push({ q, a: answers[s][k] });
      }));
      const { esc } = UI;
      $app().innerHTML = `
        <div class="center-box wide">
          <h1>${passed ? "🎉 Đạt trình độ A2!" : "Kết quả bài thi"}</h1>
          <div class="stats">
            ${L ? `<div class="stat"><b>${L.scaled}<small>/80</small></b><span>聽力 Nghe · ${L.correct}/${L.total} câu · ${lvl(L)}</span></div>` : ""}
            ${R ? `<div class="stat"><b>${R.scaled}<small>/80</small></b><span>閱讀 Đọc · ${R.correct}/${R.total} câu · ${lvl(R)}</span></div>` : ""}
          </div>
          <p class="muted">Ngưỡng TOCFL Band A: Level 2 (A2) ≥ ${PASS_A2}, Level 1 (A1) ≥ ${PASS_A1} trên thang 80. Điểm ở đây quy đổi theo tỷ lệ câu đúng, chỉ để tham khảo.</p>
          <table class="wordlist parts"><thead><tr><th>Phần</th><th>Đúng</th></tr></thead><tbody>
            ${Object.entries(byPart).map(([p, [a, b]]) => `<tr><td>${SEC[PARTS[p].sec].zh} · ${PARTS[p].no} ${PARTS[p].zh}</td><td>${a}/${b}</td></tr>`).join("")}
          </tbody></table>
          <div class="row center"><button class="btn primary" id="again">↻ Thi lại</button><a class="btn" href="#/">Về trang chủ</a></div>
        </div>
        ${wrong.length ? `<h2>Xem lại câu sai (${wrong.length})</h2>${wrong.map(({ q, a }) => `
          <div class="exercise">
            <div class="muted small">${PARTS[q.part].no} ${PARTS[q.part].zh}</div>
            <div class="q">${esc(q.prompt)} ${q.say ? UI.playBtn(q.say) : ""}${q.lines ? `<button class="play" data-lines='${esc(JSON.stringify(q.lines))}'>🔊</button>` : ""}</div>
            ${q.transcript ? `<pre class="transcript">${esc(q.transcript)}</pre>` : ""}
            ${q.kind === "order" ? `<div>Đáp án: <b>${esc(q.words.join(" "))}</b></div>` :
              `<div>${a !== undefined ? `Bạn chọn: <span class="bad">${q.pics ? q.choices[a] : esc(q.choices[a])}</span> · ` : "Chưa trả lời · "}Đáp án: <b class="good">${q.pics ? q.choices[q.answer] : esc(q.choices[q.answer])}</b></div>`}
            ${q.explain ? `<div class="muted">${esc(q.explain)}</div>` : ""}
          </div>`).join("")}` : ""}`;
      document.querySelectorAll("[data-lines]").forEach((b) => (b.onclick = () => Speech.speakLines(JSON.parse(b.dataset.lines))));
      document.getElementById("again").onclick = () => viewExam(scope);
    }

    startSection("listening");
  }

  window.Exam = { viewExam, build, PARTS };
})();
