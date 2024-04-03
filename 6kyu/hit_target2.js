/* 
6kyu - Game Hit the target - 2nd part
https://www.codewars.com/kata/6177b4119b69a40034305f14/train/javascript

given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
Now there are one of 4 types of arrows ( '^', '>', 'v', '<' ) and only one target (x)
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
*/

const solution = mtrx => {
  for (let i = 0; i < mtrx.length; i++) {
    for (let j = 0; j < mtrx[0].length; j++) {
      if (mtrx[i][j] === '>') {
        for (let k = j + 1; k < mtrx[i].length; k++) {
          if (mtrx[i][k] === 'x') return true;
        }
      } else if (mtrx[i][j] === '<') {
        for (let k = j - 1; k >= 0; k--) {
          if (mtrx[i][k] === 'x') return true;
        }
      } else if (mtrx[i][j] === '^') {
        for (let k = i - 1; k >= 0; k--) {
          if (mtrx[k][j] === 'x') return true;
        }
      } else if (mtrx[i][j] === 'v') {
        for (let k = i + 1; k < mtrx.length; k++) {
          if (mtrx[k][j] === 'x') return true;
        }
      }
    }
  }
  return false;
}

console.log(solution([
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'v'],
  [' ', ' ', ' ', ' ', 'x'],
  [' ', ' ', ' ', ' ', ' ']
]), true);

console.log(solution([
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', 'x', ' ', ' ', ' '],
  [' ', ' ', ' ', '>', ' '],
  [' ', ' ', ' ', ' ', ' ']
]), false);

// best

/* 
const solution = mtrx => {
  let x = mtrx.findIndex(row => row.includes('x')), y = mtrx[x].indexOf('x')
  return mtrx[x].slice(0, y).find(x => x == '>') ||
  mtrx[x].slice(y).find(x => x == '<') ||
  mtrx.slice(0, x).find(row => row[y] == 'v') ||
  mtrx.slice(x).find(row => row[y] == '^') ? true : false
}
*/