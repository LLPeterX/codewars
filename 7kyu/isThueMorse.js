/* 
7kyu - Simple Fun #106: Is Thue Morse?
https://www.codewars.com/kata/589a9792ea93aae1bf00001c/train/javascript

Given a sequence of 0s and 1s, determine if it is a prefix of Thue-Morse sequence.

The infinite Thue-Morse sequence is obtained by first taking 
a sequence containing a single 0 and then repeatedly concatenating 
the current sequence with its binary complement.

A binary complement of a sequence X is a sequence Y of the same length 
such that the sum of elements X_i and Y_i on the same positions is equal to 1 for each i.
*/

function isThueMorse(seq) {
  let str = seq.join``;
  let pfx = "0";
  while (pfx.length <= seq.length) {
    pfx += [...pfx].map(e => e === '0' ? '1' : '0').join``;
    if (pfx.slice(0, str.length) === str) return true;
  }
  return false;
}

console.log(isThueMorse([0, 1, 1, 0, 1]), true)
console.log(isThueMorse([0]), true)
console.log(isThueMorse([1]), false)
console.log(isThueMorse([0, 1, 0, 0]), false)
console.log(isThueMorse([0, 1, 0]), false)

// best
/* 
function isThueMorse(seq) {
  return seq.every((x, i) => x == i.toString(2).replace(/0/g, '').length % 2);
}
*/