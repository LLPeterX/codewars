/* 
7kyu - Find the motif in DNA sequence.
https://www.codewars.com/kata/5760c1c7f2717b91e20001a4/train/javascript
*/

function motifLocator(sequence, motif) {
  let result = [], i = 0;
  while ((i = sequence.indexOf(motif, i)) >= 0) result.push(++i);
  return result;
}

console.log(motifLocator("TTCCGGAACC", "CC"), [3, 9]);
console.log(motifLocator("ACGTTACAACGTTAG", "ACGT"), [1, 9]);
console.log(motifLocator("ACGTACGTACGT", "AAA"), []);
console.log(motifLocator("ACGT", "ACGTGAC"), []);