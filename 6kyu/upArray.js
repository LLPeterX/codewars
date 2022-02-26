/* 
6kyu - +1 Array
https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript

Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/

function upArray(arr) {
  let sum = BigInt(0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 9 || arr[i] < 0) return null;
    sum = sum * 10n + BigInt(arr[i]);
  }
  return ((sum + 1n).toString()).split('').map(Number);
}

console.log(upArray([2, 3, 9]), [2, 4, 0]);
console.log(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
console.log(upArray([1, -9]), null);
console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7]), '?');
// [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]