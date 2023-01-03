/* 
6kyu - More Zeros than Ones
https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript

Create a moreZeros function which will receive a string for input, 
and return an array containing only the characters from that string whose binary representation 
of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurence of any such duplicates, 
so they are in the same order in the final array as they first appeared in the input string.
*/

function moreZeros(s) {
  let res = new Set();
  for (let c of s) {
    if (!res.has(c)) {
      let bin = c.charCodeAt().toString(2);
      if ([...bin].filter(c => c === '0').length > bin.length / 2) {
        res.add(c);
      }
    }
  }
  return [...res];
}

console.log(moreZeros('abcde'), ['a', 'b', 'd'])
console.log(moreZeros('Great job!'), ['a', ' ', 'b', '!'])
console.log(moreZeros('DIGEST'), ['D', 'I', 'E', 'T'])
console.log(moreZeros('abcdeabcde'), ['a', 'b', 'd'], 'Should not return duplicates values')

// best
/* 
function moreZeros(s){
  let arrCodePoints = s.split('').map(c => c.charCodeAt(0)).map(n => n.toString(2));
  let chars = arrCodePoints.filter(s => s.split('0').length > s.split('1').length).map(s => parseInt(s, 2));
  let uniq = new Set(chars);
  return String.fromCharCode(...Array.from(uniq)).split('')
}
*/

/* 
const moreZeros = s =>
  [...new Set(s)].filter(val => val.charCodeAt().toString(2).replace(/1/g, ``).length > 3);
*/