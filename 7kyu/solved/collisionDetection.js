/* 
7kyu - Collision Detection
https://www.codewars.com/kata/599da159a30addffd00000af/train/javascript

Создайте функцию, чтобы определить, сталкиваются ли два круга. Вам будет дано положение обоих кругов в дополнение к их радиусам.

*/

function collision(x1, y1, radius1, x2, y2, radius2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2) - radius1 - radius2 < 0;
}

console.log(collision(1, 1, 1, 1.1, 1.1, 0.1), true, "Expected true.");
console.log(collision(-1, 1, 10, -10.1, 1.1, 1), true, "Expected true.");
console.log(collision(-5, 5, 5.0001, 5, -5, 5 * Math.sqrt(5)), true, "Expected true.");
console.log(collision(1, 1, 0.01, 1, 1.1, 0.01), false, "Expected false.");
console.log(collision(-1, 1, 6, -10.1, 1.1, 1), false, "Expected false.");
console.log(collision(-5, 5, 5.0001, 5, -5, 4 * Math.sqrt(5)), false, "Expected false.");
