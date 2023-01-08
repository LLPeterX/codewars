/* 
7kyu - Count consonants
https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript
*/

function consonantCount(str) {
  return str.replace(/[aeiou]/gi, '').replace(/[^a-z]/gi, '').length;
}

