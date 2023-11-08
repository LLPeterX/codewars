/* 
7kyu - Polydivisible Numbers
https://www.codewars.com/kata/5e4217e476126b000170489b/train/javascript
*/

function polydivisible(x) {
  let str = String(x);
  for (let i = 1; i <= str.length; i++) {
    if (str.slice(0, i) % i !== 0) return false;
  }
  return true;
}
