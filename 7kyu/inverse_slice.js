/* 
7kyu - Thinkful - List and Loop Drills: Inverse Slicer
https://www.codewars.com/kata/586ec0b8d098206cce001141/train/javascript

*/

function inverseSlice(items, a, b) {
  return [...items.slice(0, a), ...items.slice(b)];
}

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4), [12, 14, 55, 24]);
console.log(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3), [72, 55, 24]);
console.log(inverseSlice(['Intuition', 'is', 'a', 'poor', 'guide', 'when', 'facing', 'probabilistic', 'evidence'], 5, 13), ['Intuition', 'is', 'a', 'poor', 'guide']);