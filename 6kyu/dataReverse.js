/* 
6kyu - Data Reverse
https://www.codewars.com/kata/569d488d61b812a0f7000015

A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
11111111  00000000  00001111  10101010 => 10101010  00001111  00000000  11111111

The data is given in an array as such  [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
*/

function dataReverse(data) {
  return data.join('').match(/.{8}/g).reverse().join('').split('').map(Number);
}

console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]));