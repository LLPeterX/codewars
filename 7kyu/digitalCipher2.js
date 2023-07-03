/* 
7kyu - Digital cypher vol 2
https://www.codewars.com/kata/592edfda5be407b9640000b2/train/javascript

Digital Cypher assigns to each letter of the alphabet unique number. For example:

 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9 10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
14 15 16 17 18 19 20 21 22 23 24 25 26

Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

 s  c  o  u  t
19  3 15 21 20

hen we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

   s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21

   m  a  s  t  e  r  p  i  e  c  e
  13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  14 10 22 29  6 27 19 18  6  12 8

Task:
Write a function that accepts an array of integers code and a key number.
 As the result, it should return string containg a decoded message from the code.
*/



function decode(code, n) {
  let s = n.toString();
  let key = s.repeat(~~(code.length / s.length)) + s.slice(0, code.length % s.length);
  return code.map((d, i) => String.fromCharCode(96 + d - key[i])).join``;
}


console.log(decode([20, 12, 18, 30, 21], 1939), "scout");
console.log(decode([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939), "masterpiece");
//                  1   9   3   9   1   9  3   9   1  9   3

// best

/* 
function decode(code, n) {
  const key = String(n)
  return String.fromCharCode(...code.map((c, i) => c - Number(key[i % key.length]) + 96))
}
*/

/* 
const decode = (code, n) =>
  code.reduce((pre, val, idx) => pre + String.fromCharCode(val - `${n}`[idx % `${n}`.length] + 96), ``);
*/