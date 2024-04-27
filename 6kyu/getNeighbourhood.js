/* 
6kyu - 2D Cellular Neighbourhood - Part 2
https://www.codewars.com/kata/5b315b8ca454c8c5b40003a2/train/javascript

Task
Given a neighbourhood type ("moore" or "von_neumann"), a 2D matrix (a list of lists), a pair of coordinates and the distance, return the list of neighbours of the given cell.

Order of the indices: The first index should be applied for the outer/first matrix layer. The last index for the most inner/last layer. coordinates = (m, n) should be applied like mat[m][n]

Note: you should return an empty array if any of these conditions are true:

Matrix is empty
Coordinates are outside the matrix
Distance is equal to 0
*/

function getNeighbourhood(type, matrix, coordinates, distance = 1) {
  if (!matrix || !matrix.length || !matrix[0].length || distance == 0)
    return [];
  let [y0, x0] = coordinates;
  if (x0 < 0 || y0 < 0 || x0 >= matrix[0].length || y0 >= matrix.length)
    return [];

  const check = (x, y) =>
    x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length;

  let result = [];
  if (type == "moore") {
    for (let d = 1; d <= distance; d++) {
      let x1 = x0 - d,
        y1 = y0 - d,
        w = 1 + d * 2;
      // top
      for (let n = 0, x = x1; n < w; n++, x++)
        if (check(x, y1)) result.push(matrix[y1][x]);
      //sides
      for (let n = 0, y = y1 + 1; n < w - 2; n++, y++) {
        if (check(x1, y)) result.push(matrix[y][x1]);
        if (check(x1 + w - 1, y)) result.push(matrix[y][x1 + w - 1]);
      }
      // bottom
      for (let n = 0, x = x1; n < w; n++, x++)
        if (check(x, y1 + w - 1)) result.push(matrix[y1 + w - 1][x]);
    }
  } else {
    // von_newmann
    for (let y = y0 - distance, n = 0; y <= y0 + distance; y++, n++) {
      let dx = n <= distance ? n : distance - (n % distance || distance);
      for (let x = x0 - dx; x <= x0 + dx; x++) {
        if (x === x0 && y === y0) continue;
        if (check(x, y)) result.push(matrix[y][x]);
      }
    }
  }
  return result;
}

// best

/* 
const dist = {
  moore:       (m,n) => (y,x) => Math.max( Math.abs(y-m), Math.abs(x-n) ) ,
  von_neumann: (m,n) => (y,x) => Math.abs(y-m) + Math.abs(x-n) } ;

function getNeighbourhood(type, xss, [i,j], distance = 1) {
  return i in xss && j in xss[i] ?
    xss.flatMap( (xs,m) => xs.filter( (x,n) => dist[type](m,n)(i,j) <= distance && (i-m || j-n) ) ) :
    [] ;
}
*/
