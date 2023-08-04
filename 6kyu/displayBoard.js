/* 
6kyu - Tic-Tac-Toe-like table Generator
https://www.codewars.com/kata/5b817c2a0ce070ace8002be0/train/javascript

Assuming that you get all the data in one array, you put a space around each value,
| as a columns separator and multiple - as rows separator, 
with something like ["O", "X", " ", " ", "X", " ", "X", "O", " "] 
you should be returning this structure (inclusive of new lines):

 O | X |   
-----------
   | X |   
-----------
 X | O |   

Now, to spice up things a bit, we are going to expand our board well beyond 
a trivial 3 x 3 square and we will accept rectangles of big sizes, 
still all as a long linear array.

For example, for "O", "X", " ", " ", "X", " ", "X", "O", " ", "O"] 
(same as above, just one extra "O") and knowing that the length 
of each row is 5, you will be returning

 O | X |   |   | X 
-------------------
   | X | O |   | O 


*/
const padCenter = (str) => str.padStart((str.length + 3) / 2).padEnd(3);
function displayBoard(board, width) {
  let result = "", i = 0, k = 0, h = board.length / width;
  while (i < board.length) {
    result += board.slice(i, i + width).map(padCenter).join('|') + "\n";
    if (k < h - 1) {
      result += '-'.repeat(width * 3 + width - 1) + "\n";
    }
    i += width;
    k++;
  }
  return result.replace(/\n$/, '');
}


// best

/* 
const pad = (str, char) => char + str + char;
const row = arr => arr.map(x => pad(x, ' ')).join('|');
const line = w => pad([...Array(w)].fill('---').join('-'), '\n');
const reshape = (arr, w, res=[]) => arr.length > 0 ? reshape(arr.slice(w), w, res.concat([arr.slice(0, w)])) : res;
const displayBoard = (board, width) => reshape(board, width).map(row).join(line(width));
*/

/* 
displayBoard=(a,b,c=[])=>a.length?displayBoard(a.slice(b),b,[...c,a.slice(0,b)]):c.map(a=>a.map(a=>' '+a+' ').join`|`).join(`\n${"-".repeat(4*b-1)}\n`)
*/

/* 
function displayBoard(board, width) {
  let ans = "";
  let currColumn = 0;
  for (let i = 0; i < board.length; i++) {
    const el = board[i];
    ans += ` ${el} ${currColumn === (width - 1) ? "\n" : "|"}`; 
    currColumn++;
    if (currColumn == width) {
      currColumn = 0; 
      if (i !== board.length - 1) {
        ans += "-".repeat((width * 3) + (width - 1)) + "\n";
      }
    }
  } 
  ans = ans.slice(0, -1);
  return ans;
}
*/