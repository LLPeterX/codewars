/* 
7kyu - Convert Hash To An Array
https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript
*/

function convertHashToArray(hash) {
  return Object.entries(hash).sort((a, b) => a[0].localeCompare(b[0]));
}

console.log(convertHashToArray({ name: "Jeremy" }), [["name", "Jeremy"]]);
console.log(convertHashToArray({ name: "Jeremy", age: 24 }), [["age", 24], ["name", "Jeremy"]]);
console.log(convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" }), [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
console.log(convertHashToArray({ product: "CodeWars", powerLevelOver: 9000 }), [["powerLevelOver", 9000], ["product", "CodeWars"]]);
console.log(convertHashToArray({}), []);

// best
/* 
const convertHashToArray = o => Object.entries(o).sort();
*/