/* 
7kyu - Alphabetical Grid
https://www.codewars.com/kata/60a94f1443f8730025d1744b/train/javascript

*/

// function grid(N) {
//   if (N<0) return null;
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let arr = Array(N).fill().map((row, i) => Array(N).fill().map((col, j) => alphabet[(i + j) % 26]));
//   let res = arr.map(row => row.join(' ')).join('\n');
//   return res;

// }

function grid(N) {
  return N < 0 ? null : Array(N).fill().map((_, i) => Array(N).fill().map((_, j) => 'abcdefghijklmnopqrstuvwxyz'[(i + j) % 26])).map(row => row.join(' ')).join('\n');

}


console.log('a'.charCodeAt());
console.log(grid(10));