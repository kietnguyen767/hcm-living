export interface TimelineEvent {
  id: string;
  year: number;
  date?: string;
  title: string;
  description: string;
  category: "youth" | "abroad" | "leadership" | "anti-french" | "final-years";
  imageUrl?: string;
  referenceLinks?: { title: string; url: string }[];
  details?: string[];
  isImportant?: boolean;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1890-birth",
    year: 1890,
    date: "19 tháng 5, 1890",
    title: "Ngày sinh Chủ tịch Hồ Chí Minh",
    description: "Chủ tịch Hồ Chí Minh cất tiếng khóc chào đời với tên khai sinh là Nguyễn Sinh Cung tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An. Là người con của cụ Phó bảng Nguyễn Sinh Sắc và cụ bà Hoàng Thị Loan, Người lớn lên trong một gia đình nhà Nho yêu nước. Môi trường quê hương giàu truyền thống văn hóa cùng bối cảnh đất nước đang chìm trong ách đô hộ của thực dân Pháp đã sớm hun đúc trong tâm hồn Nguyễn Sinh Cung lòng yêu nước thương dân sâu sắc và ý chí đánh đuổi ngoại xâm.",
    category: "youth",
    imageUrl: "https://mediacdn.vinhlong.dcs.vn/media/2026/02/26/69a0326a0c2be6034921367e_crop_455_636866985569091309_hasthumb.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Sinh ra tại làng Hoàng Trù (quê ngoại) và lớn lên tại làng Kim Liên (quê nội).",
      "Thân phụ là cụ phó bảng Nguyễn Sinh Sắc, thân mẫu là cụ bà Hoàng Thị Loan.",
      "Lớn lên trong bối cảnh nước mất nhà tan, bồi đắp lòng yêu nước nồng nàn từ gia đình nhà Nho."
    ]
  },
  {
    id: "1895-hue",
    year: 1895,
    date: "Năm 1895",
    title: "Vào Huế lần đầu tiên",
    description: "Năm 1895, cậu bé Nguyễn Sinh Cung cùng cha mẹ và anh trai vào kinh thành Huế lần đầu tiên để cụ Sinh Sắc có điều kiện dùi mài kinh sử chuẩn bị cho kỳ thi Hội. Việc sống tại vùng đất trung tâm của triều đình phong kiến đã giúp cậu bé Cung sớm tiếp xúc với nền văn hóa đa dạng, đồng thời chứng kiến rõ rệt sự phân hóa xã hội: cuộc sống xa hoa của vua quan trái ngược hoàn toàn với nỗi thống khổ, cùng cực của những người lao động nghèo khổ dưới bóng cờ thực dân nửa phong kiến.",
    category: "youth",
    imageUrl: "https://media-cdn-v2.laodong.vn/storage/newsportal/2021/5/19/910893/Bac-Ho-18.jpg?w=800&h=420&crop=auto&scale=both",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Sống trong môi trường kinh thành, chứng kiến nỗi thống khổ của người dân lao động.",
      "Tiếp xúc sớm với văn hóa triều đình và xã hội thực dân nửa phong kiến."
    ]
  },
  {
    id: "1901-mother-death",
    year: 1901,
    date: "Năm 1901",
    title: "Mẹ qua đời, trở về Nghệ An",
    description: "Năm 1901 là một năm đầy bi thương khi bà Hoàng Thị Loan qua đời sau khi sinh người con út. Cậu bé Nguyễn Sinh Cung mới 11 tuổi phải trải qua nỗi đau tột cùng, tự tay bế người em trai sơ sinh đi xin từng giọt sữa của những người hàng xóm. Chẳng bao lâu sau, em trai cũng mất. Chuỗi bi kịch gia đình này đã buộc cậu phải rời Huế trở về Nghệ An sống với bà ngoại một thời gian ngắn. Những mất mát to lớn này đã rèn luyện cho Người một bản lĩnh kiên cường và lòng trắc ẩn sâu sắc trước nỗi đau của con người.",
    category: "youth",
    imageUrl: "https://bna.1cdn.vn/2024/05/31/than_mau_bac_11.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Trải qua nỗi đau mất mẹ và em trai khi còn rất nhỏ.",
      "Về Nghệ An sống với bà ngoại một thời gian ngắn trước khi trở lại Huế."
    ]
  },
  {
    id: "1906-quoc-hoc",
    year: 1906,
    date: "Năm 1906 - 1908",
    title: "Học tập tại Trường Quốc học Huế",
    description: "Theo cha trở lại Huế, Nguyễn Tất Thành (tên mới của Nguyễn Sinh Cung) được theo học tại Trường Tiểu học Pháp - Việt Đông Ba, sau đó thi đỗ vào Trường Quốc học Huế. Tại đây, Người không chỉ tiếp thu kiến thức tân học của phương Tây mà còn bộc lộ tinh thần dân tộc mạnh mẽ. Năm 1908, Nguyễn Tất Thành đã tích cực tham gia vào phong trào biểu tình chống sưu thuế của nhân dân Trung Kỳ. Dù bị chính quyền thực dân trục xuất khỏi trường vì hoạt động yêu nước này, đây lại là bước ngoặt củng cố quyết tâm ra đi tìm đường cứu nước của Người.",
    category: "youth",
    imageUrl: "https://bna.1cdn.vn/2024/06/12/truong-quoc-hoc-hue-dau-the-ky-xx.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
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
    description: "Rời Huế, Nguyễn Tất Thành xuôi về phương Nam và dừng chân tại Phan Thiết, trở thành thầy giáo dạy chữ Quốc ngữ và thể dục tại Trường Dục Thanh - một ngôi trường do các nhà nho yêu nước sáng lập. Tại đây, Người không chỉ dạy học mà còn truyền ngọn lửa yêu nước cho thế hệ trẻ. Đến khoảng cuối năm 1910 đầu 1911, Người tiếp tục hành trình vào Sài Gòn, theo học tại Trường Bá Nghệ và làm nhiều công việc lao động chân tay khác nhau để thâm nhập thực tế, đồng thời tìm kiếm cơ hội lên tàu buôn phương Tây để thực hiện hoài bão xuất ngoại.",
    category: "youth",
    imageUrl: "https://lalago.vn/wp-content/uploads/2025/05/Truong-Duc-Thanh-7.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
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
    description: "Vào ngày 5/6/1911 lịch sử, dưới cái tên Văn Ba, người thanh niên 21 tuổi Nguyễn Tất Thành đã lên chiếc tàu buôn mang tên Đô đốc Latouche-Tréville từ Bến Nhà Rồng (Sài Gòn), chính thức bắt đầu hành trình bôn ba vĩ đại kéo dài suốt 30 năm qua các châu lục. Với công việc phụ bếp đầy nhọc nhằn, Người ra đi không mang theo tài sản gì ngoài lòng yêu nước cháy bỏng và khát vọng cháy bỏng: muốn sang phương Tây để xem họ làm thế nào, rồi trở về giúp đồng bào giải phóng dân tộc khỏi ách nô lệ.",
    category: "abroad",
    imageUrl: "https://ulis.vnu.edu.vn/files/uploads/2024/05/bac-di-tim-duong-cuu-nuoc.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    isImportant: true,
    details: [
      "Bắt đầu hành trình bôn ba kéo dài 30 năm qua nhiều châu lục.",
      "Làm đủ mọi nghề lao động chân tay cực nhọc để tự nuôi sống bản thân và học tập.",
      "Tìm hiểu thực tiễn cuộc sống của giai cấp vô sản và các dân tộc bị áp bức trên thế giới."
    ]
  },
  {
    id: "1912-usa",
    year: 1912,
    date: "Cuối 1912 - Cuối 1913",
    title: "Đặt chân đến Hoa Kỳ",
    description: "Trong cuộc hành trình vòng quanh thế giới làm thuê trên các con tàu, Nguyễn Tất Thành đã đặt chân đến Hoa Kỳ. Người sống và làm việc tại nhiều thành phố lớn như New York và Boston. Dù phải làm những công việc vất vả, Người luôn dành thời gian nghiên cứu lịch sử nước Mỹ, đặc biệt là cuộc Cách mạng giành độc lập và bản Tuyên ngôn Độc lập năm 1776. Sự tương phản gay gắt giữa sự giàu có của chủ nghĩa tư bản với cảnh bóc lột sức lao động của người da đen và người nghèo đã giúp Người nhận thức sâu sắc hơn về bản chất của chủ nghĩa đế quốc.",
    category: "abroad",
    imageUrl: "https://baotanghochiminh.vn/pic/Customer/image00_637585327229311227_HasThumb.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Tìm hiểu cuộc Cách mạng Mỹ và quyền con người.",
      "Làm việc tại New York và Boston."
    ]
  },
  {
    id: "1913-uk",
    year: 1913,
    date: "Năm 1913 - 1916",
    title: "Lao động và học tập tại nước Anh",
    description: "Rời Mỹ, Nguyễn Tất Thành vượt Đại Tây Dương đến thủ đô Luân Đôn của nước Anh. Trong 3 năm ở đây, Người làm đủ nghề cực nhọc từ cào tuyết, đốt lò, cho đến phụ bếp tại khách sạn Carlton nổi tiếng để tự nuôi sống bản thân và dành tiền mua sách báo học tiếng Anh. Đây là thời kỳ Người thâm nhập sâu vào phong trào công nhân ở một cường quốc tư bản lớn nhất thế giới, tích cực tham gia các hội đoàn lao động và Hội những người lao động hải ngoại, từng bước tiếp cận với các trào lưu tư tưởng chính trị tiến bộ của châu Âu.",
    category: "abroad",
    imageUrl: "https://file3.qdnd.vn/data/images/0/2021/06/04/vuhuyen/3152020huyen30pg.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Học hỏi về phong trào công nhân ở một cường quốc tư bản lớn.",
      "Tham gia các hội đoàn lao động tại Anh."
    ]
  },
  {
    id: "1917-france",
    year: 1917,
    date: "Cuối 1917",
    title: "Trở lại nước Pháp",
    description: "Vào những năm cuối của Chiến tranh Thế giới thứ nhất, Nguyễn Tất Thành từ Anh trở lại Paris (Pháp). Đây là nơi tập trung đông đảo Việt kiều và những trí thức cấp tiến. Tại trung tâm văn hóa và chính trị châu Âu này, Người đã tích cực tham gia vào phong trào công nhân Pháp, bắt đầu sử dụng ngòi bút sắc bén viết báo để vạch trần tội ác của chủ nghĩa thực dân. Đồng thời, Người mở rộng quan hệ với các nhà hoạt động cánh tả, chuẩn bị nền tảng quan trọng cho những bước nhảy vọt về nhận thức chính trị trong giai đoạn sắp tới.",
    category: "abroad",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-j_X7xOUtajJuWhNKV3OxrtJEmOezf1PGA&s",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Bắt đầu sử dụng ngòi bút viết báo để lên án chủ nghĩa thực dân."
    ]
  },
  {
    id: "1919-versailles",
    year: 1919,
    date: "18 tháng 6, 1919",
    title: "Gia nhập Đảng Xã hội Pháp & Gửi Yêu sách 8 điểm",
    description: "Năm 1919 chứng kiến bước ngoặt lớn khi Người gia nhập Đảng Xã hội Pháp. Cùng năm đó, tại Hội nghị hòa bình Versailles, thay mặt những người Việt Nam yêu nước, Người lấy tên Nguyễn Ái Quốc gửi tới hội nghị Bản Yêu sách của nhân dân An Nam gồm 8 điểm. Dù bị các cường quốc phớt lờ, bản yêu sách đòi các quyền tự do dân chủ cơ bản này đã gây tiếng vang lớn như một quả bom nổ tung trong dư luận Pháp và thức tỉnh nhân dân các nước thuộc địa. Cái tên Nguyễn Ái Quốc chính thức trở thành biểu tượng của phong trào giải phóng dân tộc Việt Nam.",
    category: "abroad",
    imageUrl: "https://baotanglichsuquocgia.vn/DataFiles/Uploaded/image/data%20Hung/nguyen%20ai%20quoc/3.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    isImportant: true,
    details: [
      "Sự kiện gây chấn động dư luận Pháp và các nước thuộc địa.",
      "Đòi hỏi các quyền tự do dân chủ cơ bản cho người dân An Nam.",
      "Cái tên Nguyễn Ái Quốc chính thức vang danh trên trường quốc tế."
    ]
  },
  {
    id: "1920-communist",
    year: 1920,
    date: "Tháng 12, 1920",
    title: "Sáng lập Đảng Cộng sản Pháp",
    description: "Tháng 7/1920, Nguyễn Ái Quốc đọc được bản Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của V.I. Lenin. Luận cương đã giải đáp triệt để con đường giải phóng dân tộc mà Người đang trăn trở, khiến Người vui mừng đến phát khóc. Tại Đại hội Đảng Xã hội Pháp ở thành phố Tours tháng 12/1920, Người đã bỏ phiếu tán thành gia nhập Quốc tế thứ ba (Quốc tế Cộng sản) và trở thành một trong những người tham gia sáng lập Đảng Cộng sản Pháp. Sự kiện này đánh dấu bước chuyển mình quyết định: từ một người yêu nước trở thành người chiến sĩ cộng sản đầu tiên của Việt Nam.",
    category: "abroad",
    imageUrl: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/052025/nguyen-ai-quoc_20250518093415.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    isImportant: true,
    details: [
      "Tìm ra con đường cứu nước đúng đắn: Cách mạng vô sản.",
      "Chính thức tách khỏi Đảng Xã hội và tham gia sáng lập Đảng Cộng sản Pháp."
    ]
  },
  {
    id: "1921-union",
    year: 1921,
    date: "Năm 1921",
    title: "Lập Hội Liên hiệp Thuộc địa",
    description: "Với tư duy chiến lược sắc bén, Nguyễn Ái Quốc nhận thấy cần phải đoàn kết sức mạnh của các dân tộc bị áp bức. Năm 1921, Người cùng một số nhà cách mạng ở các nước thuộc địa của Pháp (như Algérie, Maroc, Madagascar...) lập ra Hội Liên hiệp Thuộc địa tại Paris. Mục đích của hội là tập hợp, đoàn kết lực lượng của các dân tộc bị áp bức đứng lên chống lại chủ nghĩa đế quốc. Đây là tổ chức quốc tế đầu tiên mang tính chất chống thực dân do Người khởi xướng, đặt nền móng cho sự đoàn kết của phong trào giải phóng dân tộc trên toàn cầu.",
    category: "abroad",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbJdtNAYzRe1DeTBEQSho5vuOPBM1vwefaw&s",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Mở rộng mặt trận đấu tranh chống chủ nghĩa đế quốc.",
      "Tạo sự liên kết giữa các thuộc địa của Pháp trên thế giới."
    ]
  },
  {
    id: "1922-paria-ussr",
    year: 1922,
    date: "Năm 1922",
    title: "Sáng lập báo Le Paria & Đến Liên Xô lần đầu",
    description: "Nguyễn Ái Quốc cùng các đồng chí trong Hội Liên hiệp Thuộc địa sáng lập ra tờ báo Le Paria (Người cùng khổ). Người đóng vai trò chủ nhiệm kiêm chủ bút, trực tiếp viết bài, vẽ tranh biếm họa để tố cáo những tội ác đẫm máu của chế độ thực dân Pháp và truyền bá tư tưởng cách mạng. Cuối năm 1922, Người bí mật rời Pháp đến Moskva (Liên Xô) để tham dự Đại hội lần thứ tư của Quốc tế Cộng sản. Đây là lần đầu tiên Người đặt chân đến đất nước của Cách mạng Tháng Mười, nơi mở ra chương mới trong sự nghiệp bồi dưỡng lý luận và thực tiễn cách mạng.",
    category: "abroad",
    imageUrl: "https://hochiminh.vn/upload/3000001/20251024/e2dfa7b196ea37c6ce13c72ae8f92f6aBH.310_resize.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Sử dụng báo chí làm vũ khí sắc bén tố cáo thực dân.",
      "Gặp gỡ các nhà lãnh đạo quốc tế và trở thành thành viên Ban Đông Nam Á."
    ]
  },
  {
    id: "1923-moscow",
    year: 1923,
    date: "Tháng 6, 1923",
    title: "Học tập tại Đại học Phương Đông (Liên Xô)",
    description: "Đến tháng 6 năm 1923, Nguyễn Ái Quốc chính thức theo học tại Trường Đại học Lao động Cộng sản Phương Đông ở Moskva. Tại đây, Người được đào tạo bài bản và hệ thống về chủ nghĩa Mác-Lênin, triết học và kỹ năng tổ chức khởi nghĩa vũ trang. Trong thời gian này, Người đã tích cực tham gia Hội nghị lần thứ nhất của Quốc tế Nông dân và xuất sắc được bầu vào Ban Chấp hành, Đoàn Chủ tịch của tổ chức này. Những bài viết của Người về vấn đề nông dân ở phương Đông đã đóng góp lớn vào kho tàng lý luận của phong trào cộng sản quốc tế.",
    category: "abroad",
    imageUrl: "https://nhavanphamthangvu.wordpress.com/wp-content/uploads/2016/06/13335875_835484869891384_6901869845217679308_n.jpg?w=300&h=231",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Được đào tạo chính quy về chủ nghĩa Mác-Lênin.",
      "Được bầu vào Đoàn Chủ tịch Quốc tế Nông dân."
    ]
  },
  {
    id: "1924-guangzhou",
    year: 1924,
    date: "Cuối 1924",
    title: "Rời Liên Xô tới Quảng Châu (Trung Quốc)",
    description: "Năm 1924, sau khi tham gia và trình bày Báo cáo quan trọng về tình hình Đông Dương tại Đại hội 5 của Quốc tế Cộng sản, Nguyễn Ái Quốc quyết định tiến sát hơn về biên giới Tổ quốc để dễ dàng chỉ đạo phong trào trong nước. Rời Moskva, Người lên đường tới Quảng Châu (Trung Quốc) dưới lớp vỏ bọc là Lý Thụy - phiên dịch viên cho phái đoàn cố vấn của chính phủ Liên Xô do Borodin làm trưởng đoàn. Việc đến Quảng Châu đã tạo điều kiện thuận lợi để Người liên lạc với các nhà yêu nước Việt Nam đang tị nạn tại đây.",
    category: "abroad",
    imageUrl: "https://ngaymoionline.com.vn/stores/news_dataimages/2024/062024/12/16/in_article/picture320240612161814.jpg?rt=20240612161817",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Bắt đầu trực tiếp huấn luyện cán bộ cách mạng Việt Nam ngay sát biên giới."
    ]
  },
  {
    id: "1925-thanh-nien",
    year: 1925,
    date: "Năm 1925",
    title: "Thành lập Hội Việt Nam Cách mạng Thanh niên",
    description: "Tại Quảng Châu, Nguyễn Ái Quốc đã tập hợp các thanh niên trí thức yêu nước Việt Nam để thành lập Việt Nam Thanh niên Cách mạng Đồng chí Hội vào năm 1925. Đây là tổ chức tiền thân có vai trò chuẩn bị về tư tưởng, chính trị và tổ chức cho sự ra đời của Đảng Cộng sản sau này. Người trực tiếp mở các lớp huấn luyện chính trị ngắn hạn, biên soạn tài liệu và xuất bản tờ báo Thanh Niên làm cơ quan ngôn luận. Nhiều học trò xuất sắc của Người từ cái nôi này đã tỏa về nước, thắp lên ngọn lửa phong trào đấu tranh trên toàn Đông Dương.",
    category: "abroad",
    imageUrl: "https://file3.qdnd.vn/data/images/0/2025/01/06/upload_2058/33.jpg?dpi=150&quality=100&w=870",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Mở các lớp huấn luyện chính trị cho thanh niên.",
      "Truyền bá chủ nghĩa Mác-Lênin vào trong nước."
    ]
  },
  {
    id: "1927-belgium",
    year: 1927,
    date: "Năm 1927",
    title: "Dự Đại hội chống đế quốc & Xuất bản Đường Kách mệnh",
    description: "Năm 1927, cuốn sách Đường Kách mệnh - tập hợp những bài giảng chính trị của Nguyễn Ái Quốc tại Quảng Châu - chính thức được xuất bản. Tác phẩm đã vạch ra kim chỉ nam rõ ràng cho con đường cách mạng Việt Nam. Cùng năm, do tình hình chính trị tại Trung Quốc biến động phức tạp sau vụ thảm sát của Tưởng Giới Thạch, Người buộc phải rời Quảng Châu đi châu Âu. Người đã thay mặt các dân tộc thuộc địa đến dự Đại hội đại biểu toàn thế giới của Liên đoàn Chống đế quốc tổ chức tại Brussel (Bỉ), tiếp tục khẳng định vai trò lãnh đạo quốc tế của mình.",
    category: "abroad",
    imageUrl: "https://nghiencuulichsu.com/wp-content/uploads/2013/09/duong_kmenh.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Đường Kách mệnh vạch ra kim chỉ nam cho cách mạng.",
      "Tiếp tục hoạt động ngoại giao liên kết quốc tế."
    ]
  },
  {
    id: "1928-thailand",
    year: 1928,
    date: "Mùa thu 1928 - 1929",
    title: "Hoạt động tại Xiêm La (Thái Lan)",
    description: "Mùa thu năm 1928, Nguyễn Ái Quốc bí mật từ châu Âu trở về châu Á và dừng chân tại Xiêm La (Thái Lan). Để che mắt mật thám, Người cải trang thành một nhà sư đầu trọc, mang bí danh Thầu Chín. Tại đây, Người đã lặn lội đi thăm và vận động kiều bào Việt Nam ở các vùng Đông Bắc Thái Lan, xây dựng cơ sở cách mạng vững chắc, dạy chữ Quốc ngữ và xuất bản báo gửi về nước. Những hoạt động không biết mệt mỏi của Người đã thổi bùng tinh thần yêu nước của hàng vạn Việt kiều trước khi Người rời đi vào cuối năm 1929.",
    category: "abroad",
    imageUrl: "https://cdnmedia.baotintuc.vn/Upload/3qVxwVtNEPp6Wp9kkF77g/files/2021/06/05/thai-lan-050621.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Xây dựng cơ sở cách mạng trong cộng đồng kiều bào.",
      "Cuối năm 1929 rời Thái Lan sang Trung Quốc."
    ]
  },
  {
    id: "1930-founding-party",
    year: 1930,
    date: "3 tháng 2, 1930",
    title: "Thành lập Đảng Cộng sản Việt Nam",
    description: "Đứng trước nguy cơ chia rẽ sâu sắc của ba tổ chức cộng sản trong nước, với tư cách là phái viên của Quốc tế Cộng sản, Nguyễn Ái Quốc đã triệu tập và chủ trì Hội nghị hợp nhất tại Cửu Long (Hồng Kông) vào ngày 3/2/1930. Bằng uy tín và trí tuệ vĩ đại, Người đã thống nhất các tổ chức thành một Đảng duy nhất lấy tên là Đảng Cộng sản Việt Nam. Hội nghị cũng nhất trí thông qua Chánh cương vắn tắt, Sách lược vắn tắt do Người trực tiếp soạn thảo. Sự kiện này là một bước ngoặt vĩ đại, chấm dứt thời kỳ khủng hoảng về đường lối cứu nước của dân tộc.",
    category: "abroad",
    imageUrl: "https://cdn2.baodongthap.vn/image/ckeditor/2026/20260130/files/h1.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    isImportant: true,
    details: [
      "Hợp nhất thành một Đảng duy nhất lấy tên là Đảng Cộng sản Việt Nam.",
      "Thông qua Chánh cương vắn tắt và Sách lược vắn tắt do ông soạn thảo."
    ]
  },
  {
    id: "1931-arrested",
    year: 1931,
    date: "Năm 1931 - 1933",
    title: "Vụ án Tống Văn Sơ tại Hồng Kông",
    description: "Tháng 6/1931, Nguyễn Ái Quốc bị chính quyền thực dân Anh bắt giam trái phép tại Hồng Kông dưới bí danh Tống Văn Sơ, với âm mưu đen tối là trao trả Người cho chính quyền Pháp ở Đông Dương để lãnh án tử hình. Vụ án đã gây chấn động dư luận quốc tế, có lúc báo chí Pháp còn đăng tin thất thiệt rằng Người đã chết trong ngục vì bệnh lao. Nhờ sự đấu tranh bền bỉ và biện hộ tận tình của luật sư Francis Henry Loseby cùng sự giúp đỡ của Hội Cứu tế đỏ quốc tế, Người cuối cùng được trả tự do vào đầu năm 1933 và bí mật trở lại Liên Xô.",
    category: "abroad",
    imageUrl: "https://tccs.1cdn.vn/2026/02/12/ct-4(1).jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Vượt qua âm mưu giao nộp cho thực dân Pháp.",
      "Có lúc báo chí loan tin ông đã chết trong tù."
    ]
  },
  {
    id: "1934-lenin-school",
    year: 1934,
    date: "Năm 1934 - 1938",
    title: "Học tập tại Trường Quốc tế Lenin (Liên Xô)",
    description: "Sau khi thoát khỏi nhà tù Hồng Kông, Nguyễn Ái Quốc đến Moskva vào mùa xuân năm 1934. Với bí danh Lin, Người theo học tại Trường Quốc tế Lenin - học viện đào tạo cán bộ cao cấp của phong trào cộng sản quốc tế. Thời kỳ này, Người đã phải đối mặt với những thử thách lớn khi bị một số lãnh đạo trong Đệ Tam Quốc tế hiểu lầm và phê phán về đường lối giải phóng dân tộc. Bất chấp những sóng gió và bị giam lỏng, Người vẫn kiên định với tư tưởng kết hợp đấu tranh giai cấp với giải phóng dân tộc, lặng lẽ củng cố lý luận chờ ngày trở về.",
    category: "abroad",
    imageUrl: "https://baotanglichsu.vn/DataFiles/Uploaded/image/DATA%20HUONG/TIN%20NAM%202014/TIN%20THANG%206/Nguyen%20Ai%20Quoc%20bi%20bat%20o%20Hong%20Kong/2.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Vượt qua giai đoạn bị hiểu lầm về đường lối chính trị.",
      "Tiếp tục củng cố lý luận cách mạng."
    ]
  },
  {
    id: "1938-china-return",
    year: 1938,
    date: "Năm 1938 - 1940",
    title: "Trở lại Trung Quốc (Bí danh Hồ Quang)",
    description: "Cuối năm 1938, nhận thấy tình hình thế giới chuẩn bị bước vào chiến tranh, Nguyễn Ái Quốc rời Liên Xô trở lại Trung Quốc. Trong vai một Thiếu tá của Bát lộ quân tên là Hồ Quang, Người đã làm việc tại nhiều khu căn cứ của Đảng Cộng sản Trung Quốc như Quế Lâm, Côn Minh và Diên An. Đây là khoảng thời gian Người tích cực khôi phục các mối liên lạc với tổ chức Đảng trong nước, tiến sát về vùng biên giới Việt-Trung để chuẩn bị mọi điều kiện cần thiết cho cuộc trở về Tổ quốc lãnh đạo cách mạng sau ba thập kỷ xa cách.",
    category: "abroad",
    imageUrl: "https://baoquocte.vn/stores/news_dataimages/2026/012026/23/08/thieu-ta-ho-quang-o-trung-quoc-20260123085236.webp?rt=202605201354",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Tiến sát gần biên giới Việt-Trung để chuẩn bị về nước.",
      "Bắt đầu sử dụng danh xưng Hồ Chí Minh từ khoảng năm 1940."
    ]
  },
  {
    id: "1941-return",
    year: 1941,
    date: "28 tháng 1, 1941",
    title: "Về nước trực tiếp lãnh đạo Cách mạng",
    description: "Ngày 28/1/1941 là một cột mốc thiêng liêng khi Nguyễn Ái Quốc vượt qua mốc biên giới 108, đặt bước chân đầu tiên trở về Tổ quốc tại hang Cốc Bó, xã Trường Hà, huyện Hà Quảng, tỉnh Cao Bằng sau tròn 30 năm bôn ba hải ngoại. Bốn tháng sau, Người chủ trì Hội nghị Trung ương 8, chính thức giương cao ngọn cờ giải phóng dân tộc và thành lập Mặt trận Việt Minh nhằm tập hợp rộng rãi mọi tầng lớp nhân dân. Từ căn cứ địa Pác Bó, ngọn lửa cách mạng đã được nhen nhóm và nhanh chóng lan rộng ra toàn quốc, chuẩn bị cho cuộc Tổng khởi nghĩa.",
    category: "leadership",
    imageUrl: "https://file3.qdnd.vn/data/images/0/2022/01/07/tvtuongvy/mat%20tran%20lien%20viet.jpg?dpi=150&mode=crop&anchor=topcenter&quality=100&w=500",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    isImportant: true,
    details: [
      "Tháng 5/1941 chủ trì Hội nghị Trung ương 8, quyết định thành lập Mặt trận Việt Minh.",
      "Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu."
    ]
  },
  {
    id: "1942-prison-diary",
    year: 1942,
    date: "Tháng 8, 1942",
    title: "Bị bắt tại Quảng Tây và viết 'Nhật ký trong tù'",
    description: "Tháng 8/1942, với tên gọi mới là Hồ Chí Minh, Người lên đường sang Trung Quốc để tìm kiếm sự ủng hộ của quốc tế cho phong trào độc lập Việt Nam. Tuy nhiên, vừa qua biên giới, Người bị chính quyền Tưởng Giới Thạch bắt giam vô cớ vì nghi ngờ là gián điệp. Trong hơn một năm bị đày đọa, giải qua hơn 30 nhà giam khắc nghiệt tại Quảng Tây, Người đã sáng tác tập thơ chữ Hán bất hủ 'Nhật ký trong tù'. Bằng tinh thần lạc quan và ý chí thép, Người đã biến chốn lao tù thành nơi tôi luyện bản lĩnh người chiến sĩ cộng sản trước khi được trả tự do vào tháng 9/1943.",
    category: "leadership",
    imageUrl: "https://videonvsk.vnanet.vn//MediaUpload/Video/2023/09/12/tdls-btl-1545-tdls-10-9-2023-nhat-ky-trong-tu-nhung-van-tho-bay-tren-doi-canh-tu-do-hd-12-17-19-40.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Bị giải qua hơn 30 nhà giam của 13 huyện.",
      "Được thả ngày 10/9/1943 sau sự can thiệp của Mỹ và các thế lực tiến bộ."
    ]
  },
  {
    id: "1945-tan-trao",
    year: 1945,
    date: "16 tháng 8, 1945",
    title: "Hội nghị Tân Trào và Ủy ban Giải phóng",
    description: "Khi thời cơ khởi nghĩa ngàn năm có một đã tới sau khi quân phiệt Nhật Bản đầu hàng Đồng Minh, Hồ Chí Minh (dù đang ốm rất nặng) đã quyết liệt chỉ thị: 'Dù có phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập!'. Ngày 16/8/1945, Tổng bộ Việt Minh triệu tập Quốc dân Đại hội tại Đình Tân Trào (Tuyên Quang), nhất trí tán thành chủ trương Tổng khởi nghĩa và cử ra Ủy ban Dân tộc Giải phóng Việt Nam (tức Chính phủ Lâm thời) do Hồ Chí Minh làm Chủ tịch, phát lệnh kêu gọi đồng bào cả nước đứng lên giành chính quyền.",
    category: "leadership",
    imageUrl: "https://admin.vov.gov.vn/UploadFolder/KhoTin/Images/UploadFolder/VOVVN/Images/sites/default/files/styles/large/public/2025-08/bac_ho_tai_tan_trao_1.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Ra lệnh Tổng khởi nghĩa giành chính quyền trên cả nước."
    ]
  },
  {
    id: "1945-independence",
    year: 1945,
    date: "2 tháng 9, 1945",
    title: "Đọc Tuyên ngôn Độc lập",
    description: "Sau thắng lợi rực rỡ của Cách mạng Tháng Tám, chiều ngày 2/9/1945 tại Quảng trường Ba Đình lịch sử ở thủ đô Hà Nội, trước hàng vạn đồng bào, Chủ tịch Hồ Chí Minh đã long trọng đọc bản Tuyên ngôn Độc lập. Giọng nói trầm ấm của Người vang vọng khắp non sông, chính thức khai sinh ra nước Việt Nam Dân chủ Cộng hòa - nhà nước công nông đầu tiên ở Đông Nam Á. Sự kiện vĩ đại này đã đánh dấu chấm hết cho ách cai trị hơn 80 năm của thực dân Pháp và hàng nghìn năm của chế độ phong kiến, đưa dân tộc Việt Nam bước vào kỷ nguyên độc lập tự do.",
    category: "leadership",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85qw2C0KRBKnQBA75Ou7Y58GUFetX52aqCA&s",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    isImportant: true,
    details: [
      "Chấm dứt hàng nghìn năm phong kiến và ách đô hộ của thực dân.",
      "Thành lập nhà nước công nông đầu tiên ở Đông Nam Á."
    ]
  },
  {
    id: "1946-diplomacy",
    year: 1946,
    date: "Tháng 3 - Tháng 9, 1946",
    title: "Hoạt động ngoại giao bảo vệ nền độc lập non trẻ",
    description: "Chính quyền cách mạng non trẻ vừa ra đời đã phải đối mặt với thù trong giặc ngoài vô cùng hiểm ác (quân Tưởng ở miền Bắc, quân Pháp ở miền Nam). Bằng tài ngoại giao khôn khéo 'dĩ bất biến, ứng vạn biến', Chủ tịch Hồ Chí Minh đã chủ động ký Hiệp định Sơ bộ (6/3) và bản Tạm ước (14/9) với chính phủ Pháp, nhượng bộ một số quyền lợi kinh tế để câu giờ hòa hoãn, đẩy quân Tưởng về nước và tranh thủ thời gian vàng ngọc để toàn dân ta củng cố lực lượng vũ trang chuẩn bị cho một cuộc kháng chiến tất yếu sẽ xảy ra.",
    category: "anti-french",
    imageUrl: "https://mic.mediacdn.vn/Upload/TinTuc/20160517-m2.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Tổ chức Tổng tuyển cử đầu tiên (6/1/1946).",
      "Sang Pháp dự Hội nghị Fontainebleau."
    ]
  },
  {
    id: "1946-resistance",
    year: 1946,
    date: "19 tháng 12, 1946",
    title: "Ban hành Lời kêu gọi Toàn quốc Kháng chiến",
    description: "Khi thực dân Pháp bội ước, liên tục gây hấn và gửi tối hậu thư đòi tước vũ khí của ta tại Hà Nội, giới hạn chịu đựng đã vượt quá sức cam chịu. Đêm 19/12/1946, Chủ tịch Hồ Chí Minh đã viết Lời kêu gọi Toàn quốc Kháng chiến, được phát đi trên đài phát thanh. Với tinh thần 'Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ', lời hiệu triệu thiêng liêng của Người đã thổi bùng ngọn lửa chiến đấu của toàn quân, toàn dân ta, mở đầu cho cuộc kháng chiến trường kỳ gian khổ chống thực dân Pháp xâm lược.",
    category: "anti-french",
    imageUrl: "https://baotanglichsuquocgia.vn/DataFiles/News/Tintuc_cgs_vn_2016121517h19m46s.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    isImportant: true,
    details: [
      "Mở đầu cho cuộc kháng chiến trường kỳ, toàn dân, toàn diện.",
      "Tháng 3/1947, chuyển lên chiến khu Việt Bắc."
    ]
  },
  {
    id: "1950-china-ussr",
    year: 1950,
    date: "Tháng 1 - 4, 1950",
    title: "Bí mật thăm Trung Quốc, Liên Xô",
    description: "Trong thời điểm cuộc kháng chiến bước vào giai đoạn giằng co khốc liệt, đầu năm 1950, Chủ tịch Hồ Chí Minh đã thực hiện một chuyến đi bộ bí mật đầy gian nan xuyên rừng từ Tuyên Quang sang Trung Quốc, rồi đi tàu hỏa sang Liên Xô để gặp gỡ các nhà lãnh đạo Mao Trạch Đông và Stalin. Chuyến đi lịch sử này mang ý nghĩa chiến lược to lớn, giúp Việt Nam Dân chủ Cộng hòa chính thức được các nước trong phe Xã hội chủ nghĩa công nhận, thiết lập quan hệ ngoại giao và mở ra nguồn viện trợ vô giá về vũ khí, khí tài, tạo bước ngoặt thay đổi cục diện chiến trường.",
    category: "anti-french",
    imageUrl: "https://special.nhandan.vn/chien-dich-bien-gioi/assets/gBopFZGmww/8-1920x1080.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Tạo cục diện mới cho cuộc kháng chiến chống Pháp."
    ]
  },
  {
    id: "1951-party-congress",
    year: 1951,
    date: "Tháng 2, 1951",
    title: "Đại hội Đảng lần II",
    description: "Tháng 2/1951, Đại hội đại biểu toàn quốc lần thứ II của Đảng được tổ chức tại Tuyên Quang. Dưới sự chủ trì của Hồ Chí Minh, Đại hội đã quyết định đưa Đảng ra hoạt động công khai trở lại sau thời gian dài rút vào bí mật, lấy tên mới là Đảng Lao động Việt Nam để phù hợp với tình hình mặt trận đoàn kết dân tộc. Tại Đại hội này, Người được nhất trí bầu làm Chủ tịch Ban Chấp hành Trung ương Đảng. Đường lối kháng chiến kiến quốc được hoàn thiện, vạch ra các chiến lược quan trọng tiến tới phản công tổng lực đánh bại hoàn toàn thực dân Pháp.",
    category: "anti-french",
    imageUrl: "https://file3.qdnd.vn/data/images/0/2025/01/27/upload_2081/dai_hoi_ii-09_52_50_538.gif?w=400",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Hoàn thiện đường lối kháng chiến và kiến quốc."
    ]
  },
  {
    id: "1954-dien-bien-phu",
    year: 1954,
    date: "Năm 1954",
    title: "Chiến thắng Điện Biên Phủ",
    description: "Sau 9 năm trường kỳ kháng chiến nếm mật nằm gai, dưới sự lãnh đạo tài tình của Đảng và Chủ tịch Hồ Chí Minh, quân dân ta đã làm nên chiến thắng lịch sử Điện Biên Phủ 'lừng lẫy năm châu, chấn động địa cầu'. Thắng lợi oanh liệt này đã đập tan hoàn toàn ý chí xâm lược của thực dân Pháp, buộc chúng phải ngồi vào bàn đàm phán và ký kết Hiệp định Genève (tháng 7/1954) công nhận độc lập, chủ quyền và toàn vẹn lãnh thổ của Việt Nam, mở ra kỷ nguyên xây dựng chủ nghĩa xã hội ở miền Bắc.",
    category: "anti-french",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    isImportant: true,
    details: [
      "Chấm dứt ách thống trị của thực dân Pháp.",
      "Giải phóng hoàn toàn miền Bắc."
    ]
  },
  {
    id: "1956-land-reform",
    year: 1956,
    date: "Năm 1953 - 1957",
    title: "Cải cách ruộng đất và Khôi phục kinh tế",
    description: "Sau khi hòa bình lập lại ở miền Bắc, Chủ tịch Hồ Chí Minh tập trung chỉ đạo công cuộc khôi phục kinh tế và cải cách ruộng đất để đem lại ruộng đất cho dân cày nghèo. Tuy nhiên, trong quá trình thực hiện phong trào đã xảy ra một số sai lầm nghiêm trọng. Bằng thái độ trung thực và dũng cảm của người cộng sản chân chính, Chủ tịch Hồ Chí Minh đã đứng ra nhận khuyết điểm trước toàn Đảng, toàn dân và chỉ đạo chiến dịch sửa sai từ năm 1956, qua đó phục hồi sinh mệnh chính trị và tài sản cho hàng ngàn người bị oan sai, củng cố lại niềm tin của nhân dân.",
    category: "final-years",
    imageUrl: "hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeXlRe7YaQu4v2s0SCwQhiSxJPcjIP84BjMA&s",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Khởi sự công cuộc sửa sai từ tháng 2/1956.",
      "Thể hiện bản lĩnh, trung thực và trách nhiệm của người đứng đầu."
    ]
  },
  {
    id: "1957-socialist-tour",
    year: 1957,
    date: "Năm 1957",
    title: "Chuyến thăm các nước Xã hội Chủ nghĩa",
    description: "Để củng cố tình đoàn kết và tranh thủ sự ủng hộ quốc tế cho công cuộc xây dựng chủ nghĩa xã hội ở miền Bắc, Chủ tịch Hồ Chí Minh đã dẫn đầu Đoàn đại biểu cấp cao Việt Nam thực hiện một chuyến công du dài ngày thăm hữu nghị các nước xã hội chủ nghĩa anh em. Từ Trung Quốc, Bắc Triều Tiên, Liên Xô đến tận các quốc gia Đông Âu như Hungary, Ba Lan, Tiệp Khắc. Các chuyến đi này không chỉ nâng cao vị thế của Việt Nam trên trường quốc tế mà còn đem về những viện trợ vô giá cho công cuộc tái thiết đất nước.",
    category: "final-years",
    imageUrl: "https://tennguoidepnhat.net/wp-content/uploads/2012/01/51.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Củng cố tình đoàn kết trong khối Xã hội Chủ nghĩa."
    ]
  },
  {
    id: "1960-handover",
    year: 1963,
    date: "Từ năm 1963",
    title: "Giảm dần công việc, bàn giao cho Lê Duẩn",
    description: "Bước vào những năm 1960, do tuổi cao sức yếu và phải thường xuyên sang nước ngoài điều dưỡng trị liệu, Chủ tịch Hồ Chí Minh bắt đầu giảm dần việc xử lý các công việc sự vụ hàng ngày. Người sáng suốt gọi ông Lê Duẩn từ miền Nam ra Hà Nội để bàn giao quyền điều hành trực tiếp công việc chung của Đảng và Nhà nước. Điều này nhằm chuẩn bị đội ngũ kế cận và củng cố khối đại đoàn kết Nam Bắc. Từ năm 1965, vào dịp sinh nhật lần thứ 75, Người bắt đầu lặng lẽ viết bản Di chúc để căn dặn lại những tâm nguyện cuối cùng cho toàn Đảng, toàn dân.",
    category: "final-years",
    imageUrl: "https://special.nhandan.vn/Mot_so_thanh_tuu_ve_phat_trien_kinh-te_xa_hoi_cua_tinh_Quang_Ninh_tu_1963_nay/assets/IqnkR1nuvp/bac-ho-ve-tham-an-tet-at-ty-nam-1965-voi-quan-va-dan-quang-ninh-800x707.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Sang Trung Quốc trị liệu nhiều lần.",
      "Năm 1965, bắt đầu viết bản Di chúc vào dịp sinh nhật 75 tuổi."
    ]
  },
  {
    id: "1966-independent-speech",
    year: 1966,
    date: "17 tháng 7, 1966",
    title: "Lời kêu gọi 'Không có gì quý hơn độc lập, tự do'",
    description: "Khi đế quốc Mỹ ồ ạt đưa hàng chục vạn quân viễn chinh vào miền Nam và leo thang chiến tranh phá hoại tàn khốc bằng không quân ở miền Bắc, tình hình đất nước vô cùng nguy nan. Ngày 17/7/1966, Chủ tịch Hồ Chí Minh đã đọc Lời kêu gọi chống Mỹ cứu nước qua sóng phát thanh. Chân lý thời đại 'Không có gì quý hơn độc lập tự do' được vang lên như một tiếng sấm rền, trở thành kim chỉ nam hành động, truyền sức mạnh vô song và ý chí quyết tử cho đồng bào cả hai miền Nam Bắc vững bước vào giai đoạn ác liệt nhất của cuộc kháng chiến.",
    category: "final-years",
    imageUrl: "https://baotanglichsu.vn/DataFiles/Uploaded/image/data%20Hung/thang%207%20nam%202016/17-7-1966/2.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    isImportant: true,
    details: [
      "Khẳng định ý chí quyết chiến quyết thắng giặc Mỹ xâm lược."
    ]
  },
  {
    id: "1968-tet-offensive",
    year: 1968,
    date: "Năm 1967 - 1968",
    title: "Chỉ đạo Tổng tiến công Tết Mậu Thân",
    description: "Giai đoạn 1967-1968, dù bệnh tình trở nặng và phải ở lại Trung Quốc dưỡng bệnh, Hồ Chí Minh vẫn luôn theo sát chiến trường. Người đã hai lần quay về Việt Nam dự các phiên họp Bộ Chính trị đặc biệt để thông qua và phê duyệt kế hoạch Tổng tiến công và nổi dậy Tết Mậu Thân. Ngày 31/12/1967, Người đến đài phát thanh thu âm bài thơ chúc Tết 'Toàn thắng ắt về ta'. Đúng đêm giao thừa, giọng đọc ấm áp của Người vang lên trên sóng phát thanh, chính là hiệu lệnh thiêng liêng mở màn cho cuộc Tổng công kích chấn động làm xoay chuyển toàn bộ cục diện chiến tranh.",
    category: "final-years",
    imageUrl: "https://file.qdnd.vn/data/old_img/phucthang/2009/8/11/110809Thang19.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    details: [
      "Bài thơ 'Toàn thắng ắt về ta' được phát trên sóng phát thanh."
    ]
  },
  {
    id: "1969-passing",
    year: 1969,
    date: "2 tháng 9, 1969",
    title: "Chủ tịch Hồ Chí Minh qua đời",
    description: "Sáng ngày 2/9/1969, sau một cơn suy tim nặng, trái tim vĩ đại của Chủ tịch Hồ Chí Minh đã ngừng đập lúc 9 giờ 47 phút tại thủ đô Hà Nội, hưởng thọ 79 tuổi. Sự ra đi của Người là một tổn thất vô cùng to lớn, để lại niềm tiếc thương vô hạn cho toàn Đảng, toàn dân ta và bạn bè quốc tế. Tang lễ của Người được cử hành theo nghi thức Quốc tang trọng thể. Di sản vĩ đại và tư tưởng sáng ngời mà Người để lại sẽ mãi mãi là ngọn đuốc soi đường cho dân tộc Việt Nam đi đến bến bờ vinh quang, thống nhất và phồn vinh.",
    category: "final-years",
    imageUrl: "https://tapchidongnama.vn/wp-content/uploads/2023/09/304791449_1106245826947812_2230113752442030834_n-e1693622666810.jpg",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    isImportant: true,
    details: [
      "Để lại niềm tiếc thương vô hạn.",
      "Thi hài được bảo quản tại Lăng Chủ tịch, khánh thành năm 1975."
    ]
  }
];
