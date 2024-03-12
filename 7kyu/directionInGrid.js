/* 
6kyu - Simple Fun #183: Direction In Grid
https://www.codewars.com/kata/58bcd7f2f6d3b11fce000025/train/javascript

You're standing at the top left corner of an n × m grid and facing towards the right.

Then you start walking one square at a time in the direction you are facing.

If you reach the border of the grid or if the next square you are about to visit 
has already been visited, you turn right.

You stop when all the squares in the grid are visited. What direction will you be facing when you stop?
*/

/* 
Ошибка на граничных случаях
Когда упираеимся в стенку.
*/
function directionInGrid(n, m) {
  let leftMargin = 0, rightMargin = m, topMargin = 0, bottomMargin = n;
  if (n === 1 && m === 1) return 'R';
  if (n === 1) return "R";
  if (m === 1) return "D";
  let dir = [
    { to: 'R', stepX: 1, stepY: 0, next: () => topMargin++ },
    { to: 'D', stepX: 0, stepY: 1, next: () => rightMargin-- },
    { to: 'L', stepX: -1, stepY: 0, next: () => bottomMargin-- },
    { to: 'U', stepX: 0, stepY: -1, next: () => leftMargin++ }
  ];
  let dirId = 0;
  let x = 0, y = 0;
  while (true) {
    let steps = 0;
    let dx = dir[dirId].stepX, dy = dir[dirId].stepY;
    while (x + dx >= leftMargin && x + dx < rightMargin && y + dy >= topMargin && y + dy < bottomMargin) {
      x += dx;
      y += dy;
      steps++;
    }
    if (steps === 0) return dir[dirId].to;
    dir[dirId].next();
    let prevId = dirId;
    dirId = (dirId + 1) % 4;
    // проверяем крайний случай, когда уперлись в стену, а дальнеших ходов нет
    if (!(x + dir[dirId].stepX >= leftMargin && x + dir[dirId].stepX < rightMargin && y + dir[dirId].stepY >= topMargin && y + dir[dirId].stepY < bottomMargin)) {
      return dir[prevId].to;
    }
  }
}


console.log(directionInGrid(1, 1), "R")
console.log(directionInGrid(2, 2), "L")

console.log(directionInGrid(2, 3), "L")

console.log(directionInGrid(2, 4), "L")

console.log(directionInGrid(3, 1), "D") // FAIL

console.log(directionInGrid(3, 2), "U")

console.log(directionInGrid(3, 3), "R")

console.log(directionInGrid(3, 4), "R")

console.log(directionInGrid(3, 5), "R")

console.log(directionInGrid(4, 2), "U")

console.log(directionInGrid(4, 3), "D")

console.log(directionInGrid(4, 4), "L")

console.log(directionInGrid(4, 5), "L")

console.log(directionInGrid(4, 6), "L")

console.log(directionInGrid(5, 4), "U")

console.log(directionInGrid(5, 5), "R")

console.log(directionInGrid(5, 6), "R")

console.log(directionInGrid(100, 100), "L")

// best

/* 
const directionInGrid = (n, m) => n <= m ? 'LR'[n % 2] : 'UD'[m % 2]
*/

/* 
function directionInGrid(n,m){
  if (m >= n){
    return n % 2 ? "R":"L";
  } else {
    return m % 2 ? "D":"U";
  }
}
*/

/* 
function directionInGrid(n,m){
    while (true) {
        n--;
        if (n == 0)
            return 'R';

        m--;
        if (m == 0)
            return 'D';

        n--;
        if (n == 0)
            return 'L';

        m--;
        if (m == 0)
            return 'U';
    }
}
*/