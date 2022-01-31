/* 
7kyu - Spinning Rings
https://www.codewars.com/kata/59afff65f1c8274f270020f5/train/javascript
*/

function spinningRings(innerMax, outerMax) {
  let inner = outer = count = 0;
  while (true) {
    count++;
    if (--inner < 0) inner = innerMax;
    if (++outer > outerMax) outer = 0;
    //console.log(` count ${count} inner=${inner} outer=${outer}`);
    if (inner === outer) return count;
  }
};

console.log(spinningRings(2, 3), 5);
console.log(spinningRings(3, 2), 2);
console.log(spinningRings(1, 1), 1);
console.log(spinningRings(2, 2), 3);
console.log(spinningRings(3, 3), 2);

// cool
/* 
const spinningRings = (innerMax, outerMax, out = 0) => out % (outerMax + 1) === innerMax - (out - 1) % (innerMax + 1) ? out : spinningRings(innerMax, outerMax, ++out)
*/