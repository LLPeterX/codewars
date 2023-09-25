/* 
6kyu - Simple Fun #84: Box Blur
https://www.codewars.com/kata/5895326bcc949f496b00003e/train/javascript

The algorithm works as follows: each pixel x in the resulting image 
has a value equal to the average value of the input image pixels' values 
from the 3 × 3 square with the center at x. 
All pixels at the edges are cropped.
*/

function boxBlur(image) {
  const matrix = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 0], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];
  let result = [];
  for (let i = 1; i < image.length - 1; i++) {
    let row = [];
    for (let j = 1; j < image[0].length - 1; j++) {
      // let av = 0;
      // for (let k = 0; k < matrix.length; k++) {
      //   av += image[i + matrix[k][0]][j + matrix[k][1]];
      // }
      //let av = matrix.reduce((sum, [x, y]) => sum + image[i + y][j + x], 0);
      row.push(Math.floor(matrix.reduce((sum, [x, y]) => sum + image[i + y][j + x], 0) / 9));
    }
    result.push(row);
  }
  return result;
}

var image = [
  [1, 1, 1],
  [1, 7, 1],
  [1, 1, 1]],
  expected = [[1]]
console.log(boxBlur(image), expected)

image = [
  [0, 18, 9],
  [27, 9, 0],
  [81, 63, 45]]
expected = [[28]]
console.log(boxBlur(image), expected)

image = [
  [36, 0, 18, 9],
  [27, 54, 9, 0],
  [81, 63, 72, 45]]
expected = [[40, 30]]
console.log(boxBlur(image), expected)

image = [
  [7, 4, 0, 1],
  [5, 6, 2, 2],
  [6, 10, 7, 8],
  [1, 4, 2, 0]]
expected = [
  [5, 4],
  [4, 4]]
console.log(boxBlur(image), expected)

image = [
  [36, 0, 18, 9, 9, 45, 27],
  [27, 0, 54, 9, 0, 63, 90],
  [81, 63, 72, 45, 18, 27, 0],
  [0, 0, 9, 81, 27, 18, 45],
  [45, 45, 27, 27, 90, 81, 72],
  [45, 18, 9, 0, 9, 18, 45],
  [27, 81, 36, 63, 63, 72, 81]]
expected = [
  [39, 30, 26, 25, 31],
  [34, 37, 35, 32, 32],
  [38, 41, 44, 46, 42],
  [22, 24, 31, 39, 45],
  [37, 34, 36, 47, 59]]
console.log(boxBlur(image), expected)

