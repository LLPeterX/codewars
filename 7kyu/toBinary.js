/* 
7kyu - Convert Integer to Binary
https://www.codewars.com/kata/55606aeebf1f0305f900006f/train/javascript

You would be given an integer as a argument and you have to return its binary form.
Notes: negative numbers should be handled as two's complement; 
assume all numbers are integers stored using 4 bytes (or 32 bits) in any language.

Your output should ignore leading 0s.
*/
/*
function toBinary(n) {
  if (n >= 0) return n.toString(2);
  let n1 = (~Math.abs(n) >>> 0) + 1;
  return n1.toString(2);
}
*/

//shorter:
const toBinary = n => (n >= 0 ? n : (~Math.abs(n) >>> 0) + 1).toString(2);


console.log(toBinary(2), "10")
console.log(toBinary(3), "11")
console.log(toBinary(-3), "11111111111111111111111111111101")
console.log(toBinary(4), "100")
console.log(toBinary(5), "101")
console.log(toBinary(0), '0');

// best
/* 
function toBinary(n){
return (n >>> 0).toString(2);
}
*/