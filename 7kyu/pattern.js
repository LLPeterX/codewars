/* 
7kyu - Complete The Pattern #3 (Horizontal Image of #2)
https://www.codewars.com/kata/557341907fbf439911000022/train/javascript
*/

// function pattern(n) {
//   let str = Array.from({ length: n }, (_, i) => i + 1).reverse();
//   return str.reduce((str, _, i, a) => str + a.slice(0, i + 1).join`` + "\n", "").trimEnd();
// }

// final:
function pattern(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reverse().reduce((str, _, i, a) => str + a.slice(0, i + 1).join`` + "\n", "").trimEnd();
}



// best
/* 
const pattern = (n,s='')=> Array.from({length:n}, _=> s=s+n--).join('\n');
*/