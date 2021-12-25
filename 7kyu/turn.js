/* 
7kyu - Turn the Mars rover to take pictures
https://www.codewars.com/kata/588e68aed4cff457d300002e/train/javascript

In order to take pictures of all directions it needs an algorithm to help it turn to face the correct position.

Mars rover can face 4 different directions, that would be N, S, E, W. 
Every time it needs to turn it will call a command turn passing the current position it is facing and the position it wants to face.

For example:

if it asks turn N E the expected result would be right
if it asks turn N W the expected result would be left
Mars rover can only make one move at a time and it will only request positions that require a single move.

Can you write an algorithm that tells if it should move left or right?
*/

function turn(current, target) {
  return {
    "NE": "right",
    "NW": "left",
    "SE": "left",
    "SW": "right",
    "EN": "left",
    "ES": "right",
    "WN": "right",
    "WS": "left"
  }[current + target];
}

console.log(turn('N', 'E'), 'right');
console.log(turn('S', 'W'), 'right');

//best

/* 
function turn(current, target) {
  return "NESWN".includes(current+target) ? 'right' : 'left';
}
*/