/* 
7kyu - Simple Fun #10: Range Bit Counting
https://www.codewars.com/kata/58845748bd5733f1b300001f/train/javascript

Count all bits of number between a...b inlusive
*/

function rangeBitCount(a, b) {
  let count = 0;
  for (let n = a; n <= b; n++) {
    count += n.toString(2).replace(/0/g, '').length;
  }
  return count;
}

