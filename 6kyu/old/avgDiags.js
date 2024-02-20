/* 
6kyu - #4 Matrices: Process for a Square Matrix
https://www.codewars.com/kata/58fef91f184b6dcc07000179/train/javascript

Given a certain square matrix A, of dimension n x n, 
that has negative and positive values (many of them may be 0).

We need the following values rounded to the closest integer:

1) the average of all the positive numbers and zeros 
   that are in the principal diagonal and in the columns with odd index, avg1

2) the absolute value of the average of all the negative numbers 
   in the secondary diagonal and in the columns with even index, avg2
*/

function avgDiags(m) {
  let n1 = n2 = c1 = c2 = 0;
  for (let i = 0; i < m.length; i++) {
    if (i % 2 && m[i][i] >= 0) {
      c1 += m[i][i];
      n1++;
    }
    if (i % 2 == 0 && m[m.length - i - 1][i] < 0) {
      c2 += m[m.length - i - 1][i];
      n2++;
    }
  }
  let avg1 = n1 ? Math.round(c1 / n1) : -1;
  let avg2 = n2 ? Math.round(Math.abs(c2 / n2)) : -1;
  return [avg1, avg2];
}

var A = [
  [1, 3, -4, 5, -2, 5, 1],
  [2, 0, -7, 6, 8, 8, 15],
  [4, 4, -2, -10, 7, -1, 7],
  [-1, 3, 1, 0, 11, 4, 21],
  [-7, 6, -4, 10, 5, 7, 6],
  [-5, 4, 3, -5, 7, 8, 17],
  [-11, 3, 4, -8, 6, 16, 4]];
console.log(avgDiags(A), [3, 8]);

A = [[1, 3, -4, 5, -2, 5, 1],
[2, 0, -7, 6, 8, 8, 15],
[4, 4, -2, -10, 7, -1, 7],
[-1, 3, 1, 0, 11, 4, 21],
[-7, 6, 4, 10, 5, 7, 6],
[-5, 4, 3, -5, 7, -8, 17],
[11, 3, 4, -8, 6, 16, 4]];
console.log(avgDiags(A), [0, -1]);