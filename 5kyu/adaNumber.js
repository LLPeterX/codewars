/* 
5kyu - Simple Fun #43: Ada Number
https://www.codewars.com/kata/58882bdb5edef0343400002a/train/javascript

Consider two following representations of a non-negative integer:

* A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;
* An integer with at least one digit in a base from 2 to 16 (inclusive), 
  enclosed between # characters, and preceded by the base,
  which can only be a number between 2 and 16 in the first representation. 
  For digits from 10 to 15 characters a, b, ..., f and A, B, ..., F are used.

*Additionally, both representations may contain underscore (_) characters; 
  they are used only as separators for improving legibility of numbers 
  and can be ignored while processing a number.

Your task is to determine whether the given string is a valid integer representation.
*/

const convert = (num, base) => {
  let digits = "0123456789abcdef".slice(0, base);
  for (let i = num.length - 1, j = 0; i >= 0; i--, j++) if (digits.indexOf(num[i]) < 0) return '!';
  return '1';
}

function adaNumber(line) {
  let str = line.toLowerCase()
    .replace(/_/g, '')
    .replace(/((\d{1,2})#(.+)#)/g, (m, _, p2, p3) => +p2 > 1 && +p2 < 17 ? convert(p3, p2) : '!');
  return /^\d+$/.test(str);
}
console.log(adaNumber("123_456_789"), true);
console.log(adaNumber("16#123abc#"), true);
console.log(adaNumber("10#123abc#"), false);
console.log(adaNumber("10#10#123ABC#"), false);
console.log(adaNumber("10#0#"), true);
console.log(adaNumber("10##"), false);

// best
/* 
const adaNumber = line => {
  line = line.replace(/_/g, ``);
  if (line.match(/^\d+$/)) return true;
  let [match, base, num] = (line.match(/^(\d+)#([\da-f]+)#$/i) || []);
  return !!match && ![...num].some(val => isNaN(parseInt(val, base))) && base > 1 && base < 17;
};
*/

/* 
const A=[..."0123456789abcdef"].reduce((o,d,i)=>(o[i+1]=d,o),{});

const checkBase=(b,s)=>1<+b&&+b<17&&[...s].every(c=>c<=A[+b]);

function adaNumber(s){
  s=s.toLowerCase().replace(/_/g,'');
  return /^\d+$|^\d+#[\da-f]+#$/.test(s) && (!isNaN(s) || checkBase(...s.split('#')));
}
*/
