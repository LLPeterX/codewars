/* 
5kyu - Calculate Variance
https://www.codewars.com/kata/5266fba01283974e720000fa/train/javascript
*/

function variance(numbers) {
  let mean = numbers.reduce((s, v) => s + v, 0) / numbers.length;
  return numbers.reduce((s, v) => s + (v - mean) ** 2, 0) / numbers.length;
}

var numbers1 = [-10, 0, 10, 20, 30];
var numbers2 = [8, 9, 10, 11, 12];
var numbers3 = [1.5, 2.5, 4, 2, 1, 1];

console.log(variance(numbers1).toFixed(4), "200.0000", "Variance for the first example set is not correct");
console.log(variance(numbers2).toFixed(4), "2.0000", "Variance for the second example set is not correct");
console.log(variance(numbers3).toFixed(4), "1.0833", "Variance for the third example set is not correct");
