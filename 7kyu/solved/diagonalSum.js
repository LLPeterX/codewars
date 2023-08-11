/* 
7kyu - Find sum of top-left to bottom-right diagonals
https://www.codewars.com/kata/5497a3c181dd7291ce000700/train/javascript

Given a square matrix (i.e. an array of subarrays), 
find the sum of values from the first value of the first array, 
the second value of the second array, the third value of the third array, and so on...
*/

function diagonalSum(matrix) {
  return matrix.reduce((s, v, i, a) => s + a[i][i], 0);
}

console.log(diagonalSum([[12]]), 12)
console.log(diagonalSum([[1, 2], [3, 4]]), 5)
console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 15)
console.log(diagonalSum([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]), 34)
console.log(diagonalSum([[24, 11, 5, 1, 9, 14], [5, 22, 13, 5, 17, 21], [3, 16, 8, 16, 22, 17], [18, 17, 7, 30, 15, 4], [24, 10, 13, 19, 1, 13], [18, 20, 19, 22, 0, 30]]), 115)

// best
/* 
function diagonalSum(m){
  return m.reduce(function(s,r,i){return s+r[i]},0)
}
 */