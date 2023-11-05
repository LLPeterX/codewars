/* 
7kyu - Sub-array elements sum
https://www.codewars.com/kata/5b5e0ef007a26632c400002a/train/javascript

Given an array of arrays of integers, your goal is to return the sum 
of a specific set of numbers, starting with elements 
whose position is equal to the main array length and going down by one at each step.

Say for example the parent array has 3 sub-arrays inside: 
 you should consider the third element of the first sub-array, 
 the second of the second array 
 and the first element in the third one: 
 [[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]] 
 would have you considering: 
  1 for [3, 2, 1, 0], 
  6 for [4, 6, 5, 3, 2] 
  9 for [9, 8, 7, 4], 
 which sums up to 16.

One small note is that not always each sub-array will have enough elements, 
in which case you should then use a default value (if provided) or 0 (if not provided),
as shown in the test cases.
*/

// function elementsSum(arr, d = 0) {
//   let sum = 0;
//   for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
//     if (j >= 0 && j < arr[i].length) sum += arr[i][j];
//     else sum += d;
//   }
//   return sum;
// }

// function elementsSum(arr, d = 0, L = arr.length - 1) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (L - i >= 0 && L - i < arr[i].length) sum += arr[i][L - i];
//     else sum += d;
//   }
//   return sum;
// }


// function elementsSum(arr, d = 0, L = arr.length - 1) {
//   return arr.reduce((sum, v, i, a) => sum + ((L - i >= 0 && L - i < v.length) ? a[i][L - i] : d), 0);
// }

// final:
function elementsSum(arr, d = 0, L = arr.length - 1) {
  return arr.reduce((sum, v, i, a) => sum + (v[L - i] ?? d), 0);
}
