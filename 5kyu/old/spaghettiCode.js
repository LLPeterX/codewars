/* 
5kyu - Spaghetti Code - #1 Easy
https://www.codewars.com/kata/57d7805cec167081a50014ac/train/javascript
*/

var spaghettiCode = function (plate) {
  let count = {};
  for (let i = 0; i < plate.length; i++) {
    for (let j = 0; j < plate[i].length; j++) {
      let char = plate[i][j];
      if (/[A-Z]/.test(char)) {
        count[char] = (count[char] || 0) + 1;
      }
    }
  }
  let arr = Object.entries(count);
  return arr.length === 0 ? [] : arr.sort((a, b) => b[1] - a[1])[0][0];
}


var plate = [
  'AAAAAAAA____'.split(''),
  '____________'.split(''),
  'BBBBBBBBBBB_'.split(''),
  '____________'.split(''),
  'CCCCCC______'.split('')
];
console.log(spaghettiCode(plate));
plate = [
  'AAAAAAAAA      '.split(''),
  '________A__CCC_'.split(''),
  ' B   C  A    C '.split(''),
  '_B___C__A____C_'.split(''),
  ' B   C       C '.split(''),
  '_B___CCCCCCCCC_'.split('')
];
console.log(spaghettiCode(plate));

// best

/* 
const spaghettiCode = function(plate) {
  const count = {};
  plate.forEach(line => line.forEach(el => /[A-Z]/.test(el) && (count[el] = (count[el] || 0) + 1)));
  const keys = Object.keys(count);
  return keys.length > 0 ? keys.reduce((max, key) => count[max] < count[key] ? key : max) : '';
}
*/

/* 
var spaghettiCode = function(plate) {
  let m = plate.map(x => x.join(''))
    .join('')
    .replace(/[^A-Z]/g,'')
    .split('')
    .sort()
    .join('')
    .match(/(.)\1*/g)
return m ? m.sort((a, b) => b.length - a.length)[0][0] : ''
}
* /

/* 
const spaghettiCode=p=>([...p.join('')].sort().join('').match(/([A-Z])\1*/g)|| [0]).sort((a, b) => b.length - a.length)[0][0] || '';
* /