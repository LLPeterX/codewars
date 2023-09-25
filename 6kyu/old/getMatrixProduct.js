/* 
6kyu - Matrix Multiplier
https://www.codewars.com/kata/573248f48e531896770001f9/train/javascript
*/


// stolen from https://stackoverflow.com/questions/27205018/multiply-2-matrices-in-javascript
function getMatrixProduct(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
    bNumRows = b.length, bNumCols = b[0].length,
    m = new Array(aNumRows);
  //  console.log(`aNumRows=${aNumRows} aNumCols=${aNumCols} bNumRows=${bNumRows} bNumCols=${bNumCols}`);
  if (aNumCols !== bNumRows) return null;
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols);
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}
// console.log(getMatrixProduct([[1, 2, 2], [3, 1, 1]], [[4, 2], [3, 1], [1, 5]]))
// console.log(getMatrixProduct([[1, 2], [3, 4]], [[5, 6], [7, 8]]), [[19, 22], [43, 50]]);
//console.log(getMatrixProduct([[7, 3], [2, 5], [6, 8], [9, 0]], [[7, 4, 9], [8, 1, 5]]), [[73, 31, 78], [54, 13, 43], [106, 32, 94], [63, 36, 81]]);