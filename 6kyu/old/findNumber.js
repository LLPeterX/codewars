/* 
6kyu - Number Zoo Patrol
https://www.codewars.com/kata/5276c18121e20900c0000235/train/javascript
*/

function findNumber(array, L = array.length) {
  return (L + 1) * (L + 2) / 2 - array.reduce((s, v) => s + v, 0);
}

console.log(findNumber([1, 3, 4, 5, 6, 7, 8]), 2);
console.log(findNumber([7, 8, 1, 2, 4, 5, 6]), 3);
console.log(findNumber([1, 2, 3, 5]), 4);
console.log(findNumber([1, 3]), 2);
console.log(findNumber([2, 3, 4]), 1);
console.log(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]), 12);
console.log(findNumber([1, 2, 3]), 4);

// cool

/* 
const findNumber = (nums, currNum=1) => (nums.indexOf(currNum) != -1) ? findNumber(nums, ++currNum) : currNum
*/