/* 
6kyu - Simple Fun #58: Volleyball Positions
https://www.codewars.com/kata/5889f08eb71a7dcee600006c
*/

// херня какая-то...
function volleyballPositions(formation, k) {
  let players = [];
  for (let [x, y] of [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [2, 3], [1, 3], [0, 3], [0, 2], [0, 1]]) {
    if (formation[y][x] !== 'empty') {
      players.push({ name: formation[y][x], row: y, col: x });
    } else {
      if (x == 1 && y == 3 && formation[y - 1][x] !== 'empty') {
        players.push({ name: formation[y - 1][x], row: y - 1, col: x });
      } else if (x == 1 && y === 0 && formation[y + 1][x] !== 'empty') {
        players.push({ name: formation[y + 1][x], row: y + 1, col: x });
      }
    }
  }
  let playerNames = players.map(e => e.name);
  for (let i = 0; i < k % players.length; i++) playerNames.push(playerNames.shift());
  for (let i = 0; i < players.length; i++) formation[players[i].row][players[i].col] = playerNames[i];
  return formation;
}

console.log(volleyballPositions([
  ["empty", "Player5", "empty"],
  ["Player4", "empty", "Player2"],
  ["empty", "Player3", "empty"],
  ["Player6", "empty", "Player1"]], 2),
  [
    ["empty", "Player1", "empty"],
    ["Player2", "empty", "Player3"],
    ["empty", "Player4", "empty"],
    ["Player5", "empty", "Player6"]]);

console.log(volleyballPositions([["empty", "Alice", "empty"],
["Bob", "empty", "Charlie"],
["empty", "Dave", "empty"],
["Eve", "empty", "Frank"]], 6), [
  ["empty", "Alice", "empty"],
  ["Bob", "empty", "Charlie"],
  ["empty", "Dave", "empty"],
  ["Eve", "empty", "Frank"]
]);

console.log(volleyballPositions([["empty", "player 3", "empty"],
["player 8", "empty", "player"],
["empty", "4", "empty"],
["5", "empty", "42"]], 1000000000),
  [["empty", "5", "empty"],
  ["4", "empty", "player 8"],
  ["empty", "player", "empty"],
  ["42", "empty", "player 3"]]);

// best

/* 
const volleyballPositions = (formation, k) =>
  k % 6 > 0 ? ([formation[2][1], formation[3][0], formation[1][0], formation[0][1], formation[1][2], formation[3][2]] =
    [formation[3][0], formation[1][0], formation[0][1], formation[1][2], formation[3][2], formation[2][1]], volleyballPositions(formation, --k)) : formation;
*/

/* 
const volleyballPositions = (formation, k) => {
    for (let i = 0; i < k % 6; ++i)
        [
            formation[3][0],
            formation[1][0],
            formation[0][1],
            formation[1][2],
            formation[3][2],
            formation[2][1]
        ] =
            [
                formation[1][0],
                formation[0][1],
                formation[1][2],
                formation[3][2],
                formation[2][1],
                formation[3][0]
            ];
    return formation;
}
*/