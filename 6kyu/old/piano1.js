/* 
6kyu - Piano Kata, Part 1
https://www.codewars.com/kata/589273272fab865136000108


*/

function blackOrWhiteKey(keyPressCount) {
  const piano = "010" + "010100101010".repeat(7) + '0';
  return ['white', 'black'][piano[(keyPressCount - 1) % 88]];
}

// final:
// const blackOrWhiteKey = (k) => ['white', 'black'][("010" + "010100101010".repeat(7) + '0')[(k - 1) % 88]];

console.log(blackOrWhiteKey(1), "white")
console.log(blackOrWhiteKey(5), "black")
console.log(blackOrWhiteKey(12), "black")
console.log(blackOrWhiteKey(42), "white")
console.log(blackOrWhiteKey(88), "white")
console.log(blackOrWhiteKey(89), "white")
console.log(blackOrWhiteKey(92), "white")
console.log(blackOrWhiteKey(100), "black")
console.log(blackOrWhiteKey(111), "white")
console.log(blackOrWhiteKey(200), "black")
console.log(blackOrWhiteKey(2017), "white")

// best
/* 
function blackOrWhiteKey(keyPressCount) {    
    return ['black','white'] [ '101101011010'[((keyPressCount-1)%88)%12] ]
}
*/

/* 
const blackOrWhiteKey = keyPressCount =>
  [1, 4, 6, 9, 11].includes(--keyPressCount % 88 % 12) ? `black` : `white`;
*/

/* 
const blackOrWhiteKey = count => ['white', 'black'][(2642 >> ((count - 1) % 88) % 12) & 1]
*/