import * as React from "react";
import { BrainCircuit, Play, CheckCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quizQuestions } from "@/data/quizData";

interface QuizStartProps {
  onStart: (count: number) => void;
  onReview?: () => void;
}

export const QuizStart: React.FC<QuizStartProps> = ({ onStart, onReview }) => {
  const [questionCount, setQuestionCount] = React.useState<number | string>(0);

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
          <span>Bạn có thể <strong>tự chọn</strong> số lượng câu hỏi mà mình muốn trả lời.</span>
        </div>
        <div className="flex items-start gap-3 text-sm text-brand-on-surface-variant font-light">
          <CheckCircle className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
          <span>Mỗi câu trả lời đúng được cộng <strong className="text-brand-on-surface">10 điểm</strong>. Không trừ điểm khi sai. Câu hỏi được xáo trộn ngẫu nhiên mỗi lần chơi.</span>
        </div>
        <div className="flex items-start gap-3 text-sm text-brand-on-surface-variant font-light">
          <CheckCircle className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
          <span>Hệ thống hiển thị lời giải chi tiết ngay sau mỗi đáp án giúp bạn học hỏi thêm kiến thức hữu ích.</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 w-full mt-4">
        <div className="flex items-center gap-3 bg-brand-surface border border-brand-outline/50 rounded-lg p-2 px-4 shadow-sm">
          <label htmlFor="questionCount" className="text-sm font-medium text-brand-on-surface-variant">
            Số lượng câu hỏi:
          </label>
          <input
            id="questionCount"
            type="number"
            min="0"
            max={quizQuestions.length}
            value={questionCount}
            onFocus={() => {
              if (questionCount === 0 || questionCount === '0') {
                setQuestionCount('');
              }
            }}
            onChange={(e) => {
              const val = e.target.value;
              if (val === '') {
                setQuestionCount('');
                return;
              }
              const num = parseInt(val);
              if (!isNaN(num)) {
                setQuestionCount(Math.min(quizQuestions.length, Math.max(0, num)));
              }
            }}
            className="w-16 px-2 py-1 border-b-2 border-brand-primary/30 bg-transparent text-center text-lg font-bold text-brand-primary focus:outline-none focus:border-brand-primary transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          {onReview && (
            <Button 
              onClick={onReview} 
              variant="outline"
              size="lg" 
              className="flex items-center gap-2 group cursor-pointer border-brand-primary text-brand-primary hover:bg-brand-primary/10 px-8 py-6 rounded-full text-lg shadow-sm transition-all"
            >
              <BookOpen className="h-5 w-5 transition-transform group-hover:scale-110" />
              Ôn tập tài liệu
            </Button>
          )}
          <Button 
            onClick={() => {
              const count = typeof questionCount === 'number' ? questionCount : parseInt(questionCount as string) || 0;
              if (count > 0) onStart(count);
            }} 
            disabled={!questionCount || questionCount === 0 || questionCount === ''}
            size="lg" 
            className="flex items-center gap-2 group cursor-pointer bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Bắt đầu ngay
            <Play className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};
