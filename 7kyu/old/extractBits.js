/* 
7kyu - Extract bits from integer
https://www.codewars.com/kata/6446c0fe4e259c006511b75e/train/javascript

Given BigInt variable extract length of bits starting from least significant bit
and skipping offset of bits. 

For convenience sake only first 64 bits of input variable will be used 
for encoding value. 

offset and length may be arbitrarily large.

0xAB00EF	off=4	len=16	=>0xB00E
bin: 1010 1011 0000 0000 1110 1111
off:      ^ <----- len ---> ^
new: 0000 1010 1011 0000 0000 1110
               ^                 ^   
//                          offset 

0xAF = 1010 1111 off=0 L=4 => 1111 => 0xF
*/

function extractBits(field, offset, length) {
  if (length === 0n || offset >= 64n) return 0n;
  if (length > 64n) length = 64n;
  //let mask = BigInt('0b' + '0'.repeat(64 - parseInt(length)) + '1'.repeat(parseInt(length)));
  let mask = BigInt(`0b${'0'.repeat(64 - parseInt(length))}${'1'.repeat(parseInt(length))}`);
  return (field >> offset) & mask;
}

console.log(extractBits(0xAFn, 0n, 0n), 0x0n);
console.log(extractBits(0xFF00FFn, 0n, 0n), 0x0n);
console.log(extractBits(0xAFn, 0n, 4n), 0xFn);
console.log(extractBits(0xFF00FFn, 0n, 8n), 0x00FFn);
console.log(extractBits(0xAB00EFn, 4n, 16n), 0xB00En);
console.log(extractBits(0xAFn, 4n, 4n), 0xAn);
console.log(extractBits(0xFF00FFn, 4n, 8n), 0xFn);
console.log(extractBits(0xAA00BB00CC00DD00n, 80n, 64n), 0x0n);
console.log(extractBits(0xAA00BB00CCn, 240n, 1024n), 0x0n);
console.log(extractBits(12249996598544751872n, 4n, 64n), 765624787409046992n); // FAIL - полная длина 64 бит

// best
/* 
const extractBits = (field, offset, length) =>  (field >> offset) % 2n ** (length > 64n ? 64n : length);
*/

/* 
function extractBits(field, offset, length) {
  return (field >> offset)-(field >> offset >> length << length);
}
*/

/* 
const extractBits = (field, offset, length) => {
  if (length > 64n) {
    return 0x0n
  }
  // Create a mask that has 'length' bits set to 1, starting at the 'offset'.
  const mask = (1n << length) - 1n;
  
  // Shift the 'field' to the right by the 'offset', and then apply the mask.
  return (field >> offset) & mask;
}
*/