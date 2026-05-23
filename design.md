# Hệ Thống Thiết Kế: Heritage & Legacy (Di Sản & Di Tích)

Tài liệu này mô tả chi tiết quy chuẩn thiết kế, bảng màu, kiểu chữ và các thành phần giao diện áp dụng cho dự án **HCM: Living Memories**. Thiết kế hướng tới sự tôn nghiêm, lịch sử, mang tính giáo dục sâu sắc nhưng vẫn giữ được nét hiện đại, tối giản của một thư viện số cao cấp.

---

## 1. Triết Lý Thiết Kế: Modern Editorial Heritage
Hệ thống kết hợp giữa phong cách biên tập báo chí hiện đại (high-contrast typography, bố cục thoáng đãng) với các yếu tố xúc giác cổ xưa gợi nhớ đến tài liệu lịch sử (màu giấy ngả vàng, viền gỗ mun, chi tiết mạ vàng). 
*   **Cảm xúc hướng tới**: Sự tôn kính, hoài niệm, tò mò trí tuệ.
*   **Trải nghiệm**: Giống như đang tham quan một phòng triển lãm bảo tàng số hiện đại. Các hiệu ứng chuyển cảnh chậm rãi, mượt mà và tinh tế.

---

## 2. Bảng Màu (Colors)
Bảng màu kết hợp giữa màu cờ sắc áo tổ quốc và các chất liệu lịch sử vật lý.

### Màu chủ đạo (Brand Colors)
*   **Flag Red (Đỏ cờ - `#C41E3A` / `#9e0027`)**: Tượng trưng cho màu cờ Tổ quốc. Dùng rất hạn chế cho các điểm nhấn quan trọng, nút kêu gọi hành động (CTA) chính và mốc năm trên dòng thời gian.
*   **Heritage Gold (Vàng di sản - `#D4A843` / `#795900`)**: Tượng trưng cho ngôi sao vàng và màu mạ vàng trên cổ vật. Dùng làm điểm nhấn tương tác (hover), biểu tượng và đường ngăn trang trí.
*   **Antique Paper (Giấy cổ - `#FAF5ED` hoặc `#fff8f7`)**: Màu nền chính cho toàn bộ giao diện học tập. Đem lại cảm giác dễ chịu cho mắt như đang đọc sách giấy.
*   **Ebony Wood (Gỗ mun - `#1A0F0A`)**: Dùng làm màu chữ chính trên nền giấy để tạo độ tương phản cao, và làm màu nền tối chìm cho phần mở đầu (Hero), chân trang (Footer), cùng các hộp thoại (Modal) để tạo cảm giác trang trọng.

### Chi tiết mã màu HEX & Vai trò
*   `surface` / `background`: `#fff8f7` (Nền chính sáng)
*   `surface-dim`: `#f0d3d3`
*   `surface-container-low`: `#fff0f0`
*   `surface-container`: `#ffe9e8`
*   `surface-container-high`: `#ffe1e1`
*   `on-surface` / `on-background`: `#271718` (Màu chữ tối chính)
*   `on-surface-variant`: `#5b4040` (Chữ phụ)
*   `outline`: `#8f6f6f` (Viền nhạt màu nâu đất)
*   `outline-variant`: `#e3bebd`
*   `primary`: `#9e0027` (Đỏ cờ)
*   `on-primary`: `#ffffff`
*   `secondary`: `#795900` (Vàng di sản)
*   `on-secondary`: `#ffffff`
*   `inverse-surface` (Ebony Wood): `#1A0F0A` (Nền tối đặc biệt)
*   `inverse-on-surface`: `#ffedec`

---

## 3. Kiểu Chữ (Typography)
Tạo sự phân cấp rõ ràng giữa phần **Tự sự (Narrative - Serif)** và phần **Thông tin/Giao diện (Information/UI - Sans-serif)**.

*   **Tiêu đề & Mốc thời gian (Serif)**:
    *   **Font Family**: `Playfair Display` (Chữ có chân cổ điển, nét thanh nét đậm tương phản cao).
    *   `display-lg`: `56px` / `line-height: 1.1` / `fontWeight: 700` (Dành cho máy tính).
    *   `display-lg-mobile`: `40px` / `line-height: 1.2` (Dành cho điện thoại).
    *   `headline-lg`: `32px` / `line-height: 1.3` (Tiêu đề phần).
    *   `headline-md`: `24px` / `line-height: 1.4` (Tiêu đề thẻ).
*   **Nội dung & Nhãn chức năng (Sans-serif)**:
    *   **Font Family**: `Nunito Sans` (Chữ không chân bo tròn nhẹ, mang lại cảm giác thân thiện, dễ tiếp cận cho người học trẻ tuổi).
    *   `body-lg`: `18px` / `line-height: 1.6` (Nội dung câu chuyện dài).
    *   `body-md`: `16px` / `line-height: 1.6` (Nội dung thẻ, văn bản phụ).
    *   `label-md`: `14px` / `line-height: 1.2` / `letter-spacing: 0.05em` (Chữ in hoa nhỏ dạng đóng dấu niêm phong).
    *   `caption`: `12px` / `line-height: 1.4` (Chú thích ảnh, ghi chú chân trang).

