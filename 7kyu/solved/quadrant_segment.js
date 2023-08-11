/* 
7kyu - Quadrants 2: Segments
https://www.codewars.com/kata/643ea1adef815316e5389d17/train/javascript

Your task is to check whether a segment is completely in one quadrant 
or it crosses more. 
Return true if the segment lies in two or more quadrants. 
If the segment lies within only one quadrant, return false.

There are two parameters: A (coord) and B (coord), the endpoints defining the segment AB.

No coordinate will be zero; expect that all X and Y are positive or negative.

There is a class named coord/Coord (see in code). It has the following members:

(constructor): Constructs the coordinate
x (number): The X coordinate
y (number): The Y coordinate
x (number): The X coordinate
y (number): The Y coordinate
*/

class Coord {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function quadrant_segment(A, B) {
  // let a1 = (A.x < 0 && B.x < 0 && A.y > 0 && B.y > 0);
  // let a2 = (A.x > 0 && B.x > 0 && A.y > 0 && B.y > 0);
  // let a3 = (A.x > 0 && B.x > 0 && A.y < 0 && B.y < 0);
  // let a4 = (A.x < 0 && B.x < 0 && A.y < 0 && B.y < 0);
  // console.log(`A=(${A.x},${A.y}) B=(${B.x},${B.y})`, a1, a2, a3, a4);

  return !((A.x < 0 && B.x < 0 && A.y > 0 && B.y > 0) ||
    (A.x > 0 && B.x > 0 && A.y > 0 && B.y > 0) ||
    (A.x > 0 && B.x > 0 && A.y < 0 && B.y < 0) ||
    (A.x < 0 && B.x < 0 && A.y < 0 && B.y < 0));
}

console.log(quadrant_segment(new Coord(1, 2), new Coord(3, 4)), false);
console.log(quadrant_segment(new Coord(9, 3), new Coord(-1, 6)), true);
console.log(quadrant_segment(new Coord(-1, 6), new Coord(-9, 1)), false);

// best
/* 
function quadrant(x, y) {
  return y>0 ? (x>0 ? 1:2) : (x>0 ? 4:3);
}

function quadrant_segment(A, B) {
  return quadrant(A.x, A.y) != quadrant(B.x, B.y);
}

*/


/* 
function quadrant_segment(A, B) {
  return (A.x>0)*2+(A.y>0) != (B.x>0)*2+(B.y>0);
}
*/

/* 
function quadrant_segment(A, B) {
  // Poveli!
  return !(Math.sign(A.x) == Math.sign(B.x) && Math.sign(A.y) == Math.sign(B.y));
}
*/