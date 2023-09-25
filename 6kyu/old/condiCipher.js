/* 
6kyu - Condi cipher
https://www.codewars.com/kata/59bf6b73bf10a4c8e5000047/train/javascript

Encoding Algorithm
The encoding steps are:

* Start with an initial key, e.g. "cryptogram"
* Form a key, remove the key duplicated letters except for the first occurrence
* Append to it, in alphabetical order all letters which do not occur in the key.
  The example produces: cryptogambdefhijklnqsuvwxz
  Number the key alphabet starting with 1.
1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
c  r  y  p  t  o  g  a  m  b  d  e  f  h  i  j  k  l  n  q  s  u  v  w  x  z

* One of the inputs to encoding algorithm is an initial shift, say 10
* Encode the first letter of your message by moving 10 places (initShift) to the right 
  from the letter's position in the key alphabet. 
  If the first letter were say o then the letter 10 places to the right 
  in the key alphabet is j, so o would be encoded as j. 
   If you move past the end of the key alphabet you wrap back to the beginning. 
   For example if the first letter were s then counting 10 places would bring you around to t.
* Use the position of the previous plaintext letter as the number of places 
  to move to encode the next plaintext number. 
  If you have just encoded an o (position 6) , and you now want to encode say n,
  then you move 6 places to the right from n which brings you to x.
* Keep repeating the previous step until all letters are encoded.

Decoding is the reverse of encoding - you move to the left instead of to the right.

Task
Create two functions - encode/Encode and decode/Decode which implement Condi cipher encoding and decoding.

Inputs
* message - a string to encode/decode
* key - a key consists of only lower case letters
* initShift - a non-negative integer representing the initial shift

Notes
* Don't forget to remove the duplicated letters from the key except for the first occurrence
* Characters which do not exist in the key alphabet should be coppied to the output string 
  exactly like they appear in the message string
* Check the test cases for samples
*/


const createAlphabet = (key) => [...new Set(key + "abcdefghijklmnopqrstuvwxyz")];

function encode(message, key, initShift) {
  const alphabet = createAlphabet(key);
  let result = "";
  for (let char of message) {
    let k = alphabet.indexOf(char);
    if (k < 0) {
      result += char;
    } else {
      result += alphabet[(k + initShift) % 26];
      initShift = k + 1;
    }
  }
  return result;
}

function decode(message, key, initShift) {
  const alphabet = createAlphabet(key);
  let result = "";
  for (let char of message) {
    let k = alphabet.indexOf(char);
    if (k < 0) {
      result += char;
    } else {
      let j = k - initShift;
      if (j < 0) j += 52;
      result += alphabet[j % 26];
      initShift = j + 1;
    }
  }
  return result;
}




console.log(encode("on", "cryptogam", 10), "jx");
console.log(decode("jx", "cryptogam", 10), "on");
console.log(decode("...,", "cryptogam", 10), "...,");
console.log(encode("cryptogram", "cryptogam", 0), "cytgmdfmbk");
console.log(decode("abc", "keykeykeykey", 10), "sit");
console.log(encode("on the first day i got lost.", "cryptogam", 10), "jx wnz xrkvz jnd l ufd vwcz.");
console.log(decode("jx wnz xrkvz jnd l ufd vwcz.", "cryptogam", 10), "on the first day i got lost.");
console.log(encode("i will never eat any grapes again", "superkey", 4), "n ggka cvssb bfe esz omgdyr bqqva");
console.log(decode("n ggka cvssb bfe esz omgdyr bqqva", "superkey", 30), "i will never eat any grapes again");
console.log(decode("qvf cmnxmdkjfca.p,ab mf,byokf vjhwpcyb", "nqhbfgmi", 28), "zva nguhbmmgydx.s,ok se,rmafz vpedgbua");
