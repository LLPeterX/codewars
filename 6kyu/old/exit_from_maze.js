/* 
6kyu - Bouncing Beams (Pt. 1)
https://www.codewars.com/kata/5cbf57a636240b0025b09396/train/javascript

Given maze in form
"##############",
"#        \   #",
"*   \        #",
"#            #",
"#   \    /   #",
"##############"

calculate point of exit (x,y) and length of beam

* marks the origin of the beam; the beam will start from here, 
orthogonally to the boundary. 
Note that \ may require escaping, depending on the language (see example tests). 
In the example, the beam will move like this:

"##############",
"o--------\   #",
"*---\    |   #",
"#   |    |   #",
"#   \----/   #",
"##############"
o marks the exit point of the beam. Given the maze in the example, 
the solution would be a pair of position and distance: 
{
    position: [0, 1],
    distance: 22
  };. 
Each character counts as one unit distance, and only boxes inside the maze are counted.
*/

function exit_from_maze(board) {
  const W = board[0].length, H = board.length;
  const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]]; // left, up, right, down as [dX, dY]
  const dirMap = {
    '\\': [1, 0, 3, 2],
    '/': [3, 2, 1, 0]
  };
  const startIndex = board.join('').indexOf('*');
  let y = ~~(startIndex / W), x = startIndex % W;
  let direction;
  if (x === 0) direction = 2; // right
  else if (y === 0) direction = 3; // down
  else if (x === W - 1) direction = 0; // left
  else direction = 1;
  //console.log(`start direction=${direction} start=${x},${y}`);
  let distance = 0;
  //while (x && y && x != sx && y != sy && x != W - 1 && y != H - 1) {
  do {
    x += directions[direction][0];
    y += directions[direction][1];
    //switch (board[y][x]) {
    //   case '\\':
    //     if (direction == 0) direction = 1; // to left -> up
    //     else if (direction == 1) direction = 0; // to up -> left
    //     else if (direction == 2) direction = 3; // to right -> down
    //     else if (direction == 3) direction = 2; // to down -> right
    //     // --direction;
    //     // if (direction < 0) direction = 3;
    //     break;
    //   case '/':
    //     if(direction==0) direction=3; // to left->down
    //     else if(direction==1) direction=2;// to up->right
    //     else if(direction==2) direction=1; // to right->up
    //     else direction=0; // to down->left
    //     break;
    // }
    if (dirMap[board[y][x]]) {
      direction = dirMap[board[y][x]][direction];
    }
    distance++;
  } while (x && y && x != W - 1 && y != H - 1)

  return {
    position: [x, y],
    distance: distance - 1
  };
}

let board = [
  "##############",
  "#        \\   #",
  "*   \\        #",
  "#            #",
  "#   \\    /   #",
  "##############"
];

console.log(exit_from_maze(board));

// best

/* 
const TURNS={'/':  {'0,1':[-1,0],'0,-1':[1,0], '1,0':[0,-1],'-1,0':[0,1]},
             '\\': {'0,1':[1,0], '0,-1':[-1,0],'1,0':[0,1], '-1,0':[0,-1]} };
             
function exit_from_maze(board){
  let [x,y] = board.map((r,x)=>[x,r.indexOf('*')]).filter(xy=>xy[1]!=-1)[0];
  let dirs  = !y ? [0,1]
            : !x ? [1,0]
            : x==board.length-1 ? [-1,0] : [0,-1];
  let c=-1, [dx,dy] = dirs;
  for(; board[x][y]!='#' ; c++){
      x+=dx; y+=dy;
      dirs = [dx,dy] = (TURNS[board[x][y]]||{})[dirs] || dirs;
  }
  return {position: [y,x], distance: c};
}
*/

/* 
function exit_from_maze(board) {
  let X = board.findIndex(r => r.includes('*'));
  let Y = board[X].indexOf('*');
  let dX = X === 0 && 1 || X === board.length - 1 && -1 || 0;
  let dY = Y === 0 && 1 || Y === board[0].length - 1 && -1 || 0;
  
  
  for (let i = 0;; i++) {
    X += dX; Y += dY;
      switch (board[X][Y]) {
        case '#':
          return { position: [Y,X], distance: i };
        case '/':
          [dX, dY] = [-dY, -dX];
          break;
        case '\\':
          [dX, dY] = [dY, dX];
    }
  }
}
*/