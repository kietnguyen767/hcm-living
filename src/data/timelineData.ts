export interface TimelineEvent {
  id: string;
  year: number;
  date?: string;
  title: string;
  description: string;
  category: "youth" | "abroad" | "leadership" | "anti-french" | "final-years";
  imageUrl?: string;
  details?: string[];
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1890-birth",
    year: 1890,
    date: "19 tháng 5, 1890",
    title: "Ngày sinh Chủ tịch Hồ Chí Minh",
    description: "Ông cất tiếng khóc chào đời với tên khai sinh là Nguyễn Sinh Cung tại quê ngoại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An.",
    category: "youth",
    details: [
      "Sinh ra tại làng Hoàng Trù (quê ngoại) và lớn lên tại làng Kim Liên (quê nội).",
      "Thân phụ là cụ phó bảng Nguyễn Sinh Sắc, thân mẫu là cụ bà Hoàng Thị Loan.",
      "Lớn lên trong bối cảnh nước mất nhà tan, bồi đắp lòng yêu nước nồng nàn từ gia đình nhà Nho."
    ]
  },
  {
    id: "1906-quoc-hoc",
    year: 1906,
    date: "Năm 1906 - 1908",
    title: "Học tập tại Trường Quốc học Huế",
    description: "Nguyễn Tất Thành theo học tại trường Quốc học Huế, tích cực tham gia các phong trào đấu tranh chống sưu thuế của nhân dân Trung Kỳ.",
    category: "youth",
    details: [
      "Tiếp thu kiến thức tân học và nâng cao tinh thần dân tộc.",
      "Bị nhà trường trục xuất do tham gia phong trào chống sưu thuế (1908).",
      "Quyết định đi vào phía Nam để tìm cơ hội mới."
    ]
  },
  {
    id: "1910-duc-thanh",
    year: 1910,
    date: "Năm 1910",
    title: "Dạy học tại trường Dục Thanh và vào Sài Gòn",
    description: "Ông vào Phan Thiết dạy học tại trường Dục Thanh, sau đó vào Sài Gòn học nghề tại Trường Bá Nghệ để chuẩn bị tìm đường sang phương Tây.",
    category: "youth",
    details: [
      "Truyền lửa lòng yêu nước và thể dục cho học sinh trường Dục Thanh.",
      "Vào Sài Gòn, trải nghiệm cuộc sống của giai cấp công nhân lao động.",
      "Tìm hiểu các tàu buôn ra vào cảng để lên kế hoạch xuất ngoại học hỏi."
    ]
  },
  {
    id: "1911-abroad",
    year: 1911,
    date: "5 tháng 6, 1911",
    title: "Ra đi tìm đường cứu nước từ Bến Nhà Rồng",
    description: "Dưới cái tên Văn Ba, người thanh niên trẻ tuổi lên chiếc tàu buôn Đô đốc Latouche-Tréville rời tổ quốc ra đi tìm đường cứu nước.",
    category: "abroad",
    details: [
      "Bắt đầu hành trình bôn ba kéo dài 30 năm qua nhiều châu lục.",
      "Làm đủ mọi nghề lao động chân tay cực nhọc để tự nuôi sống bản thân và học tập.",
      "Tìm hiểu thực tiễn cuộc sống của giai cấp vô sản và các dân tộc bị áp bức trên thế giới."
    ]
  },
  {
    id: "1919-versailles",
    year: 1919,
    date: "18 tháng 6, 1919",
    title: "Gửi Bản Yêu sách của nhân dân An Nam",
    description: "Lấy tên là Nguyễn Ái Quốc, ông thay mặt những người Việt Nam yêu nước gửi bản Yêu sách 8 điểm tới Hội nghị Versailles (Pháp) đòi các quyền bình đẳng, tự do.",
    category: "abroad",
    details: [
      "Sự kiện gây chấn động dư luận Pháp và các nước thuộc địa.",
      "Chính thức xuất hiện tên gọi Nguyễn Ái Quốc vang dội trên trường quốc tế.",
      "Gia nhập Đảng Xã hội Pháp trong cùng năm."
    ]
  },
  {
    id: "1920-communist",
    year: 1920,
    date: "Tháng 12, 1920",
    title: "Bỏ phiếu gia nhập Quốc tế Cộng sản",
    description: "Đọc Luận cương của Lenin về vấn đề dân tộc và thuộc địa, ông tìm ra con đường cứu nước duy nhất: Giải phóng dân tộc theo con đường cách mạng vô sản.",
    category: "abroad",
    details: [
      "Tham gia Đại hội Tours, bỏ phiếu tán thành gia nhập Quốc tế thứ ba (Quốc tế Cộng sản).",
      "Trở thành một trong những người sáng lập Đảng Cộng sản Pháp.",
      "Người cộng sản Việt Nam đầu tiên."
    ]
  },
  {
    id: "1925-thanh-nien",
    year: 1925,
    date: "Năm 1924 - 1925",
    title: "Thành lập Việt Nam Thanh niên Cách mạng Đồng chí Hội",
    description: "Đến Quảng Châu (Trung Quốc), thành lập tổ chức tiền thân của Đảng để truyền bá chủ nghĩa Marx-Lenin và đào tạo cán bộ cách mạng cốt cán.",
    category: "abroad",
    details: [
      "Mở các lớp huấn luyện chính trị cho thanh niên Việt Nam yêu nước.",
      "Xuất bản báo Thanh Niên - tờ báo cách mạng đầu tiên của nước ta.",
      "Chuẩn bị về mặt lý luận và tổ chức cho việc thành lập Đảng."
    ]
  },
  {
    id: "1930-founding-party",
    year: 1930,
    date: "3 tháng 2, 1930",
    title: "Thành lập Đảng Cộng sản Việt Nam",
    description: "Nhận ủy nhiệm của Quốc tế Cộng sản, Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất các tổ chức cộng sản tại Cửu Long (Hồng Kông) thành lập một Đảng duy nhất.",
    category: "abroad",
    details: [
      "Hợp nhất Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng và Đông Dương Cộng sản Liên đoàn.",
      "Thông qua Chánh cương vắn tắt và Sách lược vắn tắt do ông soạn thảo.",
      "Đánh dấu bước ngoặt quyết định cho tiến trình cách mạng Việt Nam."
    ]
  },
  {
    id: "1931-arrested",
    year: 1931,
    date: "Năm 1931 - 1933",
    title: "Vụ án Tống Văn Sơ tại Hồng Kông",
    description: "Ông bị chính quyền Anh bắt giam tại Hồng Kông dưới bí danh Tống Văn Sơ. Nhờ sự giúp đỡ tận tình của Luật sư Loseby, ông được tuyên trắng án và bí mật thoát sang Liên Xô.",
    category: "abroad",
    details: [
      "Bị đế quốc giam lỏng và âm mưu giao nộp cho thực dân Pháp.",
      "Trải qua cuộc đấu tranh pháp lý ly kỳ và gay cấn tại tòa án tối cao Hồng Kông.",
      "Năm 1933, ông cải trang trốn thoát thành công sang Thượng Hải và đi Liên Xô."
    ]
  },
  {
    id: "1941-return",
    year: 1941,
    date: "28 tháng 1, 1941",
    title: "Về nước trực tiếp lãnh đạo Cách mạng",
    description: "Sau đúng 30 năm bôn ba tìm đường cứu nước, Nguyễn Ái Quốc vượt biên giới Việt - Trung trở về Tổ quốc tại cột mốc 108, hang Cốc Bó, Pác Bó (Cao Bằng).",
    category: "leadership",
    details: [
      "Sống và làm việc trong điều kiện gian khổ tại hang Pác Bó.",
      "Tháng 5/1941, chủ trì Hội nghị Trung ương 8, thành lập Mặt trận Việt Minh.",
      "Quyết định đặt nhiệm vụ giải phóng dân tộc lên hàng đầu."
    ]
  },
  {
    id: "1942-prison-diary",
    year: 1942,
    date: "Tháng 8, 1942",
    title: "Bị bắt giữ tại Quảng Tây và viết 'Nhật ký trong tù'",
    description: "Ông lấy tên Hồ Chí Minh sang Trung Quốc hoạt động liên lạc nhưng bị chính quyền Tưởng Giới Thạch bắt giam oan hơn một năm. Tại đây, ông sáng tác tập thơ 'Nhật ký trong tù'.",
    category: "leadership",
    details: [
      "Bị giải qua hơn 30 nhà giam của 13 huyện thuộc tỉnh Quảng Tây.",
      "Tập thơ chữ Hán gồm 133 bài thơ phác họa ý chí kiên cường và tâm hồn nhân hậu.",
      "Được trả tự do vào tháng 9/1943 sau nhiều nỗ lực can thiệp quốc tế."
    ]
  },
  {
    id: "1945-independence",
    year: 1945,
    date: "2 tháng 9, 1945",
    title: "Đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam mới",
    description: "Tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    category: "leadership",
    details: [
      "Cách mạng Tháng Tám giành thắng lợi rực rỡ, lật đổ ách cai trị của thực dân và phong kiến.",
      "Bản Tuyên ngôn khẳng định quyền tự do, độc lập thiêng liêng của dân tộc trước toàn thế giới.",
      "Thành lập chính phủ lâm thời nước Việt Nam mới."
    ]
  },
  {
    id: "1946-resistance",
    year: 1946,
    date: "19 tháng 12, 1946",
    title: "Ban hành Lời kêu gọi Toàn quốc Kháng chiến",
    description: "Trước dã tâm xâm lược lần nữa của Pháp, Chủ tịch Hồ Chí Minh ra lời kêu gọi thiêng liêng: 'Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước...'",
    category: "anti-french",
    details: [
      "Mở đầu cho cuộc kháng chiến trường kỳ, toàn dân, toàn diện chống thực dân Pháp.",
      "Thể hiện ý chí độc lập sắt đá và tinh thần tự lực cánh sinh của dân tộc.",
      "Chuyển cơ quan đầu não lên chiến khu Việt Bắc kháng chiến lâu dài."
    ]
  },
  {
    id: "1954-dien-bien-phu",
    year: 1954,
    date: "Năm 1947 - 1954",
    title: "Chiến thắng Điện Biên Phủ chấn động địa cầu",
    description: "Hồ Chủ tịch cùng Trung ương Đảng lãnh đạo nhân dân đi từ thắng lợi này đến thắng lợi khác, kết thúc bằng chiến thắng Điện Biên Phủ lừng lẫy năm 1954.",
    category: "anti-french",
    details: [
      "Đập tan hoàn toàn tập đoàn cứ điểm mạnh nhất của thực dân Pháp tại Đông Dương.",
      "Ký kết Hiệp định Giơ-ne-vơ lập lại hòa bình tại Đông Dương.",
      "Giải phóng hoàn toàn miền Bắc, chấm dứt ách thống trị kéo dài của thực dân Pháp."
    ]
  },
  {
    id: "1954-reconstruction",
    year: 1954,
    date: "Từ năm 1954",
    title: "Xây dựng Miền Bắc và Nhận lỗi trước Quốc hội",
    description: "Đất nước chia cắt, ông lãnh đạo xây dựng CNXH ở miền Bắc làm hậu phương vững chắc cho miền Nam. Ông dũng cảm đứng ra nhận lỗi trước Quốc hội vì sai lầm cải cách ruộng đất.",
    category: "final-years",
    details: [
      "Khôi phục kinh tế miền Bắc sau chiến tranh.",
      "Nghiêm túc thừa nhận sai lầm trong Cải cách ruộng đất (1953-1957) và chỉ đạo sửa sai kịp thời.",
      "Củng cố lòng tin của quần chúng nhân dân thông qua tính trung thực và liêm khiết."
    ]
  },
  {
    id: "1965-testament",
    year: 1965,
    date: "Năm 1960 - 1968",
    title: "Chỉ đạo chiến lược và khởi thảo Di chúc",
    description: "Dù sức khỏe suy giảm, ông vẫn trực tiếp chỉ đạo các quyết sách lớn như cuộc Tổng tiến công Tết Mậu Thân 1968 và bắt đầu đặt bút viết bản Di chúc lịch sử từ năm 1965.",
    category: "final-years",
    details: [
      "Bàn giao dần việc điều hành thực tế cho Tổng Bí thư Lê Duẩn nhưng giữ vai trò tối cao về mặt tinh thần.",
      "Viết Di chúc vào các dịp sinh nhật hàng năm để dặn dò Đảng và nhân dân sau khi qua đời.",
      "Kêu gọi cả nước kiên trì kháng chiến chống Mỹ cứu nước đến thắng lợi hoàn toàn."
    ]
  },
  {
    id: "1969-passing",
    year: 1969,
    date: "2 tháng 9, 1969",
    title: "Chủ tịch Hồ Chí Minh qua đời",
    description: "Trút hơi thở cuối cùng lúc 9h47 ngày 2/9/1969 tại Hà Nội, hưởng thọ 79 tuổi. Di sản tinh thần và sự nghiệp cách mạng vĩ đại của ông sống mãi trong lòng dân tộc.",
    category: "final-years",
    details: [
      "Để lại niềm tiếc thương vô hạn cho nhân dân cả nước và hàng triệu bạn bè năm châu.",
      "Thi hài được gìn giữ lâu dài tại Lăng Chủ tịch Hồ Chí Minh khánh thành năm 1975.",
      "Được UNESCO vinh danh là Anh hùng giải phóng dân tộc và Danh nhân văn hóa thế giới vào năm 1987."
    ]
  }
];
