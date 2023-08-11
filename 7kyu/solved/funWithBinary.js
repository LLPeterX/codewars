/* 
7kyu - Fun with binary numbers
https://www.codewars.com/kata/5ce04eadd103f4001edd8986/train/javascript

Дано 2 числа - N и B.
Найти все числа < 2**N которые в битовом проедставлении содержат 1 в позиции B
*/

function solution(n, b) {
  let result = [];
  for (let i = 1; i < 2 ** n; i++) {
    if (i & b) result.push(i);
  }
  return result;
}

console.log(solution(4, 2), '=>', [2, 3, 6, 7, 10, 11, 14, 15]);
console.log(solution(6, 8), '=>', [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63]);
console.log(solution(5, 32), '=>', []);
console.log(solution(6, 0), '=>', []);
console.log(solution(0, 1), '=>', []);

// best

/* 
const solution = (n, b) =>
  Array.from({length: 2**n},(_,index) => index).filter(element => element & b)
*/