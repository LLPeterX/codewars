/* 
6kyu - Simple prime streaming
https://www.codewars.com/kata/5a908da30025e995880000e3/train/javascript
*/
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0) return false;
  return true;
}

function solve(a, b) {
  let str = "2", k = 3;
  while (str.length < a + b) {
    if (isPrime(k)) str += k;
    k += 2;
  }
  return str.slice(a, a + b);
}

console.log(solve(2, 2), '57');
console.log(solve(10, 3), '192');
console.log(solve(20, 9), '414347535');
console.log(solve(30, 12), '616771737983');
console.log(solve(40, 8), '83899710');
console.log(solve(50, 6), '031071');
console.log(solve(10000, 5), '02192');
console.log(solve(20000, 5), '09334');

// best

/* 
const solve = (a, b) => primeString(a + b).slice(a, a + b);

const primeString = l => {
  let s = '';
  let i = 1;
  while (s.length < l) 
    s += isPrime(++i) ? i : '';
  return s;
}

const isPrime = n => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if (n % i === 0) return false;
  return n > 1;
}
*/