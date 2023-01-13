/* 
6kyu - Matrix Transpose
https://www.codewars.com/kata/52fba2a9adcd10b34300094c

Write a function that outputs the transpose of a matrix - a new matrix where 
the columns and rows of the original are swapped.
*/

// rotateCW
function transpose(matrix) {
  let res = [];
  for (let i = 0; i < matrix[0].length; i++) {
    res[i] = [];
    for (j = 0; j < matrix.length; j++) {
      res[i].push(matrix[j][i]);
    }
  }
  return res;
}

console.log(transpose([[1]]), [[1]]);
console.log(transpose([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]]);

// best
/* 
var transpose = m => m[0].map((_, i) => m.map(r => r[i]));

*/
