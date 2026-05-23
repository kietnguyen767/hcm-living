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
    explanation: "Chủ tịch Hồ Chí Minh sinh ngày 19/5/1890 tại quê ngoại là làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An. Sau đó ông sống thêm ở làng Kim Liên (quê nội).",
    points: 10
  },
  {
    id: "q2",
    question: "Nguyễn Tất Thành đã lấy tên là gì khi bước lên tàu Đô đốc Latouche-Tréville ra đi tìm đường cứu nước vào ngày 5/6/1911?",
    options: [
      "Nguyễn Ái Quốc",
      "Tống Văn Sơ",
      "Trần Dân Tiên",
      "Văn Ba"
    ],
    correctAnswer: 3,
    explanation: "Vào ngày 5/6/1911, người thanh niên Nguyễn Tất Thành lấy tên Văn Ba, ký hợp đồng làm phụ bếp trên chiếc tàu buôn Đô đốc Latouche-Tréville từ Bến Nhà Rồng ra đi tìm con đường cứu nước.",
    points: 10
  },
  {
    id: "q3",
    question: "Tác phẩm nào của Nguyễn Ái Quốc được xuất bản năm 1927, đóng vai trò lý luận nền tảng vạch ra kim chỉ nam cho cách mạng Việt Nam?",
    options: [
      "Bản án chế độ thực dân Pháp",
      "Đường kách mệnh",
      "Tuyên ngôn Độc lập",
      "Nhật ký trong tù"
    ],
    correctAnswer: 1,
    explanation: "Tác phẩm 'Đường kách mệnh' (1927) là tập hợp bài giảng chính trị của Nguyễn Ái Quốc tại Quảng Châu. Đây là văn kiện lý luận nền tảng định hướng sự phát triển của phong trào giải phóng dân tộc dẫn tới sự ra đời của Đảng Cộng sản Việt Nam năm 1930.",
    points: 10
  },
  {
    id: "q4",
    question: "Dưới bí danh nào Chủ tịch Hồ Chí Minh bị chính quyền Anh bắt giam oan tại Hồng Kông vào những năm 1931 - 1933?",
    options: [
      "Nguyễn Ái Quốc",
      "Tống Văn Sơ",
      "Trần Dân Tiên",
      "Văn Ba"
    ],
    correctAnswer: 1,
    explanation: "Những năm 1931 - 1933, Nguyễn Ái Quốc bị mật thám Anh bắt giữ tại Hồng Kông dưới tên gọi Tống Văn Sơ. Nhờ sự can thiệp và bảo vệ pháp lý tận tụy của Luật sư Loseby, ông được tuyên thả tự do.",
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
    explanation: "'Nhật ký trong tù' gồm 133 bài thơ bằng chữ Hán, được viết khi Người bị giam giữ oan uổng từ tháng 8/1942 đến tháng 9/1943 trong các nhà giam của chính quyền Tưởng Giới Thạch tại Quảng Tây.",
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
    explanation: "UNESCO đã thông qua nghị quyết vinh danh Chủ tịch Hồ Chí Minh là 'Anh hùng giải phóng đất nước và danh nhân văn hóa người Việt' nhân dịp kỷ niệm 100 năm ngày sinh của Người (1990).",
    points: 10
  }
];
