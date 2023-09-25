/* 
6kyu - Dbftbs Djqifs
https://www.codewars.com/kata/546937989c0b6ab3c5000183

Caesar Ciphers are one of the most basic forms of encryption. 
It consists of a message and a key, and it shifts the letters of the message for the value of the key.

Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher


Your task is to create a function encryptor that takes 2 arguments - key and message - 
and returns the encrypted message.

Make sure to only shift letters, and be sure to keep the cases of the letters the same. 
All punctuation, numbers, spaces, and so on should remain the same.

Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!

Examples
A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.
*/

function encryptor(key, message) {
  if (!message || !key) return message;
  return [...message].map(letter => {
    let shift = 0;
    if (/[A-Z]/.test(letter)) shift = 65;
    else if (/[a-z]/.test(letter)) shift = 97;
    else return letter;
    let code = letter.charCodeAt() - shift + key % 26;
    if (code < 0) code = shift + 26 + code - Math.abs(shift);
    code = code % 26;
    return String.fromCharCode(code + shift);
  }).join``;
}

console.log(encryptor(13, '', ''));
console.log(encryptor(0, 'no cypher'), 'no cypher');
console.log(encryptor(13, 'Caesar Cipher'), 'Pnrfne Pvcure');
console.log(encryptor(-5, 'Hello World!'), 'Czggj Rjmgy!');
console.log(encryptor(27, 'Whoopi Goldberg'), 'Xippqj Hpmecfsh');
console.log(encryptor(-52, 'M?tMb!c,,$#!k}p<p'), 'M?tMb!c,,$#!k}p<p');

// best

/* 
function encryptor(key, message) {
  key = (key % 26 + 26) % 26;
  
  return message.replace(/[a-z]/gi, letter => {
    const shift = (letter >= "a") ? 97 : 65;
    return String.fromCharCode((letter.charCodeAt() - shift + key) % 26 + shift); 
  });
}
*/

/* 
function encryptor (key, message) {
  key = key % 26;
  return message
    .split('')
    .map((char) => {
      const lowerCaseChar = char.toLowerCase();
      const upperCaseChar = char.toUpperCase();
      
      if (lowerCaseChar === upperCaseChar) return char;
      
      const isUpperCase = (char === upperCaseChar);
      const subtrahend = isUpperCase ? 65 : 97;
      const charCode = char.charCodeAt(0);
      const newCharCode = (charCode + key + 26 - subtrahend) % 26 + subtrahend;
  
      return String.fromCharCode(newCharCode);
    })
    .join('');
}
*/