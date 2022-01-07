/* 
8kyu - Points of Reflection
https://www.codewars.com/kata/57bfea4cb19505912900012c/train/javascript

"Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, 
at a given position relative to a mid-point, 
Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.

Given two points P and Q, output the symmetric point of point P about Q. 
Each argument is a two-element array of integers representing the point's X and Y coordinates. 
Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

Дан массив координат точек [P,Q]. 
Прочертить воображаемую линию P-Q и определить следующую точку, расположенную от Q на том же расстоянии, то и P
*/

function symmetricPoint(p, q) {
  let x = (2 * q[0] - p[0]);
  let y = (2 * q[1] - p[1]);
  //return [x, y];
  return p.map((e, i) => 2 * q[i] - e);


}

console.log(symmetricPoint([0, 0], [1, 1]), [2, 2]);
console.log(symmetricPoint([2, 6], [-2, -6]), [-6, -18]);
console.log(symmetricPoint([10, -10], [-10, 10]), [-30, 30]);
//console.log(symmetricPoint([1, -35], [-12, 1]), [-25, 37]);
//console.log(symmetricPoint([1000, 15], [-7, -214]), [-1014, -443]);
//console.log(symmetricPoint([0, 0], [0, 0]), [0, 0]);