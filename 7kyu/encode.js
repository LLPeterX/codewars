/* 
7kyu - The old switcheroo 2

Write function encode(str) that takes in a string str and replaces all the letters with their respective positions 
in the English alphabet.

// Bonus point if you don't use toLowerCase()
*/

/* 
function encode(str) {
  return [...str].map(e => {
    if (e.match(/[A-Z]/)) {
      return e.charCodeAt() - 64;
    } else if (e.match(/[a-z]/)) {
      return e.charCodeAt() - 96;
    } else return e;

  }).join``;
}
 */
const encode = str => [...str].map(e => e.match(/[A-Z]/) ? e.charCodeAt() - 64 : e.match(/[a-z]/) ? e.charCodeAt() - 96 : e).join``;


console.log(encode('abc'), '123');
console.log(encode('ABCD'), '1234');
console.log(encode('ZzzzZ'), '2626262626');
console.log(encode('abc-#@5'), '123-#@5');

// best

/* 
function encode(str) {
  return str.replace(/[a-z]/gi, c => c.charCodeAt() - (c < "a" ? 64 : 96))
}
*/

/* 
const encode = str => str.replace(/[A-Z]/gi, val => val.charCodeAt() & 31);
*/