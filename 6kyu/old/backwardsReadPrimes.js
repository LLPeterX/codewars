/* 
6kyu - Backwards Read Primes
https://www.codewars.com/kata/5539fecef69c483c5a000015

Найти простые числа в диапазоне (start, stop) такие, что составленные в обратном порядке тоже будут простыми
*/

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}
function backwardsPrime(start, stop) {
  // let primes = [];
  // for (let i = 13; i <= stop; i++) {
  //   if (isPrime(i)) {
  //     primes.push(i);
  //   }
  // }
  // return primes.filter(num => {
  //   return num >= start && primes.includes(Number(String(num).split('').reverse().join('')));
  // });
  const primes = new Set();
  for (let i = start; i <= stop; i++) {
    if (!primes.has(i) && isPrime(i)) {
      let rev = +i.toString().split('').reverse().join('');
      if (rev != i && isPrime(rev)) {
        primes.add(i);
        primes.add(rev);
      }
    }
  }
  return [...primes].filter(a => a >= start && a <= stop).sort((b, c) => b - c);
}

console.log(backwardsPrime(2, 100)); // работает
console.log(backwardsPrime(9900, 10000));
console.log(backwardsPrime(7000, 7100), [7027, 7043, 7057]); 