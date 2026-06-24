export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number[]; // Array of 0-based indices
  explanation: string;
  points: number;
}

export type QuizBank = 'hcm' | 'mln' | 'all';
