/* 
6kyu - Bomb has been planted!
https://www.codewars.com/kata/6621b92d6d4e8800178449f5/train/javascript

The bomb has been planted and you are the last CT (Counter Terrorist) alive
You need to defuse the bomb in time!

Given a matrix m and an integer time representing the seconds left 
before the bomb detonates, determine if it is possible to defuse the bomb in time. 
The time limit is inclusive.

In the matrix m:

"CT" represents the counter terrorist
"B" represents the bomb
"K" represents the kit
"0" represents empty space
The defuse kit may or may not be present in the matrix

You can defuse the bomb in 2 ways:
+
-If you defuse the bomb without the defuse kit, it will cost 10 seconds
-If you defuse the bomb with the defuse kit, it will cost only 5 seconds
-Each move the CT makes in any direction costs 1 second

The CT can move diagonally, horizontally and vertically.
*/

// try use BFS because K can be between CT & B
function getPathLength(matrix, startPoint, endPoint) {
  const dirs = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];
  const grid = Array.from(matrix, () => Array(matrix[0].length).fill(0));
  const endID = matrix[endPoint.y][endPoint.x];
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      grid[y][x] = matrix[y][x] === "0" ? 0 : matrix[y][x];
    }
  }
  const queue = [{ x: startPoint.x, y: startPoint.y, value: 1 }];
  grid[startPoint.y][startPoint.x] = 1;
  while (queue.length > 0) {
    let { x, y, value } = queue.shift();
    if (x === endPoint.x && y === endPoint.y) {
      // got the end
      let path = [{ x, y }];
      while (value > 1) {
        for (let [dx, dy] of dirs) {
          if (
            x + dx >= 0 &&
            x + dx < grid[0].length &&
            y + dy >= 0 &&
            y + dy < grid.length &&
            grid[y + dy][x + dx] === value - 1
          ) {
            x += dx;
            y += dy;
            path.push({ x, y });
            --value;
          }
        }
      }
      return path.length - 1;
    }
    for (let [dx, dy] of dirs) {
      if (
        x + dx >= 0 &&
        x + dx < grid[0].length &&
        y + dy >= 0 &&
        y + dy < grid.length &&
        (grid[y + dy][x + dx] === 0 || grid[y + dy][x + dx] === endID)
      ) {
        queue.push({ x: x + dx, y: y + dy, value: value + 1 });
        grid[y + dy][x + dx] = value + 1;
      }
    }
  }
  return 1e9;
}

function bombHasBeenPlanted(map, time) {
  let bomb = null,
    ct = null,
    kit = null;
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
      if (map[y][x] === "CT") ct = { y, x };
      else if (map[y][x] === "B") bomb = { y, x };
      else if (map[y][x] === "K") kit = { y, x };
    }
  }
  if (!bomb || !ct) return false;
  let distanceToBomb = getPathLength(map, ct, bomb);
  let timeToBomb = distanceToBomb + 10;
  if (kit) {
    timeToBomb = Math.min(
      timeToBomb,
      getPathLength(map, ct, kit) + getPathLength(map, kit, bomb) + 5,
    );
  }

  return timeToBomb <= time;
}

// --------------- TESTS -----------------
// const map0 = [
//   ["0", "0", "0", "0", "B"],
//   ["0", "0", "0", "0", "CT"],
//   ["0", "0", "0", "0", "0"],
//   ["0", "K", "0", "0", "0"],
// ];
// console.log(bombHasBeenPlanted(map0, 14), 1);

// const map1 = [
//   ["CT", "0", "0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "0", "B"],
// ];
// console.log(bombHasBeenPlanted(map1, 7), false);

// const map2 = [["CT", "B", "0", "0", "0"]];
// console.log(bombHasBeenPlanted(map2, 9), false);

// const map3 = [
//   ["CT", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
//   ["0", "0", "0", "B", "0"],
//   ["0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];
// console.log(bombHasBeenPlanted(map3, 13), true);

// const map4 = [
//   ["0", "0", "0", "CT"],
//   ["0", "0", "0", "0"],
//   ["B", "0", "0", "0"],
// ];

// console.log(bombHasBeenPlanted(map4, 13), true);

// const map5 = [
//   ["0", "0", "0", "0", "0", "0"],
//   ["CT", "0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "B"],
//   ["0", "0", "0", "0", "0", "0"],
//   ["0", "0", "K", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "0"],
// ];
// console.log(bombHasBeenPlanted(map5, 13), true);

// const map6 = [
//   ["0", "K", "0", "CT"],
//   ["0", "0", "0", "0"],
//   ["0", "0", "0", "0"],
//   ["B", "0", "0", "0"],
// ];
// console.log(bombHasBeenPlanted(map6, 12), true);

// best

/* 
function bombHasBeenPlanted(map, time) {
  
  const ctPos = getPos(map, "CT")
  const bombPos = getPos(map, "B")
  const kitPos = getPos(map, "K")
  
  const ctToBomb = distance(ctPos, bombPos)
  const ctToKit = distance(ctPos, kitPos)
  const kitToBomb = distance(kitPos, bombPos)
  
  const directTime = ctToBomb + 10
  const kitTime = ctToKit + kitToBomb + 5
  
  const minTime = Math.min(directTime, kitTime)
  
  return minTime <= time
  
}

function getPos(map, t) {
  for(let y = 0; y < map.length; y++) {
    for(let x = 0; x < map[y].length; x++) {
      if(map[y][x]===t) {
        return [x,y]
      }
    } 
  }
  return null
}

function distance(a, b) {
  if(!a || !b) return Infinity
  const xDistance = Math.abs(b[0] - a[0])
  const yDistance = Math.abs(b[1] - a[1])
  return Math.max(xDistance, yDistance)
}

*/
