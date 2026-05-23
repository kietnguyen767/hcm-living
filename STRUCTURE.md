# Cấu trúc Thư mục Dự án (hcm-living-memories)

Tài liệu này cung cấp cái nhìn tổng quan và mô tả chi tiết toàn bộ cấu trúc thư mục của dự án ứng dụng web Next.js `hcm-living-memories`, cũng như vai trò của từng thành phần, cấu hình và mã nguồn.

## 1. Sơ đồ cấu trúc tổng thể

```text
hcm-living-memories/
├── src/                        # === SOURCE CODE CHÍNH CỦA ỨNG DỤNG ===
│   ├── app/                    # === BACKEND (API ROUTES) & PAGES ===
│   │   ├── api/                # Các API cung cấp dữ liệu backend
│   │   │   ├── games/route.ts  # API lấy dữ liệu trò chơi
│   │   │   ├── quiz/route.ts   # API lấy câu hỏi trắc nghiệm
│   │   │   ├── stories/route.ts# API trả về danh sách câu chuyện
│   │   │   └── timeline/route.ts# API trả về dữ liệu dòng thời gian
│   │   ├── favicon.ico         # Icon của trang web
│   │   ├── globals.css         # CSS toàn cục (Tailwind v4 + Custom CSS)
│   │   ├── layout.tsx          # Layout gốc (Chứa Navbar, Footer, cấu hình Font)
│   │   └── page.tsx            # Trang chủ (Home) - Single Page Application
│   │
│   ├── components/             # === FRONTEND COMPONENTS ===
│   │   ├── game/               # Components trò chơi (MatchGame, MemoryGame, SortingGame...)
│   │   ├── home/               # Components trang chủ (HeroSection, ParticlesBackground...)
│   │   ├── layout/             # Components khung (Navbar, Footer...)
│   │   ├── quiz/               # Components trắc nghiệm (QuizStart, QuizPlay, QuizResult...)
│   │   ├── story/              # Components câu chuyện (StoryGrid, StoryModal, AudioPlayer...)
│   │   ├── timeline/           # Components dòng thời gian (TimelineList, TimelineCard...)
│   │   └── ui/                 # Các UI component dùng chung (Button, Card, Modal, Toast...)
│   │
│   ├── data/                   # === MOCK DATABASE ===
│   │   ├── gamesData.ts        # Dữ liệu tĩnh của các trò chơi
│   │   ├── quizData.ts         # Dữ liệu tĩnh của các câu hỏi trắc nghiệm
│   │   ├── storiesData.ts      # Dữ liệu tĩnh của các câu chuyện
│   │   └── timelineData.ts     # Dữ liệu tĩnh của các mốc thời gian sự kiện
│   │
│   └── lib/                    # === TIỆN ÍCH CHUNG ===
│       └── utils.ts            # Các hàm hỗ trợ (cn, shuffle, formatDate...)
│
├── public/                     # Tài nguyên tĩnh có thể truy cập công khai (hình ảnh, âm thanh, fonts...)
├── node_modules/               # Chứa các gói thư viện Node.js được cài đặt từ npm
├── .git/                       # Dữ liệu quản lý phiên bản của Git
├── .next/                      # Thư mục chứa các file build và cache của Next.js
│
├── AGENTS.md                   # Hướng dẫn/thiết lập cho AI Agents làm việc với dự án
├── Achievements.md             # Tài liệu mô tả hệ thống thành tựu (gamification) của dự án
├── CLAUDE.md                   # Các quy tắc và hướng dẫn code dành cho AI (như Claude)
├── HISTORY.md                  # Ghi chú về các thay đổi, lịch sử phát triển
├── README.md                   # Thông tin giới thiệu chung về dự án, hướng dẫn cài đặt
├── STRUCTURE.md                # Tài liệu mô tả chi tiết kiến trúc thư mục (chính là file này)
├── design.md                   # Tài liệu mô tả hệ thống thiết kế (Design System) và UI/UX
│
├── eslint.config.mjs           # Cấu hình kiểm tra lỗi mã nguồn TypeScript/JavaScript với ESLint
├── next-env.d.ts               # Định nghĩa kiểu TypeScript nội bộ cho Next.js
├── next.config.ts              # File cấu hình của Next.js framework
├── package-lock.json           # Khóa chính xác các phiên bản dependency đã cài
├── package.json                # Quản lý dependencies, scripts chạy dự án, thông tin metadata
├── postcss.config.mjs          # Cấu hình PostCSS (thường dùng chung với Tailwind)
├── tsconfig.json               # Cấu hình trình biên dịch TypeScript
└── .gitignore                  # Chỉ định những file/thư mục Git không theo dõi (như node_modules, .next)
```

---

## 2. Chi tiết vai trò của các phần chính

### A. Nhóm Core Ứng dụng (`src/`)
Đây là khu vực chứa 100% logic mã nguồn tự viết của hệ thống.
- **`app/`**: Hoạt động dựa trên chuẩn App Router mới nhất của Next.js. Kết hợp cả Server Components (cho phân luồng khởi tạo, fetch dữ liệu) và Client Components (tương tác trực tiếp trên giao diện). Đồng thời `app/api/` đóng vai trò là backend nội bộ để gọi các tập tin tĩnh trong `data/`.
- **`components/`**: Áp dụng triết lý thiết kế module hóa. Mọi UI/UX của dự án được chia nhỏ để tái sử dụng. Thư mục `ui` thường chứa các phần tử cấp thấp (Button, Card...), trong khi các thư mục khác (như `game`, `quiz`, `story`) chứa các phần tử nghiệp vụ phức tạp đặc thù.
- **`data/`**: Cung cấp "mock data" (dữ liệu giả lập) tĩnh giúp ứng dụng có thể hoạt động độc lập không cần cơ sở dữ liệu thật (như PostgreSQL hay MongoDB) trong giai đoạn này.
- **`lib/`**: Chứa các hàm helper, utility. File `utils.ts` có chứa hàm `cn` (thường dùng kết hợp `clsx` và `tailwind-merge`) để gom nhóm class CSS động cực kỳ phổ biến trong các dự án sử dụng Tailwind.

### B. Nhóm Cấu hình và Tài liệu (Thư mục gốc)
Khu vực này chi phối cách ứng dụng được biên dịch, công cụ kiểm tra lỗi, và các tài liệu hướng dẫn vận hành.
- Các file có đuôi `.json`, `.ts`, `.mjs` (như `package.json`, `tsconfig.json`, `next.config.ts`...) đóng vai trò thiết lập môi trường phát triển Next.js. Hệ thống đang sử dụng Next.js, Tailwind CSS, TypeScript, và ESLint.
- **Nhóm Tài liệu Markdown (`*.md`)**: Đóng vai trò cực kỳ quan trọng trong việc quản lý tri thức của dự án. Không chỉ bao gồm README.md truyền thống, dự án này còn có hệ thống tài liệu phong phú như: `design.md` (hệ thống thiết kế UX/UI), `Achievements.md` (hệ thống phần thưởng game hóa) và các file quy tắc chuyên biệt cho AI (`AGENTS.md`, `CLAUDE.md`).

## 3. Kiến trúc Công nghệ Tổng quan
- **Framework Chính**: Next.js (Sử dụng App Router)
- **Ngôn ngữ Lập trình**: TypeScript
- **Styling / CSS**: Tailwind CSS (Với cấu hình trong `globals.css`)
- **Quản lý Component & State**: React Hooks (Với các `use client` components)
