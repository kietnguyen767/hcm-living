# Code Review: HCM: Ký Ức Đời Người

> **Dự án:** Digital Heritage về Chủ tịch Hồ Chí Minh  
> **Framework:** Next.js 16.2.6 (App Router) + React 19.2.4  
> **Tổng số file source:** ~40 files, ~3.500+ dòng TypeScript/TSX

---

## Mục lục

1. [Tổng quan kiến trúc](#1-tổng-quan-kiến-trúc)
2. [Điểm mạnh](#2-điểm-mạnh)
3. [Vấn đề & đề xuất cải thiện](#3-vấn-đề--đề-xuất-cải-thiện)
   - [3.1. Kiến trúc & tổ chức code](#31-kiến-trúc--tổ-chức-code)
   - [3.2. Hiệu năng](#32-hiệu-năng)
   - [3.3. Bảo mật & độ tin cậy](#33-bảo-mật--độ-tin-cậy)
   - [3.4. UI/UX & Accessibility](#34-uiux--accessibility)
   - [3.5. API & Data Layer](#35-api--data-layer)
   - [3.6. TypeScript & typing](#36-typescript--typing)
4. [Tổng kết](#4-tổng-kết)

---

## 1. Tổng quan kiến trúc

```
src/
├── app/            # App Router: layout, pages, API routes
│   ├── api/        # 4 API endpoints (games, quiz, stories, timeline)
│   ├── globals.css # Tailwind v4 + custom theme tokens
│   ├── layout.tsx  # Root layout với fonts + ToastProvider
│   └── page.tsx    # SPA với tab navigation
├── components/
│   ├── game/       # 3 games: Match, Memory, Sorting
│   ├── home/       # HeroSection + ParticlesBackground
│   ├── layout/     # Navbar + Footer
│   ├── quiz/       # Quiz state machine (start → play → result)
│   ├── story/      # StoryGrid + StoryModal + AudioPlayer
│   ├── timeline/   # TimelineList + TimelineCard + SearchFilter
│   └── ui/         # Button, Card, Modal, Toast (design system)
├── data/           # Static mock data (games, quiz, stories, timeline)
└── lib/            # Utilities (cn, shuffleArray, formatDate)
```

---

## 2. Điểm mạnh

### 2.1. Design system nhất quán
- **Custom theme tokens** trong `globals.css` với `@theme` directives của Tailwind v4 — rất sạch và dễ maintain.
- Màu sắc được đặt tên semantic (`brand-primary`, `brand-gold`, `brand-ebony`, `brand-paper`), không dùng giá trị raw.
- Components UI (Button, Card, Modal, Toast) được chuẩn hóa với variants/sizes, tái sử dụng xuyên suốt.

### 2.2. Sử dụng Framer Motion hợp lý
- Animation nhẹ nhàng, có chủ đích: spring transitions cho navigation indicator, staggerChildren cho hero section, whileInView cho timeline cards.
- `AnimatePresence` dùng đúng chỗ cho modal/toast/section transitions.
- Hiệu năng tốt — không dùng animation phức tạp không cần thiết.

### 2.3. Code tổ chức rõ ràng
- Tách biệt data layer (`src/data/`), UI components (`src/components/ui/`), feature components theo domain.
- SPA với tab navigation đơn giản, dễ hiểu.
- File structure phản ánh rõ tính năng của app.

### 2.4. Code data layer (4 files trong `src/data/`) rất chi tiết
- Nội dung lịch sử phong phú, có trích dẫn và giải thích.
- Quiz có explanation cho mỗi câu hỏi.
- Timeline events có details array và reference links.

### 2.5. AudioPlayer dùng Web Speech API
- Giải pháp nhẹ, zero dependency cho TTS tiếng Việt.
- Có fallback voice finding, speed control, progress tracking.
- Cleanup effect khi unmount.

---

## 3. Vấn đề & đề xuất cải thiện

### 3.1. Kiến trúc & tổ chức code

#### ❌ Vấn đề: Dùng static data + API routes không cần thiết

**File:** `src/components/timeline/TimelineList.tsx`, `src/components/story/StoryGrid.tsx`

```typescript
// TimelineList.tsx
const [events, setEvents] = React.useState<TimelineEvent[]>(timelineEvents);
// ... fetch từ /api/timeline nhưng có static fallback ngay từ đầu
```

Cả 2 component đều **import data trực tiếp** từ `src/data/` làm initial state, sau đó lại fetch từ API route — API route chỉ trả về đúng data đó. Điều này tạo ra:
- Duplicate code (4 API routes gần như giống hệt nhau)
- Network request vô ích (client fetch data đã có sẵn trong bundle)
- Không có lợi ích gì so với import trực tiếp

> **Nên:** Bỏ API routes nếu không thực sự cần server-side data, hoặc ngược lại — bỏ static import và chỉ fetch từ API.

#### ❌ Vấn đề: `ParticlesBackground` không tận dụng Canvas optimization (có thể cải thiện)

**File:** `src/components/home/ParticlesBackground.tsx`

- Mỗi frame vẽ lại toàn bộ particles + lines (O(n²) connections).
- Dùng `requestAnimationFrame` không kiểm soát được FPS khi tab không active (dùng `visibilitychange` listener).
- Vẽ connections với `rgba(143, 111, 111, 0.04)` — opacity rất thấp, khó nhìn thấy.
- Canvas resolution không scale với device pixel ratio (có thể bị mờ trên màn hình Retina).

> **Nên:** Thêm `devicePixelRatio` scaling, giảm connection distance hoặc skip connection vẽ nếu quá nhiều particle.

#### ✅ Tốt: SPA với tab navigation đơn giản

Cách tiếp cận này phù hợp với quy mô dự án và tránh routing phức tạp.

---

### 3.2. Hiệu năng

#### ❌ Vấn đề: Bundle size — `framer-motion` được import đầy đủ

Phân tích: 
- `framer-motion` version 12.x (React 19 compatible) có kích thước khá lớn (~150KB+ min+gzip).
- Dùng `motion` và `AnimatePresence` — không tree-shake được.
- Nếu dùng layout animations (`layoutId`), thực sự cần framer-motion. Nhưng nếu chỉ có fade/slide đơn giản, có thể thay bằng CSS transitions.

> **Đề xuất:** Nếu sau này muốn giảm bundle, cân nhắc `motion` (standalone) hoặc dùng CSS animations cho các trường hợp đơn giản.

#### ❌ Vấn đề: `useEffect` fetch data không có abort controller

**File:** `src/components/timeline/TimelineList.tsx:17-32`, `src/components/story/StoryGrid.tsx:16-31`

```typescript
React.useEffect(() => {
  async function loadEvents() {
    const res = await fetch("/api/timeline");
    // ...
  }
  loadEvents();
}, []);
```

Không có `AbortController` — nếu component unmount trước khi fetch hoàn tất, sẽ gây:
- Memory leak (setState trên unmounted component)
- Console warnings trong React strict mode (development)

> **Nên:** Thêm AbortController và cleanup trong useEffect return.

#### ❌ Vấn đề: `img` tag không có `priority` hoặc `loading` attribute

**File:** Multiple files (StoryModal.tsx, TimelineList.tsx)

```typescript
<img src={selectedEvent.imageUrl} alt={...} className="..." />
```

- Không dùng Next.js `Image` component (có thể vì dùng placehold.co URLs).
- Thiếu `loading="lazy"` cho images dưới fold.
- `layout.tsx` metadata không có `og:image`.

> **Nên:** Thêm `loading="lazy"` và `fetchpriority` phù hợp.

---

### 3.3. Bảo mật & độ tin cậy

#### ❌ Vấn đề: StoryModal dùng `dangerouslySetInnerHTML` không (kiểm tra content)

**File:** `src/components/story/StoryModal.tsx:79`

```typescript
<div className="..." style={{whiteSpace: 'pre-wrap'}}>
  {story.content}
</div>
```

May mắn là dùng text rendering (JSX expression), không có `dangerouslySetInnerHTML`. **An toàn.**

Tuy nhiên `referenceLinks` URL có `href="#"` làm placeholder — nếu sau này thay bằng URL thật, cần đảm bảo validate URL.

#### ❌ Vấn đề: Không có error boundary

App không có React Error Boundary. Nếu một component crash (ví dụ lỗi trong AudioPlayer hoặc MemoryGame), toàn bộ app sẽ white-screen.

> **Nên:** Thêm `<ErrorBoundary>` wrapper cho mỗi feature section (timeline, stories, quiz, games).

#### ⚠️ Vấn đề: `quizData.ts` có lỗi nội dung

**File:** `src/data/quizData.ts:82-83`

```typescript
correctAnswer: 3,
explanation: "...UNESCO đã thông qua nghị quyết vinh danh Chủ tịch Hồ Chí Minh là 'Anh hùng giải phóng đất nước và danh nhân văn hóa người Việt'..."
```

Options:
```
0: "Danh nhân quân sự lỗi lạc thế giới"
1: "Nhà hoạt động hòa bình quốc tế"
2: "Anh hùng giải phóng dân tộc và danh nhân văn hóa thế giới"
3: "Anh hùng giải phóng đất nước và danh nhân văn hóa người Việt"
```

`correctAnswer` là `3` (index-based 0), nghĩa là đáp án thứ 4. Điều này **đúng**. Tuy nhiên, danh hiệu chính xác của UNESCO là **"Anh hùng giải phóng dân tộc và Danh nhân văn hóa kiệt xuất của Việt Nam"** (theo explanation và thực tế), không hoàn toàn khớp với option text.

> **Nên:** Kiểm tra lại danh hiệu cho chính xác.

---

### 3.4. UI/UX & Accessibility

#### ❌ Vấn đề: Thiếu ARIA attributes cơ bản

- Navigation: không có `aria-label` trên nav elements.
- Modal: thiếu `role="dialog"`, `aria-modal`, focus trap.
- Toast: thiếu `role="alert"` hoặc `aria-live`.
- Buttons với icon: không có `aria-label`.
- Game cards: thiếu `role="button"` trên div clickable (MemoryGame dùng div làm card).

> **Nên:** Thêm các ARIA attributes cần thiết, đặc biệt là focus trap cho modal.

#### ❌ Vấn đề: `MemoryGame.tsx` dùng `div` làm clickable element

**File:** `src/components/game/MemoryGame.tsx:139-142`

```typescript
<div
  key={card.uniqueId}
  className="aspect-square relative cursor-pointer select-none"
  onClick={() => handleCardClick(idx)}
>
```

Không phải `<button>` — người dùng keyboard không thể focus/tab vào đây. Cần thêm `role="button"`, `tabIndex={0}`, và keyboard event handler (`onKeyDown`).

> **Nên:** Dùng `<button>` hoặc thêm `role`, `tabIndex`, `onKeyDown`.

#### ⚠️ Vấn đề: `animate-shake` class không được định nghĩa trong CSS

**File:** `src/components/game/MatchGame.tsx:138`

```typescript
btnClass = "bg-brand-error/10 border-brand-error text-brand-error font-semibold animate-shake";
```

Class `animate-shake` không được define trong `globals.css` hay Tailwind. Sẽ không có hiệu ứng shake khi ghép sai.

> **Nên:** Định nghĩa `@keyframes shake` và class `animate-shake` trong CSS hoặc dùng Framer Motion keyframes.

---

### 3.5. API & Data Layer

#### ❌ Vấn đề: API routes không có validation/rate limiting

Cả 4 API routes đều là GET handlers không có:
- Authentication/Authorization (có thể chấp nhận được vì là static data public)
- Rate limiting
- CORS headers (nếu cần)
- Data validation cho request params

#### ❌ Vấn đề: Error response không nhất quán

```typescript
// games/route.ts
return NextResponse.json(
  { success: false, message: "Internal Server Error" },
  { status: 500 }
);
```

OK, nhưng nếu API trả về `success: false`, client không xử lý trường hợp này.

#### ✅ Tốt: Data structure nhất quán

Tất cả endpoints đều wrap response trong `{ success: boolean, data: ... }` — pattern tốt cho API consistency.

---

### 3.6. TypeScript & typing

#### ✅ Tốt: Interfaces rõ ràng

Các interface như `TimelineEvent`, `Story`, `QuizQuestion` được define đầy đủ, có optional fields với `?`.

#### ⚠️ Vấn đề: `handleSectionChange` TypeScript type

**File:** `src/app/page.tsx:20`

Flow: `handleSectionChange` nhận `string` và set vào state. Các component con chỉ gọi với các giá trị cụ thể (`"home"`, `"timeline"`, etc.). Nếu dùng literal union type (`"home" | "timeline" | "stories" | "quiz" | "games"`) sẽ an toàn hơn và IDE có autocomplete.

#### ⚠️ Vấn đề: `GameHub.tsx` dùng `as any`

**File:** `src/components/game/GameHub.tsx:62`

```typescript
onClick={() => setActiveGame(g.id as any)}
```

Cần cast type cho `g.id`. `g.id` có type `string`, nhưng `activeGame` state là `"match" | "memory" | "sorting"`. Dùng `as typeof activeGame` thay vì `as any`.

---

## 4. Tổng kết

### Rating tổng thể: **7.5 / 10**

| Tiêu chí | Đánh giá |
|----------|----------|
| **Kiến trúc** | 7/10 — Clean structure, nhưng có API layer không cần thiết |
| **Code quality** | 8/10 — Clean, consistent, well-typed |
| **UI/UX & Design** | 9/10 — Design system đẹp, nhất quán, animation tinh tế |
| **Accessibility** | 4/10 — Thiếu ARIA, keyboard navigation, focus management |
| **Hiệu năng** | 6/10 — OK cho quy mô hiện tại, nhưng có vấn đề tiềm ẩn |
| **Nội dung** | 9/10 — Phong phú, chi tiết, tra cứu tốt |
| **Bảo mật** | 7/10 — Không có lỗ hổng nghiêm trọng, thiếu error boundary |

### Critical issues cần fix ngay:
1. `animate-shake` class không tồn tại → MatchGame không có shake effect
2. MemoryGame dùng `div` clickable mà không có keyboard support
3. Thiếu `AbortController` trong fetch effects
4. Thiếu Error Boundary cho các feature sections

### Nên làm tiếp theo:
1. Thêm ARIA labels, focus trap cho Modal
2. Hợp nhất data layer: bỏ API routes hoặc bỏ static import
3. Thêm responsive image optimization
4. Viết unit tests cho utility functions và game logic
5. Cân nhắc Server Components cho các component không cần state (Footer, QuizStart, QuizResult)

---

*Review generated on 2026-05-25 — dựa trên mã nguồn tại thời điểm review.*
Xong. Đây là tóm tắt 3 file đã sửa:
1. src/data/chatbotContext.ts
- Thêm Source interface ({ title, url })
- searchLocalData() giờ trả về { content, sources } thay vì string thô
- Sources được lấy từ referenceLinks có sẵn trong stories/timelineEvents
2. src/app/api/chat/route.ts
- Nhận kết quả có cấu trúc từ searchLocalData() → trả về { message, sources }
- Với Tavily: cũng extract sources từ data.results → trả về tương tự
- Có deduplicateSources() để loại bỏ trùng lặp
3. src/components/chatbot/Chatbot.tsx
- Lưu sources vào message state khi nhận response
- Render sources dưới dạng chip link bên dưới câu trả lời, có header "NGUỒN THAM KHẢO" và separator line
- URL hợp lệ → <a> click được; URL # → <span> (chỉ hiển thị tên)