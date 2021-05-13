/* 
6kyu - Chess Fun #2: Bishop And Pawn
https://www.codewars.com/kata/589425c2561a35dd1a0000a2/train/javascript

Даны координаты белого слона и пешки.
Может ли слон убить пешку?
*/

function bishopAndPawn(bishop, pawn) {
  let xAxis = " abcdefgh";
  let bishopX=xAxis.indexOf(bishop[0]), bishopY = +bishop[1];
  let pawnX=xAxis.indexOf(pawn[0]), pawnY = +pawn[1];
  //console.log(`${bishop}/${pawn} : bx=${bishopX} by=${bishopY}, px=${pawnX}, py=${pawnY}`);    
  // array of possible diagonals of bishop
  let diags = [];
  // upper left
  let x=bishopX, y=bishopY;
  while(--x>0 && ++y<9) diags.push([x,y]);
  // upper right
  x=bishopX; y=bishopY;
  while(++x>0 && ++y<9) diags.push([x,y]);
  // lower left
  x=bishopX; y=bishopY;
  while(--x>0 && --y>0) diags.push([x,y]);
  // lower right
  x=bishopX; y=bishopY;
  while(++x<9 && --y>0) diags.push([x,y]);
  //console.log('diag:',diags);
  return diags.some(b =>  b[0]===pawnX && b[1]===pawnY);
  
}

console.log(bishopAndPawn("a1","c3"),true);
console.log(bishopAndPawn("h1","h3"),false);
console.log(bishopAndPawn("a5","c3"),true);
console.log(bishopAndPawn("g1","f3"),false);

// best
/* 
function bishopAndPawn(bishop, pawn) {
  return Math.abs(bishop[0].charCodeAt()-pawn[0].charCodeAt())===Math.abs(bishop[1]-pawn[1])
}
*/

/* 
function bishopAndPawn(b,p) {
  const [x0,y0] = [b.charCodeAt(0)-97, +b[1]-1];
  const [x1,y1] = [p.charCodeAt(0)-97, +p[1]-1];
  return Math.abs(x0-x1) == Math.abs(y0-y1);
}
*/