/* 
6kyu - Base Conversion
https://www.codewars.com/kata/526a569ca578d7e6e300034e


*/

var Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

const fromBase = (str, base) => {
  let result = 0n, L = BigInt(base.length);
  for (let i = BigInt(str.length) - 1n, j = 1n; i >= 0n; i--, j *= L) {
    result += BigInt(base.indexOf(str[i])) * j;
  }
  return result;
}

const toBase = (num, base) => {
  let result = "", L = BigInt(base.length);
  do {
    let k = num % L;
    result += base[k];
    num = (num - k) / L;
  } while (num > 0);
  return [...result].reverse().join``;
}

function convert(num, from, to) {
  return toBase(fromBase(num, from), to);
}
/*
var bin = Alphabet.BINARY, oct = Alphabet.OCTAL, dec = Alphabet.DECIMAL, hex = Alphabet.HEXA_DECIMAL,
  allow = Alphabet.ALPHA_LOWER, alup = Alphabet.ALPHA_UPPER, alpha = Alphabet.ALPHA, alnum = Alphabet.ALPHA_NUMERIC;

console.log(convert("15", dec, bin), '1111', '"15" dec -> bin');
console.log(convert("15", dec, oct), '17', '"15" dec -> oct');
console.log(convert("1010", bin, dec), '10', '"1010" bin -> dec');
console.log(convert("1010", bin, hex), 'a', '"1010" bin -> hex');
console.log(convert("0", dec, alpha), 'a', '"0" dec -> alpha');
console.log(convert("27", dec, allow), 'bb', '"27" dec -> alpha_lower');
console.log(convert("hello", allow, hex), '320048', '"hello" alpha_lower -> hex')
console.log(convert("SAME", alup, alup), 'SAME', '"SAME" alpha_upper -> alpha_upper');
*/

// best

/* 
function convert(input, source, target) {
  var inBase = source.length, len = input.length;
  var value = input.split('')
    .reduce(function(p,v,i){return p+source.indexOf(v)*Math.pow(inBase,len-i-1)},0);
  return toBase(value,target);
}

function toBase(value, target){
  var base = target.length;
  if(value<base) return ''+target.charAt(value);
  return toBase(Math.floor(value/base),target) + target.charAt(value%base);
}

*/

/* 
function convert(input, source, target) {
  let s=0;  let str='';
  for (let i=0; i<input.length; i++) {
    s=s*source.length+source.indexOf(input[i]);
  }
  while (s>0) {
    str=target[s%target.length]+str;
    s=Math.floor(s/target.length);
  }  
  return str ? str : target[0];
}

*/