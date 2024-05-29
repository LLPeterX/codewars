/* 
7kyu - Trigrams
https://www.codewars.com/kata/55d8dc4c8e629e55dc000068/train/javascript
*/

function trigrams(phrase) {
  let result = '';
  for (let i = 0; i < phrase.length - 2; i++) {
    result += phrase.slice(i, i + 3).replace(/ /g, '_') + ' ';
  }
  return result.trimEnd();
}

console.log(trigrams('the quick red'), '=>', 'the he_ e_q _qu qui uic ick ck_ k_r _re red');
console.log(trigrams('no'), '');
