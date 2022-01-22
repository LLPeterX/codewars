/* 
7kyu - Flatten and sort an array
https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
*/

function flattenAndSort(array) {
  const flat = (arr) => arr.reduce((a, v) => a.concat(Array.isArray(v) ? flat(v) : v), []);
  return flat(array).sort((a, b) => a - b);
}

console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], []]), []);
console.log(flattenAndSort([[], [1]]), [1]);
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);

//best
/* 
function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}
*/