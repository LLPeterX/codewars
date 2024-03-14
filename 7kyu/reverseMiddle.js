/* 
7kyu - Slice the middle of a list backwards
https://www.codewars.com/kata/5a043724ffe75fbab000009f/train/javascript

Write a function that takes a list of at least four elements as an argument 
and returns a list of the middle two or three elements in reverse order.
*/

function reverseMiddle(array) {
  let middle = Math.floor(array.length / 2);
  return array.slice(middle - 1, middle + 1 + array.length % 2).reverse();
}

console.log(reverseMiddle([1, 2, 3, 4]), [3, 2]);
console.log(reverseMiddle([1, 2, 3, 4, 5]), [4, 3, 2]);
console.log(reverseMiddle([1, 2, 3, 4, 5, 6]), [4, 3]);
console.log(reverseMiddle([1, 2, 3, 4, 5, 6, 7]), [5, 4, 3]);
