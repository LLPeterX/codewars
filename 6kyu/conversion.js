/* 
6kyu - Simple Fun #310: Array Conversion
https://www.codewars.com/kata/5927aabdf3a75890a10000ee/train/javascript

- Converted each number to the base 26. 
  To write a number, Vasya will use lowercase letters 
  of Latin alphabet: 'a' = 0, 'b' = 1, ..., 'z' = 25;

- Find the longest of the strings obtained by the conversion;

- Transform all strings shorter than the longest one, by prepending as many "a" 
  as required in front of the string, so their length is equal.;

- Combine all strings into one by the order in which they were converted from left to right in the input;

- Subtract 1 from the maximum length we found before, and convert it to base 26. 
  Then prepend it to the resulting string.

Your task is to convert the given array arr to a string as Vasya suggests.
*/

function toBase26(n) {
  let out = [];
  while (n > 0) {
    out.push(String.fromCharCode(97 + n % 26));
    n = (n - n % 26) / 26;
  }
  return out.reverse().join``;
}
function conversion(arr) {
  let a = arr.map(toBase26);
  let max = Math.max(...a.map(v => v.length));
  return toBase26(max - 1) + a.map(v => v.padStart(max, 'a')).join``;
}

// cool
/* 
function toStr(n) {
  if (n < 26) return String.fromCharCode(n + 'a'.charCodeAt())
  return toStr(Math.floor(n/26)) + toStr(n%26)
}

function conversion(arr) {
  const chars = arr.map(toStr)
  const maxLen = Math.max(...chars.map(x => x.length))
  return toStr(maxLen-1) + chars.map(x => x.padStart(maxLen, 'a')).join('')
}
*/