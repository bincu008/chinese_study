// Đơn vị 2 — trình độ A2 (TOCFL Band A, Level 2)
window.UNITS.push({ id: 2, title: "Đơn vị 2 — A2: Kể chuyện, so sánh, lý do", lessons: [6, 7, 8, 9, 10] });

window.LESSONS.push(
  // ───────────────────────── BÀI 6 ─────────────────────────
  {
    id: 6, unit: 2, level: "A2",
    title: "你週末做了什麼？", titleVi: "Cuối tuần & việc đã làm",
    goal: "Kể việc đã làm (了), kinh nghiệm đã từng (過), việc đã/chưa xong (已經 / 還沒).",
    vocab: [
      { hz: "做", zy: "ㄗㄨㄛˋ", py: "zuò", vi: "làm", hv: "TỐ",
        story: "亻(người) + 故 (việc cũ). Người cứ làm đi làm lại việc quen thuộc → 做 = làm.",
        ex: { zh: "你週末做了什麼？", py: "Nǐ zhōumò zuò le shénme?", vi: "Cuối tuần bạn đã làm gì?" } },
      { hz: "了", zy: "˙ㄌㄜ", py: "le", vi: "(trợ từ) đã — hành động hoàn thành / thay đổi", hv: "LIỄU",
        story: "Hình đứa bé quấn tã kín, không còn thấy hai tay → mọi việc đã xong, kết thúc (liễu = xong).",
        ex: { zh: "我吃了兩碗飯。", py: "Wǒ chī le liǎng wǎn fàn.", vi: "Tôi đã ăn hai bát cơm." } },
      { hz: "過", zy: "˙ㄍㄨㄛ", py: "guo", vi: "(trợ từ) đã từng", hv: "QUÁ",
        story: "辶 (bước đi) + 咼. Bước chân đã từng đi qua nơi đó → kinh nghiệm 'đã từng'.",
        ex: { zh: "你去過臺南嗎？", py: "Nǐ qù guo Táinán ma?", vi: "Bạn đã từng đi Đài Nam chưa?" } },
      { hz: "看", zy: "ㄎㄢˋ", py: "kàn", vi: "xem, nhìn; đọc", hv: "KHÁN",
        story: "手 (bàn tay) đặt trên 目 (con mắt). Lấy tay che nắng để nhìn ra xa → 看 = nhìn.",
        ex: { zh: "我昨天看了一部電影。", py: "Wǒ zuótiān kàn le yí bù diànyǐng.", vi: "Hôm qua tôi đã xem một bộ phim." } },
      { hz: "電影", zy: "ㄉㄧㄢˋ ㄧㄥˇ", py: "diànyǐng", vi: "phim, điện ảnh", hv: "ĐIỆN ẢNH",
        story: "電 = 雨 (mưa) + tia chớp: điện. 影 = 景 (cảnh) + 彡 (tia sáng): bóng hình. Bóng hình chạy bằng điện → phim.",
        ex: { zh: "我很喜歡看電影。", py: "Wǒ hěn xǐhuān kàn diànyǐng.", vi: "Tôi rất thích xem phim." } },
      { hz: "買", zy: "ㄇㄞˇ", py: "mǎi", vi: "mua", hv: "MÃI",
        story: "罒 (cái lưới) + 貝 (vỏ sò = tiền xưa). Lấy lưới gom vỏ sò đi chợ → mua.",
        ex: { zh: "她買了很多東西。", py: "Tā mǎi le hěn duō dōngxi.", vi: "Cô ấy đã mua rất nhiều đồ." } },
      { hz: "東西", zy: "ㄉㄨㄥ ˙ㄒㄧ", py: "dōngxi", vi: "đồ vật, đồ đạc", hv: "ĐÔNG TÂY",
        story: "東 = mặt trời (日) mọc sau cái cây (木) → phía Đông. 西 = chim về tổ khi mặt trời lặn → phía Tây. Hàng hóa từ Đông sang Tây → đồ vật.",
        ex: { zh: "你要買什麼東西？", py: "Nǐ yào mǎi shénme dōngxi?", vi: "Bạn muốn mua đồ gì?" } },
      { hz: "週末", zy: "ㄓㄡ ㄇㄛˋ", py: "zhōumò", vi: "cuối tuần", hv: "CHU MẠT",
        story: "週 = 辶 + 周 (vòng): một vòng tuần. 末 = cây (木) có nét trên dài: ngọn cây → phần cuối. Cuối vòng tuần → cuối tuần.",
        ex: { zh: "這個週末我要去玩。", py: "Zhège zhōumò wǒ yào qù wán.", vi: "Cuối tuần này tôi sẽ đi chơi." } },
      { hz: "已經", zy: "ㄧˇ ㄐㄧㄥ", py: "yǐjīng", vi: "đã (rồi)", hv: "DĨ KINH",
        story: "已 = hình con rắn đã cuộn mình lại xong. 經 = 糸 (sợi tơ) đã đi qua khung cửi. Mọi việc đã trải qua rồi → đã.",
        ex: { zh: "我已經吃飯了。", py: "Wǒ yǐjīng chīfàn le.", vi: "Tôi đã ăn cơm rồi." } },
      { hz: "還沒", zy: "ㄏㄞˊ ㄇㄟˊ", py: "háiméi", vi: "vẫn chưa", hv: "HOÀN MỘT",
        story: "還 = 辶 (đi) + quay lại: vẫn còn. 沒 = không có. 'Vẫn còn chưa có' → chưa. Câu dùng 還沒 thì KHÔNG có 了.",
        ex: { zh: "我還沒買。", py: "Wǒ háiméi mǎi.", vi: "Tôi vẫn chưa mua." } },
      { hz: "次", zy: "ㄘˋ", py: "cì", vi: "lần (lượng từ động tác)", hv: "THỨ",
        story: "冫(băng giá) + 欠 (há miệng ngáp). Trời lạnh, ngáp hết lần này đến lần khác → lần.",
        ex: { zh: "我去過兩次。", py: "Wǒ qù guo liǎng cì.", vi: "Tôi đã đi hai lần." } },
      { hz: "玩", zy: "ㄨㄢˊ", py: "wán", vi: "chơi", hv: "NGOẠN",
        story: "王 (ngọc) + 元 (đầu tiên). Đứa trẻ cầm viên ngọc đầu tiên nghịch mãi → chơi.",
        ex: { zh: "我們去海邊玩吧！", py: "Wǒmen qù hǎibiān wán ba!", vi: "Chúng ta đi biển chơi đi!" } },
      { hz: "旅行", zy: "ㄌㄩˇ ㄒㄧㄥˊ", py: "lǚxíng", vi: "du lịch", hv: "LỮ HÀNH",
        story: "旅 = lá cờ (方) dẫn đoàn người đi xa. 行 = ngã tư đường → đi. Theo cờ đi khắp các con đường → du lịch.",
        ex: { zh: "他去日本旅行了。", py: "Tā qù Rìběn lǚxíng le.", vi: "Anh ấy đã đi du lịch Nhật Bản." } },
      { hz: "我們", zy: "ㄨㄛˇ ˙ㄇㄣ", py: "wǒmen", vi: "chúng tôi, chúng ta", hv: "NGÃ MÔN",
        story: "我 (tôi) + 們 = 亻(người) + 門 (cửa): những người cùng một nhà. 們 biến đại từ thành số nhiều: 你們, 他們.",
        ex: { zh: "我們一起去吧。", py: "Wǒmen yìqǐ qù ba.", vi: "Chúng ta cùng đi nhé." } },
      { hz: "一起", zy: "ㄧˋ ㄑㄧˇ", py: "yìqǐ", vi: "cùng nhau", hv: "NHẤT KHỞI",
        story: "一 (một) + 起 (走 chạy + 己 bản thân: đứng dậy). Cùng một lúc đứng dậy → cùng nhau.",
        ex: { zh: "週末一起看電影，好嗎？", py: "Zhōumò yìqǐ kàn diànyǐng, hǎo ma?", vi: "Cuối tuần cùng xem phim nhé?" } }
    ],
    grammar: [
      { title: "V + 了 — Hành động đã hoàn thành",
        explain: "Đặt 了 sau động từ để nói hành động đã xảy ra/hoàn thành. Nếu tân ngữ có số lượng hoặc bổ nghĩa: 我買了三本書. Phủ định dùng 沒(有) + V và BỎ 了: 我沒買 (không nói 我沒買了). Lưu ý: 了 không phải 'thì quá khứ' — thói quen trong quá khứ không dùng 了.",
        pattern: "Chủ ngữ + V + 了 + (Số lượng) + Tân ngữ   ·   Phủ định: 沒(有) + V",
        examples: [
          { zh: "我昨天買了一杯咖啡。", py: "Wǒ zuótiān mǎi le yì bēi kāfēi.", vi: "Hôm qua tôi đã mua một ly cà phê." },
          { zh: "他沒去學校。", py: "Tā méi qù xuéxiào.", vi: "Anh ấy đã không đi học." }
        ],
        exercises: [
          { type: "mc", q: "Hôm qua tôi đã không xem phim.", choices: ["我昨天不看電影了。", "我昨天沒看電影。", "我昨天沒看了電影。", "我昨天看電影沒有了。"], answer: 1, explain: "Phủ định của V + 了 là 沒 + V, không giữ 了." },
          { type: "mc", q: "Chọn câu đúng:", choices: ["我買了三本書。", "我了買三本書。", "我買三了本書。", "了我買三本書。"], answer: 0 },
          { type: "order", words: ["她", "喝", "了", "兩杯", "茶"], vi: "Cô ấy đã uống hai ly trà." }
        ] },
      { title: "V + 過 — Đã từng (kinh nghiệm)",
        explain: "V + 過 nói về kinh nghiệm đã từng có ít nhất một lần. Phủ định: 沒 + V + 過 (giữ 過!). Hỏi: V + 過 + … + 嗎？ hoặc V 過 … 沒有？ Số lần: V + 過 + số + 次.",
        pattern: "Chủ ngữ + V + 過 + Tân ngữ   ·   沒 + V + 過",
        examples: [
          { zh: "我吃過牛肉麵。", py: "Wǒ chī guo niúròumiàn.", vi: "Tôi đã từng ăn mì bò." },
          { zh: "她沒去過越南。", py: "Tā méi qù guo Yuènán.", vi: "Cô ấy chưa từng đến Việt Nam." }
        ],
        exercises: [
          { type: "mc", q: "Tôi chưa từng đến Đài Nam.", choices: ["我沒去臺南過。", "我不去過臺南。", "我沒去過臺南。", "我去沒過臺南。"], answer: 2 },
          { type: "mc", q: "你去過臺北嗎？— Có, hai lần.", choices: ["去過，兩次。", "去了，兩個。", "有，兩過。", "去，兩次過。"], answer: 0 },
          { type: "order", words: ["你", "看", "過", "這部電影", "嗎"], vi: "Bạn đã từng xem bộ phim này chưa?" }
        ] },
      { title: "已經…了 / 還沒… — Đã … rồi / vẫn chưa …",
        explain: "已經 + V + 了: đã làm rồi (nhấn mạnh sớm/hoàn tất). 還沒(有) + V: vẫn chưa làm — không có 了. Trả lời ngắn: 還沒.",
        pattern: "已經 + V + (O) + 了   ·   還沒(有) + V + (O)",
        examples: [
          { zh: "他已經回家了。", py: "Tā yǐjīng huí jiā le.", vi: "Anh ấy đã về nhà rồi." },
          { zh: "你吃飯了嗎？— 還沒。", py: "Nǐ chīfàn le ma? — Háiméi.", vi: "Bạn ăn cơm chưa? — Chưa." }
        ],
        exercises: [
          { type: "mc", q: "Tôi vẫn chưa làm bài tập.", choices: ["我還沒做功課了。", "我還沒做功課。", "我已經沒做功課。", "我沒還做功課。"], answer: 1 },
          { type: "order", words: ["我", "已經", "買", "票", "了"], vi: "Tôi đã mua vé rồi." }
        ] }
    ],
    pron: {
      title: "Thanh nhẹ & nhịp câu có 了, 過, 們",
      explain: "Các trợ từ 了, 過, 的, 們, 嗎 đọc thanh nhẹ: ngắn, nhẹ, cao độ phụ thuộc chữ đứng trước. Sau thanh 3, thanh nhẹ hơi cao; sau thanh 4, thanh nhẹ rất thấp.",
      tips: [
        "Người Đài Loan thường đọc một số chữ thanh nhẹ thành thanh đầy đủ, ví dụ 休息 xiūxí, 東西 dōngxī — cả hai đều được hiểu.",
        "了 trong câu đọc 'le', không đọc 'liǎo' (liǎo chỉ dùng trong từ như 了解)."
      ],
      drills: [
        { zh: "我們", zy: "ㄨㄛˇ ˙ㄇㄣ", py: "wǒmen", note: "thanh 3 + nhẹ" },
        { zh: "東西", zy: "ㄉㄨㄥ ˙ㄒㄧ", py: "dōngxi", note: "thanh 1 + nhẹ" },
        { zh: "看過", zy: "ㄎㄢˋ ˙ㄍㄨㄛ", py: "kàn guo", note: "thanh 4 + nhẹ" },
        { zh: "買了", zy: "ㄇㄞˇ ˙ㄌㄜ", py: "mǎi le", note: "thanh 3 + nhẹ" },
        { zh: "旅行", zy: "ㄌㄩˇ ㄒㄧㄥˊ", py: "lǚxíng", note: "ㄩ + ㄥ" },
        { zh: "已經", zy: "ㄧˇ ㄐㄧㄥ", py: "yǐjīng", note: "thanh 3 + 1" }
      ],
      toneQuiz: [ ["做", 4], ["看", 4], ["買", 3], ["賣", 4], ["週", 1], ["末", 4], ["已", 3], ["還", 2], ["次", 4], ["玩", 2], ["旅", 3], ["行", 2], ["電", 4], ["影", 3] ]
    }
  },

  // ───────────────────────── BÀI 7 ─────────────────────────
  {
    id: 7, unit: 2, level: "A2",
    title: "你會說中文嗎？", titleVi: "Khả năng & sở thích",
    goal: "Nói mình biết/có thể làm gì (會, 能, 可以) và làm giỏi đến mức nào (V 得…).",
    vocab: [
      { hz: "會", zy: "ㄏㄨㄟˋ", py: "huì", vi: "biết (kỹ năng học được); sẽ", hv: "HỘI",
        story: "Hình cái nồi có nắp đậy khít (亼 trên, 曰 dưới): mọi thứ hội tụ đầy đủ → đã học xong, biết làm.",
        ex: { zh: "我會說一點中文。", py: "Wǒ huì shuō yìdiǎn Zhōngwén.", vi: "Tôi biết nói một chút tiếng Hoa." } },
      { hz: "能", zy: "ㄋㄥˊ", py: "néng", vi: "có thể (đủ khả năng / điều kiện)", hv: "NĂNG",
        story: "Hình con gấu: 厶 (đầu), 月 (thân), hai 匕 (chân). Con gấu khỏe, làm được nhiều việc → có năng lực.",
        ex: { zh: "我今天不能去。", py: "Wǒ jīntiān bù néng qù.", vi: "Hôm nay tôi không đi được." } },
      { hz: "可以", zy: "ㄎㄜˇ ㄧˇ", py: "kěyǐ", vi: "có thể, được phép", hv: "KHẢ DĨ",
        story: "可 = 口 (miệng) nói 'được'. 以 = dùng. Miệng đã nói 'được dùng' → được phép. Biến điệu 3+3 → kéyǐ.",
        ex: { zh: "這裡可以坐嗎？", py: "Zhèlǐ kěyǐ zuò ma?", vi: "Ở đây ngồi được không?" } },
      { hz: "說", zy: "ㄕㄨㄛ", py: "shuō", vi: "nói", hv: "THUYẾT",
        story: "言 (lời nói) + 兌 (người há miệng cười). Vui vẻ mở miệng ra nói.",
        ex: { zh: "請你說慢一點。", py: "Qǐng nǐ shuō màn yìdiǎn.", vi: "Bạn nói chậm một chút nhé." } },
      { hz: "寫", zy: "ㄒㄧㄝˇ", py: "xiě", vi: "viết", hv: "TẢ",
        story: "宀 (mái nhà) + 舄 (chim khách). Ngồi trong nhà chép lại hình con chim → viết.",
        ex: { zh: "你會寫這個字嗎？", py: "Nǐ huì xiě zhège zì ma?", vi: "Bạn biết viết chữ này không?" } },
      { hz: "字", zy: "ㄗˋ", py: "zì", vi: "chữ", hv: "TỰ",
        story: "宀 (mái nhà) + 子 (đứa con). Đứa trẻ ngồi trong nhà tập viết chữ.",
        ex: { zh: "繁體字很漂亮。", py: "Fántǐzì hěn piàoliàng.", vi: "Chữ phồn thể rất đẹp." } },
      { hz: "一點", zy: "ㄧˋ ㄉㄧㄢˇ", py: "yìdiǎn", vi: "một chút", hv: "NHẤT ĐIỂM",
        story: "一 (một) + 點 (chấm). Chỉ một chấm nhỏ → một chút. 一 đổi thành yì vì đứng trước thanh 3.",
        ex: { zh: "我會一點。", py: "Wǒ huì yìdiǎn.", vi: "Tôi biết một chút." } },
      { hz: "游泳", zy: "ㄧㄡˊ ㄩㄥˇ", py: "yóuyǒng", vi: "bơi", hv: "DU VỊNH",
        story: "Cả hai chữ đều có 氵(nước). 游 = đứa trẻ dưới lá cờ bơi theo dòng; 泳 = 氵 + 永 (mãi mãi): bơi mãi trong nước.",
        ex: { zh: "你會游泳嗎？", py: "Nǐ huì yóuyǒng ma?", vi: "Bạn biết bơi không?" } },
      { hz: "開車", zy: "ㄎㄞ ㄔㄜ", py: "kāichē", vi: "lái xe (ô tô)", hv: "KHAI XA",
        story: "開 = hai tay mở then cửa (門): mở, khởi động. 車 = chiếc xe. Khởi động xe → lái xe.",
        ex: { zh: "我爸爸開車開得很好。", py: "Wǒ bàba kāichē kāi de hěn hǎo.", vi: "Bố tôi lái xe rất giỏi." } },
      { hz: "唱歌", zy: "ㄔㄤˋ ㄍㄜ", py: "chànggē", vi: "hát", hv: "XƯỚNG CA",
        story: "唱 = 口 (miệng) + 昌 (hai mặt trời: rực rỡ) → hát vang. 歌 = 哥 + 欠 (há miệng) → bài hát.",
        ex: { zh: "她唱歌唱得很好聽。", py: "Tā chànggē chàng de hěn hǎotīng.", vi: "Cô ấy hát rất hay." } },
      { hz: "跳舞", zy: "ㄊㄧㄠˋ ㄨˇ", py: "tiàowǔ", vi: "nhảy, khiêu vũ", hv: "KHIÊU VŨ",
        story: "跳 = 足 (chân) + 兆: chân bật lên → nhảy. 舞 = hình người cầm đồ múa, dưới là hai bàn chân (舛).",
        ex: { zh: "我不會跳舞。", py: "Wǒ bú huì tiàowǔ.", vi: "Tôi không biết nhảy." } },
      { hz: "得", zy: "˙ㄉㄜ", py: "de", vi: "(trợ từ nối bổ ngữ mức độ) … một cách …", hv: "ĐẮC",
        story: "彳 (bước đi) + 旦 + 寸 (bàn tay): đi ra ngoài và lấy được thứ mình muốn → đạt được. Dùng sau động từ để đánh giá kết quả.",
        ex: { zh: "你說得很好！", py: "Nǐ shuō de hěn hǎo!", vi: "Bạn nói giỏi lắm!" } },
      { hz: "快", zy: "ㄎㄨㄞˋ", py: "kuài", vi: "nhanh", hv: "KHOÁI",
        story: "忄(trái tim) + 夬. Tim đập nhanh khi vui sướng → nhanh (khoái = vui).",
        ex: { zh: "他走得很快。", py: "Tā zǒu de hěn kuài.", vi: "Anh ấy đi rất nhanh." } },
      { hz: "慢", zy: "ㄇㄢˋ", py: "màn", vi: "chậm", hv: "MẠN",
        story: "忄(trái tim) + 曼 (kéo dài). Trong lòng thong thả, kéo dài → chậm.",
        ex: { zh: "請說慢一點。", py: "Qǐng shuō màn yìdiǎn.", vi: "Xin nói chậm một chút." } },
      { hz: "難", zy: "ㄋㄢˊ", py: "nán", vi: "khó", hv: "NAN",
        story: "堇 (đất sét) + 隹 (con chim). Con chim bị kẹt trong bùn đất, rất khó thoát → khó.",
        ex: { zh: "中文不太難。", py: "Zhōngwén bú tài nán.", vi: "Tiếng Hoa không khó lắm." } },
      { hz: "容易", zy: "ㄖㄨㄥˊ ㄧˋ", py: "róngyì", vi: "dễ", hv: "DUNG DỊCH",
        story: "容 = 宀 (nhà) + 谷 (thung lũng): chứa được nhiều. 易 = con thằn lằn đổi màu dễ dàng. Chứa dễ, đổi dễ → dễ.",
        ex: { zh: "這個字很容易寫。", py: "Zhège zì hěn róngyì xiě.", vi: "Chữ này rất dễ viết." } }
    ],
    grammar: [
      { title: "會 / 能 / 可以 — Biết, có thể, được phép",
        explain: "會: biết làm nhờ học (會游泳, 會說中文); cũng có nghĩa 'sẽ' (明天會下雨). 能: đủ sức hoặc điều kiện cho phép (今天能去嗎?). 可以: được phép, xin phép (可以進來嗎?). Phủ định: 不會 / 不能 / 不可以.",
        pattern: "Chủ ngữ + 會 / 能 / 可以 + Động từ",
        examples: [
          { zh: "我會開車，可是今天不能開，因為我喝酒了。", py: "Wǒ huì kāichē, kěshì jīntiān bù néng kāi, yīnwèi wǒ hē jiǔ le.", vi: "Tôi biết lái xe, nhưng hôm nay không lái được vì đã uống rượu." },
          { zh: "我可以用你的手機嗎？", py: "Wǒ kěyǐ yòng nǐ de shǒujī ma?", vi: "Tôi dùng điện thoại của bạn được không?" }
        ],
        exercises: [
          { type: "mc", q: "Tôi biết bơi. (kỹ năng)", choices: ["我能游泳。", "我會游泳。", "我可以游泳。", "我得游泳。"], answer: 1 },
          { type: "mc", q: "Xin phép: Tôi ngồi đây được không?", choices: ["我會坐這裡嗎？", "我可以坐這裡嗎？", "我坐會這裡嗎？", "我得坐這裡嗎？"], answer: 1 },
          { type: "mc", q: "明天會下雨。 — 會 ở đây nghĩa là:", choices: ["biết", "sẽ", "được phép", "phải"], answer: 1 },
          { type: "order", words: ["我", "今天", "不能", "去"], vi: "Hôm nay tôi không đi được." }
        ] },
      { title: "V + 得 + Tính từ — Làm giỏi/nhanh… thế nào",
        explain: "Bổ ngữ mức độ: đánh giá cách làm một việc. Có tân ngữ thì lặp lại động từ: 他說中文說得很好 (hoặc 他中文說得很好). Phủ định: V 得 + 不 + Adj.",
        pattern: "Chủ ngữ + (V + O) + V + 得 + (很) + Adj",
        examples: [
          { zh: "你寫字寫得很漂亮。", py: "Nǐ xiě zì xiě de hěn piàoliàng.", vi: "Bạn viết chữ rất đẹp." },
          { zh: "我跑得不快。", py: "Wǒ pǎo de bú kuài.", vi: "Tôi chạy không nhanh." }
        ],
        exercises: [
          { type: "mc", q: "Anh ấy nói tiếng Hoa rất giỏi.", choices: ["他說中文得很好。", "他說中文說得很好。", "他很好說中文。", "他說得中文很好。"], answer: 1 },
          { type: "mc", q: "Cô ấy hát không hay.", choices: ["她唱歌唱得不好聽。", "她不唱歌唱得好聽。", "她唱得歌不好聽。", "她唱歌不得好聽。"], answer: 0 },
          { type: "order", words: ["你", "說", "得", "太快", "了"], vi: "Bạn nói nhanh quá." }
        ] },
      { title: "一點 vs 有一點 — Một chút",
        explain: "一點 đứng SAU tính từ/động từ để so sánh hoặc yêu cầu: 慢一點 (chậm hơn một chút), 會一點. 有一點 đứng TRƯỚC tính từ, thường mang ý không hài lòng: 有一點難 (hơi khó).",
        pattern: "Adj + 一點   ·   有一點 + Adj (ý tiêu cực)",
        examples: [
          { zh: "請說慢一點。", py: "Qǐng shuō màn yìdiǎn.", vi: "Xin nói chậm hơn một chút." },
          { zh: "今天有一點冷。", py: "Jīntiān yǒu yìdiǎn lěng.", vi: "Hôm nay hơi lạnh." }
        ],
        exercises: [
          { type: "mc", q: "Tiếng Hoa hơi khó.", choices: ["中文難一點。", "中文有一點難。", "中文一點難。", "中文難有一點。"], answer: 1 },
          { type: "mc", q: "Bạn có thể nói chậm hơn một chút không?", choices: ["你可以說慢一點嗎？", "你可以說有一點慢嗎？", "你可以一點慢說嗎？", "你可以慢說一點嗎？"], answer: 0 }
        ] }
    ],
    pron: {
      title: "Biến điệu thanh 3 trong cụm dài",
      explain: "Nhiều thanh 3 liền nhau: chia thành cụm nghĩa, trong mỗi cụm chỉ chữ cuối giữ thanh 3, các chữ trước thành thanh 2. Thanh 3 đứng trước thanh 1, 2, 4 chỉ đọc nửa đầu (xuống thấp, không lên lại).",
      tips: [
        "我很好 wǒ hěn hǎo → wó hén hǎo.",
        "可以 kěyǐ → kéyǐ; 我想買 wǒ xiǎng mǎi → wó xiáng mǎi."
      ],
      drills: [
        { zh: "可以", zy: "ㄎㄜˇ ㄧˇ", py: "kěyǐ → kéyǐ", note: "3 + 3" },
        { zh: "游泳", zy: "ㄧㄡˊ ㄩㄥˇ", py: "yóuyǒng", note: "2 + 3" },
        { zh: "我很好", zy: "ㄨㄛˇ ㄏㄣˇ ㄏㄠˇ", py: "wó hén hǎo", note: "3 + 3 + 3" },
        { zh: "一點", zy: "ㄧˋ ㄉㄧㄢˇ", py: "yìdiǎn", note: "一 + thanh 3 → yì" },
        { zh: "跳舞", zy: "ㄊㄧㄠˋ ㄨˇ", py: "tiàowǔ", note: "4 + 3" },
        { zh: "唱歌", zy: "ㄔㄤˋ ㄍㄜ", py: "chànggē", note: "4 + 1" }
      ],
      toneQuiz: [ ["會", 4], ["能", 2], ["可", 3], ["說", 1], ["寫", 3], ["字", 4], ["游", 2], ["泳", 3], ["開", 1], ["唱", 4], ["跳", 4], ["快", 4], ["慢", 4], ["難", 2] ]
    }
  },

  // ───────────────────────── BÀI 8 ─────────────────────────
  {
    id: 8, unit: 2, level: "A2",
    title: "今天比昨天熱", titleVi: "Thời tiết & so sánh",
    goal: "Nói về thời tiết, mùa và so sánh hai sự vật (比, 沒有, 一樣, 最).",
    vocab: [
      { hz: "天氣", zy: "ㄊㄧㄢ ㄑㄧˋ", py: "tiānqì", vi: "thời tiết", hv: "THIÊN KHÍ",
        story: "天 = bầu trời. 氣 = hơi nước (气) bốc lên từ nồi gạo (米). Hơi khí trên bầu trời → thời tiết.",
        ex: { zh: "今天天氣很好。", py: "Jīntiān tiānqì hěn hǎo.", vi: "Hôm nay thời tiết rất đẹp." } },
      { hz: "熱", zy: "ㄖㄜˋ", py: "rè", vi: "nóng", hv: "NHIỆT",
        story: "Phía dưới là 灬 (bốn chấm lửa). Người đang trồng cây (埶) trên ngọn lửa → nóng.",
        ex: { zh: "臺北的夏天很熱。", py: "Táiběi de xiàtiān hěn rè.", vi: "Mùa hè ở Đài Bắc rất nóng." } },
      { hz: "冷", zy: "ㄌㄥˇ", py: "lěng", vi: "lạnh", hv: "LÃNH",
        story: "冫(hai giọt băng) + 令 (mệnh lệnh). Băng giá ra lệnh → mọi thứ lạnh cóng.",
        ex: { zh: "今天有一點冷。", py: "Jīntiān yǒu yìdiǎn lěng.", vi: "Hôm nay hơi lạnh." } },
      { hz: "下雨", zy: "ㄒㄧㄚˋ ㄩˇ", py: "xiàyǔ", vi: "mưa (trời mưa)", hv: "HẠ VŨ",
        story: "下 = nét chỉ xuống dưới. 雨 = bầu trời (冂) có những giọt nước rơi xuống. Nước từ trời rơi xuống → mưa.",
        ex: { zh: "明天會下雨。", py: "Míngtiān huì xiàyǔ.", vi: "Ngày mai sẽ mưa." } },
      { hz: "比", zy: "ㄅㄧˇ", py: "bǐ", vi: "so với, hơn", hv: "TỶ",
        story: "Hai người (匕匕) đứng cạnh nhau để so chiều cao → so sánh (tỷ = so).",
        ex: { zh: "今天比昨天熱。", py: "Jīntiān bǐ zuótiān rè.", vi: "Hôm nay nóng hơn hôm qua." } },
      { hz: "最", zy: "ㄗㄨㄟˋ", py: "zuì", vi: "nhất", hv: "TỐI",
        story: "曰 (nói) + 取 (lấy). Trong tất cả, nói rõ chọn lấy cái này → cái nhất.",
        ex: { zh: "我最喜歡冬天。", py: "Wǒ zuì xǐhuān dōngtiān.", vi: "Tôi thích mùa đông nhất." } },
      { hz: "更", zy: "ㄍㄥˋ", py: "gèng", vi: "càng, hơn nữa", hv: "CÁNH",
        story: "Hình bàn tay cầm roi thúc thêm → càng thêm, hơn nữa.",
        ex: { zh: "明天會更冷。", py: "Míngtiān huì gèng lěng.", vi: "Ngày mai sẽ còn lạnh hơn." } },
      { hz: "夏天", zy: "ㄒㄧㄚˋ ㄊㄧㄢ", py: "xiàtiān", vi: "mùa hè", hv: "HẠ THIÊN",
        story: "夏 = người (頁 đầu) giơ tay chân ra vì nóng. Những ngày người ta chỉ muốn duỗi tay chân → mùa hè.",
        ex: { zh: "夏天常常有颱風。", py: "Xiàtiān chángcháng yǒu táifēng.", vi: "Mùa hè thường có bão." } },
      { hz: "冬天", zy: "ㄉㄨㄥ ㄊㄧㄢ", py: "dōngtiān", vi: "mùa đông", hv: "ĐÔNG THIÊN",
        story: "冬 = sợi dây thắt nút cuối năm (夂) + hai giọt băng (冫). Cuối năm băng giá → mùa đông.",
        ex: { zh: "臺灣的冬天不太冷。", py: "Táiwān de dōngtiān bú tài lěng.", vi: "Mùa đông ở Đài Loan không lạnh lắm." } },
      { hz: "颱風", zy: "ㄊㄞˊ ㄈㄥ", py: "táifēng", vi: "bão, cơn bão", hv: "ĐÀI PHONG",
        story: "颱 = 風 (gió) + 台 (Đài). 風 = cánh buồm (几) và con côn trùng (虫) bay theo gió. Gió lớn thổi qua Đài Loan → bão.",
        ex: { zh: "颱風來了，不要出去。", py: "Táifēng lái le, bú yào chūqù.", vi: "Bão tới rồi, đừng ra ngoài." } },
      { hz: "覺得", zy: "ㄐㄩㄝˊ ˙ㄉㄜ", py: "juéde", vi: "cảm thấy, thấy rằng", hv: "GIÁC ĐẮC",
        story: "覺 = 見 (nhìn) dưới mái học: nhìn và hiểu ra → giác ngộ, cảm nhận. 得 = đạt được. Cảm nhận được → cảm thấy.",
        ex: { zh: "我覺得中文很有意思。", py: "Wǒ juéde Zhōngwén hěn yǒuyìsi.", vi: "Tôi thấy tiếng Hoa rất thú vị." } },
      { hz: "舒服", zy: "ㄕㄨ ˙ㄈㄨ", py: "shūfu", vi: "dễ chịu, thoải mái", hv: "THƯ PHỤC",
        story: "舒 = 舍 (nhà) + 予 (cho): được cho ở nhà mình → thư thái. 服 = quần áo vừa người. Ở nhà, mặc đồ vừa → dễ chịu.",
        ex: { zh: "今天的天氣很舒服。", py: "Jīntiān de tiānqì hěn shūfu.", vi: "Thời tiết hôm nay rất dễ chịu." } },
      { hz: "太", zy: "ㄊㄞˋ", py: "tài", vi: "quá (太…了)", hv: "THÁI",
        story: "大 (to) thêm một chấm → to hơn cả to → quá.",
        ex: { zh: "太熱了！", py: "Tài rè le!", vi: "Nóng quá!" } },
      { hz: "一樣", zy: "ㄧˊ ㄧㄤˋ", py: "yíyàng", vi: "giống nhau, như nhau", hv: "NHẤT DẠNG",
        story: "一 (một) + 樣 (木 + 羕: khuôn mẫu bằng gỗ). Cùng một khuôn → giống nhau. 一 đọc yí vì trước thanh 4.",
        ex: { zh: "我跟你一樣高。", py: "Wǒ gēn nǐ yíyàng gāo.", vi: "Tôi cao bằng bạn." } },
      { hz: "度", zy: "ㄉㄨˋ", py: "dù", vi: "độ (nhiệt độ)", hv: "ĐỘ",
        story: "广 (mái nhà) + 廿 + 又 (bàn tay). Dùng bàn tay đo trong nhà → đo lường, độ.",
        ex: { zh: "今天三十五度。", py: "Jīntiān sānshíwǔ dù.", vi: "Hôm nay 35 độ." } },
      { hz: "高", zy: "ㄍㄠ", py: "gāo", vi: "cao", hv: "CAO",
        story: "Hình một tòa tháp nhiều tầng với mái nhọn → cao.",
        ex: { zh: "哥哥比我高。", py: "Gēge bǐ wǒ gāo.", vi: "Anh trai cao hơn tôi." } }
    ],
    grammar: [
      { title: "A 比 B + Tính từ — A hơn B",
        explain: "Cấu trúc so sánh hơn. KHÔNG dùng 很 trong câu 比. Muốn nói 'hơn một chút' thêm 一點 sau tính từ, 'hơn nhiều' thêm 多了 / 得多. Muốn nhấn mạnh 'còn hơn' dùng 更.",
        pattern: "A + 比 + B + (更) + Adj + (一點 / 多了)",
        examples: [
          { zh: "今天比昨天冷一點。", py: "Jīntiān bǐ zuótiān lěng yìdiǎn.", vi: "Hôm nay lạnh hơn hôm qua một chút." },
          { zh: "臺南比臺北熱多了。", py: "Táinán bǐ Táiběi rè duō le.", vi: "Đài Nam nóng hơn Đài Bắc nhiều." }
        ],
        exercises: [
          { type: "mc", q: "Anh trai cao hơn tôi.", choices: ["哥哥比我很高。", "哥哥比我高。", "哥哥高比我。", "我比哥哥高。"], answer: 1, explain: "Không dùng 很 trong câu so sánh với 比." },
          { type: "mc", q: "Hôm nay nóng hơn hôm qua nhiều.", choices: ["今天比昨天熱多了。", "今天比昨天多熱了。", "今天熱比昨天多了。", "今天比昨天很熱。"], answer: 0 },
          { type: "order", words: ["咖啡", "比", "茶", "貴", "一點"], vi: "Cà phê đắt hơn trà một chút." }
        ] },
      { title: "A 沒有 B (那麼) Adj · A 跟 B 一樣 Adj",
        explain: "So sánh kém: A 沒有 B (那麼) + Adj = A không … bằng B. So sánh bằng: A 跟 B 一樣 (+ Adj) = A … như B.",
        pattern: "A + 沒有 + B + (那麼) + Adj   ·   A + 跟 + B + 一樣 + Adj",
        examples: [
          { zh: "臺北沒有高雄那麼熱。", py: "Táiběi méiyǒu Gāoxióng nàme rè.", vi: "Đài Bắc không nóng bằng Cao Hùng." },
          { zh: "我跟妹妹一樣高。", py: "Wǒ gēn mèimei yíyàng gāo.", vi: "Tôi cao bằng em gái." }
        ],
        exercises: [
          { type: "mc", q: "Mùa đông Đài Loan không lạnh bằng Hà Nội.", choices: ["臺灣的冬天不比河內冷。", "臺灣的冬天沒有河內那麼冷。", "臺灣的冬天沒有冷河內。", "臺灣的冬天跟河內沒有冷。"], answer: 1 },
          { type: "mc", q: "Ly trà này giá bằng ly kia.", choices: ["這杯茶跟那杯一樣貴。", "這杯茶一樣那杯貴。", "這杯茶比那杯一樣貴。", "這杯茶跟那杯貴一樣。"], answer: 0 }
        ] },
      { title: "最 / 太…了 — Nhất / quá",
        explain: "最 + Adj/V tâm lý = nhất: 最好, 最喜歡. 太 + Adj + 了 = quá (cảm thán, thường hơi tiêu cực hoặc khen): 太貴了！ 太好了！ Phủ định 不太 + Adj = không … lắm.",
        pattern: "最 + Adj   ·   太 + Adj + 了   ·   不太 + Adj",
        examples: [
          { zh: "八月最熱。", py: "Bāyuè zuì rè.", vi: "Tháng tám nóng nhất." },
          { zh: "這件衣服太貴了！", py: "Zhè jiàn yīfú tài guì le!", vi: "Bộ quần áo này đắt quá!" }
        ],
        exercises: [
          { type: "mc", q: "Không lạnh lắm.", choices: ["太不冷。", "不太冷。", "不冷太了。", "最不冷。"], answer: 1 },
          { type: "order", words: ["我", "最", "喜歡", "夏天"], vi: "Tôi thích mùa hè nhất." }
        ] }
    ],
    pron: {
      title: "Âm ㄥ / ㄣ và ㄦ — những âm người Việt hay nhầm",
      explain: "冷 lěng (ㄥ, lưỡi lùi về sau, giống 'lâng') khác 您 nín (ㄣ, đầu lưỡi chạm lợi, giống 'nin'). ㄦ er: đọc 'ơ' rồi cong lưỡi lên. Ở Đài Loan rất ít dùng âm 兒化 (thêm -r cuối chữ): nói 一點, 哪裡 thay vì 一點兒, 哪兒.",
      tips: [
        "Âm cuối -ng (ㄥ, ㄤ) miệng hơi mở; âm cuối -n (ㄣ, ㄢ) miệng gần khép.",
        "比 bǐ đứng trước thanh 3 (比我) đọc thành bí wǒ."
      ],
      drills: [
        { zh: "冷", zy: "ㄌㄥˇ", py: "lěng", note: "ㄥ" },
        { zh: "更", zy: "ㄍㄥˋ", py: "gèng", note: "ㄥ" },
        { zh: "風", zy: "ㄈㄥ", py: "fēng", note: "ㄥ" },
        { zh: "天", zy: "ㄊㄧㄢ", py: "tiān", note: "ㄧㄢ đọc gần 'tiên'" },
        { zh: "二", zy: "ㄦˋ", py: "èr", note: "ㄦ cong lưỡi" },
        { zh: "比我高", zy: "ㄅㄧˇ ㄨㄛˇ ㄍㄠ", py: "bí wǒ gāo", note: "3 + 3 → 2 + 3" }
      ],
      toneQuiz: [ ["熱", 4], ["冷", 3], ["雨", 3], ["比", 3], ["最", 4], ["更", 4], ["夏", 4], ["冬", 1], ["風", 1], ["覺", 2], ["舒", 1], ["太", 4], ["度", 4], ["高", 1] ]
    }
  },

  // ───────────────────────── BÀI 9 ─────────────────────────
  {
    id: 9, unit: 2, level: "A2",
    title: "我正在吃早餐", titleVi: "Sinh hoạt hằng ngày",
    goal: "Kể một ngày của mình, nói việc đang làm (正在), làm hai việc cùng lúc (一邊…一邊) và 'khi…' (…的時候).",
    vocab: [
      { hz: "正在", zy: "ㄓㄥˋ ㄗㄞˋ", py: "zhèngzài", vi: "đang (làm gì)", hv: "CHÍNH TẠI",
        story: "正 = chân (止) đứng thẳng ngay dưới vạch: đúng lúc. 在 = có mặt. Đúng lúc đang có mặt → đang.",
        ex: { zh: "我正在吃早餐。", py: "Wǒ zhèngzài chī zǎocān.", vi: "Tôi đang ăn sáng." } },
      { hz: "起床", zy: "ㄑㄧˇ ㄔㄨㄤˊ", py: "qǐchuáng", vi: "thức dậy, rời giường", hv: "KHỞI SÀNG",
        story: "起 = 走 (chạy) + 己 (bản thân): tự mình đứng dậy. 床 = 广 (mái) + 木 (gỗ): cái giường gỗ trong nhà. Đứng dậy khỏi giường.",
        ex: { zh: "我每天七點起床。", py: "Wǒ měitiān qī diǎn qǐchuáng.", vi: "Mỗi ngày tôi dậy lúc bảy giờ." } },
      { hz: "睡覺", zy: "ㄕㄨㄟˋ ㄐㄧㄠˋ", py: "shuìjiào", vi: "ngủ, đi ngủ", hv: "THỤY GIÁC",
        story: "睡 = 目 (mắt) + 垂 (rủ xuống): mí mắt rủ xuống → ngủ. 覺 (ở đây đọc jiào) = giấc ngủ.",
        ex: { zh: "你幾點睡覺？", py: "Nǐ jǐ diǎn shuìjiào?", vi: "Bạn ngủ lúc mấy giờ?" } },
      { hz: "早餐", zy: "ㄗㄠˇ ㄘㄢ", py: "zǎocān", vi: "bữa sáng", hv: "TẢO XAN",
        story: "早 = mặt trời (日) vừa lên trên ngọn cỏ (十) → sớm. 餐 = 食 (ăn) → bữa ăn. Bữa ăn buổi sớm. Ở Đài Loan có rất nhiều tiệm 早餐店!",
        ex: { zh: "我常常在早餐店吃早餐。", py: "Wǒ chángcháng zài zǎocāndiàn chī zǎocān.", vi: "Tôi thường ăn sáng ở tiệm ăn sáng." } },
      { hz: "上班", zy: "ㄕㄤˋ ㄅㄢ", py: "shàngbān", vi: "đi làm", hv: "THƯỢNG BAN",
        story: "上 = lên. 班 = hai viên ngọc (王王) chia ra bằng con dao (刂): ca, nhóm. 'Lên ca' → đi làm. Ngược lại: 下班 = tan làm.",
        ex: { zh: "他坐捷運上班。", py: "Tā zuò jiéyùn shàngbān.", vi: "Anh ấy đi làm bằng MRT." } },
      { hz: "下班", zy: "ㄒㄧㄚˋ ㄅㄢ", py: "xiàbān", vi: "tan làm", hv: "HẠ BAN",
        story: "下 (xuống) + 班 (ca làm). 'Xuống ca' → tan làm.",
        ex: { zh: "我六點下班。", py: "Wǒ liù diǎn xiàbān.", vi: "Tôi tan làm lúc sáu giờ." } },
      { hz: "洗澡", zy: "ㄒㄧˇ ㄗㄠˇ", py: "xǐzǎo", vi: "tắm", hv: "TẨY TẢO",
        story: "Cả hai chữ đều có 氵(nước). 洗 = 氵 + 先 (trước): rửa trước tiên. 澡 = 氵 + 喿 (tiếng chim ríu rít): vừa tắm vừa hát. Biến điệu 3+3 → xízǎo.",
        ex: { zh: "我晚上洗澡。", py: "Wǒ wǎnshang xǐzǎo.", vi: "Tôi tắm vào buổi tối." } },
      { hz: "時候", zy: "ㄕˊ ˙ㄏㄡ", py: "shíhou", vi: "lúc, khi (…的時候)", hv: "THỜI HẬU",
        story: "時 = 日 (mặt trời) + 寺: mặt trời chỉ giờ. 候 = chờ đợi. Thời gian chờ đợi → lúc, khi.",
        ex: { zh: "你有空的時候做什麼？", py: "Nǐ yǒu kòng de shíhou zuò shénme?", vi: "Lúc rảnh bạn làm gì?" } },
      { hz: "每天", zy: "ㄇㄟˇ ㄊㄧㄢ", py: "měitiān", vi: "mỗi ngày", hv: "MỖI THIÊN",
        story: "每 = người mẹ (母) đội trâm trên đầu, ngày nào cũng vậy → mỗi. 天 = ngày.",
        ex: { zh: "我每天學中文。", py: "Wǒ měitiān xué Zhōngwén.", vi: "Tôi học tiếng Hoa mỗi ngày." } },
      { hz: "常常", zy: "ㄔㄤˊ ㄔㄤˊ", py: "chángcháng", vi: "thường xuyên", hv: "THƯỜNG THƯỜNG",
        story: "常 = 尚 + 巾 (tấm vải): tấm vải dùng hằng ngày → thường. Lặp lại hai lần → thường xuyên.",
        ex: { zh: "我常常去運動。", py: "Wǒ chángcháng qù yùndòng.", vi: "Tôi thường đi tập thể thao." } },
      { hz: "早上", zy: "ㄗㄠˇ ˙ㄕㄤ", py: "zǎoshang", vi: "buổi sáng", hv: "TẢO THƯỢNG",
        story: "早 (sớm) + 上 (phần trên). Phần đầu của ngày → buổi sáng.",
        ex: { zh: "早上好！", py: "Zǎoshang hǎo!", vi: "Chào buổi sáng!" } },
      { hz: "晚上", zy: "ㄨㄢˇ ˙ㄕㄤ", py: "wǎnshang", vi: "buổi tối", hv: "VÃN THƯỢNG",
        story: "晚 = 日 (mặt trời) + 免 (thoát đi): mặt trời đã đi mất → muộn, tối.",
        ex: { zh: "晚上我常常看書。", py: "Wǎnshang wǒ chángcháng kàn shū.", vi: "Buổi tối tôi thường đọc sách." } },
      { hz: "手機", zy: "ㄕㄡˇ ㄐㄧ", py: "shǒujī", vi: "điện thoại di động", hv: "THỦ CƠ",
        story: "手 = bàn tay năm ngón. 機 = 木 + 幾: máy móc. Cái máy cầm trên tay → điện thoại.",
        ex: { zh: "不要一邊走路一邊看手機。", py: "Bú yào yìbiān zǒulù yìbiān kàn shǒujī.", vi: "Đừng vừa đi vừa xem điện thoại." } },
      { hz: "聽", zy: "ㄊㄧㄥ", py: "tīng", vi: "nghe", hv: "THÍNH",
        story: "Bên trái có 耳 (tai), bên phải có 十 + 罒 (mắt) + 一 + 心 (tim). Nghe bằng tai, mắt và cả trái tim.",
        ex: { zh: "我喜歡聽音樂。", py: "Wǒ xǐhuān tīng yīnyuè.", vi: "Tôi thích nghe nhạc." } },
      { hz: "音樂", zy: "ㄧㄣ ㄩㄝˋ", py: "yīnyuè", vi: "âm nhạc", hv: "ÂM NHẠC",
        story: "音 = 立 + 日: âm thanh. 樂 = hình cây đàn bằng gỗ (木) có dây tơ (幺). Đọc giống Hán-Việt 'âm nhạc'!",
        ex: { zh: "她一邊做飯一邊聽音樂。", py: "Tā yìbiān zuòfàn yìbiān tīng yīnyuè.", vi: "Cô ấy vừa nấu cơm vừa nghe nhạc." } },
      { hz: "運動", zy: "ㄩㄣˋ ㄉㄨㄥˋ", py: "yùndòng", vi: "thể thao, tập luyện", hv: "VẬN ĐỘNG",
        story: "運 = di chuyển (đã gặp trong 捷運). 動 = 重 (nặng) + 力 (sức): dùng sức nâng vật nặng → động. Đọc giống 'vận động'!",
        ex: { zh: "下班以後我去運動。", py: "Xiàbān yǐhòu wǒ qù yùndòng.", vi: "Sau khi tan làm tôi đi tập thể thao." } }
    ],
    grammar: [
      { title: "(正)在 + V — Đang làm",
        explain: "在 / 正在 + động từ = đang làm. Thường thêm 呢 ở cuối câu trong khẩu ngữ. Phủ định: 沒(有)在 + V. Chú ý phân biệt với 在 + nơi chốn (ở) đã học bài 5.",
        pattern: "Chủ ngữ + (正)在 + V + (O) + (呢)",
        examples: [
          { zh: "媽媽正在做飯呢。", py: "Māma zhèngzài zuòfàn ne.", vi: "Mẹ đang nấu cơm đấy." },
          { zh: "我沒在睡覺。", py: "Wǒ méi zài shuìjiào.", vi: "Tôi không có đang ngủ." }
        ],
        exercises: [
          { type: "mc", q: "Bạn đang làm gì đấy?", choices: ["你正在做什麼呢？", "你做正在什麼？", "你在什麼做？", "你正做在什麼呢？"], answer: 0 },
          { type: "mc", q: "我在學校。 — 在 nghĩa là:", choices: ["đang", "ở", "và", "của"], answer: 1 },
          { type: "order", words: ["他", "正在", "洗澡", "呢"], vi: "Anh ấy đang tắm." }
        ] },
      { title: "一邊 A 一邊 B — Vừa … vừa …",
        explain: "Hai hành động cùng diễn ra một lúc, cùng một chủ ngữ. Mỗi 一邊 đứng trước một động từ.",
        pattern: "Chủ ngữ + 一邊 + V1 + 一邊 + V2",
        examples: [
          { zh: "我一邊吃早餐一邊看新聞。", py: "Wǒ yìbiān chī zǎocān yìbiān kàn xīnwén.", vi: "Tôi vừa ăn sáng vừa xem tin tức." }
        ],
        exercises: [
          { type: "mc", q: "Cô ấy vừa hát vừa nhảy.", choices: ["她一邊唱歌跳舞。", "她一邊唱歌一邊跳舞。", "她唱歌一邊跳舞一邊。", "一邊她唱歌一邊跳舞。"], answer: 1 },
          { type: "order", words: ["我", "一邊", "聽音樂", "一邊", "寫功課"], vi: "Tôi vừa nghe nhạc vừa làm bài tập." }
        ] },
      { title: "…的時候 & vị trí trạng từ tần suất",
        explain: "Mệnh đề + 的時候 = khi …, đứng ĐẦU câu (ngược tiếng Việt có thể để cuối). Trạng từ tần suất (常常, 每天, 不常) đứng trước động từ, sau chủ ngữ.",
        pattern: "(Khi …) V + 的時候, Chủ ngữ + 常常 / 每天 + V",
        examples: [
          { zh: "下雨的時候，我坐公車上班。", py: "Xiàyǔ de shíhou, wǒ zuò gōngchē shàngbān.", vi: "Khi trời mưa, tôi đi xe buýt đi làm." },
          { zh: "他每天早上都跑步。", py: "Tā měitiān zǎoshang dōu pǎobù.", vi: "Sáng nào anh ấy cũng chạy bộ." }
        ],
        exercises: [
          { type: "mc", q: "Khi rảnh tôi thường xem phim.", choices: ["我常常看電影有空的時候。", "有空的時候，我常常看電影。", "我看電影常常有空的時候。", "的時候有空，我常常看電影。"], answer: 1 },
          { type: "mc", q: "Tôi thường dậy sớm.", choices: ["我起床常常很早。", "常常我早起床。", "我常常很早起床。", "我很早常常起床。"], answer: 2 }
        ] }
    ],
    pron: {
      title: "Ngữ điệu câu & nhóm từ",
      explain: "Câu dài nên đọc theo nhóm nghĩa, ngắt nhẹ giữa các nhóm: 我每天早上 / 七點 / 起床. Câu hỏi có 嗎 không cần lên giọng mạnh ở cuối như tiếng Việt — 嗎 đã đánh dấu câu hỏi.",
      tips: [
        "Giữ đúng thanh điệu của từng chữ ngay cả khi nói nhanh — đây là lỗi phổ biến nhất trong phần nói.",
        "睡覺 shuìjiào: chữ 覺 ở đây đọc jiào; trong 覺得 đọc jué."
      ],
      drills: [
        { zh: "起床", zy: "ㄑㄧˇ ㄔㄨㄤˊ", py: "qǐchuáng", note: "3 + 2" },
        { zh: "睡覺", zy: "ㄕㄨㄟˋ ㄐㄧㄠˋ", py: "shuìjiào", note: "4 + 4" },
        { zh: "洗澡", zy: "ㄒㄧˇ ㄗㄠˇ", py: "xǐzǎo → xízǎo", note: "3 + 3" },
        { zh: "常常", zy: "ㄔㄤˊ ㄔㄤˊ", py: "chángcháng", note: "2 + 2" },
        { zh: "早上", zy: "ㄗㄠˇ ˙ㄕㄤ", py: "zǎoshang", note: "3 + nhẹ" },
        { zh: "我每天早上七點起床", zy: "ㄨㄛˇ ㄇㄟˇ ㄊㄧㄢ ㄗㄠˇ ˙ㄕㄤ ㄑㄧ ㄉㄧㄢˇ ㄑㄧˇ ㄔㄨㄤˊ", py: "wǒ měitiān zǎoshang qī diǎn qǐchuáng", note: "ngắt nhịp theo nhóm" }
      ],
      toneQuiz: [ ["正", 4], ["起", 3], ["床", 2], ["睡", 4], ["早", 3], ["餐", 1], ["班", 1], ["洗", 3], ["時", 2], ["每", 3], ["常", 2], ["晚", 3], ["聽", 1], ["音", 1] ]
    }
  },

  // ───────────────────────── BÀI 10 ─────────────────────────
  {
    id: 10, unit: 2, level: "A2",
    title: "我感冒了", titleVi: "Sức khỏe & lý do",
    goal: "Nói về sức khỏe, đi khám bệnh, giải thích lý do (因為…所以), điều kiện (如果…就) và lời khuyên (應該).",
    vocab: [
      { hz: "身體", zy: "ㄕㄣ ㄊㄧˇ", py: "shēntǐ", vi: "cơ thể; sức khỏe", hv: "THÂN THỂ",
        story: "身 = hình người có bụng to. 體 = 骨 (xương) + 豊: toàn bộ xương thịt → cơ thể.",
        ex: { zh: "你身體好嗎？", py: "Nǐ shēntǐ hǎo ma?", vi: "Sức khỏe bạn tốt không?" } },
      { hz: "生病", zy: "ㄕㄥ ㄅㄧㄥˋ", py: "shēngbìng", vi: "bị ốm, sinh bệnh", hv: "SINH BỆNH",
        story: "生 = sinh ra. 病 = 疒 (người nằm trên giường bệnh) + 丙. Sinh ra bệnh → bị ốm. Mọi chữ có 疒 đều liên quan đến bệnh!",
        ex: { zh: "他生病了，今天沒來。", py: "Tā shēngbìng le, jīntiān méi lái.", vi: "Anh ấy bị ốm, hôm nay không đến." } },
      { hz: "感冒", zy: "ㄍㄢˇ ㄇㄠˋ", py: "gǎnmào", vi: "cảm cúm, bị cảm", hv: "CẢM MẠO",
        story: "感 = 咸 + 心 (tim): cảm nhận. 冒 = cái mũ (冃) trên mắt (目): xông ra. Cảm nhận gió lạnh xông vào → bị cảm.",
        ex: { zh: "我感冒了。", py: "Wǒ gǎnmào le.", vi: "Tôi bị cảm rồi." } },
      { hz: "發燒", zy: "ㄈㄚ ㄕㄠ", py: "fāshāo", vi: "sốt", hv: "PHÁT THIÊU",
        story: "發 = phát ra. 燒 = 火 (lửa) + 堯 (cao): lửa cháy cao. Cơ thể phát ra lửa → sốt.",
        ex: { zh: "你發燒了嗎？", py: "Nǐ fāshāo le ma?", vi: "Bạn có sốt không?" } },
      { hz: "頭痛", zy: "ㄊㄡˊ ㄊㄨㄥˋ", py: "tóutòng", vi: "đau đầu", hv: "ĐẦU THỐNG",
        story: "頭 = 豆 + 頁 (cái đầu). 痛 = 疒 (bệnh) + 甬. Bệnh ở đầu → đau đầu. Ở Đài Loan cũng hay nói 頭很痛.",
        ex: { zh: "我有一點頭痛。", py: "Wǒ yǒu yìdiǎn tóutòng.", vi: "Tôi hơi đau đầu." } },
      { hz: "醫生", zy: "ㄧ ㄕㄥ", py: "yīshēng", vi: "bác sĩ", hv: "Y SINH",
        story: "醫 = hộp đựng mũi tên (医) + 殳 (dụng cụ) + 酉 (bình rượu thuốc) → chữa bệnh. 生 = người. Người chữa bệnh → bác sĩ.",
        ex: { zh: "你應該去看醫生。", py: "Nǐ yīnggāi qù kàn yīshēng.", vi: "Bạn nên đi khám bác sĩ." } },
      { hz: "醫院", zy: "ㄧ ㄩㄢˋ", py: "yīyuàn", vi: "bệnh viện", hv: "Y VIỆN",
        story: "醫 = chữa bệnh. 院 = ⻖ (gò đất) + 完: khu nhà có tường bao. Khu nhà chữa bệnh → bệnh viện.",
        ex: { zh: "醫院在哪裡？", py: "Yīyuàn zài nǎlǐ?", vi: "Bệnh viện ở đâu?" } },
      { hz: "藥", zy: "ㄧㄠˋ", py: "yào", vi: "thuốc", hv: "DƯỢC",
        story: "艹 (cỏ) + 樂 (vui). Cỏ cây làm cho người bệnh vui trở lại → thuốc. Uống thuốc: 吃藥 (dùng 吃, không dùng 喝!).",
        ex: { zh: "一天吃三次藥。", py: "Yì tiān chī sān cì yào.", vi: "Mỗi ngày uống thuốc ba lần." } },
      { hz: "休息", zy: "ㄒㄧㄡ ˙ㄒㄧ", py: "xiūxi", vi: "nghỉ ngơi", hv: "HƯU TỨC",
        story: "休 = 亻(người) tựa vào 木 (cây) → nghỉ. 息 = 自 (mũi) + 心 (tim): hơi thở. Tựa gốc cây thở đều → nghỉ ngơi.",
        ex: { zh: "你要多休息。", py: "Nǐ yào duō xiūxi.", vi: "Bạn cần nghỉ ngơi nhiều." } },
      { hz: "因為", zy: "ㄧㄣ ㄨㄟˋ", py: "yīnwèi", vi: "bởi vì", hv: "NHÂN VỊ",
        story: "因 = người (大) nằm trên chiếu (口): nguyên nhân, nền tảng. 為 = vì. Đọc giống Hán-Việt 'nhân vì'.",
        ex: { zh: "因為下雨，所以我沒去。", py: "Yīnwèi xiàyǔ, suǒyǐ wǒ méi qù.", vi: "Vì trời mưa nên tôi không đi." } },
      { hz: "所以", zy: "ㄙㄨㄛˇ ㄧˇ", py: "suǒyǐ", vi: "cho nên, vì vậy", hv: "SỞ DĨ",
        story: "所 = 戶 (cửa) + 斤 (rìu): nơi chốn. 以 = dùng. 'Sở dĩ' — vì thế. Biến điệu 3+3 → suóyǐ.",
        ex: { zh: "我感冒了，所以今天請假。", py: "Wǒ gǎnmào le, suǒyǐ jīntiān qǐngjià.", vi: "Tôi bị cảm nên hôm nay xin nghỉ." } },
      { hz: "如果", zy: "ㄖㄨˊ ㄍㄨㄛˇ", py: "rúguǒ", vi: "nếu", hv: "NHƯ QUẢ",
        story: "如 = 女 + 口: làm theo lời nói → như. 果 = quả trên cây (木). 'Như kết quả là…' → nếu.",
        ex: { zh: "如果你累了，就休息吧。", py: "Rúguǒ nǐ lèi le, jiù xiūxi ba.", vi: "Nếu bạn mệt thì nghỉ đi." } },
      { hz: "應該", zy: "ㄧㄥ ㄍㄞ", py: "yīnggāi", vi: "nên, cần phải", hv: "ỨNG CAI",
        story: "應 = 广 (mái) + 亻 + 隹 (chim) + 心: đáp ứng. 該 = 言 (lời) + 亥: điều phải làm. Đáp ứng điều phải làm → nên.",
        ex: { zh: "你應該多喝水。", py: "Nǐ yīnggāi duō hē shuǐ.", vi: "Bạn nên uống nhiều nước." } },
      { hz: "請假", zy: "ㄑㄧㄥˇ ㄐㄧㄚˋ", py: "qǐngjià", vi: "xin nghỉ (học, làm)", hv: "THỈNH GIẢ",
        story: "請 = 言 (lời) + 青: lời nói lịch sự → xin. 假 = kỳ nghỉ. Xin được nghỉ.",
        ex: { zh: "我想請兩天假。", py: "Wǒ xiǎng qǐng liǎng tiān jià.", vi: "Tôi muốn xin nghỉ hai ngày." } },
      { hz: "累", zy: "ㄌㄟˋ", py: "lèi", vi: "mệt", hv: "LŨY",
        story: "田 (ruộng) + 糸 (sợi tơ). Làm ruộng rồi lại dệt vải cả ngày → mệt.",
        ex: { zh: "今天我很累。", py: "Jīntiān wǒ hěn lèi.", vi: "Hôm nay tôi rất mệt." } },
      { hz: "就", zy: "ㄐㄧㄡˋ", py: "jiù", vi: "thì (如果…就); liền, ngay", hv: "TỰU",
        story: "京 (kinh đô) + 尤. Đến được kinh đô thì mọi việc thành → thì, liền.",
        ex: { zh: "我下課就回家。", py: "Wǒ xiàkè jiù huí jiā.", vi: "Tan học là tôi về nhà ngay." } }
    ],
    grammar: [
      { title: "因為…，所以… — Vì … nên …",
        explain: "Nêu nguyên nhân – kết quả. Có thể dùng cả hai hoặc chỉ một vế. 因為 có thể đứng trước hoặc sau chủ ngữ. Hỏi lý do: 為什麼？",
        pattern: "因為 + Nguyên nhân，所以 + Kết quả",
        examples: [
          { zh: "因為我生病了，所以沒去上課。", py: "Yīnwèi wǒ shēngbìng le, suǒyǐ méi qù shàngkè.", vi: "Vì tôi bị ốm nên không đi học." },
          { zh: "你為什麼不吃？— 因為我不餓。", py: "Nǐ wèishénme bù chī? — Yīnwèi wǒ bú è.", vi: "Sao bạn không ăn? — Vì tôi không đói." }
        ],
        exercises: [
          { type: "mc", q: "Vì trời mưa nên tôi đi taxi.", choices: ["所以下雨，因為我坐計程車。", "因為下雨，所以我坐計程車。", "因為我坐計程車，所以下雨。", "下雨因為，我坐計程車所以。"], answer: 1 },
          { type: "mc", q: "Hỏi 'Tại sao?'", choices: ["什麼為？", "為什麼？", "因為什麼所以？", "怎麼為？"], answer: 1 },
          { type: "order", words: ["因為", "太累了", "所以", "我", "想休息"], vi: "Vì mệt quá nên tôi muốn nghỉ." }
        ] },
      { title: "如果…(的話)，就… — Nếu … thì …",
        explain: "Câu điều kiện. 的話 có thể thêm cuối vế điều kiện. 就 đứng SAU chủ ngữ của vế sau (không đứng đầu câu như 'thì').",
        pattern: "如果 + Điều kiện + (的話)，Chủ ngữ + 就 + Kết quả",
        examples: [
          { zh: "如果明天下雨，我就不去了。", py: "Rúguǒ míngtiān xiàyǔ, wǒ jiù bú qù le.", vi: "Nếu mai mưa thì tôi không đi nữa." }
        ],
        exercises: [
          { type: "mc", q: "Nếu bạn sốt thì nên đi bệnh viện.", choices: ["如果你發燒，就你應該去醫院。", "如果你發燒，你就應該去醫院。", "你發燒如果，就應該去醫院。", "就你發燒，如果應該去醫院。"], answer: 1, explain: "就 đứng sau chủ ngữ 你." },
          { type: "order", words: ["如果", "你有空", "我們", "就", "去看電影"], vi: "Nếu bạn rảnh thì chúng ta đi xem phim." }
        ] },
      { title: "應該 + V · 了 chỉ sự thay đổi",
        explain: "應該 + V = nên làm (lời khuyên); phủ định 不應該. 了 ở CUỐI câu báo hiệu tình huống đã thay đổi: 我感冒了 (giờ tôi bị cảm rồi), 我好了 (tôi khỏe lại rồi), 下雨了 (trời mưa rồi).",
        pattern: "Chủ ngữ + 應該 + V   ·   Câu + 了 (thay đổi)",
        examples: [
          { zh: "你不應該喝那麼多咖啡。", py: "Nǐ bù yīnggāi hē nàme duō kāfēi.", vi: "Bạn không nên uống nhiều cà phê như vậy." },
          { zh: "我現在不發燒了。", py: "Wǒ xiànzài bù fāshāo le.", vi: "Bây giờ tôi hết sốt rồi." }
        ],
        exercises: [
          { type: "mc", q: "Trời mưa rồi!", choices: ["下雨了！", "了下雨！", "下了雨了！", "在下雨了！"], answer: 0 },
          { type: "mc", q: "Bạn nên nghỉ ngơi nhiều.", choices: ["你多應該休息。", "你應該多休息。", "應該你多休息。", "你休息應該多。"], answer: 1 }
        ] }
    ],
    pron: {
      title: "Những cặp âm người Việt hay nhầm",
      explain: "ㄓ zh (uốn lưỡi) ↔ ㄗ z (lưỡi thẳng); ㄕ sh ↔ ㄙ s; ㄩ ü ↔ ㄨ u; -n ↔ -ng. Thêm cặp ㄐ j ↔ ㄓ zh: 就 jiù ≠ 舊? (cùng âm) nhưng 就 jiù khác 走 zǒu. Hãy nghe kỹ và đọc theo từng cặp.",
      tips: [
        "所以 suǒyǐ: biến điệu → suóyǐ.",
        "因為 yīnwèi: chữ 為 thanh 4 (vì), khác 為 wéi thanh 2 (làm)."
      ],
      drills: [
        { zh: "身體", zy: "ㄕㄣ ㄊㄧˇ", py: "shēntǐ", note: "ㄕ uốn lưỡi + ㄣ" },
        { zh: "生病", zy: "ㄕㄥ ㄅㄧㄥˋ", py: "shēngbìng", note: "ㄥ + ㄧㄥ" },
        { zh: "醫院", zy: "ㄧ ㄩㄢˋ", py: "yīyuàn", note: "ㄩㄢ (pinyin: yuan)" },
        { zh: "所以", zy: "ㄙㄨㄛˇ ㄧˇ", py: "suǒyǐ → suóyǐ", note: "3 + 3" },
        { zh: "感冒", zy: "ㄍㄢˇ ㄇㄠˋ", py: "gǎnmào", note: "3 + 4" },
        { zh: "請假", zy: "ㄑㄧㄥˇ ㄐㄧㄚˋ", py: "qǐngjià", note: "ㄑ bật hơi + ㄐ" }
      ],
      toneQuiz: [ ["身", 1], ["體", 3], ["病", 4], ["感", 3], ["冒", 4], ["發", 1], ["頭", 2], ["痛", 4], ["醫", 1], ["藥", 4], ["休", 1], ["因", 1], ["如", 2], ["累", 4] ]
    }
  }
);

