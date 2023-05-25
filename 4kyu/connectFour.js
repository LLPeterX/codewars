/* 
4kyu - Connect Four
https://www.codewars.com/kata/56882731514ec3ec3d000009

descr: https://en.wikipedia.org/wiki/Connect_Four
The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

  piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]
*/


/*
function show(grid) {
  return grid.map(row => row.map(c => c[0]).join``).join("\n");
}
*/

function whoIsWinner(piecesPositionList) {
  const W = 7, H = 6;
  const grid = Array(H).fill().map(r => Array(W).fill('.'));
  let winner = null;

  function check(x, y, dx, dy) {
    if (winner !== null) return winner;
    let count = 0, color = grid[y][x];
    while (x >= 0 && y >= 0 && x < W && y < H) {
      if (grid[y][x] === color) count++; else count = 0;
      if (count === 4) return color;
      y += dy;
      x += dx;
    }
    return null;
  }


  for (let i = 0; i < piecesPositionList.length; i++) {
    let [pos, color] = piecesPositionList[i].split('_');
    let x = "ABCDEFG".indexOf(pos), y = H - 1;
    for (; y >= 0; y--) {
      if (grid[y][x] === '.') {
        grid[y][x] = color;
        break;
      }
    }
    for (let k = 0; k < H; k++) {
      for (let j = 0; j < W; j++) {
        if (grid[k][j] !== '.') {
          // winner = check(j, k, 1, 0); // right
          // winner = check(j, k, 0, 1); // down
          // winner = check(j, k, -1, 1); // down-left
          // winner = check(j, k, 1, 1); // down-right
          winner = check(j, k, 1, 0) || check(j, k, 0, 1) || check(j, k, -1, 1) || check(j, k, 1, 1);
          if (winner) return winner;
        }
      }
    }
  }
  return "Draw";
}

let a = [
  "C_Yellow",
  "E_Red",
  "G_Yellow",
  "B_Red",
  "D_Yellow",
  "B_Red",
  "B_Yellow",
  "G_Red",
  "C_Yellow",
  "C_Red",
  "D_Yellow",
  "F_Red",
  "E_Yellow",
  "A_Red",
  "A_Yellow",
  "G_Red",
  "A_Yellow",
  "F_Red",
  "F_Yellow",
  "D_Red",
  "B_Yellow",
  "E_Red",
  "D_Yellow",
  "A_Red",
  "G_Yellow",
  "D_Red",
  "D_Yellow",
  "C_Red"];
console.log("\n", whoIsWinner(a), 'Yellow');

let b = [
  'D_Red',
  'G_Yellow',
  'C_Red',
  'C_Yellow',
  'G_Red',
  'D_Yellow',
  'D_Red',
  'G_Yellow',
  'A_Red',
  'C_Yellow',
  'B_Red',
  'A_Yellow',
  'F_Red',
  'A_Yellow',
  'A_Red',
  'E_Yellow',
  'F_Red',
  'B_Yellow',
  'B_Red',
  'E_Yellow',
  'E_Red',
  'C_Yellow',
  'E_Red',
  'G_Yellow',
  'C_Red',
  'D_Yellow',
  'G_Red',
  'D_Yellow',
  'E_Red',
  'A_Yellow',
  'F_Red',
  'E_Yellow'];
console.log("\n", whoIsWinner(b), 'Red');