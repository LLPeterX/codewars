/* 
5kyu - Conway's Game of Life
https://www.codewars.com/kata/525fbff0594da0665c0003a3/train/javascript

* Any live cell with fewer than two live neighbours dies, as if caused by under-population.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies, as if by overcrowding.
* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

function nextGen(cells) {
  const HEIGHT = cells.length;
  const WIDTH = cells[0].length;
  const result = cells.map(row => row.slice());
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      let neighbours = 0;
      for (let [dx, dy] of [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]) {
        let x1 = x + dx, y1 = y + dy;
        if (x1 >= 0 && y1 >= 0 && x1 < WIDTH && y1 < HEIGHT && cells[y1][x1]) neighbours++;
      }
      if (cells[y][x]) {
        if (neighbours < 2 || neighbours > 3) result[y][x] = 0;
      } else if (neighbours === 3) result[y][x] = 1;
    }
  }
  return result;
}

console.log(nextGen([
  [1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]), [
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]);

// best

/* 
function nextGen(cells) {
  var get = function (i, j) { return (cells[i] && cells[i][j]) | 0 };
  
  cells = cells.map(function (row, i) {
    return row.map(function (alive, j) {
      var neighbors =
        get(i-1, j-1) + get(i-1, j) + get(i-1, j+1) +
        get(i  , j-1)               + get(i  , j+1) +
        get(i+1, j-1) + get(i+1, j) + get(i+1, j+1);
        
      return (neighbors === 3 || (neighbors === 2 && alive)) | 0;
    });
  });
  
  return cells;
}
*/
