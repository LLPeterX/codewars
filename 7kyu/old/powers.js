/* 
7kyu - Sum of powers of 2
https://www.codewars.com/kata/5d9f95424a336600278a9632/train/javascript

Given a number n, you should find a set of numbers 
for which the sum equals n. 
This set must consist exclusively of values that are a power of 2
 (eg: 2^0 => 1, 2^1 => 2, 2^2 => 4, ...).

The function powers takes a single parameter, the number n, 
and should return an array of unique numbers.
*/

// const powers = n => {
//   let s = n.toString(2);
//   console.log(s);
//   let res = [];
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] !== '0') res.push(2 ** (s.length - i - 1));
//   }
//   return res;
// };

// FINAL
const powers = n => [...n.toString(2)].reverse().map((e, i) => +e ? 2 ** i : 0).filter(Boolean);



// console.log(powers(1), [1]);
// console.log(powers(2), [2]);
// console.log(powers(4), [4]);
console.log(powers(6), [2, 4]);
console.log(powers(688), [16, 32, 128, 512]);

console.log((688).toString(2));