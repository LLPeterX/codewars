/* 
7kyu - Count up the points for the 7 Wonders board game! Easy version
https://www.codewars.com/kata/5adadcb36edb07df5600092e

7 Wonders — это настольная игра, в которой вы строите свой город, собираете ресурсы и сражаетесь с соседями.
Часть игры также заключается в том, чтобы исследовать науку, чтобы набирать очки в конце игры. 
Есть 3 типа научных глифов, которые вы можете собрать:
* комапсы
* шестерни
* таблички

Суммирование очков:
1) Каждый отдельный набор из трех разных глифов приносит 7 очков. Ровно по 1 предмету
2) Количество каждого глифа, которым вы владеете, возводится в квадрат, а затем суммируется.
3) Общее количество очков науки равно сумме двух шагов 1 и 2.
*/

function solve(compasses, gears, tablets) {
  let p = 0, c = compasses, g = gears, t = tablets;
  while (c-- > 0 && g-- > 0 && t-- > 0) p += 7;
  return p + compasses ** 2 + gears ** 2 + tablets ** 2;
}

console.log(solve(0, 0, 0), 0);
console.log(solve(1, 1, 1), 10);
console.log(solve(2, 1, 1), 13);
console.log(solve(4, 2, 2), 38); // fail
console.log(solve(7, 2, 2), 71); // fail

// best
/* 
function solve(c, g, t) {
  return Math.min(c, g, t) * 7 + c * c + g * g + t * t
}
*/