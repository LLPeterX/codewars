/* 
6kyu - Coprimes up to N
https://www.codewars.com/kata/59e0dbb72a7acc3610000017

In this kata you'll be given a number n >= 2 and output a list 
with all positive integers less than gcd(n, k) == 1, 
with k being any of the output numbers.
*/

const gcd = (a, b) => b ? gcd(b, a % b) : a;
function coprimes(n) {
  let result = [1];
  for (let i = 2; i < n; i++) {
    if (gcd(n, i) === 1) {
      result.push(i);
    }
  }
  return result;
}

console.log(coprimes(30), [1, 7, 11, 13, 17, 19, 23, 29]);
console.log(coprimes(25), [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24]);
// best

/* 
const coprimes = n => Array.from(Array(n), (_, i) => ++i).filter(e => gcd(n, e) === 1);
const gcd = (a, b) => !b ? a : gcd(b, a % b);
*/