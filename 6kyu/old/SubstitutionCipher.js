/* 
6kyu - Simple Substitution Cipher Helper
https://www.codewars.com/kata/52eb114b2d55f0e69800078d/train/javascript

A simple substitution cipher replaces one character from an alphabet 
with a character from an alternate alphabet, where each character's position 
in an alphabet is mapped to the alternate alphabet for encoding or decoding.

If a character provided is not in the opposing alphabet, simply leave it as be.
*/

function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    return [...str].map(c => {
      let k = abc1.indexOf(c);
      return k >= 0 ? abc2[k] : c;

    }).join``;
  }
  this.decode = function (str) {
    return [...str].map(c => {
      let k = abc2.indexOf(c);
      return k >= 0 ? abc1[k] : c;
    }).join``;
  }
}

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("abc")); // => "eta"
console.log(sub.encode("xyz")); // => "qxz"
console.log(sub.encode("aeiou")); // => "eirfg"

console.log(sub.decode("eta")); // => "abc"
console.log(sub.decode("qxz")); // => "xyz"
console.log(sub.decode("eirfg")); // => "aeiou"