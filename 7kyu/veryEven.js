/* 
7kyu - "Very Even" Numbers.
https://www.codewars.com/kata/58c9322bedb4235468000019/train/javascript

Write a function that returns true if the number is a "Very Even" number.

If a number is a single digit, then it is simply "Very Even" if it itself is even.

If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".
*/

function isVeryEvenNumber(n) {
  while (n > 9) n = +[..."" + n].reduce((s, v) => s + +v, 0);
  return !(n % 2);
}

console.log(isVeryEvenNumber(4554), false);
console.log(isVeryEvenNumber(88), false);
console.log(isVeryEvenNumber(222), true);

// best
/* 
function isVeryEvenNumber(n) {
  return !n-- || n % 9 % 2 === 1;
}
*/

/* 
var isVeryEvenNumber = n => !!(--n % 9 % 2);
*/