/* 
6kyu - The Creep Inspector
https://www.codewars.com/kata/64d686bd6fad185db7ecf127

Given a room containing some creep, can you predict how the room looks like after the next generation?

A room is a \n delimited string containing:
- open space '.'
- walls '#'
 you may assert that any cell outside the bounds of the room is a wall
- creep 0 - 9.
  The number representing creep depicts its decay period (in number of generations) 
  before it dissappears from that cell. 
  The number 0 means the creep is no longer on that cell, but it was still there the previous generation.
  A generation is a transition from one state of the creep to the next, 
  where each piece of creep multiplies as much as possible.


*/

// хуйня.

function predict(room) {
  let grid = room
    .split("\n")
    .map((row) => [...`#${row}#`].map((c) => (/\d/.test(c) ? +c : c)));
  let top = Array(grid[0].length).fill("#");
  grid = [top, ...grid, top];

  const D = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  let newGen = JSON.parse(JSON.stringify(grid)).map((row) =>
    row.map((c) => (/\d/.test(c) ? 0 : c)),
  );
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[0].length - 1; j++) {
      if (grid[i][j] !== "." && grid[i][j] !== "#") {
        if (grid[i][j] == 0) {
          newGen[i][j] = ".";
          continue;
        } else newGen[i][j] = grid[i][j] - 1;
        for (let [dx, dy] of D) {
          let y = i + dy,
            x = j + dx;
          if (x < grid[0].length - 1 && y < grid.length && grid[y][x] === ".") {
            if (typeof newGen[y][x] === "number") {
              newGen[y][x] += grid[i][j] - 1;
              if (newGen[y][x] > 9) newGen[y][x] = 9;
            } else {
              newGen[y][x] = grid[i][j] - 1;
            }
          }
        }
      }
    }
  }
  return newGen
    .slice(1, -1)
    .map((row) => row.slice(1, -1).join(""))
    .join("\n");
}

// best

/* 
function predict(room) {
  const M = room.split('\n').map(r=>[...r.replace(/\d/g,'.')])
  room = room.split('\n').map(r=>[...r])
  room.forEach((r,i)=>r.forEach((c,j)=>{
    if(/[.0#]/.test(c)) return
    const n = +c-1
    M[i][j] = n
    ;[ [i-1,j],[i+1,j],[i,j-1],[i,j+1] ].forEach(([x,y])=>{
      if(( room[x]||[] )[y] == '.') M[x][y] = Math.min(9, n + ( M[x][y]!='.' && M[x][y] ))
    })      
  }))
  return M.map(r=>r.join('')).join('\n')
}
*/

/* 
function predict(room) {
  room = room.split('\n');
  var next = room.map(s => Array(s.length).fill('.'));
  for (var y = 0; y < room.length; y++)
    for (var x = 0; x < room[0].length; x++)
      switch (room[y][x]) {
        case '#': next[y][x] = '#'; break;
        case '0': next[y][x] = '.'; break;
        case '.':
          var n = [];
          if (x > 0) n.push(value(room[y][x-1]));
          if (y > 0) n.push(value(room[y-1][x]));
          if (x < room[0].length-1) n.push(value(room[y][x+1]));
          if (y < room.length-1) n.push(value(room[y+1][x]));
          n = n.filter(k => k >= 0);
          next[y][x] = n.length > 0 ? Math.min(9, n.reduce((a,b) => a+b)) : '.';
          break;
        default:
          next[y][x] = value(room[y][x]);
      }
  return next.map(r => r.join('')).join('\n');
}

function value(c) {
  return (c > '0' && c <= '9') ? c - 1 : -1;
}
*/
