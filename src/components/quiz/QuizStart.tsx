import * as React from "react";
import { BrainCircuit, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizStartProps {
  onStart: () => void;
  questionCount: number;
}

export const QuizStart: React.FC<QuizStartProps> = ({ onStart, questionCount }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-brand-paper border border-brand-outline/35 rounded-2xl max-w-2xl mx-auto shadow-sm shadow-[#1a0f0a]/5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-secondary/10 border border-brand-gold/25 text-brand-secondary mb-6 shadow-md shadow-brand-secondary/5 animate-pulse">
        <BrainCircuit className="h-8 w-8" />
      </div>

      <h2 className="text-3xl font-bold font-serif text-brand-primary mb-4 tracking-tight">
        Trắc nghiệm về Chủ tịch Hồ Chí Minh
      </h2>
      
      <p className="text-brand-on-surface-variant text-base leading-relaxed mb-8 max-w-lg font-light">
        Bạn hiểu biết bao nhiêu về cuộc đời bôn ba cứu nước, sự nghiệp vĩ đại và các tác phẩm bất hủ của Bác Hồ? Hãy thử tài kiến thức của mình qua bộ câu hỏi trắc nghiệm này.
      </p>

      {/* Rules Card */}
      <div className="w-full bg-brand-surface border border-brand-outline-variant/70 rounded-xl p-5 text-left mb-8 space-y-3.5">
        <h4 className="text-brand-secondary font-bold text-xs uppercase tracking-widest mb-2">Quy định và cách tính điểm:</h4>
        <div className="flex items-start gap-3 text-sm text-brand-on-surface-variant font-light">
          <CheckCircle className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
          <span>Tổng số câu hỏi: <strong className="text-brand-on-surface">{questionCount} câu hỏi</strong> trắc nghiệm.</span>
        </div>
        <div className="flex items-start gap-3 text-sm text-brand-on-surface-variant font-light">
          <CheckCircle className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
          <span>Mỗi câu trả lời đúng được cộng <strong className="text-brand-on-surface">10 điểm</strong>. Không trừ điểm khi sai.</span>
        </div>
        <div className="flex items-start gap-3 text-sm text-brand-on-surface-variant font-light">
          <CheckCircle className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
          <span>Hệ thống hiển thị lời giải chi tiết ngay sau mỗi đáp án giúp bạn học hỏi thêm kiến thức hữu ích.</span>
        </div>
      </div>

      <Button
        onClick={onStart}
        size="lg"
        className="flex items-center gap-2 group cursor-pointer"
      >
        Bắt đầu Trắc nghiệm
        <Play className="h-4.5 w-4.5 transition-transform group-hover:scale-110" />
      </Button>
    </div>
  );
};
