/* 
6kyu - Count the Islands
https://www.codewars.com/kata/55a4f1f67157d8cbe200007b

Implement an algorithm which analyzes a two-color image and determines 
how many isolated areas of a single color the image contains.

"Остров" - это набор соседних пискелов 1, окруженных пикселами 0. 
Пикселы соседние, если их координаты отличаются на <=1 пикселов по осям X или Y.

*/


function showMap(map) {
  return map.map(row => row.join``).join('\n');
}

/* 
1) Найти 1
2) На всех соседях поставить 2
3) повторить п.1 пока не дойдем до конца массива
4) count = число 1

*/

function countIslands(image) {

  let count = 0;
  let visited = [];
  const isVisited = (y, x) => visited.length > 0 ? visited.find(v => v[0] === y && v[1] === x) : false;

  const markNeighboors = () => {
    const matrix = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];
    if (!visited.length) return;
    let [i, j] = visited.pop();
    for (let [y, x] of matrix) {
      if (i + y >= 0 && j + x >= 0 && y + i < image.length && x + j < image[0].length && image[i + y][j + x] == 1) {
        if (!isVisited(y + i, x + j)) {
          image[i + y][j + x] = 2;
          visited.push([i + y, j + x]);
          markNeighboors(i + y, j + x);
        }
      }
    }
  }

  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[0].length; j++) {
      if (image[i][j] === 1) {
        image[i][j] = 3;
        visited.push([i, j]);
        markNeighboors();
        count++;
      }
    }
  }
  return count;
}


let map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

console.log(countIslands(map));
let map0 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
console.log(countIslands(map0));

let map1 = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

console.log(countIslands(map1));

// best
/* 
function countIslands(image){
  let result = 0;
  const directions = [[0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], [1, 1]];

  const checkAround = (i, j) => {
    if (image[i] && image[i][j]) image[i][j] = 0; else return;
    directions.forEach((dir) => {
      checkAround(i + dir[0], j + dir[1]);
    })
  };
  
  image.forEach((row, i) => {
     row.forEach((el, j) => {
       if (el) {
         result++;
         checkAround(i, j);
       }
     });
  });
  
  return result;
}
*/