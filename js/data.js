// Nội dung bài học — Tiếng Trung phồn thể (Đài Loan), trình độ TOCFL Band A
// Mỗi từ: hz (chữ Hán), zy (chú âm, mỗi âm tiết cách nhau bằng dấu cách), py (pinyin),
//         vi (nghĩa tiếng Việt), hv (âm Hán-Việt), story (câu chuyện ghi nhớ bộ thủ), ex (ví dụ)

window.UNITS = [
  { id: 1, title: "Đơn vị 1 — Cuộc sống hằng ngày", lessons: [1, 2, 3, 4, 5] }
];

window.LESSONS = [
  // ───────────────────────── BÀI 1 ─────────────────────────
  {
    id: 1, unit: 1,
    title: "你好！", titleVi: "Chào hỏi & giới thiệu bản thân",
    goal: "Chào hỏi, nói tên, quốc tịch và nghề nghiệp đơn giản.",
    vocab: [
      { hz: "你", zy: "ㄋㄧˇ", py: "nǐ", vi: "bạn, anh, chị (ngôi thứ hai)", hv: "NỄ",
        story: "亻(người đứng) + 尔 (ngươi). Người đang đứng ngay trước mặt mình, chính là 'ngươi' → 你 = bạn.",
        ex: { zh: "你好！", py: "Nǐ hǎo!", vi: "Xin chào!" } },
      { hz: "好", zy: "ㄏㄠˇ", py: "hǎo", vi: "tốt, khỏe, hay; được", hv: "HẢO",
        story: "女 (người mẹ) bế 子 (đứa con). Mẹ có con bên cạnh là điều tốt đẹp nhất → 好 = tốt.",
        ex: { zh: "我很好。", py: "Wǒ hěn hǎo.", vi: "Tôi rất khỏe." } },
      { hz: "我", zy: "ㄨㄛˇ", py: "wǒ", vi: "tôi, mình", hv: "NGÃ",
        story: "Bên trái là 手 (bàn tay), bên phải là 戈 (cây giáo). Tay cầm giáo để bảo vệ chính mình → 我 = tôi.",
        ex: { zh: "我是學生。", py: "Wǒ shì xuéshēng.", vi: "Tôi là học sinh." } },
      { hz: "他", zy: "ㄊㄚ", py: "tā", vi: "anh ấy, ông ấy", hv: "THA",
        story: "亻(người) + 也 (cũng). 'Người kia cũng ở đây' → người thứ ba: anh ấy.",
        ex: { zh: "他是老師。", py: "Tā shì lǎoshī.", vi: "Anh ấy là giáo viên." } },
      { hz: "她", zy: "ㄊㄚ", py: "tā", vi: "cô ấy, chị ấy", hv: "THA",
        story: "Giống 他 nhưng thay 亻 bằng 女 (phụ nữ) → cô ấy. Đọc giống hệt 他!",
        ex: { zh: "她是臺灣人。", py: "Tā shì Táiwānrén.", vi: "Cô ấy là người Đài Loan." } },
      { hz: "是", zy: "ㄕˋ", py: "shì", vi: "là; đúng vậy", hv: "THỊ",
        story: "Trên là 日 (mặt trời), dưới giống 正 (chính, đúng). Dưới ánh mặt trời mọi thứ đều rõ ràng là đúng → 是 = là.",
        ex: { zh: "我是越南人。", py: "Wǒ shì Yuènánrén.", vi: "Tôi là người Việt Nam." } },
      { hz: "很", zy: "ㄏㄣˇ", py: "hěn", vi: "rất", hv: "NGẬN",
        story: "彳 (bước chân) + 艮 (cứng đầu). Bước đi một cách rất cứng đầu → 很 = rất.",
        ex: { zh: "你很好。", py: "Nǐ hěn hǎo.", vi: "Bạn rất tốt." } },
      { hz: "叫", zy: "ㄐㄧㄠˋ", py: "jiào", vi: "gọi; tên là", hv: "KHIẾU",
        story: "口 (miệng) + 丩 (sợi dây quấn). Mở miệng gọi to, như kéo sợi dây về phía mình → 叫 = gọi. 我叫… = Tôi tên là…",
        ex: { zh: "我叫小明。", py: "Wǒ jiào Xiǎomíng.", vi: "Tôi tên là Tiểu Minh." } },
      { hz: "什麼", zy: "ㄕㄣˊ ˙ㄇㄜ", py: "shénme", vi: "cái gì, gì", hv: "THẬP MA",
        story: "什 = 亻(người) + 十 (mười). 麼 = 麻 (cây gai) + 幺 (nhỏ xíu). Mười người chụm đầu hỏi: 'Thứ nhỏ xíu trong bụi gai là cái gì?'",
        ex: { zh: "你叫什麼名字？", py: "Nǐ jiào shénme míngzi?", vi: "Bạn tên là gì?" } },
      { hz: "名字", zy: "ㄇㄧㄥˊ ˙ㄗ", py: "míngzi", vi: "tên", hv: "DANH TỰ",
        story: "名 = 夕 (buổi tối) + 口 (miệng): trời tối không thấy mặt, phải dùng miệng gọi tên. 字 = 宀 (mái nhà) + 子 (con): đứa con trong nhà được đặt tên.",
        ex: { zh: "他的名字是大衛。", py: "Tā de míngzi shì Dàwèi.", vi: "Tên anh ấy là David." } },
      { hz: "謝謝", zy: "ㄒㄧㄝˋ ˙ㄒㄧㄝ", py: "xièxie", vi: "cảm ơn", hv: "TẠ",
        story: "言 (lời nói) + 射 (bắn). 'Bắn' lời cảm ơn thẳng tới người đã giúp mình → 謝 = cảm tạ.",
        ex: { zh: "謝謝你！", py: "Xièxie nǐ!", vi: "Cảm ơn bạn!" } },
      { hz: "不客氣", zy: "ㄅㄨˊ ㄎㄜˋ ˙ㄑㄧ", py: "bú kèqi", vi: "không có gì (đáp lời cảm ơn)", hv: "BẤT KHÁCH KHÍ",
        story: "不 (không) + 客氣 (khách khí). 'Đừng khách khí' → không có gì. Chú ý 不 đổi thành thanh 2 (bú) vì đứng trước thanh 4.",
        ex: { zh: "謝謝！— 不客氣。", py: "Xièxie! — Bú kèqi.", vi: "Cảm ơn! — Không có gì." } },
      { hz: "老師", zy: "ㄌㄠˇ ㄕ", py: "lǎoshī", vi: "thầy giáo, cô giáo", hv: "LÃO SƯ",
        story: "老 = hình người già tóc dài chống gậy. 師 = thầy. Người lớn tuổi nhiều kinh nghiệm đứng lớp → 老師.",
        ex: { zh: "王老師好！", py: "Wáng lǎoshī hǎo!", vi: "Chào thầy Vương!" } },
      { hz: "學生", zy: "ㄒㄩㄝˊ ㄕㄥ", py: "xuéshēng", vi: "học sinh, sinh viên", hv: "HỌC SINH",
        story: "學: hai bàn tay (臼) trao kiến thức (爻) cho đứa trẻ (子) dưới mái nhà (冖). 生: mầm cây mọc lên từ mặt đất → người trẻ.",
        ex: { zh: "你是學生嗎？", py: "Nǐ shì xuéshēng ma?", vi: "Bạn là học sinh phải không?" } },
      { hz: "嗎", zy: "˙ㄇㄚ", py: "ma", vi: "(trợ từ nghi vấn) …không?, …à?", hv: "MA",
        story: "口 (miệng) + 馬 (ngựa, đọc mǎ). Miệng phát ra âm 'ma' ở cuối câu để biến câu thành câu hỏi.",
        ex: { zh: "你好嗎？", py: "Nǐ hǎo ma?", vi: "Bạn khỏe không?" } },
      { hz: "不", zy: "ㄅㄨˋ", py: "bù", vi: "không", hv: "BẤT",
        story: "Hình con chim bay vút lên trời (nét ngang là bầu trời) và không quay trở lại → 不 = không.",
        ex: { zh: "我不是老師。", py: "Wǒ bú shì lǎoshī.", vi: "Tôi không phải giáo viên." } },
      { hz: "越南人", zy: "ㄩㄝˋ ㄋㄢˊ ㄖㄣˊ", py: "Yuènánrén", vi: "người Việt Nam", hv: "VIỆT NAM NHÂN",
        story: "越 = 走 (chạy) + 戉 (cái rìu): vượt qua. 南 = phương Nam. 人 = hình người đứng hai chân. Đọc gần giống Hán-Việt 'Việt Nam nhân'!",
        ex: { zh: "我是越南人。", py: "Wǒ shì Yuènánrén.", vi: "Tôi là người Việt Nam." } },
      { hz: "臺灣人", zy: "ㄊㄞˊ ㄨㄢ ㄖㄣˊ", py: "Táiwānrén", vi: "người Đài Loan", hv: "ĐÀI LOAN NHÂN",
        story: "臺 = đài cao (thường viết tắt là 台). 灣 = 氵(nước) + 彎 (cong): vịnh nước cong. Hòn đảo có đài cao bên vịnh biển → Đài Loan.",
        ex: { zh: "她是臺灣人嗎？", py: "Tā shì Táiwānrén ma?", vi: "Cô ấy là người Đài Loan à?" } }
    ],
    grammar: [
      { title: "A 是 B — A là B",
        explain: "Dùng 是 để nối hai danh từ, giống 'là' trong tiếng Việt. Không dùng 是 trước tính từ: nói 我很好, KHÔNG nói 我是好.",
        pattern: "Chủ ngữ + 是 + Danh từ",
        examples: [
          { zh: "我是學生。", py: "Wǒ shì xuéshēng.", vi: "Tôi là học sinh." },
          { zh: "他是臺灣人。", py: "Tā shì Táiwānrén.", vi: "Anh ấy là người Đài Loan." }
        ],
        exercises: [
          { type: "mc", q: "Tôi là người Việt Nam.", choices: ["我是越南人。", "我很越南人。", "是我越南人。", "我越南是人。"], answer: 0 },
          { type: "mc", q: "Câu nào ĐÚNG?", choices: ["我是好。", "我很好。", "我是很好。", "很我好。"], answer: 1, explain: "Trước tính từ (好) dùng 很, không dùng 是." },
          { type: "order", words: ["她", "是", "老師"], vi: "Cô ấy là giáo viên." }
        ] },
      { title: "…嗎？ — Câu hỏi có/không",
        explain: "Thêm 嗎 vào cuối câu trần thuật để thành câu hỏi có/không. Trật tự từ không thay đổi.",
        pattern: "Câu trần thuật + 嗎？",
        examples: [
          { zh: "你是老師嗎？", py: "Nǐ shì lǎoshī ma?", vi: "Bạn là giáo viên phải không?" },
          { zh: "你好嗎？", py: "Nǐ hǎo ma?", vi: "Bạn khỏe không?" }
        ],
        exercises: [
          { type: "mc", q: "Bạn là người Đài Loan phải không?", choices: ["你是臺灣人嗎？", "嗎你是臺灣人？", "你嗎是臺灣人？", "你是嗎臺灣人？"], answer: 0 },
          { type: "order", words: ["他", "是", "學生", "嗎"], vi: "Anh ấy là học sinh à?" }
        ] },
      { title: "不 — Phủ định",
        explain: "Đặt 不 trước động từ hoặc tính từ để phủ định. 不 thường đọc thanh 4 (bù), nhưng đổi thành thanh 2 (bú) khi đứng trước một âm thanh 4: 不是 bú shì.",
        pattern: "Chủ ngữ + 不 + Động từ / Tính từ",
        examples: [
          { zh: "我不是老師。", py: "Wǒ bú shì lǎoshī.", vi: "Tôi không phải giáo viên." },
          { zh: "她不叫小美。", py: "Tā bú jiào Xiǎoměi.", vi: "Cô ấy không tên là Tiểu Mỹ." }
        ],
        exercises: [
          { type: "mc", q: "Anh ấy không phải người Việt Nam.", choices: ["他是不越南人。", "他不是越南人。", "不他是越南人。", "他是越南人不。"], answer: 1 },
          { type: "mc", q: "不 trong 不是 đọc là gì?", choices: ["bù (thanh 4)", "bú (thanh 2)", "bǔ (thanh 3)", "bu (thanh nhẹ)"], answer: 1, explain: "是 là thanh 4, nên 不 đổi sang thanh 2." },
          { type: "order", words: ["我", "不", "叫", "小明"], vi: "Tôi không tên là Tiểu Minh." }
        ] }
    ],
    pron: {
      title: "Bốn thanh điệu và thanh nhẹ",
      explain: "Tiếng Hoa có 4 thanh + 1 thanh nhẹ. Chú âm (注音) đánh dấu thanh: thanh 1 không dấu, thanh 2 ˊ, thanh 3 ˇ, thanh 4 ˋ, thanh nhẹ ˙ (đặt phía trước). So với tiếng Việt: thanh 1 ≈ thanh ngang nhưng cao hơn; thanh 2 ≈ dấu sắc; thanh 3 ≈ dấu hỏi (xuống thấp rồi lên); thanh 4 ≈ dấu huyền nhưng rơi mạnh và nhanh.",
      tips: [
        "Biến điệu thanh 3: hai thanh 3 liền nhau thì thanh 3 đầu đọc thành thanh 2. 你好 nǐ hǎo → ní hǎo.",
        "Người Đài Loan thường đọc thanh 3 thấp, không lên lại ở cuối (giống 'nửa thanh 3')."
      ],
      drills: [
        { zh: "媽", zy: "ㄇㄚ", py: "mā", note: "thanh 1 — mẹ" },
        { zh: "麻", zy: "ㄇㄚˊ", py: "má", note: "thanh 2 — cây gai" },
        { zh: "馬", zy: "ㄇㄚˇ", py: "mǎ", note: "thanh 3 — ngựa" },
        { zh: "罵", zy: "ㄇㄚˋ", py: "mà", note: "thanh 4 — mắng" },
        { zh: "嗎", zy: "˙ㄇㄚ", py: "ma", note: "thanh nhẹ — trợ từ hỏi" },
        { zh: "你好", zy: "ㄋㄧˇ ㄏㄠˇ", py: "nǐ hǎo → ní hǎo", note: "biến điệu 3 + 3" }
      ],
      toneQuiz: [ ["媽", 1], ["麻", 2], ["馬", 3], ["罵", 4], ["你", 3], ["是", 4], ["他", 1], ["名", 2], ["叫", 4], ["很", 3], ["師", 1], ["學", 2] ]
    }
  },

  // ───────────────────────── BÀI 2 ─────────────────────────
  {
    id: 2, unit: 1,
    title: "我的家", titleVi: "Gia đình & bạn bè",
    goal: "Giới thiệu thành viên gia đình, hỏi 'có mấy người', dùng 的 và lượng từ 個.",
    vocab: [
      { hz: "家", zy: "ㄐㄧㄚ", py: "jiā", vi: "nhà; gia đình", hv: "GIA",
        story: "宀 (mái nhà) + 豕 (con lợn). Ngày xưa nhà nào cũng nuôi lợn dưới mái nhà → 家 = nhà.",
        ex: { zh: "我家有四個人。", py: "Wǒ jiā yǒu sì ge rén.", vi: "Nhà tôi có bốn người." } },
      { hz: "爸爸", zy: "ㄅㄚˋ ˙ㄅㄚ", py: "bàba", vi: "bố, ba", hv: "BẢ",
        story: "父 (cha — hình bàn tay cầm roi) đặt trên 巴 (đọc là 'ba'). Người cha nghiêm khắc được gọi là 'ba'.",
        ex: { zh: "我爸爸是老師。", py: "Wǒ bàba shì lǎoshī.", vi: "Bố tôi là giáo viên." } },
      { hz: "媽媽", zy: "ㄇㄚ ˙ㄇㄚ", py: "māma", vi: "mẹ", hv: "MA",
        story: "女 (phụ nữ) + 馬 (ngựa, đọc mǎ). Người phụ nữ làm việc khỏe như ngựa vì cả nhà → mẹ.",
        ex: { zh: "媽媽很好。", py: "Māma hěn hǎo.", vi: "Mẹ rất khỏe." } },
      { hz: "哥哥", zy: "ㄍㄜ ˙ㄍㄜ", py: "gēge", vi: "anh trai", hv: "CA",
        story: "Hai chữ 可 (được) chồng lên nhau. Em nhờ gì, anh trai cũng nói 'được, được!'",
        ex: { zh: "你有哥哥嗎？", py: "Nǐ yǒu gēge ma?", vi: "Bạn có anh trai không?" } },
      { hz: "姐姐", zy: "ㄐㄧㄝˇ ˙ㄐㄧㄝ", py: "jiějie", vi: "chị gái", hv: "THƯ",
        story: "女 (con gái) + 且 (hình cái kệ nhiều tầng). Cô gái đứng trên mình một tầng → chị gái.",
        ex: { zh: "我姐姐叫小美。", py: "Wǒ jiějie jiào Xiǎoměi.", vi: "Chị tôi tên là Tiểu Mỹ." } },
      { hz: "弟弟", zy: "ㄉㄧˋ ˙ㄉㄧ", py: "dìdi", vi: "em trai", hv: "ĐỆ",
        story: "Hình sợi dây quấn quanh cây cọc theo thứ tự từ trên xuống → người sinh sau mình → em trai (huynh đệ).",
        ex: { zh: "他是我弟弟。", py: "Tā shì wǒ dìdi.", vi: "Cậu ấy là em trai tôi." } },
      { hz: "妹妹", zy: "ㄇㄟˋ ˙ㄇㄟ", py: "mèimei", vi: "em gái", hv: "MUỘI",
        story: "女 (con gái) + 未 (chưa). Cô gái 'chưa' lớn → em gái.",
        ex: { zh: "我沒有妹妹。", py: "Wǒ méiyǒu mèimei.", vi: "Tôi không có em gái." } },
      { hz: "有", zy: "ㄧㄡˇ", py: "yǒu", vi: "có", hv: "HỮU",
        story: "Phía trên là bàn tay (𠂇), phía dưới là 月 (miếng thịt). Tay đang cầm miếng thịt → 有 = có.",
        ex: { zh: "我有兩個哥哥。", py: "Wǒ yǒu liǎng ge gēge.", vi: "Tôi có hai anh trai." } },
      { hz: "沒有", zy: "ㄇㄟˊ ㄧㄡˇ", py: "méiyǒu", vi: "không có", hv: "MỘT HỮU",
        story: "沒 = 氵(nước) + 殳. Đồ vật chìm mất dưới nước → mất rồi, không có. Phủ định của 有 luôn là 沒有, không bao giờ là 不有.",
        ex: { zh: "她沒有弟弟。", py: "Tā méiyǒu dìdi.", vi: "Cô ấy không có em trai." } },
      { hz: "幾", zy: "ㄐㄧˇ", py: "jǐ", vi: "mấy (hỏi số nhỏ, thường dưới 10)", hv: "KỶ",
        story: "Trên có hai sợi tơ nhỏ (幺幺), dưới là người lính cầm vũ khí. Chỉ còn vài sợi tơ mỏng → còn 'mấy' sợi?",
        ex: { zh: "你家有幾個人？", py: "Nǐ jiā yǒu jǐ ge rén?", vi: "Nhà bạn có mấy người?" } },
      { hz: "個", zy: "ㄍㄜˋ", py: "gè", vi: "cái, người (lượng từ chung)", hv: "CÁ",
        story: "亻(người) + 固 (chắc chắn). Mỗi người là một 'cá thể' riêng biệt → lượng từ để đếm. Trong câu thường đọc nhẹ: ge.",
        ex: { zh: "三個學生", py: "sān ge xuéshēng", vi: "ba học sinh" } },
      { hz: "兩", zy: "ㄌㄧㄤˇ", py: "liǎng", vi: "hai (dùng trước lượng từ)", hv: "LƯỠNG",
        story: "Hình cái cân có hai đĩa cân cân bằng → hai. Nói 兩個人, KHÔNG nói 二個人.",
        ex: { zh: "兩個人", py: "liǎng ge rén", vi: "hai người" } },
      { hz: "的", zy: "˙ㄉㄜ", py: "de", vi: "của (chỉ sở hữu)", hv: "ĐÍCH",
        story: "白 (trắng, rõ ràng) + 勺 (cái muỗng). Phải nói rõ ràng cái muỗng này là CỦA ai → 的.",
        ex: { zh: "這是我的老師。", py: "Zhè shì wǒ de lǎoshī.", vi: "Đây là giáo viên của tôi." } },
      { hz: "朋友", zy: "ㄆㄥˊ ㄧㄡˇ", py: "péngyǒu", vi: "bạn bè", hv: "BẰNG HỮU",
        story: "朋 = hai mặt trăng (月月) đứng ngang hàng nhau. 友 = hai bàn tay nắm lấy nhau. Bạn bè là người ngang hàng, nắm tay nhau.",
        ex: { zh: "他是我的好朋友。", py: "Tā shì wǒ de hǎo péngyǒu.", vi: "Anh ấy là bạn thân của tôi." } },
      { hz: "誰", zy: "ㄕㄟˊ", py: "shéi", vi: "ai", hv: "THÙY",
        story: "言 (lời nói) + 隹 (con chim nhỏ). Nghe tiếng chim kêu ngoài cửa, hỏi: 'Ai đấy?'",
        ex: { zh: "他是誰？", py: "Tā shì shéi?", vi: "Anh ấy là ai?" } },
      { hz: "人", zy: "ㄖㄣˊ", py: "rén", vi: "người", hv: "NHÂN",
        story: "Hình một người đang bước đi bằng hai chân.",
        ex: { zh: "我家有五個人。", py: "Wǒ jiā yǒu wǔ ge rén.", vi: "Nhà tôi có năm người." } }
    ],
    grammar: [
      { title: "有 / 沒有 — Có / không có",
        explain: "有 nghĩa là 'có'. Phủ định của 有 LUÔN LUÔN là 沒有 (không bao giờ dùng 不有).",
        pattern: "Chủ ngữ + 有 / 沒有 + Danh từ",
        examples: [
          { zh: "我有姐姐。", py: "Wǒ yǒu jiějie.", vi: "Tôi có chị gái." },
          { zh: "他沒有哥哥。", py: "Tā méiyǒu gēge.", vi: "Anh ấy không có anh trai." }
        ],
        exercises: [
          { type: "mc", q: "Tôi không có em trai.", choices: ["我不有弟弟。", "我沒有弟弟。", "我有不弟弟。", "我沒弟弟有。"], answer: 1, explain: "Phủ định của 有 là 沒有." },
          { type: "mc", q: "你有妹妹嗎？— (Không, tôi không có.)", choices: ["不，我不有。", "沒有，我沒有妹妹。", "不是，我是妹妹。", "沒有，我不妹妹。"], answer: 1 },
          { type: "order", words: ["她", "沒有", "哥哥"], vi: "Cô ấy không có anh trai." }
        ] },
      { title: "Số + 個 + Danh từ — Lượng từ",
        explain: "Trong tiếng Hoa, giữa số và danh từ phải có lượng từ (giống 'cái, con, người' trong tiếng Việt). 個 là lượng từ dùng nhiều nhất. Số 2 trước lượng từ dùng 兩, không dùng 二. Hỏi số lượng nhỏ dùng 幾 + lượng từ.",
        pattern: "Số / 幾 + 個 + Danh từ",
        examples: [
          { zh: "我有兩個弟弟。", py: "Wǒ yǒu liǎng ge dìdi.", vi: "Tôi có hai em trai." },
          { zh: "你家有幾個人？", py: "Nǐ jiā yǒu jǐ ge rén?", vi: "Nhà bạn có mấy người?" }
        ],
        exercises: [
          { type: "mc", q: "Hai người bạn", choices: ["二個朋友", "兩朋友", "兩個朋友", "個兩朋友"], answer: 2 },
          { type: "mc", q: "Nhà bạn có mấy người?", choices: ["你家有幾人？", "你家有幾個人？", "你家幾個有人？", "你家是幾個人？"], answer: 1 },
          { type: "order", words: ["我家", "有", "四", "個", "人"], vi: "Nhà tôi có bốn người." }
        ] },
      { title: "的 — Sở hữu",
        explain: "A 的 B = B của A. Lưu ý trật tự ngược với tiếng Việt: 我的朋友 = bạn của tôi. Với người thân thiết (gia đình), thường bỏ 的: 我媽媽 = mẹ tôi.",
        pattern: "Người sở hữu + 的 + Vật / Người",
        examples: [
          { zh: "他是我的朋友。", py: "Tā shì wǒ de péngyǒu.", vi: "Anh ấy là bạn của tôi." },
          { zh: "我媽媽是越南人。", py: "Wǒ māma shì Yuènánrén.", vi: "Mẹ tôi là người Việt Nam." }
        ],
        exercises: [
          { type: "mc", q: "Giáo viên của bạn", choices: ["老師的你", "你的老師", "的你老師", "你老師的"], answer: 1 },
          { type: "order", words: ["她", "是", "我", "的", "朋友"], vi: "Cô ấy là bạn của tôi." }
        ] }
    ],
    pron: {
      title: "Phụ âm đầu: ㄅㄆㄇㄈ ㄉㄊㄋㄌ",
      explain: "Nhóm phụ âm môi và đầu lưỡi. Quan trọng nhất là cặp không bật hơi / bật hơi: ㄅ b (giống 'p' tiếng Việt, không có hơi) và ㄆ p (bật mạnh hơi, như 'ph' nhưng mím môi). Tương tự ㄉ d (giống 't' tiếng Việt) và ㄊ t (giống 'th' tiếng Việt).",
      tips: [
        "Để tay trước miệng: ㄆ / ㄊ phải cảm thấy luồng hơi, ㄅ / ㄉ thì không.",
        "ㄈ f giống 'ph' tiếng Việt. ㄌ l giống 'l'. ㄋ n giống 'n'."
      ],
      drills: [
        { zh: "爸", zy: "ㄅㄚˋ", py: "bà", note: "ㄅ không bật hơi" },
        { zh: "怕", zy: "ㄆㄚˋ", py: "pà", note: "ㄆ bật hơi — sợ" },
        { zh: "妹", zy: "ㄇㄟˋ", py: "mèi", note: "ㄇ" },
        { zh: "飯", zy: "ㄈㄢˋ", py: "fàn", note: "ㄈ — cơm" },
        { zh: "弟", zy: "ㄉㄧˋ", py: "dì", note: "ㄉ không bật hơi" },
        { zh: "他", zy: "ㄊㄚ", py: "tā", note: "ㄊ bật hơi" },
        { zh: "你", zy: "ㄋㄧˇ", py: "nǐ", note: "ㄋ" },
        { zh: "兩", zy: "ㄌㄧㄤˇ", py: "liǎng", note: "ㄌ" }
      ],
      toneQuiz: [ ["家", 1], ["爸", 4], ["媽", 1], ["哥", 1], ["姐", 3], ["弟", 4], ["妹", 4], ["有", 3], ["沒", 2], ["幾", 3], ["朋", 2], ["誰", 2], ["人", 2], ["兩", 3] ]
    }
  },

  // ───────────────────────── BÀI 3 ─────────────────────────
  {
    id: 3, unit: 1,
    title: "今天幾號？", titleVi: "Số đếm, ngày tháng & giờ",
    goal: "Đếm 1–99, nói ngày tháng, thứ trong tuần và giờ.",
    vocab: [
      { hz: "一", zy: "ㄧ", py: "yī", vi: "một", hv: "NHẤT", story: "Một nét ngang = một.", ex: { zh: "一個人", py: "yí ge rén", vi: "một người" } },
      { hz: "二", zy: "ㄦˋ", py: "èr", vi: "hai (khi đếm số)", hv: "NHỊ", story: "Hai nét ngang = hai. Khi đứng trước lượng từ thì dùng 兩.", ex: { zh: "二月", py: "èryuè", vi: "tháng hai" } },
      { hz: "三", zy: "ㄙㄢ", py: "sān", vi: "ba", hv: "TAM", story: "Ba nét ngang = ba.", ex: { zh: "三個朋友", py: "sān ge péngyǒu", vi: "ba người bạn" } },
      { hz: "四", zy: "ㄙˋ", py: "sì", vi: "bốn", hv: "TỨ", story: "Một căn phòng (口) có bốn bức tường, bên trong treo hai tấm rèm → bốn.", ex: { zh: "四月", py: "sìyuè", vi: "tháng tư" } },
      { hz: "五", zy: "ㄨˇ", py: "wǔ", vi: "năm (số 5)", hv: "NGŨ", story: "Giữa trời (nét trên) và đất (nét dưới), hai đường đan chéo nhau — năm yếu tố ngũ hành.", ex: { zh: "五個人", py: "wǔ ge rén", vi: "năm người" } },
      { hz: "六", zy: "ㄌㄧㄡˋ", py: "liù", vi: "sáu", hv: "LỤC", story: "Hình một mái nhà nhỏ (亠) đứng trên hai chân → sáu.", ex: { zh: "六點", py: "liù diǎn", vi: "sáu giờ" } },
      { hz: "七", zy: "ㄑㄧ", py: "qī", vi: "bảy", hv: "THẤT", story: "Một nét ngang bị con dao chém cong xuống → bảy. Đừng nhầm với 匕.", ex: { zh: "七月", py: "qīyuè", vi: "tháng bảy" } },
      { hz: "八", zy: "ㄅㄚ", py: "bā", vi: "tám", hv: "BÁT", story: "Hai nét tách ra hai bên, như số 8 bị cắt đôi theo chiều dọc → tám.", ex: { zh: "八點", py: "bā diǎn", vi: "tám giờ" } },
      { hz: "九", zy: "ㄐㄧㄡˇ", py: "jiǔ", vi: "chín", hv: "CỬU", story: "Hình cánh tay vươn dài và cong nhất — số lớn nhất trong các số có một chữ số.", ex: { zh: "九月", py: "jiǔyuè", vi: "tháng chín" } },
      { hz: "十", zy: "ㄕˊ", py: "shí", vi: "mười", hv: "THẬP", story: "Hình dấu cộng (+): 5 + 5 = 10. 十一 = 11, 二十 = 20, 二十一 = 21.", ex: { zh: "十二月", py: "shí'èryuè", vi: "tháng mười hai" } },
      { hz: "今天", zy: "ㄐㄧㄣ ㄊㄧㄢ", py: "jīntiān", vi: "hôm nay", hv: "KIM THIÊN",
        story: "今 = mái che (人) trên một nét: ngay lúc này, đang ở dưới mái nhà → bây giờ. 天 = 一 trên đầu người dang tay (大) → bầu trời, ngày.",
        ex: { zh: "今天星期一。", py: "Jīntiān xīngqíyī.", vi: "Hôm nay là thứ Hai." } },
      { hz: "明天", zy: "ㄇㄧㄥˊ ㄊㄧㄢ", py: "míngtiān", vi: "ngày mai", hv: "MINH THIÊN",
        story: "明 = 日 (mặt trời) + 月 (mặt trăng) → sáng. Sau đêm trăng là ngày mới sáng sủa → ngày mai.",
        ex: { zh: "明天是十號。", py: "Míngtiān shì shí hào.", vi: "Ngày mai là mùng 10." } },
      { hz: "昨天", zy: "ㄗㄨㄛˊ ㄊㄧㄢ", py: "zuótiān", vi: "hôm qua", hv: "TẠC THIÊN",
        story: "昨 = 日 (ngày) + 乍 (chợt). Một ngày chợt trôi qua mất → hôm qua.",
        ex: { zh: "昨天星期天。", py: "Zuótiān xīngqítiān.", vi: "Hôm qua là Chủ nhật." } },
      { hz: "年", zy: "ㄋㄧㄢˊ", py: "nián", vi: "năm (thời gian)", hv: "NIÊN",
        story: "Hình người vác bó lúa trên vai. Mỗi vụ lúa chín là một năm.",
        ex: { zh: "二〇二六年", py: "èr líng èr liù nián", vi: "năm 2026" } },
      { hz: "月", zy: "ㄩㄝˋ", py: "yuè", vi: "tháng; mặt trăng", hv: "NGUYỆT",
        story: "Hình mặt trăng lưỡi liềm. Trăng tròn rồi khuyết một lần = một tháng.",
        ex: { zh: "十一月", py: "shíyīyuè", vi: "tháng mười một" } },
      { hz: "號", zy: "ㄏㄠˋ", py: "hào", vi: "ngày (trong tháng); số", hv: "HIỆU",
        story: "号 (kêu to) + 虎 (con hổ). Tiếng hổ gầm như hô to con số → số, ngày.",
        ex: { zh: "今天幾號？", py: "Jīntiān jǐ hào?", vi: "Hôm nay ngày mấy?" } },
      { hz: "星期", zy: "ㄒㄧㄥ ㄑㄧˊ", py: "xīngqí", vi: "tuần; thứ (星期一 = thứ Hai)", hv: "TINH KỲ",
        story: "星 = 日 (ánh sáng) + 生 (sinh ra): ánh sáng sinh ra trên trời → ngôi sao. 期 = 其 + 月: chu kỳ mặt trăng → kỳ hạn. Ở Đài Loan đọc xīngqí (thanh 2).",
        ex: { zh: "星期六", py: "xīngqíliù", vi: "thứ Bảy" } },
      { hz: "點", zy: "ㄉㄧㄢˇ", py: "diǎn", vi: "giờ; điểm, chấm", hv: "ĐIỂM",
        story: "黑 (màu đen) + 占. Một chấm mực đen trên mặt đồng hồ → giờ.",
        ex: { zh: "現在三點。", py: "Xiànzài sān diǎn.", vi: "Bây giờ là ba giờ." } },
      { hz: "現在", zy: "ㄒㄧㄢˋ ㄗㄞˋ", py: "xiànzài", vi: "bây giờ", hv: "HIỆN TẠI",
        story: "現 = 王 (ngọc) + 見 (nhìn thấy): viên ngọc hiện ra trước mắt. 在 = có mặt tại. Đọc giống Hán-Việt 'hiện tại'!",
        ex: { zh: "現在幾點？", py: "Xiànzài jǐ diǎn?", vi: "Bây giờ mấy giờ?" } }
    ],
    grammar: [
      { title: "Ngày tháng: 年 → 月 → 號 → 星期",
        explain: "Tiếng Hoa nói từ lớn đến nhỏ, ngược với tiếng Việt: năm → tháng → ngày → thứ. Thứ trong tuần: 星期 + số (星期一 = thứ Hai … 星期六 = thứ Bảy), Chủ nhật = 星期天 / 星期日.",
        pattern: "…年 …月 …號 星期…",
        examples: [
          { zh: "今天十一月二十六號星期四。", py: "Jīntiān shíyīyuè èrshíliù hào xīngqísì.", vi: "Hôm nay thứ Năm, ngày 26 tháng 11." },
          { zh: "明天星期幾？", py: "Míngtiān xīngqí jǐ?", vi: "Ngày mai thứ mấy?" }
        ],
        exercises: [
          { type: "mc", q: "Thứ Tư", choices: ["星期三", "星期四", "四星期", "星期五"], answer: 0, explain: "星期一 là thứ Hai, nên thứ Tư là 星期三." },
          { type: "mc", q: "Ngày 5 tháng 9", choices: ["五號九月", "九月五號", "九號五月", "五月九號"], answer: 1 },
          { type: "mc", q: "Chủ nhật", choices: ["星期七", "星期天", "星期十", "七星期"], answer: 1 },
          { type: "order", words: ["今天", "星期", "幾"], vi: "Hôm nay thứ mấy?" }
        ] },
      { title: "Số đếm 11–99",
        explain: "Ghép số như phép tính: 十一 = 10 + 1 = 11; 二十 = 2 × 10 = 20; 三十五 = 3 × 10 + 5 = 35. Rất giống tiếng Việt (ba mươi lăm)!",
        pattern: "Số chục + 十 + Số đơn vị",
        examples: [
          { zh: "二十六", py: "èrshíliù", vi: "26" },
          { zh: "九十九", py: "jiǔshíjiǔ", vi: "99" }
        ],
        exercises: [
          { type: "mc", q: "48", choices: ["四八十", "八十四", "四十八", "十四八"], answer: 2 },
          { type: "mc", q: "十七 = ?", choices: ["70", "17", "107", "71"], answer: 1 },
          { type: "mc", q: "三十 = ?", choices: ["13", "3", "30", "33"], answer: 2 }
        ] },
      { title: "Từ chỉ thời gian đứng TRƯỚC động từ",
        explain: "Từ chỉ thời gian (今天, 明天, 現在, 三點…) đặt trước động từ, có thể ở đầu câu hoặc sau chủ ngữ — không đặt ở cuối câu như tiếng Việt.",
        pattern: "Chủ ngữ + Thời gian + Động từ  /  Thời gian + Chủ ngữ + Động từ",
        examples: [
          { zh: "我明天有中文課。", py: "Wǒ míngtiān yǒu Zhōngwén kè.", vi: "Ngày mai tôi có lớp tiếng Hoa." },
          { zh: "現在我沒有錢。", py: "Xiànzài wǒ méiyǒu qián.", vi: "Bây giờ tôi không có tiền." }
        ],
        exercises: [
          { type: "mc", q: "Ngày mai anh ấy có lớp.", choices: ["他有課明天。", "他明天有課。", "有課他明天。", "他有明天課。"], answer: 1 },
          { type: "order", words: ["現在", "幾", "點"], vi: "Bây giờ là mấy giờ?" }
        ] }
    ],
    pron: {
      title: "Phụ âm ㄍㄎㄏ ㄐㄑㄒ & biến điệu của 一",
      explain: "ㄍ g (giống 'c' tiếng Việt, không bật hơi), ㄎ k (bật hơi mạnh, như 'kh' nhưng không ma sát), ㄏ h (giống 'h' nhưng ráp ở cuống họng, gần 'kh'). ㄐ j, ㄑ q, ㄒ x đọc với mặt lưỡi chạm vòm, môi bẹt như khi cười: ㄐ ≈ 'ch' nhẹ, ㄑ ≈ 'ch' bật hơi, ㄒ ≈ 'x' tiếng Việt.",
      tips: [
        "一 yī đổi thanh: trước thanh 4 → yí (一個 yí ge); trước thanh 1, 2, 3 → yì (一天 yì tiān). Khi đếm số, ngày tháng thì giữ yī.",
        "ㄑ (q) KHÔNG phải 'qu' tiếng Việt — đọc như 'ch' có bật hơi."
      ],
      drills: [
        { zh: "哥", zy: "ㄍㄜ", py: "gē", note: "ㄍ" },
        { zh: "客", zy: "ㄎㄜˋ", py: "kè", note: "ㄎ bật hơi" },
        { zh: "好", zy: "ㄏㄠˇ", py: "hǎo", note: "ㄏ" },
        { zh: "九", zy: "ㄐㄧㄡˇ", py: "jiǔ", note: "ㄐ" },
        { zh: "七", zy: "ㄑㄧ", py: "qī", note: "ㄑ bật hơi" },
        { zh: "星", zy: "ㄒㄧㄥ", py: "xīng", note: "ㄒ" },
        { zh: "一個", zy: "ㄧˊ ˙ㄍㄜ", py: "yí ge", note: "一 + thanh 4 → yí" },
        { zh: "一天", zy: "ㄧˋ ㄊㄧㄢ", py: "yì tiān", note: "一 + thanh 1 → yì" }
      ],
      toneQuiz: [ ["一", 1], ["二", 4], ["三", 1], ["四", 4], ["五", 3], ["六", 4], ["七", 1], ["八", 1], ["九", 3], ["十", 2], ["年", 2], ["月", 4], ["點", 3], ["今", 1] ]
    }
  },

  // ───────────────────────── BÀI 4 ─────────────────────────
  {
    id: 4, unit: 1,
    title: "你想喝什麼？", titleVi: "Ăn uống & mua sắm",
    goal: "Gọi đồ ăn, đồ uống, hỏi giá tiền bằng Đài tệ.",
    vocab: [
      { hz: "吃", zy: "ㄔ", py: "chī", vi: "ăn", hv: "NGẬT",
        story: "口 (miệng) + 乞 (xin). Cái miệng xin đồ ăn → 吃 = ăn.",
        ex: { zh: "你想吃什麼？", py: "Nǐ xiǎng chī shénme?", vi: "Bạn muốn ăn gì?" } },
      { hz: "喝", zy: "ㄏㄜ", py: "hē", vi: "uống", hv: "HÁT",
        story: "口 (miệng) + 曷 (hình người há miệng xin). Há miệng ra để uống nước.",
        ex: { zh: "我喝水。", py: "Wǒ hē shuǐ.", vi: "Tôi uống nước." } },
      { hz: "茶", zy: "ㄔㄚˊ", py: "chá", vi: "trà", hv: "TRÀ",
        story: "艹 (cỏ, lá) ở trên, 人 (người) ở giữa, 木 (cây) ở dưới. Người đứng giữa đám lá và thân cây để hái → lá trà.",
        ex: { zh: "我想喝茶。", py: "Wǒ xiǎng hē chá.", vi: "Tôi muốn uống trà." } },
      { hz: "咖啡", zy: "ㄎㄚ ㄈㄟ", py: "kāfēi", vi: "cà phê", hv: "(phiên âm)",
        story: "Cả hai chữ đều có bộ 口 (miệng) — dấu hiệu của từ phiên âm nước ngoài: ka-fei ≈ 'cà phê'.",
        ex: { zh: "一杯咖啡", py: "yì bēi kāfēi", vi: "một ly cà phê" } },
      { hz: "水", zy: "ㄕㄨㄟˇ", py: "shuǐ", vi: "nước", hv: "THỦY",
        story: "Hình dòng nước chảy ở giữa, hai bên là những giọt nước bắn ra.",
        ex: { zh: "我要一杯水。", py: "Wǒ yào yì bēi shuǐ.", vi: "Tôi muốn một ly nước." } },
      { hz: "飯", zy: "ㄈㄢˋ", py: "fàn", vi: "cơm; bữa ăn", hv: "PHẠN",
        story: "飠(ăn) + 反 (lật lại). Lật đi lật lại nồi cơm cho chín đều → cơm.",
        ex: { zh: "吃飯了嗎？", py: "Chīfàn le ma?", vi: "Ăn cơm chưa?" } },
      { hz: "想", zy: "ㄒㄧㄤˇ", py: "xiǎng", vi: "muốn; nghĩ; nhớ", hv: "TƯỞNG",
        story: "相 (nhìn nhau) + 心 (trái tim). Trong lòng hình dung khuôn mặt điều mình mong → muốn, nghĩ đến.",
        ex: { zh: "我想吃飯。", py: "Wǒ xiǎng chīfàn.", vi: "Tôi muốn ăn cơm." } },
      { hz: "要", zy: "ㄧㄠˋ", py: "yào", vi: "muốn, cần (mạnh, chắc chắn)", hv: "YẾU",
        story: "覀 (che phủ) + 女 (phụ nữ). Người phụ nữ hai tay chống hông: 'Tôi CẦN cái này!' → muốn, cần.",
        ex: { zh: "我要這個。", py: "Wǒ yào zhège.", vi: "Tôi lấy cái này." } },
      { hz: "多少", zy: "ㄉㄨㄛ ㄕㄠˇ", py: "duōshǎo", vi: "bao nhiêu", hv: "ĐA THIỂU",
        story: "多 = hai 夕 chồng lên nhau → nhiều. 少 = 小 (nhỏ) + một nét → ít. 'Nhiều hay ít?' → bao nhiêu.",
        ex: { zh: "多少錢？", py: "Duōshǎo qián?", vi: "Bao nhiêu tiền?" } },
      { hz: "錢", zy: "ㄑㄧㄢˊ", py: "qián", vi: "tiền", hv: "TIỀN",
        story: "金 (kim loại, vàng) + 戔 (hai ngọn giáo). Kim loại phải dùng vũ khí canh giữ → tiền. Đọc giống Hán-Việt 'tiền'!",
        ex: { zh: "我沒有錢。", py: "Wǒ méiyǒu qián.", vi: "Tôi không có tiền." } },
      { hz: "塊", zy: "ㄎㄨㄞˋ", py: "kuài", vi: "đồng (Đài tệ, khẩu ngữ); miếng", hv: "KHỐI",
        story: "土 (đất) + 鬼 (con ma). Con ma ôm cục đất → một khối, một cục → một đồng tiền. 五十塊 = 50 Đài tệ.",
        ex: { zh: "一杯五十塊。", py: "Yì bēi wǔshí kuài.", vi: "Một ly 50 đồng." } },
      { hz: "杯", zy: "ㄅㄟ", py: "bēi", vi: "ly, cốc (lượng từ)", hv: "BÔI",
        story: "木 (gỗ) + 不. Ngày xưa ly được làm bằng gỗ → 杯.",
        ex: { zh: "兩杯茶", py: "liǎng bēi chá", vi: "hai ly trà" } },
      { hz: "好吃", zy: "ㄏㄠˇ ㄔ", py: "hǎochī", vi: "ngon (đồ ăn)", hv: "HẢO NGẬT",
        story: "好 (tốt) + 吃 (ăn) = ăn thấy tốt → ngon. Với đồ uống thì nói 好喝.",
        ex: { zh: "牛肉麵很好吃！", py: "Niúròumiàn hěn hǎochī!", vi: "Mì bò rất ngon!" } },
      { hz: "牛肉麵", zy: "ㄋㄧㄡˊ ㄖㄡˋ ㄇㄧㄢˋ", py: "niúròumiàn", vi: "mì bò (món nổi tiếng Đài Loan)", hv: "NGƯU NHỤC MIẾN",
        story: "牛 = hình đầu con bò có sừng. 肉 = miếng thịt có vân. 麵 = 麥 (lúa mì) + 面 → sợi mì.",
        ex: { zh: "我要一碗牛肉麵。", py: "Wǒ yào yì wǎn niúròumiàn.", vi: "Tôi muốn một bát mì bò." } },
      { hz: "珍珠奶茶", zy: "ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ", py: "zhēnzhū nǎichá", vi: "trà sữa trân châu", hv: "TRÂN CHÂU NÃI TRÀ",
        story: "珍珠 = ngọc trai (trân châu), cả hai có bộ 王 (ngọc). 奶 = 女 + 乃: sữa của người mẹ. 茶 = trà. Đặc sản Đài Loan!",
        ex: { zh: "我想喝珍珠奶茶。", py: "Wǒ xiǎng hē zhēnzhū nǎichá.", vi: "Tôi muốn uống trà sữa trân châu." } },
      { hz: "喜歡", zy: "ㄒㄧˇ ㄏㄨㄢ", py: "xǐhuān", vi: "thích", hv: "HỶ HOAN",
        story: "喜 = cái trống (壴) + 口: đánh trống, miệng cười → vui. 歡 = vui vẻ. Vui vẻ hân hoan → thích.",
        ex: { zh: "我很喜歡喝咖啡。", py: "Wǒ hěn xǐhuān hē kāfēi.", vi: "Tôi rất thích uống cà phê." } }
    ],
    grammar: [
      { title: "想 / 要 + Động từ — Muốn làm gì",
        explain: "想 + V = muốn (nhẹ nhàng, lịch sự). 要 + V = muốn, sẽ (chắc chắn hơn). 要 + Danh từ = muốn có / lấy (khi gọi món). Phủ định: 不想 (không muốn).",
        pattern: "Chủ ngữ + 想 / 要 + Động từ (+ Tân ngữ)",
        examples: [
          { zh: "我想喝咖啡。", py: "Wǒ xiǎng hē kāfēi.", vi: "Tôi muốn uống cà phê." },
          { zh: "我要一杯奶茶。", py: "Wǒ yào yì bēi nǎichá.", vi: "Tôi lấy một ly trà sữa." }
        ],
        exercises: [
          { type: "mc", q: "Tôi không muốn ăn cơm.", choices: ["我想不吃飯。", "我不想吃飯。", "我沒想吃飯。", "不我想吃飯。"], answer: 1 },
          { type: "mc", q: "Bạn muốn uống gì?", choices: ["你想喝什麼？", "你什麼想喝？", "什麼你想喝？", "你想什麼喝？"], answer: 0, explain: "Từ để hỏi 什麼 nằm ở đúng vị trí của tân ngữ." },
          { type: "order", words: ["我", "想", "喝", "珍珠奶茶"], vi: "Tôi muốn uống trà sữa trân châu." }
        ] },
      { title: "多少錢？ — Hỏi giá",
        explain: "Hỏi giá: (Vật) + 多少錢？ Trả lời: Số + 塊 (khẩu ngữ, Đài tệ) hoặc 元 (văn viết). 多少 dùng cho số lượng bất kỳ, 幾 dùng cho số nhỏ.",
        pattern: "Vật + 多少錢？ → (Vật) + Số + 塊",
        examples: [
          { zh: "這杯茶多少錢？", py: "Zhè bēi chá duōshǎo qián?", vi: "Ly trà này bao nhiêu tiền?" },
          { zh: "六十五塊。", py: "Liùshíwǔ kuài.", vi: "65 đồng." }
        ],
        exercises: [
          { type: "mc", q: "Bao nhiêu tiền?", choices: ["幾錢？", "多少錢？", "錢多少？", "什麼錢？"], answer: 1 },
          { type: "mc", q: "一杯咖啡八十塊 nghĩa là?", choices: ["Một ly cà phê 18 đồng.", "Tám ly cà phê.", "Một ly cà phê 80 đồng.", "Cà phê rất ngon."], answer: 2 },
          { type: "order", words: ["牛肉麵", "多少", "錢"], vi: "Mì bò bao nhiêu tiền?" }
        ] },
      { title: "Số + Lượng từ + Danh từ: 杯, 碗, 個",
        explain: "Mỗi loại danh từ có lượng từ riêng: 杯 (ly) cho đồ uống, 碗 (bát) cho món ăn trong bát, 個 cho vật nói chung. Dùng 一 + thanh 1 → yì bēi.",
        pattern: "Số + 杯 / 碗 / 個 + Danh từ",
        examples: [
          { zh: "兩杯咖啡", py: "liǎng bēi kāfēi", vi: "hai ly cà phê" },
          { zh: "一碗飯", py: "yì wǎn fàn", vi: "một bát cơm" }
        ],
        exercises: [
          { type: "mc", q: "Ba ly trà", choices: ["三個茶", "三杯茶", "三茶杯", "茶三杯"], answer: 1 },
          { type: "mc", q: "Lượng từ phù hợp: 一 ___ 牛肉麵", choices: ["杯", "碗", "塊", "號"], answer: 1 }
        ] }
    ],
    pron: {
      title: "Phụ âm ㄓㄔㄕㄖ ㄗㄘㄙ & giọng Đài Loan",
      explain: "ㄓ zh, ㄔ ch, ㄕ sh, ㄖ r là âm uốn lưỡi (cong đầu lưỡi lên vòm). ㄗ z, ㄘ c, ㄙ s là âm đầu lưỡi thẳng (chạm sau răng). ㄔ / ㄘ bật hơi. ㄘ c đọc như 'ts' có hơi, KHÔNG phải 'c' tiếng Việt.",
      tips: [
        "Người Đài Loan thường uốn lưỡi rất nhẹ: 是 shì nghe gần như sì, 吃 chī gần như cī. Hãy nghe kỹ, nhưng khi thi TOCFL cả hai cách đều được hiểu.",
        "不 bù đổi thành bú trước thanh 4: 不要 bú yào, 不是 bú shì."
      ],
      drills: [
        { zh: "珍", zy: "ㄓㄣ", py: "zhēn", note: "ㄓ uốn lưỡi" },
        { zh: "茶", zy: "ㄔㄚˊ", py: "chá", note: "ㄔ uốn lưỡi, bật hơi" },
        { zh: "水", zy: "ㄕㄨㄟˇ", py: "shuǐ", note: "ㄕ" },
        { zh: "肉", zy: "ㄖㄡˋ", py: "ròu", note: "ㄖ" },
        { zh: "在", zy: "ㄗㄞˋ", py: "zài", note: "ㄗ lưỡi thẳng" },
        { zh: "菜", zy: "ㄘㄞˋ", py: "cài", note: "ㄘ bật hơi" },
        { zh: "四", zy: "ㄙˋ", py: "sì", note: "ㄙ" },
        { zh: "不要", zy: "ㄅㄨˊ ㄧㄠˋ", py: "bú yào", note: "不 + thanh 4 → bú" }
      ],
      toneQuiz: [ ["吃", 1], ["喝", 1], ["茶", 2], ["水", 3], ["飯", 4], ["想", 3], ["要", 4], ["錢", 2], ["塊", 4], ["杯", 1], ["牛", 2], ["肉", 4], ["奶", 3], ["喜", 3] ]
    }
  },

  // ───────────────────────── BÀI 5 ─────────────────────────
  {
    id: 5, unit: 1,
    title: "你去哪裡？", titleVi: "Địa điểm & đi lại",
    goal: "Hỏi và nói mình ở đâu, đi đâu, đi bằng phương tiện gì ở Đài Bắc.",
    vocab: [
      { hz: "去", zy: "ㄑㄩˋ", py: "qù", vi: "đi (đến nơi nào)", hv: "KHỨ",
        story: "土 (đất) + 厶 (hình bàn chân bước ra). Bước chân rời khỏi mảnh đất này → đi.",
        ex: { zh: "我去學校。", py: "Wǒ qù xuéxiào.", vi: "Tôi đi đến trường." } },
      { hz: "來", zy: "ㄌㄞˊ", py: "lái", vi: "đến, tới (về phía người nói)", hv: "LAI",
        story: "Hình cây lúa mì (木) có hai bông nặng hạt. Người xưa tin lúa mì là trời ban 'đến' cho người.",
        ex: { zh: "你來臺灣嗎？", py: "Nǐ lái Táiwān ma?", vi: "Bạn đến Đài Loan à?" } },
      { hz: "在", zy: "ㄗㄞˋ", py: "zài", vi: "ở, tại; đang", hv: "TẠI",
        story: "Một mầm cây (才) vừa nhú lên khỏi mặt đất (土) → đang có mặt ở đó → ở, tại.",
        ex: { zh: "我在家。", py: "Wǒ zài jiā.", vi: "Tôi ở nhà." } },
      { hz: "哪裡", zy: "ㄋㄚˇ ㄌㄧˇ", py: "nǎlǐ", vi: "ở đâu, chỗ nào", hv: "NA LÝ",
        story: "哪 = 口 (miệng) + 那 (kia): miệng hỏi 'chỗ kia là chỗ nào?'. 裡 = 衣 (áo) + 里 (làng): bên trong. Biến điệu 3+3 → ná lǐ. Ở Đài Loan cũng nói 哪裡 khi khiêm tốn đáp lời khen.",
        ex: { zh: "你在哪裡？", py: "Nǐ zài nǎlǐ?", vi: "Bạn đang ở đâu?" } },
      { hz: "這", zy: "ㄓㄜˋ", py: "zhè", vi: "này, đây", hv: "GIÁ",
        story: "辶 (bước đi) + 言 (lời nói). Vừa đi tới vừa nói 'cái này đây!' → này.",
        ex: { zh: "這是我的學校。", py: "Zhè shì wǒ de xuéxiào.", vi: "Đây là trường của tôi." } },
      { hz: "那", zy: "ㄋㄚˋ", py: "nà", vi: "kia, đó", hv: "NA",
        story: "Bên phải là ⻏ (bộ ấp = làng xóm). Ngôi làng ở đằng xa kia → kia, đó.",
        ex: { zh: "那是什麼？", py: "Nà shì shénme?", vi: "Kia là cái gì?" } },
      { hz: "學校", zy: "ㄒㄩㄝˊ ㄒㄧㄠˋ", py: "xuéxiào", vi: "trường học", hv: "HỌC HIỆU",
        story: "學 = học (đã gặp ở 學生). 校 = 木 (gỗ) + 交 (giao nhau): hàng rào gỗ đan chéo bao quanh trường.",
        ex: { zh: "學校在臺北。", py: "Xuéxiào zài Táiběi.", vi: "Trường học ở Đài Bắc." } },
      { hz: "臺北", zy: "ㄊㄞˊ ㄅㄟˇ", py: "Táiběi", vi: "Đài Bắc", hv: "ĐÀI BẮC",
        story: "臺 = Đài (Loan). 北 = hai người quay lưng vào nhau → hướng Bắc (hướng quay lưng về phía mặt trời). Thành phố phía Bắc Đài Loan.",
        ex: { zh: "我住在臺北。", py: "Wǒ zhù zài Táiběi.", vi: "Tôi sống ở Đài Bắc." } },
      { hz: "捷運", zy: "ㄐㄧㄝˊ ㄩㄣˋ", py: "jiéyùn", vi: "tàu điện MRT", hv: "TIỆP VẬN",
        story: "捷 = 扌(tay) + 疌: nhanh nhẹn. 運 = 辶 (đi) + 軍 (quân đội): vận chuyển. Vận chuyển nhanh → tàu điện. Từ riêng của Đài Loan!",
        ex: { zh: "我坐捷運去學校。", py: "Wǒ zuò jiéyùn qù xuéxiào.", vi: "Tôi đi MRT đến trường." } },
      { hz: "坐", zy: "ㄗㄨㄛˋ", py: "zuò", vi: "ngồi; đi (xe, tàu)", hv: "TỌA",
        story: "Hai người (人人) ngồi trên mặt đất (土) → ngồi. Đi tàu xe là 'ngồi' tàu xe: 坐捷運, 坐公車.",
        ex: { zh: "請坐！", py: "Qǐng zuò!", vi: "Mời ngồi!" } },
      { hz: "公車", zy: "ㄍㄨㄥ ㄔㄜ", py: "gōngchē", vi: "xe buýt", hv: "CÔNG XA",
        story: "公 = công cộng. 車 = hình chiếc xe nhìn từ trên xuống, có trục và hai bánh. Xe công cộng → xe buýt.",
        ex: { zh: "他坐公車來。", py: "Tā zuò gōngchē lái.", vi: "Anh ấy đi xe buýt đến." } },
      { hz: "住", zy: "ㄓㄨˋ", py: "zhù", vi: "sống, cư trú", hv: "TRÚ",
        story: "亻(người) + 主 (chủ). Người làm chủ một nơi → sống ở đó.",
        ex: { zh: "你住在哪裡？", py: "Nǐ zhù zài nǎlǐ?", vi: "Bạn sống ở đâu?" } },
      { hz: "回", zy: "ㄏㄨㄟˊ", py: "huí", vi: "về, trở về", hv: "HỒI",
        story: "Hai vòng 口 lồng vào nhau như vòng xoáy — đi một vòng rồi quay trở lại → về.",
        ex: { zh: "我要回家。", py: "Wǒ yào huí jiā.", vi: "Tôi muốn về nhà." } },
      { hz: "公司", zy: "ㄍㄨㄥ ㄙ", py: "gōngsī", vi: "công ty", hv: "CÔNG TY",
        story: "公 = chung. 司 = quản lý. Nơi quản lý công việc chung → công ty. Đọc giống Hán-Việt!",
        ex: { zh: "我爸爸在公司。", py: "Wǒ bàba zài gōngsī.", vi: "Bố tôi đang ở công ty." } },
      { hz: "中文", zy: "ㄓㄨㄥ ㄨㄣˊ", py: "Zhōngwén", vi: "tiếng Hoa (chữ Hán)", hv: "TRUNG VĂN",
        story: "中 = một mũi tên xuyên qua chính giữa (口) → giữa. 文 = hình người có hoa văn xăm trên ngực → văn, chữ.",
        ex: { zh: "我在臺灣學中文。", py: "Wǒ zài Táiwān xué Zhōngwén.", vi: "Tôi học tiếng Hoa ở Đài Loan." } }
    ],
    grammar: [
      { title: "在 + Nơi chốn — Ở đâu",
        explain: "在 + nơi chốn = ở (đâu đó). Hỏi: 在哪裡？ Khi có động từ khác, cụm 在 + nơi chốn đứng TRƯỚC động từ: 我在臺灣學中文 (Tôi học tiếng Hoa ở Đài Loan). Riêng 住 thường nói 住在 + nơi.",
        pattern: "Chủ ngữ + 在 + Nơi chốn (+ Động từ)",
        examples: [
          { zh: "媽媽在家。", py: "Māma zài jiā.", vi: "Mẹ ở nhà." },
          { zh: "我在學校吃飯。", py: "Wǒ zài xuéxiào chīfàn.", vi: "Tôi ăn cơm ở trường." }
        ],
        exercises: [
          { type: "mc", q: "Tôi học tiếng Hoa ở Đài Bắc.", choices: ["我學中文在臺北。", "我在臺北學中文。", "在我臺北學中文。", "我學在臺北中文。"], answer: 1, explain: "在 + nơi chốn đứng trước động từ." },
          { type: "mc", q: "Bạn sống ở đâu?", choices: ["你住在哪裡？", "你哪裡住在？", "哪裡你住？", "你在住哪裡？"], answer: 0 },
          { type: "order", words: ["我", "在", "學校", "吃飯"], vi: "Tôi ăn cơm ở trường." }
        ] },
      { title: "坐 + Phương tiện + 去 + Nơi chốn",
        explain: "Nói đi đâu bằng gì: phương tiện đứng TRƯỚC, nơi đến đứng SAU. Thứ tự đúng với thứ tự hành động: lên xe trước, đến nơi sau.",
        pattern: "Chủ ngữ + 坐 + Phương tiện + 去 / 來 / 回 + Nơi chốn",
        examples: [
          { zh: "我坐捷運去公司。", py: "Wǒ zuò jiéyùn qù gōngsī.", vi: "Tôi đi MRT đến công ty." },
          { zh: "他坐公車回家。", py: "Tā zuò gōngchē huí jiā.", vi: "Anh ấy đi xe buýt về nhà." }
        ],
        exercises: [
          { type: "mc", q: "Tôi đi xe buýt đến trường.", choices: ["我去學校坐公車。", "我坐公車去學校。", "我坐學校去公車。", "公車我去學校坐。"], answer: 1 },
          { type: "order", words: ["她", "坐", "捷運", "回", "家"], vi: "Cô ấy đi MRT về nhà." }
        ] },
      { title: "這 / 那 + (Lượng từ) + Danh từ",
        explain: "這 = này, 那 = kia. Đứng một mình làm chủ ngữ: 這是… (Đây là…). Đứng trước danh từ cần lượng từ: 這個人 (người này), 那杯茶 (ly trà kia). Chú ý trật tự ngược tiếng Việt!",
        pattern: "這 / 那 + Lượng từ + Danh từ",
        examples: [
          { zh: "這個學校很好。", py: "Zhège xuéxiào hěn hǎo.", vi: "Trường này rất tốt." },
          { zh: "那杯咖啡是我的。", py: "Nà bēi kāfēi shì wǒ de.", vi: "Ly cà phê kia là của tôi." }
        ],
        exercises: [
          { type: "mc", q: "Người này là ai?", choices: ["人這個是誰？", "這個人是誰？", "這人個是誰？", "誰是人這個？"], answer: 1 },
          { type: "mc", q: "Ly trà kia", choices: ["那杯茶", "茶那杯", "那茶杯", "杯那茶"], answer: 0 },
          { type: "order", words: ["這", "是", "我", "的", "公司"], vi: "Đây là công ty của tôi." }
        ] }
    ],
    pron: {
      title: "Vần ㄢ / ㄤ, ㄣ / ㄥ và âm ㄩ (ü)",
      explain: "Phân biệt âm mũi trước và sau: ㄢ an (giống 'an') ↔ ㄤ ang (giống 'ang'); ㄣ en (gần 'ân') ↔ ㄥ eng (gần 'âng'). ㄩ ü: chu môi tròn như nói 'u' nhưng lưỡi đặt như 'i'. Sau ㄐㄑㄒ, pinyin viết ü thành u (去 qù = ㄑㄩˋ), nhưng chú âm luôn viết rõ ㄩ — đây là ưu điểm của chú âm!",
      tips: [
        "Người Đài Loan hay đọc ㄥ thành ㄣ (星 xīng → xīn). Khi luyện thi, hãy cố tách rõ hai âm.",
        "哪裡 nǎlǐ: biến điệu 3+3 → ná lǐ."
      ],
      drills: [
        { zh: "飯", zy: "ㄈㄢˋ", py: "fàn", note: "ㄢ an" },
        { zh: "兩", zy: "ㄌㄧㄤˇ", py: "liǎng", note: "ㄤ ang" },
        { zh: "人", zy: "ㄖㄣˊ", py: "rén", note: "ㄣ en" },
        { zh: "朋", zy: "ㄆㄥˊ", py: "péng", note: "ㄥ eng" },
        { zh: "去", zy: "ㄑㄩˋ", py: "qù", note: "ㄩ ü (pinyin viết u)" },
        { zh: "運", zy: "ㄩㄣˋ", py: "yùn", note: "ㄩㄣ ün" },
        { zh: "哪裡", zy: "ㄋㄚˇ ㄌㄧˇ", py: "nǎlǐ → ná lǐ", note: "biến điệu 3 + 3" }
      ],
      toneQuiz: [ ["去", 4], ["來", 2], ["在", 4], ["哪", 3], ["這", 4], ["校", 4], ["北", 3], ["捷", 2], ["運", 4], ["坐", 4], ["車", 1], ["住", 4], ["回", 2], ["文", 2] ]
    }
  }
];

