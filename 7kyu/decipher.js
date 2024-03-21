/* 
7kyu - Simple Fun #49: Decipher
https://www.codewars.com/kata/5888514674b58e929a000036/train/javascript

Consider the following ciphering algorithm:

For each character replace it with its code.
Concatenate all of the obtained numbers.
Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.

Note: here the character's code means its decimal ASCII code, the numerical representation of a character used by most modern programming languages.

Example
For cipher = "10197115121", the output should be "easy".
*/

function decipher(cipher) {
  let i = 0, j;
  let result = "";
  while (i < cipher.length) {
    let str = "";
    for (j = i; j < cipher.length; j++) {
      str += cipher[j];
      if (+str >= 97 && +str <= 122) break;
    }
    result += String.fromCharCode(str);
    i = ++j;
  }
  return result;
}

console.log(decipher("10197115121"), "easy")
console.log(decipher("98"), "b")
console.log(decipher("122"), "z")

// best
/* 
function decipher(cipher) {
  return String.fromCharCode(...cipher.match(/1?\d\d/g))
}
*/

/* 
const decipher = cipher =>
  String.fromCharCode(...cipher.match(/1..|../g));
*/