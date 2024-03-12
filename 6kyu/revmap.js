/* 
6kyu - Simple Fun #185: Revamp
https://www.codewars.com/kata/58bcfe1e23fee9fd95000007

Task
Consider a string of lowercase Latin letters and space characters (" ").

1. rearrange the letters in each word alphabetically.
2. rearrange the words in ascending order of the sum of their characters' ASCII values.
3. If two or more words have the same ASCII value, 
   rearrange them by their length in ascending order; 
   If their length still equals to each other, rearrange them alphabetically.

Finally, return the result.
*/

const ascii = (s) => [...s].reduce((v, c) => v + c.charCodeAt(), 0);
// function revamp(s) {
//   let words = s.split(' ').map(s => [...s].sort().join``);
//   words.sort((a, b) => ascii(a) - ascii(b) || a.localeCompare(b))
//   return words.join(' ');
// }

const revamp = (s) =>
  s.split(' ').map(s => [...s].sort().join``)
    .sort((a, b) => ascii(a) - ascii(b) || a.localeCompare(b))
    .join(' ');



console.log(revamp("batman is bruce wayne"))
console.log(revamp("peter parker is spiderman"), "is eeprt aekprr adeimnprs")