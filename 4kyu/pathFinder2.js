/* 
https://www.codewars.com/kata/57658bfa28ed87ecfa00058a/train/javascript
*/
function pathFinder(maze) {
  let matrix = maze.split('\n').map(row => row.trim().split('').map(c => c == '.' ? 0 : 1));
  let N = matrix.length;
  if(N<2) {
    return 0;
  }
  let queue = [];
  matrix[0][0] = 1;
  queue.push([[0,0]]);
  while (queue.length) {
    let path = queue.shift(), pos = path[path.length - 1];
    let direction = [
      [pos[0] + 1, pos[1]],
      [pos[0], pos[1] + 1],
      [pos[0] - 1, pos[1]],
      [pos[0], pos[1] - 1]
    ];
    for (let i = 0; i < direction.length; i++) {
      if (direction[i][0] == N - 1 && direction[i][1] == N - 1) {
        return path.length;
      }
      if (direction[i][0] < 0 || direction[i][0] >= matrix[0].length ||
        direction[i][1] < 0 || direction[i][1] >= matrix[0].length ||
        matrix[direction[i][0]][direction[i][1]] != 0) {
        continue;
      }
      matrix[direction[i][0]][direction[i][1]] = 1;
      queue.push(path.concat([direction[i]]));
    }
  }
  return false;
}