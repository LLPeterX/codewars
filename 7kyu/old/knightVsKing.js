/* 
7kyu - Knight vs King
https://www.codewars.com/kata/564e1d90c41a8423230000bc/train/javascript

На шахматной доске стоят Конь и Король.
Кто кого бьет?
*/

function knightVsKing(knightPosition, kingPosition) {
  const getPos = ([col, row]) => [col - 1, "ABCDEFGH".indexOf(row)];

  const canCap = ([fx, fy], moves, [opX, opY]) => {
    for (let [x, y] of moves) {
      if (fx + x >= 0 && fx + x < 8 && fy + y >= 0 && fy + y < 8 && fx + x === opX && fy + y === opY) return true;
    }
    return false;
  }

  const knightMoves = [[-1, -2], [1, -2], [-2, -1], [2, -1], [-2, 1], [2, 1], [-1, 2], [1, 2]];
  const kingMoves = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
  const posKnight = getPos(knightPosition);
  const posKing = getPos(kingPosition);
  const knightWin = canCap(posKnight, knightMoves, posKing);
  return (knightWin === canCap(posKing, kingMoves, posKnight)) ? "None" : knightWin ? "Knight" : "King";
}

console.log(knightVsKing([4, "C"], [6, "D"]), "Knight");
console.log(knightVsKing([7, "B"], [6, "C"]), "King");
console.log(knightVsKing([2, "F"], [6, "B"]), "None");

// best

/* 
function knightVsKing(knightPosition, kingPosition) {
  var diffX = Math.abs(knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt());
  var diffY = Math.abs(knightPosition[0] - kingPosition[0]);
  
  if (diffX <= 1 && diffY <=1) {
    return 'King'
  } else if (diffX == 1 && diffY == 2 || diffX == 2 && diffY == 1) {
    return 'Knight'
  } 
  return 'None';
}
*/