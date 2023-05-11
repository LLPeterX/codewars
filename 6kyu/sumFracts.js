/* 
6kyu - Irreducible Sum of Rationals
https://www.codewars.com/kata/5517fcb0236c8826940003c9/train/javascript


*/
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function sumFracts(l) {
  if (l.length === 0) return null;
  const cd = l.reduce((a, [_, d]) => lcm(d, a), 1);
  let x = l.reduce((s, a) => s + a[0] * cd / a[1], 0);
  if (x % cd === 0) return x / cd;
  let y = gcd(x, cd);
  return [x / y, cd / y];
}

// console.log(sumFracts([[1, 2], [1, 3], [1, 4]]), [13, 12]);
// console.log(sumFracts([[1, 3], [5, 3]]), 2);
// console.log(sumFracts([[12, 3], [15, 3]]), 9);
// console.log(sumFracts([[2, 7], [1, 3], [1, 12]]), [59, 84]);
console.log(sumFracts([[6, 44], [54, 79]]), [1425, 1738]);
console.log(sumFracts([[65, 60], [38, 19]]), [37, 12]);

// best
/* 
const gcd = (a, b) => b ? gcd(b, a % b) : a;

const sumFracts = l => {
  if (!l.length) return null;

  var [n, d] = l.reduce(([a, x], [b, y]) => [a*y + b*x, x*y]);
  var g = gcd(n, d);

  return g === d ? n / d : [n / g, d / g];
}
*/


