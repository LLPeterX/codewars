/* 
7kyu - All Star Code Challenge #14 - Find the median
https://www.codewars.com/kata/5864eb8039c5ab9cd400005c/train/javascript

Your non-profit company has assigned you the task of calculating some simple statistics on donations. 
You have an array of integers, representing various amounts of donations your company has been given. 
In particular, you're interested in the median value for donations.

The median is the middle number of a sorted list of numbers. 
If the list is of even length, the 2 middle values are averaged.

Write a function that takes an array of integers as an argument and returns the median of those integers.

Notes:

The sorting step is vital.
Input arrays are non-empty.
*/

function median(array) {
  array.sort((a, b) => a - b);
  let i = ~~(array.length / 2);
  return array.length % 2 ? array[i] : (array[i - 1] + array[i]) / 2;
}

function median1(array) {
  const m = ~~(array.length / 2);
  //array = array.sort((a, b) => a - b);
  array.sort();
  if (array.length % 2 === 0)
    return (array[m - 1] + array[m]) / 2;
  return array[m];
}

console.log(median([3, 2, 1]), 2);
console.log(median([33, 99, 100, 30, 29, 50]), 41.5);
console.log(median([605, 337, 703, 533, 99, 960]), 569);