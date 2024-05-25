/* 
7kyu - Basics 04: Rotate Matrix
https://www.codewars.com/kata/56b5dd1702a30326ce000b02/train/javascript

our task is to rotate a matrix 90 degree to the left. 
The matrix is an array of integers with dimension n,m. So this kata checks some basics, it's not too difficult.

*/

const rotateMatrix = (arr) => arr[0].map((_, i) => arr.map((r) => r[i])).reverse();

var a = rotateMatrix([
    [-1, 4, 5],
    [2, 3, 4]
  ]),
  b = [
    [5, 4],
    [4, 3],
    [-1, 2]
  ];
console.log(a, b);
