/* 
6kyu - Array Helpers
https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript

реализовать методы Array:
- square() must return a copy of the array, containing all values squared
- cube() must return a copy of the array, containing all values cubed
- average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
- sum() must return the sum of all array values
- even() must return an array of all even numbers
- odd() must return an array of all odd numbers
*/

Array.prototype.square = function () {
  return this.map(v => v * v);
}

Array.prototype.cube = function () {
  return this.map(v => v ** 3);
}


Array.prototype.sum = function () {
  return this.reduce((sum, v) => sum + v, 0);
}

Array.prototype.average = function () {
  return this.sum(this) / this.length;
}

Array.prototype.even = function () {
  return this.filter(v => v % 2 == 0);
}

Array.prototype.odd = function () {
  return this.filter(v => v % 2);
}





const numbers = [1, 2, 3, 4, 5];
console.log(numbers.square(), [1, 4, 9, 16, 25]);
console.log(numbers.cube(), [1, 8, 27, 64, 125]);
console.log(numbers.sum(), 15, 'Wrong sum');
console.log(numbers.average(), 3, 'Wrong average');
console.log(numbers.even(), [2, 4], 'Wrong result for even()');
console.log(numbers.odd(), [1, 3, 5], 'Wrong result for odd()');

// best
/* 
Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }
*/