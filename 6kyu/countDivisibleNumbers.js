/* 
6kyu - Count the divisible numbers
https://www.codewars.com/kata/55a5c82cd8e9baa49000004c

Complete the function that takes 3 numbers x, y and k (where x ≤ y), and returns the number of integers 
within the range [x..y] (both ends included) that are divisible by k.

More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }

Example
Given x = 6, y = 11, k = 2 the function should return 3, because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10

Дан дипазон [X..Y]. Найти в нем количество целых чисел, которые делятся на K

!!!! Диапазон большой. Решение должно быть O(log n)
*/
/* 
function divisibleCount(x, y, k) {
  let count = 0;
  for (let i = x; i <= y; i++) {
    if (i % k === 0) count++;
  }
  return count;
}
 */
function divisibleCount(x, y, k) {
  let i = x;
  while (i % k) i++;
  return (y - i + 1) / k;

}

console.log(divisibleCount(6, 11, 2)); // 3

//best
/* 
function divisibleCount(x, y, k) {
  return Math.floor(y/k) - Math.floor((x-1)/k)
}
*/

/* 
function divisibleCount(x, y, k) {
  var first = Math.ceil(x / k) * k;
  if (first > y) return 0;
  return parseInt((y - first) / k) + 1;
}
*/