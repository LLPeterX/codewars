/* 
5kyu - Is the King in check ?
https://www.codewars.com/kata/5e28ae347036fa001a504bbe


*/

// here is old valid solution
/*
function kingIsInCheck(chessboard) {

  function checkHorizontal(currentX, currentY, limit) {
    const transformMatrix = [-1, 1];
    for (let stepX of transformMatrix) {
      for (let x = currentX + stepX, i = 0; x >= 0 && x < 8 && i < limit; x += stepX, i++) {
        if (chessboard[currentY][x] !== ' ') {
          if (chessboard[currentY][x] === '♔') return true;
          break;
        }
      }
    }
    return false;
  }

  function checkDiagonal(currentX, currentY, limit) {
    const transformMatrix = [
      [-1, -1], [1, -1], [1, 1], [-1, 1]
    ];
    for (let [stepX, stepY] of transformMatrix) {
      for (let x = currentX + stepX, y = currentY + stepY, i = 0; x >= 0 && x < 8 && y >= 0 && y < 8 && i < limit; x += stepX, y += stepY, i++) {
        if (chessboard[y][x] !== ' ') {
          if (chessboard[y][x] === '♔') return true;
        }
      }

    }
    return false;
  }

  function checkKnight(currentX, currentY) {
    const transformMatrix = [
      [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]
    ];
    for (let [stepX, stepY] of transformMatrix) {
      if (chessboard[currentY + stepY][currentX + stepX] == '♔') return true;
    }
    return false;
  }


  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let figure = chessboard[i][j];
      switch (figure) {
        case '♛':
          if (checkHorizontal(j, i, 8)) return true;
          if (checkDiagonal(j, i, 8)) return true;
          break;
        case '♝':
          if (checkDiagonal(j, i, 8)) return true;
          break;
        case '♞':
          if (checkKnight(j, i)) return true;
          break;
        case '♜':
          if (checkHorizontal(j, i, 8)) return true;
          break;
        case '♟':
          if (checkDiagonal(j, i, 1)) return true;
          break;
        default:
          break;
      }
    }
  }
  return false;
}
*/

function kingIsInCheck(chessboard) {

  function checkMove(currentX, currentY, moveMatrix, limit) {
    for (let [stepX, stepY] of moveMatrix) {
      for (let x = currentX + stepX, y = currentY + stepY, i = 0; x >= 0 && x < 8 && y >= 0 && y < 8 && i < limit; x += stepX, y += stepY, i++) {
        if (chessboard[y][x] !== ' ') {
          if (chessboard[y][x] === '♔') return true;
          break;
        }
      }
    }
    return false;
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let figure = chessboard[i][j];
      switch (figure) {
        case '♛': // queen
          if (checkMove(j, i, [[-1, 0], [1, 0]], 8) || checkMove(j, i, [[0, -1], [0, 1]], 8) || checkMove(j, i, [[-1, -1], [1, -1], [1, 1], [-1, 1]], 8)) return true;
          break;
        case '♝': // bishop
          if (checkMove(j, i, [[-1, -1], [1, -1], [1, 1], [-1, 1]], 8)) return true;
          break;
        case '♞': // knight
          if (checkMove(j, i, [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]], 1)) return true;
          break;
        case '♜': // rook
          if (checkMove(j, i, [[-1, 0], [1, 0], [0, -1], [0, 1]], 8)) return true;
          break;
        case '♟': // pawn
          if (checkMove(j, i, [[-1, 1], [1, 1]], 1)) return true;
          break;
        default:
          break;
      }
    }
  }
  return false;
}

const board1 = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '♟', ' ', ' ', ' ', ' '],
  [' ', ' ', '♔', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
//console.log(kingIsInCheck(board1), true);
const board2 = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', '♝'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['♔', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
//console.log(kingIsInCheck(board2), true);

const board3 = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '♔', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['♞', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
//console.log(kingIsInCheck(board3), true);

const board4 = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['♛', ' ', ' ', '♞', ' ', ' ', ' ', '♛'],
  [' ', ' ', ' ', '♔', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
//console.log(kingIsInCheck(board4), false);

const b5 = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '♛', ' ', '♔', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
//console.log(kingIsInCheck(b5), true);

const b6 = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['♜', ' ', '♝', '♔', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
console.log(kingIsInCheck(b6), false);

// best

/* 
const KING = '♔', S=8;
const TOME = {
    '♛': {propagate:S, moves: [[1,1],[1,-1],[-1,1],[-1,-1],[0,1],[0,-1],[-1,0],[1,0]]},
    '♝': {propagate:S, moves: [[1,1],[1,-1],[-1,1],[-1,-1]]},
    '♜': {propagate:S, moves: [[0,1],[0,-1],[-1,0],[1,0]]},
    '♞': {propagate:1, moves: [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[-1,2],[1,-2],[-1,-2],]},
    '♟': {propagate:1, moves: [[1,1],[1,-1]]}, 
};

function kingIsInCheck (bd) {
    const isValid = (p,x,y,i) => 0<=x&&x<S && 0<=y&&y<S && i<p.propagate;
    const kingInLine = (p,a,b) => p.moves.some( ([dx,dy]) =>{
        for( let i=0, x=a+dx, y=b+dy ; isValid(p,x,y,i) ; i++, x+=dx, y+=dy ) {
                if(bd[x][y]==KING) return true;
                if(bd[x][y]!=' ')  return false;
        }
    });
    return bd.some( (r,a) => r.some( (c,b,_,p=TOME[c]) => p && kingInLine(p,a,b) ));
}
*/