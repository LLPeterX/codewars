/* 
6kyu - Dragon's Curve
https://www.codewars.com/kata/53ad7224454985e4e8000eaa/train/javascript
*/

Dragon = function (n) {
  if (!Number.isInteger(n) || n < 0) return "";
  let str = "Fa";
  const rpl = { a: 'aRbFR', b: 'LFaLb' };
  for (let i = 0; i < n; i++) {
    str = str.replace(/./g, (c) => rpl[c] ?? c)
  }
  return str.replace(/[ab]/g, '');
}

console.log(Dragon(0), 'F');
console.log(Dragon(1), 'FRFR');
console.log(Dragon(2), 'FRFRRLFLFR');

// best

/* 
function Dragon(n,str) {
  str = str || 'Fa'
  if(~~n != n || n < 0) return ''
  if(n === 0) return str.replace(/[ab]/g, '')
  str = str.replace(/a/g, 'aR_FR').replace(/b/g, 'LFaLb').replace(/_/g, 'b')
  return Dragon(n-1, str)
}
*/