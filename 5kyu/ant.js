/* 
5kyu - Langton's ant
https://www.codewars.com/kata/58e6996019af2cff71000081

Task
Complete the function and return the nth iteration of Langton's ant with the given input.

Parameters:
* grid - a two dimensional array of 1s and 0s (representing white and black cells respectively)
* column - horizontal position of ant
* row - ant's vertical position
* n - number of iterations
* dir - ant's current direction (0 - north, 1 - east, 2 - south, 3 - west), should default to 0

Output
The state of the grid after n iterations.

Rules
The ant can travel in any of the four cardinal directions at each step it takes. 
The ant moves according to the rules below:
* At a white square (represented with 1), turn 90° right, flip the color of the square, and move forward one unit.
* At a black square (0), turn 90° left, flip the color of the square, and move forward one unit.
T
he grid has no limits and therefore if the ant moves outside the borders, 
the grid should be expanded with 0s, respectively maintaining the rectangle shape.
*/


function ant(grid, column, row, n, dir = 0) {
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // [row,column]

  for (let i = 0; i < n; i++) {
    if (grid[row][column]) {
      dir++;
    } else {
      dir--;
    }
    grid[row][column] = 1 - grid[row][column];
    if (dir > 3) dir = 0;
    if (dir < 0) dir = 3;
    row += directions[dir][0];
    column += directions[dir][1];
    if (row < 0) {
      grid.unshift(Array(grid[0].length).fill(0));
      row = 0;
    } else if (row >= grid.length) {
      grid.push(Array(grid[0].length).fill(0));
    }
    if (column < 0) {
      grid.forEach(r => { r.unshift(0) });
      column = 0;
    } else if (column >= grid[0].length) {
      grid.forEach(r => { r.push(0) });
    }

  }
  return grid;
}

// console.log(ant([[1]], 0, 0, 1, 0), [[0, 0]]);
// console.log(ant([[0]], 0, 0, 1, 0), [[0, 1]]);
//console.log(ant([[1]], 0, 0, 3, 0), [[0, 1], [0, 1]]);
console.log(ant([[0, 0, 0], [0, 0, 0], [0, 0, 0]], 2, 2, 10, 1), [[+0, +0, +0, +0], [+0, 1, 1, +0], [+0, 1, 1, 1], [+0, +0, +0, 1]]);
// expected       [ [ +0, +0, +0, +0 ], [ +0, 1, 1, +0 ], [ +0, 1, 1, 1 ], [ +0, +0, +0, 1, +0 ] ]
//to deeply equal [ [ +0, +0, +0, +0 ], [ +0, 1, 1, +0 ], [ +0, 1, 1, 1 ], [ +0, +0, +0, 1 ] ]
