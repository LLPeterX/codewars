/* 
6kyu - Logistic Map
https://www.codewars.com/kata/5779624bae28070489000146/train/javascript

Our AAA company is in need of some software to help with logistics: 
you will be given the width and height of a map, a list of x coordinates 
and a list of y coordinates of the supply points, starting to count 
from the top left corner of the map as 0.

Your goal is to return a two dimensional array/list with every item 
having the value of the distance of the square itself 
from the closest supply point expressed as a simple integer.

Quick examples:

logisticMap(3,3,[0],[0])
//returns
//[[0,1,2],
// [1,2,3],
// [2,3,4]]
logisticMap(5,2,[0,4],[0,0])
//returns
//[[0,1,2,1,0],
// [1,2,3,2,1]]
Remember that our company is operating with trucks, not drones, so you can simply use Manhattan distance. If supply points are present, they are going to be within the boundaries of the map; if no supply point is present on the map, just return None/nil/null in every cell.
*/

function logisticMap(width, height, xs, ys) {
  let arr = Array(height).fill().map(row => Array(width).fill(null));
  for (let k = 0; k < xs.length; k++) {
    let x = xs[k], y = ys[k];
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        let dist = Math.abs(col - x) + Math.abs(row - y);
        arr[row][col] = arr[row][col] === null ? dist : Math.min(dist, arr[row][col]);

        // if (arr[row][col] === null) {
        //   arr[row][col] = dist;
        // } else {
        //   arr[row][col] = Math.min(dist, arr[row][col]);
        // }
      }
    }

  }
  return arr;
}

console.log(logisticMap(3, 3, [0], [0]), [[0, 1, 2], [1, 2, 3], [2, 3, 4]]);
console.log(logisticMap(3, 3, [2], [2]), [[4, 3, 2], [3, 2, 1], [2, 1, 0]]);
console.log(logisticMap(1, 1, [0], [0]), [[0]]);
console.log(logisticMap(5, 2, [0, 4], [0, 0]), [[0, 1, 2, 1, 0], [1, 2, 3, 2, 1]]);
console.log(logisticMap(2, 2, [], []), [[null, null], [null, null]]);