// Bảng chú âm đầy đủ: [ký hiệu, pinyin, chữ ví dụ, chú âm ví dụ, ghi chú tiếng Việt]
window.ZHUYIN = {
  initials: [
    ["ㄅ", "b", "八", "ㄅㄚ", "như 'p' tiếng Việt, không bật hơi"],
    ["ㄆ", "p", "怕", "ㄆㄚˋ", "bật hơi mạnh"],
    ["ㄇ", "m", "媽", "ㄇㄚ", "như 'm'"],
    ["ㄈ", "f", "飯", "ㄈㄢˋ", "như 'ph'"],
    ["ㄉ", "d", "大", "ㄉㄚˋ", "như 't' tiếng Việt"],
    ["ㄊ", "t", "他", "ㄊㄚ", "như 'th' tiếng Việt"],
    ["ㄋ", "n", "你", "ㄋㄧˇ", "như 'n'"],
    ["ㄌ", "l", "來", "ㄌㄞˊ", "như 'l'"],
    ["ㄍ", "g", "哥", "ㄍㄜ", "như 'c / k', không bật hơi"],
    ["ㄎ", "k", "客", "ㄎㄜˋ", "'k' bật hơi"],
    ["ㄏ", "h", "好", "ㄏㄠˇ", "giữa 'h' và 'kh'"],
    ["ㄐ", "j", "九", "ㄐㄧㄡˇ", "'ch' nhẹ, môi bẹt"],
    ["ㄑ", "q", "七", "ㄑㄧ", "'ch' bật hơi"],
    ["ㄒ", "x", "星", "ㄒㄧㄥ", "như 'x' tiếng Việt"],
    ["ㄓ", "zh", "珍", "ㄓㄣ", "'tr' uốn lưỡi"],
    ["ㄔ", "ch", "吃", "ㄔ", "'tr' uốn lưỡi, bật hơi"],
    ["ㄕ", "sh", "是", "ㄕˋ", "'s' uốn lưỡi"],
    ["ㄖ", "r", "人", "ㄖㄣˊ", "'r' uốn lưỡi nhẹ, gần 'gi'"],
    ["ㄗ", "z", "在", "ㄗㄞˋ", "'ch' đầu lưỡi thẳng (ts)"],
    ["ㄘ", "c", "菜", "ㄘㄞˋ", "'ts' bật hơi"],
    ["ㄙ", "s", "四", "ㄙˋ", "'x' đầu lưỡi"]
  ],
  medials: [
    ["ㄧ", "i / y", "一", "ㄧ", "như 'i'"],
    ["ㄨ", "u / w", "五", "ㄨˇ", "như 'u'"],
    ["ㄩ", "ü / yu", "魚", "ㄩˊ", "môi tròn như 'u', lưỡi như 'i'"]
  ],
  finals: [
    ["ㄚ", "a", "八", "ㄅㄚ", "như 'a'"],
    ["ㄛ", "o", "我", "ㄨㄛˇ", "như 'ô'"],
    ["ㄜ", "e", "喝", "ㄏㄜ", "gần 'ơ'"],
    ["ㄝ", "ê", "姐", "ㄐㄧㄝˇ", "như 'ê' (trong ie, üe)"],
    ["ㄞ", "ai", "來", "ㄌㄞˊ", "như 'ai'"],
    ["ㄟ", "ei", "杯", "ㄅㄟ", "như 'ây'"],
    ["ㄠ", "ao", "好", "ㄏㄠˇ", "như 'ao'"],
    ["ㄡ", "ou", "有", "ㄧㄡˇ", "như 'âu'"],
    ["ㄢ", "an", "三", "ㄙㄢ", "như 'an'"],
    ["ㄣ", "en", "人", "ㄖㄣˊ", "như 'ân'"],
    ["ㄤ", "ang", "兩", "ㄌㄧㄤˇ", "như 'ang'"],
    ["ㄥ", "eng", "朋", "ㄆㄥˊ", "như 'âng'"],
    ["ㄦ", "er", "二", "ㄦˋ", "'ơ' cong lưỡi"]
  ],
  tones: [
    ["ˉ (không dấu)", "1", "媽", "ㄇㄚ", "cao, bằng — như thanh ngang nhưng cao hơn"],
    ["ˊ", "2", "麻", "ㄇㄚˊ", "đi lên — như dấu sắc"],
    ["ˇ", "3", "馬", "ㄇㄚˇ", "xuống thấp — gần dấu hỏi"],
    ["ˋ", "4", "罵", "ㄇㄚˋ", "rơi mạnh — như dấu huyền nhưng gắt hơn"],
    ["˙", "nhẹ", "嗎", "˙ㄇㄚ", "ngắn, nhẹ"]
  ]
};
