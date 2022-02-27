/* 
7kyu - Counting DNA Nucleotides
https://www.codewars.com/kata/52e84c460d83dd96e50000dd/train/javascript

For a given DNA genetic code represented by a string, count the number of times the letters A (adenine), C (cytosine), G (guanine) and T (thymine) appears and return and object.

The input string may contain both upper and lower case characters.
*/

function getCountedNucleotides(genCode, s = genCode.toLowerCase()) {
  return {
    'A': s.split('a').length - 1,
    'C': s.split('c').length - 1,
    'G': s.split('g').length - 1,
    'T': s.split('t').length - 1
  };

}

var genCode = 'aCCggT';

console.log(getCountedNucleotides(genCode)); // return {A: 1, C: 2, G: 2, T: 1}