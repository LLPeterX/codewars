/* 
7kyu - Reflect Point Over Line
https://www.codewars.com/kata/64127b25114de109258fb6fe

Найти зеркальное отражение точки относительно прямой

Arguments:
- точка: [x,y]
- линия: [m,b] так что y=mx+b

*/

function reflect([x, y], [m, b]) {
  if (m === 0) return [x, b * 2 - y];
  let ms = -1 / m;
  let t = y - ms * x;
  let lx = ms - m === 0 ? 0 : (b - t) / (ms - m);
  let ly = m * lx + b;
  return [2 * lx - x, 2 * ly - y];
}

console.log(reflect([2, 3], [1, 0]), [3, 2]);
console.log(reflect([1, 2], [3, 4]), [-2, 3]);
console.log(reflect([-2, -3], [-1, 0]), [3, 2]);
console.log(reflect([44, 123123], [44, 334]), [5534.482188951988, 122998.21631388746]);
console.log(reflect([0, 0], [0, 0]), [0, 0]);
console.log(reflect([0, 0], [0, 1]), [0, 2]);
console.log(reflect([1, 1], [0, 440]), [1, 879]);

// best
/* 
function reflect([x, y], [m, b]) {
  const a = 2 * (y - b - x * m) / (m * m + 1);
  return [x + m * a, y - a];
}
*/

/* 
function rotate([x, y], angle) {
  return [
    x * Math.cos(angle) - y * Math.sin(angle), 
    y * Math.cos(angle) + x * Math.sin(angle)
  ];
}
function reflect([x, y], [m, b]) {
  let angle = Math.atan2(m, 1);
  [x, y] = rotate([x, y - b], -angle);
  [x, y] = rotate([x, -y], angle);
  return [x, y + b];
}
*/

