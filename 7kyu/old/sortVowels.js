/* 
7kyu - Sort the Vowels
https://www.codewars.com/kata/59e49b2afc3c494d5d00002a/train/javascript
*/

function sortVowels_old(s) {
  if (typeof s !== 'string') {
    return "";
  }
  return [...s].map(c => /[aeiouy]/i.test(c) ? '|' + c : c + '|').join("\n");
}

// simple:
const sortVowels = (s) => typeof s === 'string' ? [...s].map(c => /[aeiou]/i.test(c) ? '|' + c : c + '|').join("\n") : "";

console.log(sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
console.log(sortVowels('Rnd Te5T'), 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|');
console.log(sortVowels(1337), '');
console.log(sortVowels(undefined), '');