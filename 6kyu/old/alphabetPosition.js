/* 
6kyu - Replace With Alphabet Position
https://www.codewars.com/kata/546f922b54af40e1e90001da

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.
*/

function alphabetPosition(s) {
  return [...s].map(c => c.match(/[A-Z]/i) ? c.toUpperCase().charCodeAt() - 64 : 0).filter(Boolean).join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

console.log("A".match(/[A-Za-z]/));