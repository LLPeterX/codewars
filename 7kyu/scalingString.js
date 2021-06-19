/* 
7kyu - Scaling Squared Strings
https://www.codewars.com/kata/56ed20a2c4e5d69155000301
*/

function scale(strng, k, n) {
  return strng.split(/\n/g).map(line => line.split('').map(ch => ch.repeat(k)).join(''))
  .map(row => (row+'\n').repeat(n)).map(row =>row.trim()).join('\n');
}

console.log(scale("abcd\nefgh\nijkl\nmnop",2,3));
// или так:
//const scale = (strng, k, n) => strng.split(/\n/g).map(line => line.split('').map(ch => ch.repeat(k)).join(''))
//  .map(row => (row+'\n').repeat(n)).map(row =>row.trim()).join('\n');

//best
/* 
const scale = (str, k, n) =>
  str
    .replace(/[^\n]/g,  c => Array(k + 1).join(c))
    .replace(/[^\n]+/g, c => Array(n + 1).join("\n" + c).slice(1));
*/