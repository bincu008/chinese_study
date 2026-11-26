// Lưu tiến độ học trong localStorage + thuật toán lặp lại ngắt quãng (SM-2 rút gọn)
(function () {
  const KEY = "tocfl-study-v1";
  const DAY = 24 * 60 * 60 * 1000;

  const defaults = () => ({
    settings: { showZhuyin: true, showPinyin: true, rate: 0.8, cardFront: "hanzi", newPerDay: 20 },
    cards: {},        // hz -> { ease, interval, due, reps, lapses, added }
    lessons: {},      // id -> { vocabSeen: bool, grammar: {exKey: true}, pronDone: bool }
    exams: {},        // unitId -> { best, last, attempts, history: [{date, score}] }
    log: {}           // "YYYY-MM-DD" -> number of reviews
  });

  let state;
  try {
    state = Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || "{}"));
    state.settings = Object.assign(defaults().settings, state.settings);
  } catch (e) { state = defaults(); }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* bộ nhớ đầy hoặc bị chặn */ }
  }

  const today = () => new Date().toLocaleDateString("sv"); // YYYY-MM-DD theo giờ máy

  function addCards(words) {
    let n = 0;
    for (const w of words) {
      if (!state.cards[w.hz]) {
        state.cards[w.hz] = { ease: 2.5, interval: 0, due: Date.now(), reps: 0, lapses: 0, added: Date.now() };
        n++;
      }
    }
    save();
    return n;
  }

  // rating: 0 = Quên, 1 = Khó, 2 = Được, 3 = Dễ
  function review(hz, rating) {
    const c = state.cards[hz];
    if (!c) return;
    const now = Date.now();
    if (rating === 0) {
      c.reps = 0; c.lapses++; c.ease = Math.max(1.3, c.ease - 0.2);
      c.interval = 0; c.due = now + 60 * 1000; // ôn lại sau 1 phút
    } else {
      if (rating === 1) {
        c.ease = Math.max(1.3, c.ease - 0.15);
        c.interval = c.reps === 0 ? 0.5 : Math.max(1, c.interval * 1.2);
      } else {
        let iv = c.reps === 0 ? 1 : c.reps === 1 ? 3 : c.interval * c.ease;
        if (rating === 3) { iv = c.reps === 0 ? 3 : iv * 1.3; c.ease += 0.15; }
        c.interval = iv;
      }
      c.reps++;
      c.due = now + c.interval * DAY;
    }
    const d = today();
    state.log[d] = (state.log[d] || 0) + 1;
    save();
  }

  function dueCards() {
    const now = Date.now();
    return Object.entries(state.cards).filter(([, c]) => c.due <= now).map(([hz]) => hz);
  }

  function nextIntervalLabel(hz, rating) {
    const c = state.cards[hz];
    if (!c) return "";
    if (rating === 0) return "1 phút";
    let iv;
    if (rating === 1) iv = c.reps === 0 ? 0.5 : Math.max(1, c.interval * 1.2);
    else { iv = c.reps === 0 ? 1 : c.reps === 1 ? 3 : c.interval * c.ease; if (rating === 3) iv = c.reps === 0 ? 3 : iv * 1.3; }
    if (iv < 1) return Math.round(iv * 24) + " giờ";
    if (iv < 30) return Math.round(iv) + " ngày";
    return Math.round(iv / 30) + " tháng";
  }

  function lesson(id) {
    if (!state.lessons[id]) state.lessons[id] = { vocabSeen: false, grammar: {}, pronDone: false };
    return state.lessons[id];
  }

  function streak() {
    let n = 0;
    const d = new Date();
    if (!state.log[d.toLocaleDateString("sv")]) d.setDate(d.getDate() - 1);
    while (state.log[d.toLocaleDateString("sv")]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  function recordExam(unit, score) {
    const e = state.exams[unit] || { best: 0, last: 0, attempts: 0, history: [] };
    e.best = Math.max(e.best, score); e.last = score; e.attempts++;
    e.history.push({ date: today(), score });
    state.exams[unit] = e;
    save();
  }

  function exportJSON() { return JSON.stringify(state, null, 2); }
  function importJSON(text) {
    const obj = JSON.parse(text);
    if (!obj || typeof obj !== "object" || !obj.cards) throw new Error("File không hợp lệ");
    state = Object.assign(defaults(), obj);
    state.settings = Object.assign(defaults().settings, state.settings);
    save();
  }
  function reset() { state = defaults(); save(); }

  window.Store = {
    get state() { return state; }, save, addCards, review, dueCards, nextIntervalLabel,
    lesson, streak, recordExam, exportJSON, importJSON, reset, today
  };
})();
