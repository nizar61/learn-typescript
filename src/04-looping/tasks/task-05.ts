/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores: number[] = [
  98, 87, 76, 65, 92,
  95, 84, 73, 89, 100,
  81, 70, 96, 85, 78,
  67, 90, 74, 83, 88
];

let totalScore: number = 0;

let goldMedal: number = 0;
let silverMedal: number = 0;
let bronzeMedal: number = 0;
let noMedal: number = 0;

for (const score of scores) {
  // Calculate total score
  totalScore += score;

  // Determine medal category
  if (score >= 95) {
    goldMedal++;
  } else if (score >= 85) {
    silverMedal++;
  } else if (score >= 75) {
    bronzeMedal++;
  } else {
    noMedal++;
  }
}

const averageScore: number = totalScore / scores.length;

console.log("=== Competition Summary ===");
console.log("Gold Medal Winners:", goldMedal);
console.log("Silver Medal Winners:", silverMedal);
console.log("Bronze Medal Winners:", bronzeMedal);
console.log("No Medal:", noMedal);
console.log("Average Score:", averageScore);