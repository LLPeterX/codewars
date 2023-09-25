/* 
6kyu - Selective Array Reversing
https://www.codewars.com/kata/58f6000bc0ec6451960000fd
*/

function selReverse(array, length) {
  if (length < 2) return array;
  let res = [];
  for (let i = 0; i < array.length; i += length) {
    let k = Math.min(i + length, array.length);
    for (let j = k - 1; j >= i; j--) res.push(array[j]);
  }
  return res;
}

console.log(selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3), [6, 4, 2, 12, 10, 8, 16, 14]);
console.log(selReverse([1, 2, 3, 4, 5, 6], 2), [2, 1, 4, 3, 6, 5]);
console.log(selReverse([1, 2, 3, 4, 5, 6], 0), [1, 2, 3, 4, 5, 6]);
console.log(selReverse([1, 2, 3, 4, 5, 6], 1), [1, 2, 3, 4, 5, 6]);
console.log(selReverse([1, 2, 3, 4, 5, 6], 10), [6, 5, 4, 3, 2, 1]);

// best
/* 
function selReverse(array, length) {
  if (length == 0) return array;
  let result = [];
  for(let i = 0; i < array.length; i += length) {
    result.push(...array.slice(i, i+length).reverse());
  }
  return result;
}
*/