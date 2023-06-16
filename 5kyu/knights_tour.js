/* 
5kyu - A Knight's Tour
https://www.codewars.com/kata/5664740e6072d2eebe00001b/train/javascript

You will be asked to find a knight's path for any NxN board from any start position.
*/

// Warnsdorf algorythm from: https://www.geeksforgeeks.org/warnsdorffs-algorithm-knights-tour-problem/
function knights_tour(start, size) {
  const cx = [1, 1, 2, 2, -1, -1, -2, -2]; // move patterns of Knight
  const cy = [2, -2, 1, -1, 2, -2, 1, -1];

  const board = Array(size * size).fill(-1); // initial game board

  // --- functions ---
  const canMoveHere = (x, y) => (x >= 0 && y >= 0) && (x < size && y < size) && board[y * size + x] < 0;

  const getDegree = (x, y) => { // number of cells where the Knight can move
    let count = 0;
    for (let i = 0; i < 8; i++) {
      if (canMoveHere((x + cx[i]), (y + cy[i]))) count += 1;
    }
    return count;
  }

  const nextMove = (cell) => { // get next cell
    let minDegreeIndex = -1;
    let nx = ny = 0;
    let minDegree = size + 1;

    for (let i = 0; i < 8; i++) {
      nx = cell.x + cx[i];
      ny = cell.y + cy[i];
      let d = getDegree(nx, ny);
      if ((canMoveHere(nx, ny)) && d < minDegree) {
        minDegreeIndex = i;
        minDegree = d;
      }
    }

    if (minDegreeIndex === -1) return null;
    nx = cell.x + cx[minDegreeIndex];
    ny = cell.y + cy[minDegreeIndex];
    board[ny * size + nx] = board[(cell.y) * size + (cell.x)] + 1;
    cell.x = nx;
    cell.y = ny;
    return cell;
  }

  let [sx, sy] = start;
  let cell = { x: sx, y: sy };
  board[sy * size + sx] = 1;

  for (let i = 0; i < size * size - 1; i++)  nextMove(cell);

  const result = [];
  for (let i = 0; i < board.length; i++) result[board[i] - 1] = [i % size, Math.floor(i / size)];
  return result;
}

/*
function showBoard(b, n) {
  let res = [];
  for (let i = 0; i < b.length; i += n) {
    let v = b.slice(i, i + n).map(e => ("" + e).padEnd(2)).join(' ');
    res.push(v);
  }
  return res.join('\n');

}


*/
console.log(knights_tour([2, 2], 6));

// best

/* 
function knights_tour(start, size) {
  
  const dfsTravel=(x,y)=>{
    
    const cnds = neighs(x,y).map( ([i,j])=>[Warnsdorf[i][j],i,j] ).sort((a,b)=>a[0]-b[0])
    
    for(let [nNeighs,i,j] of cnds){
      if(nNeighs===Infinity) continue
      
      const subs = neighs(i,j)
      for(let [a,b] of subs) Warnsdorf[a][b]--
      Warnsdorf[i][j] = Infinity
      path.push([i,j])
      todo--
      
      dfsTravel(i,j)
      if(!todo) return path
      
      todo++
      path.pop()
      Warnsdorf[i][j] = nNeighs
      for(let [a,b] of subs) Warnsdorf[a][b]++
    }
  }
  
  const NEIGHS = [[2,1], [-2,1], [2,-1], [-2,-1], [1,2], [-1,2], [1,-2], [-1,-2]]
  
  const isInside          = (i,j) => i>=0 && i<size && j>=0 && j<size
  const neighs            = (x,y) => NEIGHS.map( ([i,j]) => [i+x,j+y] ).filter( ([i,j]) => isInside(i,j) )
  const nInitialNeighbors = (i,j) => 1<i && i<size-2 && 1<j && j<size-2 ? 8 : neighs(i,j).length
  
  const Warnsdorf = [...Array(size)].map((_,i,a)=>a.map((_,j)=>nInitialNeighbors(i,j)))
  Warnsdorf[start[0]][start[1]] = Infinity
  
  const path = [start]
  let   todo = size*size - 1
  
  return dfsTravel(...start)
}
*/