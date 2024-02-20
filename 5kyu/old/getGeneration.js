/* 
5kyu - Conways game of life on a toroidal array
https://www.codewars.com/kata/57b988048f5813799600004f/train/javascript

Conways game of life (https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) 
is usually implemented without considering neigbouring cells 
that would be outside of the arrays range, but another way to do it 
is by considering the left and right edges of the array to be stitched together, 
and the top and bottom edges also, yielding a toroidal array and thus all cells get 8 neighbours.

Implement the function get_generation(cells, n) which takes a 2d-array cells 
an returns generation 'n' of game of life with the initial 'cells' 
and which considers the array as a toroidal array.

you can use the function print2dArr(list) to print out your array in a more readable format.

Example:
The following pattern would be considered Still life 
(a pattern which does not change after a generation) 
on a toroidal array because each live element have exactly 3 neighbours at the toroids stiched edges.

[   1,   0,   0,   1]
[   0,   0,   0,   0]
[   0,   0,   0,   0]
[   1,   0,   0,   1]
*/

function getGeneration(cells, generations) {
  const HEIGHT = cells.length;
  const WIDTH = cells[0].length;

  function countNbh(y, x) {
    let count = 0;
    for (let [dx, dy] of [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]) {
      let x1 = x + dx, y1 = y + dy;
      if (x1 < 0) x1 = WIDTH - 1;
      if (y1 < 0) y1 = HEIGHT - 1;
      if (x1 >= WIDTH) x1 = 0;
      if (y1 >= HEIGHT) y1 = 0;
      if (cells[y1][x1]) count++;
    }
    return count;
  }

  while (generations) {
    let nextCells = JSON.parse(JSON.stringify(cells));
    for (let y = 0; y < HEIGHT; y++) {
      for (let x = 0; x < WIDTH; x++) {
        if (cells[y][x] == 0 && countNbh(y, x) === 3) nextCells[y][x] = 1;
        else if (cells[y][x] && (countNbh(y, x) == 2 || countNbh(y, x) == 3)) nextCells[y][x] = 1;
        else nextCells[y][x] = 0;
      }
    }
    cells = JSON.parse(JSON.stringify(nextCells));
    generations--;
  }
  return cells;
}

console.log(getGeneration([
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0]
], 12), [
  [0, 1, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0]
]);

// best

/*
const getGeneration = (cells, generations) => {
  const [vlen, hlen] = [cells.length, cells[0].length];

  const countIn = grid => (x, y) => {
    let hindex, vindex, curr, total = 0;
    for (let h = -1; h < 2; h++) {
      for (let v = -1; v < 2; v++) {
        [vindex, hindex] = [(y + v) % vlen, (x + h) % hlen];
        curr = grid.slice(vindex)[0].slice(hindex)[0];
        (v || h) && (total += curr);
      }
    }
    return total;
  };

  const nextGen = (cells) => {
    let count;
    return cells.map((row, i) =>
      row.map((alive, j) => {
        count = countIn(cells)(j, i);
        return (count === 3 || (count === 2 && alive)) | 0;
      })
    );
  }

  return generations ?
    getGeneration(nextGen(cells), generations - 1)
    : cells;
}
Best Practices1Clever1
 1ForkCompare with your solutionLink

*/

// cool

/* 
function get_neighbour_lives(i, j, cells) {
    return [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]].reduce((s, [dx, dy]) =>
        s += cells[(i + dx + cells.length) % cells.length][(j + dy + cells[0].length) % cells[0].length], 0)
}
function getGeneration(cells, generations) {
    let next = cells.map((row, i) => row.map((cell, j) => {
        let lives = get_neighbour_lives(i, j, cells);
        if (cell && lives >= 2 && lives <= 3) return 1;
        if (!cell && lives === 3) return 1;
        return 0;
    }));
    return generations ? getGeneration(next, generations - 1) : cells;
}
*/