/* 
7kyu - How Many Unique Consonants?
https://www.codewars.com/kata/5a19226646d843de9000007d/train/javascript
*/

function countConsonants(str) {
  //return new Set(str.toLowerCase().replace(/[aeiou]/gi, '').replace(/[^a-z]/gi, ''));
  return new Set(str.toLowerCase().replace(/[^a-z]|[aeiou]/gi, ''));
}

console.log(countConsonants("sillystring"), 7);
console.log(countConsonants("Count my unique consonants!!"), 7);