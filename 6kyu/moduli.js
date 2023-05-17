/* 
6kyu - Moduli number system
https://www.codewars.com/kata/54db15b003e88a6a480000b9/train/javascript

You will be given a number n (n >= 0) and a system S = [m1,m2, ···,mk] 
and you will return a string "-x1--x2-- ...--xk-" representing the number n in the system S.

If the moduli are not pairwise co-prime 
or if the product m1 * ... * mk is not greater than n, return "Not applicable".
*/

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
}

const gcd = (a, b) => b ? gcd(b, a % b) : a;

function fromNb2Str(n, sys) {
  let prod = 1, maxGCD = 1;
  for (let i = 0; i < sys.length; i++) {
    prod *= sys[i];
    for (let j = i + 1; j < sys.length; j++) {
      maxGCD = Math.max(maxGCD, gcd(sys[i], sys[j]));
    }
  }
  if (prod < n || maxGCD > 1) return "Not applicable";
  return sys.map(v => `-${n % v}-`).join``;
}

console.log(fromNb2Str(187, [8, 7, 5, 3]), "-3--5--2--1-");
console.log(fromNb2Str(779, [8, 7, 5, 3]), "-3--2--4--2-");
console.log(fromNb2Str(3450, [13, 11, 7, 5, 3, 2]), "-5--7--6--0--0--0-");
console.log(fromNb2Str(15, [8, 6, 5, 3]), "Not applicable", "moduli 8 and 6 are not coprime");
console.log(fromNb2Str(3450, [17, 5, 3]), "Not applicable", "3450 is greater than product of moduli (255)");
console.log(fromNb2Str(47219174, [49, 29, 37, 4, 23, 19]), '-30--11--33--2--13--13-');