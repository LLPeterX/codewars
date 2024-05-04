/* 
6kyu - Keyword Cipher Helper
https://www.codewars.com/kata/535c1c80cdbf5011e600030f/train/javascript

A keyword cipher is a monoalphabetic cipher which uses a "keyword" to provide encryption. It is somewhat similar to a Caesar cipher.

In a keyword cipher, repeats of letters in the keyword are removed and the alphabet is reordered such that the letters in the keyword appear first, followed by the rest of the letters in the alphabet in their otherwise usual order.

E.g. for an uppercase latin alphabet with keyword of "KEYWORD":

A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z

becomes:

K|E|Y|W|O|R|D|A|B|C|F|G|H|I|J|L|M|N|P|Q|S|T|U|V|X|Z

Any characters not provided in the alphabet should be left in situ when encoding or decoding.
*/

function KeywordCipher(abc, keyword) {
  this.key = new Set([...keyword]);
  this.cipher = [...this.key, ...[...abc].filter((c) => !this.key.has(c))];

  this.encode = function (str) {
    return [...str].map((c) => this.cipher[abc.indexOf(c)] || c).join("");
  };

  this.decode = function (str) {
    return [...str].map((c) => abc[this.cipher.indexOf(c)] || c).join("");
  };
}

var abc = "abcdefghijklmnopqrstuvwxyz";
var key = "keyword";
var cipher = new KeywordCipher(abc, key);

console.log(cipher.encode("abc"), "key");
console.log(cipher.encode("xyz"), "vxz");
console.log(cipher.decode("key"), "abc");
console.log(cipher.decode("vxz"), "xyz");

let abc1 = "abcdefghijklmnopqrstuvwxyz";
let key1 = "tfozcivbsjhengarudlkpwqxmy";
let cipher1 = new KeywordCipher(abc1, key1);
console.log(cipher1.encode("a_bc&*83"), "t_fo&*83");
