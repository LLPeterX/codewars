/* 
6kyu - Two's Complement
https://www.codewars.com/kata/58d4785a2285e7795c00013b/train/javascript

The goal is to write a pair of functions:
1) toTwosComplement(binary, bits)
   - string of binary 
   - specification of bits,
    which will return a numeric, signed complement in two's complement format.
   
 2) fromTwosComplement(n, bits)
     will do the reverse. It will take in an integer along with a number of bits,
    and return a binary string.

https://en.wikipedia.org/wiki/Two's_complement

if binary = "0000 0001", bits = 8, then should return 1. 
If binary = "11111111", bits = 8 should return -1 . 

n=0, bits=8 => "00000000".
n=-1, bits=-1 => "11111111".
*/

function toTwosComplement(binary, bits) {
  let str = binary.replace(/\s/g, '').padStart(bits, '0').slice(-bits);
  let n = [...str].reverse().reduce((x, v, i) => x + v * (2 ** i), 0);
  if (str[0] === '1') {
    n -= 2 ** bits;
  }
  return n;
}

function fromTwosComplement(n, bits) {
  let sign = Math.sign(n);
  n = Math.abs(n);
  let str = n.toString(2).padStart(bits, '0');
  if (sign >= 0) return str;
  let flipped = [...str].map(b => 1 - b).join(``);
  let result = parseInt(flipped, 2) + 1;
  return result.toString(2);
}

console.log(toTwosComplement("00000001", 8), 1);
console.log(toTwosComplement("00000010", 8), 2);
console.log(toTwosComplement("01111110", 8), 126);
console.log(toTwosComplement("01111111", 8), 127);
console.log(toTwosComplement("11111111", 8), -1);
console.log(toTwosComplement("11111110", 8), -2);
console.log(toTwosComplement("10000010", 8), -126);
console.log(toTwosComplement("1000 0000", 8), -128);
console.log(toTwosComplement("1010 1010 0010 0010 1110 1010 0010 1110", 32), -1440552402);
console.log(toTwosComplement("1000 0000 1110 1111 0011 0100 1100 1010", 32), -2131807030);
console.log(toTwosComplement("10110001000100000101100011111000", 32), -1324328712);
console.log('from');
console.log(fromTwosComplement(0, 8), "00000000");
console.log(fromTwosComplement(126, 8), "01111110");
console.log(fromTwosComplement(127, 8), "01111111");
console.log('отрицательные');
console.log(fromTwosComplement(-1, 8), "11111111");
console.log(fromTwosComplement(-128, 8), "10000000");
console.log(fromTwosComplement(-111, 8), "10010001");
console.log(fromTwosComplement(-1440552402, 32), "10101010001000101110101000101110");
console.log(fromTwosComplement(-1547992901, 32), "10100011101110111000000010111011");

// best
/* 
function toTwosComplement(bin, bits){
  bin = bin.replace(/ /g, '')
  let num = parseInt(bin.slice(1), 2)
  let sign = bin[0] == 1 ? '-' : ''
  if (!sign) return num
  num = 2**--bits - num
  return +(sign + num)
  
}

function fromTwosComplement(n, bits){
  let sign = n < 0 ? '1' : '0'
  n = Math.abs(n)
  let bin = n.toString`2`.padStart(--bits, '0')
  if (sign == '0') return sign + bin
  bin = 2 ** bits - n
  return sign + bin.toString`2`.padStart(bits, '0')
}
*/

/* 
function toTwosComplement(binary, bits){
  var n = parseInt(binary.replace(/ /g,''), 2)
  return n < (2**(bits - 1)) ? n : n - (2**bits)
}

function fromTwosComplement(n, bits){
  var m = n >= 0 ? n : n + 2**(bits)
  return m.toString(2).padStart(bits, '0')
}
*/