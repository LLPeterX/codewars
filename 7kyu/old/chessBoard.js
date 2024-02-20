/* 
7kyu - draw me a chessboard
https://www.codewars.com/kata/56242b89689c35449b000059/train/javascript

Нарисовать шахматную доску rows x columns. Ячейки 'O' и 'X', начинается с 'O'.
Веренуть двумерный массив
*/

function chessBoard(rows, columns) {
  return [...Array(rows)].map((_, i) => Array(columns).fill().map((_, j) => (i + j) % 2 ? 'X' : 'O'));
}

console.log(chessBoard(6, 4));
//console.log(chessBoard(3, 7));

