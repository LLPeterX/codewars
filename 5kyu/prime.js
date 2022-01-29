/* 
5kyu - (Ready for) Prime Time
https://www.codewars.com/kata/521ef596c106a935c0000519/train/javascript

Сгенерировать массив простых чисел от 2 до N включительно.
*/
function isPrime(num) {
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function* getPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) yield i;
  }
}

function prime(num) {
  if (num < 2) return [];
  return [2, ...getPrimes(num)];
}

console.log(prime(0), []);
console.log(prime(1), []);
console.log(prime(2), [2]);
console.log(prime(23), [2, 3, 5, 7, 11, 13, 17, 19, 23]);

// best

/* 
function prime(num) {
  var primes = [];
  loop: for (var i = 2; i <= num; i++) {
    for (var j = 0; j <= primes.length; j++)
      if (i % primes[j] === 0) continue loop;
    primes.push(i);
  }
  return primes;
}
*/

/* 
function prime(num) {
  if (num < 2) return []
  var primes = [2]
  for (candidate = 3; candidate <= num; candidate++)
    if (primes.every(function (prime) { return candidate % prime !== 0 }))
      primes.push(candidate)
  return primes
}
*/

/* 
const isPrime = num => {
  for (let i = 2; i <= num ** .5; i++) {
    if (!(num % i)) return false;
  }
  return num > 1;
};

const prime = num =>
  [...Array(++num).keys()].filter(isPrime);
*/

/* 
function prime(number, primes = []) {
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i < 1) {
      return false;
    }
  }
  return true;
}
*/