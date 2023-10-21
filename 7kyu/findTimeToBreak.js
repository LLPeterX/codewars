/* 
7kyu - Time until distance between moving ships
https://www.codewars.com/kata/5d4dd5c9af0c4c0019247110/train/javascript

Два корабля ловят рыбу и связаны сетью между собой.
Длина сети - 40 миль. 
Как только расстояние между кораблями превысит 40 миль, сеть рвется.
Надо узнать, сколько времени на это потребуется.
Зная пеленг каждого корабля, найдите время в минутах, 
когда расстояние между двумя кораблями по прямой достигнет 40 миль.
Скорость обоих кораблей 90 миль/час. Начинают в одной точке
Пеленги заданы в градусах (0...359) по часовой стрелке, считая от севера.
Если сеть никогда не порвётся, вернуть Infinity.

Результат округлить до 2 знаков после запятой.

*/

function findTimeToBreak(bearingA, bearingB) {
  if (bearingA === bearingB) return Infinity;
  let angle = Math.abs(bearingA - bearingB);
  let distance = (angle % 180 == 0) ? 20 : 20 / Math.sin(angle * Math.PI / 180 / 2);
  return +(distance * 60 / 90).toFixed(2);
}

console.log(findTimeToBreak(0, 90), 18.86, '(0, 90)');
console.log(findTimeToBreak(270, 90), 13.33, '(270, 90)');
console.log(findTimeToBreak(90, 90), Infinity, '(90, 90)');
console.log(findTimeToBreak(245, 306), 26.27);
console.log(findTimeToBreak(165, 97), 23.84);

// best
/* 
const findTimeToBreak = (bA, bB) =>
  +(40 / 3 / Math.sin(Math.abs(bA - bB) * Math.PI / 360)).toFixed(2);
*/