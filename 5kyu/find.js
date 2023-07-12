/* 
5kyu - Missing number in Unordered Arithmetic Progression
https://www.codewars.com/kata/568fca718404ad457c000033/train/javascript

Дана неотсортированная прогрессия целых чисел.
Найти пропущенное число

*/

// на основе https://skysmart.ru/articles/mathematic/arifmeticheskaya-progressiya
function find(seq) {
  let min = Infinity, max = -Infinity, sum = 0;
  for (let i = 0; i < seq.length; i++) {
    min = Math.min(min, seq[i]);
    max = Math.max(max, seq[i]);
    sum += seq[i];
  }
  let sn = (seq.length + 1) * (min + max) / 2;
  return sn - sum;

}

console.log(find([3, 9, 1, 11, 13, 5]), 7)
console.log(find([5, -1, 0, 3, 4, -3, 2, -2]), 1)
console.log(find([2, -2, 8, -8, 4, -4, 6, -6]), 0)

