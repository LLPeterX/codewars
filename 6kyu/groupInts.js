/* 
6kyu - Grouping integers into a nested list
https://www.codewars.com/kata/583fe48ca20cfc3a230009a1/train/javascript
*/

function groupInts(xs, x) {
  let current = [],
    result = [],
    mode;
  for (let n of xs) {
    if (mode == n >= x) {
      current.push(n);
    } else {
      if (current.length) result.push(current);
      current = [n];
    }
    mode = n >= x;
  }
  if (current.length) result.push(current);
  return result;
}

console.log(groupInts([], 0), []);
console.log(groupInts([1], 1), [[1]]);
console.log(groupInts([1, 2, 3], 0), [[1, 2, 3]]);
console.log(groupInts([1, 2, 3], 3), [[1, 2], [3]]);
console.log(groupInts([-1, -1, -1, 10, 10, 10, -1, -1, -1, 10, -1, 10], 10), [[-1, -1, -1], [10, 10, 10], [-1, -1, -1], [10], [-1], [10]]);
console.log(groupInts([1, 1, 1, 0, 0, 6, 10, 5, 10], 6), [[1, 1, 1, 0, 0], [6, 10], [5], [10]]);
