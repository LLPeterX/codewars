/* 
6kyu - Another one down—the Survival of the Fittest!
https://www.codewars.com/kata/563ce9b8b91d25a5750000b6/train/javascript

Given an array of integers, remove the n smallest. If there are multiple elements with the same value, remove the ones with a lower index first. If n is greater than the length of the array/list, return an empty list/array. If n is zero or less, return the original array/list.

Don't change the order of the elements that are left.
*/

function removeSmallest(n, arr) {
  if (n <= 0) return arr;
  if (n > arr.length) return [];
  let indexes = new Set(
    arr
      .map((e, i) => ({ e, i }))
      .sort((a, b) => a.e === b.e ? a.i - b.i : a.e - b.e)
      .slice(0, n)
      .map(e => e.i)
  );
  return arr.filter((_, i) => !indexes.has(i));
}

console.log(removeSmallest((-10), [1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], "negative numbers shouldn't change the array")
console.log(removeSmallest(0, [1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], "zero shouldn't change the array")
console.log(removeSmallest(2, [5, 3, 2, 1, 4]), [5, 3, 4], "the order of elements should stay the same")
console.log(removeSmallest(3, [5, 3, 2, 1, 4]), [5, 4], "the order of elements should stay the same")
console.log(removeSmallest(3, [1, 2, 3, 4, 5]), [4, 5], "the order of elements should stay the same")
console.log(removeSmallest(5, [1, 2, 3, 4, 5]), [], "you might have to return the empty array")
console.log(removeSmallest(9, [1, 2, 3, 4, 5]), [], "if n is larger then arr.length, return []")

// best

/* 
const removeSmallest = (n, arr) =>
    n >= arr.length
       ? []
       : arr.map((i, pos) => ({ val: i, pos: pos }))
            .sort((a, b) =>a.val - b.val || a.pos - b.pos)
            .slice(-(arr.length - n))
            .sort((a, b) =>a.pos - b.pos)
            .map(i=>i.val);
*/

/* 
function removeSmallest(n, arr) {
  let res = arr.slice(0);
  while( n-- > 0 ) res.splice(res.indexOf( Math.min(...res) ),1);
  return res
}
*/