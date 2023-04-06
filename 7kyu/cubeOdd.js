/* 
7kyu - Sum of Odd Cubed Numbers
https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript

Find the sum of the odd numbers within an array, after cubing the initial integers.
The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
  return arr.some(v => typeof v !== "number") ? undefined : arr.reduce((sum, v) => sum + (v % 2 ? v ** 3 : 0), 0);
}

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(["a", 12, 9, "z", 42]), undefined);