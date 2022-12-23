/* 
6kyu - Duplicates. Duplicates Everywhere.
https://www.codewars.com/kata/5e8dd197c122f6001a8637ca

You are given a table, in which every key is a stringified number, and each corresponding value 
is an array of characters, e.g.
{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}

Сreate a function that returns a table with the same keys, but each character should appear 
only once among the value-arrays, e.g.

{
  "1": ["C"],
  "2": ["A", "B", "D"],
}

Rules:
1) Whenever two keys share the same character, they should be compared numerically,
   and the larger key will keep that character. 
   That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
2) If duplicate characters are found in the same array, the first occurance should be kept.

*/

const removeDuplicateIds = (obj) => {
  const allValues = Array.from(new Set(Object.values(obj).reduce((a, v) => a.concat(v), [])));
  for (let value of allValues) {
    // collect indexes
    let keysWithValue = [];
    for (let key of Object.keys(obj)) {
      let k = obj[key].indexOf(value);
      if (k >= 0) {
        keysWithValue.push(key);
      }
    }
    keysWithValue.sort((a, b) => +b - +a);
    for (let i = 1; i < keysWithValue.length; i++) {
      obj[keysWithValue[i]] = obj[keysWithValue[i]].filter(v => v != value);
    }
    obj[keysWithValue[0]] = Array.from(new Set(obj[keysWithValue[0]]));
  }
  return obj;
};

const obj = {
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
};
const result = removeDuplicateIds(obj);
console.log('result', result);

const input = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}
const result1 = removeDuplicateIds(input);
console.log('result1=', result1);

// best

/* 
onst removeDuplicateIds = (obj) => {
  const res = {};
  const ks = Object.keys(obj).sort((a, b) => b - a);
  const seen = new Set();
  for (const k of ks) {
    res[k] = [];
    for (const v of obj[k]) {
      if (!seen.has(v))
        res[k].push(v);
      seen.add(v);
    }
  }
  return res;
};
*/

