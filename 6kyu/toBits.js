/* 
6kyu - Basic Bitmapping
https://www.codewars.com/kata/59f8dd1132b8b9af150001ea/train/javascript
*/

const toBits = (set) => {
  let bitArray = Array(5000).fill(0);
  let input = set.split("\n");
  for (let i of input) bitArray[i] = 1;
  return bitArray;
}

