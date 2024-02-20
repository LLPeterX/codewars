/* 
7kyu - Send in the Clones
https://www.codewars.com/kata/58ddffda929dfc2cae0000a5/train/javascript
*/

// var clonewars = function (kataPerDay) {
//   let katas = 0, clones = 1;
//   for (let i = 0; i < kataPerDay; i++) {
//     clones += 2 ** i;
//     katas += 2 ** i * (kataPerDay - i);
//   }
//   return [Math.ceil(clones / 2), katas];
// }

// после упрощения:
var clonewars = function (kataPerDay) {
  let katas = 0;
  for (let i = 0; i < kataPerDay; i++) {
    katas += 2 ** i * (kataPerDay - i);
  }
  return [Math.ceil(2 ** kataPerDay / 2), katas];
}
// должна быть формула для katas!!!

console.log(clonewars(1), [1, 1]);
console.log(clonewars(5), [16, 57]);
console.log(clonewars(10), [512, 2036]);

// best
/* 
function clonewars(kataPerDay) {
  return [Math.ceil(2**(kataPerDay-1)), 2**(kataPerDay+1) - kataPerDay - 2];
}
*/