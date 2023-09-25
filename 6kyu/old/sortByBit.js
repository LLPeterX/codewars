/* 
6kyu - Sorting by bits
https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript

In this kata you're expected to sort an array of 32-bit integers
in ascending order of the number of on bits they have.

In cases where two numbers have the same number of bits, compare their real values instead.
*/

function sortByBit(arr) {
  return arr.sort((a, b) => {
    let n1 = a.toString(2).replace(/0/g, '').length,
      n2 = b.toString(2).replace(/0/g, '').length
    return n1 === n2 ? a - b : n1 - n2;
  });
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]), [1, 8, 3, 3, 5, 6, 9, 7]);

// best
/* 
const sortByBit = arr => arr.sort((a, b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b)
*/