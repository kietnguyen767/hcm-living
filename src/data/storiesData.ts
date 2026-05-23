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
  tags: string[];
}

export const stories: Story[] = [
  {
    id: "tuyen-ngon-doc-lap",
    title: "Tuyên ngôn Độc lập (1945): Khai sinh nước Việt Nam mới",
    excerpt: "Tác phẩm chính trị - pháp lý mang tính bước ngoặt vĩ đại nhất lịch sử hiện đại Việt Nam, tuyên bố chấm dứt hơn 80 năm ách thống trị thực dân.",
    content: `Chiều ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình lịch sử, trước hàng vạn đồng bào, Chủ tịch Hồ Chí Minh đã long trọng đọc bản Tuyên ngôn Độc lập khai sinh ra nước Việt Nam Dân chủ Cộng hòa. 

Bản Tuyên ngôn bắt đầu bằng những chân lý bất hủ trích từ Tuyên ngôn Độc lập năm 1776 của Mỹ và Tuyên ngôn Nhân quyền và Dân quyền năm 1791 của Pháp: "Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được; trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc." Từ quyền con người, Hồ Chí Minh đã khái quát hóa một cách tài tình thành quyền dân tộc: "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do."

Bản Tuyên ngôn không chỉ là một văn kiện pháp lý đanh thép lên án tội ác của thực dân Pháp và phát xít Nhật đối với nhân dân ta, mà còn là lời công bố đầy tự hào về chủ quyền dân tộc: "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy." Văn kiện này được giới chuyên môn đánh giá sánh ngang với các bản tuyên ngôn vĩ đại trong lịch sử Việt Nam như Nam quốc sơn hà và Bình Ngô đại cáo.`,
    author: "Hồ Chí Minh",
    date: "1945-09-02",
    readTime: "5 phút",
    tags: ["Chính trị", "Tuyên ngôn", "Thành tựu vĩ đại"]
  },
  {
    id: "duong-kach-menh",
    title: "Đường kách mệnh (1927): Kim chỉ nam cho cách mạng Việt Nam",
    excerpt: "Tác phẩm lý luận nền tảng, tập hợp các bài giảng chính trị của Nguyễn Ái Quốc tại Quảng Châu, vạch ra con đường cứu nước đúng đắn.",
    content: `Tác phẩm "Đường kách mệnh" được xuất bản lần đầu tiên vào năm 1927 tại Quảng Châu dưới sự chỉ đạo của Nguyễn Ái Quốc. Đây là tập hợp các bài giảng chính trị của ông dành cho các học viên lớp huấn luyện cán bộ của Việt Nam Thanh niên Cách mạng Đồng chí Hội.

Mở đầu cuốn sách, Nguyễn Ái Quốc đã xác định rõ mục đích của cuốn sách: "Sách này chỉ nói những điều cần thiết nhất của người kách mệnh phải biết và phải thực hành." Ông chỉ rõ đạo đức cách mạng cần có của một người chiến sĩ là cần kiệm, chí công vô tư, giữ lòng kiên định. Đồng thời, tác phẩm đưa ra những phân tích sâu sắc về các cuộc cách mạng trên thế giới như Cách mạng Pháp, Cách mạng Mỹ và đặc biệt đề cao cuộc Cách mạng tháng Mười Nga vì đó là cuộc cách mạng triệt để, giải phóng hoàn toàn giai cấp bị áp bức.

"Đường kách mệnh" chính là kim chỉ nam vạch ra đường lối cách mạng đúng đắn cho cách mạng Việt Nam, chuẩn bị đầy đủ về mặt lý luận và tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam vào năm 1930. Cuốn sách đã được công nhận là Bảo vật quốc gia của Việt Nam.`,
    author: "Nguyễn Ái Quốc",
    date: "1927-01-01",
    readTime: "4 phút",
    tags: ["Lý luận", "Lịch sử", "Đạo đức cách mạng"]
  },
  {
    id: "di-chuc-ho-chi-minh",
    title: "Di chúc Hồ Chí Minh (1965 – 1969): Tâm nguyện cuối đời của Bác",
    excerpt: "Bản di chúc thiêng liêng kết tinh những tư tưởng, tình cảm và tâm nguyện sâu sắc của Chủ tịch Hồ Chí Minh dành cho Đảng và nhân dân.",
    content: `Được khởi thảo từ năm 1965 và bổ sung, hoàn thiện qua các năm cho đến năm 1969, bản Di chúc của Chủ tịch Hồ Chí Minh là một văn kiện lịch sử vô giá, chứa đựng những dặn dò ân cần và sâu sắc cuối đời của người cha già dân tộc.

Trong Di chúc, điều đầu tiên Bác dặn dò là về Đảng: "Trước hết nói về Đảng - Nhờ đoàn kết chặt chẽ, một lòng một dạ phục vụ giai cấp, phục vụ nhân dân, phục vụ Tổ quốc... Đoàn kết là một truyền thống cực kỳ quý báu của Đảng và của dân ta." Bác yêu cầu mỗi đảng viên phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư, phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình.

Bác cũng dành sự quan tâm đặc biệt đến nhân dân lao động, thanh niên, và việc tái thiết đất nước sau chiến tranh. Cuối cùng, Bác gửi lời chào và tình yêu thương vô hạn: "Cuối cùng, tôi để lại muôn vàn tình thân yêu cho toàn dân, toàn Đảng, cho toàn thể bộ đội, cho các cháu thanh niên và nhi đồng." Bản di chúc không chỉ có ý nghĩa lịch sử sâu sắc mà còn định hướng cho sự phát triển của đất nước trên con đường hòa bình, độc lập và tiến bộ xã hội.`,
    author: "Hồ Chí Minh",
    date: "1969-09-02",
    readTime: "6 phút",
    tags: ["Tâm nguyện", "Đảng viên", "Di sản tinh thần"]
  },
  {
    id: "nhat-ky-trong-tu",
    title: "Nhật ký trong tù: Ý chí sắt đá và tâm hồn người chiến sĩ",
    excerpt: "Tập thơ chữ Hán bất hủ được sáng tác trong những tháng ngày bị giam giữ oan uổng tại Trung Quốc, thể hiện tinh thần lạc quan phi thường.",
    content: `Trong khoảng thời gian từ tháng 8/1942 đến tháng 9/1943, khi sang Trung Quốc để liên lạc cách mạng, Chủ tịch Hồ Chí Minh đã bị chính quyền Tưởng Giới Thạch bắt giam vô cớ và giải qua hơn 30 nhà giam của 13 huyện thuộc tỉnh Quảng Tây. Trong hoàn cảnh xiềng xích cực khổ đó, Người đã viết tập thơ chữ Hán nổi tiếng "Nhật ký trong tù" (Ngục trung nhật ký).

Tập thơ gồm 133 bài thơ tứ tuyệt, phản ánh một cách chân thực chế độ nhà tù tàn nhẫn thời bấy giờ, đồng thời phác họa bức chân dung tinh thần tự họa của người chiến sĩ cách mạng. Mặc dù bị giam cầm về thể xác, tinh thần của Hồ Chí Minh vẫn hoàn toàn tự do và tràn đầy lạc quan: "Thân thể ở trong lao / Tinh thần ở ngoài lao / Muốn nên sự nghiệp lớn / Tinh thần càng phải cao."

Nhiều bài thơ như "Ngắm trăng" (Vọng nguyệt), "Chiều tối" (Mộ), "Mới ra tù tập leo núi" thể hiện tình yêu thiên nhiên mãnh liệt và phong thái ung dung tự tại của Người. Tập thơ đã được dịch ra nhiều thứ tiếng trên thế giới, được các nhà phê bình văn học đánh giá cao về giá trị nghệ thuật chữ Hán và giá trị nhân văn cao cả.`,
    author: "Hồ Chí Minh",
    date: "1943-09-10",
    readTime: "5 phút",
    tags: ["Thơ ca", "Nghệ thuật", "Nhật ký"]
  }
];
