/* 
6kyu - Surrounding Primes for a value
https://www.codewars.com/kata/560b8d7106ede725dd0000e2

We need a function prime_bef_aft() that gives the largest prime below a certain given value n,
The result should be output in a list like the following:

primeBefAft == [befPrime, aftPrime]
*/

function isPrime(num) {
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
function primeBefAft(n) {
  const result = [3, 3];
  for (let i = n - 1; i > 3; i--) {
    if (isPrime(i)) {
      result[0] = i;
      break;
    }
  }
  while (!isPrime(++n));
  result[1] = n;
  return result;
}

console.log(primeBefAft(101));

// best

/* 
function primeBefAft(num) {
  const isPrime = (n) => {
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };
  
  let before = num - 1, after = num + 1;
  while (!isPrime(before)) --before;
  while (!isPrime(after)) ++after;
  return [before, after];
}
*/