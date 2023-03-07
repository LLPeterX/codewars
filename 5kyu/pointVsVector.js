/* 
5kyu - [Geometry A-1] Locate point - to the right, to the left or on the vector?
https://www.codewars.com/kata/554c8a93e466e794fe000001/train/javascript

Даны:
1) точка (x,y) 
2) вектор [[x1, y1], [x2, y2]] - движение от первой точки к последней

Опредеделить, с какой  стороны вектора находится точка, если смотреть с начальной точки вектора в его конец.
-1 слева, 1-справа, 0-на векторе
*/

function pointVsVector([px, py], [[vx1, vy1], [vx2, vy2]]) {
  let s = (vy2 - vy1) * (px - vx1) - (vx2 - vx1) * (py - vy1);
  return Math.sign(s);
}


const vector = [[0, 0], [1, 1]];
console.log(pointVsVector([0, 1], vector), -1);
console.log(pointVsVector([2, 2], vector), 0);
console.log(pointVsVector([2, 0], vector), 1);
const vector2 = [[1, 1], [-1, -1]];
console.log(pointVsVector([2, 2], vector2), 0);
console.log(pointVsVector([-2, -2], vector2), 0);
console.log(pointVsVector([2, 1], vector2), -1);

// fail
console.log(pointVsVector([562, 537], [[-753, 430], [-625, -43]]), -1);
console.log(pointVsVector([-598040, 157572], [[184, -828], [-949, -528]]), 0);

