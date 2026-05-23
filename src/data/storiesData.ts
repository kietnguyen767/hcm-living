export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  audioUrl?: string;
  imageUrl?: string;
  referenceLinks?: { title: string; url: string }[];
  tags: string[];
  isImportant?: boolean;
  category: "achievement" | "work";
}

export const stories: Story[] = [
  // THÀNH TỰU VĨ ĐẠI
  {
    id: "khai-sinh-vndcch",
    title: "Khai sinh ra nước Việt Nam Dân chủ Cộng hòa",
    excerpt: "Lãnh đạo thành công cuộc Cách mạng Tháng Tám và đọc bản Tuyên ngôn Độc lập, chấm dứt hơn 80 năm đô hộ của thực dân Pháp.",
    content: `Thành tựu vĩ đại nhất của Chủ tịch Hồ Chí Minh là lãnh đạo thành công cuộc Cách mạng Tháng Tám năm 1945 và trực tiếp soạn thảo, đọc bản Tuyên ngôn Độc lập vào ngày 2/9/1945. Sự kiện này đã đánh dấu mốc son chói lọi trong lịch sử dân tộc, chấm dứt hàng nghìn năm phong kiến và hơn 80 năm đô hộ của thực dân Pháp. Nước Việt Nam Dân chủ Cộng hòa ra đời, mở ra một kỷ nguyên mới - kỷ nguyên độc lập, tự do và chủ nghĩa xã hội.`,
    author: "Lịch sử ghi nhận",
    date: "1945-09-02",
    readTime: "3 phút",
    tags: ["Thành tựu vĩ đại", "Lịch sử"],
    isImportant: true,
    imageUrl: "https://placehold.co/800x400/18110e/c48c14?text=Khai+Sinh+VNDCCH",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    category: "achievement"
  },
  {
    id: "sang-lap-dang",
    title: "Sáng lập và lãnh đạo Đảng, Mặt trận Việt Minh",
    excerpt: "Người trực tiếp thống nhất các tổ chức cộng sản để thành lập Đảng năm 1930 và Mặt trận Việt Minh năm 1941, tạo xương sống cho cách mạng Việt Nam.",
    content: `Năm 1930, trước sự chia rẽ của các tổ chức cộng sản trong nước, Hồ Chí Minh (lúc bấy giờ là Nguyễn Ái Quốc) đã với tư cách là phái viên của Quốc tế Cộng sản, trực tiếp thống nhất các tổ chức cộng sản để thành lập Đảng Cộng sản Việt Nam. Đến năm 1941, Người tiếp tục thành lập Mặt trận Việt Minh nhằm tập hợp rộng rãi sức mạnh toàn dân tộc. Đây là những tổ chức đóng vai trò nòng cốt, dẫn dắt nhân dân Việt Nam đi từ thắng lợi này đến thắng lợi khác.`,
    author: "Lịch sử ghi nhận",
    date: "1930-02-03",
    readTime: "3 phút",
    tags: ["Thành tựu vĩ đại", "Đảng", "Tổ chức"],
    isImportant: true,
    imageUrl: "https://placehold.co/800x400/18110e/c48c14?text=Sang+Lap+Dang",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    category: "achievement"
  },
  {
    id: "lanh-dao-khang-chien",
    title: "Lãnh đạo các cuộc kháng chiến vệ quốc",
    excerpt: "Ngọn cờ đầu và linh hồn của cuộc kháng chiến chống Pháp (đỉnh cao là Điện Biên Phủ) và vạch ra đường lối chiến lược chống Mỹ cứu nước.",
    content: `Trong suốt cuộc đời hoạt động cách mạng, Hồ Chí Minh là linh hồn của các cuộc kháng chiến vệ quốc vĩ đại. Người đã trực tiếp lãnh đạo toàn dân tiến hành cuộc kháng chiến trường kỳ chống thực dân Pháp, đi đến thắng lợi lừng lẫy năm châu chấn động địa cầu tại Điện Biên Phủ (1954). Trong cuộc kháng chiến chống Mỹ, dù tuổi cao sức yếu, Người vẫn là ngọn cờ đoàn kết toàn dân, vạch ra đường lối chiến lược và truyền ngọn lửa quyết tâm "Không có gì quý hơn độc lập tự do".`,
    author: "Lịch sử ghi nhận",
    date: "1946-1969",
    readTime: "3 phút",
    tags: ["Thành tựu vĩ đại", "Kháng chiến", "Quân sự"],
    isImportant: false,
    imageUrl: "https://placehold.co/800x400/18110e/c48c14?text=Lanh+Dao+Khang+Chien",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    category: "achievement"
  },
  {
    id: "nam-giu-trong-trach",
    title: "Nắm giữ các trọng trách cao nhất của đất nước",
    excerpt: "Đảm nhiệm các chức vụ Chủ tịch nước, Thủ tướng và Chủ tịch Đảng trong những giai đoạn khó khăn nhất của dân tộc.",
    content: `Ông là vị nguyên thủ quốc gia đảm nhiệm những chức vụ quan trọng nhất trong những giai đoạn đất nước khó khăn: Chủ tịch nước (1945–1969), Thủ tướng Chính phủ (1945–1955), và là người duy nhất trong lịch sử Đảng Cộng sản Việt Nam nắm giữ chức vụ Chủ tịch Đảng (1951–1969). Sự kiên định và tài lãnh đạo kiệt xuất của Người đã chèo lái con thuyền cách mạng Việt Nam vượt qua bao thác ghềnh nguy hiểm.`,
    author: "Lịch sử ghi nhận",
    date: "1945-1969",
    readTime: "2 phút",
    tags: ["Thành tựu vĩ đại", "Lãnh đạo"],
    isImportant: false,
    imageUrl: "https://placehold.co/800x400/18110e/c48c14?text=Chuc+Vu+Trong+Trach",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    category: "achievement"
  },
  {
    id: "vinh-danh-quoc-te",
    title: "Được quốc tế vinh danh và ghi nhận",
    excerpt: "Được UNESCO vinh danh là 'Anh hùng giải phóng đất nước và danh nhân văn hóa người Việt' vào dịp kỷ niệm 100 năm ngày sinh.",
    content: `Tầm vóc của ông vượt ra khỏi biên giới quốc gia. Tạp chí TIME (Mỹ) đã bình chọn ông là một trong 100 nhân vật có ảnh hưởng lớn nhất thế kỷ XX. Đặc biệt, nhân kỷ niệm 100 năm ngày sinh của ông, Tổ chức Giáo dục, Khoa học và Văn hóa Liên Hợp Quốc (UNESCO) đã ra nghị quyết vinh danh ông là "Anh hùng giải phóng dân tộc và Danh nhân văn hóa kiệt xuất của Việt Nam", khẳng định những đóng góp to lớn của Người đối với sự nghiệp đấu tranh chung của nhân loại.`,
    author: "Lịch sử ghi nhận",
    date: "1990",
    readTime: "2 phút",
    tags: ["Thành tựu vĩ đại", "Quốc tế", "Văn hóa"],
    isImportant: false,
    imageUrl: "https://placehold.co/800x400/18110e/c48c14?text=Vinh+Danh+Quoc+Te",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    category: "achievement"
  },

  // TÁC PHẨM TIÊU BIỂU
  {
    id: "tuyen-ngon-doc-lap",
    title: "Tuyên ngôn Độc lập (1945)",
    excerpt: "Tác phẩm chính trị - pháp lý mang tính bước ngoặt vĩ đại nhất lịch sử hiện đại Việt Nam, tuyên bố chấm dứt hơn 80 năm ách thống trị thực dân.",
    content: `Chiều ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình lịch sử, trước hàng vạn đồng bào, Chủ tịch Hồ Chí Minh đã long trọng đọc bản Tuyên ngôn Độc lập khai sinh ra nước Việt Nam Dân chủ Cộng hòa. 

Bản Tuyên ngôn bắt đầu bằng những chân lý bất hủ trích từ Tuyên ngôn Độc lập năm 1776 của Mỹ và Tuyên ngôn Nhân quyền và Dân quyền năm 1791 của Pháp: "Tất cả mọi người đều sinh ra có quyền bình đẳng..." Từ quyền con người, Hồ Chí Minh đã khái quát hóa một cách tài tình thành quyền dân tộc: "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do."

Bản Tuyên ngôn không chỉ là một văn kiện pháp lý đanh thép lên án tội ác của thực dân Pháp và phát xít Nhật đối với nhân dân ta, mà còn là lời công bố đầy tự hào về chủ quyền dân tộc. Văn kiện này được giới chuyên môn đánh giá sánh ngang với các bản tuyên ngôn vĩ đại trong lịch sử Việt Nam như Nam quốc sơn hà và Bình Ngô đại cáo.`,
    author: "Hồ Chí Minh",
    date: "1945-09-02",
    readTime: "5 phút",
    tags: ["Tác phẩm", "Chính trị", "Tuyên ngôn"],
    isImportant: true,
    imageUrl: "https://placehold.co/800x400/18110e/c48c14?text=Tuyen+Ngon+Doc+Lap",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    category: "work"
  },
  {
    id: "duong-kach-menh",
    title: "Đường kách mệnh (1927)",
    excerpt: "Tác phẩm lý luận nền tảng, tập hợp các bài giảng chính trị của Nguyễn Ái Quốc tại Quảng Châu, vạch ra con đường cứu nước đúng đắn.",
    content: `Tác phẩm "Đường kách mệnh" được xuất bản lần đầu tiên vào năm 1927 tại Quảng Châu dưới sự chỉ đạo của Nguyễn Ái Quốc. Đây là tập hợp các bài giảng chính trị của ông dành cho các học viên lớp huấn luyện cán bộ của Việt Nam Thanh niên Cách mạng Đồng chí Hội.

Mở đầu cuốn sách, Nguyễn Ái Quốc đã xác định rõ mục đích của cuốn sách: "Sách này chỉ nói những điều cần thiết nhất của người kách mệnh phải biết và phải thực hành." Ông chỉ rõ đạo đức cách mạng cần có của một người chiến sĩ là cần kiệm, chí công vô tư, giữ lòng kiên định. Đồng thời, tác phẩm đưa ra những phân tích sâu sắc về các cuộc cách mạng trên thế giới như Cách mạng Pháp, Cách mạng Mỹ và đặc biệt đề cao cuộc Cách mạng tháng Mười Nga vì đó là cuộc cách mạng triệt để, giải phóng hoàn toàn giai cấp bị áp bức.

"Đường kách mệnh" chính là kim chỉ nam vạch ra đường lối cách mạng đúng đắn cho cách mạng Việt Nam, chuẩn bị đầy đủ về mặt lý luận và tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam vào năm 1930. Cuốn sách đã được công nhận là Bảo vật quốc gia của Việt Nam.`,
    author: "Nguyễn Ái Quốc",
    date: "1927-01-01",
    readTime: "4 phút",
    tags: ["Tác phẩm", "Lý luận", "Lịch sử"],
    isImportant: true,
    imageUrl: "https://placehold.co/800x400/18110e/c48c14?text=Duong+Kach+Menh",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    category: "work"
  },
  {
    id: "di-chuc-ho-chi-minh",
    title: "Di chúc Hồ Chí Minh (1965 – 1969)",
    excerpt: "Bản di chúc thiêng liêng kết tinh những tư tưởng, tình cảm và tâm nguyện sâu sắc của Chủ tịch Hồ Chí Minh dành cho Đảng và nhân dân.",
    content: `Được khởi thảo từ năm 1965 và bổ sung, hoàn thiện qua các năm cho đến năm 1969, bản Di chúc của Chủ tịch Hồ Chí Minh là một văn kiện lịch sử vô giá, chứa đựng những dặn dò ân cần và sâu sắc cuối đời của người cha già dân tộc.

Trong Di chúc, điều đầu tiên Bác dặn dò là về Đảng: "Trước hết nói về Đảng - Nhờ đoàn kết chặt chẽ, một lòng một dạ phục vụ giai cấp, phục vụ nhân dân, phục vụ Tổ quốc... Đoàn kết là một truyền thống cực kỳ quý báu của Đảng và của dân ta." Bác yêu cầu mỗi đảng viên phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư, phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình.

Bác cũng dành sự quan tâm đặc biệt đến nhân dân lao động, thanh niên, và việc tái thiết đất nước sau chiến tranh. Cuối cùng, Bác gửi lời chào và tình yêu thương vô hạn: "Cuối cùng, tôi để lại muôn vàn tình thân yêu cho toàn dân, toàn Đảng, cho toàn thể bộ đội, cho các cháu thanh niên và nhi đồng." Bản di chúc không chỉ có ý nghĩa lịch sử sâu sắc mà còn định hướng cho sự phát triển của đất nước trên con đường hòa bình, độc lập và tiến bộ xã hội.`,
    author: "Hồ Chí Minh",
    date: "1969-09-02",
    readTime: "6 phút",
    tags: ["Tác phẩm", "Tâm nguyện", "Đảng viên"],
    isImportant: true,
    imageUrl: "https://placehold.co/800x400/18110e/c48c14?text=Di+Chuc",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    category: "work"
  },
  {
    id: "ban-an-thuc-dan",
    title: "Bản án chế độ thực dân Pháp (1925)",
    excerpt: "Tác phẩm viết bằng tiếng Pháp, có vai trò rất lớn trong việc tố cáo tội ác của thực dân Pháp với thế giới.",
    content: `Được xuất bản lần đầu tiên tại Paris bằng tiếng Pháp, "Bản án chế độ thực dân Pháp" (Le Procès de la colonisation française) là một bản cáo trạng đanh thép tố cáo những tội ác dã man, tàn bạo của chủ nghĩa thực dân Pháp đối với nhân dân các nước thuộc địa, đặc biệt là ở Đông Dương. Tác phẩm đã thức tỉnh lương tri của nhân dân thế giới và thúc đẩy phong trào đấu tranh giải phóng dân tộc của các nước bị áp bức.`,
    author: "Nguyễn Ái Quốc",
    date: "1925",
    readTime: "3 phút",
    tags: ["Tác phẩm", "Chính trị", "Phê phán"],
    isImportant: false,
    imageUrl: "https://placehold.co/800x400/18110e/c48c14?text=Ban+An+CD+Thuc+Dan",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    category: "work"
  },
  {
    id: "loi-keu-goi",
    title: "Lời kêu gọi toàn quốc kháng chiến (1946)",
    excerpt: "Văn kiện mang tính bước ngoặt, thôi thúc toàn thể dân tộc đứng lên đánh đuổi thực dân Pháp, bảo vệ nền độc lập.",
    content: `Ngày 19/12/1946, trước sự bội ước và dã tâm xâm lược nước ta một lần nữa của thực dân Pháp, Chủ tịch Hồ Chí Minh đã ra Lời kêu gọi toàn quốc kháng chiến. Câu nói bất hủ "Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ" đã trở thành lời hiệu triệu linh thiêng, khơi dậy tinh thần yêu nước mãnh liệt của toàn thể dân tộc Việt Nam, mở đầu cho cuộc kháng chiến trường kỳ gian khổ nhưng tất thắng.`,
    author: "Hồ Chí Minh",
    date: "1946-12-19",
    readTime: "2 phút",
    tags: ["Tác phẩm", "Văn kiện", "Lịch sử"],
    isImportant: false,
    imageUrl: "https://placehold.co/800x400/18110e/c48c14?text=Loi+Keu+Goi",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    category: "work"
  },
  {
    id: "nhat-ky-trong-tu",
    title: "Nhật ký trong tù (1942-1943)",
    excerpt: "Tập thơ chữ Hán bất hủ được sáng tác trong những tháng ngày bị giam giữ oan uổng tại Trung Quốc, thể hiện tinh thần lạc quan phi thường.",
    content: `Trong khoảng thời gian từ tháng 8/1942 đến tháng 9/1943, khi sang Trung Quốc để liên lạc cách mạng, Chủ tịch Hồ Chí Minh đã bị chính quyền Tưởng Giới Thạch bắt giam vô cớ và giải qua hơn 30 nhà giam của 13 huyện thuộc tỉnh Quảng Tây. Trong hoàn cảnh xiềng xích cực khổ đó, Người đã viết tập thơ chữ Hán nổi tiếng "Nhật ký trong tù" (Ngục trung nhật ký).

Tập thơ gồm 133 bài thơ tứ tuyệt, phản ánh một cách chân thực chế độ nhà tù tàn nhẫn thời bấy giờ, đồng thời phác họa bức chân dung tinh thần tự họa của người chiến sĩ cách mạng. Mặc dù bị giam cầm về thể xác, tinh thần của Hồ Chí Minh vẫn hoàn toàn tự do và tràn đầy lạc quan: "Thân thể ở trong lao / Tinh thần ở ngoài lao / Muốn nên sự nghiệp lớn / Tinh thần càng phải cao."

Nhiều bài thơ như "Ngắm trăng" (Vọng nguyệt), "Chiều tối" (Mộ), "Mới ra tù tập leo núi" thể hiện tình yêu thiên nhiên mãnh liệt và phong thái ung dung tự tại của Người. Tập thơ đã được dịch ra nhiều thứ tiếng trên thế giới, được các nhà phê bình văn học đánh giá cao về giá trị nghệ thuật chữ Hán và giá trị nhân văn cao cả.`,
    author: "Hồ Chí Minh",
    date: "1943-09-10",
    readTime: "5 phút",
    tags: ["Tác phẩm", "Thơ ca", "Nghệ thuật"],
    isImportant: true,
    imageUrl: "https://placehold.co/800x400/18110e/c48c14?text=Nhat+Ky+Trong+Tu",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    category: "work"
  },
  {
    id: "tho-ca-truyen-ngan",
    title: "Tuyển tập truyện ngắn và kịch báo chí",
    excerpt: "Các tác phẩm viết trên báo tại Pháp nhằm đả kích chính quyền thực dân và tay sai như kịch 'Con rồng tre' hay truyện ngắn 'Vi hành'.",
    content: `Ngoài các tác phẩm lý luận chính trị, Hồ Chí Minh còn là một ngòi bút sắc sảo trong mảng văn học châm biếm. Trong thời gian hoạt động tại Pháp, Người đã viết nhiều truyện ngắn và kịch đăng trên các báo "Nhân đạo" (L'Humanité) và "Người cùng khổ" (Le Paria) để đả kích chính quyền thực dân và phong kiến tay sai. Các tác phẩm tiêu biểu như vở kịch "Con rồng tre" (1922), truyện ngắn "Pari" (1922), "Vi hành" (1923), và "Những trò lố hay là Va-ren và Phan Bội Châu" (1925) đã thể hiện ngòi bút trào phúng thông minh và sắc bén của Người.`,
    author: "Nguyễn Ái Quốc",
    date: "1922-1925",
    readTime: "4 phút",
    tags: ["Tác phẩm", "Truyện ngắn", "Kịch"],
    isImportant: false,
    imageUrl: "https://placehold.co/800x400/18110e/c48c14?text=Truyen+Ngan",
    referenceLinks: [
      { title: "Nguồn tham khảo Wikipedia", url: "https://vi.wikipedia.org/wiki/Hồ_Chí_Minh" },
      { title: "Tài liệu lưu trữ quốc gia", url: "#" }
    ],
    category: "work"
  }
];
