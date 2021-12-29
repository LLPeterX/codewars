/* 
7kyu - Prime Factors
https://www.codewars.com/kata/542f3d5fd002f86efc00081a
Write a function that generates factors for a given number.
*/

function prime_factors(n) {
  if (n < 2) {
    return [];
  }
  let res = [], j = 1, i = 2;
  do {
    if (n % i === 0) {
      res[j++] = i;
      n /= i;
    } else {
      i++;
    }
  } while (i < n);
  res[j] = i;

  return res.filter(e => e);
}

console.log(prime_factors(1), []);
console.log(prime_factors(3), [3]);
console.log(prime_factors(8), [2, 2, 2]);
console.log(prime_factors(9), [3, 3]);
console.log(prime_factors(12), [2, 2, 3]);
console.log(prime_factors(635008), [2, 2, 2, 2, 2, 2, 2, 11, 11, 41]);
console.log(prime_factors(426290), [2, 5, 47, 907]);

//best

/* 
const prime_factors = n => {
  const factors = [];
  for (let i = 2; i <= n; i++) {
    while (n % i == 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
}
*/