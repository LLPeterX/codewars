/* 
6kyu - Cat Kata, Part 1
https://www.codewars.com/kata/5869848f2d52095be20001d1/train/javascript
*/

function peacefulYard(yard, minDistance) {
  let cats = [];
  for (let y = 0; y < yard.length; y++) {
    for (let x = 0; x < yard[0].length; x++) {
      if (yard[y][x] !== '-') {
        if (cats.some(([y1, x1]) => Math.hypot(x - x1, y - y1) < minDistance)) return false;
        cats.push([y, x]);
      }
    }
  }
  return true;
}

