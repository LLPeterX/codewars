/* 
3kyu - Total area covered by rectangles
https://www.codewars.com/kata/55dcdd2c5a73bdddcb000044

Вычислить область, занимаемую объединением прямоугольников.
На входе массив rects. Каждый элемент -  [x0, y0, x1, y1] (целые)



см. алгоритм https://tryalgo.org/en/geometry/2016/06/25/union-of-rectangles/
*/

// решение из https://stepik.org/lesson/200443/step/2
/* 
class Segment {
  constructor(x0, x1, y, t) {
    this.x0 = x0;
    this.x1 = x1;
    this.y = y;
    this.type = t;
  }
}

function calculate(recs) {
  const xCoords = [];
  const segments = [];
  let area = 0;
  for (let [x0, y0, x1, y1] of recs) {
    xCoords.push(x0);
    xCoords.push(x1);
    segments.push(new Segment(x0, x1, y0, 1));
    segments.push(new Segment(x0, x1, y1, -1));
  }
  xCoords.sort((a, b) => a - b);
  segments.sort((a, b) => a.y - b.y);
  for (let i = 1; i < xCoords.length; i++) {
    let prevY = 0, count = 0;
    for (let j = 0; j < segments.length; j++) {
      if (segments[j].x1 <= xCoords[i - 1] || segments[j].x0 >= xCoords[i]) continue;
      if (count === 0) {
        prevY = segments[j].y;
      }
      count += segments[j].type;
      if (count === 0) {
        area += (segments[j].y - prevY) * (xCoords[i] - xCoords[i - 1]);
      }
    }
  }
  return area;
}
 */

function calculate(recs) {
  const xCoords = [];
  const segments = [];
  let area = 0;
  for (let [x0, y0, x1, y1] of recs) {
    xCoords.push(x0);
    xCoords.push(x1);
    segments.push({ x0, x1, y: y0, type: 1 });
    segments.push({ x0, x1, y: y1, type: -1 });
  }
  xCoords.sort((a, b) => a - b);
  segments.sort((a, b) => a.y - b.y);
  for (let i = 1; i < xCoords.length; i++) {
    let prevY = 0, count = 0;
    for (let j = 0; j < segments.length; j++) {
      if (segments[j].x1 <= xCoords[i - 1] || segments[j].x0 >= xCoords[i]) continue;
      if (count === 0) {
        prevY = segments[j].y;
      }
      count += segments[j].type;
      if (count === 0) {
        area += (segments[j].y - prevY) * (xCoords[i] - xCoords[i - 1]);
      }
    }
  }
  return area;
}

console.log(calculate([[3, 3, 8, 5], [6, 3, 8, 9], [11, 6, 14, 12]])); // 36

