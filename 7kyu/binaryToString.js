/* 
7kyu - Binary to string
https://www.codewars.com/kata/5ab3495595df9ec78f0000b4/train/javascript

Write a function which will receive a long string of binary code 
and convert it to a string.
*/

function binaryToString(binary) {
  let codes = binary.split('0b').slice(1).map(c => parseInt(c, 2));
  //return codes;
  return String.fromCodePoint(...codes);

}

console.log(binaryToString('0b10000110b11000010b1110100'), 'Cat');
console.log(binaryToString('0b10010000b11001010b11011000b11011000b11011110b1000000b10101110b11011110b11100100b11011000b11001000b100001'), 'Hello World!');

// best

/* 
const binaryToString = binary =>
  String.fromCharCode(...binary.split(/(?=0b)/));
*/