/* 
7kyu - Double Trouble
https://www.codewars.com/kata/57f7796697d62fc93d0001b8/train/javascript

Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. 
If so, remove the second number.
*/

function trouble(x, t) {
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i] + x[i + 1] === t) {
      x.splice(i + 1, 1);
      i--;
    }
  }
  return x;
}

console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7), [1, 3, 5, 6, 7, 4]);
console.log(trouble([4, 1, 1, 1, 4], 2), [4, 1, 4]);
console.log(trouble([2, 2, 2, 2, 2, 2], 4), [2]);
console.log(trouble([2, 6, 2], 8), [2, 2]); 