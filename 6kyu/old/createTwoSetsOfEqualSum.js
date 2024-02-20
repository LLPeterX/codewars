/* 
6kyu - Two Sets of Equal Sum
https://www.codewars.com/kata/647518391e258e80eedf6e06/train/javascript

If possible, divide the integers 1,2,…,n into two sets of equal sum.

Examples:
For n = 8, valid answers include:
[1, 3, 6, 8], [2, 4, 5, 7] (or [[1, 3, 6, 8], [2, 4, 5, 7]])
[8, 1, 3, 2, 4], [5, 7, 6]
[7, 8, 3], [6, 1, 5, 4, 2], and others.

For n = 9 it is not possible
*/

// https://ru.stackoverflow.com/questions/115595/%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0-%D0%BF%D0%BE-%D1%80%D0%B0%D0%B2%D0%B5%D0%BD%D1%81%D1%82%D0%B2%D1%83-%D0%B4%D0%B2%D1%83%D1%85-%D1%87%D0%B0%D1%81%D1%82%D0%B5%D0%B9
function createTwoSetsOfEqualSum(n) {
  let sum = n * (n + 1) / 2;
  if (sum % 2) return [];
  let a = [], b = [];
  let suma = 0, sumb = 0;
  for (let i = n; i >= 1; i--) {
    if (suma < sumb) {
      a.push(i);
      suma += i;
    } else {
      b.push(i);
      sumb += i;
    }
  }
  return [a, b];
}

console.log(createTwoSetsOfEqualSum(8));

// cool

/* 
const createTwoSetsOfEqualSum = n => {
  if ((n + 1) % 4 > 1) return [];
  
  const secondArr = Array.from({length: n}, (_, idx) => idx + 1);
  const firstArr  = [...secondArr.splice(0, ~~(n/4)), ...secondArr.splice(-~~(++n/4))];
  
  return [firstArr, secondArr];
}
*/