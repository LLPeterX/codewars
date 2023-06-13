/* 
7kyu - Adding useful functional functionality to JavaScript arrays
https://www.codewars.com/kata/52195c9bb576caf14200007f/train/javascript

The JavaScript standard now includes functional additions to array like map, filter and reduce,
 but sadly is missing the convenience functions range and sum.
 
 Implement a version of range and sum (which you can then copy and use in your future Kata to make them smaller).

* Array.range(start, count) should return an array containing 'count' numbers 
  from 'start' to 'start + count' Example: Array.range(0, 3) returns [0, 1, 2]

* Array.sum() return the sum of all numbers in the array
   Example: [0, 1, 2].sum() returns 3 Example: Array.range(-1,4).sum() should return 2

While not forbidden try to write both function without using a for loop
*/

Array.range = function (start, count) {
  return Array.from({ length: count }, (_, i) => i + start);
}

Array.prototype.sum = function () {
  return this.reduce((s, v) => s + v, 0)
}

console.log(Array.range(1, 3), [1, 2, 3])
console.log(Array.range(-1, 1), [-1])
console.log(Array.range(-3, 5), [-3, -2, -1, 0, 1])
console.log(Array.range(0, 0), [])
console.log(Array.range(1, 0), [])
console.log([-2, -1, -5].sum(), -8)
console.log([-3, -2, -1, 0, 1, 2, 3].sum(), 0)