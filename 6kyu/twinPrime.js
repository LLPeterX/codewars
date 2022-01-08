/* 
6kyu - Twin Prime
https://www.codewars.com/kata/59b7ae14bf10a402d40000f3

A twin prime is a prime number that differs from another prime number by 2. Write a function named is_twin_prime which takes an int parameter and returns true if it is a twin prime, else false.

example:

given 5, which is prime
5+2=7 which is prime 
5-2=3 which is prime
*/

/* 
const primes = new Set();
const isPrime = (n) => {
  if (primes.has(n)) return n;
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i == 0) return false;
  //return n > 1;
  if (n > 1) {
    primes.add(n);
    return true;
  }
  return false;
}
 */
function isTwinPrime(n) {
  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++)
      if (n % i == 0) return false;
    return n > 1;
  }
  return (n >= 5 && isPrime(n) && (isPrime(n - 2) || isPrime(n + 2)));
}

console.log(isTwinPrime(5), true);
console.log(isTwinPrime(7), true);
console.log(isTwinPrime(9), false);
console.log(isTwinPrime(25), false);

//best
/* 
sTwinPrime=a=>a==3||a==5||a==7||a==11||a==13||a==17||a==19
*/