/* 
6kyu - Find an area
https://www.codewars.com/kata/59b166f0a35510270800018d/train/javascript

You have an array or list of coordinates or points 
(e.g. [ [1, 1], [3, 4], ... , [5, 2] ]), 
and your task is to find the area under the graph 
defined by these points (limited by x of the first and last coordinates 
as left and right borders, y = 0 as the bottom border and the graph as top border).

Notes:

* x can be negative;
* x of the next pair of coordinates will always be greater then previous one;
* y >= 0;
* the array will contain more than 2 coordinates.
*/

// var Point = function (x, y) {
//   this.X = x;
//   this.Y = y;
// }
// ----------- main ----------------

function findArea(points) {
  let area = 0; //sum of trapezoids
  for (let i = 1; i < points.length; i++) {
    area += (points[i].Y + points[i - 1].Y) * (points[i].X - points[i - 1].X) / 2;
  }
  return area;
}

console.log(findArea([new Point(0, 0), new Point(1, 4), new Point(3, 2)]), 8);
console.log(findArea([new Point(-3, 0), new Point(-1, 4), new Point(3, 2)]), 16);
console.log(findArea([new Point(-3, 2), new Point(-1, 0), new Point(3, 2)]), 6);
console.log(findArea([new Point(-3, 2), new Point(3, 5)]), 21);
console.log(findArea([new Point(-3, 2), new Point(-1, 5), new Point(0, 3), new Point(3, 7), new Point(4, 6)]), 32.5);
