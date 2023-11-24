/* 
7kyu - Sectional Array Sort
https://www.codewars.com/kata/58ef87dc4db9b24c6c000092/train/javascript
*/

function sectSort(array, start, length) {
  if (!length) length = 1e6;
  let subarray = array.slice(start, start + length).sort((a, b) => a - b);
  let end = array.length - start - length > 0 ? array.slice(-array.length + start + length) : [];
  return [...array.slice(0, start), ...subarray, ...end];
}


// console.log(sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5), [9, 7, 1, 2, 3, 4, 5, 8, 6]);
console.log(sectSort([
  17, 19, 2, 8, 11, 2, 12,
  10, 18, 3, 9, 8, 15, 2,
  9, 7, 19, 14, 11, 8
], 1, 0), [17, 2, 2, 2, 3, 7, 8, 8, 8, 9, 9, 10, 11, 11, 12, 14, 15, 18, 19, 19]
);


// best

/* 
function ascendingSort(a, b) { return a - b; }

function sectSort(arr, start, length) {
  var len = (length || arr.length) + start;
  return [].concat(
    arr.slice(0, start),
    arr.slice(start, len).sort(ascendingSort),
    arr.slice(len)
  );
}
*/

/* 
const sectSort = (array, start, length) =>
  [...array.slice(0, start), ...array.slice(start, start + (length = length > 0 ? length : array.length)).sort((a, b) => a - b), ...array.slice(length + start)];
*/