/* 
7kyu - Array Manipulation
https://www.codewars.com/kata/58d5e6c114286c8594000027/train/javascript

Given an array of positive integers, replace every element 
with the least greater element to its right. 
If there is no greater element to its right, replace it with -1.
*/

// function arrayManip(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let max = array.slice(i + 1).sort((a, b) => a - b).find(e => e > array[i]);
//     result.push(max ?? -1);
//   }
//   return result;
// }

// shorter:
function arrayManip(array) {
  return array.map((v, i) => array.slice(i + 1).sort((a, b) => a - b).find(e => e > v) ?? -1);
}


console.log(arrayManip([8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28]), [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1]);
//console.log(arrayManip([2, 4, 18, 16, 7, 3, 9, 13, 18, 10]), [3, 7, -1, 18, 9, 9, 10, 18, -1, -1]);

