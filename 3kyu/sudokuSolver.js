/* 
3ky - Sudoku Solver
https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript

Write a function that will solve a 9x9 Sudoku puzzle. 
The function will take one argument consisting of the 2D puzzle array,
 with the value 0 representing an unknown square.
*/


function sudoku(puzzle) {
  const i2rc = index => ({ row: Math.floor(index / 9), col: index % 9 });
  const rc2i = (row, col) => row * 9 + col;
  const acceptable = (board, index, value) => {
    let { row, col } = i2rc(index);
    for (let r = 0; r < 9; ++r) if (board[rc2i(r, col)] === value) return false;
    for (let c = 0; c < 9; ++c) if (board[rc2i(row, c)] === value) return false;
    let r1 = Math.floor(row / 3) * 3, c1 = Math.floor(col / 3) * 3;
    for (let r = r1; r < r1 + 3; ++r)
      for (let c = c1; c < c1 + 3; ++c)
        if (board[rc2i(r, c)] == value) return false;
    return true;
  }

  function getChoices(board, index) {
    let choices = [];
    for (let value = 1; value <= 9; ++value) {
      if (acceptable(board, index, value)) choices.push(value);
    }
    return choices;
  }

  function bestBet(puzzle) {
    let index, moves, bestLen = 100;
    for (let i = 0; i < 81; ++i) {
      if (!puzzle[i]) {
        let m = getChoices(puzzle, i);
        if (m.length < bestLen) {
          bestLen = m.length;
          moves = m;
          index = i;
          if (bestLen == 0) break;
        }
      }
    }
    return { index, moves };
  }

  function solve() {
    let { index, moves } = bestBet(puzzle);
    if (index == null) return true;
    for (let m of moves) {
      puzzle[index] = m;
      if (solve()) return true;
    }
    puzzle[index] = 0;
    return false;
  }
  puzzle = puzzle.flat();
  solve();
  const result = [];
  for (let i = 0; i < puzzle.length; i += 9) {
    result.push(puzzle.slice(i, i + 9));
  }
  return result;
}

var puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]];

var solution = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]];

console.log(sudoku(puzzle));

// best

/* 
function sudoku(puzzle) {
  const valid = (x,y) => {
    var v = [];
    for(var i=0; i<3; i++) {
      for(var j=0; j<3; j++) {
        v.push(puzzle[x][i*3+j])
        v.push(puzzle[i*3+j][y])
        v.push(puzzle[3*Math.floor(x/3)+i][3*Math.floor(y/3)+j])
      }
    }
    return [1,2,3,4,5,6,7,8,9].filter(e => v.indexOf(e) == -1)
  }
  const rec = (x,y) => {
    if(y == 9) {
      return puzzle
    } else if (!puzzle[x][y]) {
      const correct = valid(x,y).some(i => {
        puzzle[x][y] = i;
        return rec((x+1)%9,y+(x==9?1:0))
      })
      if (correct)
        return puzzle;
      puzzle[x][y] = 0;
    } else {
      return rec((x+1)%9,y+(x==8?1:0))
    }
  }
  return rec(0,0)
}
*/

/* 
function sudoku(a, x=0, y=0) {
    function next(x, y) {
        if (++y == 9) (x++, y=0);
        return x==9 ? a : sudoku(a,x,y);
    }
    function getFree(x, y) {
        let [xx, yy] = [~~(x / 3) * 3, ~~(y / 3) * 3];
        let nums = a[x].concat(a[0].map((_,i)=>a[i][y])).concat(a.slice(xx,xx+3).reduce((p,c)=>p.concat(c.slice(yy,yy+3)), []));
        return [1,2,3,4,5,6,7,8,9].filter(v=>!nums.includes(v));
    }
    a = a.slice().map(x=>x.slice());
    return a[x][y] ? next(x,y) : getFree(x,y).reduce((ans,n)=>(a[x][y]=n, ans||next(x,y)), 0);
}
*/