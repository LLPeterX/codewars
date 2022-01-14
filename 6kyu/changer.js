/* 
6kyu - Change it up
https://www.codewars.com/kata/58039f8efca342e4f0000023/train/javascript

Create a function that takes a string as a parameter and does the following, in this order:

- Replaces every letter with the letter following it in the alphabet (see note below)
- Makes any vowels capital ('aeiouy')
- Makes any consonants lower case
*/
/* 
function changer(str) {
  let s1 = [...str].map((char) => {
    if (char.match(/[A-Z]/i)) {
      if (char === 'z' || char === 'Z') {
        char = 'A';
      } else {
        char = String.fromCharCode(char.charCodeAt() + 1);
        char = char.match(/[aeiouy]/i) ? char.toUpperCase() : char.toLowerCase();
      }
    }
    return char;
  });
  return s1.join('');

}
 */
function changer(str) {
  return str.replace(/./g, (c) => {
    if (c.match(/[A-Z]/i)) {
      if (c === 'z' || c === 'Z') {
        c = 'A';
      } else {
        c = String.fromCharCode(c.charCodeAt() + 1);
        c = c.match(/[aeiou]/i) ? c.toUpperCase() : c.toLowerCase();
      }
    }
    return c;
  });
}


console.log(changer('Cat30'), 'dbU30');
console.log(changer('Alice'), 'bmjdf');
console.log(changer('sponge1'), 'tqpOhf1');
console.log(changer('Hello World'), 'Ifmmp xpsmE');
console.log(changer('dogs'), 'Epht');
console.log(changer('z'), 'A');


//best

/* 
const changer = str =>
  str
    .toLowerCase()
    .replace(/[a-z]/g, m => String.fromCharCode((m.charCodeAt(0) - 96) % 26 + 97)) 
    .replace(/[aeiou]/g, m => m.toUpperCase())
*/