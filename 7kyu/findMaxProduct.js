/* 
7kyu - Find the maximal product
https://www.codewars.com/kata/5a05c404697598b477000072

Given a non-empty array of integers, find the maximum product of elements from all available sequences.

A sequence here is any pattern in which the elements are equally spaced apart in the array.
*/

function findMaxProduct(arr) {
  let max = -Infinity;
  for (let level = 0; level < arr.length; level++) {
    let value = 1;
    for (let i = level; i < arr.length; i += (level + 1)) {
      value *= arr[i];
    }
    max = Math.max(max, value);
  }
  return max;
}

console.log(findMaxProduct([11, 6, -2, 0, 5, -4, 2]), 8)
console.log(findMaxProduct([4, 0, -19]), 0);
console.log(findMaxProduct([11, 6, -2, 0, 5, -4, 2]), 8);
console.log(findMaxProduct([8, -6, 4, 0, 4, 0, -5, 0]), 4);
console.log(findMaxProduct([4, 6, 8, 11, 13, 5, 7, 9]), 8648640);

// best

/* 
function findMaxProduct(arr) {
  return Math.max(...arr.map((_, i) => arr.filter((_, j) => (j + 1) % (i + 1) === 0).reduce((a, b) => a * b, 1)));
}
*/