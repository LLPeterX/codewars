/* 
6kyu - X marks the spot!
https://www.codewars.com/kata/55cc20eb943f1d8b11000045/train/javascript

Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle. The X will be represented by 1's and the rest will be 0's.
E.g.

x(5) === [[1, 0, 0, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [1, 0, 0, 0, 1]];
          
x(6) === [[1, 0, 0, 0, 0, 1],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [1, 0, 0, 0, 0, 1]];
*/

/* 
// prevous solution
function x1(n) {
  let a = Array.from({ length: n }, (_, i) => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    a[i][i] = 1;
    a[i][n - i - 1] = 1;
  }
  return a;
}
 */

// one-line solution
//const x = n => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, k) => k == i || k === n - i - 1 ? 1 : 0));
//const x = length => Array.from({ length }, (_, i) => Array.from({ length }, (_, k) => k == i || k === length - i - 1 ? 1 : 0));
const x = length => Array.from({ length }, (_, i) => Array.from({ length }, (_, k) => ~~(k == i || k === length - i - 1)));


console.log(x(1), '=>\n', [[1]]);
console.log(x(2), '=>\n', [[1, 1], [1, 1]]);
console.log(x(3), '=>\n', [[1, 0, 1], [0, 1, 0], [1, 0, 1]]);
console.log(x(4), '=>\n', [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]]);
console.log(x(5), '=>\n', [[1, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]]);
console.log(x(6), '=>\n', [[1, 0, 0, 0, 0, 1], [0, 1, 0, 0, 1, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0], [1, 0, 0, 0, 0, 1]]);

// best
/* 
var x = n => Array(...Array(n)).map((_, i) => Array(...Array(n)).map((_, j) => j == i || j == n - i - 1 ? 1 : 0));
*/

/* 
const x = n => 
  [...Array(n)].map((_, i) => 
    [...Array(n)].map((_, j) => 
      +(i == j || j == n - i - 1)));
*/