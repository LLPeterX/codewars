/* 
6kyu - Calculate number of inversions in array
https://www.codewars.com/kata/537529f42993de0e0b00181f

Array inversion indicates how far the array is from being sorted.
Inversions are pairs of elements in array that are out of order.
*/

function countInversions(array) {
  let count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        count++;
      }
    }
  }
  return count;
}


console.log(countInversions([]), 0);
console.log(countInversions([1, 2, 3]), 0);
console.log(countInversions([2, 1, 3]), 1);
console.log(countInversions([6, 5, 4, 3, 2, 1]), 15);
console.log(countInversions([6, 5, 4, 3, 3, 3, 3, 2, 1]), 30);