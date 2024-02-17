/* 
6kyu - Get your steppin' on son
https://www.codewars.com/kata/55e00266d494ce5155000032/train/javascript
*/

function wordStep(str) {
  let result = Array.from({ length: str.length }, () => Array.from({ length: str.length }).fill(' '));
  let isRight = true, x = 0, y = 0;
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (isRight) {
      for (let j = 0; j < words[i].length; j++) {
        result[y][x++] = words[i][j];
      }
    } else {
      --x; --y;
      for (let j = 0; j < words[i].length; j++) {
        ++y;
        result[y][x] = words[i][j];
      }
    }
    isRight = !isRight;
  }
  if (result[y][x] === ' ') --x;
  //console.log(result.map(row => row.slice(0, x + 1).join``).slice(0, y + 1));
  //  console.log('last row:', result[y], 'y=', y, 'x=', x);
  return result.map(row => row.slice(0, x + 1)).slice(0, y + 1);
}

let res1 = wordStep('HELLO OIL');
let exp1 = [['H', 'E', 'L', 'L', 'O'], [' ', ' ', ' ', ' ', 'I'], [' ', ' ', ' ', ' ', 'L']];
console.log(`res1:  H=${res1.length} W=${res1[0].length}   exp: H=${exp1.length} W=${exp1[0].length}`);
console.log(res1, "\n=>\n", exp1);
let exp2 = [['S', 'N', 'A', 'K', 'E', 'S', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', 'H', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', 'E', 'F', 'F', 'O', 'R', 'T', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'U', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'M', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'P', 'O', 'T', 'A', 'T', 'O']];
let res2 = wordStep('SNAKES SHOE EFFORT TRUMP POTATO');
console.log(`res2:  H=${res2.length} W=${res2[0].length}   exp: H=${exp2.length} W=${exp2[0].length}`);
console.log(res2, "\n=>\n", exp2);
// console.log(wordStep('CODEWARS SNAIL LAKE EEK'), [['C', 'O', 'D', 'E', 'W', 'A', 'R', 'S', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'N', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'A', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'I', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'L', 'A', 'K', 'E'], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'E'], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'K']])

// best

/* 
function wordStep(str) {
  var dir = [0, 1], row = 0, col = 0, act = [];
  str.split(' ').forEach(w => {
    w.split('').forEach((ch, i) => {
      act.push([row, col, ch]);
      if (i!==w.length-1) { row += dir[0]; col += dir[1]; }
    });
    dir.push(dir.shift());
  });
  var arr = [...Array(row+1)].map(r => [...Array(col+1)].map(c => ' '));
  act.forEach(a => arr[a[0]][a[1]] = a[2]);
  return arr;
}

*/