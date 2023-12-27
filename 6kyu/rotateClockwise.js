/* 
6kyu - Matrix Rotation
https://www.codewars.com/kata/593e978a3bb47a8308000b8f/train/javascript

Given a matrix represented as a list of string, such as

###.....
..###...
....###.
.....###
.....###
....###.
..###...
###.....
write a function

rotateClockwise(matrix)

that return its 90° clockwise rotation, for our example:

#......#
#......#
##....##
.#....#.
.##..##.
..####..
..####..
...##...
*/

function rotateClockwise(matrix) {
  if (!matrix.length) return [];
  let m = matrix.map(word => [...word]);
  return m[0].map((_, i) => m.map(r => r[i]).reverse().join``);
}

console.log(rotateClockwise([]), []);
console.log(rotateClockwise(["abc"]), ["a", "b", "c"]);
console.log(rotateClockwise(["a", "b", "c"]), ["cba"]);
console.log(rotateClockwise(["cba"]), ["c", "b", "a"]);
console.log(rotateClockwise(["c", "b", "a"]), ["abc"]);
console.log(rotateClockwise(["abc", "def"]), ["da", "eb", "fc"]);
console.log(rotateClockwise(['']), []);
console.log(rotateClockwise(['', '', '']), []);