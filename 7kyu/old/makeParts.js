/* 
7kyu - Cut array into smaller parts
https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150/train/javascript

Write function makeParts or make_parts (depending on your language) 
that will take an array as argument and the size of the chunk.

Example: if an array of size 123 is given and chunk size is 10 
there will be 13 parts, 12 of size 10 and 1 of size 3.
*/

function makeParts(arr, chunkSize) {
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

console.log(makeParts([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]])
console.log(makeParts([1, 2, 3], 1), [[1], [2], [3]])
console.log(makeParts([1, 2, 3, 4, 5], 10), [[1, 2, 3, 4, 5]])