/* 
6kyu - Fold an array
https://www.codewars.com/kata/57ea70aa5500adfe8a000110

In this kata you have to write a method that folds a given array of integers by the middle x-times.
*/

function foldArray(arr, n) {
  console.log(`  arr=${arr} n=${n}`);
  if (!n) return arr;
  let newArray = [];
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    newArray.push(arr[i] + arr[arr.length - 1 - i]);
  }
  if (arr.length % 2) newArray.push(arr[~~(arr.length / 2)]);
  return foldArray(newArray, n - 1);
}

console.log(foldArray([1, 2, 3, 4, 5], 1));
console.log(foldArray([1, 2, 3, 4, 5], 2));
console.log(foldArray([1, 2, 3, 4, 5], 3));

// best
/* 
function foldArray(a, n) {
  const r = [], c = a.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(r, n - 1) : r;
}
*/