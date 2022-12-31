/* 
7kyu - Dictionary from two lists
https://www.codewars.com/kata/5533c2a50c4fea6832000101/train/javascript

There are two lists, possibly of different lengths. 
The first one consists of keys, the second one consists of values. 
Write a function createDict(keys, values) that returns a dictionary created from keys and values. 
* If there are not enough values, the rest of keys should have a None (JS null)value. 
* If there not enough keys, just ignore the rest of values.

*/

function createDict(keys, values) {
  return keys.reduce((obj, key, i) => ({ ...obj, [key]: values[i] || null }), {});
}

console.log(createDict(['a', 'b', 'c'], [1, 2, 3]), { 'a': 1, 'b': 2, 'c': 3 })
console.log(createDict(['a', 'b', 'c'], [1, 2, 3, 4]), { 'a': 1, 'b': 2, 'c': 3 })
console.log(createDict(['a', 'b', 'c', 'd'], [1, 2, 3]), { 'a': 1, 'b': 2, 'c': 3, 'd': null })
