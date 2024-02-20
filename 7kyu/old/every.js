/* 
7kyu - Every nth array element. (Basic)
https://www.codewars.com/kata/5753b987aeb792508d0010e2/train/javascript
*/

function every(arr, interval = 1, start = 0) {
  const result = [];
  for (let i = start; i < arr.length; i += interval) {
    result.push(arr[i]);
  }
  return result;
}

console.log(every([0, 1, 2, 3, 4]), [0, 1, 2, 3, 4])
console.log(every([0, 1, 2, 3, 4], 1), [0, 1, 2, 3, 4])
console.log(every([0, 1, 2, 3, 4], 2), [0, 2, 4])
console.log(every([0, 1, 2, 3, 4], 3), [0, 3])
console.log(every([0, 1, 2, 3, 4], 3, 1), [1, 4])

// best
/* 
const every = (arr, interval, start) =>
  arr.slice(start).filter((_, idx) => !(idx % interval));
*/