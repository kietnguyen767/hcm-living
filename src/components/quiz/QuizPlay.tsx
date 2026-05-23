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
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [correctCount, setCorrectCount] = React.useState(0);

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (optionIdx: number) => {
    if (isAnswered) return;
    
    setSelectedOption(optionIdx);
    setIsAnswered(true);

    const isCorrect = optionIdx === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + currentQuestion.points);
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onFinish(score, correctCount);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-brand-paper border border-brand-outline/35 p-6 sm:p-8 rounded-2xl shadow-sm shadow-[#1a0f0a]/5">
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-brand-outline-variant/30 pb-4 mb-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-on-surface-variant">
        <div>
          Câu hỏi <span className="text-brand-primary font-bold">{currentIndex + 1}</span> / {questions.length}
        </div>
        <div className="flex items-center gap-1">
          <Award className="h-4.5 w-4.5 text-brand-gold" />
          Điểm số: <span className="text-brand-primary font-bold">{score}</span>
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
          const isSelected = selectedOption === idx;
          const isCorrectAnswer = idx === currentQuestion.correctAnswer;
          
          let optionStyle = "bg-brand-surface border-brand-outline-variant/50 text-brand-on-surface-variant hover:border-brand-gold hover:text-brand-on-surface";
          let icon = null;

          if (isAnswered) {
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
              disabled={isAnswered}
              onClick={() => handleOptionSelect(idx)}
              className={cn(
                "flex items-center justify-between gap-4 p-4 rounded-xl border text-left text-sm sm:text-base transition-all select-none",
                !isAnswered ? "cursor-pointer" : "cursor-default",
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
      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="flex flex-col gap-6"
          >
            {/* Explanation box */}
            <div className="bg-brand-surface border border-brand-outline-variant/70 rounded-xl p-5 text-sm leading-relaxed">
              <h4 className="text-brand-secondary font-bold uppercase tracking-widest text-xs mb-2">Bối cảnh lịch sử:</h4>
              <p className="text-brand-on-surface-variant font-light">{currentQuestion.explanation}</p>
            </div>

            {/* Next button */}
            <div className="flex justify-end">
              <Button
                onClick={handleNext}
                className="flex items-center gap-1.5 group cursor-pointer"
              >
                {currentIndex < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
