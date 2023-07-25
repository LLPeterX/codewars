/* 
5kyu - Transformation of a Number Through Prime Factorization
https://www.codewars.com/kata/572caa2672a38ba648001dcd

Every natural number, n, may have a prime factorization like:
N=P1^K1 * P2^K2 ...

We define the geometric derivative of n, as a number with the following value:
N* = K1*P1^(K1-1) + K2*P2^(K2-1)

For 24500 = 2^2 * 5^3 * 7^2
Derivative: 2*2 * 3*5^2 * 2*7 = 4200

Every number that does not have an exponent ki, higher than 1, will give a n* = 1, too

*/

// const isPrime = num => {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//     if (num % i === 0) return false;
//   return num > 1;
// }
function f(n) {
  const factors = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      let pow = 0;
      while (n % i === 0) {
        pow++;
        n /= i;
      }
      factors.push([i, pow]);
    }
    // while (n % i === 0) {
    //   factors.push(i);
    //   n /= i;
    // }
  }
  //if (n > 1) factors.push([n, 0]);
  console.log(` after: n=${n}`);
  //if (n > 1) return 1;
  return factors.reduce((d, [n, pow]) => d * pow * n ** (pow - 1), 1);
}

console.log(f(24500), 4200);
console.log(f(997), 1);
console.log(f(1002420), 24);

// best
/* 
const f = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    let k = 0; 
    while (n % i == 0) {
      k++;
      n /= i;
    }
    if (k) result *= k * Math.pow(i, k - 1);
  }
  return result;
}
*/