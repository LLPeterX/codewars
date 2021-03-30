/* 
https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript
Sudoku solution validator
*/

function validSolution(board){
  for(let i=0; i<9; i+=3) {
    for(let j=0; j<9; j+=3) {
      let sum = board[i][j]+board[i][j+1]+board[i][j+2]+
                board[i+1][j]+board[i+1][j+1]+board[i+1][j+2]+
                board[i+2][j]+board[i+2][j+1]+board[i+2][j+2];
      if(sum!=45) {
        return false;
      }
    }
  }
  return true;
 }
 