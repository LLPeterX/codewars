/* 
3kyu - Make a spiral
https://www.codewares.com/kata/534e01fbbb17187c7e0000c6/train/javascript

Создать спираль NxN из 1 и 0. Типа такой для N=8:
[
  '[1,1,1,1,1,1,1,1]',
  '[0,0,0,0,0,0,0,1]',
  '[1,1,1,1,1,1,0,1]',
  '[1,0,0,0,0,1,0,1]',
  '[1,0,1,0,0,1,0,1]',
  '[1,0,1,1,1,1,0,1]',
  '[1,0,0,0,0,0,0,1]',
  '[1,1,1,1,1,1,1,1]'
]

*/

/* 
TODO: придумать условие выхода из цикла. Виснет на N=8
*/

/* 
function spiralize(size) {
  let res = Array(size).fill().map((e) => Array(size).fill(0));
  let end = Math.floor(size / 2), x = 0, y = 0, direction = 0, startX = 0, endX = size - 1, startY = 0, endY = size - 1;
  res[0][0] = 1;
  while ((x != end || y != end)) {
    switch (direction) {
      case 0: // right
        while (x < endX) res[y][++x] = 1;
        endX -= 2;
        break;
      case 1: // down
        while (y < endY) res[++y][x] = 1;
        endY -= 2;
        break;
      case 2: // left
        while (x > startX) res[y][--x] = 1;
        startY += 2;
        break;
      case 3: // up
        while (y > startY) res[--y][x] = 1;
        startX += 2;
        break;
    }
    direction = (direction + 1) % 4;
  }
  return res;
}

 */
/* 
function spiralize(size) {
  let res = Array(size).fill().map((e) => Array(size).fill(0));
  let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // [x,y] changes: right-down-left-up
  let x = y = n = 0;
  while (n < size) {
    let d = n % 4;
    let [dx, dy] = dirs[d % 4];
    while (y + dy >= 0 && y + dy < size && x + dx >= 0 && x + dx < size) {
      res[y][x] = 1;
      if (y + dy * 2 >= 0 && y + dy * 2 < size && x + dx * 2 >= 0 && x + dx * 2 < size) {
        if ((d == 0 || d === 2) && res[y][x + dx * 2]) break;
        if ((d === 1 || d === 3) && res[y + dy * 2][x]) break;
      }
      x += dx;
      y += dy;
    }
    n++;
  }
  return res;
} */

// украдено у https://codereview.stackexchange.com/questions/261145/codewars-make-a-spiral

function spiralize(size) {
  let res = Array(size).fill().map((e) => Array(size).fill(0));
  let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // [x,y] changes: right-down-left-up
  let x = y = n = 0;
  while (n < size) {
    let direction = n % 4;
    let [dx, dy] = dirs[direction % 4];
    while (y + dy >= 0 && y + dy < size && x + dx >= 0 && x + dx < size) {
      res[y][x] = 1;
      if ((y + dy * 2 >= 0 && y + dy * 2 < size && x + dx * 2 >= 0 && x + dx * 2 < size) && ((!(direction % 2) && res[y][x + dx * 2]) || (direction % 2 && res[y + dy * 2][x]))) break;
      x += dx;
      y += dy;
    }
    n++;
  }
  return res;
}

console.log(spiralize(8).map(row => JSON.stringify(row)));
//console.log(spiralize(5));
//console.log(spiralize(10).map(row => JSON.stringify(row)));

//best

/* 
function spiralize(size) {
  if (size == 2) return [ [1,1], [0,1] ];
  if (size == 3) return [ [1,1,1], [0,0,1], [1,1,1] ];
  var base = spiralize(size-2);
  var res = [[],[]];
  for (var i = 0; i < size; i++) (res[0].push(1)) && (res[1].push(0));
  res[1][size-1] = 1;
  for (var i = size-3; i >= 0; i--) {
    res.push(base[i].reverse().concat([0,1]));
  }
  res[size-1][size-2] = 1;
  return res;
}
*/

/* 
var spiralize = function(size) {

    let a = Array(size).fill(0).map( i => Array(size) );

    let v = 1;
    for (let j = 0; j < Math.ceil(size/2); j++) {
        for (let i = j; i < size - j; i++) {
            a[i][j] = a[j][i] = v;
            a[i][size - 1 - j] = a[size - 1 - j][i] = v;
        }
        v = ++v%2;
        a[j + 1][j] = v;
    }

    return a;
};
*/