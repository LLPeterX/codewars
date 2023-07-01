/* 
7kyu - Simple Fun #63: Shape Area
https://www.codewars.com/kata/5893e0c41a88085c330000a0

Below we will define what and n-interesting polygon is and your task is to find its area for a given n.

"интересный" полгино = 1 клетка.
"n-интересный" полигон получается добавлением клеток по бокам от n-1-го полигона

n=1:
 #
n=2:
 * 
*#*
 *

S(i) = S(i-1)+i*4

An n-interesting polygon is obtained by taking the n - 1-interesting polygon 
and appending 1-interesting polygons to its rim side by side. You can see the 1-, 2- and 3-interesting polygons in the picture below.
*/

function shapeArea(n) {
  let area = 1;
  for (let i = 1; i < n; i++) {
    area += i * 4;
  }
  return area;
}

console.log(shapeArea(2), 5)

console.log(shapeArea(3), 13)

console.log(shapeArea(1), 1)

console.log(shapeArea(5), 41)

// best
/* 
function shapeArea(n) {
  return n ** 2 + (n - 1) ** 2;
}
*/

/* 
function shapeArea(n) {
    return n <= 1 ? 1 : shapeArea(n - 1) + (n - 1) * 4
}
*/