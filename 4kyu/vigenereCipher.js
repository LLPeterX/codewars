/* 
4kyu - Vigenère Cipher Helper
https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3
*/

class VigenèreCipher {
  constructor(key, alphabet) {
    this.key = key;
    this.alphabet = alphabet;
  }

  encode(message) {
    let messageKey = this.key.repeat(Math.ceil(message.length / this.key.length)).slice(0, message.length);
    let result = "";
    for (let i = 0; i < message.length; i++) {
      let j = this.alphabet.indexOf(message[i]);
      let k = this.alphabet.indexOf(messageKey[i]);
      if (j >= 0 && i >= 0) {
        result += this.alphabet[(j + k) % this.alphabet.length];
      } else {
        result += message[i];
      }
    }
    return result;
  }

  decode(message) {
    let messageKey = this.key.repeat(Math.ceil(message.length / this.key.length)).slice(0, message.length);
    let result = "";
    for (let i = 0; i < message.length; i++) {
      let j = this.alphabet.indexOf(message[i]);
      let k = this.alphabet.indexOf(messageKey[i]);
      if (j >= 0 && k >= 0) {
        let m = (j - k + this.alphabet.length) % this.alphabet.length;
        //if (m < 0) m = this.alphabet.length + m;
        result += this.alphabet[m];
      } else {
        result += message[i];
      }
    }
    return result;

  }
}

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

// creates a cipher helper with each letter substituted
// by the corresponding character in the key
var c = new VigenèreCipher(key, alphabet);


console.log(c.encode('codewars'), 'rovwsoiv');
console.log(c.encode('waffles'), 'laxxhsj');
console.log(c.encode('CODEWARS'), 'CODEWARS');
console.log('-- decode--');
console.log(c.decode('rovwsoiv'), 'codewars');
console.log(c.decode('laxxhsj'), 'waffles');
console.log(c.decode('CODEWARS'), 'CODEWARS');

// best

/* 
function VigenèreCipher(key, abc) {
  this.encode = (str) => encode(1, str);
  this.decode = (str) => encode(-1, str);
  function encode (mult, str) {
    return str.split('').map(function (letter, index) {
      var i = abc.indexOf(letter);
      return i < 0 ? letter : abc[(abc.length + i + abc.indexOf(key[index % key.length]) * mult) % abc.length];
    }).join('');
  }
}
*/

/* 
const mod = (a, b) => a - Math.floor(a / b) * b;

class VigenèreCipher {
  constructor(key, abc) {
    this.abc    = abc;
    this.key    = key;
    this.encode = s => this.cipher(s, +1);
    this.decode = s => this.cipher(s, -1);
  }

  cipher(text, mode) {
    const a = this.abc.length, k = this.key.length;
    return text.replace(/./g, (c, i) => this.abc.includes(c)
      ? this.abc[mod(this.abc.indexOf(c) + mode * this.abc.indexOf(this.key[i % k]), a)] : c);
  }
}
*/