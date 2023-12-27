/* 
6kyu - A Memory game array
https://www.codewars.com/kata/55437532b73f053bac000096/train/javascript

In the memory game, numbers are randomly placed face-down in a grid. Each turn, the player chooses a number to peek at, and then replace, face down. If they choose two of the same number in a row, those numbers are removed from the grid. The aim is to clear the board!

Your job is to produce an array of pairs of numbers, placed in a random spot in the array.

The array (and result) could look somthing like:

[3,1,2,1,3,2,4,4]
for an 8 tile memory game. (4 pairs). createTiles(8)

Your task is to implement the function createTiles(n) where n is the number of tiles. The function should return an array with the length n containing randomized, paired, integers starting with 1. Duplicate pairs are not allowed.

Notes:

If n is odd or zero, an empty array should be returned
A shuffled array should be returned. This will be tested, but rarely a proper shuffle can accidentally put the array back in the original order, which will fail the tests. Try again if you think this has happened.
0 <= n < 1000 for all tests.
*/

function createTiles(n) {
  if (!n || n % 2) return [];
  let indexes = Array(n).fill().map((_, i) => i);
  function getFreeIndex() {
    if (indexes.length === 1) return indexes[0];
    i = indexes[Math.floor(Math.random() * indexes.length)];
    indexes = indexes.filter(n => n != i);
    return i;
  }
  let output = Array(n).fill(0);
  for (let k = 1; k <= n / 2; k++) {
    let i = getFreeIndex();
    let j = getFreeIndex();
    output[i] = output[j] = k;
  }
  return output;
}

console.log(createTiles(8));
console.log(createTiles(20));

// best

/* 
function createTiles(n){
  return n && !(n%2) ? Array.apply(null, Array(n)).map(function(v, i){
    return ~~(i/2) + 1;
  }).sort(function(){
    return [-1, 1][~~(Math.random() * 2)];
  }) : [];
}
*/
