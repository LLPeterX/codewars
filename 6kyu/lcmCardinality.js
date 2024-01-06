/* 
6kyu - LCM Cardinality
https://www.codewars.com/kata/5c45bef3b6adcb0001d3cc5f/train/javascript

A pair of numbers has a unique LCM but a single number 
can be the LCM of more than one possible pairs. 
For example 12 is the LCM of (1, 12), (2, 12), (3,4) etc. 

For a given positive integer N, the number of different integer pairs 
with LCM is equal to N can be called the LCM cardinality of that number N. 

In this kata your job is to find out the LCM cardinality of a number.
*/

// from https://github.com/morris821028/UVa/blob/master/volume108/10892%20-%20LCM%20Cardinality.cpp

const gcd = (a, b) => b ? gcd(b, a % b) : a;

function lcmCardinality(n) {
  let count = 0;
  let factors = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      factors.push(i);
      if (i * i !== n) factors.push(n / i);
    }
  }
  for (let i = 0; i < factors.length; i++) {
    for (let j = i; j < factors.length; j++) {
      if (factors[i] / gcd(factors[i], factors[j]) * factors[j] === n) count++;
    }
  }
  return count;
}

console.log(lcmCardinality(1), 1);
console.log(lcmCardinality(12), 8);
console.log(lcmCardinality(24), 11);
console.log(lcmCardinality(25), 3);

// best
/* 
function lcmCardinality(n) {
  let r = 1;
  for (let d = 2; d * d <= n; d++) {
    let k = 0;
    for (; n % d === 0; n /= d, k++);
    r *= 2 * k + 1;
  }
  return (n > 1 ? 3 * r : r) + 1 >> 1;
}
*/