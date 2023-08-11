/* 
7kyu - Cartesian neighbors
https://www.codewars.com/kata/58989a079c70093f3e00008d/train/javascript

На декартовой плоскости задана точка [x,y].
Вернуть все 8 соседей
*/

function cartesianNeighbor(x, y) {
  return [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]].map(([dx, dy]) => [x + dx, y + dy]);
}

// best

/* 
function cartesianNeighbor(x, y){
    return [[x-1, y-1], [x-1, y], [x-1, y+1], [x, y-1], [x, y+1], [x+1, y-1], [x+1,y], [x+1, y+1]];
}
*/