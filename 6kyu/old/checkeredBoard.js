/* 
6kyu - Checkered Board
https://www.codewars.com/kata/5650f1a6075b3284120000c0/train/javascript

Write a function which takes one parameter representing the dimensions of a checkered board. 
The board will always be square, so 5 means you will need a 5x5 board.

The dark squares will be represented by a unicode white square, while the light squares 
will be represented by a unicode black square (the opposite colours ensure the board 
doesn't look reversed on code wars' dark background). 
It should return a string of the board with a space in between each square and taking into account new lines.

An even number should return a board that begins with a dark square. 
An odd number should return a board that begins with a light square.
*/

/*
function checkeredBoard(dimension) {
  let squares = dimension % 2 ? ["\u25A0", "\u25A1"] : ["\u25A1", "\u25A0"];
  let res = "", k = 0;
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      res += squares[k % 2];
      if (j < dimension - 1) res += ' ';
      k++;
    }
    k += 1 - dimension % 2;
    if (i < dimension - 1) res += "\n";
  }
  return res;
}

*/

function checkeredBoard(dimension) {
  let squares = dimension % 2 ? ["\u25A0", "\u25A1"] : ["\u25A1", "\u25A0"];
  let res = "", k = 0;
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      res += squares[k % 2] + ' ';
      k++;
    }
    k += 1 - dimension % 2;
    res = res.trimEnd() + "\n";
  }
  return res.trimEnd();
}
console.log(checkeredBoard(4));
//  expected '□ ■ □ ■\n□ ■ □ ■\n\n□ ■ □ ■\n\n□ ■ □ ■' 
//  to equal '□ ■ □ ■\n■ □ ■ □\n□ ■ □ ■\n■ □ ■ □'
console.log(checkeredBoard(3));