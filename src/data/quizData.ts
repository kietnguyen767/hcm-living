export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number[]; // Array of 0-based indices
  explanation: string;
  points: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Hồ Chí Minh yêu cầu: \"phải phát huy hết ..., phải lột cho hết tinh thần dân tộc, để cổ vũ cho đồng bào ta, để giáo dục cho con cháu ta\"",
    options: ["Cốt cách dân tộc","Hồn cốt dân tộc","Văn hóa dân tộc","Truyền thống dân tộc"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q2",
    question: "Khẩu hiệu Tự do - Bình đẳng - Bác Ái ra đời ở đâu?",
    options: ["Đại cách mạng Pháp","Cách mạng Tân Hợi của Tôn Trung Sơn","Cải cách Minh Trị - Nhật Bản","Phong trào Duy Tân của Phan Châu Trinh"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q3",
    question: "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn thắng lợi:",
    options: ["Phải đi theo con đường cách mạng vô sản","Phải đi theo con đường cách mạng Pháp, Mỹ","Phải đi theo con đường cách mạng tháng Mười Nga","Phải đi theo con đường cách mạng của các bậc tiền bối Việt Nam"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q4",
    question: "Kiểm soát quyền lực Nhà nước và phòng, chống tiêu cực trong Nhà nước, được xác định là nội dung nào trong tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân?",
    options: ["Nhà nước dân chủ","Nhà nước pháp quyền","Nhà nước trong sạch, vững mạnh","Xây dựng nhà nước"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q5",
    question: "\"Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì\". Trích dẫn trên đề cập đến nội dung gì trong tư tưởng Hồ Chí Minh?",
    options: ["Độc lập dân tộc gắn liền với chủ nghĩa xã hội","Về sức mạnh của nhân dân, của khối đại đoàn kết dân tộc","Tư tưởng về phát triển kinh tế và văn hoá","Tu dưỡng, rèn luyện đạo đức suốt đời"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q6",
    question: "Chủ tịch Hồ Chí Minh là hiện thân cho tinh thần dân tộc ta, Người đã nói rằng: Cái mà tôi cần nhất trên đời là đồng bào tôi được tự do, \"...\". Chọn đáp án đúng nhất điền vào dấu \"...\" là?",
    options: ["Tổ quốc tôi được độc lập.","Đất nước tôi được thống nhất.","Tổ quốc tôi được bình đẳng.","Đất nước tôi được phát triển"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q7",
    question: "Nội dung nào không đúng với tư tưởng Hồ Chí Minh: để xác định bước đi và tìm cách làm của chủ nghĩa xã hội phù hợp với Việt Nam cần phải thực hiện điều gì?",
    options: ["Theo bước đi của các nước xã hội chủ nghĩa, vừa làm vừa tìm kiếm mô hình phù hợp","Quán triệt dựa trên nền tảng của chủ nghĩa Mác-Lênin về xây dựng chế độ mới, có thể tham khảo, học tập kinh nghiệm của các nước anh em","Xuất phát từ điều kiện thực tế, đặc điểm dân tộc, nhu cầu và khả năng thực tế của nhân dân.","Xây dựng phải đi đôi với chống, lấy xây làm chính để loại trừ các lực cản của chế độ cũ và chủ nghĩa cá nhân"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q8",
    question: "Câu nói \"Đảng là đạo đức, đảng là văn minh\" được chủ tịch Hồ Chí Minh đưa ra ở:",
    options: ["Diễn văn kỷ niệm 30 năm thành lập đảng 1960","Diễn văn khai mạc đại hội đại biểu toàn quốc lần thứ III của Đảng năm 1960","Di chúc - 1969","Diễn văn khai mạc đại hội đại biểu toàn quốc lần thứ II tháng 2 - 1952"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q9",
    question: "Hồ Chí Minh ví tuổi trẻ như điều gì?",
    options: ["Mùa xuân của xã hội","Mùa xuân của tuổi trẻ","Mùa xuân của Đảng","Mùa xuân của gia đình"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q10",
    question: "Nguyên tắc tối cao để đoàn kết rộng rãi trong quần chúng nhân dân là:",
    options: ["Yêu dân, tin dân, dựa vào dân, vì hạnh phúc của nhân dân","Đoàn kết trên cơ sở độc lập tự chủ","Đoàn kết chặt chẽ, chân thành","Đoàn kết trên cơ sở tự nguyện"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q11",
    question: "Câu nói của Hồ Chí Minh \"Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công đại thành công\" đó là cần phải đoàn kết ở đâu?",
    options: ["Đoàn kết trong đảng, đoàn kết dân tộc và đoàn kết quốc tế","Đoàn kết trong đảng, đoàn kết quân đội và đoàn kết dân tộc","Đoàn kết dân tộc, đoàn kết tôn giáo tín ngưỡng và đồng bào ngoài nước","Đoàn kết dân tộc, đoàn kết kiều bào, đoàn kết trong Đảng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q12",
    question: "Hồ Chí Minh cho rằng:",
    options: ["Sự ra đời của CNXH trên phạm vi quốc tế là quy luật phát triển của lịch sử xã hội","Sự ra đời của CNXH trên phạm vi quốc tế là quy luật phát triển của nhân loại","Sự ra đời của CNXH trên phạm vi quốc tế là quy luật phát triển của lịch sử thế giới"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q13",
    question: "Theo Hồ Chí Minh, chỉ có... mới giải phóng được các dân tộc bị áp bức và giai cấp công nhân toàn thế giới. Từ nào còn thiếu trong câu trên?",
    options: ["Chủ nghĩa xã hội và chủ nghĩa cộng sản","Giai cấp công nhân và giai cấp nông dân","Giai cấp công nhân và nhân dân lao động","Đảng Cộng sản và giai cấp công nhân"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q14",
    question: "Chủ trương \"Ý Pháp cầu tiến bộ\", \"khai dân trí, chấn dân khí, hậu dân sinh\" là đường lối của nhà yêu nước nào?",
    options: ["Phan Châu Trinh","Phan Bội Châu","Hoàng Hoa Thám","Hồ Chí Minh"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q15",
    question: "Hồ Chí Minh đã nêu quan điểm về xây dựng một nền văn hóa mới là:",
    options: ["Xây dựng tâm lý, xây dựng luân lý","Xây dựng tâm lý, xây dựng luân lý, xây dựng xã hội","Xây dựng tâm lý, xây dựng luân lý, xây dựng xã hội, xây dựng chính trị","Xây dựng tâm lý, xây dựng luân lý, xây dựng xã hội, xây dựng chính trị, xây dựng kinh tế"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q16",
    question: "Trong bản Yêu sách của nhân dân An Nam, Hồ Chí Minh nhấn mạnh quốc gia cần phải có một chế độ như thế nào?",
    options: ["Chế độ ra sắc lệnh","Chế độ ra các đạo luật","Chế độ dân chủ","Chế độ công bằng"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q17",
    question: "Theo Hồ Chí Minh, trong thời kỳ quá độ còn tồn tại hình thức:",
    options: ["Sở hữu của nhà nước và sở hữu của hợp tác xã","Sở hữu của người lao động riêng lẻ và sở hữu của nhà tư bản","Tất cả các phương án"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q18",
    question: "Trong mục tiêu về chủ nghĩa xã hội, theo Hồ Chí Minh mục tiêu kinh tế phải gắn bó với:",
    options: ["Mục tiêu văn hóa","Mục tiêu giáo dục","Mục tiêu chính trị","Mục tiêu xã hội"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q19",
    question: "Theo tư tưởng Hồ Chí Minh, con người Việt Nam trong thời đại mới phải có bao nhiêu phẩm chất cơ bản?",
    options: ["3 phẩm chất cơ bản","4 phẩm chất cơ bản","5 phẩm chất cơ bản","6 phẩm chất cơ bản"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q20",
    question: "Trong mối quan hệ giữa văn hóa, kinh tế, chính trị, Hồ Chí Minh coi chế độ chính trị và nền kinh tế có quan hệ như thế nào đến văn hóa?",
    options: ["Nền tảng và quyết định tính chất của văn hóa","Cơ sở và quyết định đến bản chất của văn hóa","Cái quyết định đến văn hóa","Cơ sở phát triển văn hóa"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q21",
    question: "Theo Hồ Chí Minh, để lãnh đạo Mặt trận, Đảng phải đi đúng đường lối quần chúng, không được làm điều gì?",
    options: ["Vận động, giáo dục, thuyết phục, nêu gương, lấy lòng chân thành để đối xử, cảm hóa, khơi gợi tinh thần tự giác, tự nguyện","Quan liêu, mệnh lệnh và gò ép","Lấy quyền uy để thuyết phục mọi người đi theo","Không lắng nghe ý kiến của người ngoài Đảng"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q22",
    question: "Nguyễn Ái Quốc là người Việt Nam thứ mấy tham gia vào Đảng Cộng sản Pháp?",
    options: ["Thứ nhất","Thứ hai","Thứ ba","Thứ tư"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q23",
    question: "Theo Hồ Chí Minh, quy luật ra đời của Đảng Cộng sản Việt Nam có khác biệt gì với chủ nghĩa Mác - Lênin?",
    options: ["Không khác biệt với chủ nghĩa Mác - Lênin","Bổ sung yếu tố phong trào yêu nước","Không có yếu tố phong trào công nhân","Bổ sung thêm học thuyết cách mạng của chủ nghĩa Mác"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q24",
    question: "Nội dung nào không đúng với bản chất giai cấp công nhân của nhà nước theo tư tưởng Hồ Chí Minh?",
    options: ["Nhà nước do Đảng Cộng sản lãnh đạo","Tính định hướng xã hội chủ nghĩa của sự phát triển đất nước","Nguyên tắc tổ chức và hoạt động cơ bản của nó là nguyên tắc tập trung dân chủ","Nhà nước dưới sự lãnh đạo của Quốc hội"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q25",
    question: "Đối với Hồ Chí Minh, dân ta tài năng, trí tuệ và sáng tạo, họ biết \"giải quyết nhiều vấn đề một cách giản đơn, mau chóng, đầy đủ, mà những người tài giỏi, những đoàn thể to lớn.......",
    options: ["nghĩ mãi không ra\".","nghĩ mãi mới ra\".","làm mãi không được\".","làm mãi mới được\"."],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q26",
    question: "Nội dung quá độ lên chủ nghĩa xã hội theo Hồ Chí Minh phải tiến hành như thế nào?",
    options: ["Chủ yếu là lĩnh vực kinh tế","Chủ yếu là lĩnh vực văn hóa","Trên mọi mặt của xã hội","Chủ yếu là lĩnh vực chính trị"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q27",
    question: "Phương thức tiếp cận về chủ nghĩa xã hội của Hồ Chí Minh thiên về hướng nào dưới đây?",
    options: ["Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện kinh tế là chủ yếu","Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện văn hóa là chủ yếu","Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ nhiều góc độ khác nhau","Hồ Chí Minh tiếp cận Chủ nghĩa xã hội từ phương diện chính trị là chủ yếu"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q28",
    question: "Đâu là luận điểm sáng tạo của Hồ Chí Minh về vấn đề lãnh đạo của Đảng?",
    options: ["Lý luận về Đảng Cộng sản cầm quyền","Tư duy của Đảng Cộng sản","Đường lối của Đảng Cộng sản","Đội ngũ lãnh đạo của Đảng Cộng sản"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q29",
    question: "Theo Hồ Chí Minh, để đánh bại các thế lực đế quốc thực dân chỉ có tinh thần yêu nước là chưa đủ, cách mạng muốn đến nơi cần phải tập hợp được tất cả mọi lực lượng có thể tập hợp đồng thời xây dựng được nội dung nào trong các nội dung sau đây?",
    options: ["Khối đại đoàn kết dân tộc bền vững","Chương trình tập hợp lực lượng đoàn kết rộng rãi","Chính sách dân tộc phù hợp","Đoàn kết quốc tế"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q30",
    question: "Hồ Chí Minh đã lưu ý điều gì trong công tác xây dựng mặt trận?",
    options: ["Khối đoàn kết trong Mặt trận phải xuất phát từ mục tiêu chung","Khối đoàn kết trong Mặt trận phải xuất phát từ mục tiêu cụ thể","Khối đoàn kết trong Mặt trận phải xuất phát từ mục tiêu cơ bản","Khối đoàn kết trong Mặt trận phải xuất phát từ mục tiêu của giai cấp cầm quyền"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q31",
    question: "Hồ Chí Minh khẳng định \"Không có gì quý hơn độc lập, tự do\" khi đất nước đang tiến hành chiến tranh chống thế lực nào?",
    options: ["Thực dân Pháp","Phát xít Nhật","Đế quốc Mỹ","Phong kiến"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q32",
    question: "Đâu là nội dung tư tưởng của Hồ Chí Minh?",
    options: ["Giữ vững độc lập của dân tộc mình đồng thời tôn trọng độc lập của các dân tộc khác","Giữ vững độc lập của dân tộc mình đồng thời kính trọng độc lập của các dân tộc khác","Giữ vững độc lập của dân tộc mình đồng thời tôn trọng độc lập của các quốc gia","Giữ vững độc lập của dân tộc mình nhưng phải phụ thuộc vào thắng lợi của cách mạng vô sản ở chính quốc"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q33",
    question: "Hồ Chí Minh cho rằng cách mạng giải phóng dân tộc cần tiến hành bởi con đường nào?",
    options: ["Con đường cách mạng bất bạo động","Con đường cách mạng bạo lực","Con đường cách mạng ôn hòa","Con đường đấu tranh dân chủ"],
    correctAnswer: [1],
    explanation: "Ghi chú: tiến hành như thế nào => Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc",
    points: 10
  },
  {
    id: "q34",
    question: "Thực chất của giải phóng giai cấp theo tư tưởng Hồ Chí Minh là gì?",
    options: ["Xóa bỏ các giai cấp bóc lột với tính cách là giai cấp thống trị xã hội","Tiêu diệt cá nhân những con người thuộc các giai cấp bóc lột","Không chủ trương thủ tiêu giai cấp bóc lột thống trị xã hội","Xóa bỏ triệt tiêu các giai cấp thuộc về xã hội cũ"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q35",
    question: "Hồ Chí Minh vạch ra mâu thuẫn cơ bản của cách mạng dân tộc thuộc địa là gì?",
    options: ["Nhân dân với thực dân, phong kiến","Nhân dân với thực dân, địa chủ","Nhân dân với thực dân, đế quốc","Nhân dân với phong kiến, địa chủ"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q36",
    question: "Theo Hồ Chí Minh, tính chất và nhiệm vụ hàng đầu của cách mạng ở thuộc địa là gì?",
    options: ["Giải phóng dân tộc","Giải phóng thế giới","Giải phóng nhân loại","Giải phóng giai cấp"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q37",
    question: "Khẩu hiệu chiến lược: \"Vô sản toàn thế giới và các dân tộc bị áp bức, đoàn kết lại\" là của ai?",
    options: ["C. Mác","Ph. Ăngghen","V.I.Lênin","Hồ Chí Minh"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q38",
    question: "Vì sao Hồ Chí Minh lại khẳng định: đại đoàn kết toàn dân tộc phải được xác định là nhiệm vụ hàng đầu của Đảng?",
    options: ["Vì đại đoàn kết toàn dân tộc không chỉ là khẩu hiệu chiến lược, mà còn là mục đích của cách mạng cần phải được quán triệt trong tất cả mọi lĩnh vực, từ đường lối, chủ trương, chính sách tới hoạt động thực tiễn của Đảng","Vì Đảng là lực lượng vận động, thuyết phục và hướng dẫn quần chúng nhân dân","Vì Đảng là lực lượng lãnh đạo cách mạng Việt Nam","Vì Đảng là lực lượng giáo dục, giác ngộ quần chúng nhân dân và liên lạc với vô sản các nước"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q39",
    question: "Theo Hồ Chí Minh, là người đày tớ của dân không có nghĩa là \"tôi tớ, tôi đòi hay theo đuôi quần chúng\" mà cần phải làm gì?",
    options: ["Hiểu và đánh giá đúng nhân dân nhằm đem lại các quyền và lợi ích cho nhân dân","Tận tâm, tận lực phụng sự nhân dân nhằm đem lại các quyền và lợi ích cho nhân dân","Phụng sự nhân dân và ra sức phấn đấu trở thành quan cách mạng","Đảm bảo mọi nguyện vọng của nhân dân được lắng nghe và đáp ứng"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q40",
    question: "Theo tư tưởng Hồ Chí Minh, Đảng Cộng sản là nhân tố quyết định hàng đầu để đưa cách mạng Việt Nam đi đến thắng lợi, luận điểm trên phản ánh điều gì?",
    options: ["Xác định vị thế cầm quyền của Đảng","Xác định vai trò lãnh đạo của Đảng","Xác định mục đích của Đảng","Xác định nhiệm vụ của Đảng"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q41",
    question: "Đâu là nội dung trong tư tưởng Hồ Chí Minh?",
    options: ["Đại đoàn kết dân tộc là truyền thống quý báu của dân tộc ta.","Đoàn kết dân tộc là cốt lõi của truyền thống dân tộc.","Đại đoàn toàn dân là cốt lõi của chủ nghĩa yêu nước.","Đoàn kết toàn dân tộc chỉ là nhiệm vụ sách lược, nhất thời."],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q42",
    question: "Trong tư tưởng Hồ Chí Minh về cách mạng Việt Nam được xem là gì?",
    options: ["Hệ thống các quan điểm cụ thể về cách mạng Việt Nam","Một nhóm các quan điểm cụ thể về cách mạng Việt Nam","Một hệ thống các học thuyết về cách mạng Việt Nam","Một hệ thống quan điểm toàn diện và sâu sắc về cách mạng Việt Nam"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q43",
    question: "Theo Hồ Chí Minh, tham ô, lãng phí được ví như giặc gì?",
    options: ["Ngoại xâm","Nội xâm","Mỹ","Giặc dốt"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q44",
    question: "Đâu là quan điểm đúng với tư tưởng Hồ Chí Minh về người cách mạng: Hồ Chí Minh cho rằng đạo đức có vai trò thế nào?",
    options: ["Đạo đức là gốc của người cách mạng","Đạo đức là gốc của người xã hội","Đạo đức là gốc của người công chúng","Đạo đức là gốc của người lãnh đạo"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q45",
    question: "Luận điểm \"Đoàn kết, đoàn kết, đại đoàn kết; Thành công, thành công, đại thành công\" của Chủ tịch Hồ Chí Minh được trích từ tác phẩm nào?",
    options: ["Bài nói chuyện tại trong buổi Bế mạc Đại hội thành lập Mặt trận Tổ Quốc Việt Nam","Bài nói chuyện tại Hội nghị mở rộng Ủy ban Mặt trận Tổ quốc Việt Nam","Bài nói chuyện tại Đại hội đại biểu Mặt trận Tổ Quốc Việt Nam lần thứ II","Buổi nói chuyện với cán bộ, chiến sĩ Đại đoàn Quân Tiên Phong"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q46",
    question: "Quan điểm nào dưới đây là phương thức tiếp cận về chủ nghĩa xã hội của Hồ Chí Minh?",
    options: ["Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện đạo đức. Chủ nghĩa xã hội là đối lập với chủ nghĩa cá nhân.","Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện đạo đức. Chủ nghĩa xã hội là đối lập với chủ nghĩa nhân văn.","Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện đạo đức. Chủ nghĩa xã hội là đối lập với chủ nghĩa vi lợi.","Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ phương diện đạo đức. Chủ nghĩa xã hội là đối lập với chủ nghĩa vị kỷ."],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q47",
    question: "Theo tư tưởng Hồ Chí Minh thì đoàn kết trước hết là phải đoàn kết như thế nào?",
    options: ["Toàn dân","Toàn quân","Toàn Đảng","Toàn giai cấp"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q48",
    question: "Nguyên tắc chung của Mặt trận dân tộc thống nhất được Hồ Chí Minh xác định cụ thể phù hợp là gì?",
    options: ["Đoàn kết chặt chẽ, lâu dài, thật sự, chân thành","Chống chiến tranh xâm lược","Độc lập, tự do","Độc lập, bình đẳng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q49",
    question: "Trong thời gian ở nước ngoài, Nguyễn Tất Thành đã làm những công việc gì?",
    options: ["Đốt lò, bán báo","Thợ ảnh, làm bánh","Phụ bếp, cào tuyết","Tất cả các công việc"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q50",
    question: "Theo Hồ Chí Minh, trong quá trình hoạt động, Đảng ta phải chú ý học tập, kế thừa những kinh nghiệm tốt của các đảng cộng sản khác, đồng thời Đảng ta phải tổng kết kinh nghiệm của mình để làm gì?",
    options: ["Bổ sung lý luận về Đảng Cộng sản cầm quyền","Bổ sung tư duy của Đảng Cộng sản","Bổ sung đường lối của Đảng Cộng sản","Bổ sung chủ nghĩa Mác - Lênin"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q51",
    question: "Con đường cứu nước của Hồ Chí Minh là gì?",
    options: ["Độc lập dân tộc gắn liền với chủ nghĩa xã hội","Giải phóng dân tộc gắn liền với chủ nghĩa xã hội","Giải phóng dân tộc gắn với chủ nghĩa dân tộc","Độc lập dân tộc gắn liền với chế độ dân chủ"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q52",
    question: "Hồ Chí Minh vạch ra mục tiêu của cách mạng giải phóng dân tộc thuộc địa là:",
    options: ["Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền của nhân dân","Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền về tay người lao động","Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền về tay lực lượng cách mạng","Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền của công nông"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q53",
    question: "Hồ Chí Minh cho rằng sự ra đời của chủ nghĩa xã hội ở Việt Nam có ý nghĩa như thế nào?",
    options: ["Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng Việt Nam.","Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng thế giới","Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng Đông Nam Á.","Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng Châu Á"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q54",
    question: "Hồ Chí Minh cho rằng giải phóng dân tộc phải gắn liền với:",
    options: ["Độc lập, tự do và hạnh phúc","Dân quyền và tự do","Nhân sinh và hạnh phúc"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q55",
    question: "Theo Hồ Chí Minh, mục tiêu kinh tế của thời kỳ quá độ lên CNXH là:",
    options: ["Công, lâm nghiệp hiện đại, khoa học - kỹ thuật tiên tiến, bóc lột được bỏ dần, vật chất được cải thiện","Công, ngư nghiệp hiện đại, khoa học - kỹ thuật tiên tiến, bóc lột được bỏ dần, vật chất được cải thiện","Công, nông nghiệp hiện đại, khoa học - kỹ thuật tiên tiến, bóc lột được bỏ dần, vật chất được cải thiện"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q56",
    question: "Đâu là sự sáng tạo của Hồ Chí Minh về Chủ nghĩa xã hội ở Việt Nam?",
    options: ["Sáng tạo trong cách thức đi lên xây dựng chủ nghĩa xã hội","Phương pháp bạo lực cách mạng","Lựa chọn con đường đi lên xây dựng chủ nghĩa xã hội","Phân tích đúng tình hình nước ta"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q57",
    question: "Đâu là câu trả lời chính xác nhất trong tư tưởng Hồ Chí Minh về vấn đề dân tộc?",
    options: ["Vấn đề dân tộc và vấn đề giai cấp là quan hệ chính trị","Vấn đề dân tộc và vấn đề giai cấp là quan hệ kinh tế","Vấn đề dân tộc và vấn đề giai cấp là quan hệ thể hiện trong mọi mặt của xã hội","Vấn đề dân tộc và vấn đề giai cấp là quan hệ văn hoá"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q58",
    question: "Trong tư tưởng Hồ Chí Minh, nền tảng của khối đại đoàn kết dân tộc là:",
    options: ["Liên minh công-nông","Liên minh công-nông, lao động trí óc","Liên minh công-nông và các tầng lớp lao động khác","Liên minh công-nông và các lực lượng yêu nước khác"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q59",
    question: "Luận điểm \"Công cuộc giải phóng anh em chỉ có thể thực hiện bằng sự nỗ lực của bản thân anh em\" là của:",
    options: ["C. Mác","Ph. Ăngghen","V.I.Lênin","Hồ Chí Minh"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q60",
    question: "Ngoại ngữ nào sau đây được Hồ Chí Minh sử dụng trong thời gian học tập ở trường Quốc học Huế?",
    options: ["Tiếng Anh","Tiếng Pháp","Tiếng Trung","Tiếng Nga"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q61",
    question: "Nguyễn Ái Quốc đến Liên Xô lần đầu tiên học tại trường nào?",
    options: ["Đại học Liên Xô","Đại học Phương Đông","Trường quốc tế Lênin","Viện nghiên cứu các vấn đề dân tộc và thuộc địa"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q62",
    question: "Báo Le Paria (Người Cùng khổ) do Nguyễn Ái Quốc đồng sáng lập, ra số đầu tiên khi nào?",
    options: ["30/12/1920","1/4/1921","1/4/1922","1/4/1923"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q63",
    question: "Theo tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam vừa là người lãnh đạo, vừa là người đầy tớ trung thành của nhân dân, Đảng phải chăm lo mối quan hệ giữa Đảng với dân là nhằm mục đích gì?",
    options: ["Xác định vị thế cầm quyền của Đảng","Xác định phương thức cầm quyền của Đảng","Xác định năng lực cầm quyền của Đảng","Xác định tính chất cầm quyền của Đảng"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q64",
    question: "Đề cập đến vấn đề dân tộc thuộc địa, khác với Mác và Lênin, Hồ Chí Minh bàn nhiều về cuộc đấu tranh nào:",
    options: ["Chống chủ nghĩa phát xít, giải phóng giai cấp","Chống địa chủ phong kiến, giải phóng cho nông dân","Chống chủ nghĩa thực dân, đấu tranh giải phóng dân tộc ở thuộc địa","Chống chủ nghĩa tư bản, giải phóng cho giai cấp"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q65",
    question: "Đâu là quan điểm của Hồ Chí Minh về văn hoá?",
    options: ["Theo Hồ Chí Minh, văn hoá không thụ động, ngồi chờ cho kinh tế phát triển. Phát triển văn hoá tạo điều kiện thúc đẩy phát triển kinh tế","Theo Hồ Chí Minh, văn hoá không thụ động, ngồi chờ cho kinh tế phát triển. Phát triển văn hoá tạo điều kiện thúc đẩy phát triển xã hội","Theo Hồ Chí Minh, văn hoá không thụ động, ngồi chờ cho kinh tế phát triển. Phát triển văn hoá tạo điều kiện thúc đẩy phát triển chính trị","Theo Hồ Chí Minh, văn hoá không thụ động, ngồi chờ cho kinh tế phát triển. Phát triển văn hoá tạo điều kiện thúc đẩy phát triển thiết chế pháp luật"],
    correctAnswer: [0],
    explanation: "Chi mới fix",
    points: 10
  },
  {
    id: "q66",
    question: "Hồ Chí Minh cho rằng thầy giáo, cô giáo trong chế độ ta cần góp phần vào công cuộc nào?",
    options: ["Công cuộc xây dựng CNXH","Công cuộc kháng chiến chống Mỹ cứu nước","Công cuộc xây dựng xã hội mới","Kháng chiến chống Pháp"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q67",
    question: "Hồ Chí Minh ví chủ nghĩa dân tộc như điều gì?",
    options: ["Mùa xuân của xã hội","Động lực lớn của đất nước","Nền tảng tư tưởng của Đảng","Mục tiêu cần phải gạt bỏ"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q68",
    question: "Theo Hồ Chí Minh, hòa bình là phương pháp cách mạng:",
    options: ["Không hiệu quả","Rất nhân văn","Không cần thiết"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q69",
    question: "Chọn phương án đúng nhất theo tư tưởng Hồ Chí Minh: Chủ nghĩa thực dân là kẻ thù của ai?",
    options: ["Các dân tộc thuộc địa","Giai cấp công nhân","Giai cấp nông dân","Các dân tộc thuộc địa, giai cấp công nhân và nhân dân lao động toàn thế giới"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q70",
    question: "Đâu không phải là một ý nghĩa của giải phóng dân tộc theo Hồ Chí Minh?",
    options: ["Đánh đổ ách áp bức, thống trị của đế quốc, thực dân giành độc lập dân tộc","Giành độc lập dân tộc, hình thành nhà nước dân tộc độc lập","Tự do lựa chọn con đường phát triển của dân tộc phù hợp với xu thế phát triển của thời đại","Giành ruộng đất về cho nông dân, đảm bảo quyền thống trị của công nông trong chính quyền"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q71",
    question: "Theo Hồ Chí Minh, nguyên tắc hiệp thương dân chủ đòi hỏi tất cả mọi vấn đề của Mặt trận đều phải được đem ra cho tất cả các thành viên cùng nhau bàn bạc công khai, để đi đến nhất trí, loại trừ mọi sự áp đặt hay còn vấn đề nào khác nữa?",
    options: ["Dân chủ hình thức","Dân chủ tự nguyện","Chuyên quyền độc đoán","Không dân chủ"],
    correctAnswer: [0],
    explanation: "Nguyên tắc xây dựng mặt trận => hiệp thương dân chủ",
    points: 10
  },
  {
    id: "q72",
    question: "Điều kiện thực hiện khối đại đoàn kết từ tư tưởng Hồ Chí Minh về khối đại đoàn kết dân tộc?",
    options: ["Truyền thống yêu thiên nhiên","Truyền thống yêu con người","Truyền thống yêu nước, nhân ái, tinh thần cố kết cộng đồng","Truyền thống yêu hòa bình"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q73",
    question: "Đối với Hồ Chí Minh, toàn dân tộc chỉ trở thành lực lượng to lớn, có sức mạnh vô địch khi được tập hợp, tổ chức lại thành một khối vững chắc, được giác ngộ về mục tiêu chiến đấu chung và hoạt động theo:",
    options: ["Một Đảng chính trị đúng đắn","Một đường lối chính trị đúng đắn","Một tổ chức chính trị đúng đắn"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q74",
    question: "Hồ Chí Minh cho rằng công tác cán bộ cần chú ý:",
    options: ["Hiểu và đánh giá đúng đảng viên","Hiểu và đánh giá đúng cán bộ","Hiểu và đánh giá đúng quần chúng"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q75",
    question: "Năm 1946 Hồ Chí Minh ví chính sách đối với Pháp sau khi giành độc lập như chính sách gì?",
    options: ["Tạm hòa","Câu Tiễn","Tạm thời","Thân thiện và hòa bình"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q76",
    question: "Mục đích chính để Hồ Chí Minh muốn ra nước ngoài là gì?",
    options: ["Xem nước Pháp và các nước khác làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta","Xem nước Pháp và các nước khác dân chủ như thế nào, tôi sẽ trở về giúp đồng bào chúng ta","Xem nước Pháp và các nước khác văn minh như thế nào, tôi sẽ trở về giúp đồng bào chúng ta","Xem nước Pháp và các nước khác tiến bộ như thế nào, tôi sẽ trở về giúp đồng bào chúng ta"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q77",
    question: "Giai đoạn nào sau đây Hồ Chí Minh bổ sung và hoàn thiện tư tưởng của mình?",
    options: ["1911 đến 1920","1930 đến 1969","1941 đến 1969","1921 đến 1930"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q78",
    question: "Theo Hồ Chí Minh, ưu điểm lớn nhất của chủ nghĩa Tam dân của Tôn Trung Sơn là gì?",
    options: ["Chống phong kiến","Đấu tranh vì tự do, dân chủ","Phù hợp với điều kiện thực tế nước ta","Phù hợp với truyền thống"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q79",
    question: "Theo Hồ Chí Minh, những tiêu cực của đội ngũ cán bộ trong hoạt động của bộ máy nhà nước là:",
    options: ["Đặc quyền, đặc lợi","Tham ô, lãng phí, quan liêu","Tư túng, chia rẽ, kiêu ngạo","Tất cả các phương án"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q80",
    question: "Chọn phương án trả lời đúng nhất theo tư tưởng Hồ Chí Minh về bản chất của nhà nước Việt Nam?",
    options: ["Mang bản chất giai cấp công nhân","Có tính dân tộc, tính nhân dân sâu sắc","Có sự thống nhất bản chất giai cấp công nhân với tính nhân dân và tính dân tộc","Mang tính dân tộc"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q81",
    question: "Theo quan điểm của Đảng Cộng sản Việt Nam tại Đại hội đại biểu toàn quốc lần thứ XI, tư tưởng Hồ Chí Minh là kết quả của sự vận dụng và kế thừa giá trị nào?",
    options: ["Sự vận dụng sáng tạo chủ nghĩa Mác - Lênin trong điều kiện cụ thể của nước ta","Sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta","Sự vận dụng sáng tạo và phát triển chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta","Sự phát triển chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q82",
    question: "Đâu là đáp án chính xác nhất về Đảng theo tư tưởng Hồ Chí Minh?",
    options: ["Một Đảng mà giấu giếm khuyết điểm của mình là một đảng hỏng","Một Đảng mà giấu giếm khuyết điểm của mình là một đảng cần phải xóa bỏ","Một Đảng mà giấu giếm khuyết điểm của mình là một đảng cần phải thay thế","Một Đảng mà giấu giếm khuyết điểm của mình là một đảng cần phải thay đổi"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q83",
    question: "Hồ Chí Minh cho rằng:",
    options: ["Văn hoá là tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự sinh tồn","Văn hoá là tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự sống còn","Văn hoá là tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự trường tồn"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q84",
    question: "Theo Hồ Chí Minh, văn hóa phải làm thế nào để thấm sâu vào tâm lý quốc dân?",
    options: ["Sửa đổi tham nhũng, lười biếng, phù hoa, xa xỉ.","Tăng cường giáo dục nghệ thuật cho nhân dân.","Phát triển kinh tế để nâng cao đời sống văn hóa.","Tổ chức nhiều lễ hội văn hóa truyền thống."],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q85",
    question: "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Nền văn hóa xã hội chủ nghĩa là một nền văn hóa lấy ....... của đồng bào làm cơ sở\".",
    options: ["Tự do","Hạnh phúc","Ấm no","Giàu có"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q86",
    question: "Nội dung cốt lõi của tư tưởng Hồ Chí Minh về mối quan hệ giữa độc lập dân tộc và chủ nghĩa xã hội là gì?",
    options: ["Độc lập dân tộc là cơ sở, tiền đề để tiến lên chủ nghĩa xã hội, chủ nghĩa xã hội là điều kiện để bảo đảm nền độc lập dân tộc vững chắc.","Hồ Chí Minh đã chỉ ra độc lập dân tộc là bao gồm cả nội dung dân tộc và dân chủ.","Độc lập dân tộc mà dân vẫn không có cơm ăn, áo mặc, không được học hành thì độc lập đó không có ý nghĩa gì.","Cuộc cách mạng giải phóng dân tộc ở Việt Nam ngay từ đầu đã được Hồ Chí Minh xác định đi theo con đường cách mạng vô sản."],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q87",
    question: "Hồ Chí Minh cho rằng giải phóng dân tộc có vai trò như thế nào?",
    options: ["Giải phóng dân tộc tạo tiền đề để giải phóng giai cấp","Giải phóng dân tộc tạo tiền đề để giải phóng nhân loại","Giải phóng dân tộc tạo tiền đề để giải phóng người lao động","Giải phóng dân tộc tạo tiền đề giải phóng xã hội"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q88",
    question: "Hồ Chí Minh lưu ý Đảng về vấn đề đại đoàn kết toàn dân tộc thông qua luận điểm nào?",
    options: ["Đoàn kết không chỉ nằm ở chủ trương, đường lối, chính sách mà phải biến thành sức mạnh","Đoàn kết không chỉ nằm ở chủ trương, đường lối, chính sách mà phải biến thành tư tưởng","Đoàn kết không chỉ nằm ở chủ trương, đường lối mà phải biến thành chính sách","Đoàn kết không chỉ nằm ở khẩu hiệu, tuyên truyền mà phải là tư duy, tư tưởng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q89",
    question: "Hồ Chí Minh mất bao nhiêu năm bôn ba nước ngoài để tìm đường cứu nước?",
    options: ["10 năm","25 năm","30 năm","35 năm"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q90",
    question: "Hồ Chí Minh quan tâm mối quan hệ với Trung Quốc trên tinh thần nào?",
    options: ["\"Vừa là đồng chí, vừa là đồng đội\"","\"Vừa là đồng đội, vừa là đồng chí\".","\"Vừa là đồng chí, vừa là anh em\".","Vừa là đồng chí, vừa là tình thân"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q91",
    question: "Nội dung nào không đúng với tư tưởng Hồ Chí Minh trong việc thực thi Hiến pháp và pháp luật?",
    options: ["Pháp luật phải đúng và phải đủ","Tăng cường tuyên truyền, giáo dục pháp luật cho người cao tuổi","Người thực thi luật pháp phải thật sự công tâm và nghiêm minh","Bất kỳ ai vi phạm pháp luật cũng đều bị trừng trị nghiêm khắc, đúng người, đúng tội."],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q92",
    question: "Đối với Hồ Chí Minh, phải biết \"dễ (1...) lần không dân cũng chịu, khó (2....) lần dân liệu cũng xong\". Đâu là từ còn thiếu trong các dấu ...?",
    options: ["1.vạn 2.trăm","1.trăm 2.vạn","1.nghìn 2. triệu","1.triệu 2.nghìn"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q93",
    question: "Đâu là chức năng của văn hóa theo tư tưởng Hồ Chí Minh?",
    options: ["Bồi dưỡng những phẩm chất tốt đẹp và phong cách lành mạnh cho con người","Bồi dưỡng những phẩm chất tốt đẹp và phong cách lành mạnh cho xã hội","Bồi dưỡng những phẩm chất tốt đẹp và phong cách lành mạnh cho nhân dân"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q94",
    question: "Hồ Chí Minh khẳng định: \"Chính vì Đảng Lao động Việt Nam là Đảng của giai cấp công nhân và nhân dân lao động, cho nên nó phải là Đảng của dân tộc Việt Nam\". Luận điểm này được trích trong tác phẩm nào?",
    options: ["Tuyên ngôn độc lập","Lời kêu gọi toàn quốc kháng chiến","Báo cáo chính trị tại Đại hội Đại biểu toàn quốc lần thứ II của Đảng","Đường Cách mệnh"],
    correctAnswer: [2],
    explanation: "Ghi chú: Đảng Lao động Việt Nam là Đảng của ai?",
    points: 10
  },
  {
    id: "q95",
    question: "Tác phẩm Đời sống mới được Hồ Chí Minh công bố năm nào?",
    options: ["1930","1945","1947","1951"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q96",
    question: "Nguyên tắc nào sau đây là nguyên tắc quan trọng bậc nhất trong xây dựng một nền đạo đức mới theo tư tưởng Hồ Chí Minh?",
    options: ["Nói đi đôi với làm","Nêu gương về đạo đức","Xây đi đôi với chống","Tu dưỡng đạo đức suốt đời"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q97",
    question: "Quá độ lên chủ nghĩa xã hội theo Hồ Chí Minh là gì?",
    options: ["Kế thừa những giá trị của xã hội cũ","Xóa bỏ một vài giá trị của xã hội cũ","Xóa bỏ toàn bộ những thành tựu của xã hội cũ","Kế thừa toàn bộ những gì xã hội cũ để lại"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q98",
    question: "Các bài giảng của Nguyễn Ái Quốc tại các lớp huấn luyện cán bộ được Bộ tuyên truyền của Hội liên hiệp các dân tộc bị áp bức tập hợp lại và xuất bản thành tác phẩm gì?",
    options: ["Bản án chế độ thực dân Pháp","Lênin và Phương Đông","Con Rồng tre","Đường Kách Mệnh"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q99",
    question: "Quan điểm: \"Đảng Cộng sản Việt Nam lấy chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động\" được nêu lần đầu tiên trong văn kiện của Đại hội đại biểu toàn quốc lần thứ mấy của Đảng?",
    options: ["Đại hội đại biểu toàn quốc lần thứ VI","Đại hội đại biểu toàn quốc lần thứ VII","Đại hội đại biểu toàn quốc lần thứ IX","Đại hội đại biểu toàn quốc lần thứ XI"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q100",
    question: "Trong tư tưởng Hồ Chí Minh, quản lý nhà nước là quản lý bằng bộ máy, bằng pháp luật và bằng nhiều biện pháp khác nhau trong đó quan trọng bậc nhất là gì?",
    options: ["Hiến pháp","Quyền lực","Mệnh lệnh","Hình phạt"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q101",
    question: "Trong những nhiệm vụ cấp bách của Nhà nước Việt Nam Dân chủ cộng hòa, khi nói về vấn đề thứ hai - nạn dốt, Hồ Chí Minh đã đề nghị mở một chiến dịch gì?",
    options: ["Một chiến dịch xây dựng nền văn hóa mới","Một chiến dịch để chống nạn mù chữ","Một chiến dịch tuyên truyền nền giáo dục mới","Một chiến dịch xây dựng đời sống mới"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q102",
    question: "Hồ Chí Minh khẳng định chủ nghĩa dân tộc là một động lực lớn ở các nước đang đấu tranh giành độc lập dân tộc. Đó là chủ nghĩa dân tộc gì?",
    options: ["Sô vanh nước lớn","Trong sáng","Hẹp hòi","Chân chính"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q103",
    question: "Theo Hồ Chí Minh, mục tiêu của chủ nghĩa xã hội gồm những nội dung nào sau đây?",
    options: ["Chính trị, kinh tế, văn hóa xã hội và dân chủ","Chính trị, dân chủ, kinh tế, tiến bộ","Chính trị, kinh tế, văn hóa xã hội, con người","Chính trị, kinh tế, văn hóa, tiến bộ"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q104",
    question: "Theo quan điểm Hồ Chí Minh, khái quát dân chủ có ý nghĩa là gì?",
    options: ["Dân là chủ và dân làm chủ","Dân là người chủ","Dân làm quản lý","Dân làm người chủ"],
    correctAnswer: [0],
    explanation: "Ghi chú: \"dân là chủ\" để đề cập đến điều gì => vị thế của dân",
    points: 10
  },
  {
    id: "q105",
    question: "Theo Hồ Chí Minh, đâu là mục tiêu của chủ nghĩa xã hội?",
    options: ["Không ngừng phát triển kinh tế","Phát triển mạnh mẽ khoa học - kỹ thuật","Không ngừng cải thiện và nâng cao đời sống của nhân dân lao động","Một nền kinh tế hiện đại, có mức tăng trưởng cao"],
    correctAnswer: [2],
    explanation: "Ghi chú: chủ nghĩa xã hội phải do => Nhân dân lao động làm chủ",
    points: 10
  },
  {
    id: "q106",
    question: "Theo Hồ Chí Minh, nội dung nào được coi là nhiệm vụ trung tâm của thời kỳ quá độ lên chủ nghĩa xã hội?",
    options: ["Xây dựng thành công chủ nghĩa xã hội","Phát triển kinh tế và văn hóa","Công nghiệp hóa","Phát triển kinh tế"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q107",
    question: "Khi so sánh về bản chất của Nhật và Pháp, Hồ chí Minh nhận định như thế nào?",
    options: ["Chẳng khác gì nhau","Khác nhau","Rất đặc biệt","Giống nhau"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q108",
    question: "Theo Hồ Chí Minh, đại đoàn kết dân tộc phải luôn được nhận thức là vấn đề sống còn, quyết định:",
    options: ["Lực lượng của cách mạng","Đích đến của cách mạng","Thành bại của cách mạng"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q109",
    question: "Hồ Chí Minh xác định huy hiệu của thanh niên là:",
    options: ["Tay cầm cờ đỏ sao vàng tiến lên","Tay cầm súng tiến lên","Tay cầm khẩu hiệu tiến lên"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q110",
    question: "Hồ Chí Minh lưu ý xây dựng nhà nước có hiệu lực pháp lý mạnh mẽ phải:",
    options: ["Xây dựng đội ngũ cán bộ, công chức đủ đức, tài","Xây dựng đội ngũ cán bộ, công chức đủ phẩm chất","Xây dựng đội ngũ cán bộ, công chức đủ giỏi"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q111",
    question: "Theo Hồ Chí Minh, để lãnh đạo mặt trận, Đảng phải có cái gì?",
    options: ["Có chính sách mặt trận đúng đắn","Có chính sách đoàn kết đúng đắn","Có chính sách tập hợp đúng đắn","Có chính sách ngoại giao đúng đắn"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q112",
    question: "Đại đoàn kết dân tộc được xác định là nhiệm vụ nào trong những nhiệm vụ dưới đây của Đảng và của toàn dân tộc ta?",
    options: ["Cơ bản của Đảng và của dân tộc","Hàng đầu của Đảng và của dân tộc","Quan trọng của Đảng và của dân tộc ta","Thiết yếu"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q113",
    question: "Theo Hồ Chí Minh, bon đế quốc thực dân tuyên truyền khẩu hiệu \"độc lập tự do\" thực chất là che đậy bản chất gì?",
    options: ["\"ăn cướp\" và \"giết người\"","\"ăn cắp\" và \"hại dân\"","\"bóc lột\" và \"đàn áp\"","\"cướp bóc\" và \"đàn áp\""],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q114",
    question: "Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa quốc tế. Quan điểm trên thuộc nội dung gì trong trong tư tưởng Hồ Chí Minh?",
    options: ["Tư tưởng Hồ Chí Minh về vấn đề dân tộc","Tư tưởng Hồ Chí Minh về vấn đề giai cấp","Tư tưởng Hồ Chí Minh về đoàn kết quốc tế","Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội"],
    correctAnswer: [0],
    explanation: "Vấn đề dân tộc trong tư tưởng Hồ Chí Minh là sự kết hợp nhuần nhuyễn:",
    points: 10
  },
  {
    id: "q115",
    question: "Theo Hồ Chí Minh, nhân dân lao động làm chủ Nhà nước thì dẫn đến một hệ quả là nhân dân có quyền:",
    options: ["Được biết tất cả công việc của nhà nước","Kiểm soát Nhà nước","Được tham vấn những sự kiện quan trọng trong đất nước","Được bãi miễn chính phủ trong nước"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q116",
    question: "Trong xây dựng chủ nghĩa xã hội, Hồ Chí Minh chủ trương đối xử với giai cấp tư sản dân tộc như thế nào?",
    options: ["Xóa bỏ quyền sở hữu về tư liệu sản xuất của họ","Không xóa bỏ quyền sở hữu tư liệu sản xuất của họ","Đánh đổ họ với tư cách là giai cấp bóc lột","Phát triển giai cấp này cả về số lượng và chất lượng"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q117",
    question: "Hãy điền từ còn thiếu trong câu dưới đây? Theo Hồ Chí Minh, \"Muốn xây dựng chủ nghĩa xã hội, trước hết cần có...\"",
    options: ["con người xã hội chủ nghĩa\"","khoa học kỹ thuật tiên tiến\"","công, nông nghiệp hiện đại\"","nền kinh tế phát triển\""],
    correctAnswer: [0],
    explanation: "Con người xã hội chủ nghĩa theo Hồ Chí Minh đó là => Có tư tưởng và tác phong xã hội chủ nghĩa",
    points: 10
  },
  {
    id: "q118",
    question: "Theo tư tưởng Hồ Chí Minh, độc lập, tự do được hiểu là gì?",
    options: ["Quyền thiêng liêng của tất cả các dân tộc","Quyền thiêng liêng và bất khả xâm phạm của tất cả các dân tộc","Quyền bất khả xâm phạm của tất cả các dân tộc","Đặc quyền của mỗi một dân tộc"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q119",
    question: "Theo Hồ Chí Minh, nội dung cốt lõi của vấn đề dân tộc thuộc địa là gì?",
    options: ["Tự do, dân chủ","Độc lập, tự do","Người cày có ruộng","Quyền con người"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q120",
    question: "Hồ Chí Minh giải quyết như thế nào về mối quan hệ giữa vấn đề giai cấp và dân tộc?",
    options: ["Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa quốc tế","Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa nhân văn","Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa nhân đạo","Phải kết hợp nhuần nhuyễn giữa giai cấp với dân tộc, chủ nghĩa xã hội và độc lập dân tộc, chủ nghĩa yêu nước và chủ nghĩa quốc tế đại đồng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q121",
    question: "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc cần được tiến hành như thế nào?",
    options: ["Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc","Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản thế giới","Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng thuộc địa","Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng tư sản"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q122",
    question: "Theo Hồ Chí Minh, mối quan hệ giữa văn hóa với kinh tế và chính trị như thế nào?",
    options: ["Văn hóa đứng ngoài kinh tế và chính trị","Văn hóa đứng ngoài chính trị","Văn hóa đứng ngoài kinh tế","Văn hóa không thể đứng ngoài mà phải ở trong kinh tế và chính trị"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q123",
    question: "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn giành thắng lợi, cần tập hợp những lực lượng nào?",
    options: ["Công nhân","Công nhân, nông dân, trí thức","Nông dân","Toàn dân tộc"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q124",
    question: "So với các nền dân chủ trước đây, dân chủ xã hội chủ nghĩa có điểm gì khác biệt cơ bản? (So với các nền dân chủ trước đây, dân chủ xã hội chủ nghĩa có điểm khác biệt cơ bản nào?)",
    options: ["Là nền dân chủ thuần túy","Không còn mang tính giai cấp","Là nền dân chủ phi lịch sử","Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q125",
    question: "Theo Hồ Chí Minh, cách mạng XHCN phải tiến hành đồng thời với:",
    options: ["Cách mạng tư sản","Cách mạng dân tộc dân chủ nhân dân","Cách mạng văn hóa"],
    correctAnswer: [1],
    explanation: "Phải tiến hành đồng thời với cuộc cách mạng nào?",
    points: 10
  },
  {
    id: "q126",
    question: "Theo tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam là đảng của giai cấp công nhân, đồng thời là đảng của nhân dân lao động và của cả dân tộc Việt Nam nhằm xác định điều gì?",
    options: ["Xác định vị thế cầm quyền của Đảng","Xác định năng lực của Đảng","Xác định nguồn gốc ra đời của Đảng","Xác định bản chất của Đảng"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q127",
    question: "Đâu là quan điểm của Hồ Chí Minh về bản chất con người?",
    options: ["Bản chất con người mang tính xã hội","Bản chất con người mang tính nhân dân","Bản chất con người mang tính dân chủ","Bản chất con người mang tính kế thừa"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q128",
    question: "Đoạn viết dưới đây ghi tóm tắt lời giải thích của Hồ Chí Minh về cần, kiệm, liêm, chính. Hỏi: Điểm tóm tắt nào đã bị ghi nhầm nội dung?",
    options: ["Cần là lao động cần cù, siêng năng, lao động có kế hoạch, sáng tạo và có năng suất lao động cao...","Kiệm là không xa xỉ, không hoang phí, không bừa bãi...","Liêm là luôn tôn trọng của công và của dân, không tham tiền của, địa vị, danh tiếng.","Chính là trong sạch, không tham lam đồng xu, hạt thóc của nhà nước, của dân."],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q129",
    question: "Theo Hồ Chí Minh, \"nọc độc và sức sống của con rắn độc tư bản chủ nghĩa\" đang tập trung ở đâu?",
    options: ["Ở châu Phi","Ở chính quốc","Ở châu Á","Ở thuộc địa"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q130",
    question: "Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam mang bản chất gì?",
    options: ["Mang bản chất giai cấp công nhân, dân tộc","Mang bản chất giai cấp công nhân, nhân dân lao động","Mang bản chất giai cấp công nhân, con người","Mang bản chất giai cấp công nhân"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q131",
    question: "Đâu là bản chất con người theo tư tưởng Hồ Chí Minh?",
    options: ["Sản phẩm của sự tiến hóa tự nhiên","Tổng hợp các quan hệ xã hội từ rộng đến hẹp","Mang bản chất giai cấp công nhân","Sự thống nhất cả hai mặt tự nhiên và xã hội"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q132",
    question: "Cách mạng giải phóng dân tộc muốn giành được thắng lợi cần phải:",
    options: ["Dựa vào sự thắng lợi của cách mạng ở các nước thuộc địa khác","Dựa vào thắng lợi của cách mạng vô sản ở chính quốc","Tiến hành chủ động và sáng tạo","Tiến hành sau khi cách mạng vô sản ở chính quốc giành thắng lợi"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q133",
    question: "Trong luận điểm về cách mạng giải phóng dân tộc, chỉ ra luận điểm sai về con đường, biện pháp, lực lượng và phương pháp cách mạng của Hồ Chí Minh?",
    options: ["Cách mạng giải phóng dân tộc muốn thắng lợi phải đi theo con đường cách mạng vô sản","Cách mạng giải phóng dân tộc, trong điều kiện của Việt Nam, muốn thắng lợi phải do Đảng Cộng sản lãnh đạo","Cách mạng giải phóng dân tộc phải dựa trên lực lượng đại đoàn kết dân tộc, lấy liên minh công - nông- trí làm nền tảng","Cách mạng giải phóng dân tộc cần chủ động, sáng tạo, có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q134",
    question: "Theo Hồ Chí Minh, mục đích của chủ nghĩa xã hội là gì?",
    options: ["Xây dựng nền kinh tế hiện đại, có sức tăng trưởng cao.","Không ngừng nâng cao đời sống vật chất và tinh thần của nhân dân","Phát triển mạnh mẽ khoa học - kỹ thuật","Bảo đảm quyền làm chủ của nhân dân lao động"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q135",
    question: "Khi nói về nghĩa rộng của văn hóa, Hồ Chí Minh đã đề cập vì lí do gì mà con người sáng tạo ra các giá trị của văn hóa?",
    options: ["Vì lẽ sinh tồn và mục đích của cuộc sống","Vì sự phân tầng chính trị của xã hội","Để nâng cao chất lượng giáo dục","Vì để thỏa mãn những đời sống tinh thần"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q136",
    question: "Hồ Chí Minh vạch ra lực lượng cách mạng giải phóng dân tộc:",
    options: ["Cách mạng là sự nghiệp của quần chúng bị áp bức","Cách mạng là sự nghiệp của công nông","Cách mạng là sự nghiệp của mọi người dân"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q137",
    question: "Hồ Chí Minh cho rằng giai cấp địa chủ ở Việt Nam:",
    options: ["Là giai cấp phản động","Là giai cấp tiên tiến","Có thể lợi dụng","Cần phải loại bỏ"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q138",
    question: "Hãy chọn phương án đúng nhất: Theo Hồ Chí Minh, mục đích cơ bản của đoàn kết quốc tế là gì?",
    options: ["Tranh thủ sự viện trợ của các nước bên ngoài","Học hỏi và trao đổi kinh nghiệm sản xuất","Hợp tác giáo dục và giao lưu văn hóa","Tạo sức mạnh tổng hợp cho cách mạng Việt Nam và góp phần cùng với nhân dân thế giới thực hiện thắng lợi các mục tiêu cách mạng"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q139",
    question: "Lựa chọn nào là đúng nhất theo tư tưởng Hồ Chí Minh, động lực của chủ nghĩa xã hội gồm:",
    options: ["Động lực tinh thần và bên ngoài","Động lực vật chất và bên trong","Động lực vật chất và tinh thần, nội sinh và ngoại sinh","Động lực tinh thần và nội sinh"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q140",
    question: "Mặt trận Liên Việt được thành lập vào thời gian nào?",
    options: ["1941","1945","1951","1960"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q141",
    question: "Theo Hồ Chí Minh, Mặt trận dân tộc thống nhất phải được xây dựng trên nền tảng khối liên minh công - nông - trí thức, đặt dưới:",
    options: ["Sự lãnh đạo của Đảng","Sự lãnh đạo của tổ chức","Sự lãnh đạo của chính quyền"],
    correctAnswer: [0],
    explanation: "Mặt trận dân tộc thống nhất trong tư tưởng Hồ Chí Minh",
    points: 10
  },
  {
    id: "q142",
    question: "Trong tư tưởng Hồ Chí Minh, Mặt trận dân tộc thống nhất càng rộng rãi, sức mạnh của khối liên minh công nông trí thức càng như thế nào?",
    options: ["Suy yếu và ngược lại","Được tăng cường và ngược lại","Gắn kết và ngược lại","Thu hẹp và ngược lại"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q143",
    question: "Theo Hồ Chí Minh, muốn phát huy tinh thần đoàn kết Đảng phải:",
    options: ["Có chính sách mặt trận dân tộc đúng đắn","Có chính sách đúng đắn thu hút quần chúng nhân dân","Có chính sách dân chủ đúng đắn"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q144",
    question: "Theo quan điểm của Hồ Chí Minh, tổ chức nào sau đây có nhiệm vụ thực hiện sự khối đại đoàn kết toàn dân tộc?",
    options: ["Mặt trận dân tộc thống nhất","Mặt trận dân chủ","Mặt trận nhân dân","Mặt trận Việt Minh"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q145",
    question: "Theo quan điểm của Hồ Chí Minh đối với một quốc gia, cần, kiệm, liêm, chính là thước đo sự giàu có về vật chất, vững mạnh về tinh thần. Quan điểm đó thể hiện điều gì?",
    options: ["Văn hiến lâu đời","Văn hóa cao","Sự văn minh tiến bộ","Truyền thống tốt đẹp"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q146",
    question: "Trong Mặt trận dân tộc thống nhất, Đảng Cộng sản là:",
    options: ["Thành viên của Mặt trận dân tộc thống nhất","Lực lượng lãnh đạo Mặt trận dân tộc thống nhất","Vừa là thành viên, vừa là lực lượng lãnh đạo Mặt trận dân tộc thống nhất","Đại biểu của giai cấp công nhân trong Mặt trận dân tộc thống nhất"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q147",
    question: "Từ nào còn thiếu trong câu nói sau của Hồ Chí Minh? \"Ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta (...) với họ\"",
    options: ["Hợp tác","Đoàn kết","Bắt tay","Chia sẻ"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q148",
    question: "Đối tượng chủ yếu của tư tưởng Hồ Chí Minh là gì? (Đối tượng chủ yếu của tư tưởng Hồ Chí Minh là:)",
    options: ["Cách mạng xã hội chủ nghĩa","Cách mạng Việt Nam","Cách mạng Đông Dương","Cách mạng dân tộc dân chủ nhân dân"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q149",
    question: "Theo Hồ Chí Minh, muốn tăng cường đoàn kết quốc tế trong cuộc đấu tranh vì mục tiêu chung, các Đảng Cộng sản phải tiến hành có hiệu quả việc giáo dục chủ nghĩa yêu nước chân chính kết hợp với điều gì? (Đối với phong trào cộng sản và công nhân quốc tế, Hồ Chí Minh giương cao ngọn cờ độc lập dân tộc gắn liền với chủ nghĩa xã hội, thực hiện đoàn kết thống nhất trên nền tảng của chủ nghĩa Mác-Lênin và yếu tố nào?)",
    options: ["Chủ nghĩa yêu nước, có lý, có tình","Chủ nghĩa quốc tế vô sản, có tình, có nghĩa","Chủ nghĩa quốc tế vô sản, có lý, có tình","Chủ nghĩa yêu nước, có tình, có nghĩa"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q150",
    question: "Để có thể tận dụng thời cơ, vượt qua thách thức, trên cơ sở nhận thức và vận dụng sáng tạo tư tưởng Hồ Chí Minh, cần tập trung vào vấn đề nào?",
    options: ["Kiên định cách mạng","Kiên định phương pháp cách mạng","Kiên định theo chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh","Kiên định con đường xây dựng đất nước"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q151",
    question: "Đâu là câu trả lời chính xác và đầy đủ nhất theo tư tưởng Hồ Chí Minh?",
    options: ["Đảng Cộng sản Việt Nam là một thành viên của Mặt trận dân tộc thống nhất","Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Mặt trận","Đảng Cộng sản Việt Nam vừa là thành viên, vừa là lực lượng lãnh đạo Mặt trận","Đảng Cộng sản Việt Nam không là thành viên của Mặt trận dân tộc thống nhất"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q152",
    question: "Nguyễn Ái Quốc vào Đảng Xã hội Pháp năm nào?",
    options: ["1917","1918","1919","1920"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q153",
    question: "Chủ trương cầu ngoại viện, dùng bạo lực để khôi phục độc lập dân tộc là đường lối của nhà yêu nước nào?",
    options: ["Phan Bội Châu","Phan Châu Trinh","Hồ Chí Minh","Hoàng Hoa Thám"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q154",
    question: "Hồ Chí Minh nhấn mạnh mục đích của Đảng Lao động Việt Nam là:",
    options: ["Liên kết toàn dân, chống giặc ngoại xâm","Đoàn kết đoàn kết đại đoàn kết","Đoàn kết toàn dân, phụng sự tổ quốc","Đoàn kết dân tộc, phụng sự tổ quốc"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q155",
    question: "Nguyễn Ái Quốc đọc luận cương của Lênin vào thời gian nào?",
    options: ["7/1917","7/1918","7/1919","7/1920"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q156",
    question: "Đâu là quan điểm của Hồ Chí Minh trong các quan điểm sau?",
    options: ["Trong giai đoạn thuộc địa, giải phóng chính trị - xã hội là trước hết, mở đường để giải phóng văn hoá","Trong giai đoạn thuộc địa, giải phóng chính trị - xã hội là trước hết, mở đường để giải phóng nhân loại","Trong giai đoạn thuộc địa, giải phóng chính trị - xã hội là trước hết, mở đường để giải phóng dân tộc","Trong giai đoạn thuộc địa, giải phóng chính trị - xã hội là trước hết, mở đường để giải phóng các dân tộc anh em"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q157",
    question: "Đâu là một nội dung cơ bản trong Bản Yêu sách của nhân dân An Nam mà Nguyễn Ái Quốc gửi tới Hội nghị Vécxay (Pháp)?",
    options: ["Đòi tự do, dân chủ tối thiểu cho nhân dân","Đòi giải phóng dân tộc","Đòi tự trị dân tộc","Đòi độc lập dân tộc"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q158",
    question: "Theo tư tưởng Hồ Chí Minh, muốn thức tỉnh một dân tộc, trước hết phải thức tỉnh bộ phận dân cư nào?",
    options: ["Công nhân và nông dân","Trí thức","Thiếu niên, nhi đồng","Thanh niên"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q159",
    question: "Trong các luận điểm sau, luận điểm nào là của Hồ Chí Minh?",
    options: ["Vô sản tất cả các nước liên hiệp lại","Vô sản tất cả các nước, đoàn kết lại","Vô sản tất cả các nước và các dân tộc bị áp bức đoàn kết lại","Lao động tất cả các nước, đoàn kết lại"],
    correctAnswer: [2],
    explanation: "Hồ Chí Minh là người đấu tranh đòi quyền độc lập cho => Dân tộc Việt Nam và tất cả các dân tộc bị áp bức trên thế giới",
    points: 10
  },
  {
    id: "q160",
    question: "Nguyễn Ái Quốc thành lập \"Hội Việt Nam cách mạng thanh niên\" vào thời gian nào?",
    options: ["Tháng 5/1926","Tháng 6/1925","Tháng 5/1927","Tháng 5/1925"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q161",
    question: "Theo Hồ Chí Minh, cuộc cách mạng nào đầu thế kỷ XX đã làm \"thức tỉnh các dân tộc châu Á\"?",
    options: ["Cách mạng Trung Quốc","Cách mạng Ấn Độ","Cách mạng tháng Mười Nga","Cách mạng Pháp"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q162",
    question: "Theo Hồ Chí Minh, đường lối của nhà yêu nước nào còn \"nặng cốt cách phong kiến\"?",
    options: ["Phan Châu Trinh","Phan Bội Châu","Hoàng Hoa Thám","Nguyễn Thái Học"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q163",
    question: "Theo Hồ Chí Minh, tư tưởng, văn hóa phương Tây lấy điều gì làm tiêu chuẩn? Tư tưởng, văn hóa phương Tây lấy:",
    options: ["Cảm tính và khoa học làm tiêu chuẩn","Lý tính và khoa học là tiêu chuẩn","Tư duy và sự phản biện làm tiêu chuẩn","Sự phản biện và lý tính làm tiêu chuẩn"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q164",
    question: "Một trong những nội dung cơ bản của bản Yêu sách gồm tám điểm của Nguyễn Ái Quốc gửi đến Hội nghị Vecxay (Pháp) là gì?",
    options: ["Đòi quyền tự do, dân chủ tối thiểu cho nhân dân","Đòi quyền tự trị của dân tộc","Đòi quyền độc lập dân tộc","Đòi quyền bình đẳng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q165",
    question: "Giải phóng dân tộc theo tư tưởng Hồ Chí Minh, xét về thực chất là:",
    options: ["Đánh đổ ách áp bức, thống trị của đế quốc, thực dân giành độc lập dân tộc","Giành độc lập dân tộc, hình thành nhà nước dân tộc độc lập","Tự do lựa chọn con đường phát triển của dân tộc phù hợp với xu thế phát triển của thời đại","Giành được ruộng đất cho dân cày nghèo, đảm bảo đời sống nông dân ấm no"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q166",
    question: "Theo Hồ Chí Minh, vấn đề cốt lõi của cách mạng giải phóng dân tộc thuộc địa là:",
    options: ["Vấn đề tự do dân chủ","Vấn đề độc lập dân tộc","Vấn đề ruộng đất"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q167",
    question: "Một trong những yêu cầu cơ bản trong nghiên cứu tư tưởng Hồ Chí Minh là:",
    options: ["Đảm bảo thống nhất giữ nguyên tắc tính đảng và tính khoa học","Đảm bảo thống nhất tính thực chứng và duy lý","Đảm bảo thống nhất giữa khoa học và thực tiễn","Đảm bảo tính thực chứng và khoa học"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q168",
    question: "Một trong những giá trị của văn hoá phương Tây được Hồ Chí Minh tiếp thu để hình thành tư tưởng của mình là gì?",
    options: ["Tư tưởng văn hoá dân chủ và cách mạng của cách mạng Pháp và cách mạng Mỹ","Những mặt tích cực của Nho Giáo","Kinh tế chính trị cổ điển Anh","Triết học cổ điển Đức"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q169",
    question: "Theo Hồ Chí Minh, Đảng lãnh đạo Nhà nước bằng các phương thức nào?",
    options: ["Đường lối, chủ trương, chính sách","Qua các tổ chức Đảng, đảng viên trong bộ máy nhà nước","Bằng công tác kiểm tra","Qua các tổ chức tôn giáo, giáo phái"],
    correctAnswer: [0,1,2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q170",
    question: "Con đường quá độ lên chủ nghĩa xã hội ở nước ta được Hồ Chí Minh vạch ra dựa trên:",
    options: ["Chủ nghĩa Mác-Lênin","Chủ nghĩa dân chủ","Sự kết hợp giữa chủ nghĩa Mác-lênin với thực tế Việt Nam"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q171",
    question: "Hồ Chí Minh dạy học ở trường Dục Thanh - Phan Thiết trong khoảng thời gian nào? *(Nguyễn Tất Thành ở Mỹ vào khoảng thời gian nào => 1912-1913, ở Anh => 1913-1917)*",
    options: ["Năm 1909-1910","Năm 1909-1911","Năm 1908-1909","Năm 1910-1911"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q172",
    question: "Đâu là đáp án sai khi nói về nguồn gốc tư tưởng đạo đức của Hồ Chí Minh?",
    options: ["Kế thừa tư tưởng đạo đức phương Đông và tinh hoa văn hóa nhân loại","Đạo đức từ trên trời sa xuống","Truyền thống đạo đức của dân tộc Việt Nam","Tư tưởng đạo đức và những tấm gương đạo đức của Mác, Ăngghen, Lênin"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q173",
    question: "Khái niệm tư tưởng Hồ Chí Minh mà Đại hội IX (2001) nêu lên KHÔNG bao gồm nội dung nào sau đây?",
    options: ["Bản chất cách mạng và khoa học của tư tưởng Hồ Chí Minh","Nguồn gốc tư tưởng, lý luận của tư tưởng Hồ Chí Minh","Nội dung tư tưởng Hồ Chí Minh","Kết cấu tư tưởng Hồ Chí Minh"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q174",
    question: "Chọn phương án trả lời đúng với một trong những giai đoạn hình thành và phát triển tư tưởng Hồ Chí Minh? *(Tư tưởng Hồ Chí Minh về cách mạng Việt Nam được hình thành về cơ bản trong thời kỳ nào? / Giai đoạn nào hình thành cơ bản tư tưởng Hồ Chí Minh về cách mạng Việt Nam?)*",
    options: ["Từ năm 1890 - 1911: Thời kỳ nghiên cứu, khảo sát thực tế, đến với chủ nghĩa Mác - Lênin","Từ năm 1921 - 1930: Thời kỳ hình thành cơ bản tư tưởng về con đường cách mạng Việt Nam","Từ năm 1911 - 1920: Thời kỳ hình thành tư tưởng yêu nước, chí hướng cứu nước","Từ năm 1890 - 1911: Thời kỳ vượt qua thử thách, kiên trì giữ vững lập trường cách mạng"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q175",
    question: "Nguyễn Ái Quốc đã \"cảm động, phấn khởi, sáng tỏ, tin tưởng... vui mừng đến phát khóc\" khi đọc tác phẩm của ai?",
    options: ["Stalin","Lênin","Mao Trạch Đông","Các Mác"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q176",
    question: "Luận điểm \"mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư\" được Hồ Chí Minh nói đến trong tác phẩm nào? *(Đáp án: Di chúc — cùng với các luận điểm \"Phải giữ gìn Đảng ta thật trong sạch...\", \"Bồi dưỡng thế hệ cách mạng cho đời sau...\", \"Đến ngày thắng lợi, nhân dân ta sẽ xây dựng lại đất nước ta đàng hoàng hơn, to đẹp hơn!\")*",
    options: ["Sửa đổi lối làm việc","Đạo đức cách mạng","Đường Cách mệnh","Di chúc"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q177",
    question: "Trong Di chúc, Hồ Chí Minh xác định: \"Đảng ta là một đảng cầm quyền. Mỗi đảng viên và cán bộ phải thực sự thấm nhuần [...]\". Cụm từ nào còn thiếu trong dấu [...]? *(nếu hỏi Khái niệm \"Đảng cầm quyền\" sử dụng trong tác phẩm nào => Di chúc)*",
    options: ["Đường lối của Đảng","Mục tiêu của Đảng","Đạo đức cách mạng","Nền tảng tư tưởng của Đảng"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q178",
    question: "Trong tư tưởng Hồ Chí Minh pháp quyền nhân nghĩa được hiểu như thế nào? Pháp quyền nhân nghĩa được hiểu là:",
    options: ["Nhà nước phải tôn trọng, đảm bảo thực hiện đầy đủ quyền con người, chăm lo đến lợi ích của mọi người","Nhà nước phải tôn trọng những quyền tự do cá nhân, vì lợi ích của con người","Nhà nước phải đảm bảo tính nhân văn trong pháp luật, quan tâm đến lợi ích mỗi người","Nhà nước phải tôn trọng những quyền tự do cá nhân vì mục đích nhân văn cao cả"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q179",
    question: "\"Luận cương của V.I. Lênin làm cho tôi rất cảm động, phấn khởi, sáng tỏ, tin tưởng biết bao. Tôi vui mừng đến phát khóc lên...\" Nguyễn Ái Quốc nói câu ấy khi đang ở đâu?",
    options: ["Anh","Trung Quốc","Pháp","Liên Xô"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q180",
    question: "Nguồn gốc nào sau đây quyết định nhất tư tưởng Hồ Chí Minh?",
    options: ["Chủ nghĩa Tam dân của Tôn Trung Sơn","Học thuyết Nho giáo của Khổng Tử","Chủ nghĩa Mác Lênin","Tư tưởng của Giêsu"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q181",
    question: "Theo Hồ Chí Minh, dân chủ là tư tưởng phải được tự do. Tự do là đối với mọi vấn đề, mọi người tự do bày tỏ ý kiến của mình, góp phần tìm ra điều gì?",
    options: ["Chân lý","Lý lẽ","Nguyên tắc","Thực tiễn"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q182",
    question: "Theo Hồ Chí Minh, xây dựng khối đại đoàn kết toàn dân phải đứng vững trên lập trường nào?",
    options: ["Lập trường trí thức, ưu tiên phát triển khoa học công nghệ","Lập trường giai cấp công nhân, giải quyết hài hòa mối quan hệ giai cấp - dân tộc","Lập trường giai cấp nông dân, ưu tiên đấu tranh ruộng đất","Lập trường giai cấp tư sản, ưu tiên đấu tranh giai cấp"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q183",
    question: "Điền cụm từ thích hợp vào dấu ba chấm. Theo Nguyễn Ái Quốc \"Công nông là gốc cách mạng, còn học trò, địa chủ nhỏ, nhà buôn nhỏ là... của cách mạng\"? *(\"gốc cách mệnh\" => Công nông)*",
    options: ["Bạn bè","Đồng minh","Liên minh","Bầu bạn"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q184",
    question: "Theo Hồ Chí Minh, xây dựng khối đại đoàn kết toàn dân để tập hợp lực lượng, không được phép bỏ sót một lực lượng nào miễn không là Việt gian, không phản bội lại quyền lợi của dân chúng phải:",
    options: ["Đứng vững trên lập trường nhân dân lao động, giải quyết hài hoà mối quan hệ giai cấp - dân tộc","Đứng vững trên lập trường giai cấp nông dân, giải quyết hài hoà mối quan hệ giai cấp - dân tộc","Đứng vững trên lập trường giai cấp công nhân, giải quyết hài hoà mối quan hệ giai cấp - dân tộc"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q185",
    question: "Theo tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam là Đảng cầm quyền, vì vậy, mỗi cán bộ đảng viên cần phải làm gì? *(Nếu hỏi tiêu chuẩn cán bộ theo tư tưởng Hồ Chí Minh? => Đạo đức cách mạng)*",
    options: ["Hết lòng phụng sự giai cấp công nhân","Ra sức học tập, trau dồi chuyên môn, trình độ","Thực sự thấm nhuần đạo đức cách mạng, cần, kiệm, liêm, chính, chí công vô tư","Xây dựng khối đại đoàn kết dân tộc"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q186",
    question: "Chọn phương án đúng nhất: Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam là:",
    options: ["Đảng của giai cấp công nhân, đồng thời là đảng của dân tộc Việt Nam","Đảng của giai cấp công nhân Việt Nam","Đảng của giai cấp công nhân và nông dân Việt Nam","Đảng của giai cấp công nhân Đông Dương"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q187",
    question: "Quan điểm nào sau đây được xem là đánh giá của Hồ Chí Minh về giá trị của dân chủ?",
    options: ["Dân chủ là của quý báu nhất của nhân dân","Dân chủ là tài sản quý báu nhất của dân quyền","Dân chủ là tài sản của mọi chế độ xã hội","Dân chủ là tài sản vô giá của mọi xã hội không có sự phân chia giai cấp"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q188",
    question: "Theo Hồ Chí Minh, đoàn kết phải căn cứ vào điều gì?",
    options: ["Đấu tranh","Phê bình","Lợi ích chung","Tự do"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q189",
    question: "Trong Di Chúc Hồ Chí Minh viết rằng: *(câu trả lời chính xác nhất trong tác phẩm Di Chúc)*",
    options: ["Đảng phải có kế hoạch tốt để phát triển kinh tế, văn hóa","Đảng phải có kế hoạch tốt để phát triển kinh tế, chính trị","Đảng phải có kế hoạch tốt để phát triển kinh tế, xã hội"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q190",
    question: "Theo Hồ Chí Minh, không phải mọi con người đều trở thành động lực, mà phải là những con người như thế nào?",
    options: ["Được giác ngộ và tổ chức","Có đạo đức","Có năng lực","Có trình độ và hiểu biết"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q191",
    question: "Theo Hồ Chí Minh, cách làm trong xây dựng xã hội mới là: / Theo Hồ Chí Minh, biện pháp cơ bản nhất để xây dựng chủ nghĩa xã hội là gì?",
    options: ["Đem của dân, tài dân, sức dân làm lợi cho dân","Nhà nước phải ban phát từ trên xuống","Phải dựa vào sự giúp đỡ của các nước xã hội chủ nghĩa","Phải tự lực cánh sinh, dựa vào sức mình là chính"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q192",
    question: "Trong Di chúc, khi nói về những người nạn nhân của chế độ xã hội cũ, như trộm cắp, gái điếm, cờ bạc, buôn lậu, v.v., Hồ Chí Minh đã căn dặn Nhà nước phải dùng biện pháp gì để cải tạo, giúp họ trở nên những người lao động lương thiện:",
    options: ["Giáo dục, pháp luật","Răn đe, pháp luật","Nhắc nhở, trừng phạt","Giáo dục, đạo đức"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q193",
    question: "Đâu là lưu ý trong tư tưởng Hồ Chí Minh? Hồ Chí Minh lưu ý:",
    options: ["Đảng cầm quyền, Đảng lãnh đạo để cho dân làm chủ","Đảng cầm quyền, Đảng lãnh đạo để cho dân quản lý","Đảng cầm quyền, Đảng lãnh đạo để cho dân giám sát"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q194",
    question: "Hồ Chí Minh luôn nhấn mạnh việc thực hành dân chủ, mà trước hết là dân chủ trong đâu?",
    options: ["Trong nhân dân","Trong nội bộ Đảng","Trong Nhà nước","Trong giai cấp công nhân"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q195",
    question: "Hồ Chí Minh vạch ra nhiệm vụ hàng đầu của cách mạng dân tộc thuộc địa là gì?",
    options: ["Giải phóng dân tộc","Giải phóng giai cấp","Giải phóng nhân loại","Giải phóng xã hội"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q196",
    question: "Hồ Chí Minh luôn nhấn mạnh thái độ nào sau đây của Đảng viên?",
    options: ["Nêu gương","Dũng cảm","Đoàn kết","Cống hiến"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q197",
    question: "Theo quan điểm của Đảng Cộng sản Việt Nam tại Đại hội đại biểu toàn quốc lần thứ VII, Tư tưởng Hồ Chí Minh là gì?",
    options: ["Tài sản tinh thần quý báu của Đảng và của cả dân tộc","Tài sản tinh thần to lớn của Đảng và dân tộc ta","Tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta","Tài sản tinh thần không gì có thể sánh được của cả dân tộc ta"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q198",
    question: "Theo quan điểm của Đảng Cộng sản Việt Nam, Nhà nước pháp quyền là gì?",
    options: ["Nhà nước tạo ra sự ổn định về chính trị","Tuyển dụng cán bộ nhà nước phải thông qua thi tuyển chặt chẽ","Nhà nước quản lý xã hội bằng pháp luật và làm cho pháp luật có hiệu quả trong thực tế","Khuyến khích nhân dân tham gia vào các công việc của Nhà nước"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q199",
    question: "Theo Hồ Chí Minh đối tượng cơ bản của cách mạng thuộc địa là ai?",
    options: ["Thực dân, đế quốc","Thực dân, tay sai phản động","Thực dân, phong kiến","Thực dân, tư sản"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q200",
    question: "Trong tư tưởng Hồ Chí Minh, lực lượng nào là chủ thể của khối đại đoàn kết dân tộc? *(thực hiện đại đoàn kết dân tộc phải đoàn kết được với ai => Đại đoàn kết toàn dân)*",
    options: ["Công nhân","Toàn thể nhân dân","Nông dân","Không xác định lực lượng chủ thể"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q201",
    question: "Theo tư tưởng Hồ Chí Minh, luận điểm Đảng Cộng sản Việt Nam là sản phẩm của sự kết hợp giữa chủ nghĩa Mác-Lênin với phong trào công nhân và phong trào yêu nước là xác định nội dung nào trong các nội dung sau đây? *(Nếu Đảng Cộng sản Việt Nam ra đời trên cơ sở của những yếu tố nào? => Chủ nghĩa Mác - Lênin, phong trào công nhân, phong trào yêu nước Việt Nam)*",
    options: ["Xác định nhiệm vụ của Đảng","Xác định bản chất của Đảng","Xác định nguồn gốc ra đời của Đảng","Xác định năng lực của Đảng"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q202",
    question: "Theo Hồ Chí Minh, Đảng cộng sản Việt Nam là Đảng như thế nào?",
    options: ["Cầm quyền","Quản lý","Phân quyền","Làm chủ"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q203",
    question: "Điểm đặc sắc nhất trong tư tưởng Hồ Chí Minh về nhà nước pháp quyền là gì?",
    options: ["Kết hợp nhuần nhuyễn cả pháp luật và đạo đức trong quản lý","Đề cao đạo đức trong quản lý xã hội","Đề cao luật pháp trong quản lý xã hội","Đề cao công tác kiểm tra giám sát hoạt động của tổ chức đảng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q204",
    question: "Theo Hồ Chí Minh, Đảng cộng sản Việt Nam là Đảng:",
    options: ["Của xã hội","Của nhân dân lao động và của dân tộc","Của dân, do dân và vì dân"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q205",
    question: "Luận điểm: \"Cách mệnh An Nam cũng là một bộ phận trong cách mệnh thế giới. Ai làm cách mệnh trong thế giới đều là đồng chí của dân An Nam cả\" được trích từ tác phẩm nào của Hồ Chí Minh?",
    options: ["Đông Dương (1923-1924)","Đường Kách mệnh","Bản án chế độ thực dân Pháp","Tuyên ngôn Độc lập"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q206",
    question: "Theo Hồ Chí Minh, để kiểm soát quyền lực nhà nước trước tiên cần phải làm gì?",
    options: ["Phát huy vai trò giám sát của dân chúng","Phát huy vai trò, trách nhiệm của Đảng Cộng sản","Tăng cường vai trò giám sát của hội đồng nhân dân","Tăng cường trách nhiệm của mặt trận tổ quốc"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q207",
    question: "Trong những câu nói sau đây, câu nào không phải là của Hồ Chí Minh?",
    options: ["\"Chúng ta đã xây dựng nên nước Việt Nam Dân chủ Cộng hòa. Nhưng nếu nước độc lập mà dân không được hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì\".","\"Chính phủ nhân dân bao giờ cũng phải đặt quyền lợi của dân lên trên hết thảy. Việc gì có lợi cho dân thì phải hết sức làm. Việc gì hại đến dân thì phải hết sức tránh\".","\"Khoan thư sức dân làm kế sâu rễ bền gốc\".","\"Muốn được dân yêu, muốn được lòng dân, trước hết phải yêu dân, phải đặt quyền lợi của dân trên hết thảy, phải có một tinh thần chí công vô tư."],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q208",
    question: "Vận dụng tư tưởng Hồ Chí Minh cần phải nắm vững quan điểm nào?",
    options: ["Quan điểm lịch sử thế giới","Quan điểm lịch sử Việt Nam","Quan điểm lịch sử cụ thể","Quan điểm phát triển"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q209",
    question: "Luật cải cách ruộng đất quy định nội dung nào?",
    options: ["Nghiêm cấm việc tiến hành bắt giữ và giết hại nhân dân, nghiêm cấm đánh đập, tra tấn hoặc dùng mọi thứ nhục hình khác","Nghiêm cấm việc tiến hành bắt giữ và giết hại trái phép, nghiêm cấm đánh đập, tra tấn hoặc dùng mọi thứ nhục hình khác","Phân chia ruộng đất cho dân cày, dân nghèo, không can thiệp vào sản xuất","Tử hình toàn bộ bọn Việt gian, phản động, cường hào gian ác và những kẻ chống lại hoặc phá hoại cải cách ruộng đất"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q210",
    question: "Theo Hồ Chí Minh, quyền lãnh đạo Mặt trận của Đảng không phải do Đảng tự phong cho mình, mà phải được thực hiện như thế nào?",
    options: ["Nhân dân bỏ phiếu","Trưng cầu dân ý","Nhân dân thừa nhận","Chính quyền cho phép"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q211",
    question: "Văn kiện nào của Đảng Lao động Việt Nam đã khẳng định: \"Dân tộc ta, nhân dân ta, non sông đất nước ta đã sinh ra Hồ Chủ tịch, người anh hùng dân tộc vĩ đại, và chính Người đã làm rạng rỡ dân tộc ta, nhân dân ta và non sông đất nước ta\"?",
    options: ["Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ II của Đảng","Điếu văn của Ban Chấp hành Trung ương Đảng Lao động Việt Nam tại Lễ Truy điệu Chủ tịch Hồ Chí Minh","Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ VI của Đảng","Báo cáo chính trị tại Đại hội đại biểu toàn quốc lần thứ VII của Đảng"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q212",
    question: "Tư tưởng Hồ Chí Minh hình thành trên cơ sở nào?",
    options: ["Vận dụng và phát triển sáng tạo chủ nghĩa Mác-Lênin","Tiếp thu toàn bộ chủ nghĩa Mác-Lênin","Tiếp thu một bộ phận của chủ nghĩa Mác-Lênin","Vận dụng hoàn toàn chủ nghĩa Mác - Lênin vào hoàn cảnh của Việt Nam"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q213",
    question: "Để chuẩn bị thành lập Đảng Cộng sản Việt Nam. Nguyễn Ái Quốc đã từ Liên Xô về Trung Quốc năm nào?",
    options: ["1923","1927","1924","1925"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q214",
    question: "Trong xã hội hiện nay, vận dụng tư tưởng Hồ Chí Minh về đạo đức cán bộ có còn phù hợp không?",
    options: ["Có. Vì tư tưởng của Người vẫn mang tính thời sự","Không. Vì tư tưởng của Người đã không còn phù hợp","Có. Vì tư tưởng của Người luôn mang tính thời sự vì vậy phải áp dụng phù hợp với từng giai đoạn của đất nước","Không. Vì cán bộ hiện nay đều đã được rèn luyện đạo đức cách mạng trước khi thực hiện nhiệm vụ, đặc biệt là thấm nhuần chủ nghĩa Mác - Lênin"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q215",
    question: "Cách diễn đạt nào dưới đây là của Hồ Chí Minh?",
    options: ["Lý luận mà không liên hệ với thực tiễn là lý luận mù quáng","Lý luận mà không liên hệ với thực tiễn là lý luận suông","Lý luận mà không liên hệ với thực tiễn là lý luận giáo điều","Lý luận mà không liên hệ với thực tiễn là lý luận trống rỗng"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q216",
    question: "Trong các quan điểm dưới đây, đâu là quan điểm của Hồ Chí Minh?",
    options: ["Văn hoá ngang hàng với các lĩnh vực khác, có mối quan hệ với các lĩnh vực khác","Văn hoá không như lĩnh vực khác, có mối quan hệ với các lĩnh vực khác","Văn hoá là mọi lĩnh vực có mối quan hệ ngang hàng","Văn hóa ngang hàng với các lĩnh vực khác, không có mối quan hệ với các lĩnh vực khác"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q217",
    question: "Đâu là nguyên tắc xây dựng đạo đức mới trong tư tưởng Hồ Chí Minh? *(\"Đạo đức cách mạng không phải trên trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hàng ngày mà phát triển và củng cố...\" => nguyên tắc xây dựng đạo đức mới)*",
    options: ["Phải tu dưỡng đạo đức suốt đời","Phải tu dưỡng đạo đức thường xuyên","Phải tu dưỡng đạo đức hàng ngày","Phải tu dưỡng đạo đức liên tục"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q218",
    question: "Theo Hồ Chí Minh, đâu là lực lượng lãnh đạo Mặt trận dân tộc thống nhất?",
    options: ["Đảng Cộng sản","Quốc hội","Chính phủ","Nhà nước"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q219",
    question: "Theo Hồ Chí Minh, để thực hiện chiến lược \"trồng người\", cần có nhiều biện pháp, nhưng biện pháp quan trọng bậc nhất là:",
    options: ["Giáo dục - đào tạo","Thuyết phục - nêu gương","Cảm hóa - động viên","Ép buộc - cưỡng chế"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q220",
    question: "Theo chủ tịch Hồ Chí Minh, đặc điểm của giai cấp địa chủ ở Việt Nam là gì?",
    options: ["Là giai cấp phản động","Là giai cấp tiên tiến","Có thể lợi dụng","Cần phải loại bỏ"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q221",
    question: "Theo quan điểm của Hồ Chí Minh, đặc điểm của thời kỳ quá độ ở Việt Nam là gì?",
    options: ["Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không qua giai đoạn phát triển xã hội phong kiến","Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, thông qua giai đoạn phát triển tư bản chủ nghĩa","Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không qua giai đoạn phát triển xã hội dân chủ","Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không qua giai đoạn phát triển tư bản chủ nghĩa"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q222",
    question: "Theo Hồ Chí Minh, một trong những đặc điểm của Nhà nước pháp quyền là gì?",
    options: ["Nhà nước lãnh đạo nhân dân thực hiện các nhiệm vụ cách mạng","Nguyên tắc cơ bản của Nhà nước là hiệp thương dân chủ","Nhà nước hợp hiến, hợp pháp","Sự lãnh đạo của Đảng đối với Nhà nước"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q223",
    question: "Hồ Chí Minh lần đầu tiên đưa ra định nghĩa văn hóa vào lúc nào?",
    options: ["Vào thời gian Bác ở Pháp","Vào thời điểm thành lập Đảng","Vào thời gian đang ở nhà tù của Tưởng Giới Thạch","Vào thời điểm đọc Tuyên Ngôn Độc lập"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q224",
    question: "Hồ Chí Minh lần đầu tiên đã đưa ra một định nghĩa về văn hóa trong tác phẩm nào?",
    options: ["\"Bản án chế độ thực dân Pháp\"","\"Đường Kách mệnh\"","\"Nhật ký trong tù\"","\"Sửa đổi lối làm việc\""],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q225",
    question: "Đâu là quan điểm đúng trong tư tưởng Hồ Chí Minh?",
    options: ["Cách mạng tư sản dân quyền trước cách mạng thổ địa","Cách mạng vô sản dân quyền trước cách mạng thổ địa","Tiến hành đồng thời cách mạng tư sản dân quyền với cách mạng xã hội chủ nghĩa","Cách mạng thổ địa trước cách mạng tư sản dân quyền"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q226",
    question: "Theo Hồ Chí Minh, \"văn hóa [..] cho quốc dân đi\". Từ nào còn thiếu trong dấu [..]?",
    options: ["Mở đường","Soi đường","Chỉ đường","Dẫn đường"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q227",
    question: "Hồ Chí Minh khẳng định: \"Văn hóa phải soi đường cho quốc dân đi\" là nói đến vấn đề gì?",
    options: ["Văn hóa chính trị là một trong những động lực cho sự phát triển","Văn hóa là bản sắc dân tộc","Văn hóa là niềm tin của quần chúng","Văn hóa là tiêu chí để đánh giá trình độ dân tộc"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q228",
    question: "Trong các mệnh đề về đạo đức của mình, theo Hồ Chí Minh, đâu là cái đức lớn nhất:",
    options: ["Trung với nước, hiếu với dân","Tận tụy quên mình","Cần, kiệm, liêm, chính, chí công vô tư","Khiêm tốn, giản dị"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q229",
    question: "Đâu là chuẩn mực đạo đức cách mạng trong tư tưởng Hồ Chí Minh? *(chọn Trung với nước, hiếu với dân hoặc Có tinh thần quốc tế trong sáng)*",
    options: ["Cần, kiệm, liêm, chính, chí công vô tư","Cần, kiệm, liêm, chính, sáng suốt","Cần, kiệm, liêm, chính, tự do"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q230",
    question: "Theo tư tưởng Hồ Chí Minh, con người mới xã hội chủ nghĩa là con người như thế nào?",
    options: ["Kế thừa những giá trị tốt đẹp của con người truyền thống","Hình thành những phẩm chất mới xã hội chủ nghĩa","Kế thừa những giá trị tốt đẹp của con người truyền thống, hình thành những phẩm chất mới xã hội chủ nghĩa","Phá bỏ những truyền thống cũ"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q231",
    question: "Hồ Chí Minh đã đề ra những nhiệm vụ cấp bách của Nhà nước Việt Nam Dân chủ Cộng hòa vào thời điểm nào?",
    options: ["Năm 1944","Năm 1945","Năm 1946","Năm 1947"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q232",
    question: "Tác phẩm \"Cần Kiệm Liêm Chính\" của Hồ Chí Minh được xuất bản vào thời gian nào?",
    options: ["Năm 1950","Năm 1949","Năm 1947","Năm 1948"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q233",
    question: "Theo Hồ Chí Minh, chủ nghĩa cá nhân, lợi mình hại người, tự do vô tổ chức, vô kỷ luật và những tính xấu khác được coi là:",
    options: ["\"Kẻ địch nguy hiểm của chủ nghĩa xã hội\"","\"Đối lập với chủ nghĩa xã hội\"","\"Cần loại bỏ trong chủ nghĩa xã hội\"","\"Không thuộc về chủ nghĩa xã hội\""],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q234",
    question: "Trong tác phẩm \"Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân\" viết trên báo Nhân dân, năm 1969, Hồ Chí Minh ví chủ nghĩa cá nhân như:",
    options: ["Bệnh mẹ","Bệnh nguy hiểm","Giặc ngoại xâm","Bệnh cần loại bỏ"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q235",
    question: "Khái niệm con người theo quan niệm của Hồ Chí Minh là con người như thế nào?",
    options: ["Con người cụ thể gắn với hoàn cảnh lịch sử cụ thể","Một cộng đồng người","Một con người cụ thể","Con người trừu tượng, chung chung"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q236",
    question: "Nhận định nào sau đây đúng với khái niệm con người trong tư tưởng Hồ Chí Minh?",
    options: ["Dùng để chỉ con người chung chung","Dùng để chỉ một cộng đồng người","Dùng để chỉ con người cụ thể gắn với hoàn cảnh lịch sử cụ thể","Dùng để chỉ con người trừu tượng"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q237",
    question: "Theo Hồ Chí Minh, ngoài lợi ích của giai cấp, của nhân dân và toàn thể dân tộc Việt Nam, Đảng cần phải có thêm điều gì?",
    options: ["Không còn lợi ích nào khác","Còn vì lợi ích của mình","Còn vì lợi ích của nhà nước","Còn vì lợi ích cá nhân"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q238",
    question: "Trong công tác xây dựng Đảng, Hồ Chí Minh xác định: \"mục đích phê bình cốt để [..] giúp nhau tiến bộ\". Cụm từ nào còn thiếu trong dấu [..]?",
    options: ["Giúp nhau cải tạo","Giúp nhau sửa chữa","Sửa chữa sai lầm","Chỉ ra sai lầm"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q239",
    question: "Hồ Chí Minh cho rằng, \"Vì... loài người mới sáng tạo và phát minh ra ngôn ngữ, chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, văn học, nghệ thuật, những công cụ cho sinh hoạt hằng ngày về mặc, ăn ở và các phương thức sử dụng\".",
    options: ["lẽ sinh tồn cũng như mục đích của cuộc sống","nhu cầu đời sống và tinh thần","mục đích phát triển và sinh tồn","cuộc sống"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q240",
    question: "Theo Hồ Chí Minh, tính khoa học của nền văn hóa mới thể hiện ở tính hiện đại, tiên tiến, thuận với:",
    options: ["Trào lưu tiến hóa của dân tộc","Trào lưu tiến hóa của thời đại","Trào lưu tiến hóa của khoa học kỹ thuật"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q241",
    question: "Theo Hồ Chí Minh, đại đoàn kết dân tộc là nhiệm vụ hàng đầu của Đảng, đồng thời cũng là nhiệm vụ hàng đầu của: *(Đại đoàn kết dân tộc là một ....... hàng đầu của cách mạng Việt Nam => Mục tiêu, nhiệm vụ)*",
    options: ["Mọi giai đoạn cách mạng","Toàn quân","Toàn dân"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q242",
    question: "Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc là gì?",
    options: ["Đại đoàn kết toàn dân","Đoàn kết công-nông","Đoàn kết công-nông và các tầng lớp xã hội khác","Đoàn kết công-nông-lao động trí óc"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q243",
    question: "Thực hành đạo đức cách mạng trong xã hội hiện nay, theo Hồ Chí Minh cần phải làm gì?",
    options: ["Làm đúng quyền hạn và bổn phận","Làm đúng theo trách nhiệm và quyền hạn","Luôn nghĩ về nhân dân, xuất phát từ dân mà làm, không phạm pháp luật","Luôn luôn làm theo tư tưởng Hồ Chí Minh"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q244",
    question: "Đâu là quan điểm của Hồ Chí Minh về xây dựng nhà nước có hiệu lực pháp lý mạnh mẽ?",
    options: ["Hoạt động quản lý nhà nước bằng Hiến pháp và pháp luật, chú trọng đưa pháp luật vào cuộc sống","Hoạt động quản lý nhà nước bằng Hiến pháp và pháp luật, chú trọng đưa pháp luật vào thực tiễn","Hoạt động quản lý nhà nước bằng Hiến pháp và pháp luật, chú trọng đưa pháp luật vào xã hội","Hoạt động quản lý nhà nước bằng Hiến pháp và pháp luật, chú trọng đưa pháp luật vào đời sống kinh tế"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q245",
    question: "Theo Hồ Chí Minh, chế độ xã hội chủ nghĩa là chế độ do dân làm chủ, thì mỗi con người được coi là gì?",
    options: ["Bộ phận của tập thể","Một tế bào của xã hội","Đều là một cá thể trong xã hội","Một phần của tập thể"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q246",
    question: "Hãy chọn phương án trả lời đúng nhất: Theo Hồ Chí Minh, để tập hợp được mọi lực lượng vào khối đại đoàn kết toàn dân, cần phải làm gì?",
    options: ["Có chính sách đúng đắn","Có phương pháp phù hợp với từng đối tượng","Vừa có chính sách đúng đắn, vừa có phương pháp phù hợp với từng đối tượng","Chăm lo đời sống vật chất và tinh thần cho nhân dân"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q247",
    question: "Điểm giống trong tư tưởng về xây dựng nhà nước của Hồ Chí Minh và các bậc tiền nhân trong lịch sử là gì? *(Điểm giống -> dựa vào dân / Điểm khác -> con đường cách mạng)*",
    options: ["Dựa vào bạo lực vũ trang","Dựa vào dân","Dựa vào tài năng, trí tuệ, óc phán đoán","Dựa vào đạo đức cách mạng"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q248",
    question: "Điền cụm từ thích hợp vào dấu ba chấm. Theo quan điểm Hồ Chí Minh, xây dựng đạo đức mới, trước hết là thực hành đạo đức cách mạng, thực hành ...",
    options: ["Chí công vô tư","Cần kiệm liêm chính","Trung với nước, hiếu với dân","Cần, kiệm, liêm, chính, chí công vô tư"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q249",
    question: "Đâu là phương án chính xác và đầy đủ nhất, theo quan điểm Hồ Chí Minh?",
    options: ["Văn hóa tham gia vào nhiệm vụ các hoạt động kinh tế, chính trị, xã hội và trong hoạt động của kinh tế, chính trị, xã hội cũng phải có văn hóa","Văn hóa tham gia vào nhiệm vụ các hoạt động kinh tế, chính trị, xã hội và trong hoạt động của kinh tế, chính trị, xã hội cũng phải có đạo đức","Văn hóa tham gia vào nhiệm vụ các hoạt động kinh tế, chính trị, xã hội và trong hoạt động của kinh tế, chính trị, xã hội cũng phải có tinh thần cách mạng","Văn hóa tham gia vào nhiệm vụ các hoạt động kinh tế, xã hội và trong hoạt động của kinh tế, chính trị, xã hội cũng phải có tinh thần quốc tế"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q250",
    question: "Chế độ xã hội dưới sự lãnh đạo của Đảng Cộng sản và giai cấp công nhân, đánh đổ đế quốc và phong kiến; trên nền tảng công nông liên minh, nhân dân lao động làm chủ, nhân dân dân chủ chuyên chính theo tư tưởng Mác - Lênin, theo Hồ Chí Minh đó là:",
    options: ["Chế độ dân chủ mới","Chế độ dân chủ nhân dân","Chế độ dân chủ xã hội chủ nghĩa","Chế độ chuyên chính vô sản"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q251",
    question: "Hồ Chí Minh nhắc cán bộ nhà nước phải biết điều gì?",
    options: ["Học tập từ nhân dân","Tự tôn dân tộc trước nhân dân","Quan cách mạng trước nhân dân","Cậy thế, cậy quyền"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q252",
    question: "Hồ Chí Minh nhắc cán bộ nhà nước phải biết làm điều gì?",
    options: ["Làm lợi cho dân","Lao động vì dân","Phấn đấu vì dân","Làm quan cách mạng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q253",
    question: "Hồ Chí Minh nhắc cán bộ nhà nước phải như thế nào?",
    options: ["Có mối liên hệ mật thiết với đại diện của nhân dân","Có mối liên hệ mật thiết với chính quyền","Có mối liên hệ mật thiết với nhân dân","Có mối liên hệ mật thiết với giai cấp mình"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q254",
    question: "Theo Hồ Chí Minh, nhiệm vụ lịch sử của thời kỳ quá độ ở nước ta là gì?",
    options: ["Đấu tranh cải tạo, xóa bỏ tàn tích của chế độ xã hội cũ, xây dựng các yếu tố mới phù hợp với quy luật tiến lên chủ nghĩa xã hội trên tất cả các lĩnh vực đời sống","Xoá bỏ những tàn tích của chế độ xã hội cũ, xây dựng các giá trị mới phù hợp trên tất cả các lĩnh vực đời sống xã hội","Cải cách xã hội, kiên quyết đấu tranh bài trừ các giá trị của xã hội cũ để xây dựng chủ nghĩa xã hội trên tất cả các lĩnh vực đời sống","Củng cố và phát triển các giá trị của xã hội cũ vẫn còn phù hợp để xây dựng chủ nghĩa xã hội"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q255",
    question: "Theo Hồ Chí Minh, Nhà nước Việt Nam được xây dựng phải là nhà nước như thế nào?",
    options: ["Nhà nước tự lập, tự tôn","Nhà nước bảo hộ cho phép","Nhà nước quốc gia dân tộc","Nhà nước hợp pháp, hợp hiến"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q256",
    question: "Theo Hồ Chí Minh, đạo đức là nhân tố tạo nên:",
    options: ["Sức mạnh, sức hấp dẫn của chủ nghĩa xã hội","Sức mạnh, sức hấp dẫn của chủ nghĩa Mác-Lênin","Sức mạnh, sức hấp dẫn của tư tưởng Hồ Chí Minh"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q257",
    question: "Hồ Chí Minh công tác tại Viện nghiên cứu các vấn đề dân tộc và thuộc địa vào thời gian nào? *(vào học Trường Quốc tế Lênin và làm nghiên cứu sinh => 1934)*",
    options: ["1923","1932","1934","1936"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q258",
    question: "Nguyễn Sinh Cung theo cha lần đầu tiên đến Huế vào thời gian nào?",
    options: ["Từ năm 1895 đến năm 1901","Từ năm 1896 đến năm 1906","Từ năm 1896 đến năm 1901","Từ năm 1895 đến năm 1905"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q259",
    question: "Đâu là nguyên tắc đoàn kết quốc tế trong tư tưởng Hồ Chí Minh?",
    options: ["Đảm bảo mục tiêu độc lập của dân tộc mình và mục tiêu thời đại","Đảm bảo mục tiêu độc lập của dân tộc mình và mục tiêu của nhân loại","Đảm bảo mục tiêu độc lập của dân tộc mình và mục tiêu đại chúng","Đảm bảo mục tiêu độc lập của dân tộc mình và mục tiêu của các nước đặt quan hệ ngoại giao"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q260",
    question: "Đâu là nguyên tắc đoàn kết quốc tế trong tư tưởng Hồ Chí Minh?",
    options: ["Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích, có lý, có tình","Đoàn kết trên cơ sở thống nhất mục tiêu độc lập của dân tộc mình và mục tiêu của nhân loại","Đoàn kết trên cơ sở thống nhất mục tiêu và mục đích, có lý, có tình","Đoàn kết trên cơ sở thống nhất lợi ích và chủ nghĩa dân tộc"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q261",
    question: "Trong tư tưởng Hồ Chí Minh, Mặt trận dân tộc thống nhất là nơi quy tụ mọi tổ chức và cá nhân yêu nước người Việt Nam, bao gồm cả những đối tượng nào?",
    options: ["Định cư ở nước ngoài","Đang sống ở các nước cùng Châu lục","Định cư ở các nước theo con đường xã hội chủ nghĩa","Các cá nhân thuộc tổ chức phi chính phủ"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q262",
    question: "Nguyễn Tất Thành lấy tên là Nguyễn Ái Quốc vào thời gian nào?",
    options: ["Khi Bác lên tàu từ bến Nhà Rồng năm 1911","Khi Bác tham gia sáng lập Đảng Cộng sản Pháp tại Đại hội Tua tháng 12/1920","Tại Hội nghị Vécxay (Pháp) ngày 18/6/1919","Khi Bác sang Liên Xô làm việc ở Ban Phương Đông của Quốc tế Cộng sản tháng 6/1923"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q263",
    question: "Hồ Chí Minh cho rằng quá độ lên chủ nghĩa xã hội ở Việt Nam phải tiến hành như thế nào?",
    options: ["Từ từ, từng bước một","Nhanh chóng, chính xác","Cẩn thận, không chủ quan","Nhanh chóng, không chủ quan"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q264",
    question: "Hồ Chí Minh cho rằng:",
    options: ["Đạo đức cách mạng là hòa mình với quần chúng thành một khối, tin quần chúng, hiểu quần chúng, lắng nghe ý kiến của quần chúng","Đạo đức cách mạng là tin quần chúng, hiểu quần chúng, lắng nghe ý kiến của quần chúng","Đạo đức cách mạng là hòa mình cộng đồng, lắng nghe ý kiến của cộng đồng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q265",
    question: "Quan điểm nào sau đây đúng với tư tưởng của Hồ Chí Minh?",
    options: ["Chủ nghĩa dân tộc là động lực lớn của đất nước","Chủ nghĩa dân tộc là khát khao lớn của đất nước","Chủ nghĩa dân tộc là mục tiêu lớn của đất nước","Chủ nghĩa dân tộc là chiến lược hàng đầu của cách mạng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q266",
    question: "Theo Hồ Chí Minh, về bước đi trong thời kỳ quá độ, chúng ta phải:",
    options: ["Theo bước đi của các nước xã hội chủ nghĩa","Căn cứ vào đặc điểm lịch sử cụ thể của nước ta từ đó có bước đi phù hợp","Căn cứ vào đặc điểm lịch sử cụ thể của nước ta từ đó có bước đi phù hợp, đi bước nào vững chắc bước ấy","Bước đi chậm, mạnh, vững chắc"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q267",
    question: "Đâu là luận điểm sai với tư tưởng Hồ Chí Minh khi Người nói về việc học?",
    options: ["Học để làm lãnh đạo","Học để làm cán bộ","Học để làm việc","Học để làm người"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q268",
    question: "Dưới đây là một số luận điểm của Hồ Chí Minh về nhà nước vì dân. Luận điểm nào bị viết sai?",
    options: ["Do nhân dân làm chủ","Phụng sự nhân dân","Chăm lo mọi mặt đời sống nhân dân","Tất cả đều vì lợi ích của nhân dân"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q269",
    question: "Trong các tiền đề tư tưởng - lý luận, tiền đề nào trực tiếp quyết định bản chất tư tưởng Hồ Chí Minh?",
    options: ["Chủ nghĩa Tôn Trung Sơn","Tinh hoa văn hóa nhân loại","Tinh hoa văn hóa dân tộc","Chủ nghĩa Mác - Lênin"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q270",
    question: "Dưới đây là một số luận điểm của Hồ Chí Minh trong việc xây dựng đường lối chính trị của Đảng, luận điểm nào bị viết sai?",
    options: ["Dựa trên cơ sở lý luận của chủ nghĩa Mác - Lênin","Tập hợp các nhà nghiên cứu lý luận giỏi","Thật sự là đội tiên phong dũng cảm, là bộ tham mưu sáng suốt của giai cấp công nhân, nhân dân lao động và của cả dân tộc","Vận dụng kinh nghiệm của các Đảng cộng sản anh em vào điều kiện cụ thể của nước ta trong thời kỳ quá độ"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q271",
    question: "Hồ Chí Minh cho rằng giải phóng dân tộc là sự nghiệp của:",
    options: ["Toàn dân","Toàn quân","Toàn Đảng","Giai cấp công nhân"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q272",
    question: "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn thắng lợi phải do ai lãnh đạo?",
    options: ["Đảng Cộng sản","Giai cấp công nhân","Giai cấp vô sản","Đảng của giai cấp tư sản"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q273",
    question: "Đâu không phải là điểm giống nhau giữa chủ nghĩa xã hội và chủ nghĩa cộng sản theo Hồ Chí Minh?",
    options: ["Sức sản xuất phát triển dựa trên chế độ tư hữu","Tư liệu sản xuất là của chung","Không còn giai cấp áp bức bóc lột","Năng suất lao động phát triển"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q274",
    question: "Theo Hồ Chí Minh, nguyên tắc phân phối chủ yếu trong chủ nghĩa xã hội là gì?",
    options: ["Làm theo năng lực, hưởng theo nhu cầu","Làm nhiều hưởng nhiều, làm ít hưởng ít, không làm không hưởng","Phân phối bình quân cho tất cả mọi người","Phân phối theo thỏa thuận"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q275",
    question: "Theo Hồ Chí Minh, để thực hiện được đoàn kết, cần xoá bỏ hết mọi thành kiến, cần phải (....) và giúp đỡ lẫn nhau cùng tiến bộ.",
    options: ["Nghiêm túc hợp tác","Thật thà hợp tác","Sẵn sàng hợp tác"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q276",
    question: "Theo Hồ Chí Minh, văn hóa là đời sống tinh thần của xã hội, thuộc:",
    options: ["Kiến trúc thượng tầng","Cơ sở hạ tầng","Tất cả các phương án","Lực lượng sản xuất"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q277",
    question: "Theo Hồ Chí Minh, mâu thuẫn chủ yếu ở thuộc địa, không thể điều hòa được là gì?",
    options: ["Mâu thuẫn giữa giai cấp công nhân với chủ nghĩa thực dân","Mâu thuẫn giữa dân tộc thuộc địa với thực dân, đế quốc","Mâu thuẫn giữa giai cấp nông dân với giai cấp địa chủ bản xứ","Tất cả các phương án trên"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q278",
    question: "Trong tư tưởng Hồ Chí Minh, mối quan hệ giữa Đảng và Mặt trận được xác định là mối quan hệ:",
    options: ["Song song","Máu thịt","Biện chứng","Độc lập"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q279",
    question: "Chủ nghĩa nào sau đây ảnh hưởng đến sự hình thành tư tưởng Hồ Chí Minh? *(Yếu tố nào sau đây ảnh hưởng => Lý luận và thực tiễn các cuộc cách mạng)*",
    options: ["Chủ nghĩa dân tộc của Grady","Chủ nghĩa dân tộc hẹp hòi","Chủ nghĩa Tam dân của Tôn Trung Sơn","Chủ nghĩa dân chủ của Kenedy"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q280",
    question: "Theo Hồ Chí Minh, trong thời kỳ quá độ, phải ưu tiên phát triển thành phần kinh tế nào?",
    options: ["Kinh tế hợp tác xã","Kinh tế thủ công và lao động riêng lẻ","Kinh tế quốc doanh","Kinh tế tư bản tư nhân"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q281",
    question: "\"Tinh thần yêu nước chân chính khác hẳn với tinh thần \"vị quốc\" của bọn đế quốc phản động. Nó là một bộ phận của tinh thần quốc tế\" là câu nói được Hồ Chí Minh khẳng định trong Báo cáo chính trị của Đại hội đại biểu toàn quốc lần thứ mấy?",
    options: ["Lần thứ I","Lần thứ II","Lần thứ III","Lần thứ IV"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q282",
    question: "Hồ Chí Minh cho rằng:",
    options: ["Đại đoàn kết dân tộc là vấn đề có ý nghĩa chiến lược, quyết định sự thành công của cách mạng","Đoàn kết dân tộc là vấn đề có ý nghĩa chiến lược tác động trực tiếp đến sự thành công của cách mạng","Đại đoàn kết toàn dân là vấn đề có ý nghĩa chiến lược, quyết định sự trưởng thành của cách mạng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q283",
    question: "Điền vào chỗ trống. \"Đại đoàn kết dân tộc là....của cách mạng\".",
    options: ["Mục tiêu, nhiệm vụ","Chìa khóa, con đường","Chìa khóa","Biện pháp, phương hướng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q284",
    question: "Theo Hồ Chí Minh nhân tố nào sau đây quyết định thành công của thời kỳ quá độ lên chủ nghĩa xã hội?",
    options: ["Con người","Văn hóa","Xã hội","Kinh tế"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q285",
    question: "Theo Hồ Chí Minh, đánh giá cán bộ cần phải như thế nào?",
    options: ["Tiến hành thường xuyên","Khách quan, trung thực","Phải tự biết mình, biết người","Phải đủ trong sạch"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q286",
    question: "*(Chọn 2 đáp án)* Theo Hồ Chí Minh, tại sao phải đoàn kết quốc tế?",
    options: ["Nhằm kết hợp sức mạnh dân tộc và sức mạnh thời đại, tạo sức mạnh tổng hợp cho cách mạng","Góp phần cùng nhân dân thế giới thực hiện các mục tiêu cách mạng","Vì đây là mục tiêu, nhiệm vụ hàng đầu của cách mạng Việt Nam","Nhằm kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết của dân tộc"],
    correctAnswer: [0,1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q287",
    question: "Cụ Hoàng Thị Loan đã có đức tính gì ảnh hưởng tới Hồ Chí Minh?",
    options: ["Sự yêu thương và vị tha","Từ bi và vị tha","Tần tảo và đảm đang","Lòng nhân hậu và mẫn cảm"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q288",
    question: "Trong các luận điểm sau đây về văn hóa, luận điểm nào Hồ Chí Minh nói về tính chất của nền văn hóa?",
    options: ["Văn hóa cũng là một mặt trận","Phải nâng cao trình độ văn hóa của nhân dân","Phải xây dựng một nền văn hóa dân tộc, khoa học và đại chúng","Xây dựng chính trị: dân quyền"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q289",
    question: "Theo Hồ Chí Minh, trình độ văn hóa của nhân dân nâng cao sẽ giúp cho chúng ta đẩy mạnh công cuộc gì?",
    options: ["Khôi phục kinh tế, phát triển dân chủ","Phát triển dân chủ","Khôi phục văn hóa","Khôi phục kinh tế"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q290",
    question: "Theo Hồ Chí Minh, đạo đức mới chỉ có thể được xây dựng trên cơ sở sự tự giác tu dưỡng đạo đức của mỗi người thông qua hoạt động thực tiễn, phải kiên trì rèn luyện như việc gì?",
    options: ["Việc đánh răng hàng ngày","Việc hít thở hàng ngày","Việc ăn uống hàng ngày","Việc rửa mặt hàng ngày"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q291",
    question: "Hồ Chí Minh cho rằng đoàn kết có ý nghĩa thế nào? *(Theo Hồ Chí Minh, đoàn kết là điểm nào => Điểm mẹ)*",
    options: ["Đoàn kết là yêu nước","Đoàn kết là sáng tạo","Đoàn kết là sức mạnh","Đoàn kết là khôn ngoan"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q292",
    question: "Khi bàn về vấn đề đại đoàn kết toàn dân tộc, Hồ Chí Minh đi đến kết luận có tính tổng kết: \"Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công\". Ý nghĩa của tổng kết này là gì?",
    options: ["Nói về mục tiêu của đại đoàn kết toàn dân tộc","Nói về hình thức của đại đoàn kết toàn dân tộc","Nói về bản chất của đại đoàn kết toàn dân tộc","Nói về vai trò của đại đoàn kết toàn dân tộc"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q293",
    question: "Theo Hồ Chí Minh, đặc trưng nổi bật về chính trị của chủ nghĩa xã hội là gì?",
    options: ["Mọi người được hưởng các quyền tự do dân chủ","Thực hiện một nền dân chủ triệt để","Đảng Cộng sản lãnh đạo","Mọi lợi ích đều từ nhân dân"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q294",
    question: "Hồ Chí Minh cho rằng đoàn kết quốc tế cần phải làm gì?",
    options: ["Nêu cao ngọn cờ hoà bình, công lý","Nêu cao ngọn cờ hoà bình, tự do","Nêu cao ngọn cờ hoà bình, bình đẳng","Nêu cao ngọn cờ dân sinh, dân chủ"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q295",
    question: "Đâu là thực chất của vấn đề dân tộc thuộc địa trong tư tưởng Hồ Chí Minh?",
    options: ["Đòi quyền tự trị dân tộc","Đòi quyền tự do dân chủ cho nhân dân","Đòi quyền bình đẳng giữa các dân tộc","Đấu tranh giải phóng dân tộc, thành lập nhà nước dân tộc độc lập"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q296",
    question: "Theo Hồ Chí Minh, \"người cách mạng phải có [..], không có [..] thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân\". Cụm từ nào còn thiếu trong dấu [..]?",
    options: ["Tài năng và đạo đức","Đạo đức cách mạng","Uy tín cá nhân","Bản lĩnh chính trị"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q297",
    question: "Theo Hồ Chí Minh, \"người cách mạng phải có [..] thì mới gánh được nặng và đi được xa\". Từ nào còn thiếu trong dấu [..]?",
    options: ["Đạo đức cách mạng","Phương pháp cách mạng","Trí tuệ","Ý chí cách mạng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q298",
    question: "Theo Hồ Chí Minh, vai trò của nhân dân là gì?",
    options: ["Chủ thể của quyền lực","Khách thể của quyền lực","Nguồn gốc của quyền lực","Sức mạnh của quyền lực"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q299",
    question: "Sức mạnh dân tộc trong tư tưởng Hồ Chí Minh bao gồm những thành tố nào?",
    options: ["Chủ nghĩa yêu nước và truyền thống văn hóa Việt Nam; tinh thần đoàn kết, ý thức đấu tranh cho độc lập, tự do; và tinh thần quốc tế vô sản","Tinh thần đoàn kết, ý thức đấu tranh cho độc lập, tự do","Ý chí tự lực, tự cường và tinh thần quốc tế vô sản","Chủ nghĩa yêu nước và truyền thống văn hóa Việt Nam; tinh thần đoàn kết, ý thức đấu tranh cho độc lập, tự do; và ý chí tự lực, tự cường"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q300",
    question: "Theo Hồ Chí Minh, mục tiêu, lý tưởng của Đảng Cộng sản Việt Nam là gì?",
    options: ["Vì lợi ích của giai cấp công nhân","Xây dựng một nước Việt Nam giàu mạnh","Đảng ta không có mục đích, lý tưởng nào","Phụng sự Tổ quốc, phục vụ nhân dân"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q301",
    question: "Luận điểm nào sau đây là sai với tư tưởng Hồ Chí Minh về chức năng cơ bản của văn hóa?",
    options: ["Giải trí cho con người","Bồi dưỡng tư tưởng và tình cảm cao đẹp của con người","Mở rộng hiểu biết, nâng cao dân trí","Bồi dưỡng những phẩm chất, phong cách và lối sống tốt đẹp, lành mạnh, hướng con người đến chân, thiện, mỹ"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q302",
    question: "Tác phẩm \"Bản án chế độ thực dân Pháp\" của Nguyễn Ái Quốc được xuất bản lần đầu tiên vào năm nào?",
    options: ["1925","1924","1926","1923"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q303",
    question: "\"Chúng ta làm cách mệnh thì cũng phải liên lạc với tất cả những đảng cách mệnh trong thế giới để chống lại tư bản và đế quốc chủ nghĩa\". Câu đó được Nguyễn Ái Quốc viết trong tác phẩm nào?",
    options: ["Trung Quốc và thanh niên Trung Quốc","V.I. Lênin và các dân tộc thuộc địa","Bản án chế độ thực dân Pháp","Đường Cách mệnh"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q304",
    question: "Nguyễn Ái Quốc đọc \"Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa\" vào thời gian nào?",
    options: ["7/1920","7/1917","7/1918","7/1922"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q305",
    question: "Lực lượng làm nền tảng cho khối đại đoàn kết dân tộc theo tư tưởng Hồ Chí Minh là gì?",
    options: ["Công nhân","Công nhân, nông dân","Học trò, nhà buôn","Công nhân, nông dân, lao động trí óc"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q306",
    question: "Hồ Chí Minh đến với chủ nghĩa Mác - Lênin và trở thành người cộng sản Việt Nam đầu tiên vào thời gian nào?",
    options: ["1920","1917","1945","1930"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q307",
    question: "Chọn câu trả lời đúng nhất với tư tưởng Hồ Chí Minh về vai trò của đại đoàn kết dân tộc? *(Hồ Chí Minh đã khẳng định vị trí, vai trò của đại đoàn kết toàn dân tộc)*",
    options: ["Đại đoàn kết dân tộc là vấn đề sách lược","Đại đoàn kết dân tộc là vấn đề chiến lược","Đại đoàn kết dân tộc là thủ đoạn chính trị","Đại đoàn kết dân tộc là phương pháp chính trị"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q308",
    question: "Tư tưởng Hồ Chí Minh được hình thành và phát triển qua mấy giai đoạn?",
    options: ["5 giai đoạn","6 giai đoạn","3 giai đoạn","4 giai đoạn"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q309",
    question: "Tư tưởng Hồ Chí Minh được hình thành trong bối cảnh nào?",
    options: ["Chủ nghĩa xã hội đang trong giai đoạn phát triển","Chủ nghĩa tư bản từ giai đoạn tự do cạnh tranh sang giai đoạn độc quyền","Chủ nghĩa tư bản đang trong giai đoạn hình thành","Chủ nghĩa tư bản đang trong giai đoạn tự do cạnh tranh"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q310",
    question: "Đại đoàn kết quốc tế trong tư tưởng Hồ Chí Minh được xác định là:",
    options: ["Một nhân tố thường xuyên và hết sức quan trọng giúp cho cách mạng Việt Nam đi đến thắng lợi hoàn toàn","Có ý nghĩa sống còn đối với cách mạng Việt Nam","Vấn đề cơ bản của cách mạng Việt Nam","Sức mạnh giúp cho dân tộc ta vượt qua mọi thử thách, khó khăn trong dựng nước và giữ nước"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q311",
    question: "Quan điểm nào sau đây thuộc vấn đề công tác cán bộ theo tư tưởng Hồ Chí Minh?",
    options: ["Gần dân, học hỏi nhân dân, lắng nghe ý kiến nhân dân","Gần dân, học hỏi nhân dân, lắng nghe ý kiến ngoài đảng","Gần dân, học hỏi nhân dân, lắng nghe ý kiến mọi người","Gần dân, học hỏi nhân dân, lắng nghe ý kiến của mọi tầng lớp"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q312",
    question: "Trong giai đoạn 1923 - 1924, Quảng Châu Trung Quốc được mệnh danh là:",
    options: ["Moskva của Phương Đông","Trung tâm của cách mạng vô sản","Thủ Phủ Cộng Sản","Căn cứ quốc tế vô sản"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q313",
    question: "Phẩm chất nào dưới đây không có trong nhân tố chủ quan dẫn đến hình thành tư tưởng Hồ Chí Minh?",
    options: ["Một trái tim yêu nước thương dân, sẵn sàng chịu đựng hy sinh","Tư duy độc lập, tự chủ, sáng tạo, đầu óc phê phán tình tường, sáng suốt","Bản lĩnh kiên định, luôn tin vào nhân dân, khiêm tốn, bình dị, ham học hỏi","Ham công danh, phú quý"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q314",
    question: "Hồ Chí Minh cho rằng, nhà nước của dân, do dân và vì dân phải là nhà nước như thế nào?",
    options: ["Là nhà nước hợp hiến","Là nhà nước dân chủ","Là nhà nước dân quyền","Là nhà nước toàn dân"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q315",
    question: "Hồ Chí Minh cho rằng đoàn kết toàn dân để làm gì?",
    options: ["Phụng sự nhân dân","Phụng sự cách mạng","Phụng sự tổ quốc","Phụng sự xã hội"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q316",
    question: "Theo Hồ Chí Minh, nền kinh tế mà chúng ta xây dựng phải được tạo lập trên cơ sở:",
    options: ["Nền nông nghiệp hiện đại","Nền công nghiệp hiện đại","Khoa học kỹ thuật tiên tiến","Chế độ công hữu về tư liệu sản xuất chủ yếu"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q317",
    question: "Giai đoạn nào sau đây hình thành cơ bản tư tưởng Hồ Chí Minh trong việc tìm thấy con đường cứu nước, giải phóng dân tộc?",
    options: ["1911 đến 1930","1911 đến 1920","1911 đến 1935","1908-1911"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q318",
    question: "Hồ Chí Minh được coi là linh hồn của cuộc kháng chiến chống Pháp trong giai đoạn nào?",
    options: ["1946-1954","1945-1954","1930-1945","1939-1945"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q319",
    question: "Từ nào còn thiếu trong khẳng định sau? Hồ Chí Minh cho rằng: \"Người cách mạng phải có (...) làm nền tảng, mới hoàn thành được nhiệm vụ cách mạng vẻ vang\".",
    options: ["Trí tuệ","Phương pháp cách mạng","Đạo đức cách mạng","Ý chí cách mạng"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q320",
    question: "Khi nói về mặt trận, Hồ Chí Minh cho rằng mặt trận phải được xây dựng như thế nào?",
    options: ["Phải được xây dựng trên nền tảng khối liên minh công - nông - trí thức, đặt dưới sự lãnh đạo của Đảng","Phải được xây dựng trên nền tảng khối liên minh công - trí thức, đặt dưới sự lãnh đạo của trí thức","Phải xây dựng trên nền tảng lợi ích dân tộc, đặt dưới sự lãnh đạo của Nhà nước","Phải được xây dựng trên nền tảng khối liên minh công - nông - trí thức, đặt dưới sự lãnh đạo của giai cấp nông dân"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q321",
    question: "Khi nói về điều kiện hình thành tư tưởng Hồ Chí Minh, điều kiện nào bị viết sai?",
    options: ["Nhu cầu khách quan và bức thiết do cách mạng Việt Nam đặt ra là muốn cứu nước, phải tìm một con đường cách mạng mới","Quê hương Hồ Chí Minh là mảnh đất giàu truyền thống yêu nước, chống giặc ngoại xâm","Hồ Chí Minh sinh ra trong một gia đình nhà Nho yêu nước, gần gũi nhân dân, cụ thân sinh có tư tưởng thương dân, chủ trương lấy dân làm hậu thuẫn cho mọi cải cách chính trị","Ngay từ khi còn nhỏ ở trong trường, Hồ Chí Minh đã nhận thức được đặc điểm thời đại"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q322",
    question: "Nguyễn Tất Thành lên tàu Amiran Latusơ Tôrévin ra đi tìm đường cứu nước tại đâu? Vào thời gian nào?",
    options: ["4/6/1911 tại Bến cảng Nhà Rồng","6/5/1911 tại Bến cảng Nhà Rồng","2/6/1911 tại Sài Gòn","5/6/1911 tại Bến cảng Nhà Rồng"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q323",
    question: "Theo Hồ Chí Minh, đâu là kẻ thù hung ác nhất của chủ nghĩa xã hội?",
    options: ["Thói hư, tật xấu","Các lực lượng phản động","Chủ nghĩa cá nhân","Tham ô, lãng phí"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q324",
    question: "Theo tư tưởng Hồ Chí Minh, để phát huy động lực con người, Đảng cần phải làm gì?",
    options: ["Phát huy sức mạnh của cả cộng đồng dân tộc và sức mạnh của cá nhân người lao động","Phát huy sức mạnh đoàn kết dân tộc kết hợp với sự giúp đỡ của nhân dân tiến bộ trên thế giới","Kêu gọi toàn dân, động viên toàn dân","Phát huy sức mạnh cá nhân của người Việt Nam ở trong và ngoài nước"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q325",
    question: "Theo Hồ Chí Minh, nội dung nào không đúng để phát huy động lực con người?",
    options: ["Phát huy sức mạnh đoàn kết của cả cộng đồng dân tộc","Phát huy sức mạnh của cá nhân con người","Phát huy các yếu tố chính trị, tinh thần","Phát huy trí lực, tài lực và nhân lực của nhân dân"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q326",
    question: "Tư tưởng văn hoá phương Tây nào sau đây ảnh hưởng đến sự hình thành tư tưởng dân chủ Hồ Chí Minh trước khi người ra đi tìm đường cứu nước?",
    options: ["Truyền thống văn hoá dân chủ, tiến bộ của Đức","Truyền thống văn hoá dân chủ, tiến bộ của Pháp","Chủ nghĩa thực chứng Hoa Kỳ","Triết học phương Tây"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q327",
    question: "Theo Hồ Chí Minh, ưu điểm lớn nhất của chủ nghĩa Mác là gì?",
    options: ["Bản chất cách mạng","Chủ nghĩa nhân đạo triệt để","Phương pháp làm việc biện chứng","Bản chất khoa học"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q328",
    question: "Liên minh giữa giai cấp công nhân, nông dân và tầng lớp trí thức là do yếu tố nào quyết định?",
    options: ["Mong muốn của công nhân","Yêu cầu của trí thức","Do đòi hỏi khách quan của công nhân, nông dân và trí thức","Yêu cầu của nông dân"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q329",
    question: "Yếu tố nào không nằm trong Mặt trận dân tộc thống nhất?",
    options: ["Nhà nước xã hội chủ nghĩa","Đảng Cộng sản","Nhân sĩ, trí thức tiêu biểu","Các tổ chức chính trị - xã hội"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q330",
    question: "Trong quá trình lãnh đạo nhà nước, Hồ Chí Minh không nhắc đến việc cần phải đề phòng và khắc phục biểu hiện nào sau đây?",
    options: ["Tư túng, chia rẽ, kiêu ngạo","Bệnh thành tích","Đặc quyền, đặc lợi","Tham ô, lãng phí, quan liêu"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q331",
    question: "Theo Hồ Chí Minh, \"chế độ ta là chế độ dân chủ, nghĩa là [..] làm chủ\". Từ nào còn thiếu trong dấu [..]?",
    options: ["Công nhân","Nhân dân","Công - nông","Nông dân"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q332",
    question: "Giai đoạn vượt qua thử thách, kiên trì con đường đã xác định cho cách mạng Việt Nam của Hồ Chí Minh được tính từ năm nào đến năm nào?",
    options: ["Năm 1920 đến 1930","Năm 1945 đến 1969","Năm 1911 đến 1920","Năm 1930 đến 1945"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q333",
    question: "Đâu là quan niệm về Con người của Hồ Chí Minh?",
    options: ["Động lực của cách mạng","Vốn quý nhất, nhân tố quyết định thành công của cách mạng","Vốn quý của cách mạng","Vốn quý nhất, nhân tố quan trọng của cách mạng"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q334",
    question: "Theo Hồ Chí Minh, ưu điểm lớn nhất của học thuyết Khổng Tử là gì?",
    options: ["Tinh thần lễ nghĩa","Sự tu dưỡng đạo đức cá nhân","Quản lý xã hội bằng đạo đức","Tinh thần hiếu học"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q335",
    question: "Tư tưởng tôn giáo nào sau đây ảnh hưởng đến sự hình thành tư tưởng Hồ Chí Minh?",
    options: ["Tư duy, hành động, ứng xử của Phật giáo","Tư duy, hành động, ứng xử của Hồi giáo","Tư duy, hành động, ứng xử của Ấn Độ giáo"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q336",
    question: "Nguyễn Ái Quốc gửi bản \"Yêu sách của nhân dân Việt Nam\" tới Hội nghị Véc xay vào ngày, tháng, năm nào?",
    options: ["18/6/1917","18/6/1918","18/6/1919","18/6/1920"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q337",
    question: "Nguyễn Ái Quốc gửi bản \"Bản yêu sách của nhân dân An Nam\" tới Hội nghị Vécxây, đòi chính phủ Pháp thừa nhận các quyền tự do, dân chủ và bình đẳng của nhân dân Việt Nam vào thời gian nào?",
    options: ["6/1917","6/1918","6/1919","6/1920"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q338",
    question: "Việt Nam Độc lập Đồng minh được thành lập vào thời gian nào?",
    options: ["19/5/1941","19/5/1930","26/3/1941","3/9/1945"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q339",
    question: "Điểm khác nhau trong tư tưởng về xây dựng nhà nước của Hồ Chí Minh và các bậc tiền nhân trong lịch sử là gì?",
    options: ["Con đường cứu nước","Phương pháp cứu nước","Tinh thần yêu nước","Dựa vào tài năng, trí tuệ của các vị lãnh đạo"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q340",
    question: "Theo Hồ Chí Minh, trong Nhà nước vì dân, từ Chủ tịch nước đến công chức bình thường đều phải làm công bộc, làm đầy tớ cho nhân dân chứ không phải làm:",
    options: ["Tướng","Quan","Quan cách mạng","Trâu, ngựa"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q341",
    question: "Hồ Chí Minh nhấn mạnh vấn đề nào sau đây trong quan hệ giữa cán bộ nhà nước với nhân dân?",
    options: ["Kính trọng nhân dân","Tự tôn dân tộc","Nghiêm khắc","Phục tùng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q342",
    question: "Hồ Chí Minh cho rằng mọi Cán bộ, Đảng viên phải thực hiện nguyên tắc:",
    options: ["Nói đi đôi với làm","Làm trước, nói sau","Nói trước, làm sau"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q343",
    question: "Luận điểm \"Không có sự đồng tình ủng hộ của đại đa số nhân dân lao động đối với đội tiền phong của mình tức là đối với giai cấp vô sản, thì cách mạng vô sản không thể thực hiện được\" là của ai?",
    options: ["C. Mác","Ph. Ăngghen","V.I. Lênin","Hồ Chí Minh"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q344",
    question: "Hồ Chí Minh nhấn mạnh xây dựng nhà nước trong sạch vững mạnh cần phải:",
    options: ["Kết hợp giáo dục pháp luật và đạo đức, hình thành pháp quyền nhân nghĩa","Kết hợp giáo dục pháp luật và nhân cách, hình thành pháp quyền nhân nghĩa","Kết hợp giáo dục pháp luật và nghề nghiệp, hình thành pháp quyền nhân nghĩa"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q345",
    question: "Chọn phương án trả lời không đúng với tư tưởng Hồ Chí Minh về nhà nước vì dân?",
    options: ["Phụng sự nhân dân","Chăm lo mọi mặt đời sống nhân dân","Do dân làm chủ, tổ chức nên","Đem lại lợi ích cho dân"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q346",
    question: "Hồ Chí Minh tiếp thu tư tưởng về đạo đức của Nho giáo trong việc xây dựng, đổi mới, phát triển tư tưởng đạo đức trong công tác gì?",
    options: ["Xây dựng con người mới","Xây dựng Đảng về đạo đức","Xây dựng văn hóa mới","Xây dựng xã hội mới"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q347",
    question: "Để đảm bảo thực hiện thắng lợi chủ nghĩa xã hội ở Việt Nam trong thời kỳ quá độ, theo Hồ Chí Minh phải làm gì?",
    options: ["Giữ vững và tăng cường vai trò lãnh đạo của Đảng, nâng cao vai trò quản lý của nhà nước","Phát huy vai trò làm chủ của Đảng, nâng cao vai trò quản lý của nhà nước","Phát huy tính tích cực, chủ động của đội ngũ cán bộ, quản lý, kể cả các cá nhân đang định cư ở nước ngoài","Giữ vững tăng cường vai trò quản lý của Nhà nước; xây dựng đội ngũ cán bộ đủ đức và tài"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q348",
    question: "Đâu không phải là nguyên tắc xây dựng chủ nghĩa xã hội trong thời kỳ quá độ theo tư tưởng Hồ Chí Minh?",
    options: ["Mọi tư tưởng hành động phải tuân thủ tuyệt đối theo chủ nghĩa Mác - Lênin","Xây đi đôi với chống","Phải giữ vững được độc lập dân tộc","Phải đoàn kết, học tập kinh nghiệm từ thực tiễn"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q349",
    question: "Luận điểm: \"Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp ở mọi nơi. Đảng có vững thì cách mạng mới thành công, cũng như người cầm lái có vững thuyền mới chạy\" được trích từ tác phẩm nào của Hồ Chí Minh?",
    options: ["Bản án chế độ thực dân Pháp","Đường kách mệnh","Con rồng tre","Thường thức chính trị"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q350",
    question: "Luận điểm sáng tạo của Hồ Chí Minh về cách mạng thuộc địa dựa trên cơ sở nào?",
    options: ["Tinh thần đấu tranh cách mạng của các dân tộc ở các nước thuộc địa","Thuộc địa là khâu yếu nhất trong sợi dây xích của chủ nghĩa đế quốc","Sự thức tỉnh của các dân tộc thuộc địa","Tinh thần đấu tranh của giai cấp vô sản ở chính quốc"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q351",
    question: "Nội dung nào sau đây thuộc luận điểm sáng tạo của Hồ Chí Minh về vấn đề Đảng cộng sản?",
    options: ["Về quy luật ra đời của Đảng Cộng sản Việt Nam","Về vấn đề tổ chức của Đảng Cộng sản Việt Nam","Về nguyên tắc xây dựng Đảng Cộng sản Việt Nam"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q352",
    question: "Theo Hồ Chí Minh, mọi người phải hiểu và tuyệt đối chấp hành pháp luật, bất kể người đó giữ cương vị nào. Vì thần linh pháp quyền là:",
    options: ["Sức mạnh do thần linh và vì con người","Sức mạnh do con người và vì con người","Sức mạnh do con người và vì thần linh"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q353",
    question: "Vận dụng tư tưởng Hồ Chí Minh trong chiến lược đoàn kết quốc tế thì bộ phận nào là hạt nhân đoàn kết dân tộc và đoàn kết quốc tế?",
    options: ["Đảng Cộng sản Việt Nam","Nhà nước","Đoàn thanh niên","Mặt trận tổ quốc"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q354",
    question: "Phạm vi vận dụng tư tưởng Hồ Chí Minh là đối tượng nào?",
    options: ["Đối với cách mạng Việt Nam","Đối với các dân tộc đang bị xâm lược và áp bức trên toàn thế giới","Đối với mọi quốc gia, dân tộc","Đối với cách mạng giải phóng dân tộc ở Việt Nam"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q355",
    question: "Nội dung nào không đúng về giá trị lý luận và thực tiễn của Tư tưởng Hồ Chí Minh về vấn đề dân tộc và cách mạng giải phóng dân tộc?",
    options: ["Làm phong phú học thuyết Mác-Lênin về cách mạng thuộc địa","Soi đường thắng lợi cho cách mạng giải phóng dân tộc ở Việt Nam","Nền tảng tư tưởng và kim chỉ nam cho mọi hành động của cách mạng Việt Nam","Là tiền đề cho thắng lợi của Cách mạng tháng 8"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q356",
    question: "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn thắng lợi phải có cái gì? *(cách mạng xã hội chủ nghĩa phải tiến hành do ai lãnh đạo?)*",
    options: ["Có một cá nhân xuất sắc lãnh đạo","Có Đảng của giai cấp công nhân lãnh đạo","Có tổ chức đoàn thể lãnh đạo","Có tiềm lực mạnh"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q357",
    question: "Theo Hồ Chí Minh, nhà nước do dân thể hiện ở chỗ nào?",
    options: ["Do nhân dân quyết định","Do nhân dân chi phối","Do nhân dân áp đặt","Do nhân dân kiểm soát"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q358",
    question: "Trong nghiên cứu tư tưởng Hồ Chí Minh, cần quán triệt quan điểm nào dưới đây?",
    options: ["Quan điểm bộ phận","Quan điểm chỉnh thể","Quan điểm toàn diện","Quan điểm toàn cục"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q359",
    question: "Quan điểm nào dưới đây thuộc về bản chất của chủ nghĩa xã hội trong tư tưởng Hồ Chí Minh như thế nào?",
    options: ["Có nền kinh tế, văn hóa, xã hội, đạo đức phát triển","Có nền kinh tế, văn hóa, và con người phát triển","Có nền kinh tế, văn hóa phát triển","Có nền kinh tế và đạo đức phát triển"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q360",
    question: "Theo Hồ Chí Minh, nhà nước vì dân là nhà nước như thế nào? / Theo Hồ Chí Minh, nhà nước vì dân là:",
    options: ["Nhà nước phải phụng sự nhân dân","Nhà nước phải phụng sự giai cấp cầm quyền","Nhà nước phải phụng sự Đảng Cộng sản"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q361",
    question: "Theo Hồ Chí Minh, Nhà nước vì dân là một Nhà nước lấy lợi ích chính đáng của nhân dân làm mục tiêu, tất cả đều vì lợi ích của nhân dân, ngoài ra:",
    options: ["Không có bất cứ một lợi ích nào khác","Chỉ có lợi ích tự thân của Nhà nước","Không có bất cứ lợi ích không chính đáng nào khác"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q362",
    question: "Quan điểm nào dưới đây thuộc về bản chất của CNXH trong tư tưởng Hồ Chí Minh?",
    options: ["Là chế độ còn một ít người bóc lột","Là chế độ không còn người bóc lột người","Là chế độ người bóc lột bị khinh rẻ","Là chế độ người bóc lột được thừa nhận"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q363",
    question: "Nguyên tắc cơ bản nào sau đây cần phải quán triệt trong nghiên cứu tư tưởng Hồ Chí Minh?",
    options: ["Quan điểm kế thừa và phát triển","Quan điểm kế thừa và toàn diện","Quan điểm cách mạng và cụ thể"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q364",
    question: "Tiền đề tư tưởng, lí luận dẫn đến sự hình thành tư tưởng Hồ Chí Minh là:",
    options: ["Giá trị truyền thống văn hiến Việt Nam","Giá trị truyền thống văn hóa Việt Nam","Giá trị tư tưởng Việt Nam","Giá trị truyền thống lễ tiết của Việt Nam"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q365",
    question: "Nguyên tắc cơ bản trong nghiên cứu tư tưởng Hồ Chí Minh là gì? *(chuẩn 100%)*",
    options: ["Thống nhất giữa lí luận và thực tiễn","Thống nhất giữa tính đảng và tính thực tiễn","Thống nhất giữa tính khoa học và thực tiễn","Thống nhất giữa tính khoa học và tính đảng"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q366",
    question: "Đâu là đáp án đúng nhất trong các phương án bên dưới?",
    options: ["Cùng với chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng và kim chỉ nam cho hành động của Đảng ta","Tư tưởng Hồ Chí Minh là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng","Chủ nghĩa Mác - Lênin là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng","Chủ nghĩa Mác - Lênin là nền tảng tư tưởng, kim chỉ nam cho hành động của tất cả các nước trên thế giới"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q367",
    question: "Theo văn kiện Đại hội XI của Đảng Cộng sản Việt Nam (2011). Tư tưởng Hồ Chí Minh là tư tưởng về những vấn đề gì?",
    options: ["Những vấn đề cơ bản của cách mạng Việt Nam","Những vấn đề cơ bản của cách mạng thế giới","Những vấn đề cơ bản của dân tộc","Những vấn đề cơ bản của nhân loại"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q368",
    question: "Lực lượng đoàn kết quốc tế theo Hồ Chí Minh cần phải đoàn kết với đối tượng nào?",
    options: ["Giai cấp công nhân, lực lượng xã hội chủ nghĩa, phong trào cộng sản và công nhân quốc tế, với các dân tộc thuộc địa bị áp bức và các lực lượng tiến bộ trên thế giới","Giai cấp nông dân, lực lượng xã hội chủ nghĩa, phong trào cộng sản và công nhân quốc tế, với các dân tộc thuộc địa bị áp bức và các lực lượng tiến bộ trên thế giới","Giai cấp lao động, lực lượng xã hội chủ nghĩa, phong trào cộng sản và công nhân quốc tế, với các dân tộc thuộc địa bị áp bức và các lực lượng tiến bộ trên thế giới","Tầng lớp trí thức, lực lượng xã hội chủ nghĩa, phong trào cộng sản và công nhân quốc tế, với các dân tộc thuộc địa bị áp bức và các lực lượng tiến bộ trên thế giới"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q369",
    question: "Theo Hồ Chí Minh, căn bệnh nào là một thứ vi trùng rất độc, đẻ ra hàng trăm thứ bệnh nguy hiểm? *(căn bệnh nguy hiểm nhất đối với cán bộ nhà nước)*",
    options: ["Chủ nghĩa tư bản","Chủ nghĩa cá nhân","Sự lười biếng","Thói quen và truyền thống lạc hậu"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q370",
    question: "Nói về đạo đức cách mạng, Hồ Chí Minh chỉ rõ: \"Vì muốn giải phóng cho dân tộc, giải phóng cho loài người là một công việc to tát, mà tự mình không có đạo đức, không có căn bản, tự mình đã hủ hóa, xấu xa thì làm nổi việc gì\". Câu nói trên của Hồ Chí Minh đề cập đến vấn đề gì sau đây?",
    options: ["Vai trò và sức mạnh của đạo đức","Chuẩn mực và nguyên tắc xây dựng đạo đức mới","Nguyên tắc xây dựng đạo đức mới","Các phẩm chất đạo đức mới"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q371",
    question: "Điền vào chỗ trống: Đại hội đại biểu toàn quốc lần thứ XI của Đảng Cộng sản Việt Nam đưa ra định nghĩa: \"Tư tưởng Hồ Chí Minh là... toàn diện sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam\"",
    options: ["Hệ thống các quan điểm","Hệ thống các luận điểm","Hệ thống các tư tưởng","Hệ thống các vấn đề"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q372",
    question: "Truyền thống nào của dân tộc Việt Nam là nguồn gốc hình thành tư tưởng Hồ Chí Minh?",
    options: ["Truyền thống yêu nước, lạc quan, yêu đời, có niềm tin vào chính nghĩa, tin vào sức mạnh của bản thân và dân tộc","Truyền thống nhân nghĩa, thủy chung, lạc quan, yêu đời, có niềm tin vào chính nghĩa, tin vào sức mạnh của bản thân và dân tộc","Truyền thống lạc quan, yêu đời, có niềm tin vào chính nghĩa, tin vào sức mạnh của bản thân và dân tộc","Truyền thống đoàn kết, lạc quan, yêu đời, có niềm tin vào chính nghĩa, tin vào sức mạnh của bản thân và dân tộc"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q373",
    question: "Theo quan điểm của Hồ Chí Minh, phẩm chất đạo đức nào là quan trọng nhất, bao trùm nhất, chi phối các phẩm chất khác?",
    options: ["Cần kiệm, liêm, chính, chí công vô tư","Có tinh thần quốc tế trong sáng","Có tình yêu thương con người, sống có tình, có nghĩa","Trung với nước, hiếu với dân"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q374",
    question: "Hồ Chí Minh cho rằng phát triển giáo dục để làm gì?",
    options: ["Nâng cao dân trí","Phát triển lâu dài","Chuẩn bị nhân tài","Mục tiêu bền vững"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q375",
    question: "Theo quan điểm của Hồ Chí Minh, nội dung xây dựng con người cần quan tâm xây dựng con người toàn diện như thế nào?",
    options: ["Vừa \"hồng\" vừa \"chuyên\"","Vừa \"chuyên\" vừa \"cần\"","Vừa \"cần\" vừa \"kiệm\"","Vừa \"kiệm\" vừa \"liêm\""],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q376",
    question: "Theo Hồ Chí Minh, động lực chủ yếu để phát triển đất nước là gì?",
    options: ["Sức mạnh đoàn kết của cả cộng đồng dân tộc","Sức mạnh của cá nhân con người","Sức mạnh thời đại","Vai trò lãnh đạo của Đảng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q377",
    question: "Theo Hồ Chí Minh, Liêm là luôn tôn trọng của công và của dân, đồng thời phải như thế nào?",
    options: ["\"Trong sạch, không tham lam\" tiền của, địa vị, danh tiếng","\"Trong sáng, không tham lam\" tiền của, địa vị, danh tiếng","\"Trong sạch, không ham muốn\" tiền của, địa vị, danh tiếng","\"Trong sạch, không đòi hỏi\" tiền của, địa vị, danh tiếng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q378",
    question: "Theo tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc được xác định là nhiệm vụ như thế nào?",
    options: ["Là nhiệm vụ mang tính lịch sử của cách mạng","Là nhiệm vụ quan trọng nhất của cách mạng","Là nhiệm vụ hàng đầu của cách mạng","Là mục tiêu của cách mạng"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q379",
    question: "Trong tư tưởng Hồ Chí Minh, nhân dân được xác định vị trí như thế nào của cách mạng?",
    options: ["Là động lực của cách mạng","Là mục tiêu của cách mạng","Là người bạn đường của cách mạng","Vừa là mục tiêu vừa là động lực của cách mạng"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q380",
    question: "Hồ Chí Minh cho rằng xây dựng văn hóa mới trước hết cần phải làm gì?",
    options: ["Phải xây dựng xã hội dân chủ","Tiếp thu tất cả các văn hóa du nhập","Tư tưởng phải được nuôi dưỡng","Tư tưởng phải được tự do"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q381",
    question: "Khi nói về Hồ Chí Minh, báo Uruquay viết:",
    options: ["Ông có một trái tim bao la như vũ trụ và tình yêu trẻ thơ vô bờ gắn bó","Ông người có tình cảm bao la như vũ trụ và tình yêu trẻ thơ vô bờ bến","Ông có một trái tim như vũ trụ và tình yêu trẻ thơ vô bờ bến"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q382",
    question: "Theo Hồ Chí Minh, người cách mạng phải có đạo đức, không có đạo đức thì sẽ như thế nào?",
    options: ["Dù tài giỏi mấy cũng bỏ đi","Dù tài giỏi mấy cũng không đáng dùng","Dù tài giỏi mấy cũng không lãnh đạo được nhân dân","Dù tài giỏi mấy cũng không xứng đáng là người cách mạng"],
    correctAnswer: [2],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q383",
    question: "Theo Hồ Chí Minh, phải kiên quyết khắc phục kịp thời các phản động lực trong con người và tổ chức. Đó là: *(=> Diệt trừ chủ nghĩa cá nhân => xây dựng con người mới xã hội chủ nghĩa)*",
    options: ["Chủ nghĩa cá nhân","Chủ nghĩa vị kỷ","Phong cách tiểu tư sản","Phong cách tư sản"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q384",
    question: "Tác phẩm đầu tiên của Hồ Chí Minh đề cập đến đạo đức cách mạng là tác phẩm nào?",
    options: ["Điều lệ vắn tắt","Đường Cách mệnh","Bản án chế độ thực dân Pháp","Tuyên ngôn độc lập"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q385",
    question: "Theo Hồ Chí Minh, vi trùng rất độc này đẻ ra... không dám đổi mới sáng tạo. Người đang đề cập đến vấn đề gì?",
    options: ["Chủ nghĩa cá nhân","Đế quốc","Chủ nghĩa tư bản","Giặc đói"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q386",
    question: "Hồ Chí Minh cho rằng khuyết điểm của thanh niên là gì?",
    options: ["Chuộng hình thức","Chuộng tự do","Chuộng lợi","Chuộng bề ngoài"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q387",
    question: "Theo Hồ Chí Minh, trung với nước là tuyệt đối trung thành với sự nghiệp dựng nước và giữ nước, trung thành với con đường đi lên của đất nước; là suốt đời phấn đấu cho ai?",
    options: ["Đảng, cho cách mạng","Nhà nước, cho cách mạng","Dân tộc, cho cách mạng","Cách mạng, quần chúng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q388",
    question: "Hồ Chí Minh cho rằng cán bộ muốn hướng dẫn nhân dân phải như thế nào?",
    options: ["Làm mực thước cho nhân dân bắt chước","Làm gương cho nhân dân","Làm mô hình cho dân theo","Làm quan cách mạng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q389",
    question: "Lối sống ích kỷ, chỉ biết có riêng mình, thu vén cho riêng mình, chỉ thấy công lao của mình mà quên công lao của người khác. Theo Hồ Chí Minh là gì?",
    options: ["Chủ nghĩa cá nhân","Chủ nghĩa vị kỷ","Chủ nghĩa tư bản","Phong cách tiểu tư sản"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q390",
    question: "Hồ Chí Minh cho rằng văn hóa có tính:",
    options: ["Dân tộc, khoa học và đại chúng","Dân tộc, khoa học và nhân dân","Dân tộc, khoa học và nhân bản"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q391",
    question: "Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc phải biến thành sức mạnh vật chất, trở thành lực lượng vật chất có tổ chức. Tổ chức đó chính là: / Để có thể biến sức mạnh tinh thần đoàn kết thành sức mạnh vật chất, theo Hồ Chí Minh cần xây dựng tổ chức nào?",
    options: ["Đảng Cộng sản","Quân đội","Nhà nước","Mặt trận dân tộc thống nhất"],
    correctAnswer: [3],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q392",
    question: "Theo Hồ Chí Minh, chí công vô tư là nêu cao chủ nghĩa tập thể, trừ bỏ vấn đề gì?",
    options: ["Chủ nghĩa cá nhân","Chủ nghĩa tư nhân","Chủ nghĩa tư bản","Chủ nghĩa vị kỷ"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q393",
    question: "Theo Tư tưởng Hồ Chí Minh, văn hóa có mấy chức năng chủ yếu?",
    options: ["Hai","Ba","Bốn","Năm"],
    correctAnswer: [1],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q394",
    question: "Hồ Chí Minh cho rằng xây dựng nhà nước trong sạch vững mạnh cần phải làm gì? *(Để tăng cường tính nghiêm minh của pháp luật => \"đức trị\" và \"pháp trị\")*",
    options: ["Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức cách mạng","Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức cán bộ","Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức quần chúng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q395",
    question: "Hồ Chí Minh nhìn nhận con người như điều gì? / Con người trong quan điểm của Hồ Chí Minh được nhìn nhận như một:",
    options: ["Chỉnh thể","Tế bào","Xã hội","Cộng đồng"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q396",
    question: "Hồ Chí Minh cho rằng:",
    options: ["Văn hoá vừa là mục tiêu, vừa là động lực của cách mạng => chăm lo đời sống vật chất và tinh thần của nhân dân","Văn hoá vừa là cơ sở, vừa là động lực của cách mạng => chăm lo đời sống vật chất và tinh thần của nhân dân","Văn hoá vừa là mục tiêu, vừa là nhân tố quyết định của cách mạng => chăm lo đời sống vật chất và tinh thần của nhân dân"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q397",
    question: "Theo Hồ Chí Minh cho rằng đạo đức cách mạng không phải là điều gì?",
    options: ["Từ trên trời sa xuống","Phẩm chất vốn có","Tự nhiên mà có","Có sẵn trong tự nhiên"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
  {
    id: "q398",
    question: "Hồ Chí Minh chỉ ra nguyên tắc xây dựng mặt trận là gì?",
    options: ["Mặt trận phải hoạt động theo nguyên tắc hiệp thương dân chủ","Mặt trận phải hoạt động theo nguyên tắc hiệp thương dân quyền","Mặt trận phải hoạt động theo nguyên tắc hiệp thương quần chúng","Mặt trận phải hoạt động theo nguyên tắc hiệp thương nhân dân"],
    correctAnswer: [0],
    explanation: "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ.",
    points: 10
  },
];
