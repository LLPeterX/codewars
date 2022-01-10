/* 
7kyu - Scrabble Score
https://www.codewars.com/kata/558fa34727c2d274c10000ae/train/javascript
Write a program that, given a word, computes the scrabble score for that word.

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10

There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.
*/

const $dict = {
  'A': 1,
  'E': 1,
  'I': 1,
  'O': 1,
  'U': 1,
  'L': 1,
  'N': 1,
  'R': 1,
  'S': 1,
  'T': 1,
  'D': 2,
  'G': 2,
  'B': 3,
  'C': 3,
  'M': 3,
  'P': 3,
  'F': 4,
  'H': 4,
  'V': 4,
  'W': 4,
  'Y': 4,
  'K': 5,
  'J': 6,
  'X': 6,
  'Q': 10,
  'Z': 10
}
/* 
function scrabbleScore(str) {
  //  let str1 = str.replace(/\s/g, '').toUpperCase();
  let o = [...str.replace(/\s/g, '').toUpperCase()].reduce((s, v) => { s[v] = s[v] ? s[v] + $dict[v] : $dict[v]; return s; }, {});
  return Object.values(o).reduce((s, v) => s + v, 0);
}
 */

function scrabbleScore(str) {
  return Object.values([...str.replace(/\s/g, '').toUpperCase()].reduce((s, v) => { s[v] = s[v] ? s[v] + $dict[v] : $dict[v]; return s; }, {})).reduce((s, v) => s + v, 0);
}


console.log(scrabbleScore(""), 0);
console.log(scrabbleScore(" a"), 1);
console.log(scrabbleScore("st re et"), 6);
console.log(scrabbleScore("street"), 6);

// best

/* 
function scrabbleScore(str){
  return str.toUpperCase().split('').reduce(function(score,v){ return score + ($dict[v]||0)},0)
}/
*/