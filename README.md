# 學中文 — Học tiếng Hoa phồn thể (TOCFL)

Trang web học tiếng Hoa phồn thể (Đài Loan) cho người Việt, luyện thi TOCFL Band A.
HTML/CSS/JS thuần, không cần build. Tiến độ được lưu trong `localStorage` của trình duyệt.

## Chạy

```bash
cd Chinese_webpage
python3 -m http.server 8000
# mở http://localhost:8000
```

Phát âm dùng giọng đọc của trình duyệt (zh-TW). Chrome/Edge cho giọng tốt nhất.
Xem thứ tự nét chữ cần Internet (thư viện Hanzi Writer).

## Cấu trúc

- Mỗi **bài**: Từ vựng (nghĩa tiếng Việt, Hán-Việt, câu chuyện ghi nhớ bộ thủ) → Ngữ pháp + bài tập → Phát âm (chú âm, thanh điệu) → Thẻ ghi nhớ
- **Ôn tập**: lặp lại ngắt quãng (SM-2 rút gọn), phím tắt Space / 1–4
- **Bài thi** sau mỗi 5 bài: Nghe hiểu, Từ vựng, Ngữ pháp — đạt 70%
- **Chú âm**: bảng ㄅㄆㄇ đầy đủ; **Từ vựng**: tra cứu tất cả từ; **Cài đặt**: sao lưu/nhập tiến độ

## Thêm bài mới

Sửa `js/data.js`: thêm một mục vào `LESSONS` và id bài vào `UNITS`. Mỗi chữ trong `hz` phải có đúng một âm tiết chú âm trong `zy` (cách nhau bằng dấu cách).
