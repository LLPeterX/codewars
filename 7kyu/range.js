/* 
7kyu - Get the integers between two numbers
https://www.codewars.com/kata/598057c8d95a04f33f00004e/train/javascript

Build a function that can get all the integers between two given numbers.
*/

function range(startNum, endNum) {
  return startNum >= endNum ? [] : Array(endNum - startNum - 1).fill().map((_, i) => i + startNum + 1);
};

console.log(range(2, 9), [3, 4, 5, 6, 7, 8])
console.log(range(6, 8), [7])

//best

/* 
range = (a, b) => [...Array(b).keys()].slice(a + 1);
*/