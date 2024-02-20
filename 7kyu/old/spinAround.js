/* 
7kyu - Spin Around, Touch the Ground
https://www.codewars.com/kata/65127141a5de2b1dcb40927e/train/javascript

Given a list of directions to spin, "left" or "right", 
return an integer of how many full 360° rotations were made. 
Note that each word in the array counts as a 90° rotation in that direction.
*/

// function spinAround(turns) {
//   const r = { "left": -90, "right": 90 };
//   let x = turns.reduce((total, angle) => total + r[angle], 0);
//   return Math.floor(Math.abs(x) / 360);
// }

// FINAL:
function spinAround(turns) {
  return Math.abs(~~(turns.reduce((total, angle) => total + { "left": -90, "right": 90 }[angle], 0) / 360));
}

// my best!
