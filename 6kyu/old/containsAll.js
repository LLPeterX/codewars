/* 
6kyu - Does array x contain all values within array y?
https://www.codewars.com/kata/5143cc9694a24abcd2000001/train/javascript

We want to extend the array class so that it provides a contains_all? method. 
This method will always assume that an array is passed in and will return true 
if all values in the passed in array are present within the current array.
*/

/* 
Object.defineProperty(Array.prototype, "containsAll", {
  value: function containsAll(a) {
    return a.every(value => this.includes(value));
  }
});
 */

Array.prototype.containsAll = function (a) {
  return a.every(value => this.includes(value));
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].containsAll([1, 2, 3, 4, 5]), true);
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].containsAll([9, 2, 5, 4, 10]), true);
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].containsAll([12, 15]), false);
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].containsAll([]), true);
console.log([].containsAll([12, 15]), false);
console.log([].containsAll([]), true);