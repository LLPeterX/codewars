/* 
5kyu - Rotate an array matrix
https://www.codewars.com/kata/525a566985a9a47bc8000670/train/javascript

Write a function that rotates a two-dimensional array (a matrix) 
either clockwise or anti-clockwise by 90 degrees, and returns the rotated array.

The function accepts two parameters: a matrix, and a string 
specifying the direction or rotation. 
The direction will be either "clockwise" or "counter-clockwise".
*/

// function rotate(matrix, direction) {
//   if (direction === 'clockwise') return matrix[0].map((_, i) => matrix.map(r => r[i]).reverse());
//   return matrix[0].map((_, i) => matrix.map(r => r[i])).reverse();
// }

// final:
const rotate = (matrix, direction) => direction === 'clockwise'
  ? matrix[0].map((_, i) => matrix.map(r => r[i]).reverse())
  : matrix[0].map((_, i) => matrix.map(r => r[i])).reverse();



let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(rotate(matrix, 'counter-clockwise'), [[3, 6, 9], [2, 5, 8], [1, 4, 7]]);
console.log(rotate(matrix, 'clockwise'), [[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
console.log(rotate(rotate(matrix, 'counter-clockwise'), 'clockwise'), [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(rotate(rotate(rotate(rotate(matrix, 'clockwise'), 'clockwise'), 'clockwise'), 'clockwise'), [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
