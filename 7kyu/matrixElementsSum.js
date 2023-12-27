/* 
6kyu - Simple Fun #65: Matrix Elements Sum
https://www.codewars.com/kata/5893eb36779ce5faab0000da/train/javascript


*/

function matrixElementsSum(matrix) {
  let total = 0;
  for (let col = 0; col < matrix[0].length; col++) {
    for (let row = 0; row < matrix.length; row++) {
      if (matrix[row][col]) total += matrix[row][col];
      else break;
    }
  }
  return total;
}

// ---- TESTS -----
var matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]]
console.log(matrixElementsSum(matrix), 9)

var matrix = [
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10]]
console.log(matrixElementsSum(matrix), 9)

var matrix = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3]]


console.log(matrixElementsSum(matrix), 18)

var matrix = [[0]]
console.log(matrixElementsSum(matrix), 0)


// best
/* 
const matrixElementsSum = matrix =>
  matrix.reduce((pre, val, idx) => pre + val.reduce((pre, val, i) => pre + val * matrix.slice(0, idx + 1).every(val => val[i]), 0), 0);
*/

