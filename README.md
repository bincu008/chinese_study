# 學中文 — Học tiếng Hoa phồn thể (TOCFL Band A)

Trang web học tiếng Hoa phồn thể (Đài Loan) cho người Việt, nhắm tới TOCFL Band A Level 2 (A2).
HTML/CSS/JS thuần, không cần build. Tiến độ và nội dung tự thêm được lưu trong `localStorage` của trình duyệt (có thể xuất/nhập file ở mục Cài đặt).

## Chạy trên máy (robobrain)

```bash
sudo apt install git            # chỉ cần lần đầu
git clone https://github.com/bincu008/chinese_study.git ~/Chinese_webpage
cd ~/Chinese_webpage
python3 -m http.server 8000     # mở http://localhost:8000
```

Cập nhật phiên bản mới: `cd ~/Chinese_webpage && git pull` rồi tải lại trang.
Phát âm dùng giọng đọc của trình duyệt (zh-TW) — Chrome/Edge cho giọng tốt nhất.

## Cấu trúc

- **Kho mặc định** (`js/data.js`, `js/data-a2.js`): Đơn vị 1 (bài 1–5, A1) và Đơn vị 2 (bài 6–10, A2).
  Mỗi bài: Từ vựng (chú âm, pinyin, nghĩa tiếng Việt, Hán-Việt, câu chuyện ghi nhớ bộ thủ) → Ngữ pháp + bài tập → Phát âm → Thẻ ghi nhớ.
- **Kho "Của tôi"**: biểu mẫu thêm từ (pinyin tự chuyển sang chú âm, cảnh báo chữ giản thể) và ngữ pháp (ví dụ + bài tập), nhập nhanh nhiều từ bằng mẫu `chữ | pinyin | nghĩa | …`.
- **Ôn tập**: lặp lại ngắt quãng (SM-2 rút gọn) cho cả hai kho.
- **Bài thi** (`js/exam.js`, ngân hàng đề `js/bank.js`): cấu trúc TOCFL Band A —
  聽力 Nghe: 看圖回答 · 問答理解 · 對話理解 · 對話; 閱讀 Đọc: 單句理解 · 看圖釋義 · 選詞填空 · 完成段落 · 閱讀理解.
  Trộn kho mặc định và kho của bạn. Điểm quy đổi thang 80 (A2 ≥ 60, A1 ≥ 41). Có đề rút gọn và đề đầy đủ, có giờ.

## Thêm nội dung mặc định

Thêm bài vào `LESSONS` (mỗi chữ trong `hz` ứng với đúng một âm tiết chú âm trong `zy`), thêm id bài vào `UNITS`, và thêm câu hỏi nghe/đọc cho đơn vị trong `js/bank.js`.
