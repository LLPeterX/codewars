/* 
7kyu - Square Roots: Approximation
https://www.codewars.com/kata/58475cce273e5560f40000fa/train/javascript


*/

function approxRoot(n) {
  let min = max = n;
  while (!Number.isInteger(Math.sqrt(min))) min--;
  while (!Number.isInteger(Math.sqrt(max))) max++;
  return min === max ? Math.sqrt(n) : +(Math.sqrt(min) + (n - min) / (max - min)).toFixed(2);
}

console.log(approxRoot(213), 14.59)
console.log(approxRoot(400), 20)
console.log(approxRoot(401), 20.02)
console.log(approxRoot(2), 1.33)

console.log(approxRoot(4), 2)
console.log(approxRoot(5), 2 + (5 - 4) / (9 - 4))
console.log(approxRoot(6), 2 + (6 - 4) / (9 - 4))
console.log(approxRoot(7), 2 + (7 - 4) / (9 - 4))
console.log(approxRoot(8), 2 + (8 - 4) / (9 - 4))
console.log(approxRoot(9), 3)

// best

/* 
const approxRoot = (n, base = ~~(n ** .5)) => +( (base * ++base + n) / (2 * base - 1) ).toFixed(2);
*/

/* 
function approxRoot(n) {
  var k=0;
  while (k*k<n)
    k++;
  return +((k-1)+((n-(k-1)*(k-1))/(k*k-(k-1)*(k-1)))).toFixed(2)
}
*/