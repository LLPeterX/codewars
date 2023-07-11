/* 
6kyu - Join Two Arrays by Id
https://www.codewars.com/kata/6481c68ffdf80b6147d85248/train/javascript

Write a function joinArraysById in JavaScript that takes two arrays, 
arr1 and arr2, as input. 
Each array contains objects that have an id field with an integer value. 
The function should merge arr1 and arr2 based on their id key 
and return a new array, joinedArray, as the result.

The joinedArray should be formed by following these rules:

- The length of joinedArray should be equal to the length of unique id values
  from both arrays combined.
- The objects with unique id values from arr1 and arr2 should be included 
  in the joinedArray without modification.
- If two objects share the same id, their properties should be merged into a single object:
   -- If a key only exists in one object, include that key-value pair in the merged object.
   -- If a key exists in both objects, the value from arr2 should override the value from arr1.
- The joinedArray should be sorted in ascending order based on the id key.
*/

function joinArraysById(arr1, arr2) {
  let ids = [...new Set([...arr1, ...arr2].map(o => o.id))].sort((a, b) => a - b);
  let result = [];
  for (let id of ids) {
    let o = {};
    let obj1 = arr1.find(o => o.id === id);
    if (obj1) o = { ...obj1 };
    let obj2 = arr2.find(o => o.id === id);
    if (obj2) o = { ...o, ...obj2 };
    result.push(o);
  }
  return result;
}

let arr1 = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
]
let arr2 = [
  { id: 3, y: 2 },
  { id: 4, z: 3 },
]
let output = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
  { id: 3, y: 2 },
  { id: 4, z: 3 },
];

console.log(joinArraysById(arr1, arr2), '=>\n', output);

arr1 = [
  { id: 2, x: 9 },
  { id: 1, x: 1 }
]
arr2 = [
  { id: 2, y: 2 },
  { id: 3, z: 3 },
]
output = [
  { id: 1, x: 1 },
  { id: 2, x: 9, y: 2 },
  { id: 3, z: 3 },
]
console.log(joinArraysById(arr1, arr2), '=>\n', output)


arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }]
arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }]
output = [{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }]

console.log(joinArraysById(arr1, arr2), '=>\n', output)

// best

/* 
function joinArraysById(arr1, arr2) {
  const mergedObj = {}
  arr1.forEach(a => mergedObj[a.id] = a)
  arr2.forEach(a => mergedObj[a.id] = {...mergedObj[a.id], ...a})
  return Object.values(mergedObj)
}
*/

/* 
function joinArraysById(arr1, arr2) {
  const map = {};
  for (const e of arr1) {
    map[e.id] = map[e.id] ? Object.assign(map[e.id],e) : e;
  }
  for (const e of arr2) {
    map[e.id] = map[e.id] ? Object.assign(map[e.id],e) : e;
  }
  return Object.values(map)
}
*/

/* 
function joinArraysById(arr1, arr2) {
  const arr = [...arr1,...arr2];
  const ids = [...new Set(arr.map(e => e.id))].sort((a,b) => a-b);
  return ids.map(e => Object.assign({},...arr.filter(o => o.id==e)));
}
*/