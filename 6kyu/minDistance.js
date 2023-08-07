/* 
6kyu - Min Factor Distance
https://www.codewars.com/kata/59b8614a5227dd64dc000008/train/javascript

Найти мин.расстояние между делителями числа
*/

function minDistance(n) {
  let min = n, prevFact = 1;
  for (let i = 2; i <= n / 2; i++) {
    //for (let i = 2; i < Math.ceil(n / 2); i++) {
    if (n % i == 0) {
      min = Math.min(min, i - prevFact);
      prevFact = i;
    }
  }
  //return min;
  return Math.min(min, n - 1);
}

console.log(minDistance(3), 2);
console.log(minDistance(8), 1);
console.log(minDistance(25), 4);
console.log(minDistance(13013), 2);
console.log(minDistance(218683), 198);