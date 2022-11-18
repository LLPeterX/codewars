/* 
7kyu - Ordered Count of Characters
https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = function (text) {
  const counts = new Map();
  [...text].forEach(c => {
    counts.set(c, counts.has(c) ? counts.get(c) + 1 : 1);
  });
  return Array.from(counts);
}

console.log(orderedCount("233312"));
console.log(orderedCount("abracadabra"));

// best

/* 
const orderedCount = s =>
  Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));
*/

/* 
var orderedCount = function (text) {
  return Array.from(new Set(text)).map(c => [c, text.match(new RegExp(c, 'g')).length]);
}
*/

/* 
const orderedCount = text => [...new Set(text)].map(ch => [ch, text.split(ch).length - 1]);
*/