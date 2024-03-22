/* 
6kyu - Each n-th element of list
https://www.codewars.com/kata/5a077e8106d5b654b800004f/train/javascript

In this task, you need to write a function "each" that takes an integer number n 
and an input list of integers (possibly empty) and returns a list of n-th elements 
of the source list or an empty list. 

The first element of the list has the number 1. See examples for details.


*/

// function each(n, xs) {
//   if (n === 0) return [];
//   if (n < 0) xs = xs.reverse();
//   else if (n < 0) {
//     return xs.reverse().filter((v, i) => (i + 1) % Math.abs(n) === 0)
//   }
//   return xs.filter((_, i) => (i + 1) % n === 0);
// }

// simplified:
const each = (n, xs) => n ? (n < 0 ? xs.reverse() : xs).filter((_, i) => (i + 1) % Math.abs(n) === 0) : [];


const basicTests = [
  [1, [], []],
  [-1, [], []],
  [0, [], []],
  [0, [1, 2, 3, 4, 5, 6], []],
  [1, [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]],
  [-1, [1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]],
  [2, [1, 2, 3, 4, 5, 6], [2, 4, 6]],
  [-2, [1, 2, 3, 4, 5, 6], [5, 3, 1]],
  [3, [1, 2], []],
  [-3, [1, 2], []],
  [5, [1, 2, 3, 4, 5, 6, 7], [5]],
  [-5, [1, 2, 3, 4, 5, 6, 7], [3]],
];

for (let [n, inp, exp] of basicTests) {
  console.log(each(n, inp), '=>', exp);
}

// best
/* 
function each(n, xs) {
  return ((n < 0 && xs.reverse()), xs.filter((_, i) => ++i % n < 1));
}
*/