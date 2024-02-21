/* 
6kyu - Cryptography #1 - Viva Cesare
https://www.codewars.com/kata/576fac714bc84c312c0000b7/train/javascript
*/

function CaesarCryptoEncode(text, shift) {
  if (!text || /^\s+$/.test(text)) return '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let char of text) {
    let code = alphabet.indexOf(char);
    if (code < 0) result += char;
    else {
      code = (code + shift) % 52;
      if (code < 0) code = 52 + code;
      result += alphabet[code];
    }
  }
  return result;
}

console.log(CaesarCryptoEncode("Et tu, Brute?", 3), "Hw wx, Euxwh?");
console.log(CaesarCryptoEncode("Hw wx, Euxwh?", -3), "Et tu, Brute?");
console.log(CaesarCryptoEncode("eBIIL TLOIA!", -127), "Hello world!");

// best

/* 
function CaesarCryptoEncode(text, shift) {
  if (!text) return '';
  shift = (shift % 52 + 52) % 52; // convert shift to positive equivalent
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return text.trim().replace(/[a-z]/ig, c => letters[(letters.indexOf(c) + shift) % 52]);
}

*/