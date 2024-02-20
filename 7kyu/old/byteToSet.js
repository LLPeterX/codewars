/* 
7kyu - Creating a Bitset, Part 1
https://www.codewars.com/kata/594c6ad5d909ca19e200002f/train/javascript
 */


function byteToSet(byte) {
  let result = new Set();
  for (let i = 1; i <= 8; i++) {
    if (byte & 2 ** (8 - i)) {
      result.add(i - 1);
    }
  }
  return result;
}

