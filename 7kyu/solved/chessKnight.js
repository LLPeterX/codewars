/* 
7kyu - Chess Fun #3: Chess Knight
https://www.codewars.com/kata/589433358420bf25950000b6/train/javascript
Дана позция коня (типа "a1").
Определить, сколько возможных ходов у него есть
*/

function chessKnight(cell) {
  let moves = [[-1,2], [1,2], [2,1], [2,-1], [1,-2], [-1,-2], [-2,1], [-2,-1]];
  let m = cell.match(/(\D+)(\d+)/);
  let x=" abcdefgh".indexOf(m[1]);
  let y = +m[2];
  for(let e of moves) {
    e[0]+=x;
    e[1]+=y;
  }
  //console.log(moves);
  return moves.filter(e => e[0]>0 && e[0]<9 && e[1]>0 && e[1]<9).length;
    
}

console.log(chessKnight("a1")); // 2
console.log(chessKnight("c2")); // 6
console.log(chessKnight("d4")); // 8
console.log(chessKnight("h1")); // 2
// best
/* 
const chessKnight = cell =>
  [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]].filter(val => /[a-h]/.test(String.fromCharCode(cell.charCodeAt() + val[0])) && /^[1-8]$/.test(+cell[1] + val[1])).length;
*/

/* 
function chessKnight(cell) {
  const [x, y] = ["abcdefgh".indexOf(cell[0]), +cell[1] - 1]
  return  [[2, 3, 4, 4, 4, 4, 3, 2],
           [3, 4, 6, 6, 6, 6, 4, 3],
           [4, 6, 8, 8, 8, 8, 6, 4],
           [4, 6, 8, 8, 8, 8, 6, 4],
           [4, 6, 8, 8, 8, 8, 6, 4],
           [4, 6, 8, 8, 8, 8, 6, 4],
           [3, 4, 6, 6, 6, 6, 4, 3],
           [2, 3, 4, 4, 4, 4, 3, 2]][x][y]
}
*/