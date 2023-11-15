/* 

****** NOT SOLVED !!! ****

6kyu - Prime reversion
https://www.codewars.com/kata/59b46276afcda204ed000094/train/javascript

Дан диапазон.
В нем найти все простые числа, сформировать из них пары.
Перемножить каждую пару, просуммировать цифры результата.

Вернуть количество пар, результат которых - простое число
*/

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
  return num > 1;
}

function solve(a, b) {
  const primes = [];
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) primes.push(i);
  }
  //console.log(primes);
  let count = 0;
  for (let i = 0; i < primes.length; i++) {
    for (let j = i; j < primes.length; j++) {
      //console.log(` check (${primes[i]},${primes[j]})`);
      let m = primes[i] * primes[j];
      let sum = [...`${m}`].reduce((s, v) => s + +v, 0);
      if (isPrime(sum)) count++;
    }
  }
  return count;
}

console.log(solve(0, 10), 4); // OK
console.log(solve(0, 20), 14); // OK
console.log(solve(2, 200), 457); // OK
console.log(solve(2, 2000), 17705); // OK
console.log(solve(2000, 5000), 25005); // OK

console.log(solve(72, 509), 1140); // FAIL ???