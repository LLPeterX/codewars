/* 
7kyu - Tetris Series #1 — Scoring System
https://www.codewars.com/kata/5da9af1142d7910001815d32/train/javascript


*/


function getScore(arr) {
  let removedLines = score = 0;
  for (let n of arr) {
    if (n > 0) {
      let level = ~~(removedLines / 10) + 1;
      score += [40, 100, 300, 1200][n - 1] * level;
      removedLines += n;
    }
  }
  return score;
}

console.log(getScore([0, 1, 2, 3, 4]), 1640);
console.log(getScore([0, 1, 1, 3, 0, 2, 1, 2]), 620);
console.log(getScore([2, 0, 4, 2, 2, 3, 0, 0, 3, 3]), 3300); // FAIL
console.log(getScore([0]), 0);
console.log(getScore([]), 0);
console.log(getScore([3, 1, 3, 2, 0, 3, 1, 2, 3, 3, 2, 0, 2, 3, 4, 4, 1, 3, 0, 1, 0, 3, 0, 3, 0, 4, 3, 3, 4]), 33780);

