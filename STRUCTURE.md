# Cấu trúc Thư mục Dự án (hcm-living-memories)

Tài liệu này mô tả chi tiết cấu trúc thư mục của dự án và vai trò của từng thành phần trong ứng dụng.

## Sơ đồ cấu trúc thư mục

```text
src/
├── app/                        # === BACKEND (API ROUTES) & PAGES ===
│   ├── api/                    # === BACKEND (API ROUTES) ===
│   │   ├── timeline/
│   │   │   └── route.ts        # API trả về dữ liệu dòng thời gian
│   │   ├── stories/
│   │   │   └── route.ts        # API trả về danh sách câu chuyện
│   │   ├── quiz/
│   │   │   └── route.ts        # API lấy câu hỏi trắc nghiệm
│   │   └── games/
│   │       └── route.ts        # API lấy dữ liệu trò chơi
│   │
│   ├── globals.css             # CSS toàn cục (Tailwind v4 + Custom CSS)
│   ├── layout.tsx              # Layout chính (Chứa Navbar, Footer, Font)
│   └── page.tsx                # Trang chủ (Home) - Chạy SPA chính
│
├── components/                 # === FRONTEND COMPONENTS ===
│   ├── ui/                     # Các nút, thẻ tái sử dụng (Button, Card, Modal, Toast)
│   ├── layout/                 # Navbar, Footer
│   ├── home/                   # HeroSection, ParticlesBackground
│   ├── timeline/               # TimelineList, TimelineCard, SearchFilter
│   ├── story/                  # StoryGrid, StoryModal, AudioPlayer
│   ├── quiz/                   # QuizStart, QuizPlay, QuizResult
│   └── game/                   # MatchGame, MemoryGame, SortingGame
│
├── data/                       # === MOCK DATABASE ===
│   ├── timelineData.ts         # Dữ liệu mảng các sự kiện
│   ├── storiesData.ts          # Dữ liệu mảng các câu chuyện
│   ├── quizData.ts             # Dữ liệu mảng các câu hỏi
│   └── gamesData.ts            # Dữ liệu các cặp game
│
└── lib/                        # === TIỆN ÍCH ===
    └── utils.ts                # Hàm shuffle mảng, format date...
```

---

## Chi tiết vai trò của các thư mục và tệp tin

### 1. Thư mục `src/app/`
Thư mục chứa các API Route và giao diện chính của ứng dụng Next.js (sử dụng App Router).
- **`api/`**: Chứa các route xử lý backend (API). Các file `route.ts` định nghĩa các phương thức `GET`, `POST`,... để tương tác với dữ liệu.
  - `api/timeline/route.ts`: API cung cấp dữ liệu các mốc lịch sử cho tính năng dòng thời gian.
  - `api/stories/route.ts`: API cung cấp danh sách các câu chuyện ký ức lịch sử.
  - `api/quiz/route.ts`: API cung cấp bộ câu hỏi trắc nghiệm lịch sử.
  - `api/games/route.ts`: API cung cấp dữ liệu cho các trò chơi giáo dục lịch sử.
- **`globals.css`**: Định nghĩa Tailwind CSS v4 và các biến CSS toàn cục (colors, fonts, custom utilities).
- **`layout.tsx`**: Layout gốc của ứng dụng, ôm lấy toàn bộ trang để giữ nguyên cấu trúc chung (như Header/Footer) và tải font.
- **`page.tsx`**: Điểm bắt đầu của Single Page Application (SPA), tích hợp các phần của ứng dụng.

### 2. Thư mục `src/components/`
Thư mục chứa toàn bộ các React Component phục vụ việc hiển thị giao diện người dùng.
- **`ui/`**: Các UI component nhỏ nhất, có thể tái sử dụng nhiều lần như nút bấm (`Button`), thẻ (`Card`), hộp thoại (`Modal`), thông báo nổi (`Toast`).
- **`layout/`**: Các thành phần layout chung như Thanh điều hướng (`Navbar`) và Chân trang (`Footer`).
- **`home/`**: Các component của trang chủ như phần mở đầu giới thiệu (`HeroSection`) và hiệu ứng nền hạt chuyển động (`ParticlesBackground`).
- **`timeline/`**: Các component hiển thị dòng thời gian như danh sách mốc lịch sử (`TimelineList`), thẻ mốc lịch sử (`TimelineCard`), và thanh tìm kiếm/lọc (`SearchFilter`).
- **`story/`**: Các component hiển thị câu chuyện như lưới các bài viết (`StoryGrid`), hộp thoại chi tiết câu chuyện (`StoryModal`), và trình phát âm thanh kể chuyện (`AudioPlayer`).
- **`quiz/`**: Các component trò chơi trắc nghiệm như màn hình bắt đầu (`QuizStart`), màn hình chơi (`QuizPlay`), và kết quả (`QuizResult`).
- **`game/`**: Các component trò chơi tương tác như ghép đôi (`MatchGame`), lật hình ghi nhớ (`MemoryGame`), và phân loại sự kiện lịch sử (`SortingGame`).

### 3. Thư mục `src/data/`
Đóng vai trò như một cơ sở dữ liệu giả lập (mock database) chứa thông tin tĩnh để phục vụ cho frontend và backend API.
- **`timelineData.ts`**: Lưu trữ danh sách các sự kiện lịch sử của TP.HCM.
- **`storiesData.ts`**: Lưu trữ các câu chuyện ký ức, hồi ký lịch sử.
- **`quizData.ts`**: Lưu trữ danh sách câu hỏi trắc nghiệm cùng với đáp án.
- **`gamesData.ts`**: Lưu trữ dữ liệu cấu hình cho các trò chơi lịch sử.

### 4. Thư mục `src/lib/`
Chứa các hàm tiện ích dùng chung trong toàn bộ dự án.
- **`utils.ts`**: Chứa các hàm hỗ trợ như xáo trộn mảng (`shuffle`), định dạng ngày tháng (`formatDate`), hợp nhất các lớp CSS (`cn`),...
