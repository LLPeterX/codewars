/* 
6kyu - Hammig Distance
https://www.codewars.com/kata/58a6af7e8c08b1e9c40001c1
The hamming distance between a pair of numbers is the number of binary bits that differ in their binary notation.

Example
For a = 25, b= 87, the result should be 4

25: 00011001
87: 01010111  
*/

function hammingDistance(a, b) {
  let c = a ^ b;
  console.log('a=', a.toString(2).padStart(16, '0'));
  console.log('b=', b.toString(2).padStart(16, '0'));
  console.log('c=', c.toString(2).padStart(16, '0'));
  return [...(a ^ b).toString(2)].filter(e => e === '1').length;
}

console.log(hammingDistance(25, 87), 4);
console.log(hammingDistance(256, 302), 4);
console.log(hammingDistance(34013, 702), 7);

// best
/* 
function hammingDistance(a, b) {
  return (a ^ b).toString(2).replace(/0/g, '').length;
}
*/