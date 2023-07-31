/* 
6kyu - Sudoku board validator
https://www.codewars.com/kata/63d1bac72de941033dbf87ae/train/javascript

*/

function validateSudoku(board) {
  function validateArray(startRow, endRow, startCol, endCol) {
    let nums = new Set();
    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        let n = board[row][col];
        if (n < 1 || n > 9) return false;
        nums.add(n);
      }
    }
    //console.log(' nums=', nums);
    return nums.size === 9;
  }

  // rows
  for (let row = 0; row < 9; row++) {
    if (!validateArray(row, row, 0, 8)) return false;
  }
  //cols
  for (let col = 0; col < 9; col++) {
    if (!validateArray(0, 8, col, col)) return false;
  }
  // blocks
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      if (!validateArray(row, row + 2, col, col + 2)) return false;
    }
  }
  return true;
}

// best

/* 
function validateSudoku(board) {
    let set = new Set() 
    let zeroSet = new Set()
    //number of rows
    for(let i=0; i<board.length; i++) {
      //number of columns 
      for(let j=0; j<board[0].length; j++) {
        let value = board[i][j]
        
        //String - value of the element and the row number. eg: '5 row-1'
        let row = value + ' row-' + i 
        //vice-versa
        let col = value + ' col-' + j
        //String - Value of the element and the box number it is present in (Total 9 boxes numbered from 0-8)
        let box = value + ' box-' + Math.floor(i/3) + "," + Math.floor(j/3) 
        
        //Checking if each row, column or box has same elements
        //For instance, lets say we have encountered 5 in row 1, so variable row becomes '5 row-1' and we add it to variable set
        //Now, if we encounter another 5 in row 1, variable row again becomes '5 row-1' 
        //ATQ, there should be unique elements in each row, col or box,
        //So, if we get the same string in the set again, this means the board is not valid

        //Also have zeroSet to check for multiple zeroes in which case the board is again invalid
        
        if(set.has(row) || set.has(col) || set.has(box) || zeroSet.has(0)) {
          return false
        }
        else {
          set.add(row)
          set.add(col)
          set.add(box)
          if(value === 0)
            zeroSet.add(value)
        }
      }
    }
  return true
}
*/

/* 
const validateSudoku = board => {
  const isFragmentValid = fragment =>
    !fragment.reduce((acc, cell) => acc.replace(cell, ''), '123456789');

  return board.every((arr, i1) =>
           isFragmentValid(arr)
             &&
           isFragmentValid(arr.map((_, i2, arr) => board[i2][i1]))
             &&
           isFragmentValid(arr.map((_, i2, arr) => board[~~(i1/3)*3+~~(i2/3)][(i1%3)*3+(i2%3)])));
}
*/