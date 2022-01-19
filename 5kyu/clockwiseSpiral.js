/* 
5kyu - Clockwise Spiral
https://www.codewars.com/kata/536a155256eb459b8700077e

Your objective is to complete a function createSpiral(N) that receives an integer N 
and returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.

Return an empty array if N < 1 or N is not int / number

Examples:

N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]
*/

function createSpiral(n) {
  if (typeof n !== 'number' || n < 1 || ~~n !== n) return [];
  let x0 = 0, x1 = n - 1, y0 = 0, y1 = n - 1, num = 1,
    res = Array(n).fill().map(_ => Array(n).fill(0));
  while (x0 <= x1 && y0 <= y1) {
    for (let i = x0; i <= x1; i++) res[y0][i] = num++;
    y0++;
    for (let i = y0; i <= y1; i++) res[i][x1] = num++;
    x1--;
    for (let i = x1; i >= x0; i--)  res[y1][i] = num++;
    y1--;
    for (let i = y1; i >= y0; i--)  res[i][x0] = num++;
    x0++;
  }
  return res;
}

console.log(createSpiral(3));
console.log(createSpiral(4));

// others

/* 
function createSpiral(n) {
  if (!Number.isInteger(n)||n<1) return [];
  var rs=[...Array(n)].map(x=>[...Array(n)].map(x=>0));
  rs[0][0]=1;
  for (var i=2,xx=0,yy=0;i<=n*n;) {
    while (yy+1<n&&rs[xx][yy+1]==0) rs[xx][++yy]=i++;
    while (xx+1<n&&rs[xx+1][yy]==0) rs[++xx][yy]=i++;
    while (yy-1>-1&&rs[xx][yy-1]==0) rs[xx][--yy]=i++;
    while (xx-1>-1&&rs[xx-1][yy]==0) rs[--xx][yy]=i++;
  }
  return rs;
}
*/

/* 
function createSpiral(N) {
  if(N < 1 || !Number.isInteger(N)) return [];
  let result = Array.from(Array(N), a => Array.from(Array(N)));
  let matrix = result.map((row, rowIdx)=>row.map((col, colIdx)=>[rowIdx, colIdx]));
  let transpose = array => array[0].map((x,i) => array.map(x => x[i])).reverse();
  let counter = 0, cells = N+N;
  
  while(--cells) {
    matrix.splice(0, 1)[0].forEach(([row, col]) => result[row][col] = ++counter);
    matrix = matrix.length && transpose(matrix);
  }
  
  return result;
}
*/