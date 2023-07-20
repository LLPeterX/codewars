/* 
6kyu - Traverse array elements diagonally
https://www.codewars.com/kata/5968fb556875980bd900000f

In this kata you're given an n x n array and you're expected to traverse 
the elements diagonally from the bottom right to the top left.

Example
  1 6 7
  7 2 4
  3 5 9

Result:
9
4 5
7 2 3
6 7
1  
*/

// from: https://stackoverflow.com/questions/35917734/how-do-i-traverse-an-array-diagonally-in-javascript
function diagonal(arr) {
  const L = arr.length - 1, result = [];
  for (let k = 0; k <= L * 2; k++) {
    let diag = [];
    for (let i = L; i >= 0; --i) {
      let j = k - i;
      if (j >= 0 && j <= L) diag.push(arr[i][j]);
    }
    result.push(diag);
  }
  return result.reduce((a, x) => a.concat(x), []).reverse();
}



let arr1 = [[1, 6, 7], [7, 2, 4], [3, 5, 9]];
console.log(diagonal(arr1)); // [9, 4, 5, 7, 2, 3, 6, 7, 1]

let arr2 = [
  [4, 5, 7],
  [3, 9, 1],
  [7, 6, 2]
];

console.log(diagonal(arr2)); // [2, 1, 6, 7, 9, 7, 5, 3, 4]

// best
/* 
function diagonal(arr) {
  let n = arr.length - 1;
  let result = [];
  
  while (arr[0].length) {
    arr.forEach((innerArr, index) => {
      if (!innerArr.length) {
        return;
      }
      if (index >= n) {
        result.push( innerArr.pop() );  
      }
    });
    
    n--;
  }
  
  return result;
}
*/

/* 
const diagonal = arr => {
  const len = arr.length - 1, res = [];
  for(let i = len, j = len; i >= 0; j?j--:i--) {
    for (let n = i, m = j; n >= j, m <= i; m++, n--) {
      res.push(arr[m][n]);
    }
  }
  return res;
}
*/