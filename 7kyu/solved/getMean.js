/* 
7kyu - The mean of two means
https://www.codewars.com/kata/583df40bf30065fa9900010c/train/javascript

Write a function getMean that takes as parameters an array (arr) 
and 2 integers (x and y). 
The function should return the mean between the mean of the the first x elements
of the array and the mean of the last y elements of the array.

The mean should be computed if both x and y have values higher than 1 
but less or equal to the array's length. Otherwise the function should return -1.
*/

function getMean(arr, x, y) {
  if (x <= 1 || x > arr.length || y <= 1 || y > arr.length) return -1;
  let mx = arr.slice(0, x).reduce((s, v) => s + v, 0) / x;
  let my = arr.slice(-y).reduce((s, v) => s + v, 0) / y;
  return (mx + my) / 2;
}

console.log(getMean([1, 3, 2, 4], 2, 3), 2.5);
console.log(getMean([1, 3, 2], 2, 2), 2.25);
console.log(getMean([1, 3, 2, 4], 1, 2), -1);
console.log(getMean([1, 3, 2, 4], 2, 8), -1);
console.log(getMean([64, 12, 44, 23, 29, 21, 73, 54, 66, 90, 76, 86, 5, 72, 93, 29, 63, 80, 4, 92, 73, 40, 18, 47, 19, 18, 1, 92, 3, 21, 57, 2], 32, 4), 33.296875);