---

## 4. Bố Cục & Khoảng Cách (Layout & Spacing)
Tuân thủ cấu trúc biên tập dạng sách in.
*   **Lưới cố định (Fixed Grid)**:
    *   **Desktop**: Lưới 12 cột, chiều rộng tối đa `1200px`. Khoảng đệm rìa rộng để tập trung thị giác vào hình ảnh và chữ ở giữa.
    *   **Mobile**: 1 cột đơn, căn lề 24px.
*   **Nhịp độ khoảng cách (Vertical Rhythm)**:
    *   Khoảng cách giữa các phần lớn: `120px` (trên máy tính) / `64px` (trên điện thoại). Sự giãn cách này giúp người dùng dừng lại suy ngẫm sau khi hoàn thành một chương lịch sử.

---

## 5. Chiều Sâu & Hiệu Ứng (Elevation & Depth)
Tạo chiều sâu bằng xếp lớp tông màu (Tonal Layering) thay vì đổ bóng đậm kỹ thuật số.
*   **Nền tảng**: Bề mặt chính là màu giấy Antique Paper (`#FAF5ED`).
*   **Hộp thoại / Lớp phủ**: Sử dụng nền Ebony Wood (`#1A0F0A`) kết hợp với hiệu ứng cát vàng hạt mịn (Gold Dust) để mang cảm giác cổ vật vật lý.
*   **Đổ bóng**: Bóng đổ cực kỳ mờ màu nâu đất ấm (`rgba(26, 15, 10, 0.08)`).
*   **Kính mờ (Glassmorphism)**: Áp dụng riêng cho thanh điều hướng (Navbar) bằng hiệu ứng mờ nhạt màu giấy Antique Paper để người dùng vẫn nhìn thấy tài liệu dịch chuyển phía dưới khi cuộn trang.
*   **Tương tác (Hover)**: Độ sâu được tăng cường khi rê chuột qua bằng đường viền vàng di sản tỏa sáng (bloom/fade-in) thay vì nâng thẻ lên vật lý.

---

## 6. Hình Dáng (Shapes)
Sự tương phản giữa các nút tương tác dạng **Pill (bo tròn tối đa)** hiện đại và các hộp nội dung **bo góc mềm**.
*   **Nút & Nhãn tương tác**: Bo tròn toàn bộ (`rounded-full` / `1rem+`) tương phản với nét chữ Serif vuông vức cổ điển.
*   **Thẻ nội dung**: Bo góc vừa phải `rounded-lg` (`1rem` / `16px`).
*   **Hình ảnh lịch sử**: Bo góc cực nhẹ (`rounded-sm` / `4px`) mô phỏng các tấm ảnh in giấy thời xưa, tránh góc nhọn kỹ thuật số sắc nét.

---

## 7. Chi tiết các thành phần giao diện (UI Components spec)
*   **Nút bấm (Buttons)**:
    *   *Primary*: Hình viên thuốc (pill), màu đỏ cờ (`#9e0027`), chữ Nunito Sans Trắng đậm.
    *   *Secondary*: Hình viên thuốc, viền mạ vàng di sản (`#D4A843`), nền trong suốt hoặc tối nhẹ.
*   **Thẻ thông tin (Cards)**:
    *   Nền màu Giấy sáng (`#fff8f7`). Viền ngoài màu Nâu nhạt (`#8f6f6f` hoặc `#e3bebd`).
    *   Khi hover: Viền chuyển dần sang màu Vàng di sản (`#D4A843`) kết hợp hiệu ứng hào quang mạ vàng nhẹ từ mép trong.
*   **Điểm đánh dấu thời gian (Timeline Dots)**:
    *   Hình tròn nhỏ màu Vàng di sản (`#D4A843`).
    *   Khi active hoặc rê chuột qua: Vòng tròn nở rộng ra, để lộ lõi màu Đỏ cờ (`#9e0027`) nổi bật.
*   **Ô nhập liệu (Input Fields)**:
    *   Tối giản: Chỉ có đường viền dưới màu Nâu đất (`#8f6f6f`).
    *   Khi focus: Đường viền chuyển thành Vàng di sản (`#D4A843`) và nhãn nổi lên (floating label).
*   **Hộp thoại chi tiết (Modals)**:
    *   Nền Gỗ mun tối màu (`#1A0F0A`).
    *   Đường viền trên cùng mạ vàng dày 2px. Nút đóng dạng vòng tròn chứa ký tự "X" màu vàng di sản.
*   **Thanh cuộn tiến độ (Scroll Indicators)**:
    *   Một đường chỉ mạ vàng di sản cực mảnh chạy dọc theo trang, tự động dài ra khi cuộn xuống để định vị tiến trình đọc.
