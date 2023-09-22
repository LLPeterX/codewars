/* 
4kyu - Number of Proper Fractions with Denominator d
https://www.codewars.com/kata/55b7bb74a0256d4467000070


*/

// from: https://www.cyberforum.ru/cpp-beginners/thread1782146.html
/*

function euclid(a, b) {
  let rem;
  while (b != 0) {
    rem = a % b;
    a = b;
    b = rem;
  }
  return a;
}
*/

// FAIL WITH TIMEOUT
/*
function properFractions(n) {
  if (n < 2) return 0;
  let count = 1;
  for (let i = 2; i < n; i++) {
    //if (euclid(i, n) === 1) count++;
    let rem, a = i, b = n;
    while (b) {
      rem = a % b;
      a = b;
      b = rem;
    }
    if (a === 1) count++;
  }
  return count;
}
*/

/*
// https://dev.to/thepracticaldev/daily-challenge-78-number-of-proper-fractions-with-denominator-d-3fml
// TIMEOUT - еще хуже
const gcd = (n, d) => {
  return d === 0 ? n : gcd(d, n % d);
}

const properFractions = (d) => {
  if (d < 2) return 0;
  if (d === 2) return 1;
  let count = 0;
  let n = 0;
  while (n < d) {
    if (gcd(n, d) === 1) {
      count++;
    }
    n++;
  }
  return count;
}
*/

/* 
https://github.com/JiayangWu/codewars-solutions-in-python/blob/master/007-4kyu-Number%20of%20Proper%20Fractions%20with%20Denominator%20d.py
*/

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
}

function properFractions(n) {
  if (n < 2) return 0;
  let result = 1, m = n;
  for (let i = 2; i < ~~Math.sqrt(n) + 1; i++) {
    if (isPrime(i)) {
      if (m % i == 0) {
        result *= (i - 1);
        m /= i;
      }
      while (m % i == 0) {
        result *= i;
        m /= i;
      }
    }
  }
  if (m > 1) result *= m - 1;
  return result;
}



console.log(properFractions(1), 0);
console.log(properFractions(2), 1);
console.log(properFractions(5), 4);
console.log(properFractions(15), 8);
console.log(properFractions(25), 20);
console.log(properFractions(500_000_003), 500000002);

//best

/* 
function properFractions(n){
    if (n==1) return 0; 
    let result = n;
    for (let i = 2; i * i <= n; ++i) {
        if (n % i == 0) {
            while (n % i == 0) n /= i; 
            result -= result / i; 
        } 
    }
    if (n > 1) result -= result / n; 
    return result;
}
*/

/* 
function properFractions(n){
  if(n==1) return 0;
  var facts = getDivisors(n);  
  
  var r = n;
  for(var f of facts)
  {
    r-= Math.floor(r/f);
  }
  
  return r;
}

function getDivisors(a)
{
  var arr = [];
  var p = 2;
  while(a > 1 && p <= a)
  {
    if(a % p == 0)
    {
      a/=p;    
      if(!arr.includes(p))
      {
        arr.push(p);
      }
    }
    else
    {
      p++;
    }
  }
  return arr;
}
*/
