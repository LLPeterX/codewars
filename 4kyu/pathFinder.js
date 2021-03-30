/* 
https://www.codewars.com/kata/5765870e190b1472ec0022a2/train/javascript
*/
function pathFinder(maze) {
  function find(x, y) {
    if (x < 0 || y < 0 || x >= N || y >= N) {
      return false;
    } else if (mz[x][y] != '.') {
      return false;
    } else if (x === N - 1 && y === N - 1) {
      mz[x][y] = 'p';
      return true;
    } else {
      mz[x][y] = 'p';
      if (find(x - 1, y) ||
        find(x, y + 1) ||
        find(x + 1, y) ||
        find(x, y - 1)) {
        return true;
      }
      mz[x][y]='b';
      return false;
    }
  }

  let mz = maze.split('\n').map(row => row.trim().split(''));
  let N=mz.length;
  find(0,0);
  return mz[N-1][N-1] === 'p';
}