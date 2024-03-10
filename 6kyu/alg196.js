/* 
6kyu - The 196-algorithm and Lychrel numbers
https://www.codewars.com/kata/55e079b1e00f75e1cd00013b/train/javascript

Many numbers can be formed into palindromic numbers 
(a number that remains the same when its digits are reversed) by applying the 196-algorithm:
  Take any positive integer, reverse the digits, and add to the original number. 
  Repeat until the result is a palindrome.

Lychrel numbers:
A Lychrel number is a natural number that cannot form a palindrome using the 196-algorithm. 
That is, the algorithm will never stop since it won't ever generate a palindrome.
For base 10 numbers, no number has mathematically been proven to be a Lychrel number. 
But there are numbers for which, despite millions of iterations, the 196-algorithm hasn't come to an end. The smallest number for which no solution has yet been found is 196, giving the algorithm its name.

Your task:
- Implement the 196-algorithm: Write a function that reverses a number **n **and adds 
to the original, until the result is a palindromic number (at least one iteration is required; don't just return the starting number if it's palindromic).
- n will always be between 1 and 9999, inclusive.
- Your code should be able to handle Lychrel number candidates (numbers for which the 196-algorithm 
  won't stop in a reasonable amount of time). 
  Hint: The number 1,186,060,307,891,929,990 takes 261 iterations 
  in order to end up in a 119-digit palindrome which is the record for every number 
  successfully calculated by anyone so far.
- The function should return the resulting palindrome as an integer or -1 
  if the number is a Lychrel number candidate.  

*/

const reverseNumber = (n) => +[...String(n)].reverse().join``;

function alg196(n) {
  let count = 0;
  do {
    n += reverseNumber(n);
    if (isNaN(n)) return -1;
    if (n == reverseNumber(n)) return n;
  } while (count++ < 1000)
  return -1;
}

console.log(alg196(59), 1111);
console.log(alg196(23), 55);
console.log(alg196(55), 121);
console.log(alg196(1), 2);
console.log(alg196(196), -1);

