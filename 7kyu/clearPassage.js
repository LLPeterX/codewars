/* 
7kyu - Clear Passage
https://www.codewars.com/kata/63a2b523e37cea002372e649

Given a scrambled path, return the number of rotations needed in horizontal direction 
to make a clear passage from top to bottom. 
There is always at least one configuration possible. 
Multiple solutions may be possible. 
Any valid solution passes this kata.

Input
rows: an array of strings, each representing a row that needs to be rotated in order to make a clear passage from top to bottom.
* 'x': a wall
* '.': a tile of path
Output
return an array of integers, specifying the amount of rotations required to make a clear passage 
when all rows have been rotated.
* zero: no rotations
* positive: number of rotations to the left
* negative: number of rotations to the right
*/

function rotate(rows) {
  // let res = [0], pos = rows[0].indexOf('.');
  // for (let i = 1; i < rows.length; i++) {
  //   res.push(rows[i].indexOf('.') - pos);
  // }
  // return res;
  return rows.map(row => row.indexOf('.') - rows[0].indexOf('.'));
  // return rows.map(row => row.indexOf('.'));
}

let a1 = ['xx.x', 'xxx.', 'xx.x', 'x.xx'];
console.log(rotate(a1), [0, 1, 0, -1]);
