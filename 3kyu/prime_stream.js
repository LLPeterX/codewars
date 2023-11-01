/* 
3kyu - Prime Streaming (PG-13)
https://www.codewars.com/kata/5519a584a73e70fa570005f5/train/javascript

Create an endless stream that yields prime numbers. 
The stream must be able to produce a million primes in a few seconds.
*/

/*
// timeout

class Primes {
  static * stream() {
    let n = 2;
    while (true) {
      if (Primes.isPrime(n)) {
        yield n;
      }
      n++;
    }
  }

  static isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
*/

// see https://stackoverflow.com/questions/59430942/creating-a-large-stream-of-prime-numbers-fast
// prime-lib нельзя использовать
/*
const p = require('prime-lib');
class Primes {
  static * stream() {
    const primes = [...p.generatePrimes({ boost: 1_000_000 })];
    for (let i = 0; i < primes.length; i++) {
      yield primes[i];
    }
  }
}
*/

class Primes {
  static *stream() {
    yield 2;
    yield 3;
    yield 5;
    yield 7;
    const sieve = new Map();
    const ps = Primes.stream();
    ps.next();
    ps.next();
    for (let p = 3, i = 9; ; i += 2) {
      let s = sieve.get(i);
      if (s !== undefined) {
        sieve.delete(i);
      } else {
        if (i < p * p) {
          yield i;
          continue;
        }
        // s=2*p;
        s = p << 1;
        p = ps.next().value;
      }
      let k = i + s;
      while (sieve.has(k)) {
        k += s;
      }
      sieve.set(k, s);
    } // for
  }
}


function verify(from_n, ...vals) {
  const stream = Primes.stream()
  for (let i = 0; i < from_n; ++i) stream.next()
  for (let v of vals) console.log(stream.next().value, v)
}

verify(0, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29)

// best
/* 
class Primes {
  static * stream() {
  yield 2 
  var n = 3
   while (true) {
     if (isPrime(n)) {
       yield n
     }
     n += 2
   }
  }
}

function isPrime(n) {
  for (var a = 3; a <= ~~Math.sqrt(n); a+=2) {
    if (n%a == 0) return false;
    }
  return true;
}
*/