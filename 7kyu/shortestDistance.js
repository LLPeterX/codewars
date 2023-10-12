/* 
7kyu - Bugs Life
https://www.codewars.com/kata/5b71af678adeae41df00008c/train/javascript

A bug lives in a world which is a cuboid and has to walk 
from one corner of the cuboid to the opposite corner.

Task
Define a function which takes 3 arguments: 
the length a , width b, and height c of the bug's "world", 
and finds the shortest distance needed to walk from start to finish. 
The dimensions will be positive numbers.

Note: The bug cannot fly and has to maintain contact 
with a surface at all times but can walk up walls.
*/

function shortestDistance(a, b, c) {
  // задача о пуке и мухе 
  [a, b, c] = [a, b, c].sort((x, y) => y - x);
  return Math.min(
    Math.hypot(a, b + c),
    Math.hypot(b, a + c),
    Math.hypot(c, a + b)
  );
}

console.log(shortestDistance(1, 2, 3), 4.242640687119285);
console.log(shortestDistance(1, 1, 1), 2.23606797749979);
console.log(shortestDistance(134, 191.5, 45.5), 262.47380821712477);

// best
/*
function shortestDistance(a, b, c) {
  const count = (x, y, z) => Math.sqrt( Math.pow(x, 2) + (y + z) ** 2 );
    return Math.min( count( a, b, c ), count( b, c, a ), count( c, a, b ) );
}
*/

//const shortestDistance = (...d) => Math.hypot(d.sort((a, b) => a < b)[0], d[1] + d[2]);

/* 
const shortestDistance = (...args) => {
  const [a, b, c] = args.sort((a, b) => a - b);
  
  return Math.hypot(c, a + b);
}
*/