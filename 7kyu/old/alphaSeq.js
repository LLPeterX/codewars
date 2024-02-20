/* 
7kyu - Alphabetical Sequence
https://www.codewars.com/kata/5bd00c99dbc73908bb00057a/train/javascript
*/

function alphaSeq(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arr = [...str.toLowerCase()].sort();
  return arr.map(l => l.toUpperCase() + l.repeat(alphabet.indexOf(l))).join(',');
}

console.log(alphaSeq("HbideVbxncC"), "Bb,Bb,Ccc,Ccc,Dddd,Eeeee,Hhhhhhhh,Iiiiiiiii,Nnnnnnnnnnnnnn,Vvvvvvvvvvvvvvvvvvvvvv,Xxxxxxxxxxxxxxxxxxxxxxxx");

// best
/* 
const alphaSeq=(s) => [...s.toLowerCase()].sort().map(c=>c.toUpperCase()+c.repeat(c.charCodeAt()-97)).join`,`;
*/