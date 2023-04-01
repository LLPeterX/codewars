/* 
6kyu - Simple Encryption #1 - Alternating Split
https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

mplement a pseudo-encryption algorithm which given a string S and an integer N 
concatenates all the odd-indexed characters of S with all the even-indexed characters of S, 
this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
*/

function encrypt(text, n) {
  if (n < 1 || !text) return text;
  for (let k = 0; k < n; k++) {
    let odds = evens = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2) odds += text[i]; else evens += text[i];
    }
    text = odds + evens;
  }
  return text;
}


function decrypt(encryptedText, n) {
  if (n < 1 || !encryptedText) return encryptedText;
  const L = Math.floor(encryptedText.length / 2);
  let res = encryptedText;
  for (let k = 0; k < n; k++) {
    str = "";
    for (let i = 0; i < L; i++) {
      //str += (res[i + L] || "") + (res[i] || "");
      str += res[i + L] + res[i];
    }
    res = str;
  }
  return res + ((encryptedText.length % 2) ? encryptedText[encryptedText.length - 1] : "");

}

console.log(encrypt("012345", 1), "135024");

console.log(encrypt("This is a test!", 0), '=>', "This is a test!");
console.log(encrypt("This is a test!", 1), '=>', "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2), '=>', "s eT ashi tist!");
console.log(encrypt("This is a test!", 3), '=>', " Tah itse sits!");
console.log(encrypt("This is a test!", 4), '=>', "This is a test!");
console.log(encrypt("This is a test!", -1), '=>', "This is a test!");
console.log(encrypt("This kata is very interesting!", 1), '=>', "hskt svr neetn!Ti aai eyitrsig");

console.log(decrypt("135024", 1), "012345");

console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
console.log(decrypt("This is a test!", 4), "This is a test!");
console.log(decrypt("This is a test!", -1), "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

// other

/* 
function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
  }
  return text
}

function decrypt(text, n) {
  let l = text && text.length / 2 | 0
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
  }
  return text
}
*/

/* 
function encrypt(text, n=0) {
  return n<1 || text==null ? text : encrypt( [...text].reduce(([a,b],v,i)=> i%2 ? [a+v,b]:[a,b+v],['','']).join(''), n-1)
}

function decrypt(text, n) {
  return n<1 || text==null ? text : decrypt( [...text].slice(text.length/2).map((v,i) => v+text[i] ).join('').slice(0,text.length), n-1)
}
*/