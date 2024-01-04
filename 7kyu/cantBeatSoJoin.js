/* 
7kyu - If you can't beat 'em, join 'em!
https://www.codewars.com/kata/5d37899a3b34c6002df273ee/train/javascript

You are given an array of arrays. 
Inside of the interior arrays are numbers. 
Join the arrays together by descending total array value ending up with one final array.

Simple example:

cantBeatSoJoin([[1,2], [3,4], [5,6], [7,8], [9]]) -> [7, 8, 5, 6, 9, 3, 4, 1, 2]
*/

// first vatriant
// function cantBeatSoJoin(numbers) {
//   return numbers.map((a, i) => [i, a.reduce((s, v) => s + v, 0)])
//     .sort((a, b) => b[1] - a[1])
//     .map(e => e[0])
//     .reduce((r, a) => [...r, ...numbers[a]], []);
// }

function cantBeatSoJoin(numbers) {
  return numbers.map((subarray, i) => [i, subarray.reduce((sum, v) => sum + v, 0)])
    .sort((a, b) => b[1] - a[1])
    .reduce((result, v) => [...result, ...numbers[v[0]]], []);
}

//console.log(cantBeatSoJoin([[1, 2], [3, 4], [5, 6], [7, 8], [9]]), [7, 8, 5, 6, 9, 3, 4, 1, 2]);
console.log(cantBeatSoJoin([[5, 1], [9, 14], [17, 23], [4, 1], [0, 1]]), [17, 23, 9, 14, 5, 1, 4, 1, 0, 1]);
console.log(cantBeatSoJoin([[52, 11, 33, 222], [582, 192, 442, 512, 41], [23912], [2314], [2491, 2412, 84828]]),
  [2491, 2412, 84828, 23912, 2314, 582, 192, 442, 512, 41, 52, 11, 33, 222]);
