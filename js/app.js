// Ứng dụng chính: điều hướng theo hash (#/...) và các màn hình
(function () {
  const $app = document.getElementById("app");
  const S = () => Store.state.settings;

  // ── Tiện ích ──────────────────────────────────────────
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sample = (a, n) => shuffle(a).slice(0, n);
  const lessonById = (id) => LESSONS.find((l) => l.id === +id);
  const systemWords = () => LESSONS.flatMap((l) => l.vocab.map((w) => Object.assign({ lesson: l.id, unit: l.unit }, w)));
  const userWords = () => UserContent.pool().words.map((w) => Object.assign({ mine: true }, w));
  const allWords = () => systemWords().concat(userWords());
  const wordByHz = (hz) => userWords().find((w) => w.hz === hz) || systemWords().find((w) => w.hz === hz);

  function toneOf(syl) {
    if (syl.startsWith("˙")) return 5;
    if (syl.includes("ˊ")) return 2;
    if (syl.includes("ˇ")) return 3;
    if (syl.includes("ˋ")) return 4;
    return 1;
  }
  // Chữ Hán tô màu theo thanh điệu
  function hanziHTML(w) {
    const syls = w.zy.split(" ");
    return [...w.hz].map((ch, i) => `<span class="t${syls[i] ? toneOf(syls[i]) : 0}">${ch}</span>`).join("");
  }
  function readingHTML(w) {
    let out = "";
    if (S().showZhuyin) out += `<span class="zy">${esc(w.zy)}</span>`;
    if (S().showPinyin) out += `<span class="py">${esc(w.py)}</span>`;
    return out;
  }
  const playBtn = (text, label = "🔊") => `<button class="play" data-say="${esc(text)}" title="Nghe">${label}</button>`;
  function exampleHTML(e) {
    return `<div class="ex">${playBtn(e.zh)}<div><div class="ex-zh">${esc(e.zh)}</div>${S().showPinyin ? `<div class="ex-py">${esc(e.py)}</div>` : ""}<div class="ex-vi">${esc(e.vi)}</div></div></div>`;
  }

  // Bấm nút 🔊 ở bất kỳ đâu
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-say]");
    if (b) { e.preventDefault(); if (!Speech.speak(b.dataset.say)) toast("Trình duyệt không hỗ trợ đọc giọng nói."); }
  });

  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2600);
  }

  // ── Tiến độ ───────────────────────────────────────────
  function grammarTotal(l) { return l.grammar.reduce((n, g) => n + g.exercises.length, 0); }
  function lessonProgress(l) {
    const st = Store.lesson(l.id);
    const inDeck = l.vocab.filter((w) => Store.state.cards[w.hz]).length;
    const gDone = Object.keys(st.grammar).length;
    const gTot = grammarTotal(l);
    const pct = Math.round(((inDeck / l.vocab.length) * 0.4 + (gDone / gTot) * 0.4 + (st.pronDone ? 0.2 : 0)) * 100);
    return { inDeck, gDone, gTot, pron: st.pronDone, pct };
  }

  function updateNavBadge() {
    const n = Store.dueCards().length;
    const b = document.getElementById("due-badge");
    if (b) { b.textContent = n; b.hidden = n === 0; }
  }

  // ── Router ────────────────────────────────────────────
  const routes = [
    [/^#?\/?$/, viewHome],
    [/^#\/lesson\/(\d+)(?:\/(\w+))?$/, viewLesson],
    [/^#\/review$/, viewReview],
    [/^#\/exam\/(\d+)$/, (u) => Exam.viewExam(+u)],
    [/^#\/mock$/, () => Exam.viewExam("all")],
    [/^#\/mine\/word\/([\w-]+)$/, (id) => UserContent.viewWordForm(id)],
    [/^#\/mine\/grammar\/([\w-]+)$/, (id) => UserContent.viewGrammarForm(id)],
    [/^#\/mine(?:\/(words|grammar|bulk|scan))?$/, (t) => UserContent.viewMine(t || "words")],
    [/^#\/zhuyin$/, viewZhuyin],
    [/^#\/words$/, viewWords],
    [/^#\/settings$/, viewSettings]
  ];
  function render() {
    const h = location.hash || "#/";
    document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("active", h === a.getAttribute("href")));
    for (const [re, fn] of routes) {
      const m = h.match(re);
      if (m) { window.scrollTo(0, 0); fn(...m.slice(1)); updateNavBadge(); return; }
    }
    location.hash = "#/";
  }
  window.addEventListener("hashchange", render);

  // ── Trang chủ / bảng tiến độ ──────────────────────────
  function viewHome() {
    const due = Store.dueCards().length;
    const total = Object.keys(Store.state.cards).length;
    const todayCount = Store.state.log[Store.today()] || 0;
    const mature = Object.values(Store.state.cards).filter((c) => c.interval >= 21).length;

    let html = `
      <section class="hero">
        <div>
          <h1>學中文 <small>Học tiếng Hoa phồn thể — luyện thi TOCFL</small></h1>
          <p class="muted">Mỗi bài: Từ vựng → Ngữ pháp → Phát âm → Thẻ ghi nhớ. Cứ 5 bài có một bài thi.</p>
        </div>
        <a class="btn big ${due ? "primary" : ""}" href="#/review">${due ? `Ôn ${due} thẻ hôm nay` : "Không có thẻ cần ôn 🎉"}</a>
      </section>
      <section class="stats">
        <div class="stat"><b>${due}</b><span>thẻ đến hạn</span></div>
        <div class="stat"><b>${todayCount}</b><span>lượt ôn hôm nay</span></div>
        <div class="stat"><b>${Store.streak()}</b><span>ngày liên tiếp 🔥</span></div>
        <div class="stat"><b>${total}</b><span>từ đang học (${mature} đã thuộc)</span></div>
      </section>
      ${activityHTML()}
      <div class="grid top-tiles">
        <a class="card exam-card" href="#/mock"><div class="lc-top"><span class="tag exam">Thi thử</span></div>
          <div class="lc-title">TOCFL 模擬考</div><div class="lc-sub">Đề thi thử Band A (A2): Nghe 4 phần + Đọc 5 phần, trộn kho mặc định và kho của bạn</div>
          <div class="lc-meta">${examMeta(Store.state.exams.all)}</div></a>
        <a class="card" href="#/mine"><div class="lc-top"><span class="tag">Của tôi</span></div>
          <div class="lc-title">我的內容</div><div class="lc-sub">Từ vựng & ngữ pháp bạn tự thêm</div>
          <div class="lc-meta">📖 ${UserContent.pool().words.length} từ · ✏️ ${UserContent.pool().grammar.length} điểm ngữ pháp</div></a>
      </div>`;

    for (const u of UNITS) {
      const ex = Store.state.exams[u.id];
      html += `<h2>${esc(u.title)}</h2><div class="grid">`;
      for (const id of u.lessons) {
        const l = lessonById(id);
        if (!l) continue;
        const p = lessonProgress(l);
        html += `
          <a class="card lesson-card" href="#/lesson/${l.id}">
            <div class="lc-top"><span class="tag">Bài ${l.id}</span><span class="tag">${l.level || "A1"}</span>${p.pct === 100 ? '<span class="tag ok">Hoàn thành</span>' : ""}</div>
            <div class="lc-title">${esc(l.title)}</div>
            <div class="lc-sub">${esc(l.titleVi)}</div>
            <div class="bar"><i style="width:${p.pct}%"></i></div>
            <div class="lc-meta">📇 ${p.inDeck}/${l.vocab.length} từ · ✏️ ${p.gDone}/${p.gTot} bài tập · 🗣️ ${p.pron ? "✓" : "–"}</div>
          </a>`;
      }
      html += `
          <a class="card exam-card" href="#/exam/${u.id}">
            <div class="lc-top"><span class="tag exam">Bài thi</span>${ex && ex.passed ? '<span class="tag ok">Đạt</span>' : ""}</div>
            <div class="lc-title">測驗 ${u.id}</div>
            <div class="lc-sub">Kiểm tra bài ${u.lessons[0]}–${u.lessons[u.lessons.length - 1]} (dạng TOCFL)</div>
            <div class="lc-meta">${examMeta(ex)}</div>
          </a>
        </div>`;
    }
    $app.innerHTML = html;
  }

  function examMeta(ex) {
    if (!ex || !ex.attempts) return "Chưa thi";
    const l = ex.last || {};
    return `Lần gần nhất: Nghe <b>${l.listening ?? "–"}</b> · Đọc <b>${l.reading ?? "–"}</b> /80 · ${ex.attempts} lần thi`;
  }
  function activityHTML() {
    const days = [];
    const d = new Date();
    d.setDate(d.getDate() - 27);
    for (let i = 0; i < 28; i++) {
      const k = d.toLocaleDateString("sv");
      const n = Store.state.log[k] || 0;
      const lvl = n === 0 ? 0 : n < 10 ? 1 : n < 30 ? 2 : 3;
      days.push(`<i class="l${lvl}" title="${k}: ${n} lượt ôn"></i>`);
      d.setDate(d.getDate() + 1);
    }
    return `<section class="activity"><span class="muted">4 tuần qua</span><div class="heat">${days.join("")}</div></section>`;
  }

  // ── Bài học ───────────────────────────────────────────
  function viewLesson(id, tab = "vocab") {
    const l = lessonById(id);
    if (!l) { location.hash = "#/"; return; }
    const tabs = [["vocab", "📖 Từ vựng"], ["grammar", "✏️ Ngữ pháp"], ["pron", "🗣️ Phát âm"], ["cards", "📇 Thẻ ghi nhớ"]];
    const prev = lessonById(l.id - 1), next = lessonById(l.id + 1);
    $app.innerHTML = `
      <div class="crumbs"><a href="#/">Trang chủ</a> › Bài ${l.id}</div>
      <header class="lesson-head">
        <div><h1>第${l.id}課 ${esc(l.title)}</h1><p class="lc-sub">${esc(l.titleVi)}</p><p class="muted">🎯 ${esc(l.goal)}</p></div>
        <div class="pager">${prev ? `<a class="btn" href="#/lesson/${prev.id}">← Bài ${prev.id}</a>` : ""}${next ? `<a class="btn" href="#/lesson/${next.id}">Bài ${next.id} →</a>` : `<a class="btn" href="#/exam/${l.unit}">Bài thi →</a>`}</div>
      </header>
      <nav class="tabs">${tabs.map(([k, t]) => `<a href="#/lesson/${l.id}/${k}" class="${k === tab ? "active" : ""}">${t}</a>`).join("")}</nav>
      <div id="tab"></div>`;
    const $t = document.getElementById("tab");
    ({ vocab: tabVocab, grammar: tabGrammar, pron: tabPron, cards: tabCards }[tab] || tabVocab)(l, $t);
  }

  function wordCardHTML(w, i, extra = "") {
    return `
      <article class="word">
        <div class="word-main">
          <div class="hz">${hanziHTML(w)}</div>
          <div class="reading">${readingHTML(w)}</div>
          <div class="word-btns">${playBtn(w.hz)}<button class="btn small stroke" data-i="${i}" title="Xem thứ tự nét">✍️ Nét</button>${extra}</div>
        </div>
        <div class="word-body">
          <div class="vi">${esc(w.vi)}</div>
          ${w.hv ? `<div class="hv">Hán-Việt: <b>${esc(w.hv)}</b></div>` : ""}
          ${w.story ? `<div class="story"><span>💡 Ghi nhớ</span> ${esc(w.story)}</div>` : ""}
          ${w.ex && w.ex.zh ? exampleHTML(w.ex) : ""}
          <div class="stroke-box" id="stroke-${i}"></div>
        </div>
      </article>`;
  }

  function tabVocab(l, $t) {
    const notIn = l.vocab.filter((w) => !Store.state.cards[w.hz]).length;
    $t.innerHTML = `
      <div class="toolbar">
        <span class="muted">${l.vocab.length} từ · màu chữ = thanh điệu:
          <span class="t1">1</span> <span class="t2">2</span> <span class="t3">3</span> <span class="t4">4</span> <span class="t5">nhẹ</span></span>
        ${notIn ? `<button class="btn primary" id="add-all">＋ Thêm ${notIn} từ vào ôn tập</button>` : `<span class="tag ok">Đã thêm tất cả vào ôn tập</span>`}
      </div>
      <div class="words">${l.vocab.map((w, i) => wordCardHTML(w, i)).join("")}</div>
      <div class="next-step"><a class="btn primary" href="#/lesson/${l.id}/grammar">Tiếp theo: Ngữ pháp →</a></div>`;
    const add = document.getElementById("add-all");
    if (add) add.onclick = () => {
      const n = Store.addCards(l.vocab);
      Store.lesson(l.id).vocabSeen = true; Store.save();
      toast(`Đã thêm ${n} thẻ. Vào mục Ôn tập để học!`);
      tabVocab(l, $t); updateNavBadge();
    };
    bindStrokes($t, l.vocab, "");
  }
  function bindStrokes($t, words, prefix) {
    $t.querySelectorAll(".stroke").forEach((b) => (b.onclick = () => {
      const idx = String(b.dataset.i).slice(prefix.length);
      showStrokes(words[idx].hz, document.getElementById("stroke-" + b.dataset.i));
    }));
  }

  // Thứ tự nét bằng thư viện Hanzi Writer (cần Internet)
  let hwPromise;
  function loadHanziWriter() {
    if (window.HanziWriter) return Promise.resolve();
    if (!hwPromise) hwPromise = new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = "vendor/hanzi-writer/hanzi-writer.min.js"; // thư viện đi kèm, không cần Internet
      s.onload = res; s.onerror = () => { hwPromise = null; rej(); };
      document.head.appendChild(s);
    });
    return hwPromise;
  }
  // Dữ liệu nét: ưu tiên file đi kèm (vendor/strokes), nếu chưa có thì tải từ CDN (cần Internet)
  let strokesPromise;
  function loadStrokeBundle() {
    if (window.STROKES) return Promise.resolve();
    if (!strokesPromise) strokesPromise = new Promise((res) => {
      const sc = document.createElement("script");
      sc.src = "vendor/strokes.js?v=" + (document.querySelector('script[src*="app.js"]').src.split("v=")[1] || "");
      sc.onload = res; sc.onerror = res;
      document.head.appendChild(sc);
    });
    return strokesPromise;
  }
  function strokeData(ch, onLoad, onError) {
    loadStrokeBundle()
      .then(() => (window.STROKES && window.STROKES[ch] ? window.STROKES[ch] : Promise.reject()))
      .catch(() => fetch(`https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/${encodeURIComponent(ch)}.json`).then((r) => (r.ok ? r.json() : Promise.reject())))
      .then(onLoad, onError);
  }
  function showStrokes(hz, box) {
    if (box.childElementCount) { box.innerHTML = ""; return; }
    box.innerHTML = '<span class="muted">Đang tải…</span>';
    loadHanziWriter().then(() => {
      box.innerHTML = "";
      const writers = [...hz].map((ch) => {
        const d = document.createElement("div");
        d.className = "stroke-char"; box.appendChild(d);
        return HanziWriter.create(d, ch, {
          width: 110, height: 110, padding: 6, showOutline: true, strokeAnimationSpeed: 1, delayBetweenStrokes: 250,
          strokeColor: getComputedStyle(document.body).getPropertyValue("--ink").trim() || "#222",
          charDataLoader: strokeData,
          onLoadCharDataError: () => { d.innerHTML = `<span class="muted">Không có dữ liệu nét cho ${ch}</span>`; }
        });
      });
      let p = Promise.resolve();
      writers.forEach((w) => (p = p.then(() => new Promise((r) => w.animateCharacter({ onComplete: r })))));
      const again = document.createElement("button");
      again.className = "btn small"; again.textContent = "↻ Xem lại";
      again.onclick = () => { box.innerHTML = ""; showStrokes(hz, box); };
      box.appendChild(again);
    }).catch(() => { box.innerHTML = '<span class="muted">Không tải được thư viện thứ tự nét.</span>'; });
  }

  // ── Bài tập (dùng cho cả Ngữ pháp và Bài thi) ─────────
  function renderMC(el, ex, onResult) {
    el.innerHTML = `<div class="q">${esc(ex.q)}</div>${ex.say ? `<div class="listen">${playBtn(ex.say, "🔊 Nghe")}</div>` : ""}
      <div class="choices">${ex.choices.map((c, i) => `<button class="choice" data-i="${i}">${esc(c)}</button>`).join("")}</div><div class="fb"></div>`;
    if (ex.say) setTimeout(() => Speech.speak(ex.say), 300);
    el.querySelectorAll(".choice").forEach((b) => (b.onclick = () => {
      if (el.dataset.done) return;
      el.dataset.done = 1;
      const ok = +b.dataset.i === ex.answer;
      b.classList.add(ok ? "right" : "wrong");
      el.querySelectorAll(".choice")[ex.answer].classList.add("right");
      el.querySelector(".fb").innerHTML = (ok ? "✅ Chính xác!" : "❌ Chưa đúng.") + (ex.explain ? ` <span class="muted">${esc(ex.explain)}</span>` : "");
      onResult && onResult(ok);
    }));
  }

  function renderOrder(el, ex, onResult, silent) {
    let picked = [];
    let pool = shuffle(ex.words.map((w, i) => ({ w, i })));
    if (pool.every((p, k) => p.i === k) && pool.length > 1) pool.reverse();
    const answer = ex.words.join("");
    function draw() {
      el.innerHTML = `<div class="q">Sắp xếp thành câu: <b>${esc(ex.vi)}</b></div>
        <div class="order-line">${picked.map((p, k) => `<button class="tile in" data-k="${k}">${esc(p.w)}</button>`).join("") || '<span class="muted">Bấm vào các từ bên dưới…</span>'}</div>
        <div class="order-pool">${pool.map((p, k) => `<button class="tile" data-k="${k}">${esc(p.w)}</button>`).join("")}</div>
        <div class="row"><button class="btn primary check" ${pool.length ? "disabled" : ""}>Kiểm tra</button></div><div class="fb"></div>`;
      el.querySelectorAll(".order-pool .tile").forEach((b) => (b.onclick = () => { picked.push(pool.splice(+b.dataset.k, 1)[0]); draw(); }));
      el.querySelectorAll(".order-line .tile").forEach((b) => (b.onclick = () => { pool.push(picked.splice(+b.dataset.k, 1)[0]); draw(); }));
      el.querySelector(".check").onclick = () => {
        const ok = picked.map((p) => p.w).join("") === answer;
        el.querySelectorAll(".tile, .check").forEach((b) => (b.disabled = true));
        if (silent) { el.querySelector(".fb").innerHTML = '<span class="muted">Đã ghi nhận câu trả lời.</span>'; onResult && onResult(ok); return; }
        el.querySelector(".order-line").classList.add(ok ? "right" : "wrong");
        el.querySelector(".fb").innerHTML = (ok ? "✅ Chính xác! " : `❌ Đáp án: <b>${esc(ex.words.join(" "))}</b> `) + playBtn(answer + "。");
        Speech.speak(answer);
        onResult && onResult(ok);
      };
    }
    draw();
  }
  const renderExercise = (el, ex, cb) => (ex.type === "order" ? renderOrder : renderMC)(el, ex, cb);

  function grammarBody(g, key, doneMap = {}) {
    return `
        <p>${esc(g.explain)}</p>
        ${g.pattern ? `<div class="pattern">${esc(g.pattern)}</div>` : ""}
        ${(g.examples || []).map(exampleHTML).join("")}
        ${g.exercises && g.exercises.length ? "<h3>Bài tập</h3>" : ""}
        ${(g.exercises || []).map((e, ei) => `<div class="exercise ${doneMap[ei] ? "was-done" : ""}" id="ex-${key}-${ei}"></div>`).join("")}`;
  }
  function mountExercises(g, key, onCorrect) {
    (g.exercises || []).forEach((e, ei) => {
      const el = document.getElementById(`ex-${key}-${ei}`);
      if (!el) return;
      const wrap = () => {
        renderExercise(el, e, (ok) => {
          if (ok && onCorrect) onCorrect(ei);
          const r = document.createElement("button");
          r.className = "btn small retry"; r.textContent = "↻ Làm lại";
          r.onclick = () => { delete el.dataset.done; wrap(); };
          el.appendChild(r);
        });
      };
      wrap();
    });
  }
  function tabGrammar(l, $t) {
    const st = Store.lesson(l.id);
    $t.innerHTML = l.grammar.map((g, gi) => {
      const done = {}; g.exercises.forEach((_, ei) => (done[ei] = st.grammar[`g${gi}e${ei}`]));
      return `<section class="gram"><h2>${gi + 1}. ${esc(g.title)}</h2>${grammarBody(g, gi, done)}</section>`;
    }).join("") + `<div class="next-step"><a class="btn primary" href="#/lesson/${l.id}/pron">Tiếp theo: Phát âm →</a></div>`;
    l.grammar.forEach((g, gi) => mountExercises(g, gi, (ei) => { st.grammar[`g${gi}e${ei}`] = true; Store.save(); }));
  }

  // ── Phát âm ───────────────────────────────────────────
  function tabPron(l, $t) {
    const p = l.pron;
    $t.innerHTML = `
      <section class="gram">
        <h2>${esc(p.title)}</h2>
        <p>${esc(p.explain)}</p>
        <ul class="tips">${p.tips.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        <h3>Luyện nghe & đọc theo</h3>
        <div class="drills">${p.drills.map((d) => `
          <button class="drill" data-say="${esc(d.zh)}"><span class="hz-s">${hanziHTML({ hz: d.zh, zy: d.zy })}</span><span class="zy">${esc(d.zy)}</span><span class="py">${esc(d.py)}</span><small>${esc(d.note)}</small></button>`).join("")}
        </div>
        <p class="muted">Mẹo: bấm nghe, rồi đọc to theo 3 lần. Xem <a href="#/zhuyin">bảng chú âm đầy đủ</a>.</p>
        <h3>Trắc nghiệm thanh điệu</h3>
        <div id="tone-quiz" class="exercise"></div>
      </section>
      <div class="next-step"><a class="btn primary" href="#/lesson/${l.id}/cards">Tiếp theo: Thẻ ghi nhớ →</a></div>`;
    toneQuiz(l, document.getElementById("tone-quiz"));
  }

  function toneQuiz(l, el) {
    const items = sample(l.pron.toneQuiz, 10);
    let i = 0, score = 0;
    function start() {
      el.innerHTML = `<p>Nghe ${items.length} chữ và chọn đúng thanh điệu. ${Store.lesson(l.id).pronDone ? '<span class="tag ok">Đã đạt</span>' : "Cần đúng 7/10 để hoàn thành."}</p><button class="btn primary">Bắt đầu</button>`;
      el.querySelector("button").onclick = q;
    }
    function q() {
      if (i >= items.length) {
        const pass = score >= 7;
        if (pass) { Store.lesson(l.id).pronDone = true; Store.save(); }
        el.innerHTML = `<p class="big-score">${score}/${items.length}</p><p>${pass ? "🎉 Tốt lắm! Đã hoàn thành phần phát âm." : "Luyện thêm một chút nhé!"}</p><button class="btn">↻ Làm lại</button>`;
        el.querySelector("button").onclick = () => { i = 0; score = 0; items.splice(0, items.length, ...sample(l.pron.toneQuiz, 10)); q(); };
        return;
      }
      const [ch, tone] = items[i];
      el.innerHTML = `<div class="q">Câu ${i + 1}/${items.length}: chữ này mang thanh mấy?</div>
        <div class="listen">${playBtn(ch, "🔊 Nghe lại")}</div>
        <div class="choices tones">${[1, 2, 3, 4].map((t) => `<button class="choice" data-t="${t}">Thanh ${t} <small>${["", "ˉ", "ˊ", "ˇ", "ˋ"][t]}</small></button>`).join("")}</div><div class="fb"></div>`;
      setTimeout(() => Speech.speak(ch), 250);
      el.querySelectorAll(".choice").forEach((b) => (b.onclick = () => {
        if (el.dataset.lock) return;
        el.dataset.lock = 1;
        const ok = +b.dataset.t === tone;
        if (ok) score++;
        b.classList.add(ok ? "right" : "wrong");
        el.querySelector(`[data-t="${tone}"]`).classList.add("right");
        const w = wordByHz(ch);
        el.querySelector(".fb").innerHTML = `${ok ? "✅" : "❌"} <b class="t${tone}">${ch}</b> — thanh ${tone}${w ? ` · ${esc(w.vi)}` : ""}`;
        setTimeout(() => { delete el.dataset.lock; i++; q(); }, 1300);
      }));
    }
    start();
  }

  // ── Thẻ ghi nhớ trong bài (lật xem, không chấm điểm) ──
  function tabCards(l, $t) {
    let i = 0, flipped = false;
    const notIn = l.vocab.filter((w) => !Store.state.cards[w.hz]).length;
    function draw() {
      const w = l.vocab[i];
      $t.innerHTML = `
        <p class="muted">Lật thẻ để tự kiểm tra từ của bài này. Để ghi nhớ lâu dài, hãy thêm vào <a href="#/review">Ôn tập</a> — hệ thống sẽ nhắc bạn đúng lúc sắp quên.</p>
        ${flashcardHTML(w, flipped)}
        <div class="row center">
          <button class="btn" id="prev">←</button><span>${i + 1} / ${l.vocab.length}</span><button class="btn" id="next">→</button>
        </div>
        <div class="row center">${notIn ? `<button class="btn primary" id="add-all">＋ Thêm ${notIn} từ vào ôn tập</button>` : '<a class="btn primary" href="#/review">Đi ôn tập →</a>'}</div>`;
      $t.querySelector(".flash").onclick = (e) => { if (!e.target.closest("[data-say]")) { flipped = !flipped; draw(); } };
      $t.querySelector("#prev").onclick = () => { i = (i - 1 + l.vocab.length) % l.vocab.length; flipped = false; draw(); };
      $t.querySelector("#next").onclick = () => { i = (i + 1) % l.vocab.length; flipped = false; draw(); };
      const add = $t.querySelector("#add-all");
      if (add) add.onclick = () => { const n = Store.addCards(l.vocab); toast(`Đã thêm ${n} thẻ.`); updateNavBadge(); tabCards(l, $t); };
    }
    draw();
  }

  function flashcardHTML(w, flipped) {
    const frontVi = S().cardFront === "vi";
    const front = frontVi
      ? `<div class="f-vi">${esc(w.vi)}</div>`
      : `<div class="hz big">${hanziHTML(w)}</div>`;
    const back = `
      <div class="hz big">${hanziHTML(w)}</div>
      <div class="reading">${readingHTML(w)}</div>
      <div class="vi">${esc(w.vi)}</div>
      <div class="hv">Hán-Việt: <b>${esc(w.hv)}</b></div>
      <div class="story"><span>💡</span> ${esc(w.story)}</div>
      ${w.ex ? exampleHTML(w.ex) : ""}`;
    return `<div class="flash ${flipped ? "flipped" : ""}">
      <div class="flash-say">${playBtn(w.hz)}</div>
      ${flipped ? back : front + '<div class="muted hint">Bấm vào thẻ (hoặc phím Space) để lật</div>'}
    </div>`;
  }

  // ── Ôn tập lặp lại ngắt quãng ─────────────────────────
  let reviewKeyHandler = null;
  function viewReview() {
    const queue = shuffle(Store.dueCards());
    let flipped = false, done = 0;
    if (reviewKeyHandler) document.removeEventListener("keydown", reviewKeyHandler);

    function finish() {
      const upcoming = Object.values(Store.state.cards).map((c) => c.due).sort((a, b) => a - b)[0];
      const total = Object.keys(Store.state.cards).length;
      $app.innerHTML = `<div class="center-box">
        <h1>${done ? "🎉 Xong rồi!" : "Không có thẻ nào đến hạn"}</h1>
        ${done ? `<p>Bạn đã ôn ${done} lượt hôm nay.</p>` : ""}
        ${total ? `<p class="muted">Thẻ tiếp theo đến hạn: ${new Date(upcoming).toLocaleString("vi-VN")}</p>` : `<p>Chưa có thẻ nào. Vào một bài học và bấm <b>＋ Thêm từ vào ôn tập</b>.</p>`}
        <a class="btn primary" href="#/">Về trang chủ</a></div>`;
      updateNavBadge();
    }
    function draw() {
      if (!queue.length) return finish();
      const hz = queue[0];
      const w = wordByHz(hz);
      if (!w) { queue.shift(); return draw(); }
      const lbl = (r) => Store.nextIntervalLabel(hz, r);
      $app.innerHTML = `
        <div class="crumbs"><a href="#/">Trang chủ</a> › Ôn tập · còn <b>${queue.length}</b> thẻ · ${w.mine ? "Của tôi" : "Bài " + w.lesson}</div>
        ${flashcardHTML(w, flipped)}
        ${flipped ? `<div class="rate">
            <button class="r0" data-r="0">Quên<small>${lbl(0)}</small></button>
            <button class="r1" data-r="1">Khó<small>${lbl(1)}</small></button>
            <button class="r2" data-r="2">Được<small>${lbl(2)}</small></button>
            <button class="r3" data-r="3">Dễ<small>${lbl(3)}</small></button>
          </div><p class="muted center">Phím tắt: 1 2 3 4</p>`
          : `<div class="row center"><button class="btn primary big" id="show">Hiện đáp án</button></div>`}`;
      if (flipped) Speech.speak(w.hz);
      $app.querySelector(".flash").onclick = (e) => { if (!flipped && !e.target.closest("[data-say]")) { flipped = true; draw(); } };
      const s = document.getElementById("show");
      if (s) s.onclick = () => { flipped = true; draw(); };
      $app.querySelectorAll(".rate button").forEach((b) => (b.onclick = () => rate(+b.dataset.r)));
    }
    function rate(r) {
      const hz = queue.shift();
      Store.review(hz, r);
      done++;
      if (r === 0) queue.splice(Math.min(queue.length, 3), 0, hz); // gặp lại sau vài thẻ
      flipped = false;
      updateNavBadge();
      draw();
    }
    reviewKeyHandler = (e) => {
      if (location.hash !== "#/review" || !queue.length) return;
      if (e.code === "Space" && !flipped) { e.preventDefault(); flipped = true; draw(); }
      else if (flipped && ["1", "2", "3", "4"].includes(e.key)) rate(+e.key - 1);
    };
    document.addEventListener("keydown", reviewKeyHandler);
    draw();
  }

  // Phím Space lật thẻ trong tab Thẻ ghi nhớ
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && /\/cards$/.test(location.hash)) { const f = document.querySelector(".flash"); if (f) { e.preventDefault(); f.click(); } }
  });

  // ── Bảng chú âm ───────────────────────────────────────
  function viewZhuyin() {
    const group = (title, rows) => `<h2>${title}</h2><div class="zy-grid">${rows.map(([sym, py, ch, zy, note]) => `
      <button class="zy-cell" data-say="${esc(ch)}"><b>${esc(sym)}</b><span class="py">${esc(py)}</span><span class="ex-ch">${esc(ch)} <small>${esc(zy)}</small></span><small class="muted">${esc(note)}</small></button>`).join("")}</div>`;
    $app.innerHTML = `
      <div class="crumbs"><a href="#/">Trang chủ</a> › Bảng chú âm</div>
      <h1>注音符號 — Bảng chú âm (ㄅㄆㄇ)</h1>
      <p>Ở Đài Loan, người ta học phát âm bằng chú âm thay vì pinyin. Có 37 ký hiệu + 5 dấu thanh. Bấm vào ô để nghe chữ ví dụ.</p>
      ${group("Thanh điệu", ZHUYIN.tones)}
      ${group("Phụ âm đầu (聲母)", ZHUYIN.initials)}
      ${group("Âm giữa (介音)", ZHUYIN.medials)}
      ${group("Vần (韻母)", ZHUYIN.finals)}`;
  }

  // ── Danh sách từ ──────────────────────────────────────
  function viewWords() {
    $app.innerHTML = `
      <div class="crumbs"><a href="#/">Trang chủ</a> › Tất cả từ vựng</div>
      <h1>Từ vựng</h1>
      <input id="search" class="search" placeholder="Tìm chữ Hán, pinyin, chú âm hoặc nghĩa tiếng Việt…" autofocus>
      <table class="wordlist"><thead><tr><th></th><th>Chữ</th><th>Phát âm</th><th>Nghĩa</th><th>Hán-Việt</th><th>Bài</th><th>Ôn tập</th></tr></thead><tbody id="rows"></tbody></table>`;
    const words = allWords();
    const strip = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").toLowerCase();
    function draw(q) {
      const k = strip(q || "");
      const rows = words.filter((w) => !k || strip(w.hz + w.py + w.zy + w.vi + w.hv).includes(k));
      document.getElementById("rows").innerHTML = rows.map((w) => {
        const c = Store.state.cards[w.hz];
        const st = !c ? "–" : c.interval >= 21 ? "✅ Thuộc" : c.reps ? `${Math.round(c.interval)} ngày` : "Mới";
        return `<tr><td>${playBtn(w.hz)}</td><td class="hz-s">${hanziHTML(w)}</td><td>${readingHTML(w)}</td><td>${esc(w.vi)}</td><td>${esc(w.hv)}</td><td>${w.mine ? '<a href="#/mine">Của tôi</a>' : `<a href="#/lesson/${w.lesson}">${w.lesson}</a>`}</td><td>${st}</td></tr>`;
      }).join("") || '<tr><td colspan="7" class="muted">Không tìm thấy.</td></tr>';
    }
    document.getElementById("search").oninput = (e) => draw(e.target.value);
    draw("");
  }

  // ── Cài đặt ───────────────────────────────────────────
  function viewSettings() {
    const s = S();
    $app.innerHTML = `
      <div class="crumbs"><a href="#/">Trang chủ</a> › Cài đặt</div>
      <h1>Cài đặt</h1>
      <section class="gram settings">
        <label><input type="checkbox" id="zy" ${s.showZhuyin ? "checked" : ""}> Hiện chú âm (ㄅㄆㄇ)</label>
        <label><input type="checkbox" id="py" ${s.showPinyin ? "checked" : ""}> Hiện pinyin</label>
        <label>Mặt trước thẻ ghi nhớ:
          <select id="front"><option value="hanzi" ${s.cardFront === "hanzi" ? "selected" : ""}>Chữ Hán → nghĩa</option><option value="vi" ${s.cardFront === "vi" ? "selected" : ""}>Nghĩa tiếng Việt → chữ Hán</option></select></label>
        <label>Tốc độ đọc: <input type="range" id="rate" min="0.5" max="1.2" step="0.05" value="${s.rate}"> <span id="rate-v">${s.rate}</span> ${playBtn("你好，我是越南人。", "🔊 Thử")}</label>
        <p class="muted" id="voice"></p>
      </section>
      <section class="gram settings">
        <h2>Sao lưu tiến độ</h2>
        <p class="muted">Tiến độ được lưu trong trình duyệt này. Hãy xuất file để sao lưu hoặc chuyển sang máy khác.</p>
        <div class="row"><button class="btn" id="exp">⬇️ Xuất file</button><label class="btn">⬆️ Nhập file<input type="file" id="imp" accept=".json" hidden></label><button class="btn danger" id="reset">Xóa toàn bộ tiến độ</button></div>
      </section>`;
    const setV = () => (document.getElementById("voice").textContent = Speech.voiceName ? `Giọng đọc: ${Speech.voiceName}` : "⚠️ Không tìm thấy giọng tiếng Hoa. Hãy dùng Chrome/Edge, hoặc cài giọng 'Chinese (Taiwan)' trong hệ điều hành.");
    setV(); document.addEventListener("voiceschanged", setV, { once: true });
    const upd = (k, v) => { s[k] = v; Store.save(); };
    document.getElementById("zy").onchange = (e) => upd("showZhuyin", e.target.checked);
    document.getElementById("py").onchange = (e) => upd("showPinyin", e.target.checked);
    document.getElementById("front").onchange = (e) => upd("cardFront", e.target.value);
    document.getElementById("rate").oninput = (e) => { upd("rate", +e.target.value); document.getElementById("rate-v").textContent = e.target.value; };
    document.getElementById("exp").onclick = () => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([Store.exportJSON()], { type: "application/json" }));
      a.download = `tocfl-tien-do-${Store.today()}.json`; a.click();
    };
    document.getElementById("imp").onchange = (e) => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then((t) => { try { Store.importJSON(t); toast("Đã nhập tiến độ!"); } catch (err) { toast("File không hợp lệ."); } });
    };
    document.getElementById("reset").onclick = () => {
      const b = document.getElementById("reset");
      if (b.dataset.confirm) { Store.reset(); toast("Đã xóa tiến độ."); location.hash = "#/"; }
      else { b.dataset.confirm = 1; b.textContent = "Bấm lần nữa để xác nhận xóa"; }
    };
  }

  window.UI = { esc, shuffle, sample, hanziHTML, readingHTML, playBtn, exampleHTML, wordCardHTML, bindStrokes, grammarBody, mountExercises,
    renderExercise, renderMC, renderOrder, toast, updateNavBadge, allWords, systemWords, userWords, wordByHz, lessonById };
  render();
})();
