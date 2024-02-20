/* 
5kyu - Simultaneous Equations - Three Variables
https://www.codewars.com/kata/59280c056d6c5a74ca000149/train/javascript

Даны 3 уравнения с x,y,z.
Например:
1) 4x -3y +z = -10
2) 2x +y +3z = 0
3) -x +2y -5z = 17
Константы передаются в виде массивов [[4, -3, 1, -10], [2, 1, 3, 0], [-1, 2, -5, 17]]
Возвращаемое значение - массив значений [x,y,z]

A1*x + B1*y + C1*z = D1
A2*x + B2*y + C2*z = D2
A3*x + B3*y + C3*z = D3

from: https://reshator.com/sprav/algebra/7-klass/sistema-linejnyh-uravnenij-s-tremya-peremennymi/
*/

function solveEq(eq) {
  let [a1, b1, c1, d1] = eq[0];
  let [a2, b2, c2, d2] = eq[1];
  let [a3, b3, c3, d3] = eq[2];
  let d = a1 * (b2 * c3 - b3 * c2) - b1 * (a2 * c3 - a3 * c2) + c1 * (a2 * b3 - a3 * b2);
  let dx = d1 * (b2 * c3 - b3 * c2) - b1 * (d2 * c3 - d3 * c2) + c1 * (d2 * b3 - d3 * b2);
  let dy = a1 * (d2 * c3 - d3 * c2) - d1 * (a2 * c3 - a3 * c2) + c1 * (a2 * d3 - a3 * d2);
  let dz = a1 * (b2 * d3 - b3 * d2) - b1 * (a2 * d3 - a3 * d2) + d1 * (a2 * b3 - a3 * b2);
  return [dx / d || 0, dy / d || 0, dz / d || 0];
}

console.log(solveEq([[4, -3, 1, -10], [2, 1, 3, 0], [-1, 2, -5, 17]]), [1, 4, -2]);
console.log(solveEq([[2, 1, 3, 10], [-3, -2, 7, 5], [3, 3, -4, 7]]), [-1, 6, 2]);
console.log(solveEq([[3, 2, 0, 7], [-4, 0, 3, -6], [0, -2, -6, -10]]), [3, -1, 2]);
console.log(solveEq([[4, 2, -5, -21], [2, -2, 1, 7], [4, 3, -1, -1]]), [1, 0, 5]);
console.log(solveEq([[1, 1, 1, 5], [2, 2, 3, 14], [2, -3, 2, -5]]), [-2, 3, 4]);

// cools
// ------------------------------------------------------------------------------------------------------------------ 
// goal: find inv of transformation matrix which can be applied to the input vector to get the output vector
function solveEq(matrix) {
  /* --- step 1: separate transformation matrix (columns 0-2) from vector (column 3) --- */

  // create empty vector and transformation matrix, to be added to later
  const vector = [];
  const transMatrix = [];

  // iterate through rows of matrix
  matrix.forEach((row) => {
    // get column 3 while simultaenously removing it
    const vectorEntry = row.splice(3, 1);

    // add vector entry to vector
    vector.push(vectorEntry);

    // since splice removed the column 3 of this row this can be added to the transformation matrix
    transMatrix.push(row);
  });


  /* --- step 2: make matrix of minors, which has the same dimensions as the transformation matrix --- */

  // copy transformation matrix to have correct dimensions but without referencing it
  const minors = transMatrix.map(row => row.slice());

  // iterate from i = 0 to 3, where i is the row index
  for (let i = 0; i < 3; i++) {
    // iterate from j = 0 to 3, where j is the column index
    for (let j = 0; j < 3; j++) {
      // create copy of transformation matrix values so that it is not referenced
      const temp = transMatrix.map(row => row.slice());

      // remove row i from transformation matrix (copy)
      temp.splice(i, 1);

      // remove column j from transformation matrix (copy)
      temp.forEach((row) => row.splice(j, 1));

      // calculate determinant of resulting matrix as ad - bc
      const det = temp[0][0] * temp[1][1] - temp[0][1] * temp[1][0];

      // add to matrix of minors
      minors[i][j] = det;
    }
  }


  /* --- step 3: make matrix of cofactors, which has the same dimensions as the matrix of minors --- */

  // copy matrix of minors to use for calculations, but without referencing it
  const cofactors = minors.map(row => row.slice());

  // iterate from i = 0 to 3, where i is the row index
  for (let i = 0; i < 3; i++) {
    // iterate from j = 0 to 3, where j is the column index
    for (let j = 0; j < 3; j++) {
      // get which number element it is, counting row-wise
      const n = i * 3 + j;

      // every other element should have its sign flipped i.e. every element with an odd 'n'
      if (n % 2) {
        cofactors[i][j] *= -1;
      }
    }
  }


  /* --- step 4: make the adjugate matrix, which has the same dimensions as the matrix of cofactors --- */

  // copy matrix of cofactors to use for calculations, but without referencing it
  const adjugate = cofactors.map(row => row.slice());

  // iterate from i = 0 to 3, where i is the row index
  for (let i = 0; i < 3; i++) {
    // iterate from j = 0 to 3, where j is the column index
    for (let j = 0; j < 3; j++) {
      // swap i and j indices of each entry i.e. get tranpose of the matrix
      adjugate[i][j] = cofactors[j][i];
      adjugate[j][i] = cofactors[i][j];
    }
  }


  /* --- step 5: get the inverse by dividing the adjugate by the determinant of the original transformation matrix --- */

  // find the determinant by multiplying each of the top row elements by the cofactor for the same location
  const determinant = transMatrix[0][0] * cofactors[0][0] + transMatrix[0][1] * cofactors[0][1] + transMatrix[0][2] * cofactors[0][2];

  // divide adjugate i.e. every entry in the adjugate by the determinant
  const inverse = adjugate.map((row) => row.map((entry) => entry / determinant));


  /* --- step 6: apply the inverse matrix to the vector --- */

  // create empty applied vector, to be added to later
  const appliedVector = [];

  // go through each row in the inverse matrix
  inverse.forEach((row) => {
    // get dot product of row and vector
    const dotProduct = row[0] * vector[0] + row[1] * vector[1] + row[2] * vector[2];

    // add to applied vector, but we assume that each number is a whole number to avoid annoying decimal numbers like 0.999999...
    appliedVector.push(Math.round(dotProduct));
  });

  /* --- success! now return the applied vector. --- */
  return appliedVector;
}
// -------------------------------------------------------------------------------------------------------------------------------
