/* 
7kyu - Simple Fun #9: Array Packing
https://www.codewars.com/kata/588453ea56daa4af920000ca

You are given an array of up to four non-negative integers, each less than 256.
Your task is to pack these integers into one number M in the following way:

* The first element of the array occupies the first 8 bits of M;
* The second element occupies next 8 bits, and so on.
*/

function arrayPacking(a) {
  //use BigInt to avoid overflow
  return parseInt(a.reduce((x, v, i) => x + (BigInt(v) << BigInt(i) * 8n), 0n));
  //return a.reduce((x, v, i) => x + (v << i * 8), 0);
}

console.log(arrayPacking([24, 85, 0]), 21784)
console.log(arrayPacking([23, 45, 39]), 2567447)
console.log(arrayPacking([242, 173, 91, 190]), 3193679346) // FAIL


// best
/* 
function arrayPacking(a) {
  return a.reduceRight((n, x) => (n << 8 | x) >>> 0, 0)
}
*/

/* 
let arrayPacking = (a) => a.reduce((a, b, i) => a + (b << i*8) >>> 0);
*/

/* 
const arrayPacking=a=>parseInt(a.reverse().map(a=>("00000000"+a.toString(2)).slice(-8)).join(""),2);
*/

/* 
const arrayPacking = a => parseInt(a.reverse().map(e => e.toString(2).padStart(8, '0')).join(''), 2);
*/