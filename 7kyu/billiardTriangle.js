/* 
7kyu - Billiards triangle
https://www.codewars.com/kata/5bb3e299484fcd5dbb002912/train/javascript

Дано число шаров.
Сколько рядов можно из них построить треугольником?
*/

function pyramid(balls) {
  let D = balls * 8 + 1;
  let count = (Math.sqrt(D) - 1) / 2;
  return Math.floor(count);
}
console.log(pyramid(15)); // 5
console.log(pyramid(20)); // 5
console.log(pyramid(100)); // 13

//console.log((3*(3+1)/2));