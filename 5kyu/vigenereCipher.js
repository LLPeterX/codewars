/* 
5kyu - Vigenère Cipher Helper
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

// let d = new VigenèreCipher('password', alphabet);
// console.log(d.encode("my secret code i want to secure"));