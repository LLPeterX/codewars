/* 
7kyu - Hands Up
https://www.codewars.com/kata/56d8f14cba01a83cdb0002a2/train/javascript
*/

const getPositions = s => {
  return [s % 3, ~~(s / 3) % 3, ~~(s / 9) % 3];
}

console.log(getPositions(54), [0, 0, 0]);
console.log(getPositions(98), [2, 2, 1]);
console.log(getPositions(3), [0, 1, 0]);