// Hình minh họa (emoji) cho phần thi 看圖 — chữ Hán → emoji
window.PICS = {
  "老師": "🧑‍🏫", "學生": "🧑‍🎓", "家": "🏠", "爸爸": "👨", "媽媽": "👩", "朋友": "👫", "人": "🧍",
  "一": "1️⃣", "二": "2️⃣", "三": "3️⃣", "四": "4️⃣", "五": "5️⃣", "六": "6️⃣", "七": "7️⃣", "八": "8️⃣", "九": "9️⃣", "十": "🔟",
  "月": "🌙", "點": "🕒", "吃": "🍽️", "喝": "🥤", "茶": "🍵", "咖啡": "☕", "水": "💧", "飯": "🍚", "錢": "💰", "杯": "🥛",
  "牛肉麵": "🍜", "珍珠奶茶": "🧋", "學校": "🏫", "捷運": "🚇", "坐": "🪑", "公車": "🚌", "公司": "🏢", "中文": "🀄", "回": "↩️",
  "看": "👀", "電影": "🎬", "買": "🛒", "旅行": "🧳", "玩": "🎮",
  "游泳": "🏊", "開車": "🚗", "唱歌": "🎤", "跳舞": "💃", "寫": "✍️", "說": "🗣️", "快": "🐇", "慢": "🐢",
  "熱": "🥵", "冷": "🥶", "下雨": "🌧️", "夏天": "☀️", "冬天": "⛄", "颱風": "🌀", "高": "🦒", "度": "🌡️",
  "起床": "⏰", "睡覺": "😴", "早餐": "🥪", "上班": "💼", "洗澡": "🛁", "手機": "📱", "聽": "👂", "音樂": "🎵", "運動": "🏃",
  "生病": "🤒", "感冒": "🤧", "發燒": "🌡️", "頭痛": "🤕", "醫生": "👨‍⚕️", "醫院": "🏥", "藥": "💊", "休息": "🛌", "累": "😩"
};
