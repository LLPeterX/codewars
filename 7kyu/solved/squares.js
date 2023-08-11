/* 
7kyu - Squares sequence
https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript

Complete the function that returns an array of length n, starting with the given number x 
and the squares of the previous number. 
If n is negative or zero, return an empty array/list.
*/

function squares(x, n) {
  if (n < 1) return [];
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i ? result[i - 1] ** 2 : x);
  }
  return result;
}

console.log(squares(2, 5), [2, 4, 16, 256, 65536]);
console.log(squares(3, 3), [3, 9, 81]);
console.log(squares(5, 3), [5, 25, 625]);
console.log(squares(10, 4), [10, 100, 10000, 100000000]);

//best

/* 
function squares(x, n) {
  return Array.from({length: n}, (v, k) => Math.pow(x, Math.pow(2, k)))
}
*/