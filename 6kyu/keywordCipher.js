/* 
6kyu - Keyword Cipher
https://www.codewars.com/kata/57241cafef90082e270012d8

Your job is to implement a simple keyword cipher. 
A keyword cipher is a type of monoalphabetic substitution where two parameters are provided 
as such (string, keyword). The string is encrypted by taking the keyword, 
dropping any letters that appear more than once. 
The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.

For example, if your string was "hello" and your keyword was "wednesday",
 your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.

To encrypt 'hello' you'd substitute as follows,

              abcdefghijklmnopqrstuvwxyz
  hello ==>   |||||||||||||||||||||||||| ==> bshhk
              wednsaybcfghijklmopqrtuvxz
hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.
*/

function keywordCipher(string, keyword) {
  let alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
  let key = [];
  for (let i = 0; i < keyword.length && alphabet.length; i++) {
    if (!key.includes(keyword[i])) {
      key.push(keyword[i]);
      alphabet = alphabet.filter(char => char !== keyword[i]);
    }
  }
  key = key.concat(alphabet);
  return [...string.toLowerCase()].map(c => (c >= 'a' && c <= 'z') ? key[c.charCodeAt() - 97] : c).join('');
}

console.log(keywordCipher('hello', 'wednesday'));

console.log(keywordCipher("Welcome home", "secret"), "wticljt dljt", "Expect 'Welcome home' to return 'wlfimhl kmhl'");
console.log(keywordCipher("hello", "wednesday"), "bshhk");
console.log(keywordCipher("HELLO", "wednesday"), "bshhk");
console.log(keywordCipher("HeLlO", "wednesday"), "bshhk");
console.log(keywordCipher("WELCOME HOME", "gridlocked"), "wlfimhl kmhl", "Expect 'WELCOME HOME' to return 'wlfimhl kmhl'");
console.log(keywordCipher("alpha bravo charlie", "delta"), "djofd eqdvn lfdqjga", "Expect 'alpha bravo chalie' to return 'djofd eqdvn lfdqjga'");
console.log(keywordCipher("Home Base", "seven"), "dlja esqa", "Expect 'Home Base' to return 'dlja esqa'");
console.log(keywordCipher("basecamp", "covert"), "ocprvcil", "Expect 'basecamp' to return 'ocprvcil");
console.log(keywordCipher("one two three", "rails"), "mks twm tdpss", "Expect 'one two three' to return 'mks twm tdpss'");
console.log(keywordCipher("Test", "unbuntu"), "raqr", "Expect 'Test' to return 'raqr'");

// best
/* 
function keywordCipher(string, keyword) {
  const dict = new Map(Array.from(
    new Set(keyword + "abcdefghijklmnopqrstuvwxyz"),
    (c, i) => [String.fromCharCode(97 + i), c]
  ))
  return string.replace(/\w/g, c => dict.get(c.toLowerCase()))
}
*/

/*
function keywordCipher(string, keyword){
  var letter = 'abcdefghijklmnopqrstuvwxyz'
  var newKey = [...new Set(keyword + letter)]
  return string.toLowerCase().replace(/[a-z]/g, x => newKey[letter.indexOf(x)])
} 
 */

