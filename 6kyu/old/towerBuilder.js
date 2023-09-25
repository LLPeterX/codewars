/* 
6kyu - Build Tower Advanced
https://www.codewars.com/kata/57675f3dedc6f728ee000256/train/javascript
*/


function towerBuilder(nFloors, [bw, bh]) {
  let result = [];
  let stars = bw, spaces = bw * (nFloors - 1);
  while (nFloors--) {
    for (let i = 0; i < bh; i++) {
      result.push(' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces));
    }
    stars += bw * 2;
    spaces -= bw;
  }
  return result;
}

console.log(JSON.stringify(towerBuilder(1, [1, 1])), JSON.stringify(["*"]));
console.log(JSON.stringify(towerBuilder(3, [4, 2])), JSON.stringify(['        ****        ', '        ****        ', '    ************    ', '    ************    ', '********************', '********************']));

// best

/* 
function towerBuilder(n, [x,y]) {
  return [...Array(n)].reduce((a,b,i)=>a.concat(Array(y).fill(" ".repeat((n-i-1)*x)+"*".repeat((i*2+1)*x)+" ".repeat((n-i-1)*x))),[])
}
*/

/* 
function towerBuilder(nFloors, nBlockSz) {
  const w = nBlockSz[0], h = nBlockSz[1];
  const tower = [];
  
  for (let floor = 1; floor <= nFloors; floor++) {
    let stars = '*'.repeat(w * (floor * 2 - 1));
    let space = ' '.repeat(w * (nFloors - floor));
    for (let i = 0; i < h; i++) {
      tower.push(space + stars + space);
    }
  }
  
  return tower;
}
*/

/* 
function towerBuilder(nFloors, nBlockSz) {
  let [w, h] = nBlockSz;
  let floors = [];
  for (let i = 0, n = nFloors - 1; i < nFloors; ++i, --n) {
      for (let j = 0; j < h; j++)
          floors.push(Array(n * w + 1).join(" ") + Array((i * 2 + 1) * w + 1).join("*") + Array(n * w + 1).join(" "));
  }
  return floors;
}
*/