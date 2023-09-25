/* 
6kyu - Snakes & Ladders
https://www.codewars.com/kata/5821cd4770ca285b1f0001d5

[0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]  
 0  1  2  3  4  5  6  7   9  9  10
*/

function snakesAndLadders(board, dice) {
  let k = 0;
  for (let roll of dice) {
    k += roll;
    if (k === board.length - 1) break;
    else if (k < board.length) {
      if (k + board[k] >= 0 && k + board[k] < board.length) {
        k += board[k];
      }
    } else k -= roll;
  }
  return k;
}

console.log(snakesAndLadders([0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0], [2, 1, 5, 1, 5, 4]), 10);

// best

/* 
var snakesAndLadders = function (board, dice) {
    let square = 0;
    for (let die of dice) {
        if (square + die >= board.length) {
            continue;
        }
        square += die;
        square += board[square];
    }
    return square;
}
*/

/* 
const snakesAndLadders = (board, dice) => 
  dice.reduce((pos,roll) => pos + roll >= board.length ? pos : pos + roll + board[pos+roll], 0);
*/