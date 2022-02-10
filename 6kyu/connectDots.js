/* 
6kyu - Connect the Dots
https://www.codewars.com/kata/5d6a11ab2a1ef8001dd1e817/train/javascript

Дана матрица. В ней буквы a-z
Задача соединить буквы зведздочками a->b->c->c и т.д.
Использовать прямые линии - по вертикали, горизонтали и диагонали
* Буквы a...z = точки.
Соединить точки, чтобы получилась картинка
*/

// ГДЕ-ТО БЛИЗКО; ДИАГОНАЛИ НЕ РАБОТАЮТ - Я БУХОЙ....
function connectTheDots(paper) {
  function drawLine(matrix, [y0, x0], [y1, x1]) {
    if (x0 === x1) { // vertical
      for (let y = Math.min(y0, y1); y <= Math.max(y0, y1); y++) matrix[y][x0] = '*';
    } else if (y0 === y1) { // jorizontal
      for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++) matrix[y0][x] = '*';
    } else { // diagonal
      let stepX = Math.sign(x1 - x0), stepY = Math.sign(y1 - y0);
      let x = x0, y = y0;
      while (x != x1) {
        matrix[y][x] = '*';
        x += stepX;
        y += stepY;
      }
      matrix[y1][x1] = '*';
    }
  }

  let coordinates = Array(26).fill(null);
  const matrix = paper.split('\n').map(row => row.split(''));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let code = matrix[i][j].charCodeAt();
      if (code >= 97 && code <= 122) {
        coordinates[code - 97] = [i, j];
      }
    }
  }
  coordinates = coordinates.filter(ch => ch !== null);
  for (let i = 1; i < coordinates.length; i++) {
    drawLine(matrix, coordinates[i - 1], coordinates[i]);
  }
  return matrix.map(line => line.join('') + "\n").slice(0, -1).join``;
}

var inp =
  "           \n" +
  " a       b \n" +
  " e         \n" +
  "           \n" +
  " d       c \n" +
  "           \n";
//console.log(connectTheDots(inp));

var inp =
  "           \n" +
  "     a     \n" +
  "    e      \n" +
  "           \n" +
  "  d     b  \n" +
  "           \n" +
  "           \n" +
  "     c     \n" +
  "           \n";
//console.log(connectTheDots(inp));


var inp9 = " f    e  \ng      d \nh        \n i    j  \n         \n         \n       c \n a    b  \n";
//console.log(connectTheDots(inp9));

var inp8 = " c    d  \nb      e \na      f \n h    g  \ni      n \n         \nj      m \n k    l  \n";
console.log(connectTheDots(inp8));
/* 
Random test #2
Input	Expected
 c    d  
b      e 
a      f 
 h    g  
i      n 
         
j      m 
 k    l  
 // output for 8 is:
 ******  
*      * 
*      * 
 ******  
*      * 
*      * 
*      * 
 ******  

*/

var inp5 = "b      a \n         \n         \nc     d  \n       e \n         \ni      f \n h    g  \n";
//console.log(connectTheDots(inp5));



// best

/* 
function connectTheDots(paper) {
    paper = paper.slice(0,-1).split('\n').map(s => [...s]);
    paper.reduce(
        (a,r,i) => r.reduce((a,c,j) => (c==' '||a.push({c,i,j}), a), a), []
    ).sort((a,b) => a.c<b.c ? -1 : 1).forEach((d,i,a) => {
        if (!i) return paper[d.i][d.j] = '*'; else a = a[i-1];
        var dr = Math.sign(d.i-a.i), dc= Math.sign(d.j-a.j);
        do paper[a.i+=dr][a.j+=dc] = '*'; while (a.i!=d.i || a.j!=d.j);
    });
    return paper.reduce((s,r) => s+r.join('')+'\n','');
}
*/

/* 
const connectTheDots = paper => {
    const matrix = paper.split('\n').map(row => row.split(''));
    extractPoints(matrix).reduce((p1, p2) => drawLine(matrix, p1, p2));
    return matrix.map(row => row.map(r => r[0]).join('')).join('\n');
}

const extractPoints = matrix => {
    return matrix.reduce((a, r, ri) => a.concat(r.map((c, ci) => [c, ri, ci])), [])
        .filter(t => t[0] !== ' ')
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(p => [p[1], p[2]]);
}

const drawLine = (matrix, [r1, c1], [r2, c2]) => {
    const direction = (d1, d2) => d2 > d1 ? 1 : d2 < d1 ? -1 : 0;
    const [dr, dc] = [direction(r1, r2), direction(c1, c2)];
    matrix[r1][c1] = matrix[r2][c2] = '*';    
    while (r1 !== r2 || c1 !== c2) {
        [r1, c1] = [r1 + dr, c1 + dc];
        matrix[r1][c1] = '*';
    }
    return [r2, c2];
}
*/