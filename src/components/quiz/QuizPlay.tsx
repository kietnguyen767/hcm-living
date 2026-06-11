"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizQuestion } from "@/data/quizData";
import { cn } from "@/lib/utils";
import { Check, X, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizPlayProps {
  questions: QuizQuestion[];
  onFinish: (score: number, correctAnswers: number) => void;
}

export const QuizPlay: React.FC<QuizPlayProps> = ({ questions, onFinish }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<number, number>>({});

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (optionIdx: number) => {
    if (answers[currentIndex] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [currentIndex]: optionIdx }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleFinish = () => {
    let finalScore = 0;
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) {
        finalScore += q.points;
        correctCount += 1;
      }
    });
    onFinish(finalScore, correctCount);
  };

  const isCurrentAnswered = answers[currentIndex] !== undefined;
  const currentSelectedOption = answers[currentIndex];

  const currentScore = questions.reduce((acc, q, idx) => {
    if (answers[idx] === q.correctAnswer) {
      return acc + q.points;
    }
    return acc;
  }, 0);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch min-h-[600px]">
      {/* Left Panel: Question Grid */}
      <div className="w-full lg:w-80 shrink-0 bg-brand-paper border border-brand-outline/35 rounded-2xl p-6 lg:p-8 shadow-sm shadow-[#1a0f0a]/5 flex flex-col">
        <h3 className="text-brand-primary font-bold mb-4 uppercase tracking-wider text-sm border-b border-brand-outline/30 pb-2">
          Bảng Câu Hỏi
        </h3>
        <div className="overflow-y-auto pr-2 mb-6 scrollbar-thin scrollbar-thumb-brand-outline/50 scrollbar-track-transparent max-h-[300px] lg:max-h-[420px]">
          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, idx) => {
              const isAnswered = answers[idx] !== undefined;
              const isCorrect = isAnswered && answers[idx] === questions[idx].correctAnswer;
              const isActive = currentIndex === idx;

              let btnStyle = "border-brand-outline/40 text-brand-on-surface-variant hover:bg-brand-surface";
              if (isActive) {
                btnStyle = "border-brand-primary bg-brand-primary/10 text-brand-primary font-bold shadow-sm ring-1 ring-brand-primary/50";
              } else if (isAnswered) {
                if (isCorrect) {
                  btnStyle = "border-brand-tertiary/50 bg-brand-tertiary/10 text-brand-tertiary";
                } else {
                  btnStyle = "border-brand-error/50 bg-brand-error/10 text-brand-error";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={cn(
                    "aspect-square rounded-md border text-sm font-medium transition-all flex items-center justify-center",
                    btnStyle
                  )}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-brand-outline/30 space-y-3">
          <div className="text-xs text-brand-on-surface-variant space-y-2.5">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-brand-tertiary/20 border border-brand-tertiary/50"></div> Đúng</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-brand-error/20 border border-brand-error/50"></div> Sai</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-brand-primary/20 border border-brand-primary"></div> Đang chọn</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-transparent border border-brand-outline/40"></div> Chưa trả lời</div>
          </div>

          <Button
            onClick={handleFinish}
            className="w-full mt-4 bg-brand-primary hover:bg-brand-primary/90 text-white"
          >
            Nộp Bài Sớm
          </Button>
        </div>
      </div>

      {/* Right Panel: Main Content */}
      <div className="flex-1 w-full bg-brand-paper border border-brand-outline/35 p-8 sm:p-10 lg:p-12 rounded-2xl shadow-sm shadow-[#1a0f0a]/5">
        {/* Header Info */}
        <div className="flex items-center justify-between border-b border-brand-outline-variant/30 pb-4 mb-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-on-surface-variant">
          <div>
            Câu hỏi <span className="text-brand-primary font-bold">{currentIndex + 1}</span> / {questions.length}
          </div>
          <div className="flex items-center gap-1">
            <Award className="h-4.5 w-4.5 text-brand-gold" />
            Điểm số: <span className="text-brand-primary font-bold">{currentScore}</span>
          </div>
        </div>

        {/* Progress Line */}
        <div className="w-full bg-brand-container h-1.5 rounded-full overflow-hidden mb-8">
          <div
            className="bg-brand-gold h-full rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question Card */}
        <div className="min-h-[90px] mb-8">
          <h3 className="text-lg sm:text-xl font-bold font-serif text-brand-primary leading-relaxed">
            {currentQuestion.question}
          </h3>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = currentSelectedOption === idx;
            const isCorrectAnswer = idx === currentQuestion.correctAnswer;

            let optionStyle = "bg-brand-surface border-brand-outline-variant/50 text-brand-on-surface-variant hover:border-brand-gold hover:text-brand-on-surface";
            let icon = null;

            if (isCurrentAnswered) {
              if (isCorrectAnswer) {
                optionStyle = "bg-brand-tertiary/10 border-brand-tertiary text-brand-tertiary font-bold";
                icon = <Check className="h-5 w-5 text-brand-tertiary shrink-0" />;
              } else if (isSelected) {
                optionStyle = "bg-brand-error/10 border-brand-error text-brand-error font-bold";
                icon = <X className="h-5 w-5 text-brand-error shrink-0" />;
              } else {
                optionStyle = "bg-brand-surface border-brand-outline-variant/20 text-brand-outline/60 opacity-50";
              }
            }

            return (
              <button
                key={idx}
                disabled={isCurrentAnswered}
                onClick={() => handleOptionSelect(idx)}
                className={cn(
                  "flex items-center justify-between gap-4 p-4 rounded-xl border text-left text-sm sm:text-base transition-all select-none",
                  !isCurrentAnswered ? "cursor-pointer" : "cursor-default",
                  optionStyle
                )}
              >
                <span className="flex-1">{option}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {/* Explanation & Next controls */}
        <AnimatePresence mode="wait">
          {isCurrentAnswered && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Explanation box */}
              <div className="bg-brand-surface border border-brand-outline-variant/70 rounded-xl p-5 text-sm leading-relaxed">
                <h4 className="text-brand-secondary font-bold uppercase tracking-widest text-xs mb-2">Bối cảnh lịch sử:</h4>
                <p className="text-brand-on-surface-variant font-light">{currentQuestion.explanation}</p>
              </div>

              {/* Next button */}
              <div className="flex justify-end">
                {currentIndex < questions.length - 1 ? (
                  <Button
                    onClick={handleNext}
                    className="flex items-center gap-1.5 group cursor-pointer"
                  >
                    Câu tiếp theo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleFinish}
                    className="flex items-center gap-1.5 group cursor-pointer bg-brand-tertiary hover:bg-brand-tertiary/90 text-white"
                  >
                    Xem kết quả
                    <Award className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
