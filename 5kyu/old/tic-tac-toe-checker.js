/* 
5ky - Tic-Tac-Toe Checker
https://www.codewars.com/kata/525caa5c1bf619d28c000335

We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
*/

function isSolved(board) {
  // check Horiz
  for (let row = 0; row < 3; row++) if (board[row].every((cell, _, b) => cell === b[0] && b[0])) return board[row][0];
  // check Vert
  if (board[0][0] && board[1][0] === board[0][0] && board[2][0] == board[0][0]) return board[0][0];
  if (board[0][1] && board[1][1] === board[0][1] && board[2][1] == board[0][1]) return board[0][1];
  if (board[0][2] && board[1][2] === board[0][2] && board[2][2] == board[0][2]) return board[0][2];
  // diags
  if (board[0][0] && board[1][1] === board[0][0] && board[2][2] == board[0][0]) return board[0][0];
  if (board[2][0] && board[1][1] === board[2][0] && board[0][2] == board[2][0]) return board[2][0];
  let z = board.reduce((s, row) => s + Number(row.includes(0)), 0);
  return z > 0 ? -1 : 0;
}

// console.log(isSolved([
//   [0, 1, 2],
//   [2, 0, 2],
//   [2, 1, 2]
// ]));
console.log(isSolved([
  [0, 0, 2],
  [0, 0, 0],
  [1, 0, 1]
])); // -1


// best

/* 
function isSolved(board) {
   board = board.join('-').replace(/,/g,'');
   if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
   if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
   if(/0/.test(board)) return -1;
   return 0;
}
*/

/* 
const isSolved = board =>
  (str => /^111|111$|...111...|1..1..1|1...1...1|..1.1.1../.test(str) ? 1 : /^222|222$|...222...|2..2..2|2...2...2|..2.2.2../.test(str) ? 2 : /0/.test(str) ? -1 : 0)
  (`${board}`.replace(/,/g, ``));
*/

/* 
isSolved=b=>(m=(b=b.map(e=>e.join("")).join(" ")).match(/(1|2)((\1\1)|(.{4}\1){2}|(.{3}\1){2})/))?+m[1]:/0/.test(b)?-1:0;
*/

/* 
function isSolved(board) {
  function eq(arr){
    if ((arr[0] == arr[1]) && (arr[1] == arr[2]) && (arr[0] == 1)){return 1}
    if ((arr[0] == arr[1]) && (arr[1] == arr[2]) && (arr[0] == 2)){return 2}
    if ((arr[3] == arr[4]) && (arr[4] == arr[5]) && (arr[3] == 1)){return 1}
    if ((arr[3] == arr[4]) && (arr[4] == arr[5]) && (arr[3] == 2)){return 2}
    if ((arr[6] == arr[7]) && (arr[7] == arr[8]) && (arr[6] == 1)){return 1}
    if ((arr[6] == arr[7]) && (arr[7] == arr[8]) && (arr[6] == 2)){return 2}
    if ((arr[0] == arr[4]) && (arr[4] == arr[8]) && (arr[0] == 1)){return 1}
    if ((arr[0] == arr[4]) && (arr[4] == arr[8]) && (arr[0] == 2)){return 2}
    if ((arr[2] == arr[4]) && (arr[4] == arr[6]) && (arr[2] == 1)){return 1}
    if ((arr[2] == arr[4]) && (arr[4] == arr[6]) && (arr[2] == 1)){return 2}
    return arr.includes(0) ? -1 : 0
  }
  let board_9 = []
  board_9.push(...board[0],...board[1],...board[2])
  return eq(board_9)
}
*/