/* 
7kyu - Perfect Number Verifier
https://www.codewars.com/kata/56a28c30d7eb6acef700004d/train/javascript

A perfect number is a number in which the sum of its divisors (excluding itself) are equal to itself.

Write a function that can verify if the given integer n is a perfect number, 
and return True if it is, or return False if not.
*/

function isPerfect(n) {
  let res = 1, x = n, p;
  for (let i = 2; i < 1000000; i++) {
    p = i;
    while (n % i == 0) {
      n = Math.floor(n / i);
      p *= i;
    }
    res *= Math.floor((p - 1) / (i - 1));
  }
  return res / 2 === x;
}

console.log(isPerfect(6), true);
console.log(isPerfect(1), false);
console.log(isPerfect(28), true);
console.log(isPerfect(4986), false);
console.log(isPerfect(10), false);
console.log(isPerfect(496), true);
console.log(isPerfect(8128), true);
console.log(isPerfect(23459879034), false);
console.log(isPerfect(1098), false);
console.log(isPerfect(33550336), true);
console.log(isPerfect(137438691328), true);

// best

/* 
function isPerfect(n) {
  const perfectInts = [6, 28, 496, 8128, 33550336, 8589869056, 137438691328, 2305843008139952128,
  2658455991569831744654692615953842176, 191561942608236107294793378084303638130997321548169216];
  return !!~perfectInts.indexOf(n);
}
*/

/* 
function isPerfect(n) {
  for (var i=2,max=Math.sqrt(n),rs=0;i<=max;i++) if (n%i==0) rs+= i==n/i ? i : i+n/i; 
  return n!=1&&rs+1==n;
}
*/

/* 
function isPerfect(n) {
  
  let sum = 1;
  let sqrt = Math.sqrt(n);
  
  for (let i = 2; i < sqrt; i++)
    if (n % i === 0)
      sum += i + (n / i);
    
  if (sqrt % 1 === 0)
    sum += sqrt;
  
  return sum === n;
  
}
*/