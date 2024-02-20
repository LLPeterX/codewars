/* 
5kyu - Endianness Conversion
https://www.codewars.com/kata/56f2dd31e40b7042ad001026/train/javascript

Your job is to write a function that switches the byte order of a given integer.
The function should take an integer n for the first argument, 
and the bit-size of the integer for the second argument. 

The bit size must be a power of 2 greater than or equal to 8.

Your function should return a None value if the integer is negative, 
if the specified bit size is not a power of 2 that is 8 or larger,
or if the integer is larger than the specified bit size can handle.

In this kata, assume that all integers are unsigned (non-negative) 
and that all input arguments are integers. 
Remember that you will need to account for padding of null (00) bytes.

*/

function switchEndian(n, bits) {
  if (n < 0 || Math.log2(bits) % 1 !== 0 || n >= 2 ** bits || bits < 8) return null;
  let bin = n.toString(2).padStart(bits, '0');
  return parseInt(bin.match(/\d{8}/g).reverse().join(''), 2);
}

console.log(switchEndian(7206089, 8), 3388239104);
console.log(switchEndian(153, 8), 153);
console.log(switchEndian(255, 8), 255);
console.log('--32--');
console.log(switchEndian(1534, 32), 4261740544);
console.log(switchEndian(364334, 32), 781124864);
console.log(switchEndian(2, 32), 33554432);
console.log('--null--');
console.log(switchEndian(256, 8), "null");
console.log(switchEndian(5315, 9), "null");
console.log(switchEndian(9999, 124), "null");
console.log(switchEndian(1355, 2), "null");
console.log(switchEndian(5425, 4), "null");
console.log(switchEndian(-1111, 8), "null");