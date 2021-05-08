/* 
6kyu - Chess Fun #1
https://www.codewars.com/kata/5894134c8afa3618c9000146/train/javascript

Определить - находятся ли две фигуры на полях одного цвета
*/

function chessBoardCellColor(cell1, cell2) {
  function color(cell) {
    let x = " ABCDEFGH".indexOf(cell[0]), y = cell[1]-1;
    return (x%2 + y%2)%2;
  }
  return color(cell1) == color(cell2);
}

//console.log(color('G5'));

console.log(chessBoardCellColor("A1","C3"),true);
console.log(chessBoardCellColor("A1","H3"),false);
console.log(chessBoardCellColor("A1","A2"),false);

//best
/* 
function chessBoardCellColor(cell1, cell2) {
  return squareColor(cell1) == squareColor(cell2);
}

function squareColor(name) {
  return name.charCodeAt(0) + name.charCodeAt(1) & 1;
}
*/

/* 
const chessBoardCellColor = (a, b, s = '0ABCDEFGH') => (s.indexOf(a[0]) + +a[1]) % 2 === (s.indexOf(b[0]) + +b[1]) % 2;
*/

/* 
function chessBoardCellColor(a, b) {
  let l=' ABCDEFGH';
  return !((+a[1]+ +b[1]+l.indexOf(a[0])+l.indexOf(b[0]))%2)
}
*/