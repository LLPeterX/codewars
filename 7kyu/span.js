/* 
7kyu - The Span Function
https://www.codewars.com/kata/54f2f335cb9d99e8530008d7/train/javascript
*/

function span(arr, predicate) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      return [res, arr.slice(i)];
    } else {
      res.push(arr[i]);
    }
  }
  return [res, []];
}

function isEven(x) {
  return Math.abs(x) % 2 === 0;
}

function isOdd(x) {
  return Math.abs(x) % 2 !== 0;
}
console.log(span([2, 4, 6, 1, 4, 8], isEven));

// best
/* 
const span = (arr, predicate, idx) =>
  arr.reduce((pre, val) => (idx = idx || +!predicate(val), pre[idx].push(val), pre), [[], []]);
*/