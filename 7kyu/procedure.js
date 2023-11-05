/* 
7kyu - Multiples and Digit Sums
https://www.codewars.com/kata/58ca77b9c0d640ecd2000b1e/train/javascript
*/

// function procedure(n) {
//   let mults = [];
//   let x = n;
//   while (x <= 100) {
//     mults.push(x);
//     x += n;
//   }
//   return mults.map(n => [...String(n)].reduce((s, v) => s + +v, 0)).reduce((s, v) => s + v, 0);
// }

function procedure(n) {
  let sum = 0, x = n;
  while (x <= 100) {
    sum += [...`${x}`].reduce((s, v) => s + +v, 0);
    x += n;
  }
  return sum;
}

console.log(procedure(25), 25);
console.log(procedure(30), 18);
console.log(procedure(12), 72);
console.log(procedure(49), 30);
console.log(procedure(17), 48);
console.log(procedure(10), 46);