/* 
6kyu - Simple Fun #247: To And From
https://www.codewars.com/kata/590c3173cd3b99c467000a26

Человек идет от точки A в точку B со скоростью 1 м/с.
Дойдя до точки B, он разворачивается и идет назад с той же скоростью. И т.д.
Найти точку, в которой он будет находится в момент T

Пример: For a = 2, b = 4 and t = 3, the output should be 3.
Числа большие - 10^9

a--->b
a<---b
a->t-b

*/

// function toAndFrom(a, b, t) {
//   let dist = t % Math.abs(b - a);
//   let k = Math.floor(t / Math.abs(b - a));
//   console.log(`a=${a} b=${b} (d=${b - a}) t=${t} dist=${dist} k=${k}`);
//   if (b > a) {
//     return (k % 2 === 0) ? a + dist : b - dist;
//   } else {
//     return (k % 2 === 0) ? a - dist : b + dist;
//   }
// }

// simplified:
function toAndFrom(a, b, t) {
  let distance = t % Math.abs(b - a), direction = Math.floor(t / Math.abs(b - a));
  return b > a ? direction % 2 ? b - distance : a + distance : direction % 2 ? b + distance : a - distance;
}


console.log(toAndFrom(2, 4, 3), 3);
console.log(toAndFrom(1, 10, 8), 9);
console.log(toAndFrom(10, 4, 8), 6);
console.log(toAndFrom(2, 4, 5), 3);
console.log(toAndFrom(42, 150, 548), 142);
console.log(toAndFrom(68, 8, 37), 31);  //FAIL
console.log(toAndFrom(54, 93, 91), 67);  //FAIL