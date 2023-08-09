/* 
6kyu - The Deaf Rats of Hamelin (2D)
https://www.codewars.com/kata/5c1448e08a2d87eda400005f/train/javascript

На площади есть крысы и Крысолов.
Определить глухих крыс (которые не двигаются к Красолову)
*/

function countDeafRats(townSquare) {
  const mouseMoves = {
    '←': [-1, 0],
    '↑': [0, -1],
    '→': [1, 0],
    '↓': [0, 1],
    '↖': [-1, -1],
    '↗': [1, -1],
    '↘': [1, 1],
    '↙': [-1, 1]
  };
  let piper, mouses = [];
  for (let i = 0; i < townSquare.length; i++) {
    for (let j = 0; j < townSquare[0].length; j++) {
      if (townSquare[i][j] === 'P') {
        piper = [j, i];
      } else if (townSquare[i][j] in mouseMoves) {
        let m = mouseMoves[townSquare[i][j]];
        mouses.push([[j, i], [j + m[0], i + m[1]]]);
      }
    }
  }
  let count = 0, [px, py] = piper;
  for (let [[origX, origY], [newX, newY]] of mouses) {
    let d0 = Math.sqrt((origX - px) ** 2 + (origY - py) ** 2);
    let d1 = Math.sqrt((newX - px) ** 2 + (newY - py) ** 2);
    if (d1 > d0) count++;
  }
  return count;
}

let townSquare = [
  "        ↗",
  "P ↓   ↖ ↑",
  "    ←   ↓",
  "  ↖ ↙   ↙",
  "↓ ↓ ↓    "
];
console.log(countDeafRats(townSquare), 7);

townSquare = [
  "↗ P     ",
  "  ↘    ↖",
  "  ↑     ",
  "↗       "
];
console.log(countDeafRats(townSquare), 1);

townSquare = [
  "↘ ↓ ↙",
  "→ P ←",
  "↗ ↑ ↖"
];
console.log(countDeafRats(townSquare), 0);

// my best
