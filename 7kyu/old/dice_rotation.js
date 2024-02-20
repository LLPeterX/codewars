/* 
7kyu - Dice Rotation
https://www.codewars.com/kata/5ff2093d375dca00170057bc
*/

function rotations(dieArray) {
  let minCount = Infinity;
  for (let k = 1; k <= 6; k++) {
    // let count = 0;
    // for (let d of dieArray) {
    //   if (d === 7 - k) count += 2;
    //   else if (d !== k) count++;
    // }
    let count = dieArray.reduce((s, d) => s + (d == k ? 0 : d == 7 - k ? 2 : 1), 0);
    minCount = Math.min(minCount, count);
  }
  return minCount;
}

console.log(rotations([1, 1, 1, 1, 1, 6]), 2);
console.log(rotations([1, 2, 3]), 2);
console.log(rotations([1, 6, 2, 3]), 3);