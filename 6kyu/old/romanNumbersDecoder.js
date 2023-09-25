/* 
6kyu - Roman Numerals Decoder
https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

Дана строка из римских цифр.
Вернуть число.
*/


function solution(roman) {
  let digits = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let n = digits[roman[0]], prev, current;
  for (let i = 1; i < roman.length; i++) {
    current = digits[roman[i]];
    prev = digits[roman[i - 1]];
    if (current <= prev) {
      n += current;
    } else {
      n = n - prev * 2 + current;
    }
  }
  return n;
}

console.log(solution('XXI'), 21);
console.log(solution('I'), 1);
console.log(solution('IV'), 4);
console.log(solution('MMVIII'), 2008);
console.log(solution('MDCLXVI'), 1666);