"use client";

import * as React from "react";
import { quizQuestions, QuizQuestion } from "@/data/quizData";
import { QuizStart } from "./QuizStart";
import { QuizPlay } from "./QuizPlay";
import { QuizResult } from "./QuizResult";
import { shuffleArray } from "@/lib/utils";

interface QuizHubProps {
  onGoToTimeline: () => void;
}

export const QuizHub: React.FC<QuizHubProps> = ({ onGoToTimeline }) => {
  const [step, setStep] = React.useState<"start" | "play" | "result">("start");
  const [questions, setQuestions] = React.useState<QuizQuestion[]>([]);
  const [finalScore, setFinalScore] = React.useState(0);
  const [finalCorrectCount, setFinalCorrectCount] = React.useState(0);

  // Initialize and shuffle quiz questions
  const startQuiz = (count: number) => {
    const shuffled = shuffleArray(quizQuestions).slice(0, count);
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
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {step === "start" && (
        <QuizStart onStart={startQuiz} />
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
