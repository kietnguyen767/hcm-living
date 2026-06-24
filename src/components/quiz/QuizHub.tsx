"use client";

import * as React from "react";
import { QuizQuestion, QuizBank, getQuizByBank } from "@/data/quizData";
import { QuizStart } from "./QuizStart";
import { QuizPlay } from "./QuizPlay";
import { QuizResult } from "./QuizResult";
import { QuizReview } from "./QuizReview";
import { shuffleArray } from "@/lib/utils";

interface QuizHubProps {
  onGoToTimeline: () => void;
}

export const QuizHub: React.FC<QuizHubProps> = ({ onGoToTimeline }) => {
  const [step, setStep] = React.useState<"start" | "play" | "result" | "review">("start");
  const [questions, setQuestions] = React.useState<QuizQuestion[]>([]);
  const [finalScore, setFinalScore] = React.useState(0);
  const [finalCorrectCount, setFinalCorrectCount] = React.useState(0);

  // Initialize and shuffle quiz questions
  const startQuiz = (count: number, bank: QuizBank) => {
    const bankQuestions = getQuizByBank(bank);
    const shuffled = shuffleArray(bankQuestions).slice(0, count);
    setQuestions(shuffled);
    setStep("play");
  };

  const finishQuiz = (score: number, correctCount: number) => {
    setFinalScore(score);
    setFinalCorrectCount(correctCount);
    setStep("result");
  };

  const restartQuiz = () => {
    setStep("start");
    setFinalScore(0);
    setFinalCorrectCount(0);
  };

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      {step === "start" && (
        <QuizStart onStart={startQuiz} onReview={() => setStep("review")} />
      )}
      
      {step === "review" && (
        <QuizReview onBack={() => setStep("start")} />
      )}
      
      {step === "play" && (
        <QuizPlay questions={questions} onFinish={finishQuiz} />
      )}
      
      {step === "result" && (
        <QuizResult
          score={finalScore}
          totalQuestions={questions.length}
          correctAnswers={finalCorrectCount}
          onRestart={restartQuiz}
          onGoToTimeline={onGoToTimeline}
        />
      )}
    </div>
  );
};
