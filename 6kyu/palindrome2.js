/* 
6kyu - Numerical Palindrome #1.5
https://www.codewars.com/kata/58e09234ca6895c7b300008c/train/javascript

You'll be given 2 numbers as arguments: (num,s). 
Write a function which returns an array of s number 
of numerical palindromes that come after num. 
If num is a palindrome itself, it should be included in the count.
*/

function palindrome(num, s) {
  if (!Number.isInteger(num) || !Number.isInteger(s) || num < 0 || s < 0) return "Not valid";
  let result = [];
  for (let i = Math.max(11, num); result.length < s; i++) {
    if ([...String(i)].reverse().join`` === String(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(palindrome(6, 4), [11, 22, 33, 44]);
console.log(palindrome(75, 1), [77]);
console.log(palindrome(493, 0), []);
console.log(palindrome(0, 3), [11, 22, 33]);
console.log(palindrome(1219, 3), [1221, 1331, 1441]);
console.log(palindrome(101, 2), [101, 111]);
console.log(palindrome(3872, 6), [3883, 3993, 4004, 4114, 4224, 4334]);
console.log(palindrome("ACCDDCCA", 3), "Not valid");
console.log(palindrome(773, "1551"), "Not valid");
console.log(palindrome(-4505, 15), "Not valid");