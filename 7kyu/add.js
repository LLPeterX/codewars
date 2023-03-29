/* 
7kyu - Decreasing Inputs
https://www.codewars.com/kata/555de49a04b7d1c13c00000e/train/javascript

This kata is all about adding numbers.

You will create a function named add. It will return the sum of all the arguments.
The inputs will gradually decrease with their index as parameter to the function.
*/

function add() {
  return Math.round(Array.from(arguments).reduce((sum, v, i) => sum + v / (i + 1), 0));
}

console.log(add(), 0, 'No arguments should return 0');
console.log(add(100, 200, 300), 300);
console.log(add(2), 2);
console.log(add(4, -3, -2), 2);
console.log(add(-1, -2, -3, -4), -4);
