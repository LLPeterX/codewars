/* 
6kyu - Alternating Loops
https://www.codewars.com/kata/55e529bf6c6497394a0000b5

Write function combine()
that combines arrays by alternatingly taking elements passed to it.

E.g

combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
*/

function combine(...args) {
  let result = [];
  while (args.some(arr => arr.length)) {
    for (let a of args) {
      if (a.length) result.push(a.shift());
    }
  }
  return result;
}

console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]));