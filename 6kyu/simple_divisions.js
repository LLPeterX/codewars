/* 
6kyu - Simple division
https://www.codewars.com/kata/59ec2d112332430ce9000005/train/javascript

In this Kata, you will be given two numbers, a and b, 
and your task is to determine if the first number a is divisible 
by all the prime factors of the second number b. 

For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).
*/

function isPrime(num) {
  if (num < 3) return num === 2;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) if (num % i === 0) return false;
  return true;
}

function getPrimeFactors(num) {
  let result = [];
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0 && isPrime(i)) result.push(i);
  }
  return result;

};

function solve(a, b) {
  const result = getPrimeFactors(b);
  return result.length ? result.every(n => a % n === 0) : false;
};

// console.log(solve(2, 256), true);
// console.log(solve(2, 253), false);
// console.log(solve(9, 243), true);
// console.log(solve(15, 12), false);
// console.log(solve(21, 2893401), true);
// console.log(solve(21, 2893406), false);
// console.log(solve(54, 2834352), true);
// console.log(solve(54, 2834359), false);
// console.log(solve(1000013, 7187761), true);
// console.log(solve(1000013, 7187762), false);


// best

/* 
function solve(a, b) {
    function gcd(a, b) {
        while (b)
            [a, b] = [b, a % b];
        return Math.abs(a);
    }
    for (var c; (c = gcd(a, b)) > 1; )
        b /= c;
    return b == 1;
}
*/

/*
// YOSYA 
function solve(a,b){
  var c=2;
  while (b!=1)
  {
    if (b%c==0)
    {
      if (a%c!=0)
        return false;
      b/=c;
      c=2
    }
    else
      c++;
  }
  return true
};
*/

/* 
function solve(a, b) {
    const getPrimeFactors = (num) => {
        const factors = new Set();
        for (let i = 2; i <= num; i++) {
            while (num % i === 0) {
                factors.add(i);
                num /= i;
            }
        }
        return factors;
    };

    const primeFactorsB = getPrimeFactors(b);
    return [...primeFactorsB].every(factor => a % factor === 0);
}
*/