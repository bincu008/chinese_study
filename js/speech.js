// Phát âm bằng giọng đọc của trình duyệt (ưu tiên tiếng Hoa Đài Loan zh-TW)
(function () {
  const synth = window.speechSynthesis;
  let voice = null;

  function pickVoice() {
    if (!synth) return null;
    const vs = synth.getVoices();
    const norm = (l) => (l || "").replace("_", "-").toLowerCase();
    voice =
      vs.find((v) => norm(v.lang) === "zh-tw") ||
      vs.find((v) => /taiwan|臺灣|台灣|國語/i.test(v.name)) ||
      vs.find((v) => norm(v.lang) === "zh-hk") ||
      vs.find((v) => norm(v.lang).startsWith("zh") || norm(v.lang).startsWith("cmn")) ||
      null;
    return voice;
  }
  if (synth) {
    pickVoice();
    synth.onvoiceschanged = () => { pickVoice(); document.dispatchEvent(new Event("voiceschanged")); };
  }

  function speak(text, rate) {
    if (!synth) return false;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = voice ? voice.lang : "zh-TW";
    if (voice) u.voice = voice;
    u.rate = rate || (window.Store ? Store.state.settings.rate : 0.8);
    synth.speak(u);
    return true;
  }

  window.Speech = {
    speak,
    get available() { return !!synth; },
    get voiceName() { return voice ? `${voice.name} (${voice.lang})` : null; }
  };
})();
