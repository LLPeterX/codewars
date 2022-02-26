/* 
7kyu - Frequency sequence
https://www.codewars.com/kata/585a033e3a36cdc50a00011c

Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"
*/

function freqSeq(str, sep) {
  const chars = {};
  return str.split('').map(e => {
    if (e in chars) {
      chars[e]++;
    } else {
      chars[e] = 1;
    }
    return e;
  })
    .map(e => chars[e])
    .join(sep);
}

console.log(freqSeq('hello world', '-'), '1-1-3-3-2-1-1-2-1-3-1');
console.log(freqSeq('19999999', ':'), '1:7:7:7:7:7:7:7');
console.log(freqSeq('^^^**$', 'x'), '3x3x3x2x2x1');

// best
/* 
function freqSeq(str, sep) {
  return str.split('').map((v, i, arr) => arr.filter(vi => vi === v).length).join(sep);
}
*/

/* 
const freqSeq = (str, sep) =>  [...str].map(val => --str.split(val).length).join(sep);
*/