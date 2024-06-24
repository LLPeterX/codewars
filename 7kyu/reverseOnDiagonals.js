/* 
7kyu - Simple Fun #59: Reverse On Diagonals
https://www.codewars.com/kata/5889a6b653ad4a22710000d0/train/javascript
*/

function reverseOnDiagonals(matrix) {
  const L = matrix.length;
  for(let i=0; i<L/2; i++) {
    [matrix[i][i],matrix[L-1-i][L-1-i]] = [matrix[L-1-i][L-1-i],matrix[i][i]];
    [matrix[i][L-1-i], matrix[L-1-i][i]] = [matrix[L-1-i][i],matrix[i][L-1-i]];
  }
  return matrix;  
}


console.log(reverseOnDiagonals( [[1,2,3],  [4,5,6],  [7,8,9]]),[[9,2,7], [4,5,6],  [3,8,1]])

console.log(reverseOnDiagonals([[239]]),[[239]])

console.log(reverseOnDiagonals([[1,10],  [100,1000]]),[[1000,100],  [10,1]])

console.log(reverseOnDiagonals([[43,455,32,103],  [102,988,298,981],  [309,21,53,64],  [2,22,35,291]]),[[291,455,32,2],  [102,53,21,981],  [309,298,988,64], [103,22,35,43]])
