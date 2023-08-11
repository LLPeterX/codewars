/* 
7kyu - Sum of squares less than some number
https://www.codewars.com/kata/57b71a89b69bfc92c7000170/train/javascript

Write a function getNumberOfSquares()  that will return how many integer (starting from 1, 2...) numbers 
raised to power of 2 and then summed up are less than some number given as a parameter.
*/

function getNumberOfSquares(n) {
  if (n < 2) return 0;
  if (n < 6) return 1;
  let i = 2;
  while (i * (i + 1) * (2 * i + 1) / 6 < n) i++;
  return i - 1;
}

console.log(getNumberOfSquares(1), 0);
console.log(getNumberOfSquares(2), 1);
console.log(getNumberOfSquares(5), 1);
console.log(getNumberOfSquares(6), 2);
console.log(getNumberOfSquares(15), 3);

// let n = 3
// console.log(n * (n + 1) * (2 * n + 1) / 6);