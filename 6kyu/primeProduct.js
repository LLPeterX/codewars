/* 
6kyu - Simple Fun #303: Prime Product
https://www.codewars.com/kata/592538b3071ba54511000219/train/javascript
*/
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0) return false;
  return true;
}

function primeProduct(n) {
  const primes = [];
  let max = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
  }
  for (let i = 0; i < primes.length; i++) {
    for (let j = i; j < primes.length; j++) {
      if (primes[i] + primes[j] === n) {
        max = Math.max(max, primes[i] * primes[j]);
      }
    }
  }
  return max;
}

console.log(primeProduct(1), 0)
console.log(primeProduct(3), 0)
console.log(primeProduct(4), 4)
console.log(primeProduct(5), 6)
console.log(primeProduct(6), 9)
console.log(primeProduct(7), 10)
console.log(primeProduct(8), 15)
console.log(primeProduct(9), 14)
console.log(primeProduct(10), 25)
console.log(primeProduct(11), 0)
console.log(primeProduct(12), 35)
console.log(primeProduct(20), 91)
console.log(primeProduct(100), 2491)

// best

/* 
function primeProduct(n){
  for(let i=Math.floor(n/2); i>1; i--) if(isPrime(i)&&isPrime(n-i)) return i*(n-i);
  return 0;
}
function isPrime(n) {
  if(n<2)return false;
  for(let i=2; i<=Math.sqrt(n); i++) if(n%i===0) return false;
  return true;
}
*/

/* 
const primeNumbers = primeNumbersGenerator(100000);

function primeProduct(n) {
  let maxMultiplication = 0;
  for (let i = primeNumbers.length - 1; i >= 0; i -= 1) {
    if (primeNumbers[i] > n) {
      continue;
    }

    for (let j = 0; j <= i; j += 1) {
      if (primeNumbers[i] + primeNumbers[j] === n) {
        let multiplication = primeNumbers[i] * primeNumbers[j];
        if (multiplication > maxMultiplication) {
          maxMultiplication = multiplication;
        }
      }
    }
  }

  return maxMultiplication;
}

function primeNumbersGenerator(count) {
  const numbers = {}, primeNumbers = [];
  let i, p;

  for (i = 2; i < count; i += 1) {
    numbers[i] = true;
  }

  p = 2;
  do {
    for (i = 2 * p; i < count; i += p) {
      numbers[i] = false;
    }

    for (i = p + 1; i < count; i += 1) {
      if (numbers[i]) {
        break;
      }
    }
    p = i;
  } while (p < count / 10);

  const length = Object.keys(numbers).length;
  for (i = 0; i < length; i += 1) {
    if (numbers[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}
*/