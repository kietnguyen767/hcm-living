export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based index
  explanation: string;
  points: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Chủ tịch Hồ Chí Minh cất tiếng khóc chào đời vào ngày tháng năm nào và tại đâu?",
    options: [
      "19/5/1890 tại làng Kim Liên (quê nội)",
      "19/5/1890 tại làng Hoàng Trù (quê ngoại)",
      "5/6/1890 tại làng Hoàng Trù (quê ngoại)",
      "19/5/1890 tại Huế"
    ],
    correctAnswer: 1,
    explanation: "Chủ tịch Hồ Chí Minh sinh ngày 19/5/1890 tại quê ngoại là làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An.",
    points: 10
  },
  {
    id: "q2",
    question: "Nguyễn Tất Thành đã lấy tên là gì khi bước lên tàu Đô đốc Latouche-Tréville ra đi tìm đường cứu nước vào ngày 5/6/1911?",
    options: ["Nguyễn Ái Quốc", "Tống Văn Sơ", "Trần Dân Tiên", "Văn Ba"],
    correctAnswer: 3,
    explanation: "Vào ngày 5/6/1911, người thanh niên Nguyễn Tất Thành lấy tên Văn Ba, ký hợp đồng làm phụ bếp trên chiếc tàu buôn từ Bến Nhà Rồng ra đi tìm con đường cứu nước.",
    points: 10
  },
  {
    id: "q3",
    question: "Tác phẩm nào của Nguyễn Ái Quốc được xuất bản năm 1927, đóng vai trò lý luận nền tảng vạch ra kim chỉ nam cho cách mạng Việt Nam?",
    options: ["Bản án chế độ thực dân Pháp", "Đường kách mệnh", "Tuyên ngôn Độc lập", "Nhật ký trong tù"],
    correctAnswer: 1,
    explanation: "Tác phẩm 'Đường kách mệnh' (1927) là tập hợp bài giảng chính trị của Nguyễn Ái Quốc tại Quảng Châu, định hướng phong trào giải phóng dân tộc.",
    points: 10
  },
  {
    id: "q4",
    question: "Dưới bí danh nào Chủ tịch Hồ Chí Minh bị chính quyền Anh bắt giam oan tại Hồng Kông vào những năm 1931 - 1933?",
    options: ["Nguyễn Ái Quốc", "Tống Văn Sơ", "Trần Dân Tiên", "Văn Ba"],
    correctAnswer: 1,
    explanation: "Những năm 1931 - 1933, Nguyễn Ái Quốc bị bắt giữ tại Hồng Kông dưới tên gọi Tống Văn Sơ.",
    points: 10
  },
  {
    id: "q5",
    question: "Tập thơ nổi tiếng 'Nhật ký trong tù' của Hồ Chí Minh được viết bằng chữ gì và trong hoàn cảnh nào?",
    options: [
      "Viết bằng chữ Hán khi bị chính quyền Tưởng Giới Thạch bắt giam tại Quảng Tây",
      "Viết bằng chữ Quốc ngữ khi hoạt động tại chiến khu Việt Bắc",
      "Viết bằng chữ Pháp khi bị trục xuất khỏi Paris",
      "Viết bằng chữ Hán khi hoạt động bí mật tại Hồng Kông"
    ],
    correctAnswer: 0,
    explanation: "'Nhật ký trong tù' gồm 133 bài thơ bằng chữ Hán, được viết khi Người bị giam giữ từ 1942 đến 1943 trong các nhà giam tại Quảng Tây.",
    points: 10
  },
  {
    id: "q6",
    question: "UNESCO đã thông qua nghị quyết vinh danh Chủ tịch Hồ Chí Minh với danh hiệu gì vào dịp kỷ niệm 100 năm ngày sinh của Người?",
    options: [
      "Danh nhân quân sự lỗi lạc thế giới",
      "Nhà hoạt động hòa bình quốc tế",
      "Anh hùng giải phóng dân tộc và danh nhân văn hóa thế giới",
      "Anh hùng giải phóng đất nước và danh nhân văn hóa người Việt"
    ],
    correctAnswer: 3,
    explanation: "UNESCO đã thông qua nghị quyết vinh danh Chủ tịch Hồ Chí Minh là 'Anh hùng giải phóng đất nước và danh nhân văn hóa người Việt' vào năm 1990.",
    points: 10
  },
  {
    id: "q7",
    question: "Theo đánh giá của các chuyên gia, Chủ tịch Hồ Chí Minh có thể giao tiếp bằng bao nhiêu ngoại ngữ?",
    options: ["Khoảng 5 thứ tiếng", "Khoảng 15 thứ tiếng", "Khoảng 29 thứ tiếng", "Khoảng 50 thứ tiếng"],
    correctAnswer: 2,
    explanation: "Giáo sư Hoàng Chí Bảo cho biết Bác Hồ có thể nói được 29 thứ tiếng, bao gồm tiếng Nga, Pháp, Trung Quốc, Anh, Ý... chưa kể tiếng của các dân tộc thiểu số.",
    points: 10
  },
  {
    id: "q8",
    question: "Vào tháng 7 năm 1945, ai là người đã trực tiếp chữa trị và cứu sống Chủ tịch Hồ Chí Minh khi Người bị sốt rét vô cùng trầm trọng?",
    options: [
      "Bác sĩ Tôn Thất Tùng",
      "Một thầy lang người Dao ở chiến khu Việt Bắc",
      "Bác sĩ quân y người Mỹ tên là Paul Hogland",
      "Bác sĩ Phạm Ngọc Thạch"
    ],
    correctAnswer: 2,
    explanation: "Tháng 7/1945, tình báo Mỹ OSS đã cử bác sĩ quân y Paul Hogland nhảy dù xuống Tân Trào và dùng thuốc men của Mỹ chữa trị, cứu sống Bác.",
    points: 10
  },
  {
    id: "q9",
    question: "Chủ tịch Hồ Chí Minh đã sử dụng bút danh nào để viết cuốn tự truyện 'Những mẩu chuyện về đời hoạt động của Hồ Chủ tịch'?",
    options: ["Nguyễn Ái Quốc", "T. Lan", "Trần Dân Tiên", "Hồ Quang"],
    correctAnswer: 2,
    explanation: "Ông đã dùng bút danh Trần Dân Tiên để viết cuốn tự truyện 'Những mẩu chuyện về đời hoạt động của Hồ Chủ tịch'.",
    points: 10
  },
  {
    id: "q10",
    question: "Tại thủ đô Luân Đôn (Anh), Chủ tịch Hồ Chí Minh từng làm công việc gì để mưu sinh trong mùa đông lạnh giá?",
    options: ["Phát báo và quét rác", "Cào tuyết và đốt lò", "Bán bánh mì và thợ mộc", "Dạy tiếng Pháp"],
    correctAnswer: 1,
    explanation: "Trong thời gian ở Anh, Bác từng làm nghề cào tuyết, đốt lò rồi phụ bếp cho một khách sạn ở Luân Đôn.",
    points: 10
  },
  {
    id: "q11",
    question: "Năm 1946, Chủ tịch Hồ Chí Minh đắc cử Đại biểu Quốc hội khóa I tại Hà Nội với tỉ lệ số phiếu là bao nhiêu?",
    options: ["85,4%", "90,1%", "95,5%", "98,4%"],
    correctAnswer: 3,
    explanation: "Trong cuộc Tổng tuyển cử đầu tiên bầu Quốc hội khóa I năm 1946, Bác đắc cử với số phiếu cao kỷ lục: 98,4% tại khu vực Hà Nội.",
    points: 10
  },
  {
    id: "q12",
    question: "Năm 1942-1943, khi Bác bị bắt ở Trung Quốc, các lãnh đạo trong nước từng lầm tưởng Bác đã hy sinh nên đã làm gì?",
    options: [
      "Gửi điện báo cho Liên Xô để thông báo",
      "Tổ chức đám tang và đọc điếu văn truy điệu",
      "Tạm dừng mọi hoạt động của Việt Minh",
      "Sang Trung Quốc tìm thi hài"
    ],
    correctAnswer: 1,
    explanation: "Do nghe nhầm tin tức, các đồng chí Võ Nguyên Giáp, Phạm Văn Đồng tưởng Bác đã mất nên đã tổ chức đám tang, đọc điếu văn truy điệu ở trong nước.",
    points: 10
  },
  {
    id: "q13",
    question: "Khi hoạt động ở Thái Lan (Xiêm), Chủ tịch Hồ Chí Minh đã dùng bí danh gì và cải trang như thế nào?",
    options: [
      "Bí danh Thầu Chín, cải trang thành một nhà sư đầu trọc",
      "Bí danh Lý Thụy, cải trang thành thương gia",
      "Bí danh Hồ Quang, cải trang thành quân nhân",
      "Bí danh Tống Văn Sơ, cải trang thành giáo viên"
    ],
    correctAnswer: 0,
    explanation: "Khi sang Thái Lan, Người đã lấy bí danh là Thầu Chín và cải trang thành một nhà sư đầu trọc để che mắt chính quyền.",
    points: 10
  },
  {
    id: "q14",
    question: "Chủ tịch Hồ Chí Minh là người đầu tiên và duy nhất trong lịch sử Việt Nam nắm giữ chức vụ nào?",
    options: ["Tổng Bí thư Đảng", "Chủ tịch nước", "Chủ tịch Ban Chấp hành Trung ương Đảng", "Thủ tướng Chính phủ"],
    correctAnswer: 2,
    explanation: "Từ năm 1951 đến 1969, Bác là người duy nhất nắm giữ chức vụ 'Chủ tịch Ban Chấp hành Trung ương Đảng'. Sau khi Bác mất, chức vụ này được bãi bỏ.",
    points: 10
  },
  {
    id: "q15",
    question: "Trong giai đoạn đầu của Cách mạng Tháng Tám, tổ chức tình báo nào của Mỹ từng có mối quan hệ hợp tác mật thiết với Việt Minh?",
    options: ["CIA", "OSS", "FBI", "MI6"],
    correctAnswer: 1,
    explanation: "OSS (Cơ quan Tình báo chiến lược Hoa Kỳ - tiền thân của CIA) đã hợp tác với Việt Minh: Việt Minh cứu phi công Mỹ, đổi lại OSS cung cấp vũ khí và thuốc men.",
    points: 10
  },
  {
    id: "q16",
    question: "Chủ tịch Hồ Chí Minh từng đích thân đến gặp và mời nhân vật nào (sau này là Tổng thống VNCH) làm Thủ tướng nhưng bị từ chối?",
    options: ["Bảo Đại", "Trần Trọng Kim", "Nguyễn Văn Thiệu", "Ngô Đình Diệm"],
    correctAnswer: 3,
    explanation: "Bác Hồ từng đích thân mời Ngô Đình Diệm giữ chức Thủ tướng vì đánh giá cao tài năng, nhưng Ngô Đình Diệm đã từ chối hợp tác.",
    points: 10
  },
  {
    id: "q17",
    question: "Thói quen sinh hoạt và phong cách sống đặc trưng của Chủ tịch Hồ Chí Minh là gì?",
    options: [
      "Đi giày da và mặc vest lịch lãm",
      "Mặc áo pijama trắng cao cổ, đi dép cao su và ăn không bỏ sót hột cơm nào",
      "Chỉ ăn các món ăn phương Tây",
      "Hút xì gà Cuba và uống rượu vang"
    ],
    correctAnswer: 1,
    explanation: "Bác có phong cách sống tao nhã, giản dị, thường mặc áo pijama trắng cao cổ, đi dép cao su và ăn uống rất tiết kiệm, không bỏ sót hột cơm nào.",
    points: 10
  },
  {
    id: "q18",
    question: "Năm 1932, một tờ báo Pháp từng đăng tin giả rằng Nguyễn Ái Quốc đã chết vì bệnh lao phổi trong tù ở Hồng Kông. Đó là tờ báo nào?",
    options: ["Le Figaro", "Le Monde", "L'Humanité (Nhân đạo)", "Le Paria (Người cùng khổ)"],
    correctAnswer: 2,
    explanation: "Tờ L'Humanité (Nhân đạo) đã đăng tin giả Nguyễn Ái Quốc chết để đánh lạc hướng thực dân Pháp, giúp Người bí mật tẩu thoát sang Liên Xô.",
    points: 10
  },
  {
    id: "q19",
    question: "Khi làm việc trong quân đội Trung Quốc, Chủ tịch Hồ Chí Minh đã mang quân hàm gì và lấy tên là gì?",
    options: [
      "Đại tá, tên là Lý Thụy",
      "Thiếu tá Bát lộ quân, tên là Hồ Quang",
      "Trung úy, tên là Trần Dân Tiên",
      "Thiếu tướng, tên là Lin"
    ],
    correctAnswer: 1,
    explanation: "Có thời điểm Bác đóng vai một Thiếu tá Bát lộ quân (quân đội Trung Quốc) và sử dụng bí danh là Hồ Quang.",
    points: 10
  },
  {
    id: "q20",
    question: "Trong đời sống cá nhân, Chủ tịch Hồ Chí Minh từng có thói quen nghiện thứ gì và chỉ bỏ được vào 2 năm cuối đời?",
    options: ["Nghiện cà phê đen", "Nghiện uống trà đậm", "Nghiện hút thuốc lá nặng (thuốc lá Salem)", "Nghiện nhai trầu"],
    correctAnswer: 2,
    explanation: "Bác là người nghiện thuốc lá nặng (thường hút thuốc lá Mỹ nhãn hiệu Salem) và chỉ nghe theo lời khuyên của bác sĩ bỏ được tật này vào 2 năm cuối đời.",
    points: 10
  }
];
