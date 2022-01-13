/* 
7kyu - Password maker
https://www.codewars.com/kata/5637b03c6be7e01d99000046/train/javascript

One suggestion to build a satisfactory password is to start with a memorable phrase or sentence 
and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

-instead of including i or I put the number 1 in the password;
-instead of including o or O put the number 0 in the password;
-instead of including s or S put the number 5 in the password.
*/

function makePassword(phrase) {
  const subst = { "I": 1, "i": 1, "o": 0, "O": 0, "s": 5, "S": 5 };
  return phrase.split(' ').map(w => subst.hasOwnProperty([w[0]]) ? subst[w[0]] : w[0]).join``;
}

console.log(makePassword("Give me liberty or give me death"), "Gml0gmd");
console.log(makePassword("Keep Calm and Carry On"), "KCaC0");

// best
/* 
function makePassword(phrase) {
  return phrase
    .split(' ')
    .map(s => s[0])
    .join('')
    .replace(/i/ig, '1')
    .replace(/o/ig, '0')
    .replace(/s/ig, '5');
}
*/

/* 
const makePassword = (phrase) => phrase
    .split(" ")
    .map((el) => el[0])
    .join("")
    .replace(/[iso]/gi, (x) => ({ i: 1, s: 5, o: 0 }[x.toLowerCase()]));
*/

/* 
const makePassword = $ => $.match(/\b\w/g).join('').replace(/i/ig,'1').replace(/o/ig,'0').replace(/s/ig,'5')
*/