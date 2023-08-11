/* 
7kyu - 2D / 1D array coordinates mapping
https://www.codewars.com/kata/588dd9c3dc49de0bd400016d/train/javascript

Hello! Your are given x and y and 2D array size tuple (width, height) and you have to:
1) Calculate the according index in 1D space (zero-based).
2) Do reverse operation.

*/

function to1D(x, y, size) {
  return y * size[0] + x;
}

function to2D(n, size) {
  return [n % size[0], Math.floor(n / size[0])];
}

console.log(to1D(0, 0, [3, 3]), 0);
console.log(to1D(1, 1, [3, 3]), 4);
console.log(to2D(3, [3, 3]), [0, 1]);
console.log(to2D(5, [3, 3]), [2, 1]);
console.log(to1D(163, 253, [221, 373]), 56076);
console.log(to2D(5, [2, 4]), [1, 2]);
console.log(to2D(7, [1, 8]), [0, 7]);
console.log(to2D(98816, [240, 414]), [176, 411]);