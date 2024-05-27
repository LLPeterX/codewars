/* 
6kyu - Proquints: Pro-nouncable Quint-uplets
https://www.codewars.com/kata/643462af501b65000f2ce9d7/train/javascript
*/

/* 
v    i  t    a  l
1110 01 1101 00 0111 0001001101111000


*/

// may be binary approach should be better
const PROQUINS = ['bdfghjklmnprstvz', 'aiou'];

function fromProquint(proquint) {
  let strValue = '';
  for (let word of proquint.split('-')) {
    for (let i = 0; i < word.length; i++) {
      strValue += PROQUINS[i % 2]
        .indexOf(word[i])
        .toString(2)
        //.padStart(i % 2 ? 2 : 4, '0');
        .padStart(4 - (i % 2) * 2, '0');
    }
  }
  return parseInt(strValue, 2);
}

function toProquint(number) {
  let strNum = number.toString(2).padStart(32, '0');
  let offset = 0;
  let result = '';
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 5; i++) {
      let size = 4 - (i % 2) * 2;
      let letterIndex = parseInt(strNum.slice(offset, offset + size), 2);
      offset += size;
      result += PROQUINS[i % 2][letterIndex];
    }
  }
  return `${result.slice(0, 5)}-${result.slice(5)}`;
}

//console.log(fromProquint('katas').toString(2));
// console.log(fromProquint('vital-datum'), (3880194936).toString(2), "fromProquint('vital-datum')");
// console.log(fromProquint('vital-datum').toString(2), (3880194936).toString(2));
// console.log(fromProquint('solid-katas'), 3385942860, "fromProquint('solid-katas')");
// console.log(fromProquint('human-robot'), 1309259821, "fromProquint('human-robot')");
// console.log(fromProquint('loris-kabob'), 2061262880, "fromProquint('loris-kabob')");
// console.log(fromProquint('monad-gator'), 2319528811, "fromProquint('monad-gator')");
// console.log(fromProquint('rural-juror'), 3200737003, "fromProquint('rural-juror')");
// console.log(fromProquint('tarot-hokum'), 3538766264, "fromProquint('tarot-hokum')");
// console.log(fromProquint('humor-limit'), 1311471133, "fromProquint('humor-limit')");

//console.log(toProquint(3880194936), 'vital-datum', 'toProquint(3880194936)');

// best

/* 
// Olegeant

const LETTERS = 'bdfghjklmnprstvzaiou';

const fromProquint = proquint =>
  +('0b' + proquint.replace(/.-?/g, ([$], i) => (LETTERS.indexOf($) % 16).toString(2).padStart(2 << 1 - i % 2, 0)));

const toProquint = number =>
  number.toString(2).padStart(32, 0).match(/(....)(..)(....)(..)(....)(....)(..)(....)(..)(....)/).slice(1)
        .map(str => LETTERS[((str.length & 2) << 3) + +`0b${str}`])
        .join``.match(/.{5}/g).join`-`;

*/

/* 
// monadius
const consonants = "bdfghjklmnprstvz", vowels = "aiou";

function fromProquint(proquint) {
  return [...proquint].reduce((r, x, i) => x === '-' ? r : i % 2 ? r * 4 + vowels.indexOf(x) : r * 16 + consonants.indexOf(x), 0);
}

function toProquint(number) {
  const quint = n => [4, 2, 4, 2, 4].reduce(([n, r], k, i) => [n >>> k, (i % 2 ? vowels : consonants)[n & 2 ** k - 1] + r], [n, ''])[1];
  return quint(number >>> 16) + '-' + quint(number & 0xffff);
}
*/
