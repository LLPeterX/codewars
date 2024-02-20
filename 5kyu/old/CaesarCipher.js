/* 
5kyu - Caesar Cipher Helper
https://www.codewars.com/kata/526d42b6526963598d0004db/train/javascript

Write a class that, when given a string, will return 
an uppercase string with each letter shifted forward 
in the alphabet by however many spots the cipher was initialized to.

For example:

  var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
  c.encode('Codewars'); // returns 'HTIJBFWX'
  c.decode('BFKKQJX'); // returns 'WAFFLES'

If something in the string is not in the alphabet (e.g. punctuation, spaces),
simply leave it as is.
The shift will always be in range of [1, 26].
*/

// var CaesarCipher = function (shift) {
//   // TODO: Complete the CaesarCipher object
// };

class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
  }

  encode(str) {
    //let result = "";
    // for (let c of str.toUpperCase()) {
    //   if (/[A-Z]/.test(c)) {
    //     result += String.fromCharCode(65 + (c.charCodeAt() - 65 + this.shift) % 26);
    //   } else result += c;
    // }
    // return result;
    return [...str.toUpperCase()].map(c => /[A-Z]/.test(c) ? String.fromCharCode(65 + (c.charCodeAt() - 65 + this.shift) % 26) : c).join``;
  }

  decode(str) {
    return [...str].map(c => /[A-Z]/.test(c) ? String.fromCharCode(65 + (65 + c.charCodeAt() - this.shift) % 26) : c).join``;
  }
}


// let c = new CaesarCipher(5);
// console.log(c.encode('Codewars'), 'HTIJBFWX');
// console.log(c.decode('BFKKQJX'), 'WAFFLES');
// console.log(c.decode('NY\'X F XMNKY HNUMJW!!'), 'IT\'S A SHIFT CIPHER!!');

// best
/* 
var CaesarCipher = function (shift) {
  var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  this.encode = function(str) {
    return str.replace(/[a-z]/gi, function(s) {
      return a[(a.indexOf(s.toUpperCase()) + shift) % 26]
    })
  }
  this.decode = function(str) {
    return str.replace(/[a-z]/gi, function(s) {
      return a[(a.indexOf(s.toUpperCase()) + 26 - shift) % 26]
    })
  }
};
*/