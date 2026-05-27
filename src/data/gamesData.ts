export interface MatchPair {
  id: string;
  left: string;  // Historical event / landmark name / person
  right: string; // Associated description / year / modern equivalent
  explanation: string;
}

export interface MemoryCardType {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface SortingEvent {
  id: string;
  year: number;
  title: string;
  description: string;
}

export const matchGamePairs: MatchPair[] = [
  {
    id: "m1",
    left: "Nguyễn Sinh Cung",
    right: "Tên khai sinh của Bác (Nghệ An, 1890)",
    explanation: "Chủ tịch Hồ Chí Minh lúc nhỏ có tên khai sinh là Nguyễn Sinh Cung, sinh ra tại làng Hoàng Trù (quê ngoại), Nam Đàn, Nghệ An."
  },
  {
    id: "m2",
    left: "Văn Ba",
    right: "Tên Bác lấy khi xuống tàu tìm đường cứu nước (1911)",
    explanation: "Khi xin làm phụ bếp trên tàu Đô đốc Latouche-Tréville rời Bến Nhà Rồng, Bác Hồ lấy tên là Văn Ba."
  },
  {
    id: "m3",
    left: "Nguyễn Ái Quốc",
    right: "Tên Bác dùng khi gửi Yêu sách 8 điểm (1919)",
    explanation: "Tại Hội nghị Hòa bình Versailles (Pháp) năm 1919, Người lấy tên Nguyễn Ái Quốc gửi bản Yêu sách đòi các quyền tự do."
  },
  {
    id: "m4",
    left: "Tống Văn Sơ",
    right: "Tên Bác trong vụ án bị bắt tại Hồng Kông (1931)",
    explanation: "Bác bị cảnh sát Anh bắt giam tại Hồng Kông năm 1931 dưới tên gọi Tống Văn Sơ và được Luật sư Loseby giúp thoát án."
  },
  {
    id: "m5",
    left: "Tuyên ngôn Độc lập",
    right: "Đọc tại Quảng trường Ba Đình (2/9/1945)",
    explanation: "Sau khi Cách mạng Tháng Tám thành công, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam."
  },
  {
    id: "m6",
    left: "Nhật ký trong tù",
    right: "Tập thơ viết trong nhà giam Quảng Tây (1942-1943)",
    explanation: "Tập thơ gồm 133 bài thơ chữ Hán được Bác sáng tác trong hoàn cảnh bị nhà tù Tưởng Giới Thạch giam cầm."
  },
  {
    id: "m7",
    left: "Trần Dân Tiên",
    right: "Bút danh viết tự truyện về Bác Hồ",
    explanation: "Bác đã sử dụng bút danh Trần Dân Tiên để viết cuốn tự truyện 'Những mẩu chuyện về đời hoạt động của Hồ Chủ tịch'."
  },
  {
    id: "m8",
    left: "Thầu Chín",
    right: "Bí danh giả nhà sư tại Thái Lan",
    explanation: "Khi sang Thái Lan hoạt động, Bác cải trang thành một nhà sư đầu trọc và lấy bí danh là Thầu Chín để che mắt địch."
  },
  {
    id: "m9",
    left: "Hồ Quang",
    right: "Bí danh trong Bát lộ quân Trung Quốc",
    explanation: "Có thời kỳ Bác hóa trang thành Thiếu tá trong Bát lộ quân của Trung Quốc với tên gọi là Hồ Quang."
  },
  {
    id: "m10",
    left: "Paul Hogland",
    right: "Bác sĩ quân y Mỹ cứu sống Bác (1945)",
    explanation: "Tháng 7/1945, tình báo OSS cử bác sĩ Paul Hogland nhảy dù xuống Tân Trào để chữa trị bệnh sốt rét nặng cho Bác."
  }
];

export const memoryCards: MemoryCardType[] = [
  {
    id: "mc1",
    name: "Quê nội Kim Liên",
    description: "Làng Sen, xã Kim Liên, huyện Nam Đàn, Nghệ An - nơi lưu giữ nhiều kỷ niệm thời thơ ấu của Bác.",
    imageUrl: "/images/landmarks/que-bac.jpg"
  },
  {
    id: "mc2",
    name: "Trường Quốc học Huế",
    description: "Ngôi trường nổi tiếng bên sông Hương nơi Bác Hồ từng theo học niên khóa 1906 - 1908.",
    imageUrl: "/images/landmarks/quoc-hoc-hue.jpg"
  },
  {
    id: "mc3",
    name: "Trường Dục Thanh",
    description: "Ngôi trường tư thục ở Phan Thiết nơi Bác làm giáo viên dạy chữ Quốc ngữ và thể dục năm 1910.",
    imageUrl: "/images/landmarks/duc-thanh.jpg"
  },
  {
    id: "mc4",
    name: "Bến Nhà Rồng",
    description: "Cảng biển cũ sông Sài Gòn nơi Bác xuống tàu rời Tổ quốc ra đi tìm đường cứu nước ngày 5/6/1911.",
    imageUrl: "/images/landmarks/nha-rong.jpg"
  },
  {
    id: "mc5",
    name: "Hang Pác Bó",
    description: "Di tích lịch sử tại Cao Bằng nơi Bác trở về nước đầu năm 1941 trực tiếp chỉ đạo cách mạng Việt Nam.",
    imageUrl: "/images/landmarks/pac-bo.jpg"
  },
  {
    id: "mc6",
    name: "Lăng Chủ tịch Hồ Chí Minh",
    description: "Nơi bảo quản lâu dài thi hài của Bác tại Quảng trường Ba Đình lịch sử, thủ đô Hà Nội.",
    imageUrl: "/images/landmarks/lang-bac.jpg"
  }
];

export const sortingEvents: SortingEvent[] = [
  {
    id: "se1",
    year: 1890,
    title: "Chủ tịch Hồ Chí Minh chào đời",
    description: "Nguyễn Sinh Cung chào đời tại Nghệ An ngày 19/5/1890."
  },
  {
    id: "se2",
    year: 1911,
    title: "Văn Ba rời Bến Nhà Rồng",
    description: "Ra đi tìm đường cứu nước trên tàu buôn Pháp."
  },
  {
    id: "se3",
    year: 1920,
    title: "Gia nhập Quốc tế Cộng sản",
    description: "Bỏ phiếu thành lập Đảng Cộng sản Pháp tại Đại hội Tours."
  },
  {
    id: "se4",
    year: 1930,
    title: "Thành lập Đảng Cộng sản Việt Nam",
    description: "Bác chủ trì hội nghị hợp nhất các tổ chức cộng sản tại Hồng Kông."
  },
  {
    id: "se5",
    year: 1932,
    title: "Bị đồn là đã chết tại Hồng Kông",
    description: "Báo L'Humanité đăng tin giả Nguyễn Ái Quốc chết để đánh lạc hướng địch."
  },
  {
    id: "se6",
    year: 1941,
    title: "Trở về nước tại Pác Bó",
    description: "Người về nước trực tiếp lãnh đạo cách mạng Việt Nam."
  },
  {
    id: "se7",
    year: 1945,
    title: "Đọc Tuyên ngôn Độc lập",
    description: "Khai sinh nước Việt Nam Dân chủ Cộng hòa ngày 2/9."
  },
  {
    id: "se8",
    year: 1946,
    title: "Đắc cử Quốc hội với 98,4% phiếu",
    description: "Người trúng cử Đại biểu Quốc hội khóa I với tỉ lệ phiếu cao kỷ lục."
  },
  {
    id: "se9",
    year: 1969,
    title: "Chủ tịch Hồ Chí Minh qua đời",
    description: "Người trút hơi thở cuối cùng ngày 2/9/1969."
  }
];
