/* 
6kyu - Chess Fun #9: Bishops And Rooks
https://www.codewars.com/kata/58a3b28b2f949e21b3000001/train/javascript

You are given a chessboard with several rooks and bishops placed on some of its squares. 
How many unoccupied squares are there that are not under attack of any chess piece?

Here, the standard rules are applied: a square is under attack of a rook or a bishop 
only if all squares between the piece and the current square are unoccupied.

Input/Output
  [input] integer array chessboard
  matrix of size 8x8 containing numbers {-1, 0, 1} which represents chess pieces placement:

-1 -> bishop, 0 -> empty square, 1 -> rook

[output] an integer
*/

/*
function bishopsAndRooks(chessboard) {
  function occupy(x, y, dx, dy, value = 2) {
    let count = 0;
    while (x + dx >= 0 && x + dx < 8 && y + dy >= 0 && y + dy < 8 && Math.abs(chessboard[y + dy][x + dx]) != 1) {
      if (chessboard[y + dy][x + dx] === 0) {
        count++;
        chessboard[y + dy][x + dx] = value;
      }
      x += dx;
      y += dy;
    }
    return count;
  }

  let occupied = 0;
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (chessboard[y][x] === 1) {
        occupied += occupy(x, y, -1, 0, 3) + occupy(x, y, 0, -1, 3); // up
        occupied += occupy(x, y, 1, 0, 3); // right
        occupied += occupy(x, y, 0, 1, 3); // down
        occupied++;
      } else if (chessboard[y][x] === -1) {
        occupied += occupy(x, y, -1, -1, 4); // LU
        occupied += occupy(x, y, 1, -1, 4); // RU
        occupied += occupy(x, y, -1, 1, 4); // LD
        occupied += occupy(x, y, 1, 1, 4); // RD
        occupied++;
      }
    }
  }
  return 64 - occupied;
}
*/

// final shorted code
function bishopsAndRooks(chessboard) {
  function occupy(x, y, dx, dy) {
    let count = 0;
    while (x + dx >= 0 && x + dx < 8 && y + dy >= 0 && y + dy < 8 && Math.abs(chessboard[y + dy][x + dx]) != 1) {
      x += dx;
      y += dy;
      if (chessboard[y][x] === 0) {
        count++;
        chessboard[y][x] = 2;
      }
    }
    return count;
  }

  let occupied = 0;
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (chessboard[y][x] === 1) {
        occupied += occupy(x, y, -1, 0) + occupy(x, y, 0, -1) + occupy(x, y, 1, 0) + occupy(x, y, 0, 1) + 1;
      } else if (chessboard[y][x] === -1) {
        occupied += occupy(x, y, -1, -1) + occupy(x, y, 1, -1) + occupy(x, y, -1, 1) + occupy(x, y, 1, 1) + 1;
      }
    }
  }
  return 64 - occupied;
}

let b1 = [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, -1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
console.log(bishopsAndRooks(b1), 42);
let b2 = [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, -1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, -1, -1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
console.log(bishopsAndRooks(b2), 20);

console.log(
  bishopsAndRooks([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]),
  64
);

console.log(
  bishopsAndRooks([
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, -1, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, -1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [-1, 0, 0, 0, 0, 0, 0, 0],
  ]),
  17
);

// best

/* 
// user6793616
function bishopsAndRooks(brd) {
    brd = [].concat(...brd.map(row => row.concat(NaN)));
    brd.forEach((sq, i, brd) =>
        sq%2 && [[-10,-8,10,8],,[-9,-1,1,9]][sq+1].forEach(dir => {
            for (let j = i+dir; brd[j]%2 === 0; j+=dir) brd[j] = 2;
        })
    );
    return 64-brd.filter(Boolean).length;
}

*/

/* 
// williamforty
const bishopsAndRooks = (c, t=c.map(r => [...r.map(n => "B R"[n+1]),9].join("")).join("")) => t.match(
  /(?<!(B.{9}( .{9})*|R.{8}( .{8})*|B.{7}( .{7})*|R *)) (?!( *R|.{9}( .{9})*B|.{8}( .{8})*R|.{7}( .{7})*B))/g
).length
*/
