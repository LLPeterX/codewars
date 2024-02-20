/* 
7kyu - Power of 4
https://www.codewars.com/kata/544d114f84e41094a9000439/train/javascript

Write a method that returns true if a given parameter is a power of 4,
and false if it's not. 
If parameter is not an Integer (eg String, Array) method should return false as well.
*/

function powerOf4(n) {
  return Number.isInteger(n) && Number.isInteger(Math.log(n) / Math.log(4));
}

console.log(powerOf4(4), true);
console.log(powerOf4(16), true, "4^4 = 16");
console.log(powerOf4(1), true, "Four to the power of 0 is 1");
console.log(powerOf4(20), false, "20 is not a power of 4");
console.log(powerOf4(44), false, "44 is not a power of 4");
console.log(powerOf4(64), true, "64 is a power of 4", Math.pow(64, 1 / 4));
console.log(powerOf4(3.1415), false);
console.log(powerOf4("1"), false, "Should return false for strings");
console.log(powerOf4("4"), false, "Should return false for strings");
console.log(powerOf4(null), false, "Should return false for non-numbers");
console.log(powerOf4(undefined), false, "Should return false for non-numbers");