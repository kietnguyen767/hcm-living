const fs = require('fs');

const content = fs.readFileSync('onthi.md', 'utf-8');
const lines = content.split('\n');

const questions = [];
let currentQuestion = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  // Match **Câu X:** Question text
  const qMatch = line.match(/^\*\*Câu\s+\d+:\*\*\s+(.*)$/);
  if (qMatch) {
    if (currentQuestion) {
      questions.push(currentQuestion);
    }
    currentQuestion = {
      id: `q${questions.length + 1}`,
      question: qMatch[1],
      options: [],
      correctAnswer: -1,
      explanation: "",
      points: 10
    };
    continue;
  }

  // Match Options: A. B. C. D.
  const optMatch = line.match(/^([A-D])\.\s+(.*)$/);
  if (optMatch && currentQuestion) {
    currentQuestion.options.push(optMatch[2]);
    continue;
  }

  // Match Answer: **Đáp án: X** *(Explanation)*
  const ansMatch = line.match(/^\*\*Đáp án:\s+([A-D](?:,\s*[A-D])*)\*\*(.*)$/);
  if (ansMatch && currentQuestion) {
    const ansLetters = ansMatch[1].split(',').map(s => s.trim());
    const explainText = ansMatch[2] ? ansMatch[2].trim() : "";
    
    // Map A -> 0, B -> 1, C -> 2, D -> 3
    const ansIndices = ansLetters.map(letter => letter.charCodeAt(0) - 65);
    currentQuestion.correctAnswer = ansIndices;
    
    // Extract explanation if present, e.g. *(Ghi chú: ...)*
    if (explainText) {
      // Remove surrounding *()*, *...*
      let cleanExplain = explainText.replace(/^\*\((.*)\)\*$/, '$1');
      cleanExplain = cleanExplain.replace(/^\*(.*)\*$/, '$1');
      currentQuestion.explanation = cleanExplain;
    } else {
      currentQuestion.explanation = "Đây là kiến thức quan trọng về tư tưởng Hồ Chí Minh cần ghi nhớ."; // default explanation
    }
    continue;
  }
}

if (currentQuestion) {
  questions.push(currentQuestion);
}

// Convert to TypeScript string
let tsOutput = `export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number[]; // Array of 0-based indices
  explanation: string;
  points: number;
}

export const quizQuestions: QuizQuestion[] = [\n`;

questions.forEach(q => {
  tsOutput += `  {
    id: ${JSON.stringify(q.id)},
    question: ${JSON.stringify(q.question)},
    options: ${JSON.stringify(q.options)},
    correctAnswer: ${JSON.stringify(q.correctAnswer)},
    explanation: ${JSON.stringify(q.explanation)},
    points: ${q.points}
  },\n`;
});

tsOutput += `];\n`;

fs.writeFileSync('src/data/quizData.ts', tsOutput);
console.log(`Successfully parsed ${questions.length} questions.`);
