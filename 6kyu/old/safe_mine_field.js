/* 
6kyu - Controlled Detonation Safety
https://www.codewars.com/kata/63838c67bffec2000e951130

Дан массив , в котром M-мины, T-деревья, .-свободное пространство.
Взрыв каждой мины M распротсрраняется по бокам и по вертикали, но тормозится на T

*/

function safe_mine_field(mine_field) {
  for (let y = 0; y < mine_field.length; y++) {
    for (let x = 0; x < mine_field[0].length; x++) {
      if (mine_field[y][x] === 'M') {
        // up
        for (let k = y - 1; k >= 0 && (mine_field[k][x] === '.' || mine_field[k][x] === 'C'); k--) mine_field[k][x] = 'C';
        // down
        for (let k = y + 1; k < mine_field.length && (mine_field[k][x] === '.' || mine_field[k][x] === 'C'); k++) mine_field[k][x] = 'C';
        // left
        for (let k = x - 1; k >= 0 && (mine_field[y][k] === '.' || mine_field[y][k] === 'C'); k--) mine_field[y][k] = 'C';
        // right
        for (let k = x + 1; k < mine_field[0].length && (mine_field[y][k] === '.' || mine_field[y][k] === 'C'); k++) mine_field[y][k] = 'C';
      }
    }
  }
  const result = [];
  for (let y = 0; y < mine_field.length; y++) {
    for (let x = 0; x < mine_field[0].length; x++) {
      if (mine_field[y][x] === '.') result.push([y, x]);
    }
  }
  return result;
}


var field = [
  ['.', '.', '.', '.', 'M'],
  ['.', 'M', '.', 'T', '.'],
  ['.', '.', 'T', '.', '.'],
  ['.', '.', 'M', '.', 'T'],
  ['.', '.', '.', '.', '.']
];

console.log(safe_mine_field(field), [[2, 0], [2, 3], [4, 0], [4, 3], [4, 4]]);