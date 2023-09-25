/* 
6kyu - Crashing Boxes
https://www.codewars.com/kata/5a4a167ad8e1453a0b000050

*/

function crashingWeights(grid) {
  let crash;
  do {
    crash = false;
    for (let x = 0; x < grid[0].length; x++) {
      for (let y = 1; y < grid.length; y++) {
        if (grid[y - 1][x] > grid[y][x]) {
          grid[y][x] += grid[y - 1][x];
          grid[y - 1][x] = 0;
          crash = true;
        }
      }
    }
  } while (crash);
  return grid[grid.length - 1];
}

let b1 = [[1, 2, 3], [2, 3, 1], [3, 1, 2]];
console.log(crashingWeights(b1));

// best
/* 
function crashingWeights(grid) {
  return grid.reduce((s, v) => v.map((x, i) => s[i] > x ? s[i] + x : x), [])
}
*/