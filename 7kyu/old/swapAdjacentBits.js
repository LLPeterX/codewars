/* 
7kyu - Simple Fun #11: Swap Adjacent Bits
https://www.codewars.com/kata/58845a92bd573378f4000035/train/javascript

You are given a 32-bit integer n. Swap each pair of adjacent bits in its binary representation 
and return the result as a decimal number.
*/

function swapAdjacentBits(n) {
  let s = n.toString(2);
  if (s.length % 2) s = '0' + s;
  let b = "";
  for (let i = 0; i < s.length - 1; i += 2) {
    //let x = s.slice(i, i + 2);
    let x = s[i] + s[i + 1];
    b += (x == '01' ? '10' : x == '10' ? '01' : x);
  }
  return parseInt(b, 2);
}

console.log('13', swapAdjacentBits(13), 14)
console.log('74', swapAdjacentBits(74), 133)
console.log(swapAdjacentBits(1073741823), 1073741823)
console.log(swapAdjacentBits(0), 0)
console.log(swapAdjacentBits(1), 2)
console.log(swapAdjacentBits(83748), 166680)

// best
/* 
function swapAdjacentBits(n) {
  return (n & 0xAAAAAAAA) >> 1 | (n & 0x55555555) << 1
}
 */

/* 
const swapAdjacentBits = (n) => parseInt(n.toString(2).padStart(32, `0`).replace(/../g, x => x.split('').reverse().join('')), 2) 
*/