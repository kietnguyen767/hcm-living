#!/usr/bin/env node
/**
 * Parse mln.md into mlnQuizData.ts
 * 
 * Format in mln.md:
 *   Câu N: <question text>
 *     A. <option A>
 *     B. <option B>
 *     C. <option C>
 *     D. <option D>
 *   => Đáp án: <A|B|C|D|AB|ABC|...>
 */

const fs = require('fs');
const path = require('path');

const mlnPath = path.join(__dirname, '..', 'mln.md');
const outputPath = path.join(__dirname, '..', 'src', 'data', 'mlnQuizData.ts');

const content = fs.readFileSync(mlnPath, 'utf-8');
const lines = content.split('\n');

const questions = [];
let i = 0;

while (i < lines.length) {
  const line = lines[i].trim();
  
  // Match "Câu N:" pattern
  const questionMatch = line.match(/^Câu\s+(\d+)\s*:\s*(.+)/);
  if (!questionMatch) {
    i++;
    continue;
  }

  const questionNum = parseInt(questionMatch[1]);
  let questionText = questionMatch[2].trim();
  
  // Collect continuation lines of question text (lines that don't start with A./B./C./D. or =>)
  i++;
  while (i < lines.length) {
    const nextLine = lines[i].trim();
    if (!nextLine || nextLine.match(/^[A-Z]\.\s/) || nextLine.match(/^=>\s/)) break;
    // Check if it's not an option line
    if (!nextLine.match(/^[A-Z]\./)) {
      questionText += ' ' + nextLine;
      i++;
    } else {
      break;
    }
  }

  // Parse options A, B, C, D (and possibly E, F)
  const options = [];
  const optionLabels = [];
  while (i < lines.length) {
    const optLine = lines[i].trim();
    const optMatch = optLine.match(/^([A-Z])\.\s*(.+)/);
    if (optMatch) {
      optionLabels.push(optMatch[1]);
      options.push(optMatch[2].trim());
      i++;
    } else {
      break;
    }
  }

  // Parse answer line: => Đáp án: X or => Đáp án: ABC
  let correctAnswer = [];
  while (i < lines.length) {
    const ansLine = lines[i].trim();
    const ansMatch = ansLine.match(/^=>\s*Đáp án\s*:\s*(.+)/);
    if (ansMatch) {
      const ansStr = ansMatch[1].trim();
      // Handle formats: "A", "AB", "ABC", "BD", etc.
      // Also handle "Cả a, b và c đều đúng" style answers embedded in options
      for (const char of ansStr) {
        const idx = optionLabels.indexOf(char.toUpperCase());
        if (idx !== -1) {
          correctAnswer.push(idx);
        }
      }
      i++;
      break;
    }
    i++;
  }

  if (options.length > 0 && correctAnswer.length > 0) {
    questions.push({
      id: `mln_q${questionNum}`,
      question: questionText,
      options,
      correctAnswer,
      explanation: 'Đây là kiến thức quan trọng về Chủ nghĩa xã hội khoa học cần ghi nhớ.',
      points: 10,
    });
  }
}

// Generate TypeScript output
let ts = `import { QuizQuestion } from "./quizTypes";\n\n`;
ts += `export const mlnQuizQuestions: QuizQuestion[] = [\n`;

for (const q of questions) {
  // Escape quotes in strings
  const escQ = q.question.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const escOpts = q.options.map(o => `"${o.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`);
  const escExpl = q.explanation.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

  ts += `  {\n`;
  ts += `    id: "${q.id}",\n`;
  ts += `    question: "${escQ}",\n`;
  ts += `    options: [${escOpts.join(',')}],\n`;
  ts += `    correctAnswer: [${q.correctAnswer.join(',')}],\n`;
  ts += `    explanation: "${escExpl}",\n`;
  ts += `    points: ${q.points}\n`;
  ts += `  },\n`;
}

ts += `];\n`;

fs.writeFileSync(outputPath, ts, 'utf-8');
console.log(`✅ Parsed ${questions.length} questions from mln.md`);
console.log(`✅ Written to ${outputPath}`);

// Print any questions with multiple correct answers for verification
const multiAnswer = questions.filter(q => q.correctAnswer.length > 1);
console.log(`\n📋 Questions with multiple correct answers: ${multiAnswer.length}`);
multiAnswer.forEach(q => {
  console.log(`  ${q.id}: correctAnswer = [${q.correctAnswer.join(',')}]`);
});
