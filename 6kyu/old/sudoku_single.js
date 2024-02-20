/* 
6kyu - Sudoku Strategies - Naked Single
https://www.codewars.com/kata/65c796c193e1c20c1ae67209/train/javascript
*/

function progress(puzzle) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // if (row === 4 && col === 0) {
      //   console.log('here!');
      // }
      if (puzzle[row][col] === 0) {
        const digits = new Set();
        //horizonal
        for (let i = 0; i < 9; i++) digits.add(puzzle[row][i]);
        // vertical
        for (let i = 0; i < 9; i++) digits.add(puzzle[i][col]);
        // around
        let y0 = Math.floor(row / 3) * 3, x0 = Math.floor(col / 3) * 3;
        for (let i = y0; i < y0 + 3; i++) {
          for (let j = x0; j < x0 + 3; j++) {
            digits.add(puzzle[i][j]);
          }
        }

        if (digits.size === 9) {
          console.log(digits);
          return [row, col, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].find(e => !digits.has(e))];
        }
      }
    }
  }
}


// ----- tests -------------
let p = [
  [1, 8, 9, 0, 0, 0, 0, 0, 0],
  [0, 2, 7, 0, 0, 0, 0, 0, 0],
  [6, 5, 4, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

console.log(progress(p), [1, 0, 3]);

let p1 = [
  [0, 1, 7, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 0, 0, 6],
  [8, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 4, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 0],
];

console.log(progress(p1), [1, 1, 2]);
// fail
let p2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 7, 0, 0, 0, 0, 0, 0],
  [0, 2, 8, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0],
  [4, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 0],
];
console.log(progress(p2), [4, 0, 9]);

let p3 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 2, 0, 0, 3, 0, 0],
  [9, 0, 4, 0, 0, 0, 0, 0, 0],
  [0, 5, 0, 0, 0, 0, 0, 0, 0],
  [0, 6, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
console.log(progress(p3), [1, 1, 7]);


// best

/*
function progress(puzzle) {
  const box = (i, j) => puzzle.slice((i / 3 | 0) * 3, (i / 3 + 1 | 0) * 3).flatMap(r => r.slice((j / 3 | 0) * 3, (j / 3 + 1 | 0) * 3));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!puzzle[i][j]) {
        const xs = new Set([...puzzle[i], ...puzzle.map(r => r[j]), ...box(i, j)].filter(x => x));
        if (xs.size === 8) return [i, j, [1, 2, 3, 4, 5, 6, 7, 8, 9].find(x => !xs.has(x))];
      }
    }
  }
}
*/

// cool

/* 

function progress(puzzle) {
  function *section(x, y) {
    x = Math.floor(x / 3) * 3
    y = Math.floor(y / 3) * 3
    for (let j = 0; j < 3; ++j) {
      for (let i = 0; i < 3; ++i) {
        yield puzzle[y + j][x + i]
      }
    }
  }
  for (let y = 0; y < 9; ++y) {
    for (let x = 0; x < 9; ++x) {
      if (puzzle[y][x] === 0) {
        const seen = new Set(puzzle[y])
        puzzle.forEach((row) => seen.add(row[x]))
        for (const value of section(x, y)) {
          seen.add(value)
        }
        if (seen.size === 9) {
          for (let i = 1; i <= 9; ++i) {
            if (!seen.has(i)) {
              return [y, x, i]
            }
          }
        }
      }
    }
  }
}
*/