/* 
7kyu - Figurate Numbers #2 - Pronic Number
https://www.codewars.com/kata/55b1e5c4cbe09e46b3000034/train/javascript

A pronic number is a number which is the product of two consecutive integers, that is, n(n + 1).
*/

function isPronic(n) {
  if (n === 0) return true;
  n = Math.abs(n);
  for (let i = 1; i < n / 2 + 1; i++) {
    if (i * (i + 1) === n) return true;
  }
  return false;
}

console.log(isPronic(0), true, '0 is a Pronic Number');
console.log(isPronic(1), false, '1 is not a Pronic Number');
console.log(isPronic(2), true, '2 is a Pronic Number');
console.log(isPronic(3), false, '3 is not a Pronic Number');
console.log(isPronic(4), false, '4 is not a Pronic Number');
console.log(isPronic(5), false, '5 is not a Pronic Number');
console.log(isPronic(6), true, '6 is a Pronic Number');
console.log(isPronic(-3), false, '-3 is not a Pronic Number');
console.log(isPronic(-27), false, '-27 is not a Pronic Number');

// best
/* 
function isPronic(n){
  return Math.sqrt(1+4*n)%1===0;
}
*/

/* 
const isPronic = n =>
  Number.isInteger((4 * n + 1) ** .5);
*/