/* 
6kyu - Grill it!
https://www.codewars.com/kata/595b3f0ad26b2d817400002a/train/javascript

Introduction
A grille cipher was a technique for encrypting a plaintext by writing it onto a sheet of paper through a pierced sheet (of paper or cardboard or similar). The earliest known description is due to the polymath Girolamo Cardano in 1550. His proposal was for a rectangular stencil allowing single letters, syllables, or words to be written, then later read, through its various apertures. The written fragments of the plaintext could be further disguised by filling the gaps between the fragments with anodyne words or letters. This variant is also an example of steganography, as are many of the grille ciphers.

Write a function that accepts two inputs: message and code and returns hidden message decrypted from message using the code.
The code is a nonnegative integer and it decrypts in binary the message.

grille("abcdef", 5)  => "df"

message : abcdef
code    : 000101
----------------
result  : df
*/

function grille(message, code) {
  let bin = code.toString(2);
  let result = "";
  for (
    let i = bin.length - 1, j = message.length - 1;
    i >= 0 && j >= 0;
    i--, j--
  ) {
    result = (bin[i] === "1" ? message[j] : "") + result;
  }
  return result;
}

console.log(grille("abcdef", 5), "df");
console.log(grille("", 5), "");
console.log(grille("abc", 1), "c");
console.log(grille("tcddoadepwweasresd", 77098), "codewars");
console.log(grille("ab", 255), "ab");
console.log(grille("ab", 256), "");
console.log(grille("abcde", 32), "");
