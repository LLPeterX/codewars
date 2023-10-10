/* 
6kyu - Simple Fun #15: Addition without Carrying
https://www.codewars.com/kata/588468f3b3d02cf67b0005cd/train/javascript
*/

// function additionWithoutCarrying(a, b) {
//   let result = k = 0;
//   while (a > 0 || b > 0) {
//     result += ((a % 10 + b % 10) % 10) * (10 ** k++);
//     a = ~~(a / 10);
//     b = ~~(b / 10);
//   }
//   return result;
// }
function additionWithoutCarrying(a, b) {
  let sa = String(a), sb = String(b);
  sa = sa.padStart(Math.max(sa.length, sb.length), '0');
  sb = sb.padStart(Math.max(sa.length, sb.length), '0');
  let result = [...sa].reduce((s, v, i) => s + (+v + +sb[i]) % 10, '');
  return +result;
}


console.log(additionWithoutCarrying(456, 1734), 1180)

console.log(additionWithoutCarrying(99999, 0), 99999)

console.log(additionWithoutCarrying(999, 999), 888)

console.log(additionWithoutCarrying(0, 0), 0)