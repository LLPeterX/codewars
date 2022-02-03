/* 
7kyu - Positive to negative binary numbers
https://www.codewars.com/kata/5becace7063291bebf0001d5/train/javascript

Given an array of ones and zero(e)s that represents a positive binary number, convert the number to two's complement value.

Two's complement is the way most computers represent positive or negative integers. The most significant bit is 1 if the number is negative, and 0 otherwise.
*/

function positiveToNegative(b) {
  return [...(parseInt(b.join``.replace(/./g, v => "10"[+v]), 2) + 1).toString(2).slice(-b.length)].map(Number);
}

console.log(positiveToNegative([0, 1, 0, 0, 1]), [1, 0, 1, 1, 1]);
console.log(positiveToNegative([0, 0, 0, 0]), [0, 0, 0, 0]);
console.log(positiveToNegative([0, 0, 1, 0]), [1, 1, 1, 0]);
console.log(positiveToNegative([0, 0, 1, 1]), [1, 1, 0, 1]);
console.log(positiveToNegative([0, 1, 0, 0]), [1, 1, 0, 0]);

// best
/* 
var positiveToNegative = b => [...(+('0b'+b.map(v => v^1).join(''))+1).toString(2)].slice(-b.length).map(v => +v);
*/

