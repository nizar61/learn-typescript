/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
  { name: "Alya", score: 88 },
  { name: "Budi", score: 71 },
  { name: "Citra", score: 95 },
  { name: "Dimas", score: 63 },
  { name: "Eka", score: 84 },
  { name: "Fajar", score: 79 },
  { name: "Gita", score: 92 },
  { name: "Hana", score: 67 }
];

let totalScore: number = 0;

let gradeA: number = 0;
let gradeB: number = 0;
let gradeC: number = 0;
let gradeD: number = 0;

let highestScore: number = students[0].score;
let lowestScore: number = students[0].score;

for (const student of students) {

  // Calculate total score
  totalScore += student.score;

  // Determine grade
  if (student.score >= 90) {
    gradeA++;
  } else if (student.score >= 80) {
    gradeB++;
  } else if (student.score >= 70) {
    gradeC++;
  } else {
    gradeD++;
  }

  // Find highest score
  if (student.score > highestScore) {
    highestScore = student.score;
  }

  // Find lowest score
  if (student.score < lowestScore) {
    lowestScore = student.score;
  }
}

const averageScore: number = totalScore / students.length;

console.log("=== Student Grade Summary ===");
console.log("Grade A:", gradeA);
console.log("Grade B:", gradeB);
console.log("Grade C:", gradeC);
console.log("Grade D:", gradeD);
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore);