/* 
6kyu - Rasterize a Triangle
https://www.codewars.com/kata/621ab012ed37430016df15c0/train/javascript

Create a rasterized binary image of a triangle.

Given
- (x1, y1), (x2, y2), and (x3, y3) - Integer coordinates of triangle vertices.
- n - Size of the output image.
Expected Output
 An n-by-n image of 1s and 0s.

 Details
- 1 <= n <= 100
- The origin of the coordinate system is the upper-left pixel with coordinates (0,0).
- The x coordinate increases to the right and the y coordinate increases downward.
- A pixel should be set to 1 only if it's coordinate is either inside the triangle or on it's boundary.
- Triangle coordinates may be outside the image bounds.
- No degenerate triangles will be provided.
*/

function drawTriangle([[x1, y1], [x2, y2], [x3, y3]], n) {
  let matrix = Array(n).fill().map(_ => Array(n).fill(0));
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (
        ((x1 - x) * (y2 - y1) - (x2 - x1) * (y1 - y)) * ((x2 - x) * (y3 - y2) - (x3 - x2) * (y2 - y)) >= 0 &&
        ((x1 - x) * (y2 - y1) - (x2 - x1) * (y1 - y)) * ((x3 - x) * (y1 - y3) - (x1 - x3) * (y3 - y)) >= 0 &&
        ((x2 - x) * (y3 - y2) - (x3 - x2) * (y2 - y)) * ((x3 - x) * (y1 - y3) - (x1 - x3) * (y3 - y)) >= 0) {
        matrix[y][x] = 1;
      }
    }
  }
  return matrix;
}

//console.log(drawTriangle([[2, 1], [0, 3], [5, 4]], 6));
//console.log(drawTriangle([[2, 1], [0, 3], [5, 4]], 3));
console.log(drawTriangle([[-2, -2], [6, -2], [2, 2]], 5));