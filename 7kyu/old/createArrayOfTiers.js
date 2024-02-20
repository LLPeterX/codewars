/* 
7kyu - Number to digit tiers
https://www.codewars.com/kata/586bca7fa44cfc833e00005c/train/javascript

Create a function that takes a number and returns an array of strings
containing the number cut off at each digit.

Examples
420 should return ["4", "42", "420"]
2017 should return ["2", "20", "201", "2017"]
*/

function createArrayOfTiers(num) {
  return Array.from({ length: String(num).length }, (_, i) => String(num).slice(0, i + 1));
}

console.log(createArrayOfTiers(80200));