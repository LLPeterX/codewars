/* 
6kyu - Bingo!
https://www.codewars.com/kata/5af304892c5061951e0000ce/train/javascript

Given a random bingo card and an array of called numbers, determine if you have a bingo!

Parameters: card and numbers arrays.

Example input:

card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
]

numbers = ['B1', 'I16', 'N31', 'G46', 'O61']

Output: true if you have a bingo, false if you do not.

You have a bingo if you have a complete row, column, or diagonal - each consisting of 5 numbers, 
or 4 numbers and the FREE SPACE.

Constraints:
Each column includes 5 random numbers within a range (inclusive):
'B':  1 - 15
'I': 16 - 30
'N': 31 - 45
'G': 46 - 60
'O': 61 - 75

Notes:
- All numbers will be within the above ranges.
- FREE SPACE will not be included in the numbers array but always counts towards a bingo.
- The first array of the card is the column headers.
- numbers array will include only tiles present in the card, without duplicates.
*/


function bingo(card, numbers) {
  let ourNumbers = numbers.map(v => +v.slice(1));
  let allCombos = [...card.slice(1)]; // rows w/o header
  let diag1 = [], diag2 = [];
  for (let x = 0; x < 5; x++) { // cols & diagonals
    let col = [];
    for (let y = 1; y < 6; y++) col.push(card[y][x]);
    allCombos.push(col);
    diag1.push(card[5 - x][x]); // BL->RU
    diag2.push(card[x + 1][x]); // UL->BR
  }
  allCombos.push(diag1);
  allCombos.push(diag2);
  for (let row of allCombos) {
    let matchedCount = row.filter(v => ourNumbers.includes(v)).length;
    if (matchedCount === 5) return true;
    if (matchedCount === 4 && row.includes('FREE SPACE')) return true;
  }
  return false;
}



let card = [
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]
];

let a = ['B1', 'I16', 'N31', 'G46', 'O61'];
let b = ['B1', 'I16', 'N31', 'G46', 'O63'];
let c = ['B1', 'I16', 'N31', 'G46']; // length => false
let d = ['B1', 'I16', 'N31', 'G46', 'O63', 'O61']; // G46 мимо



console.log(bingo(card, a), true);
console.log(bingo(card, b), false);
console.log(bingo(card, c), false);
console.log(bingo(card, d), true);

// FAIL
console.log(bingo([
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]], ['B5', 'I20', 'G50', 'O65']), true);

console.log(bingo([
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]], ['B5', 'G50', 'I20', 'O65']
), true);

console.log(bingo([
  ['B', 'I', 'N', 'G', 'O'],
  [1, 16, 31, 46, 61],
  [3, 18, 33, 48, 63],
  [5, 20, 'FREE SPACE', 50, 65],
  [7, 22, 37, 52, 67],
  [9, 24, 39, 54, 69]], ['B6', 'I19', 'G51', 'O66']), false);


console.log(bingo([['B', 'I', 'N', 'G', 'O'],
[1, 20, 41, 55, 71],
[12, 30, 38, 54, 68],
[7, 23, 'FREE SPACE', 46, 63],
[8, 27, 34, 50, 73],
[14, 24, 35, 48, 65]], ['I20',
  'N41',
  'G55',
  'N38',
  'G54',
  'O68',
  'B7',
  'G46',
  'I27',
  'N34',
  'G50',
  'N35',
  'G48']), true);


// best

/*
unction bingo(card, numbers) {
let draw = [0]; numbers.forEach(number => draw.push(parseInt(number.slice(1))||0));// eliminate letters in drawn numbers and taransform free space into zero
let horizontal = card.slice(1); // eliminate first row of letters
let vertical = horizontal[0].map((_, c) => horizontal.map(r => r[c])); // add horizontal arrays by concatenanting its transpose
let diagonal1 = [horizontal.map((row,index) => row[index])]; // extract diagonal from horizontal arrays
let diagonal2 = [horizontal.map((row,index) => row[horizontal.length-1-index])]; // extract diagonal from horizontal arrays
let hand = [].concat(horizontal, vertical, diagonal1, diagonal2); // concatenates in one large array for testing wining match
hand = hand.map(row => row.map(number => number == "FREE SPACE" ? 0 : number)); // taransform free space into zero

let result = hand.map(row => row.every(tile => draw.indexOf(tile) > -1)).reduce((result, test) => result || test, false);

return result;
}
*/

/* 
const bingo = (s, n) =>
      s.slice(1)
       .concat(s.slice(1).map((_,i)=> s.map((_,j)=> s[j][i])))
       .concat([s[0].map((_,i)=> s[i+1][i])])
       .concat([s[0].map((_,i)=> s[i+1][ s[0].length-i-1])])
       .map(r=> r.filter(Number))
       .some(e=> e.length <= n.length && 
                 e.every(x=> n.map(m=> +m.slice(1)).includes( x )) );
*/

/* 
function bingo(card, numbers) {

  let strategies = [
    0b1111100000000000000000000,
    0b0000011111000000000000000,
    0b0000000000110110000000000,
    0b0000000000000001111100000,
    0b0000000000000000000011111,
    0b1000010000100001000010000,
    0b0100001000010000100001000,
    0b0010000100000000010000100,
    0b0001000010000100001000010,
    0b0000100001000010000100001,
    0b1000001000000000001000001,
    0b0000100010000000100010000
  ];

  let flat = [].concat(...card.slice(1)).map((n, i) => 'BINGO'[i % 5] + n);

  let state = numbers.reduce((a, b) => { 
    let pos = flat.indexOf(b);
    return a | 2 ** pos * (pos !== -1);
  }, 0);

  return strategies.some(strategy => (state & strategy) === strategy);
  
}
*/