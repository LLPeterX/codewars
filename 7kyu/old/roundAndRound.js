/* 
7kyu - Simple Fun #296: Round And Round
https://www.codewars.com/kata/591e8c715b1d254f9e00005e/train/javascript

Ram lives in a house which is round in shape. The house has n entrances numbered from 1 to n. 
For each i in range 1..n-1 entrances i and i + 1 are adjacent; entrances 1 and n are also adjacent.

Ram's flat is located at entrance a. 
Each evening he goes for a walk around the house, counting the entrances he walks by. 
Today Ram decided to walk until he counts b entrances.

Help Ram to determine the number of the entrance near which he will be at the end of his walk.
*/

function roundAndRound(n, a, b) {
  if (b === 0) return a;
  if (b > 0) return ((a + b) % n) || n;
  return n + (a + b) % n;
}


console.log(roundAndRound(6, 2, -5), 3)
console.log(roundAndRound(5, 1, 3), 4)
console.log(roundAndRound(3, 2, 7), 3)
console.log(roundAndRound(100, 1, -1), 100)
console.log(roundAndRound(100, 54, 100), 54)
console.log(roundAndRound(97, 37, -92), 42)
console.log(roundAndRound(99, 41, 0), 41)
console.log(roundAndRound(35, 34, 1), 35)
console.log(roundAndRound(3, 2, -100), 1)
console.log(roundAndRound(1, 1, -100), 1)
console.log(roundAndRound(100, 1, -100000), 1)
console.log(roundAndRound(333, 222, 111), 333)

// best
/* 
function roundAndRound(n, a, b) {
  return (a+b%n+n)%n||n
}
*/