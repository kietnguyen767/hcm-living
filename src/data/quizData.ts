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
    question: "Hồ Chí Minh yêu cầu: \"phải phát huy hết ..., phải lột cho hết tinh thần dân tộc, để cổ vũ cho đồng bào ta, để giáo dục cho con cháu ta\"",
    options: ["Cốt cách dân tộc","Hồn cốt dân tộc","Văn hóa dân tộc","Truyền thống dân tộc"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q2",
    question: "Khẩu hiệu Tự do - Bình đẳng - Bác Ái ra đời ở đâu?",
    options: ["Đại cách mạng Pháp","Cách mạng Tân Hợi của Tôn Trung Sơn","Cải cách Minh Trị - Nhật Bản","Phong trào Duy Tân của Phan Châu Trinh"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q3",
    question: "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn thắng lợi:",
    options: ["Phải đi theo con đường cách mạng vô sản","Phải đi theo con đường cách mạng Pháp, Mỹ","Phải đi theo con đường cách mạng tháng Mười Nga","Phải đi theo con đường cách mạng của các bậc tiền bối Việt Nam"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q4",
    question: "Kiểm soát quyền lực Nhà nước và phòng, chống tiêu cực trong Nhà nước, được xác định là nội dung nào trong tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân?",
    options: ["Nhà nước dân chủ","Nhà nước pháp quyền","Nhà nước trong sạch, vững mạnh","Xây dựng nhà nước"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q5",
    question: "\"Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì\". Trích dẫn trên đề cập đến nội dung gì trong tư tưởng Hồ Chí Minh?",
    options: ["Độc lập dân tộc gắn liền với chủ nghĩa xã hội","Về sức mạnh của nhân dân, của khối đại đoàn kết dân tộc","Tư tưởng về phát triển kinh tế và văn hoá","Tu dưỡng, rèn luyện đạo đức suốt đời"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q6",
    question: "Chủ tịch Hồ Chí Minh là hiện thân cho tinh thần dân tộc ta, Người đã nói rằng: Cái mà tôi cần nhất trên đời là đồng bào tôi được tự do, \"...\". Chọn đáp án đúng nhất điền vào dấu \"...\" là?",
    options: ["Tổ quốc tôi được độc lập.","Đất nước tôi được thống nhất.","Tổ quốc tôi được bình đẳng.","Đất nước tôi được phát triển"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q7",
    question: "Nội dung nào không đúng với tư tưởng Hồ Chí Minh: để xác định bước đi và tìm cách làm của chủ nghĩa xã hội phù hợp với Việt Nam cần phải thực hiện điều gì?",
    options: ["Theo bước đi của các nước xã hội chủ nghĩa, vừa làm vừa tìm kiếm mô hình phù hợp","Quán triệt dựa trên nền tảng của chủ nghĩa Mác-Lênin về xây dựng chế độ mới, có thể tham khảo, học tập kinh nghiệm của các nước anh em","Xuất phát từ điều kiện thực tế, đặc điểm dân tộc, nhu cầu và khả năng thực tế của nhân dân.","Xây dựng phải đi đôi với chống, lấy xây làm chính để loại trừ các lực cản của chế độ cũ và chủ nghĩa cá nhân"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q8",
    question: "Câu nói \"Đảng là đạo đức, đảng là văn minh\" được chủ tịch Hồ Chí Minh đưa ra ở:",
    options: ["Diễn văn kỷ niệm 30 năm thành lập đảng 1960","Diễn văn khai mạc đại hội đại biểu toàn quốc lần thứ III của Đảng năm 1960","Di chúc - 1969","Diễn văn khai mạc đại hội đại biểu toàn quốc lần thứ II tháng 2 - 1952"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q9",
    question: "Hồ Chí Minh ví tuổi trẻ như điều gì?",
    options: ["Mùa xuân của xã hội","Mùa xuân của tuổi trẻ","Mùa xuân của Đảng","Mùa xuân của gia đình"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q10",
    question: "Nguyên tắc tối cao để đoàn kết rộng rãi trong quần chúng nhân dân là:",
    options: ["Yêu dân, tin dân, dựa vào dân, vì hạnh phúc của nhân dân","Đoàn kết trên cơ sở độc lập tự chủ","Đoàn kết chặt chẽ, chân thành","Đoàn kết trên cơ sở tự nguyện"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q11",
    question: "Câu nói của Hồ Chí Minh \"Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công đại thành công\" đó là cần phải đoàn kết ở đâu?",
    options: ["Đoàn kết trong đảng, đoàn kết dân tộc và đoàn kết quốc tế","Đoàn kết trong đảng, đoàn kết quân đội và đoàn kết dân tộc","Đoàn kết dân tộc, đoàn kết tôn giáo tín ngưỡng và đồng bào ngoài nước","Đoàn kết dân tộc, đoàn kết kiều bào, đoàn kết trong Đảng"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q12",
    question: "Hồ Chí Minh cho rằng:",
    options: ["Sự ra đời của CNXH trên phạm vi quốc tế là quy luật phát triển của lịch sử xã hội","Sự ra đời của CNXH trên phạm vi quốc tế là quy luật phát triển của nhân loại","Sự ra đời của CNXH trên phạm vi quốc tế là quy luật phát triển của lịch sử thế giới"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q13",
    question: "Theo Hồ Chí Minh, chỉ có... mới giải phóng được các dân tộc bị áp bức và giai cấp công nhân toàn thế giới. Từ nào còn thiếu trong câu trên?",
    options: ["Chủ nghĩa xã hội và chủ nghĩa cộng sản","Giai cấp công nhân và giai cấp nông dân","Giai cấp công nhân và nhân dân lao động","Đảng Cộng sản và giai cấp công nhân"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q14",
    question: "Chủ trương \"Ý Pháp cầu tiến bộ\", \"khai dân trí, chấn dân khí, hậu dân sinh\" là đường lối của nhà yêu nước nào?",
    options: ["Phan Châu Trinh","Phan Bội Châu","Hoàng Hoa Thám","Hồ Chí Minh"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q15",
    question: "Hồ Chí Minh đã nêu quan điểm về xây dựng một nền văn hóa mới là:",
    options: ["Xây dựng tâm lý, xây dựng luân lý","Xây dựng tâm lý, xây dựng luân lý, xây dựng xã hội","Xây dựng tâm lý, xây dựng luân lý, xây dựng xã hội, xây dựng chính trị","Xây dựng tâm lý, xây dựng luân lý, xây dựng xã hội, xây dựng chính trị, xây dựng kinh tế"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q16",
    question: "Trong bản Yêu sách của nhân dân An Nam, Hồ Chí Minh nhấn mạnh quốc gia cần phải có một chế độ như thế nào?",
    options: ["Chế độ ra sắc lệnh","Chế độ ra các đạo luật","Chế độ dân chủ","Chế độ công bằng"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q17",
    question: "Theo Hồ Chí Minh, trong thời kỳ quá độ còn tồn tại hình thức:",
    options: ["Sở hữu của nhà nước và sở hữu của hợp tác xã","Sở hữu của người lao động riêng lẻ và sở hữu của nhà tư bản","Tất cả các phương án"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q18",
    question: "Trong mục tiêu về chủ nghĩa xã hội, theo Hồ Chí Minh mục tiêu kinh tế phải gắn bó với:",
    options: ["Mục tiêu văn hóa","Mục tiêu giáo dục","Mục tiêu chính trị","Mục tiêu xã hội"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q19",
    question: "Theo tư tưởng Hồ Chí Minh, con người Việt Nam trong thời đại mới phải có bao nhiêu phẩm chất cơ bản?",
    options: ["3 phẩm chất cơ bản","4 phẩm chất cơ bản","5 phẩm chất cơ bản","6 phẩm chất cơ bản"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q20",
    question: "Trong mối quan hệ giữa văn hóa, kinh tế, chính trị, Hồ Chí Minh coi chế độ chính trị và nền kinh tế có quan hệ như thế nào đến văn hóa?",
    options: ["Nền tảng và quyết định tính chất của văn hóa","Cơ sở và quyết định đến bản chất của văn hóa","Cái quyết định đến văn hóa","Cơ sở phát triển văn hóa"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q21",
    question: "Theo Hồ Chí Minh, để lãnh đạo Mặt trận, Đảng phải đi đúng đường lối quần chúng, không được làm điều gì?",
    options: ["Vận động, giáo dục, thuyết phục, nêu gương, lấy lòng chân thành để đối xử, cảm hóa, khơi gợi tinh thần tự giác, tự nguyện","Quan liêu, mệnh lệnh và gò ép","Lấy quyền uy để thuyết phục mọi người đi theo","Không lắng nghe ý kiến của người ngoài Đảng"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q22",
    question: "Nguyễn Ái Quốc là người Việt Nam thứ mấy tham gia vào Đảng Cộng sản Pháp?",
    options: ["Thứ nhất","Thứ hai","Thứ ba","Thứ tư"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q23",
    question: "Theo Hồ Chí Minh, quy luật ra đời của Đảng Cộng sản Việt Nam có khác biệt gì với chủ nghĩa Mác - Lênin?",
    options: ["Không khác biệt với chủ nghĩa Mác - Lênin","Bổ sung yếu tố phong trào yêu nước","Không có yếu tố phong trào công nhân","Bổ sung thêm học thuyết cách mạng của chủ nghĩa Mác"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q24",
    question: "Nội dung nào không đúng với bản chất giai cấp công nhân của nhà nước theo tư tưởng Hồ Chí Minh?",
    options: ["Nhà nước do Đảng Cộng sản lãnh đạo","Tính định hướng xã hội chủ nghĩa của sự phát triển đất nước","Nguyên tắc tổ chức và hoạt động cơ bản của nó là nguyên tắc tập trung dân chủ","Nhà nước dưới sự lãnh đạo của Quốc hội"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q25",
    question: "Đối với Hồ Chí Minh, dân ta tài năng, trí tuệ và sáng tạo, họ biết \"giải quyết nhiều vấn đề một cách giản đơn, mau chóng, đầy đủ, mà những người tài giỏi, những đoàn thể to lớn.......",
    options: ["nghĩ mãi không ra\".","nghĩ mãi mới ra\".","làm mãi không được\".","làm mãi mới được\"."],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q26",
    question: "Nội dung quá độ lên chủ nghĩa xã hội theo Hồ Chí Minh phải tiến hành như thế nào?",
    options: ["Chủ yếu là lĩnh vực kinh tế","Chủ yếu là lĩnh vực văn hóa","Trên mọi mặt của xã hội","Chủ yếu là lĩnh vực chính trị"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q27",
    question: "Phương thức tiếp cận về chủ nghĩa xã hội của Hồ Chí Minh thiên về hướng nào dưới đây?",
    options: ["Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện kinh tế là chủ yếu","Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện văn hóa là chủ yếu","Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ nhiều góc độ khác nhau","Hồ Chí Minh tiếp cận Chủ nghĩa xã hội từ phương diện chính trị là chủ yếu"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q28",
    question: "Đâu là luận điểm sáng tạo của Hồ Chí Minh về vấn đề lãnh đạo của Đảng?",
    options: ["Lý luận về Đảng Cộng sản cầm quyền","Tư duy của Đảng Cộng sản","Đường lối của Đảng Cộng sản","Đội ngũ lãnh đạo của Đảng Cộng sản"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q29",
    question: "Theo Hồ Chí Minh, để đánh bại các thế lực đế quốc thực dân chỉ có tinh thần yêu nước là chưa đủ, cách mạng muốn đến nơi cần phải tập hợp được tất cả mọi lực lượng có thể tập hợp đồng thời xây dựng được nội dung nào trong các nội dung sau đây?",
    options: ["Khối đại đoàn kết dân tộc bền vững","Chương trình tập hợp lực lượng đoàn kết rộng rãi","Chính sách dân tộc phù hợp","Đoàn kết quốc tế"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q30",
    question: "Hồ Chí Minh đã lưu ý điều gì trong công tác xây dựng mặt trận?",
    options: ["Khối đoàn kết trong Mặt trận phải xuất phát từ mục tiêu chung","Khối đoàn kết trong Mặt trận phải xuất phát từ mục tiêu cụ thể","Khối đoàn kết trong Mặt trận phải xuất phát từ mục tiêu cơ bản","Khối đoàn kết trong Mặt trận phải xuất phát từ mục tiêu của giai cấp cầm quyền"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q31",
    question: "Hồ Chí Minh khẳng định \"Không có gì quý hơn độc lập, tự do\" khi đất nước đang tiến hành chiến tranh chống thế lực nào?",
    options: ["Thực dân Pháp","Phát xít Nhật","Đế quốc Mỹ","Phong kiến"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q32",
    question: "Đâu là nội dung tư tưởng của Hồ Chí Minh?",
    options: ["Giữ vững độc lập của dân tộc mình đồng thời tôn trọng độc lập của các dân tộc khác","Giữ vững độc lập của dân tộc mình đồng thời kính trọng độc lập của các dân tộc khác","Giữ vững độc lập của dân tộc mình đồng thời tôn trọng độc lập của các quốc gia","Giữ vững độc lập của dân tộc mình nhưng phải phụ thuộc vào thắng lợi của cách mạng vô sản ở chính quốc"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q33",
    question: "Hồ Chí Minh cho rằng cách mạng giải phóng dân tộc cần tiến hành bởi con đường nào?",
    options: ["Con đường cách mạng bất bạo động","Con đường cách mạng bạo lực","Con đường cách mạng ôn hòa","Con đường đấu tranh dân chủ"],
    correctAnswer: 1,
    explanation: "Ghi chú: tiến hành như thế nào => Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc",
    points: 10
  },
  {
    id: "q34",
    question: "Thực chất của giải phóng giai cấp theo tư tưởng Hồ Chí Minh là gì?",
    options: ["Xóa bỏ các giai cấp bóc lột với tính cách là giai cấp thống trị xã hội","Tiêu diệt cá nhân những con người thuộc các giai cấp bóc lột","Không chủ trương thủ tiêu giai cấp bóc lột thống trị xã hội","Xóa bỏ triệt tiêu các giai cấp thuộc về xã hội cũ"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q35",
    question: "Hồ Chí Minh vạch ra mâu thuẫn cơ bản của cách mạng dân tộc thuộc địa là gì?",
    options: ["Nhân dân với thực dân, phong kiến","Nhân dân với thực dân, địa chủ","Nhân dân với thực dân, đế quốc","Nhân dân với phong kiến, địa chủ"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q36",
    question: "Theo Hồ Chí Minh, tính chất và nhiệm vụ hàng đầu của cách mạng ở thuộc địa là gì?",
    options: ["Giải phóng dân tộc","Giải phóng thế giới","Giải phóng nhân loại","Giải phóng giai cấp"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q37",
    question: "Khẩu hiệu chiến lược: \"Vô sản toàn thế giới và các dân tộc bị áp bức, đoàn kết lại\" là của ai?",
    options: ["C. Mác","Ph. Ăngghen","V.I.Lênin","Hồ Chí Minh"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q38",
    question: "Vì sao Hồ Chí Minh lại khẳng định: đại đoàn kết toàn dân tộc phải được xác định là nhiệm vụ hàng đầu của Đảng?",
    options: ["Vì đại đoàn kết toàn dân tộc không chỉ là khẩu hiệu chiến lược, mà còn là mục đích của cách mạng cần phải được quán triệt trong tất cả mọi lĩnh vực, từ đường lối, chủ trương, chính sách tới hoạt động thực tiễn của Đảng","Vì Đảng là lực lượng vận động, thuyết phục và hướng dẫn quần chúng nhân dân","Vì Đảng là lực lượng lãnh đạo cách mạng Việt Nam","Vì Đảng là lực lượng giáo dục, giác ngộ quần chúng nhân dân và liên lạc với vô sản các nước"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q39",
    question: "Theo Hồ Chí Minh, là người đày tớ của dân không có nghĩa là \"tôi tớ, tôi đòi hay theo đuôi quần chúng\" mà cần phải làm gì?",
    options: ["Hiểu và đánh giá đúng nhân dân nhằm đem lại các quyền và lợi ích cho nhân dân","Tận tâm, tận lực phụng sự nhân dân nhằm đem lại các quyền và lợi ích cho nhân dân","Phụng sự nhân dân và ra sức phấn đấu trở thành quan cách mạng","Đảm bảo mọi nguyện vọng của nhân dân được lắng nghe và đáp ứng"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q40",
    question: "Theo tư tưởng Hồ Chí Minh, Đảng Cộng sản là nhân tố quyết định hàng đầu để đưa cách mạng Việt Nam đi đến thắng lợi, luận điểm trên phản ánh điều gì?",
    options: ["Xác định vị thế cầm quyền của Đảng","Xác định vai trò lãnh đạo của Đảng","Xác định mục đích của Đảng","Xác định nhiệm vụ của Đảng"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q41",
    question: "Đâu là nội dung trong tư tưởng Hồ Chí Minh?",
    options: ["Đại đoàn kết dân tộc là truyền thống quý báu của dân tộc ta.","Đoàn kết dân tộc là cốt lõi của truyền thống dân tộc.","Đại đoàn toàn dân là cốt lõi của chủ nghĩa yêu nước.","Đoàn kết toàn dân tộc chỉ là nhiệm vụ sách lược, nhất thời."],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q42",
    question: "Trong tư tưởng Hồ Chí Minh về cách mạng Việt Nam được xem là gì?",
    options: ["Hệ thống các quan điểm cụ thể về cách mạng Việt Nam","Một nhóm các quan điểm cụ thể về cách mạng Việt Nam","Một hệ thống các học thuyết về cách mạng Việt Nam","Một hệ thống quan điểm toàn diện và sâu sắc về cách mạng Việt Nam"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q43",
    question: "Theo Hồ Chí Minh, tham ô, lãng phí được ví như giặc gì?",
    options: ["Ngoại xâm","Nội xâm","Mỹ","Giặc dốt"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q44",
    question: "Đâu là quan điểm đúng với tư tưởng Hồ Chí Minh về người cách mạng: Hồ Chí Minh cho rằng đạo đức có vai trò thế nào?",
    options: ["Đạo đức là gốc của người cách mạng","Đạo đức là gốc của người xã hội","Đạo đức là gốc của người công chúng","Đạo đức là gốc của người lãnh đạo"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q45",
    question: "Luận điểm \"Đoàn kết, đoàn kết, đại đoàn kết; Thành công, thành công, đại thành công\" của Chủ tịch Hồ Chí Minh được trích từ tác phẩm nào?",
    options: ["Bài nói chuyện tại trong buổi Bế mạc Đại hội thành lập Mặt trận Tổ Quốc Việt Nam","Bài nói chuyện tại Hội nghị mở rộng Ủy ban Mặt trận Tổ quốc Việt Nam","Bài nói chuyện tại Đại hội đại biểu Mặt trận Tổ Quốc Việt Nam lần thứ II","Buổi nói chuyện với cán bộ, chiến sĩ Đại đoàn Quân Tiên Phong"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q46",
    question: "Quan điểm nào dưới đây là phương thức tiếp cận về chủ nghĩa xã hội của Hồ Chí Minh?",
    options: ["Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện đạo đức. Chủ nghĩa xã hội là đối lập với chủ nghĩa cá nhân.","Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện đạo đức. Chủ nghĩa xã hội là đối lập với chủ nghĩa nhân văn.","Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện đạo đức. Chủ nghĩa xã hội là đối lập với chủ nghĩa vi lợi.","Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện đạo đức. Chủ nghĩa xã hội là đối lập với chủ nghĩa vị kỷ."],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q47",
    question: "Theo tư tưởng Hồ Chí Minh thì đoàn kết trước hết là phải đoàn kết như thế nào?",
    options: ["Toàn dân","Toàn quân","Toàn Đảng","Toàn giai cấp"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q48",
    question: "Nguyên tắc chung của Mặt trận dân tộc thống nhất được Hồ Chí Minh xác định cụ thể phù hợp là gì?",
    options: ["Đoàn kết chặt chẽ, lâu dài, thật sự, chân thành","Chống chiến tranh xâm lược","Độc lập, tự do","Độc lập, bình đẳng"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q49",
    question: "Trong thời gian ở nước ngoài, Nguyễn Tất Thành đã làm những công việc gì?",
    options: ["Đốt lò, bán báo","Thợ ảnh, làm bánh","Phụ bếp, cào tuyết","Tất cả các công việc"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q50",
    question: "Theo Hồ Chí Minh, trong quá trình hoạt động, Đảng ta phải chú ý học tập, kế thừa những kinh nghiệm tốt của các đảng cộng sản khác, đồng thời Đảng ta phải tổng kết kinh nghiệm của mình để làm gì?",
    options: ["Bổ sung lý luận về Đảng Cộng sản cầm quyền","Bổ sung tư duy của Đảng Cộng sản","Bổ sung đường lối của Đảng Cộng sản","Bổ sung chủ nghĩa Mác - Lênin"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q51",
    question: "Con đường cứu nước của Hồ Chí Minh là gì?",
    options: ["Độc lập dân tộc gắn liền với chủ nghĩa xã hội","Giải phóng dân tộc gắn liền với chủ nghĩa xã hội","Giải phóng dân tộc gắn với chủ nghĩa dân tộc","Độc lập dân tộc gắn liền với chế độ dân chủ"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q52",
    question: "Hồ Chí Minh vạch ra mục tiêu của cách mạng giải phóng dân tộc thuộc địa là:",
    options: ["Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền của nhân dân","Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền về tay người lao động","Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền về tay lực lượng cách mạng","Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền của công nông"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q53",
    question: "Hồ Chí Minh cho rằng sự ra đời của chủ nghĩa xã hội ở Việt Nam có ý nghĩa như thế nào?",
    options: ["Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng Việt Nam.","Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng thế giới","Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng Đông Nam Á.","Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng Châu Á"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q54",
    question: "Hồ Chí Minh cho rằng giải phóng dân tộc phải gắn liền với:",
    options: ["Độc lập, tự do và hạnh phúc","Dân quyền và tự do","Nhân sinh và hạnh phúc"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q55",
    question: "Theo Hồ Chí Minh, mục tiêu kinh tế của thời kỳ quá độ lên CNXH là:",
    options: ["Công, lâm nghiệp hiện đại, khoa học - kỹ thuật tiên tiến, bóc lột được bỏ dần, vật chất được cải thiện","Công, ngư nghiệp hiện đại, khoa học - kỹ thuật tiên tiến, bóc lột được bỏ dần, vật chất được cải thiện","Công, nông nghiệp hiện đại, khoa học - kỹ thuật tiên tiến, bóc lột được bỏ dần, vật chất được cải thiện"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q56",
    question: "Đâu là sự sáng tạo của Hồ Chí Minh về Chủ nghĩa xã hội ở Việt Nam?",
    options: ["Sáng tạo trong cách thức đi lên xây dựng chủ nghĩa xã hội","Phương pháp bạo lực cách mạng","Lựa chọn con đường đi lên xây dựng chủ nghĩa xã hội","Phân tích đúng tình hình nước ta"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q57",
    question: "Đâu là câu trả lời chính xác nhất trong tư tưởng Hồ Chí Minh về vấn đề dân tộc?",
    options: ["Vấn đề dân tộc và vấn đề giai cấp là quan hệ chính trị","Vấn đề dân tộc và vấn đề giai cấp là quan hệ kinh tế","Vấn đề dân tộc và vấn đề giai cấp là quan hệ thể hiện trong mọi mặt của xã hội","Vấn đề dân tộc và vấn đề giai cấp là quan hệ văn hoá"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q58",
    question: "Trong tư tưởng Hồ Chí Minh, nền tảng của khối đại đoàn kết dân tộc là:",
    options: ["Liên minh công-nông","Liên minh công-nông, lao động trí óc","Liên minh công-nông và các tầng lớp lao động khác","Liên minh công-nông và các lực lượng yêu nước khác"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q59",
    question: "Luận điểm \"Công cuộc giải phóng anh em chỉ có thể thực hiện bằng sự nỗ lực của bản thân anh em\" là của:",
    options: ["C. Mác","Ph. Ăngghen","V.I.Lênin","Hồ Chí Minh"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q60",
    question: "Ngoại ngữ nào sau đây được Hồ Chí Minh sử dụng trong thời gian học tập ở trường Quốc học Huế?",
    options: ["Tiếng Anh","Tiếng Pháp","Tiếng Trung","Tiếng Nga"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q61",
    question: "Nguyễn Ái Quốc đến Liên Xô lần đầu tiên học tại trường nào?",
    options: ["Đại học Liên Xô","Đại học Phương Đông","Trường quốc tế Lênin","Viện nghiên cứu các vấn đề dân tộc và thuộc địa"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q62",
    question: "Báo Le Paria (Người Cùng khổ) do Nguyễn Ái Quốc đồng sáng lập, ra số đầu tiên khi nào?",
    options: ["30/12/1920","1/4/1921","1/4/1922","1/4/1923"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q63",
    question: "Theo tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam vừa là người lãnh đạo, vừa là người đầy tớ trung thành của nhân dân, Đảng phải chăm lo mối quan hệ giữa Đảng với dân là nhằm mục đích gì?",
    options: ["Xác định vị thế cầm quyền của Đảng","Xác định phương thức cầm quyền của Đảng","Xác định năng lực cầm quyền của Đảng","Xác định tính chất cầm quyền của Đảng"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q64",
    question: "Đề cập đến vấn đề dân tộc thuộc địa, khác với Mác và Lênin, Hồ Chí Minh bàn nhiều về cuộc đấu tranh nào:",
    options: ["Chống chủ nghĩa phát xít, giải phóng giai cấp","Chống địa chủ phong kiến, giải phóng cho nông dân","Chống chủ nghĩa thực dân, đấu tranh giải phóng dân tộc ở thuộc địa","Chống chủ nghĩa tư bản, giải phóng cho giai cấp"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q65",
    question: "Đâu là quan điểm của Hồ Chí Minh về văn hoá?",
    options: ["Theo Hồ Chí Minh, văn hoá không thụ động, ngồi chờ cho kinh tế phát triển. Phát triển văn hoá tạo điều kiện thúc đẩy phát triển kinh tế","Theo Hồ Chí Minh, văn hoá không thụ động, ngồi chờ cho kinh tế phát triển. Phát triển văn hoá tạo điều kiện thúc đẩy phát triển xã hội","Theo Hồ Chí Minh, văn hoá không thụ động, ngồi chờ cho kinh tế phát triển. Phát triển văn hoá tạo điều kiện thúc đẩy phát triển chính trị","Theo Hồ Chí Minh, văn hoá không thụ động, ngồi chờ cho kinh tế phát triển. Phát triển văn hoá tạo điều kiện thúc đẩy phát triển thiết chế pháp luật"],
    correctAnswer: 0,
    explanation: "Chi mới fix",
    points: 10
  },
  {
    id: "q66",
    question: "Hồ Chí Minh cho rằng thầy giáo, cô giáo trong chế độ ta cần góp phần vào công cuộc nào?",
    options: ["Công cuộc xây dựng CNXH","Công cuộc kháng chiến chống Mỹ cứu nước","Công cuộc xây dựng xã hội mới","Kháng chiến chống Pháp"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q67",
    question: "Hồ Chí Minh ví chủ nghĩa dân tộc như điều gì?",
    options: ["Mùa xuân của xã hội","Động lực lớn của đất nước","Nền tảng tư tưởng của Đảng","Mục tiêu cần phải gạt bỏ"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q68",
    question: "Theo Hồ Chí Minh, hòa bình là phương pháp cách mạng:",
    options: ["Không hiệu quả","Rất nhân văn","Không cần thiết"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q69",
    question: "Chọn phương án đúng nhất theo tư tưởng Hồ Chí Minh: Chủ nghĩa thực dân là kẻ thù của ai?",
    options: ["Các dân tộc thuộc địa","Giai cấp công nhân","Giai cấp nông dân","Các dân tộc thuộc địa, giai cấp công nhân và nhân dân lao động toàn thế giới"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q70",
    question: "Đâu không phải là một ý nghĩa của giải phóng dân tộc theo Hồ Chí Minh?",
    options: ["Đánh đổ ách áp bức, thống trị của đế quốc, thực dân giành độc lập dân tộc","Giành độc lập dân tộc, hình thành nhà nước dân tộc độc lập","Tự do lựa chọn con đường phát triển của dân tộc phù hợp với xu thế phát triển của thời đại","Giành ruộng đất về cho nông dân, đảm bảo quyền thống trị của công nông trong chính quyền"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q71",
    question: "Theo Hồ Chí Minh, nguyên tắc hiệp thương dân chủ đòi hỏi tất cả mọi vấn đề của Mặt trận đều phải được đem ra cho tất cả các thành viên cùng nhau bàn bạc công khai, để đi đến nhất trí, loại trừ mọi sự áp đặt hay còn vấn đề nào khác nữa?",
    options: ["Dân chủ hình thức","Dân chủ tự nguyện","Chuyên quyền độc đoán","Không dân chủ"],
    correctAnswer: 0,
    explanation: "Nguyên tắc xây dựng mặt trận => hiệp thương dân chủ",
    points: 10
  },
  {
    id: "q72",
    question: "Điều kiện thực hiện khối đại đoàn kết từ tư tưởng Hồ Chí Minh về khối đại đoàn kết dân tộc?",
    options: ["Truyền thống yêu thiên nhiên","Truyền thống yêu con người","Truyền thống yêu nước, nhân ái, tinh thần cố kết cộng đồng","Truyền thống yêu hòa bình"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q73",
    question: "Đối với Hồ Chí Minh, toàn dân tộc chỉ trở thành lực lượng to lớn, có sức mạnh vô địch khi được tập hợp, tổ chức lại thành một khối vững chắc, được giác ngộ về mục tiêu chiến đấu chung và hoạt động theo:",
    options: ["Một Đảng chính trị đúng đắn","Một đường lối chính trị đúng đắn","Một tổ chức chính trị đúng đắn"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q74",
    question: "Hồ Chí Minh cho rằng công tác cán bộ cần chú ý:",
    options: ["Hiểu và đánh giá đúng đảng viên","Hiểu và đánh giá đúng cán bộ","Hiểu và đánh giá đúng quần chúng"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q75",
    question: "Năm 1946 Hồ Chí Minh ví chính sách đối với Pháp sau khi giành độc lập như chính sách gì?",
    options: ["Tạm hòa","Câu Tiễn","Tạm thời","Thân thiện và hòa bình"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q76",
    question: "Mục đích chính để Hồ Chí Minh muốn ra nước ngoài là gì?",
    options: ["Xem nước Pháp và các nước khác làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta","Xem nước Pháp và các nước khác dân chủ như thế nào, tôi sẽ trở về giúp đồng bào chúng ta","Xem nước Pháp và các nước khác văn minh như thế nào, tôi sẽ trở về giúp đồng bào chúng ta","Xem nước Pháp và các nước khác tiến bộ như thế nào, tôi sẽ trở về giúp đồng bào chúng ta"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q77",
    question: "Giai đoạn nào sau đây Hồ Chí Minh bổ sung và hoàn thiện tư tưởng của mình?",
    options: ["1911 đến 1920","1930 đến 1969","1941 đến 1969","1921 đến 1930"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q78",
    question: "Theo Hồ Chí Minh, ưu điểm lớn nhất của chủ nghĩa Tam dân của Tôn Trung Sơn là gì?",
    options: ["Chống phong kiến","Đấu tranh vì tự do, dân chủ","Phù hợp với điều kiện thực tế nước ta","Phù hợp với truyền thống"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q79",
    question: "Theo Hồ Chí Minh, những tiêu cực của đội ngũ cán bộ trong hoạt động của bộ máy nhà nước là:",
    options: ["Đặc quyền, đặc lợi","Tham ô, lãng phí, quan liêu","Tư túng, chia rẽ, kiêu ngạo","Tất cả các phương án"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q80",
    question: "Chọn phương án trả lời đúng nhất theo tư tưởng Hồ Chí Minh về bản chất của nhà nước Việt Nam?",
    options: ["Mang bản chất giai cấp công nhân","Có tính dân tộc, tính nhân dân sâu sắc","Có sự thống nhất bản chất giai cấp công nhân với tính nhân dân và tính dân tộc","Mang tính dân tộc"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q81",
    question: "Theo quan điểm của Đảng Cộng sản Việt Nam tại Đại hội đại biểu toàn quốc lần thứ XI, tư tưởng Hồ Chí Minh là kết quả của sự vận dụng và kế thừa giá trị nào?",
    options: ["Sự vận dụng sáng tạo chủ nghĩa Mác - Lênin trong điều kiện cụ thể của nước ta","Sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta","Sự vận dụng sáng tạo và phát triển chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta","Sự phát triển chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q82",
    question: "Đâu là đáp án chính xác nhất về Đảng theo tư tưởng Hồ Chí Minh?",
    options: ["Một Đảng mà giấu giếm khuyết điểm của mình là một đảng hỏng","Một Đảng mà giấu giếm khuyết điểm của mình là một đảng cần phải xóa bỏ","Một Đảng mà giấu giếm khuyết điểm của mình là một đảng cần phải thay thế","Một Đảng mà giấu giếm khuyết điểm của mình là một đảng cần phải thay đổi"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q83",
    question: "Hồ Chí Minh cho rằng:",
    options: ["Văn hoá là tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự sinh tồn","Văn hoá là tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự sống còn","Văn hoá là tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự trường tồn"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q84",
    question: "Theo Hồ Chí Minh, văn hóa phải làm thế nào để thấm sâu vào tâm lý quốc dân?",
    options: ["Sửa đổi tham nhũng, lười biếng, phù hoa, xa xỉ.","Tăng cường giáo dục nghệ thuật cho nhân dân.","Phát triển kinh tế để nâng cao đời sống văn hóa.","Tổ chức nhiều lễ hội văn hóa truyền thống."],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q85",
    question: "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Nền văn hóa xã hội chủ nghĩa là một nền văn hóa lấy ....... của đồng bào làm cơ sở\".",
    options: ["Tự do","Hạnh phúc","Ấm no","Giàu có"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q86",
    question: "Nội dung cốt lõi của tư tưởng Hồ Chí Minh về mối quan hệ giữa độc lập dân tộc và chủ nghĩa xã hội là gì?",
    options: ["Độc lập dân tộc là cơ sở, tiền đề để tiến lên chủ nghĩa xã hội, chủ nghĩa xã hội là điều kiện để bảo đảm nền độc lập dân tộc vững chắc.","Hồ Chí Minh đã chỉ ra độc lập dân tộc là bao gồm cả nội dung dân tộc và dân chủ.","Độc lập dân tộc mà dân vẫn không có cơm ăn, áo mặc, không được học hành thì độc lập đó không có ý nghĩa gì.","Cuộc cách mạng giải phóng dân tộc ở Việt Nam ngay từ đầu đã được Hồ Chí Minh xác định đi theo con đường cách mạng vô sản."],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q87",
    question: "Hồ Chí Minh cho rằng giải phóng dân tộc có vai trò như thế nào?",
    options: ["Giải phóng dân tộc tạo tiền đề để giải phóng giai cấp","Giải phóng dân tộc tạo tiền đề để giải phóng nhân loại","Giải phóng dân tộc tạo tiền đề để giải phóng người lao động","Giải phóng dân tộc tạo tiền đề giải phóng xã hội"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q88",
    question: "Hồ Chí Minh lưu ý Đảng về vấn đề đại đoàn kết toàn dân tộc thông qua luận điểm nào?",
    options: ["Đoàn kết không chỉ nằm ở chủ trương, đường lối, chính sách mà phải biến thành sức mạnh","Đoàn kết không chỉ nằm ở chủ trương, đường lối, chính sách mà phải biến thành tư tưởng","Đoàn kết không chỉ nằm ở chủ trương, đường lối mà phải biến thành chính sách","Đoàn kết không chỉ nằm ở khẩu hiệu, tuyên truyền mà phải là tư duy, tư tưởng"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q89",
    question: "Hồ Chí Minh mất bao nhiêu năm bôn ba nước ngoài để tìm đường cứu nước?",
    options: ["10 năm","25 năm","30 năm","35 năm"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q90",
    question: "Hồ Chí Minh quan tâm mối quan hệ với Trung Quốc trên tinh thần nào?",
    options: ["\"Vừa là đồng chí, vừa là đồng đội\"","\"Vừa là đồng đội, vừa là đồng chí\".","\"Vừa là đồng chí, vừa là anh em\".","Vừa là đồng chí, vừa là tình thân"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q91",
    question: "Nội dung nào không đúng với tư tưởng Hồ Chí Minh trong việc thực thi Hiến pháp và pháp luật?",
    options: ["Pháp luật phải đúng và phải đủ","Tăng cường tuyên truyền, giáo dục pháp luật cho người cao tuổi","Người thực thi luật pháp phải thật sự công tâm và nghiêm minh","Bất kỳ ai vi phạm pháp luật cũng đều bị trừng trị nghiêm khắc, đúng người, đúng tội."],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q92",
    question: "Đối với Hồ Chí Minh, phải biết \"dễ (1...) lần không dân cũng chịu, khó (2....) lần dân liệu cũng xong\". Đâu là từ còn thiếu trong các dấu ...?",
    options: ["1.vạn 2.trăm","1.trăm 2.vạn","1.nghìn 2. triệu","1.triệu 2.nghìn"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q93",
    question: "Đâu là chức năng của văn hóa theo tư tưởng Hồ Chí Minh?",
    options: ["Bồi dưỡng những phẩm chất tốt đẹp và phong cách lành mạnh cho con người","Bồi dưỡng những phẩm chất tốt đẹp và phong cách lành mạnh cho xã hội","Bồi dưỡng những phẩm chất tốt đẹp và phong cách lành mạnh cho nhân dân"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q94",
    question: "Hồ Chí Minh khẳng định: \"Chính vì Đảng Lao động Việt Nam là Đảng của giai cấp công nhân và nhân dân lao động, cho nên nó phải là Đảng của dân tộc Việt Nam\". Luận điểm này được trích trong tác phẩm nào?",
    options: ["Tuyên ngôn độc lập","Lời kêu gọi toàn quốc kháng chiến","Báo cáo chính trị tại Đại hội Đại biểu toàn quốc lần thứ II của Đảng","Đường Cách mệnh"],
    correctAnswer: 2,
    explanation: "Ghi chú: Đảng Lao động Việt Nam là Đảng của ai?",
    points: 10
  },
  {
    id: "q95",
    question: "Tác phẩm Đời sống mới được Hồ Chí Minh công bố năm nào?",
    options: ["1930","1945","1947","1951"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q96",
    question: "Nguyên tắc nào sau đây là nguyên tắc quan trọng bậc nhất trong xây dựng một nền đạo đức mới theo tư tưởng Hồ Chí Minh?",
    options: ["Nói đi đôi với làm","Nêu gương về đạo đức","Xây đi đôi với chống","Tu dưỡng đạo đức suốt đời"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q97",
    question: "Quá độ lên chủ nghĩa xã hội theo Hồ Chí Minh là gì?",
    options: ["Kế thừa những giá trị của xã hội cũ","Xóa bỏ một vài giá trị của xã hội cũ","Xóa bỏ toàn bộ những thành tựu của xã hội cũ","Kế thừa toàn bộ những gì xã hội cũ để lại"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q98",
    question: "Các bài giảng của Nguyễn Ái Quốc tại các lớp huấn luyện cán bộ được Bộ tuyên truyền của Hội liên hiệp các dân tộc bị áp bức tập hợp lại và xuất bản thành tác phẩm gì?",
    options: ["Bản án chế độ thực dân Pháp","Lênin và Phương Đông","Con Rồng tre","Đường Kách Mệnh"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q99",
    question: "Quan điểm: \"Đảng Cộng sản Việt Nam lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động\" được nêu lần đầu tiên trong văn kiện của Đại hội đại biểu toàn quốc lần thứ mấy của Đảng?",
    options: ["Đại hội đại biểu toàn quốc lần thứ VI","Đại hội đại biểu toàn quốc lần thứ VII","Đại hội đại biểu toàn quốc lần thứ IX","Đại hội đại biểu toàn quốc lần thứ XI"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q100",
    question: "Trong tư tưởng Hồ Chí Minh, quản lý nhà nước là quản lý bằng bộ máy, bằng pháp luật và bằng nhiều biện pháp khác nhau trong đó quan trọng bậc nhất là gì?",
    options: ["Hiến pháp","Quyền lực","Mệnh lệnh","Hình phạt"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q101",
    question: "Trong những nhiệm vụ cấp bách của Nhà nước Việt Nam Dân chủ cộng hòa, khi nói về vấn đề thứ hai - nạn dốt, Hồ Chí Minh đã đề nghị mở một chiến dịch gì?",
    options: ["Một chiến dịch xây dựng nền văn hóa mới","Một chiến dịch để chống nạn mù chữ","Một chiến dịch tuyên truyền nền giáo dục mới","Một chiến dịch xây dựng đời sống mới"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q102",
    question: "Hồ Chí Minh khẳng định chủ nghĩa dân tộc là một động lực lớn ở các nước đang đấu tranh giành độc lập dân tộc. Đó là chủ nghĩa dân tộc gì?",
    options: ["Sô vanh nước lớn","Trong sáng","Hẹp hòi","Chân chính"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q103",
    question: "Theo Hồ Chí Minh, mục tiêu của chủ nghĩa xã hội gồm những nội dung nào sau đây?",
    options: ["Chính trị, kinh tế, văn hóa xã hội và dân chủ","Chính trị, dân chủ, kinh tế, tiến bộ","Chính trị, kinh tế, văn hóa xã hội, con người","Chính trị, kinh tế, văn hóa, tiến bộ"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q104",
    question: "Theo quan điểm Hồ Chí Minh, khái quát dân chủ có ý nghĩa là gì?",
    options: ["Dân là chủ và dân làm chủ","Dân là người chủ","Dân làm quản lý","Dân làm người chủ"],
    correctAnswer: 0,
    explanation: "Ghi chú: \"dân là chủ\" để đề cập đến điều gì => vị thế của dân",
    points: 10
  },
  {
    id: "q105",
    question: "Theo Hồ Chí Minh, đâu là mục tiêu của chủ nghĩa xã hội?",
    options: ["Không ngừng phát triển kinh tế","Phát triển mạnh mẽ khoa học - kỹ thuật","Không ngừng cải thiện và nâng cao đời sống của nhân dân lao động","Một nền kinh tế hiện đại, có mức tăng trưởng cao"],
    correctAnswer: 2,
    explanation: "Ghi chú: chủ nghĩa xã hội phải do => Nhân dân lao động làm chủ",
    points: 10
  },
  {
    id: "q106",
    question: "Theo Hồ Chí Minh, nội dung nào được coi là nhiệm vụ trung tâm của thời kỳ quá độ lên chủ nghĩa xã hội?",
    options: ["Xây dựng thành công chủ nghĩa xã hội","Phát triển kinh tế và văn hóa","Công nghiệp hóa","Phát triển kinh tế"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q107",
    question: "Khi so sánh về bản chất của Nhật và Pháp, Hồ chí Minh nhận định như thế nào?",
    options: ["Chẳng khác gì nhau","Khác nhau","Rất đặc biệt","Giống nhau"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q108",
    question: "Theo Hồ Chí Minh, đại đoàn kết dân tộc phải luôn được nhận thức là vấn đề sống còn, quyết định:",
    options: ["Lực lượng của cách mạng","Đích đến của cách mạng","Thành bại của cách mạng"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q109",
    question: "Hồ Chí Minh xác định huy hiệu của thanh niên là:",
    options: ["Tay cầm cờ đỏ sao vàng tiến lên","Tay cầm súng tiến lên","Tay cầm khẩu hiệu tiến lên"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q110",
    question: "Hồ Chí Minh lưu ý xây dựng nhà nước có hiệu lực pháp lý mạnh mẽ phải:",
    options: ["Xây dựng đội ngũ cán bộ, công chức đủ đức, tài","Xây dựng đội ngũ cán bộ, công chức đủ phẩm chất","Xây dựng đội ngũ cán bộ, công chức đủ giỏi"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q111",
    question: "Theo Hồ Chí Minh, để lãnh đạo mặt trận, Đảng phải có cái gì?",
    options: ["Có chính sách mặt trận đúng đắn","Có chính sách đoàn kết đúng đắn","Có chính sách tập hợp đúng đắn","Có chính sách ngoại giao đúng đắn"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q112",
    question: "Đại đoàn kết dân tộc được xác định là nhiệm vụ nào trong những nhiệm vụ dưới đây của Đảng và của toàn dân tộc ta?",
    options: ["Cơ bản của Đảng và của dân tộc","Hàng đầu của Đảng và của dân tộc","Quan trọng của Đảng và của dân tộc ta","Thiết yếu"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q113",
    question: "Theo Hồ Chí Minh, bon đế quốc thực dân tuyên truyền khẩu hiệu \"độc lập tự do\" thực chất là che đậy bản chất gì?",
    options: ["\"ăn cướp\" và \"giết người\"","\"ăn cắp\" và \"hại dân\"","\"bóc lột\" và \"đàn áp\"","\"cướp bóc\" và \"đàn áp\""],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q114",
    question: "Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa quốc tế. Quan điểm trên thuộc nội dung gì trong trong tư tưởng Hồ Chí Minh?",
    options: ["Tư tưởng Hồ Chí Minh về vấn đề dân tộc","Tư tưởng Hồ Chí Minh về vấn đề giai cấp","Tư tưởng Hồ Chí Minh về đoàn kết quốc tế","Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội"],
    correctAnswer: 0,
    explanation: "Vấn đề dân tộc trong tư tưởng Hồ Chí Minh là sự kết hợp nhuần nhuyễn:",
    points: 10
  },
  {
    id: "q115",
    question: "Theo Hồ Chí Minh, nhân dân lao động làm chủ Nhà nước thì dẫn đến một hệ quả là nhân dân có quyền:",
    options: ["Được biết tất cả công việc của nhà nước","Kiểm soát Nhà nước","Được tham vấn những sự kiện quan trọng trong đất nước","Được bãi miễn chính phủ trong nước"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q116",
    question: "Trong xây dựng chủ nghĩa xã hội, Hồ Chí Minh chủ trương đối xử với giai cấp tư sản dân tộc như thế nào?",
    options: ["Xóa bỏ quyền sở hữu về tư liệu sản xuất của họ","Không xóa bỏ quyền sở hữu tư liệu sản xuất của họ","Đánh đổ họ với tư cách là giai cấp bóc lột","Phát triển giai cấp này cả về số lượng và chất lượng"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q117",
    question: "Hãy điền từ còn thiếu trong câu dưới đây? Theo Hồ Chí Minh, \"Muốn xây dựng chủ nghĩa xã hội, trước hết cần có...\"",
    options: ["con người xã hội chủ nghĩa\"","khoa học kỹ thuật tiên tiến\"","công, nông nghiệp hiện đại\"","nền kinh tế phát triển\""],
    correctAnswer: 0,
    explanation: "Con người xã hội chủ nghĩa theo Hồ Chí Minh đó là => Có tư tưởng và tác phong xã hội chủ nghĩa",
    points: 10
  },
  {
    id: "q118",
    question: "Theo tư tưởng Hồ Chí Minh, độc lập, tự do được hiểu là gì?",
    options: ["Quyền thiêng liêng của tất cả các dân tộc","Quyền thiêng liêng và bất khả xâm phạm của tất cả các dân tộc","Quyền bất khả xâm phạm của tất cả các dân tộc","Đặc quyền của mỗi một dân tộc"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q119",
    question: "Theo Hồ Chí Minh, nội dung cốt lõi của vấn đề dân tộc thuộc địa là gì?",
    options: ["Tự do, dân chủ","Độc lập, tự do","Người cày có ruộng","Quyền con người"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q120",
    question: "Hồ Chí Minh giải quyết như thế nào về mối quan hệ giữa vấn đề giai cấp và dân tộc?",
    options: ["Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa quốc tế","Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa nhân văn","Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa nhân đạo","Phải kết hợp nhuần nhuyễn giữa giai cấp với dân tộc, chủ nghĩa xã hội và độc lập dân tộc, chủ nghĩa yêu nước và chủ nghĩa quốc tế đại đồng"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q121",
    question: "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc cần được tiến hành như thế nào?",
    options: ["Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc","Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản thế giới","Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng thuộc địa","Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng tư sản"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q122",
    question: "Theo Hồ Chí Minh, mối quan hệ giữa văn hóa với kinh tế và chính trị như thế nào?",
    options: ["Văn hóa đứng ngoài kinh tế và chính trị","Văn hóa đứng ngoài chính trị","Văn hóa đứng ngoài kinh tế","Văn hóa không thể đứng ngoài mà phải ở trong kinh tế và chính trị"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q123",
    question: "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn giành thắng lợi, cần tập hợp những lực lượng nào?",
    options: ["Công nhân","Công nhân, nông dân, trí thức","Nông dân","Toàn dân tộc"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q124",
    question: "So với các nền dân chủ trước đây, dân chủ xã hội chủ nghĩa có điểm gì khác biệt cơ bản? (So với các nền dân chủ trước đây, dân chủ xã hội chủ nghĩa có điểm khác biệt cơ bản nào?)",
    options: ["Là nền dân chủ thuần túy","Không còn mang tính giai cấp","Là nền dân chủ phi lịch sử","Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q125",
    question: "Theo Hồ Chí Minh, cách mạng XHCN phải tiến hành đồng thời với:",
    options: ["Cách mạng tư sản","Cách mạng dân tộc dân chủ nhân dân","Cách mạng văn hóa"],
    correctAnswer: 1,
    explanation: "Phải tiến hành đồng thời với cuộc cách mạng nào?",
    points: 10
  },
  {
    id: "q126",
    question: "Theo tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam là đảng của giai cấp công nhân, đồng thời là đảng của nhân dân lao động và của cả dân tộc Việt Nam nhằm xác định điều gì?",
    options: ["Xác định vị thế cầm quyền của Đảng","Xác định năng lực của Đảng","Xác định nguồn gốc ra đời của Đảng","Xác định bản chất của Đảng"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q127",
    question: "Đâu là quan điểm của Hồ Chí Minh về bản chất con người?",
    options: ["Bản chất con người mang tính xã hội","Bản chất con người mang tính nhân dân","Bản chất con người mang tính dân chủ","Bản chất con người mang tính kế thừa"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q128",
    question: "Đoạn viết dưới đây ghi tóm tắt lời giải thích của Hồ Chí Minh về cần, kiệm, liêm, chính. Hỏi: Điểm tóm tắt nào đã bị ghi nhầm nội dung?",
    options: ["Cần là lao động cần cù, siêng năng, lao động có kế hoạch, sáng tạo và có năng suất lao động cao...","Kiệm là không xa xỉ, không hoang phí, không bừa bãi...","Liêm là luôn tôn trọng của công và của dân, không tham tiền của, địa vị, danh tiếng.","Chính là trong sạch, không tham lam đồng xu, hạt thóc của nhà nước, của dân."],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q129",
    question: "Theo Hồ Chí Minh, \"nọc độc và sức sống của con rắn độc tư bản chủ nghĩa\" đang tập trung ở đâu?",
    options: ["Ở châu Phi","Ở chính quốc","Ở châu Á","Ở thuộc địa"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q130",
    question: "Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam mang bản chất gì?",
    options: ["Mang bản chất giai cấp công nhân, dân tộc","Mang bản chất giai cấp công nhân, nhân dân lao động","Mang bản chất giai cấp công nhân, con người","Mang bản chất giai cấp công nhân"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q131",
    question: "Đâu là bản chất con người theo tư tưởng Hồ Chí Minh?",
    options: ["Sản phẩm của sự tiến hóa tự nhiên","Tổng hợp các quan hệ xã hội từ rộng đến hẹp","Mang bản chất giai cấp công nhân","Sự thống nhất cả hai mặt tự nhiên và xã hội"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q132",
    question: "Cách mạng giải phóng dân tộc muốn giành được thắng lợi cần phải:",
    options: ["Dựa vào sự thắng lợi của cách mạng ở các nước thuộc địa khác","Dựa vào thắng lợi của cách mạng vô sản ở chính quốc","Tiến hành chủ động và sáng tạo","Tiến hành sau khi cách mạng vô sản ở chính quốc giành thắng lợi"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q133",
    question: "Trong luận điểm về cách mạng giải phóng dân tộc, chỉ ra luận điểm sai về con đường, biện pháp, lực lượng và phương pháp cách mạng của Hồ Chí Minh?",
    options: ["Cách mạng giải phóng dân tộc muốn thắng lợi phải đi theo con đường cách mạng vô sản","Cách mạng giải phóng dân tộc, trong điều kiện của Việt Nam, muốn thắng lợi phải do Đảng Cộng sản lãnh đạo","Cách mạng giải phóng dân tộc phải dựa trên lực lượng đại đoàn kết dân tộc, lấy liên minh công - nông- trí làm nền tảng","Cách mạng giải phóng dân tộc cần chủ động, sáng tạo, có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q134",
    question: "Theo Hồ Chí Minh, mục đích của chủ nghĩa xã hội là gì?",
    options: ["Xây dựng nền kinh tế hiện đại, có sức tăng trưởng cao.","Không ngừng nâng cao đời sống vật chất và tinh thần của nhân dân","Phát triển mạnh mẽ khoa học - kỹ thuật","Bảo đảm quyền làm chủ của nhân dân lao động"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q135",
    question: "Khi nói về nghĩa rộng của văn hóa, Hồ Chí Minh đã đề cập vì lí do gì mà con người sáng tạo ra các giá trị của văn hóa?",
    options: ["Vì lẽ sinh tồn và mục đích của cuộc sống","Vì sự phân tầng chính trị của xã hội","Để nâng cao chất lượng giáo dục","Vì để thỏa mãn những đời sống tinh thần"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q136",
    question: "Hồ Chí Minh vạch ra lực lượng cách mạng giải phóng dân tộc:",
    options: ["Cách mạng là sự nghiệp của quần chúng bị áp bức","Cách mạng là sự nghiệp của công nông","Cách mạng là sự nghiệp của mọi người dân"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q137",
    question: "Hồ Chí Minh cho rằng giai cấp địa chủ ở Việt Nam:",
    options: ["Là giai cấp phản động","Là giai cấp tiên tiến","Có thể lợi dụng","Cần phải loại bỏ"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q138",
    question: "Hãy chọn phương án đúng nhất: Theo Hồ Chí Minh, mục đích cơ bản của đoàn kết quốc tế là gì?",
    options: ["Tranh thủ sự viện trợ của các nước bên ngoài","Học hỏi và trao đổi kinh nghiệm sản xuất","Hợp tác giáo dục và giao lưu văn hóa","Tạo sức mạnh tổng hợp cho cách mạng Việt Nam và góp phần cùng với nhân dân thế giới thực hiện thắng lợi các mục tiêu cách mạng"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q139",
    question: "Lựa chọn nào là đúng nhất theo tư tưởng Hồ Chí Minh, động lực của chủ nghĩa xã hội gồm:",
    options: ["Động lực tinh thần và bên ngoài","Động lực vật chất và bên trong","Động lực vật chất và tinh thần, nội sinh và ngoại sinh","Động lực tinh thần và nội sinh"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q140",
    question: "Mặt trận Liên Việt được thành lập vào thời gian nào?",
    options: ["1941","1945","1951","1960"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q141",
    question: "Theo Hồ Chí Minh, Mặt trận dân tộc thống nhất phải được xây dựng trên nền tảng khối liên minh công - nông - trí thức, đặt dưới:",
    options: ["Sự lãnh đạo của Đảng","Sự lãnh đạo của tổ chức","Sự lãnh đạo của chính quyền"],
    correctAnswer: 0,
    explanation: "Mặt trận dân tộc thống nhất trong tư tưởng Hồ Chí Minh",
    points: 10
  },
  {
    id: "q142",
    question: "Trong tư tưởng Hồ Chí Minh, Mặt trận dân tộc thống nhất càng rộng rãi, sức mạnh của khối liên minh công nông trí thức càng như thế nào?",
    options: ["Suy yếu và ngược lại","Được tăng cường và ngược lại","Gắn kết và ngược lại","Thu hẹp và ngược lại"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q143",
    question: "Theo Hồ Chí Minh, muốn phát huy tinh thần đoàn kết Đảng phải:",
    options: ["Có chính sách mặt trận dân tộc đúng đắn","Có chính sách đúng đắn thu hút quần chúng nhân dân","Có chính sách dân chủ đúng đắn"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q144",
    question: "Theo quan điểm của Hồ Chí Minh, tổ chức nào sau đây có nhiệm vụ thực hiện sự khối đại đoàn kết toàn dân tộc?",
    options: ["Mặt trận dân tộc thống nhất","Mặt trận dân chủ","Mặt trận nhân dân","Mặt trận Việt Minh"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q145",
    question: "Theo quan điểm của Hồ Chí Minh đối với một quốc gia, cần, kiệm, liêm, chính là thước đo sự giàu có về vật chất, vững mạnh về tinh thần. Quan điểm đó thể hiện điều gì?",
    options: ["Văn hiến lâu đời","Văn hóa cao","Sự văn minh tiến bộ","Truyền thống tốt đẹp"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q146",
    question: "Trong Mặt trận dân tộc thống nhất, Đảng Cộng sản là:",
    options: ["Thành viên của Mặt trận dân tộc thống nhất","Lực lượng lãnh đạo Mặt trận dân tộc thống nhất","Vừa là thành viên, vừa là lực lượng lãnh đạo Mặt trận dân tộc thống nhất","Đại biểu của giai cấp công nhân trong Mặt trận dân tộc thống nhất"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q147",
    question: "Từ nào còn thiếu trong câu nói sau của Hồ Chí Minh? \"Ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta (...) với họ\"",
    options: ["Hợp tác","Đoàn kết","Bắt tay","Chia sẻ"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q148",
    question: "Đối tượng chủ yếu của tư tưởng Hồ Chí Minh là gì? (Đối tượng chủ yếu của tư tưởng Hồ Chí Minh là:)",
    options: ["Cách mạng xã hội chủ nghĩa","Cách mạng Việt Nam","Cách mạng Đông Dương","Cách mạng dân tộc dân chủ nhân dân"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q149",
    question: "Theo Hồ Chí Minh, muốn tăng cường đoàn kết quốc tế trong cuộc đấu tranh vì mục tiêu chung, các Đảng Cộng sản phải tiến hành có hiệu quả việc giáo dục chủ nghĩa yêu nước chân chính kết hợp với điều gì? (Đối với phong trào cộng sản và công nhân quốc tế, Hồ Chí Minh giương cao ngọn cờ độc lập dân tộc gắn liền với chủ nghĩa xã hội, thực hiện đoàn kết thống nhất trên nền tảng của chủ nghĩa Mác-Lênin và yếu tố nào?)",
    options: ["Chủ nghĩa yêu nước, có lý, có tình","Chủ nghĩa quốc tế vô sản, có tình, có nghĩa","Chủ nghĩa quốc tế vô sản, có lý, có tình","Chủ nghĩa yêu nước, có tình, có nghĩa"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q150",
    question: "Để có thể tận dụng thời cơ, vượt qua thách thức, trên cơ sở nhận thức và vận dụng sáng tạo tư tưởng Hồ Chí Minh, cần tập trung vào vấn đề nào?",
    options: ["Kiên định cách mạng","Kiên định phương pháp cách mạng","Kiên định theo chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh","Kiên định con đường xây dựng đất nước"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q151",
    question: "Đâu là câu trả lời chính xác và đầy đủ nhất theo tư tưởng Hồ Chí Minh?",
    options: ["Đảng Cộng sản Việt Nam là một thành viên của Mặt trận dân tộc thống nhất","Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Mặt trận","Đảng Cộng sản Việt Nam vừa là thành viên, vừa là lực lượng lãnh đạo Mặt trận","Đảng Cộng sản Việt Nam không là thành viên của Mặt trận dân tộc thống nhất"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q152",
    question: "Nguyễn Ái Quốc vào Đảng Xã hội Pháp năm nào?",
    options: ["1917","1918","1919","1920"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q153",
    question: "Chủ trương cầu ngoại viện, dùng bạo lực để khôi phục độc lập dân tộc là đường lối của nhà yêu nước nào?",
    options: ["Phan Bội Châu","Phan Châu Trinh","Hồ Chí Minh","Hoàng Hoa Thám"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q154",
    question: "Hồ Chí Minh nhấn mạnh mục đích của Đảng Lao động Việt Nam là:",
    options: ["Liên kết toàn dân, chống giặc ngoại xâm","Đoàn kết đoàn kết đại đoàn kết","Đoàn kết toàn dân, phụng sự tổ quốc","Đoàn kết dân tộc, phụng sự tổ quốc"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q155",
    question: "Nguyễn Ái Quốc đọc luận cương của Lênin vào thời gian nào?",
    options: ["7/1917","7/1918","7/1919","7/1920"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q156",
    question: "Đâu là quan điểm của Hồ Chí Minh trong các quan điểm sau?",
    options: ["Trong giai đoạn thuộc địa, giải phóng chính trị - xã hội là trước hết, mở đường để giải phóng văn hoá","Trong giai đoạn thuộc địa, giải phóng chính trị - xã hội là trước hết, mở đường để giải phóng nhân loại","Trong giai đoạn thuộc địa, giải phóng chính trị - xã hội là trước hết, mở đường để giải phóng dân tộc","Trong giai đoạn thuộc địa, giải phóng chính trị - xã hội là trước hết, mở đường để giải phóng các dân tộc anh em"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q157",
    question: "Đâu là một nội dung cơ bản trong Bản Yêu sách của nhân dân An Nam mà Nguyễn Ái Quốc gửi tới Hội nghị Vécxay (Pháp)?",
    options: ["Đòi tự do, dân chủ tối thiểu cho nhân dân","Đòi giải phóng dân tộc","Đòi tự trị dân tộc","Đòi độc lập dân tộc"],
    correctAnswer: 0,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q158",
    question: "Theo tư tưởng Hồ Chí Minh, muốn thức tỉnh một dân tộc, trước hết phải thức tỉnh bộ phận dân cư nào?",
    options: ["Công nhân và nông dân","Trí thức","Thiếu niên, nhi đồng","Thanh niên"],
    correctAnswer: 3,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q159",
    question: "Trong các luận điểm sau, luận điểm nào là của Hồ Chí Minh?",
    options: ["Vô sản tất cả các nước liên hiệp lại","Vô sản tất cả các nước, đoàn kết lại","Vô sản tất cả các nước và các dân tộc bị áp bức đoàn kết lại","Lao động tất cả các nước, đoàn kết lại"],
    correctAnswer: 2,
    explanation: "Hồ Chí Minh là người đấu tranh đòi quyền độc lập cho => Dân tộc Việt Nam và tất cả các dân tộc bị áp bức trên thế giới",
    points: 10
  },
  {
    id: "q160",
    question: "Nguyễn Ái Quốc thành lập \"Hội Việt Nam cách mạng thanh niên\" vào thời gian nào?",
    options: ["Tháng 5/1926","Tháng 6/1925","Tháng 5/1927","Tháng 5/1925"],
    correctAnswer: 1,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q161",
    question: "Theo Hồ Chí Minh, cuộc cách mạng nào đầu thế kỷ XX đã làm \"thức tỉnh các dân tộc châu Á\"?",
    options: ["Cách mạng Trung Quốc","Cách mạng Ấn Độ","Cách mạng tháng Mười Nga","Cách mạng Pháp"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q162",
    question: "Theo Hồ Chí Minh, đường lối của nhà yêu nước nào còn \"nặng cốt cách phong kiến\"?",
    options: ["Phan Châu Trinh","Phan Bội Châu","Hoàng Hoa Thám","Nguyễn Thái Học"],
    correctAnswer: 2,
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
];
