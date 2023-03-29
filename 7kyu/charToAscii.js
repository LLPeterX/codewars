/* 
7kyu - char_to_ascii
https://www.codewars.com/kata/55e9529cbdc3b29d8c000016/train/javascript

Take a string and return a hash with all the ascii values of the characters in the string. 
Returns nil if the string is empty. 
The key is the character, and the value is the ascii value of the character. 
Repeated characters are to be ignored and non-alphebetic characters as well.
*/

/*
function charToAscii(string) {
  if (!string) return null;
  let result = {};
  for (let char of string) {
    if (/[A-Za-z]/.test(char)) {
      result[char] = char.charCodeAt();
    }
  }
  return result;
}
*/
function charToAscii(string) {
  if (!string) return null;
  let result = [...string].reduce((o, v) => {
    if (/[A-Za-z]/.test(v)) {
      o[v] = v.charCodeAt();
    }
    return o;
  }, {});
  return Object.keys(result).length === 0 ? null : result;
}

console.log(charToAscii(""), null, "deals with an empty str");
console.log(charToAscii("a"), { "a": 97 }, "deals with one char");
console.log(charToAscii("aaa"), { "a": 97 }, "deals with repeated characters");
console.log(charToAscii("hello world"), { "h": 104, "e": 101, "l": 108, "o": 111, "w": 119, "r": 114, "d": 100 }, "deals with spaces");
console.log(charToAscii("ABaa ^"), { "A": 65, "B": 66, "a": 97 }, "deals with uppercase characters and non alphebetic characters");
console.log(charToAscii("."), null);

// best
/* 
const charToAscii = string => {
  string = string.replace(/[^0-9a-z]/gi, '');
  return string ? [...string].reduce((h, c) => (h[c] = c.charCodeAt(0), h), {}) : null;
}
*/

