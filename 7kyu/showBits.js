/* 
7kyu - Binary Representation of an Integer
https://www.codewars.com/kata/5a5f3034cadebf76db000023/train/javascript

Write a function that returns an array with each element 
representing one bit of a 32 bit integer in such a way 
that if printed it would appear as the binary representation 
of the integer (Least Significant Bit on the right).
*/

function showBits(n) {
  return [...((n >>> 0).toString(2).padStart(32, '0'))].map(Number);
}
