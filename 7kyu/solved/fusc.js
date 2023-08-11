/* 
7kyu - The fusc function -- Part 1
https://www.codewars.com/kata/570409d3d80ec699af001bf9

The fusc function is defined recursively as follows:

1. fusc(0) = 0
2. fusc(1) = 1
3. fusc(2 * n) = fusc(n)
4. fusc(2 * n + 1) = fusc(n) + fusc(n + 1)
*/

function fusc(n) {
  if (n < 2) return n;
  if (n % 2 === 0) return fusc(n / 2);
  let z = (n - 1) / 2;
  return fusc(z) + fusc(z + 1);
}

console.log(fusc(85));

// others

/* 
function fusc(n) {
  if (n < 2) return n
  if (n & 1) return fusc(n >> 1) + fusc((n >> 1) + 1)
  return fusc(n >> 1)
}
*/