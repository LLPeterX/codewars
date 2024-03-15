/* 
5kyu - Simple Fun #155: Pac-Man
https://www.codewars.com/kata/58ad0e0a154165a1c80000ea/train/javascript

Task
Pac-Man got lucky today! Due to minor performance issue all his enemies have frozen. 
Too bad Pac-Man is not brave enough to face them right now, so he doesn't want any enemy to see him.

Given a gamefield of size N x N, Pac-Man's position(PM) and his enemies' positions(enemies), 
your task is to count the number of coins he can collect without being seen.

An enemy can see a Pac-Man if they are standing on the same row or column.

It is guaranteed that no enemy can see Pac-Man on the starting position. 

There is a coin on each empty square (i.e. where there is no Pac-Man or enemy).
*/

function show(g) {
  return g.map(row => row.join``).join("\n");
}

function pacMan(N, PM, enemies) {
  let grid = Array(N).fill().map(_ => Array(N).fill('C'));
  let filledCols = new Set(), filledRows = new Set();
  for (let [y, x] of enemies) {
    if (!filledCols.has(x)) {
      filledCols.add(x);
      // fill column x
      for (let i = 0; i < N; i++) grid[i][x] = 'E';
    }
    if (!filledRows.has(y)) {
      filledRows.add(y);
      // fill row y
      for (let i = 0; i < N; i++) grid[y][i] = 'E';
    }
  }
  let [py, px] = PM;
  grid[py][px] = 'P';
  // найти границы прямоугольника, в котором может двигаться пакман
  // прямоугольник ограничен 0...N или (внутри) ячейками 'E'
  // Считаем площадь этого прямогольника минус 1 (сам пакман)
  let x0 = px, y0 = py, x1 = px, y1 = py;
  // top
  while (y0 - 1 >= 0 && grid[y0 - 1][px] !== 'E') y0--;
  // left
  while (x0 - 1 >= 0 && grid[py][x0 - 1] !== 'E') x0--;
  // right
  while (x1 < N && grid[py][x1] !== 'E') x1++;
  // bottom
  while (y1 < N && grid[y1][px] !== 'E') y1++;

  return (x1 - x0) * (y1 - y0) - 1;
}


console.log(pacMan(1, [0, 0], []), 0)

console.log(pacMan(2, [0, 0], []), 3)

console.log(pacMan(3, [0, 0], []), 8)

console.log(pacMan(3, [1, 1], []), 8)

console.log(pacMan(2, [0, 0], [[1, 1]]), 0)

console.log(pacMan(3, [2, 0], [[1, 1]]), 0)

console.log(pacMan(3, [2, 0], [[0, 2]]), 3)

console.log(pacMan(10, [4, 6],
  [[0, 2],
  [5, 2],
  [5, 5]]), 15)

console.log(pacMan(8, [1, 1], [[5, 4]]), 19)

console.log(pacMan(8, [1, 5], [[5, 4]]), 14)

console.log(pacMan(8, [6, 1], [[5, 4]]), 7)

// best

/* 
function pacMan(N, PM, enemies) {
  var up=0,down=N-1,left=0,right=N-1,x=PM[0],y=PM[1]
  for(var n of enemies){
    if(n[0]<x&&n[0]+1>up) up=n[0]+1
    if(n[0]>x&&n[0]-1<down) down=n[0]-1
    if(n[1]<y&&n[1]+1>left) left=n[1]+1
    if(n[1]>y&&n[1]-1<right) right=n[1]-1
  }
  return (down-up+1)*(right-left+1)-1
}
*/