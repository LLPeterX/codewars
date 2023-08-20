/* 
5kyu - Battle ships: Sunk damaged or not touched?
https://www.codewars.com/kata/58d06bfbc43d20767e000074/train/javascript

Your task in the kata is to determine how many boats are sunk damaged 
and untouched from a set amount of attacks. 
You will need to create a function that takes two arguments, the playing board and the attacks.

Boats are placed either horizontally, vertically or diagonally on the board.
0 represents a space not occupied by a boat. 
Digits 1-3 represent boats which vary in length 1-4 spaces long. 
There will always be at least 1 boat up to a maximum of 3 in any one game. 
Boat sizes and board dimentions will vary from game to game.

Attacks
Attacks are calculated from the bottom left, 
first the X coordinate then the Y. 
There will be at least one attack per game, and the array will not contain duplicates.

Scoring
* 1 point for every whole boat sank.
* 0.5 points for each boat hit at least once (not including boats that are sunk).
* -1 point for each whole boat that was not hit at least once.

*/

/* 
Агортим:
1) При пападаении в корабль меняем номер его ячейки на отрицательный.
т.о. попадания <0, целые части >0.
2) По завершении атак проходимся по всему игровому полю.
   Номер корабля = abs(n) (n - номер в игровом поле по [y][x]). 
   Сравниваем число попаданий с длиной корабля (кол-вом abs(n))
*/

function damagedOrSunk(board, attacks) {
  for (let [ax, ay] of attacks) {
    let x = ax - 1, y = board.length - ay;
    if (board[y][x] > 0) board[y][x] = -board[y][x];
  }
  let ships = {};
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      let s = board[y][x];
      if (s !== 0) {
        let index = Math.abs(s);
        if (!ships[index]) {
          ships[index] = { hits: 0, len: 0 };
        }
        ships[index].len++;
        if (s < 0) {
          ships[index].hits++;
        }
      }
    }
  }
  //console.log('ships:', ships);
  // for (let s of ships) {
  //   if (s.hits === s.len) {
  //     result.sunk++;
  //     result.points += 1;
  //   } else if (s.hits === 0) {
  //     result.notTouched++;
  //     result.points -= 1;
  //   } else {
  //     result.damaged++;
  //     result.points += 0.5;
  //   }
  // }
  const result = { sunk: 0, damaged: 0, notTouched: 0, points: 0 };
  Object.values(ships).forEach(s => {
    if (s.hits === s.len) {
      result.sunk++;
      result.points += 1;
    } else if (s.hits === 0) {
      result.notTouched++;
      result.points -= 1;
    } else {
      result.damaged++;
      result.points += 0.5;
    }

  });
  return result;
}

var board = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0]
];

var attacks = [[3, 1], [3, 2], [3, 3]];
var result = damagedOrSunk(board, attacks);

console.log(result.sunk, 1, "There should be 1 ship sunk");
console.log(result.damaged, 0, "There should be 0 ship damaged");
console.log(result.notTouched, 0, "There should be 0 ship notTouched");
console.log(result.points, 1, "there should be a 1 point score");

console.log("\n--- second attempt--");
var board = [
  [3, 0, 1],
  [3, 0, 1],
  [0, 2, 1],
  [0, 2, 0]];
var attacks = [[2, 1], [2, 2], [3, 2], [3, 3]]
var result = damagedOrSunk(board, attacks)

console.log(result.sunk, 1, "There should be 1 ship sunk");
console.log(result.damaged, 1, "There should be 1 ship damaged");
console.log(result.notTouched, 1, "There should be 1 ship notTouched");
console.log(result.points, 0.5, "there should be a 0.5 point score");

