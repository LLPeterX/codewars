/* 
6kyu - Check by Queen
https://www.codewars.com/kata/5a1cae0832b8b99e2900000c/train/javascript

*/

function check(board) {
  let queenMoves = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'q') {
        for (let [dy, dx] of queenMoves) {
          let y = row, x = col;
          while (x >= 0 && y >= 0 && x < board[0].length && y < board.length) {
            if (board[y][x] === 'k') return true;
            x += dx;
            y += dy;
          }
        }
        return false;
      }
    }
  }
}



// best
/* 
function check(board) {
   var figures = {};
   board.map((a,y)=>a.map((b,x)=>b=='*'||(figures[b]=[y,x])));
   var deltaY = figures['k'][0] - figures['q'][0];
   var deltaX = figures['k'][1] - figures['q'][1];
   return deltaY == 0 || deltaX == 0 || Math.abs(deltaY) == Math.abs(deltaX);
}
*/

/* 
function check(board) {
  let qRow = board.findIndex(x => x.includes('q'))
  let qCol = board[qRow].indexOf('q')
  return board.some(
    (row, r) => row.some(
      (cell, c) => cell == 'k' && (r == qRow || c == qCol || r + c == qRow + qCol || r - c == qRow - qCol)
    )
  )
}
*/