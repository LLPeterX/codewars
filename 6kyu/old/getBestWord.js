/* 
6kyu - Scrabble best word
https://www.codewars.com/kata/563f960e3c73813942000015/train/javascript

*/

function getBestWord(points, words) {
  const getScore = (word, points) => [...word].reduce((s, v) => s + points[v.charCodeAt() - 65], 0);
  return words.map((w, i) => ({ score: getScore(w, points), index: i, word: w }))
    .sort((a, b) => b.score - a.score || a.word.length - b.word.length)[0].index;
}

var points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10, 10];
var simpleWords = ["WHO", "IS", "THE", "BEST", "OF", "US"];
var rndmWords = ["NOQ", "TXAY", "S", "OM", "ESFT", "CJUKQ", "QL", "QO", "ASTK", "Y"];
var firstBestWord = ["JGPCWVWFW", "JXHNKBJJG"];
console.log(getBestWord(points, simpleWords), 0);
console.log(getBestWord(points, rndmWords), 5);
console.log(getBestWord(points, firstBestWord), 0);

console.log(getBestWord([
  1, 3, 3, 2, 1, 4, 2, 4,
  1, 8, 10, 1, 2, 1, 1, 3,
  8, 1, 1, 1, 1, 4, 10, 10,
  10, 10
], ['AAA', 'B', 'A', 'E', 'I']), 1);

