/* 
6kyu - Length of missing array
https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript
*/

function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || !arrayOfArrays[0]) return 0;
  let min = +Infinity, max = -Infinity, sumLens = 0, lens = arrayOfArrays.map(a => (a || []).length);
  for (let l of lens) {
    if (!l) return 0;
    min = Math.min(min, l);
    max = Math.max(max, l);
    sumLens += l;
  }
  return ((max * (max + 1) / 2) - (min * (min - 1) / 2) - sumLens);
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 3);
console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 2);
console.log(getLengthOfMissingArray([[null], [null, null, null]]), 2);
console.log(getLengthOfMissingArray([['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']]), 5);

console.log(getLengthOfMissingArray([]), 0);


console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1, 5, 6], [1, 1], [5, 6, 7, 8, 9]]), 4);
console.log(getLengthOfMissingArray([[1, 2, 2], null]), 0);