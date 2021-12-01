/* 
8kyu - For Twins: 2. Math operations
https://www.codewars.com/kata/59c287b16bddd291c700009a/train/javascript
*/

function iceBrickVolume(radius, bottleLength, rimLength) {
  return (bottleLength - rimLength) * 2 * ((radius) ** 2);
}

console.log(iceBrickVolume(1, 10, 2), 16);
console.log(iceBrickVolume(5, 30, 7), 1150);