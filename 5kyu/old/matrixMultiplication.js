/* 
5kyu - Square Matrix Multiplication
https://www.codewars.com/kata/5263a84ffcadb968b6000513/train/javascript


*/

/* 
// from https://mathhelpplanet.com/static.php?p=javascript-operatsii-nad-matritsami

function matrixMultiplication(A, B){
  let rowsA = A.length, colsA = A[0].length,  rowsB = B.length, colsB = B[0].length, C = [];
  if (colsA != rowsB) return false;
    for (var i = 0; i < rowsA; i++) C[ i ] = [];
    for (var k = 0; k < colsB; k++)
     { for (var i = 0; i < rowsA; i++)
        { var t = 0;
          for (var j = 0; j < rowsB; j++) t += A[ i ][j]*B[j][k];
          C[ i ][k] = t;
        }
     }
    return C;
}
*/

function matrixMultiplication(a, b) {
  let c = [];
  for (let i = 0; i < a.length; i++) c[i] = [];
  for (let k = 0; k < b[0].length; k++) {
    for (let i = 0; i < a.length; i++) {
      let t = 0;
      for (var j = 0; j < b.length; j++) t += a[i][j] * b[j][k];
      c[i][k] = t;
    }
  }
  return c;
}

// best

/* 
function matrixMultiplication(a,b){
  return a.map(function(row){
      return row.map(function(_,i){
          return row.reduce(function(sum,cell,j){
              return sum+cell*b[j][i];
          },0);
      });
  });
}
*/

/* 
const matrixMultiplication = (a, b) => {
  let c = a.map(a => a.map(e => 0));
  for (let i = 0, n = a.length; i < n; i++)
    for (let j = 0; j < n; j++) 
      for (let k = 0; k < n; k++)
        c[i][j] += a[i][k] * b[k][j];
  return c;  
}
*/

/* 
const matrixMultiplication = (a, b) =>
  a.map(val => val.map((_, idx) => val.reduce((pre, v, i) => pre + v * b[i][idx], 0)));
*/