/* 
6kyu - Happy Numbers
https://www.codewars.com/kata/59d53c3039c23b404200007e/train/javascript

Math geeks and computer nerds love to anthropomorphize numbers and assign emotions and personalities to them. Thus there is defined the concept of a "happy" number. A happy number is defined as an integer in which the following sequence ends with the number 1.

Start with the number itself.
Calculate the sum of the square of each individual digit.
If the sum is equal to 1, then the number is happy. If the sum is not equal to 1, then repeat steps 1 and 2. A number is considered unhappy once the same number occurs multiple times in a sequence because this means there is a loop and it will never reach 1.
For example, the number 7 is a "happy" number:

72 = 49 --> 42 + 92 = 97 --> 92 + 72 = 130 --> 12 + 32 + 02 = 10 --> 12 + 02 = 1

Your task is to write a program which will print a list 
of all happy numbers between 1 and x (both inclusive), where:
 */

function isHappy(n) {
  let h = new Set();
  while (n !== 1) {
    n = +[...String(n)].reduce((x, v) => x + v ** 2, 0);
    if (h.has(n)) return false;
    h.add(n);
  }
  return true;
}

function happyNumbers(x) {
  let result = [];
  for (let n = 1; n <= x; n++) {
    if (isHappy(n)) result.push(n);
  }
  return result;
}

console.log(happyNumbers(10), [1, 7, 10])
// console.log(happyNumbers(50), [1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49])
console.log(happyNumbers(100), [1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100])