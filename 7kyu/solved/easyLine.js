/* 
 */

/* 
https://www.codewars.com/kata/56e7d40129035aed6c000632
Посчтитать сумму квадратов бинеоминальных коэффициентов.
** Украдено из решений
*/
function easyLine(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= (n + i) / i;
  }
  return Math.round(Math.log(sum));
}

console.log(easyLine(0));