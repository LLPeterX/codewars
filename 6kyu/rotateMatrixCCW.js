/* 
6kyu - Rotate matrix counter - clockwise N - times!
https://www.codewars.com/kata/5919f3bf6589022915000023

Повернуть квадратную матрицу против часовой стрелки N раз
*/

function rotateAgainstClockwise(mx, times) {
  let len = mx.length;
  let rotations = [
    (mx) => mx,
    (mx) => {
      for (let i = 0; i < len / 2; i++) {
        for (let j = i; j < len - i - 1; j++) {
          let tmp = mx[i][j];
          mx[i][j] = mx[j][len - i - 1];
          mx[j][len - i - 1] = mx[len - i - 1][len - j - 1];
          mx[len - i - 1][len - j - 1] = mx[len - j - 1][i];
          mx[len - j - 1][i] = tmp;
        }
      }
      return mx;
    }, // -90
    (mx) => mx.reverse().map(row => row.reverse()), // 180
    (mx) => mx[0].map((_, i) => mx.map(row => row[i]).reverse()) // +90
  ];
  return rotations[times % 4](mx);
}

let mx = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]];

let mx2 = [[1, 2], [3, 4]];

console.log(rotateAgainstClockwise(mx, 2));
console.log(rotateAgainstClockwise(mx2, 5));

//best
/* 
const rotateAgainstClockwise = (m, t) =>
          t%4 == 1 ? m.map((r,i)=> r.map((c,j)=> m[j][m.length-1 -i])) :
          t%4 == 2 ? m.map((r,i)=> r.map((c,j)=> m[m.length-i-1][m.length-1 -j])) :
          t%4 == 3 ? m.map((r,i)=> r.map((c,j)=> m[m.length-j-1][i])) :
          m ;
*/

/* 
const rotateAgainstClockwise = (matrix, times) => {
  let tmp = matrix.slice();
  let len = tmp.length - 1;
  let rot = times % 4;
  while (rot--)
    tmp = tmp.map((x, i) => 
      x.map((y, j) => tmp[j][len - i])
    );
  return tmp;
}
*/

/* 
function rotateAgainstClockwise(m, n) {
  n %= 4;
  if (n === 0) return m;
  return rotateAgainstClockwise(m[0].map((_, i) => m.map(r => r[i])).reverse(), n - 1);
}
*/