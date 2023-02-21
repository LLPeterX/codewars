/* 
7kyu - The First Non Repeated Character In A String
https://www.codewars.com/kata/570f6436b29c708a32000826/train/javascript

You need to write a function, that returns the first non-repeated character in the given string.
*/

function firstNonRepeated(s) {
  const chars = [...s].reduce((o, c) => { o[c] = o[c] ? o[c] + 1 : 1; return o; }, {});
  let res = Object.entries(chars).filter(e => e[1] === 1);
  return res?.length ? res[0][0] : null;
}

console.log(firstNonRepeated('test'), 'e');
console.log(firstNonRepeated('teeter'), 'r');
console.log(firstNonRepeated('trend'), 't');
console.log(firstNonRepeated('aabbcc'), null);

// best
/* 
const firstNonRepeated = s => [...s].find(i => s.indexOf(i) == s.lastIndexOf(i)) || null
*/