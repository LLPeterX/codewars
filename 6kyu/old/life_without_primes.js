/* 
6kyu - Life without primes
https://www.codewars.com/kata/59f8750ac374cba8f0000033/train/javascript


*/
const isPrime = num => {
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) if (num % i === 0) return false;
  return num > 1;
}



function solve(n) {
  const primeDigits = [2, 3, 5, 7];
  if (n < 10) return [1, 4, 6, 8, 9, 10, 14, 16, 18, 40][n];
  for (let x = 44, i = 9; ; x++) {
    if (!isPrime(x)) {
      let d = [...String(x)].map(Number);
      if (d.every(v => !primeDigits.includes(v))) i++;
      if (n === i) return x;
    }
  }
};

console.log(solve(10), 44);
console.log(solve(50), 169);
console.log(solve(100), 644);
console.log(solve(150), 896);
console.log(solve(200), 1060);
console.log(solve(300), 1668);
console.log(solve(400), 4084);
console.log(solve(500), 4681);
