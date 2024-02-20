/* 
7kyu - Number to Bytes
https://www.codewars.com/kata/5705601c5eef1fad69000674/train/javascript
*/

function toBytes(n) {
  return BigInt(n).toString(2).padStart(64, '0').replace(/^(0{8})+/, '').match(/.{8}/g) || ['00000000'];
}


console.log(toBytes(0), ['00000000']);
console.log(toBytes(1), ['00000001']);
console.log(toBytes(257), ['00000001', '00000001']);
console.log(toBytes(0x101), ['00000001', '00000001']);
console.log(toBytes(0x000000000101), ['00000001', '00000001']);
console.log(toBytes(0xffff), ['11111111', '11111111']);
console.log(toBytes(0x1020304), ['00000001', '00000010', '00000011', '00000100']);
console.log(toBytes(65537), ['00000001', '00000000', '00000001']);
console.log(toBytes(Number.MAX_SAFE_INTEGER), ['00011111', '11111111', '11111111', '11111111', '11111111', '11111111', '11111111']);
console.log(toBytes(2 ** 24 + 1), ['00000001', '00000000', '00000000', '00000001']);
console.log(toBytes(2 ** 31 + 1), ['10000000', '00000000', '00000000', '00000001']);
console.log(toBytes(2 ** 32 - 1), ['11111111', '11111111', '11111111', '11111111']);