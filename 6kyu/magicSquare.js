/* 
6kyu - Verify if it's valid (n x n) Magic Square with custom rules
https://www.codewars.com/kata/633d7409c8bd7c4a853c2ba9/train/javascript

Square has to follow such rules to be called Magic Square:

* Sum of values in each row is equal to x
* Sum of values in each column is equal to x
* Sum of values in (each of) diagonal is equal to x
* There is no duplicated numbers
* All numbers forms valid sequence arithmetic progression
* There is additional rule, which our square has to follow to be called valid:
 - Gap in sequence has to be equal to given function param: gap.



 */

function isValid(square, gap) {
  let x = square[0].reduce((sum, v) => sum + v, 0);
  let sumDiag = 0;
  let gapArray = [];
  let nums = new Set();
  for (let i = 0; i < square.length; i++) {
    let sumRow = 0;
    for (let j = 0; j < square.length; j++) {
      gapArray.push(square[i][j]);
      sumRow += square[i][j];
      if (i == j) sumDiag += square[i][j];
      nums.add(square[i][j]);
    }
    if (sumRow !== x) return false;
  }
  if (sumDiag !== x) return false;
  if (nums.size !== square.length ** 2) return false;
  gapArray.sort((a, b) => a - b);
  return gapArray.slice(1).every((v, i) => v - gapArray[i] === gap);
}

console.log(isValid([[8, 1, 6], [3, 5, 7], [4, 9, 2],], 1), true, "Should be valid");
console.log(isValid([[4, 1, 6], [3, 5, 7], [8, 9, 2],], 1), false, "Improper sums of row/col values");
console.log(isValid([[9, 2, 7], [4, 6, 8], [5, 10, 3],], 1), true, "Should be valid with seqence starting at 2 and gap = 1");
console.log(isValid([[22, 1, 16], [7, 13, 19], [10, 25, 4],], 3), true, "Should be valid with sequence starting at 1 and gap = 3");
console.log(isValid([[1, 2, 3], [4, 5, 6], [7, 8, 9],], 1), false, "Improper sums of row/col/diagonals values, valid progression");
console.log(isValid([[1, 2, 3, 4], [9, 10, 11, 12], [13, 14, 15, 16], [5, 6, 7, 8],], 1), false, "Improper sums of row/col/diagonals values, valid progression");
console.log(isValid([[4, 9, 1e8], [1e7, 5, 1e9], [8, 1e6, 6],], 1), false, "Improper sums of row/col/diagonals values, invalid progression");
console.log(isValid([[5, 5, 5], [5, 5, 5], [5, 5, 5],], 1), false, "Duplicated numbers so square is not valid");

console.log(isValid([
  [72, 16, 200, 144, 88],
  [24, 168, 152, 96, 80],
  [176, 160, 104, 48, 32],
  [128, 112, 56, 40, 184],
  [120, 64, 8, 192, 136]
], 5), false);

