/* 
6kyu - Going backwards: Number from every possible sum of two digits
https://www.codewars.com/kata/5b4fd549bdd074f9a200005f/train/javascript

Given a long number, return all the possible sum of two digits of it.
For example, 12345: all possible sum of two digits from that number are:

[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]


**** ОПИСАНИЕ НИХУЯ НЕ ПОНЯТНО ****
*/

function number(sums) {
  if (sums.length < 2) {
    return Math.ceil(sums[0] / 2) * 10 + Math.floor(sums[0] / 2);
  }
  let len = Math.floor(Math.sqrt(2 * sums.length)), d = [(sums[0] + sums[1] - sums[len]) / 2];
  for (i = 0; i < len; i++) {
    d[i + 1] = sums[i] - d[0];
  }
  return +d.join('');
}

console.log(number([6, 7, 11]), 156);
console.log(number([9, 13, 17, 14, 6, 10, 7, 14, 11, 15]), 81596);
console.log(number([11, 8, 5, 13, 10, 7]), 3852);
console.log(number([5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10]), 3264128);
console.log(number([18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18]), 999999);