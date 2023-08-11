/* 
7kyu - Next Prime
https://www.codewars.com/kata/58e230e5e24dde0996000070/train/javascript

Определить следующее простое число, больше заданного
*/

function nextPrime(n) {
  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++)
      if (n % i == 0) return false;
    return n > 1;
  }
  while (!isPrime(++n));
  return n;
}

console.log(nextPrime(0), 2);
console.log(nextPrime(1), 2);
console.log(nextPrime(2), 3);
console.log(nextPrime(3), 5);
console.log(nextPrime(5), 7);
console.log(nextPrime(11), 13);
console.log(nextPrime(17), 19);
console.log(nextPrime(2971), 2999);