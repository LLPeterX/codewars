/* 
7kyu - ASCII Shift Encryption/Decryption
https://www.codewars.com/kata/56e9ac87c3e7d512bc001363/train/javascript

The goal of this kata is to create a very simple ASCII encryption and decryption. 
The encryption algorithm should shift each character's charcode by the character's current index 
in the string (0-based).

The input strings will never require to go outside of the ASCII range.
*/

function asciiEncrypt(plaintext) {
  //let result = "";
  // for (let i = 0; i < plaintext.length; i++) {
  //   let c = plaintext.charCodeAt(i);
  //   let c1 = (c - 65 + i);
  //   let c2 = String.fromCharCode(c1 + 65);
  //   result += c2;
  // }
  //result = [...plaintext].reduce((res, c, i) => res + String.fromCharCode((c.charCodeAt() - 65 + i) % 128 + 65), "")
  //return result;
  return [...plaintext].reduce((res, c, i) => res + String.fromCharCode((c.charCodeAt() - 65 + i) % 128 + 65), "")
}

function asciiDecrypt(ciphertext) {
  return [...ciphertext].reduce((res, c, i) => res + String.fromCharCode((c.charCodeAt() - 65 - i) % 128 + 65), "")
}


// ----------------------- debug ----------------------------------------------------
function doTest(plaintext, ciphertext) {
  console.log(asciiEncrypt(plaintext), ciphertext, `encrypting "${plaintext}"`);
  console.log(asciiDecrypt(ciphertext), plaintext, `decrypting "${ciphertext}"\n`);
}
doTest("PASSWORD", "PBUV[TXK");
doTest("password", "pbuv{txk");
doTest("", "");
doTest("zzzzz", "z{|}~");
doTest("ZZZZZ", "Z[\\]^");
doTest("aaaa", "abcd");
doTest("AAAA", "ABCD");
doTest("0123456789", "02468:<>@B");


// best

/* 
asciiEncrypt=p=>p.replace(/./g,(e,i)=>String.fromCharCode(e.charCodeAt()+i));    
asciiDecrypt=p=>p.replace(/./g,(e,i)=>String.fromCharCode(e.charCodeAt()-i));
*/