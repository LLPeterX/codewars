/* 
7kyu - The alphabet product
https://www.codewars.com/kata/63b06ea0c9e1ce000f1e2407/train/javascript

Даны 4 положительных целых  A < B < C < D.
На вход подаются 8 чисел: сами числа A,B,C,D, а также произведения AxB, BxC, CxD, DxA - в произвольном порядке.
Определить значение D.

*/

// function alphabet(ns) {
//   const s = ns.sort((a, b) => a - b);
//   for (let i = 2; i < s.length; i++) {
//     if (s[i] === s[0] * s[1]) {
//       [s[i], s[4]] = [s[4], s[i]];
//     }
//   }
//   if (s[2] > s[3]) [s[2], s[3]] = [s[3], s[2]];
//   for (let i = 3; i < s.length; i++) {
//     if (s[i] === s[1] * s[2]) {
//       [s[i], s[5]] = [s[5], s[i]];
//     }
//   }
//   for (let i = 4; i < s.length; i++) {
//     if (s[i] === s[2] * s[3]) {
//       [s[i], s[6]] = [s[6], s[i]];
//     }
//   }
//   return s[3];
// }

// solution from https://www.youtube.com/watch?v=FaqtKbxcU9I

function alphabet(ns) {
  const s = ns.sort((a, b) => a - b);
  for (let k = 2; k < 5; k++) {
    for (let i = k; i < s.length; i++) {
      if (s[i] === s[k - 2] * s[k - 1]) {
        [s[i], s[k + 2]] = [s[k + 2], s[i]];
      }
    }
    if (s[2] > s[3]) [s[2], s[3]] = [s[3], s[2]];
  }
  return s[3];
}


console.log(alphabet([2, 3, 4, 1, 12, 6, 2, 4]), 4);
console.log(alphabet([2, 6, 7, 3, 14, 35, 15, 5]), 7);
console.log(alphabet([20, 10, 6, 5, 4, 3, 2, 12]), 5);
console.log(alphabet([2, 6, 18, 3, 6, 7, 42, 14]), 7);
console.log(alphabet([7, 96, 8, 240, 12, 140, 20, 56]), 20);
console.log(alphabet([20, 30, 6, 7, 4, 42, 28, 5]), 7);
console.log(alphabet([550, 22, 396, 16025, 11538, 18, 25, 641]), 641);

// best
/* 
function alphabet(ns) {
  let sorted = ns.sort((a,b) => a - b)
  return sorted[7] / sorted[sorted[0] * sorted[1] == sorted[2] ? 3 : 2]
}
*/

/* 
function alphabet(ns) {
    ns.sort((a, b) => a - b);
    let a = ns[0];
    let b = ns[1];
    let AxB = a*b;
    let c = ns[2] === AxB? ns[3] : ns[2];

    let BxC = b*c;
    let CxD = ns[ns.length-1];

    
    let d = CxD/c

    return d;
  }
*/