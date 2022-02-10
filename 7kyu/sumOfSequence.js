/* 
7kyu - Sum of a sequence
https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

Даны 3 числа: begin, end, step (inclusive).
Вычислить сумму последовательности от begin до end с шагом step
*/

// FAIL TIMEOUT
// const sequenceSum = (begin, end, step) => {
//   let sum = 0;
//   for (let x = begin; x <= end; x += step) sum += x;
//   return sum;
// };

const sequenceSum = (begin, end, step) => {
  return begin > end ? 0 : begin + sequenceSum(begin + step, end, step)
};

console.log(sequenceSum(2, 6, 2), 12)
console.log(sequenceSum(1, 5, 1), 15)
console.log(sequenceSum(1, 5, 3), 5)  