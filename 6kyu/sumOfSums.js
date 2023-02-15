/* 
6kyu - Sum the nums, sum the sums and sum the nums up to that sum
https://www.codewars.com/kata/60d2325592157c0019ee78ed
 */

function sumOfSums(n) {
  let squaresSum = (n * (n + 1n) * (n * 2n + 1n) / 6n + n * (n + 1n) / 2n) / 2n;
  return squaresSum * (squaresSum + 1n) / 2n;
}

console.log(sumOfSums(3n));