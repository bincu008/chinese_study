// Nội dung do người dùng tự thêm: từ vựng và ngữ pháp (kho "Của tôi", tách riêng khỏi kho mặc định).
// Lưu trong Store.state.user = { words: [...], grammar: [...] }.
(function () {
  // ── Pinyin → chú âm ───────────────────────────────────
  const INIT = { zh: "ㄓ", ch: "ㄔ", sh: "ㄕ", b: "ㄅ", p: "ㄆ", m: "ㄇ", f: "ㄈ", d: "ㄉ", t: "ㄊ", n: "ㄋ", l: "ㄌ", g: "ㄍ", k: "ㄎ", h: "ㄏ", j: "ㄐ", q: "ㄑ", x: "ㄒ", r: "ㄖ", z: "ㄗ", c: "ㄘ", s: "ㄙ" };
  const FIN = {
    a: "ㄚ", o: "ㄛ", e: "ㄜ", "ê": "ㄝ", ai: "ㄞ", ei: "ㄟ", ao: "ㄠ", ou: "ㄡ", an: "ㄢ", en: "ㄣ", ang: "ㄤ", eng: "ㄥ", ong: "ㄨㄥ",
    i: "ㄧ", ia: "ㄧㄚ", io: "ㄧㄛ", ie: "ㄧㄝ", iao: "ㄧㄠ", iu: "ㄧㄡ", iou: "ㄧㄡ", ian: "ㄧㄢ", in: "ㄧㄣ", iang: "ㄧㄤ", ing: "ㄧㄥ", iong: "ㄩㄥ",
    u: "ㄨ", ua: "ㄨㄚ", uo: "ㄨㄛ", uai: "ㄨㄞ", ui: "ㄨㄟ", uei: "ㄨㄟ", uan: "ㄨㄢ", un: "ㄨㄣ", uen: "ㄨㄣ", uang: "ㄨㄤ", ueng: "ㄨㄥ",
    "ü": "ㄩ", "üe": "ㄩㄝ", "üan": "ㄩㄢ", "ün": "ㄩㄣ"
  };
  const MARKS = { "ā": "a1", "á": "a2", "ǎ": "a3", "à": "a4", "ē": "e1", "é": "e2", "ě": "e3", "è": "e4", "ī": "i1", "í": "i2", "ǐ": "i3", "ì": "i4",
    "ō": "o1", "ó": "o2", "ǒ": "o3", "ò": "o4", "ū": "u1", "ú": "u2", "ǔ": "u3", "ù": "u4", "ǖ": "ü1", "ǘ": "ü2", "ǚ": "ü3", "ǜ": "ü4",
    // OCR hay đọc dấu thanh 3 (ˇ) thành dấu trăng của tiếng Việt (ă) → coi như thanh 3
    "ă": "a3", "ĕ": "e3", "ĭ": "i3", "ŏ": "o3", "ŭ": "u3", "ả": "a3", "ẻ": "e3", "ỉ": "i3", "ỏ": "o3", "ủ": "u3",
    "ã": "a1", "ẽ": "e1", "ĩ": "i1", "õ": "o1", "ũ": "u1" };
  const TONE_ZY = ["", "", "ˊ", "ˇ", "ˋ"];

  // base: âm tiết không dấu (dùng ü). Trả về chú âm không dấu thanh, hoặc null nếu không hợp lệ.
  function baseToZhuyin(base) {
    if (base === "er") return "ㄦ";
    let s = base, zero = true;
    if (s[0] === "y") s = s.startsWith("yu") ? "ü" + s.slice(2) : s.startsWith("yi") ? "i" + s.slice(2) : "i" + s.slice(1);
    else if (s[0] === "w") s = s.startsWith("wu") ? "u" + s.slice(2) : "u" + s.slice(1);
    else zero = !!0;
    let ini = "";
    for (const k of ["zh", "ch", "sh"]) if (s.startsWith(k)) ini = k;
    if (!ini && INIT[s[0]]) ini = s[0];
    let rest = s.slice(ini.length);
    if (!ini && !zero && /^[iuü]/.test(rest)) return null; // âm tiết không phụ âm phải viết với y/w
    if (/^(zh|ch|sh|r|z|c|s)$/.test(ini) && rest === "i") return INIT[ini];
    if (/^[jqx]$/.test(ini)) { if (rest[0] === "u") rest = "ü" + rest.slice(1); if (rest[0] !== "i" && rest[0] !== "ü") return null; }
    if (!FIN[rest]) return null;
    return (ini ? INIT[ini] : "") + FIN[rest];
  }

  function markPinyin(base, tone) {
    if (tone < 1 || tone > 4) return base;
    const v = { a: "āáǎà", e: "ēéěè", i: "īíǐì", o: "ōóǒò", u: "ūúǔù", "ü": "ǖǘǚǜ" };
    let idx = base.indexOf("a");
    if (idx < 0) idx = base.indexOf("e");
    if (idx < 0) idx = base.indexOf("ou");
    if (idx < 0) { for (let i = base.length - 1; i >= 0; i--) if ("iouü".includes(base[i])) { idx = i; break; } }
    if (idx < 0) return base;
    return base.slice(0, idx) + v[base[idx]][tone - 1] + base.slice(idx + 1);
  }

  // Chuyển chuỗi pinyin (dấu hoặc số, có/không có dấu cách) thành [{base, tone}]
  function parsePinyin(input) {
    const out = [];
    const tokens = input.toLowerCase().replace(/v/g, "ü").replace(/u:/g, "ü").split(/[\s'’\-·,.，。!?！？]+/).filter(Boolean);
    for (const tok of tokens) {
      // Bỏ dấu thanh, ghi nhớ thanh theo vị trí ký tự
      let bare = "", toneAt = [], digitTones = [];
      for (const ch of tok.normalize("NFC")) {
        if (MARKS[ch]) { bare += MARKS[ch][0]; toneAt[bare.length - 1] = +MARKS[ch][1]; }
        else if (/[0-5]/.test(ch)) { digitTones.push([bare.length, +ch]); }
        else if (/[a-zü]/.test(ch)) bare += ch;
        else return null;
      }
      // Ranh giới bắt buộc tại vị trí chữ số
      const forced = new Map(digitTones.map(([pos, t]) => [pos, t]));
      const memo = new Map();
      const seg = (i) => {
        if (i === bare.length) return [];
        if (memo.has(i)) return memo.get(i);
        let res = null;
        for (let len = Math.min(6, bare.length - i); len >= 1 && !res; len--) {
          const b = bare.slice(i, i + len);
          // không được vượt qua một chữ số
          let crosses = false;
          for (const p of forced.keys()) if (p > i && p < i + len) crosses = true;
          if (crosses || !baseToZhuyin(b)) continue;
          const rest = seg(i + len);
          if (rest) res = [{ base: b, start: i, end: i + len }, ...rest];
        }
        memo.set(i, res);
        return res;
      };
      const parts = seg(0);
      if (!parts) return null;
      for (const p of parts) {
        let tone = 5;
        for (let k = p.start; k < p.end; k++) if (toneAt[k]) tone = toneAt[k];
        if (forced.has(p.end)) tone = forced.get(p.end) || 5;
        out.push({ base: p.base, tone });
      }
    }
    return out;
  }

  function pinyinToZhuyin(input) {
    const syls = parsePinyin(input);
    if (!syls || !syls.length) return null;
    // Không có thanh điệu nào trong cả chuỗi → coi là "chưa rõ thanh" thay vì thanh nhẹ
    const noTones = !/[0-5]/.test(input) && !Object.keys(MARKS).some((m) => input.includes(m));
    if (noTones) syls.forEach((s) => (s.tone = 0));
    return {
      zy: syls.map((s) => (s.tone === 5 ? "˙" : "") + baseToZhuyin(s.base) + (TONE_ZY[s.tone] || "")).join(" "),
      py: syls.map((s, i) => (i > 0 && /^[aeo]/.test(s.base) ? "'" : "") + markPinyin(s.base, s.tone)).join(""),
      count: syls.length,
      noTones
    };
  }

  // ── Phát hiện chữ giản thể (cảnh báo, gợi ý chữ phồn thể) ─
  const SIMP = "这這个個们們来來时時为為说說国國学學对對会會发發过過没沒见見点點现現两兩电電车車话話东東门門问問间間长長开開关關头頭机機题題业業样樣当當经經从從动動实實体體进進还還种種应應认認让讓气氣边邊难難欢歡爱愛饭飯钱錢买買卖賣书書写寫读讀听聽语語词詞请請谢謝谁誰识識记記讲講试試课課贵貴号號岁歲万萬华華汉漢习習乐樂医醫药藥热熱觉覺师師妈媽马馬吗嗎鸡雞鱼魚鸟鳥飞飛龙龍门們员員园園图圖团團块塊坏壞声聲处處备備复復头頭夸誇奋奮妇婦孙孫宁寧宝寶宽寬对對导導层層岛島币幣带帶帮幫广廣庆慶库庫张張弯彎录錄忆憶怀懷态態总總恶惡战戰扫掃护護报報担擔拥擁择擇换換据據搜搜携攜数數断斷无無旧舊时時显顯晓曉暂暫术術杂雜权權条條来來极極构構标標树樹桥橋检檢楼樓欧歐残殘毕畢气氣汤湯沟溝没沒泪淚济濟测測浅淺满滿灯燈灵靈烟煙烧燒热熱爷爺牵牽状狀独獨猫貓环環现現产產画畫疗療癫癲皱皺盐鹽监監盖蓋码碼础礎确確离離种種积積称稱穷窮窝窩竞競笔筆节節范範简簡类類粮糧紧緊红紅约約级級纪紀纸紙线線练練组組细細终終经經结結给給统統绝絕继繼续續绿綠维維网網罗羅职職联聯肠腸肤膚胜勝脑腦脏臟舰艦艺藝节節苏蘇药藥获獲虑慮虾蝦补補装裝见見观觀规規视視览覽觉覺计計订訂认認讨討让讓训訓议議记記讲講许許论論设設访訪证證评評识識诉訴词詞译譯试試诗詩诚誠话話该該详詳语語误誤说說请請读讀课課谁誰调調谈談谢謝贝貝负負贡貢财財责責质質购購贸貿费費贴貼资資赛賽赶趕跃躍践踐车車转轉轮輪软軟轻輕较較辆輛辈輩边邊达達迁遷运運还還这這进進远遠违違连連迟遲选選递遞逻邏遗遺邮郵钟鐘铁鐵银銀错錯键鍵门門闭閉问問闲閒间間闹鬧队隊阳陽阴陰际際陆陸险險隐隱难難项項顺順须須顾顧预預领領频頻题題颜顏风風饮飲饭飯饱飽馆館驾駕验驗骑騎鱼魚鸡雞鸭鴨麦麥齐齊齿齒龟龜";
  const S2T = {};
  for (let i = 0; i < SIMP.length; i += 2) S2T[SIMP[i]] = SIMP[i + 1];
  function simplifiedChars(text) {
    const found = [];
    for (const ch of text || "") if (S2T[ch] && !found.some((f) => f[0] === ch)) found.push([ch, S2T[ch]]);
    return found;
  }
  function toTraditional(text) { return [...(text || "")].map((c) => S2T[c] || c).join(""); }

  // ── Kho dữ liệu người dùng ────────────────────────────
  function pool() {
    const st = Store.state;
    if (!st.user) st.user = { words: [], grammar: [] };
    return st.user;
  }
  let drafts = {};
  const setDraft = (type, obj) => (drafts[type] = obj);
  const takeDraft = (type) => { const d = drafts[type]; delete drafts[type]; return d; };
  const newId = () => "u" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  function saveWord(w) {
    const p = pool();
    const i = p.words.findIndex((x) => x.id === w.id);
    if (i >= 0) {
      const old = p.words[i];
      if (old.hz !== w.hz && Store.state.cards[old.hz] && !Store.state.cards[w.hz]) { Store.state.cards[w.hz] = Store.state.cards[old.hz]; delete Store.state.cards[old.hz]; }
      p.words[i] = w;
    } else { w.id = w.id || newId(); w.created = Date.now(); p.words.push(w); }
    Store.save();
    return w;
  }
  function deleteWord(id) { const p = pool(); p.words = p.words.filter((w) => w.id !== id); Store.save(); }
  function saveGrammar(g) {
    const p = pool();
    const i = p.grammar.findIndex((x) => x.id === g.id);
    if (i >= 0) p.grammar[i] = g; else { g.id = g.id || newId(); g.created = Date.now(); p.grammar.push(g); }
    Store.save();
    return g;
  }
  function deleteGrammar(id) { const p = pool(); p.grammar = p.grammar.filter((g) => g.id !== id); Store.save(); }

  // ── Phân tích dòng văn bản (nhập nhanh) ───────────────
  const splitBar = (line) => line.split("|").map((s) => s.trim());
  function parseBulkWords(text, unit) {
    const words = [], errors = [];
    text.split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#")).forEach((line, n) => {
      const [hz, py, vi, hv, story, exZh, exPy, exVi] = splitBar(line);
      if (!hz || !py || !vi) { errors.push(`Dòng ${n + 1}: cần ít nhất 'chữ | pinyin | nghĩa'`); return; }
      const conv = pinyinToZhuyin(py);
      if (!conv) { errors.push(`Dòng ${n + 1}: không đọc được pinyin “${py}”`); return; }
      const w = { hz, py: conv.py, zy: conv.zy, vi, hv: hv || "", story: story || "", unit };
      if (exZh) w.ex = { zh: exZh, py: exPy || "", vi: exVi || "" };
      words.push(w);
    });
    return { words, errors };
  }
  function parseExamples(text) {
    return (text || "").split("\n").map((l) => l.trim()).filter(Boolean).map((l) => { const [zh, py, vi] = splitBar(l); return { zh, py: py || "", vi: vi || "" }; });
  }
  function parseExercises(text) {
    const out = [], errors = [];
    (text || "").split("\n").map((l) => l.trim()).filter(Boolean).forEach((l, n) => {
      if (l.startsWith("?")) {
        const [q, right, ...wrong] = splitBar(l.slice(1));
        if (!q || !right || !wrong.length) { errors.push(`Bài tập ${n + 1}: cần '? câu hỏi | đáp án đúng | đáp án sai…'`); return; }
        const choices = UI.shuffle([right, ...wrong.filter(Boolean)]);
        out.push({ type: "mc", q, choices, answer: choices.indexOf(right) });
      } else if (l.startsWith("=")) {
        const [sent, vi] = splitBar(l.slice(1));
        const words = (sent || "").split(/\s+/).filter(Boolean);
        if (words.length < 2) { errors.push(`Bài tập ${n + 1}: câu sắp xếp cần ít nhất 2 từ, cách nhau bằng dấu cách`); return; }
        out.push({ type: "order", words, vi: vi || "" });
      } else errors.push(`Bài tập ${n + 1}: dòng phải bắt đầu bằng '?' (trắc nghiệm) hoặc '=' (sắp xếp câu)`);
    });
    return { exercises: out, errors };
  }
  const exercisesToText = (exs) => (exs || []).map((e) => e.type === "order" ? `= ${e.words.join(" ")} | ${e.vi}` : `? ${e.q} | ${e.choices[e.answer]} | ${e.choices.filter((_, i) => i !== e.answer).join(" | ")}`).join("\n");
  const examplesToText = (exs) => (exs || []).map((e) => `${e.zh} | ${e.py} | ${e.vi}`).join("\n");

  // ── Giao diện ─────────────────────────────────────────
  const $app = () => document.getElementById("app");
  const unitOptions = (sel) => UNITS.map((u) => `<option value="${u.id}" ${+sel === u.id ? "selected" : ""}>${UI.esc(u.title)}</option>`).join("");
  const lastUnit = () => UNITS[UNITS.length - 1].id;

  function viewMine(tab = "words") {
    const p = pool();
    const { esc } = UI;
    $app().innerHTML = `
      <div class="crumbs"><a href="#/">Trang chủ</a> › Nội dung của tôi</div>
      <header class="lesson-head">
        <div><h1>我的內容 — Nội dung của tôi</h1>
        <p class="muted">Kho riêng của bạn, tách khỏi kho mặc định. Từ và ngữ pháp ở đây được ôn tập bằng thẻ ghi nhớ và được trộn chung với kho mặc định khi thi.</p></div>
        <div class="pager"><a class="btn" href="#/mine/scan">📷 Từ ảnh / PDF</a><a class="btn primary" href="#/mine/word/new">＋ Thêm từ</a><a class="btn primary" href="#/mine/grammar/new">＋ Thêm ngữ pháp</a></div>
      </header>
      <nav class="tabs">
        <a href="#/mine/words" class="${tab === "words" ? "active" : ""}">📖 Từ của tôi (${p.words.length})</a>
        <a href="#/mine/grammar" class="${tab === "grammar" ? "active" : ""}">✏️ Ngữ pháp của tôi (${p.grammar.length})</a>
        <a href="#/mine/scan" class="${tab === "scan" ? "active" : ""}">📷 Từ ảnh / PDF</a>
        <a href="#/mine/bulk" class="${tab === "bulk" ? "active" : ""}">📋 Nhập nhanh nhiều từ</a>
      </nav>
      <div id="tab"></div>`;
    const $t = document.getElementById("tab");
    if (tab === "bulk") return bulkView($t);
    if (tab === "scan") return OCR.viewScan($t);
    if (tab === "grammar") {
      if (!p.grammar.length) { $t.innerHTML = `<div class="center-box"><p>Chưa có điểm ngữ pháp nào.</p><a class="btn primary" href="#/mine/grammar/new">＋ Thêm ngữ pháp đầu tiên</a></div>`; return; }
      $t.innerHTML = p.grammar.map((g, gi) => `
        <section class="gram">
          <div class="row" style="justify-content:space-between"><h2>${esc(g.title)}</h2>
            <span><span class="tag">${esc((UNITS.find((u) => u.id === +g.unit) || {}).title || "")}</span>
            <a class="btn small" href="#/mine/grammar/${g.id}">✎ Sửa</a> <button class="btn small danger" data-del-g="${g.id}">Xóa</button></span></div>
          ${UI.grammarBody(g, "ug" + gi)}
        </section>`).join("");
      p.grammar.forEach((g, gi) => UI.mountExercises(g, "ug" + gi));
      bindDelete($t, "data-del-g", deleteGrammar, "grammar");
      return;
    }
    if (!p.words.length) { $t.innerHTML = `<div class="center-box"><p>Chưa có từ nào. Thêm từng từ bằng biểu mẫu, hoặc dán nhiều từ cùng lúc ở tab “Nhập nhanh”.</p><a class="btn primary" href="#/mine/word/new">＋ Thêm từ đầu tiên</a></div>`; return; }
    const notIn = p.words.filter((w) => !Store.state.cards[w.hz]).length;
    $t.innerHTML = `
      <div class="toolbar"><span class="muted">${p.words.length} từ</span>${notIn ? `<button class="btn primary" id="add-all">＋ Thêm ${notIn} từ vào ôn tập</button>` : '<span class="tag ok">Tất cả đã ở trong ôn tập</span>'}</div>
      <div class="words">${p.words.map((w, i) => UI.wordCardHTML(w, "u" + i, `<a class="btn small" href="#/mine/word/${w.id}">✎ Sửa</a><button class="btn small danger" data-del-w="${w.id}">Xóa</button>`)).join("")}</div>`;
    UI.bindStrokes($t, p.words, "u");
    const add = document.getElementById("add-all");
    if (add) add.onclick = () => { const n = Store.addCards(p.words); UI.toast(`Đã thêm ${n} thẻ.`); viewMine("words"); UI.updateNavBadge(); };
    bindDelete($t, "data-del-w", deleteWord, "words");
  }

  function bindDelete($t, attr, fn, tab) {
    $t.querySelectorAll(`[${attr}]`).forEach((b) => (b.onclick = () => {
      if (!b.dataset.confirm) { b.dataset.confirm = 1; b.textContent = "Bấm lần nữa để xóa"; return; }
      fn(b.getAttribute(attr)); UI.toast("Đã xóa."); viewMine(tab);
    }));
  }

  // Biểu mẫu thêm / sửa từ
  function viewWordForm(id) {
    const { esc } = UI;
    const editing = id && id !== "new" ? pool().words.find((w) => w.id === id) : null;
    const draft = editing ? null : takeDraft("word");
    const w = editing || Object.assign({ hz: "", py: "", zy: "", vi: "", hv: "", story: "", ex: { zh: "", py: "", vi: "" }, pic: "", unit: lastUnit() }, draft || {});
    const ex = w.ex || { zh: "", py: "", vi: "" };
    $app().innerHTML = `
      <div class="crumbs"><a href="#/">Trang chủ</a> › <a href="#/mine/words">Nội dung của tôi</a> › ${editing ? "Sửa từ" : "Thêm từ"}</div>
      <h1>${editing ? "Sửa từ" : "Thêm từ mới"}</h1>
      <div class="form-grid">
        <form id="wf" class="gram form" autocomplete="off">
          <label>Chữ Hán (phồn thể) *<input name="hz" class="hz-input" value="${esc(w.hz)}" required placeholder="例：學習"></label>
          <div id="hz-warn" class="warn"></div>
          <label>Pinyin * <small class="muted">gõ số hoặc dấu: <code>xue2 xi2</code>, <code>xuéxí</code>, <code>xuexi</code></small><input name="py" value="${esc(w.py)}" required placeholder="xue2 xi2"></label>
          <label>Chú âm <small class="muted">tự điền từ pinyin, có thể sửa</small><input name="zy" class="zy-input" value="${esc(w.zy)}" placeholder="ㄒㄩㄝˊ ㄒㄧˊ"></label>
          <div id="py-warn" class="warn"></div>
          <label>Nghĩa tiếng Việt *<input name="vi" value="${esc(w.vi)}" required placeholder="học tập"></label>
          <label>Âm Hán-Việt<input name="hv" value="${esc(w.hv)}" placeholder="HỌC TẬP"></label>
          <label>Câu chuyện ghi nhớ (bộ thủ)<textarea name="story" rows="3" placeholder="學 = hai tay (臼) trao kiến thức (爻) cho đứa trẻ (子)… 習 = 羽 (lông vũ): chim non tập bay…">${esc(w.story)}</textarea></label>
          <fieldset><legend>Câu ví dụ (không bắt buộc)</legend>
            <label>Tiếng Hoa<input name="exzh" value="${esc(ex.zh)}" placeholder="我在臺灣學習中文。"></label>
            <label>Pinyin<input name="expy" value="${esc(ex.py)}" placeholder="Wǒ zài Táiwān xuéxí Zhōngwén."></label>
            <label>Nghĩa<input name="exvi" value="${esc(ex.vi)}" placeholder="Tôi học tiếng Hoa ở Đài Loan."></label>
          </fieldset>
          <div class="row">
            <label>Đơn vị (để thi)<select name="unit">${unitOptions(w.unit)}</select></label>
            <label>Hình (emoji, cho phần thi 看圖)<input name="pic" value="${esc(w.pic || "")}" maxlength="8" style="width:6em" placeholder="📚"></label>
          </div>
          ${editing ? "" : '<label class="check"><input type="checkbox" name="review" checked> Thêm vào ôn tập (thẻ ghi nhớ)</label>'}
          <div class="row"><button class="btn primary" type="submit">${editing ? "Lưu thay đổi" : "Lưu từ"}</button>${editing ? "" : '<button class="btn" type="button" id="save-new">Lưu & thêm từ khác</button>'}<a class="btn" href="#/mine/words">Hủy</a></div>
        </form>
        <div><h3>Xem trước</h3><div id="preview"></div></div>
      </div>`;
    const f = document.getElementById("wf");
    let zyTouched = !!editing || !!(draft && draft.zy);
    f.zy.addEventListener("input", () => (zyTouched = true));
    function read() {
      const d = Object.fromEntries(new FormData(f));
      const out = { id: editing ? editing.id : undefined, hz: d.hz.trim(), py: d.py.trim(), zy: d.zy.trim(), vi: d.vi.trim(), hv: d.hv.trim(), story: d.story.trim(), unit: +d.unit, pic: d.pic.trim() };
      if (d.exzh.trim()) out.ex = { zh: d.exzh.trim(), py: d.expy.trim(), vi: d.exvi.trim() };
      if (editing && editing.created) out.created = editing.created;
      return out;
    }
    function update(e) {
      if (e && e.target === f.py) {
        const conv = pinyinToZhuyin(f.py.value);
        if (conv && (!zyTouched || !f.zy.value)) f.zy.value = conv.zy;
      }
      const w = read();
      const warns = [];
      const simp = simplifiedChars(w.hz + (w.ex ? w.ex.zh : ""));
      if (simp.length) warns.push(`⚠️ Có chữ giản thể: ${simp.map(([s, t]) => `${s} → <b>${t}</b>`).join(", ")} <button type="button" class="btn small" id="fix-trad">Đổi sang phồn thể</button>`);
      const dupSys = LESSONS.some((l) => l.vocab.some((v) => v.hz === w.hz));
      const dupMine = pool().words.some((v) => v.hz === w.hz && v.id !== w.id);
      if (w.hz && dupSys) warns.push("ℹ️ Từ này đã có trong kho mặc định — bạn vẫn có thể lưu phiên bản của riêng mình.");
      if (w.hz && dupMine) warns.push("⚠️ Bạn đã có từ này trong kho của mình.");
      if (w.hz && /[^\u3400-\u9fff\uf900-\ufaff\u{20000}-\u{2ffff}〇]/u.test(w.hz)) warns.push("⚠️ Ô chữ Hán chỉ nên chứa chữ Hán.");
      document.getElementById("hz-warn").innerHTML = warns.join("<br>");
      const fix = document.getElementById("fix-trad");
      if (fix) fix.onclick = () => { f.hz.value = toTraditional(f.hz.value); f.exzh.value = toTraditional(f.exzh.value); update(); };
      const pw = [];
      const pc = w.py ? pinyinToZhuyin(w.py) : null;
      if (pc && pc.noTones) pw.push("ℹ️ Pinyin chưa có thanh điệu — thêm số 1–5 (5 = thanh nhẹ) hoặc dấu để chú âm có dấu thanh, ví dụ <code>xue2 xi2</code>.");
      if (w.py && !pc) pw.push("⚠️ Không đọc được pinyin — hãy tách âm tiết bằng dấu cách, ví dụ <code>xi1 an1</code>.");
      const n = [...w.hz].length, m = w.zy ? w.zy.split(/\s+/).length : 0;
      if (w.hz && w.zy && n !== m) pw.push(`⚠️ ${n} chữ nhưng ${m} âm tiết chú âm — màu thanh điệu có thể bị lệch.`);
      document.getElementById("py-warn").innerHTML = pw.join("<br>");
      document.getElementById("preview").innerHTML = w.hz ? `<div class="words">${UI.wordCardHTML(Object.assign({}, w, { py: (pinyinToZhuyin(w.py) || {}).py || w.py }), "pv")}</div>` : '<p class="muted">Nhập chữ Hán để xem trước thẻ từ.</p>';
    }
    f.addEventListener("input", update);
    update();
    function submit(again) {
      const w = read();
      if (!w.hz || !w.py || !w.vi) { UI.toast("Cần nhập chữ Hán, pinyin và nghĩa."); return; }
      const conv = pinyinToZhuyin(w.py);
      if (conv) { w.py = conv.py; if (!w.zy) w.zy = conv.zy; }
      if (!w.zy) { UI.toast("Cần có chú âm — kiểm tra lại pinyin."); return; }
      saveWord(w);
      if (!editing && f.review && f.review.checked) Store.addCards([w]);
      UI.toast(editing ? "Đã lưu thay đổi." : `Đã thêm “${w.hz}”.`);
      UI.updateNavBadge();
      if (again) { viewWordForm("new"); document.querySelector('[name="hz"]').focus(); } else location.hash = "#/mine/words";
    }
    f.onsubmit = (e) => { e.preventDefault(); submit(false); };
    const sn = document.getElementById("save-new");
    if (sn) sn.onclick = () => submit(true);
  }

  // Biểu mẫu thêm / sửa ngữ pháp
  function viewGrammarForm(id) {
    const { esc } = UI;
    const editing = id && id !== "new" ? pool().grammar.find((g) => g.id === id) : null;
    const g = editing || Object.assign({ title: "", explain: "", pattern: "", examples: [], exercises: [], unit: lastUnit() }, takeDraft("grammar") || {});
    $app().innerHTML = `
      <div class="crumbs"><a href="#/">Trang chủ</a> › <a href="#/mine/grammar">Nội dung của tôi</a> › ${editing ? "Sửa ngữ pháp" : "Thêm ngữ pháp"}</div>
      <h1>${editing ? "Sửa điểm ngữ pháp" : "Thêm điểm ngữ pháp"}</h1>
      <div class="form-grid">
        <form id="gf" class="gram form" autocomplete="off">
          <label>Tên điểm ngữ pháp *<input name="title" value="${esc(g.title)}" required placeholder="把 + Tân ngữ + V — Câu chữ 把"></label>
          <label>Giải thích *<textarea name="explain" rows="4" required placeholder="Dùng 把 để đưa tân ngữ lên trước động từ, nhấn mạnh tác động lên tân ngữ…">${esc(g.explain)}</textarea></label>
          <label>Công thức<input name="pattern" value="${esc(g.pattern)}" placeholder="Chủ ngữ + 把 + Tân ngữ + V + Thành phần khác"></label>
          <label>Ví dụ <small class="muted">mỗi dòng: <code>中文 | pinyin | nghĩa</code></small>
            <textarea name="examples" rows="4" placeholder="我把功課寫完了。 | Wǒ bǎ gōngkè xiě wán le. | Tôi đã làm xong bài tập.">${esc(examplesToText(g.examples))}</textarea></label>
          <label>Bài tập <small class="muted">mỗi dòng một bài</small>
            <textarea name="exercises" rows="5" placeholder="? Tôi đã làm xong bài tập. | 我把功課寫完了。 | 我把寫完功課了。 | 把我功課寫完了。&#10;= 請 把 門 關 上 | Làm ơn đóng cửa lại.">${esc(exercisesToText(g.exercises))}</textarea></label>
          <details class="help"><summary>Cách viết bài tập</summary>
            <p><b>Trắc nghiệm:</b> bắt đầu bằng <code>?</code>, rồi câu hỏi, đáp án ĐÚNG, sau đó 1–3 đáp án sai, cách nhau bằng <code>|</code>. Thứ tự đáp án sẽ được xáo trộn.</p>
            <p><b>Sắp xếp câu:</b> bắt đầu bằng <code>=</code>, rồi câu tiếng Hoa với các từ cách nhau bằng dấu cách (đúng thứ tự), sau <code>|</code> là nghĩa tiếng Việt.</p>
          </details>
          <label>Đơn vị (để thi)<select name="unit">${unitOptions(g.unit)}</select></label>
          <div id="g-warn" class="warn"></div>
          <div class="row"><button class="btn primary" type="submit">${editing ? "Lưu thay đổi" : "Lưu ngữ pháp"}</button><button class="btn" type="button" id="fill-sample">Điền mẫu</button><a class="btn" href="#/mine/grammar">Hủy</a></div>
        </form>
        <div><h3>Xem trước</h3><div id="preview" class="gram"></div></div>
      </div>`;
    const f = document.getElementById("gf");
    function read() {
      const d = Object.fromEntries(new FormData(f));
      const ex = parseExercises(d.exercises);
      return { g: { id: editing ? editing.id : undefined, created: editing ? editing.created : undefined, title: d.title.trim(), explain: d.explain.trim(), pattern: d.pattern.trim(), examples: parseExamples(d.examples), exercises: ex.exercises, unit: +d.unit }, errors: ex.errors };
    }
    let timer;
    function update() {
      const { g, errors } = read();
      const simp = simplifiedChars(g.title + g.explain + g.pattern + g.examples.map((e) => e.zh).join("") + JSON.stringify(g.exercises));
      const w = errors.map((e) => "⚠️ " + esc(e));
      if (simp.length) w.push(`⚠️ Có chữ giản thể: ${simp.map(([s, t]) => `${s} → <b>${t}</b>`).join(", ")} <button type="button" class="btn small" id="fix-trad">Đổi tất cả sang phồn thể</button>`);
      document.getElementById("g-warn").innerHTML = w.join("<br>");
      const fix = document.getElementById("fix-trad");
      if (fix) fix.onclick = () => { ["title", "explain", "pattern", "examples", "exercises"].forEach((k) => (f[k].value = toTraditional(f[k].value))); update(); };
      clearTimeout(timer);
      timer = setTimeout(() => {
        document.getElementById("preview").innerHTML = g.title ? `<h2>${esc(g.title)}</h2>${UI.grammarBody(g, "pv")}` : '<p class="muted">Nhập tên điểm ngữ pháp để xem trước.</p>';
        if (g.title) UI.mountExercises(g, "pv");
      }, 250);
    }
    f.addEventListener("input", update);
    document.getElementById("fill-sample").onclick = () => {
      f.title.value = "把 + Tân ngữ + V + 完/好 — Câu chữ 把";
      f.explain.value = "Dùng 把 để đưa tân ngữ lên trước động từ, nhấn mạnh việc xử lý tân ngữ đó. Sau động từ phải có thành phần khác (完, 好, 了, 在…), không để động từ đứng trơ trọi.";
      f.pattern.value = "Chủ ngữ + 把 + Tân ngữ + V + 完 / 好 / 了";
      f.examples.value = "我把功課寫完了。 | Wǒ bǎ gōngkè xiě wán le. | Tôi đã làm xong bài tập.\n請把手機關好。 | Qǐng bǎ shǒujī guān hǎo. | Xin hãy tắt điện thoại.";
      f.exercises.value = "? Tôi đã ăn hết cơm. | 我把飯吃完了。 | 我把吃完飯了。 | 把我飯吃完了。\n= 他 把 咖啡 喝完 了 | Anh ấy đã uống hết cà phê.";
      update();
    };
    update();
    f.onsubmit = (e) => {
      e.preventDefault();
      const { g, errors } = read();
      if (!g.title || !g.explain) { UI.toast("Cần nhập tên và giải thích."); return; }
      if (errors.length) { UI.toast("Kiểm tra lại phần bài tập."); return; }
      saveGrammar(g);
      UI.toast(editing ? "Đã lưu thay đổi." : "Đã thêm điểm ngữ pháp.");
      location.hash = "#/mine/grammar";
    };
  }

  // Nhập nhanh nhiều từ
  function bulkView($t) {
    $t.innerHTML = `
      <section class="gram">
        <h2>Nhập nhanh nhiều từ</h2>
        <p>Mỗi dòng một từ, các cột cách nhau bằng <code>|</code>. Chỉ 3 cột đầu là bắt buộc. Dòng bắt đầu bằng <code>#</code> được bỏ qua.</p>
        <pre class="template"># chữ | pinyin | nghĩa | Hán-Việt | câu chuyện | câu ví dụ | pinyin ví dụ | nghĩa ví dụ
學習 | xue2 xi2 | học tập | HỌC TẬP | 學 = tay trao kiến thức cho trẻ; 習 = 羽 chim non tập bay | 我在臺灣學習中文。 | Wǒ zài Táiwān xuéxí Zhōngwén. | Tôi học tiếng Hoa ở Đài Loan.
便宜 | pian2 yi5 | rẻ | TIỆN NGHI</pre>
        <button class="btn small" id="copy-tpl">Dán mẫu vào ô bên dưới</button>
        <textarea id="bulk" rows="10" class="bulk" placeholder="Dán danh sách từ vào đây…"></textarea>
        <div class="row"><label>Đơn vị<select id="bulk-unit">${unitOptions(lastUnit())}</select></label><label class="check"><input type="checkbox" id="bulk-review" checked> Thêm vào ôn tập</label></div>
        <div id="bulk-out"></div>
        <div class="row"><button class="btn primary" id="bulk-save" disabled>Lưu</button></div>
      </section>`;
    const ta = document.getElementById("bulk");
    document.getElementById("copy-tpl").onclick = () => { ta.value = document.querySelector(".template").textContent.split("\n").slice(1).join("\n"); ta.dispatchEvent(new Event("input")); };
    let parsed = { words: [], errors: [] };
    const upd = () => {
      parsed = parseBulkWords(ta.value, +document.getElementById("bulk-unit").value);
      const simp = simplifiedChars(parsed.words.map((w) => w.hz + (w.ex ? w.ex.zh : "")).join(""));
      document.getElementById("bulk-out").innerHTML =
        (parsed.words.length ? `<p>✅ Đọc được <b>${parsed.words.length}</b> từ: ${parsed.words.map((w) => `<span class="chip">${UI.esc(w.hz)} <small>${UI.esc(w.zy)}</small></span>`).join(" ")}</p>` : "") +
        (simp.length ? `<p class="warn">⚠️ Có chữ giản thể: ${simp.map(([s, t]) => `${s} → <b>${t}</b>`).join(", ")} — sẽ được tự đổi sang phồn thể khi lưu.</p>` : "") +
        parsed.errors.map((e) => `<p class="warn">⚠️ ${UI.esc(e)}</p>`).join("");
      document.getElementById("bulk-save").disabled = !parsed.words.length;
    };
    ta.addEventListener("input", upd);
    document.getElementById("bulk-unit").onchange = upd;
    document.getElementById("bulk-save").onclick = () => {
      const have = new Set(pool().words.map((w) => w.hz));
      const fresh = [];
      parsed.words.forEach((w) => { w.hz = toTraditional(w.hz); if (w.ex) w.ex.zh = toTraditional(w.ex.zh); if (!have.has(w.hz)) { have.add(w.hz); saveWord(w); fresh.push(w); } });
      if (document.getElementById("bulk-review").checked) Store.addCards(fresh);
      const skipped = parsed.words.length - fresh.length;
      UI.toast(`Đã thêm ${fresh.length} từ.` + (skipped ? ` Bỏ qua ${skipped} từ đã có.` : "")); UI.updateNavBadge();
      location.hash = "#/mine/words";
    };
  }

  window.UserContent = { pool, saveWord, setDraft, pinyinToZhuyin, simplifiedChars, toTraditional, viewMine, viewWordForm, viewGrammarForm, parseExercises };
})();
