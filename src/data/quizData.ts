// Barrel file: re-exports all quiz data and types for backward compatibility
export { type QuizQuestion, type QuizBank } from './quizTypes';
export { hcmQuizQuestions } from './hcmQuizData';
export { mlnQuizQuestions } from './mlnQuizData';

import { hcmQuizQuestions } from './hcmQuizData';
import { mlnQuizQuestions } from './mlnQuizData';
import type { QuizQuestion, QuizBank } from './quizTypes';

// Backward-compatible: keeps the old export name working
export const quizQuestions: QuizQuestion[] = [...hcmQuizQuestions, ...mlnQuizQuestions];

// Helper to get questions by bank
export function getQuizByBank(bank: QuizBank): QuizQuestion[] {
  switch (bank) {
    case 'hcm': return hcmQuizQuestions;
    case 'mln': return mlnQuizQuestions;
    case 'all': return [...hcmQuizQuestions, ...mlnQuizQuestions];
  }
}
