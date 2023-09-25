/* 
6kyu - Simple Fun #79: Delete a Digit
https://www.codewars.com/kata/5894318275f2c75695000146/train/javascript

Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.
*/

function deleteDigit(n) {
  let str = n.toString();
  let max = -Infinity;
  for (let i = 0; i < str.length; i++) {
    max = Math.max(max, +(str.slice(0, i) + str.slice(i + 1)));
  }
  return max;
}

