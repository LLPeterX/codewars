/* 
7kyu - Perpendicular lines
https://www.codewars.com/kata/6391fe3f322221003db3bad6/train/javascript

Найти количество пересечений N перрпендикулярных линий на плоскости
*/

function maxBisectors(n) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += Math.ceil(i / 2);
  }
  return result;
}

console.log(maxBisectors(1), 0);
console.log(maxBisectors(2), 1);
console.log(maxBisectors(3), 2);
console.log(maxBisectors(4), 4);
console.log(maxBisectors(5), 6);
console.log(maxBisectors(6), 9);
console.log(maxBisectors(51), 650);

// best

/* 
function maxBisectors(n) {
  return Math.floor(n * n / 4);
}
*/

/* 
function maxBisectors(n) {
  if (n > 1) {
    return Math.ceil(n/2) * Math.floor(n/2);
  }
  return 0;
}
*/