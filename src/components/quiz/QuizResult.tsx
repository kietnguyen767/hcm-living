import * as React from "react";
import { Award, RotateCcw, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  onRestart: () => void;
  onGoToTimeline: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({
  score,
  totalQuestions,
  correctAnswers,
  onRestart,
  onGoToTimeline,
}) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  let title = "Cố lên nhé!";
  let message = "Có vẻ bạn chưa tìm hiểu sâu lắm về cuộc đời của Bác. Hãy đọc lại phần Dòng lịch sử và các Tác phẩm tiêu biểu để có kết quả tốt hơn nhé!";
  let color = "text-brand-primary";

  if (percentage === 100) {
    title = "Xuất sắc! Bạn là chuyên gia lịch sử!";
    message = "Bạn trả lời đúng tất cả các câu hỏi. Kiến thức của bạn về cuộc đời và sự nghiệp Chủ tịch Hồ Chí Minh thật đáng nể phục!";
    color = "text-brand-secondary font-bold";
  } else if (percentage >= 70) {
    title = "Rất tuyệt vời!";
    message = "Bạn nắm rất vững các cột mốc lịch sử và tác phẩm quan trọng của Chủ tịch Hồ Chí Minh. Hãy tiếp tục phát huy nhé!";
    color = "text-brand-tertiary font-bold";
  } else if (percentage >= 40) {
    title = "Đạt yêu cầu!";
    message = "Bạn có kiến thức nền tảng tương đối tốt, nhưng vẫn còn một số chi tiết cần bổ sung. Hãy tham khảo thêm dòng lịch sử của Người nhé!";
    color = "text-brand-gold font-bold";
  }

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-brand-paper border border-brand-outline/35 rounded-2xl max-w-xl mx-auto shadow-sm shadow-[#1a0f0a]/5">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-secondary/10 border-2 border-brand-gold/25 text-brand-gold mb-6 shadow-md">
        <Award className="h-10 w-10 animate-bounce" />
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold font-serif text-brand-primary mb-2 tracking-tight">
        Kết quả Trắc nghiệm
      </h2>
      <h3 className={`text-lg mb-4 ${color}`}>{title}</h3>
      <p className="text-brand-on-surface-variant text-sm font-light leading-relaxed mb-8 max-w-md">{message}</p>

      {/* Stats Box */}
      <div className="grid grid-cols-2 gap-4 w-full bg-brand-surface border border-brand-outline-variant/70 rounded-xl p-5 mb-8">
        <div className="flex flex-col items-center border-r border-brand-outline-variant/50">
          <span className="text-[10px] text-brand-on-surface-variant font-bold uppercase tracking-wider mb-1">Điểm số</span>
          <span className="text-2xl font-bold text-brand-primary">{score}</span>
          <span className="text-[10px] text-brand-on-surface-variant/70 mt-0.5">/ {totalQuestions * 10} điểm</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[10px] text-brand-on-surface-variant font-bold uppercase tracking-wider mb-1">Tỷ lệ đúng</span>
          <span className="text-2xl font-bold text-brand-on-surface">{percentage}%</span>
          <span className="text-[10px] text-brand-on-surface-variant/70 mt-0.5">({correctAnswers} / {totalQuestions} câu)</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <Button
          onClick={onRestart}
          variant="secondary"
          className="flex-1 flex items-center justify-center gap-2 cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" />
          Chơi lại
        </Button>
        <Button
          onClick={onGoToTimeline}
          className="flex-1 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Calendar className="h-4 w-4" />
          Xem Dòng lịch sử
        </Button>
      </div>
    </div>
  );
};
