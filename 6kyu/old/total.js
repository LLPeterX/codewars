/* 
6kyu - Sum of prime-indexed elements
https://www.codewars.com/kata/59f38b033640ce9fc700015b/train/javascript

In this Kata, you will be given an integer array 
and your task is to return the sum of elements occupying prime-numbered indices.
*/

function isPrime(n) {
  if (n < 2) return false;
  for (let d = 2; d * d <= n; d++) {
    if (n % d == 0) return false;
  }
  return true;
}

function total(arr) {
  return arr.reduce((s, v, i) => s + (isPrime(i) ? v : 0), 0);
};

console.log(total([]), 0);
console.log(total([1, 2, 3, 4]), 7, [isPrime(0), isPrime(1), isPrime(2), isPrime(3)]);
console.log(total([1, 2, 3, 4, 5, 6]), 13);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8]), 21);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 21);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 33);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 47);