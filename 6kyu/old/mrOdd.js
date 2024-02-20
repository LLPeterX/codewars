/* 
6kyu - Simple Fun #121: Mr. Odd
https://www.codewars.com/kata/589d74722cae97a7260000d9
*/

function odd(str) {
  let oi = [], k = -1, count = 0;
  for (let c of str) {
    if (c === 'o') {
      oi[++k] = 2;
    } else if (c === 'd') {
      if (--oi[oi.findIndex(v => v > 0)] === 0) count++;
    }
  }
  return count;
}

console.log(odd("oudddbo"), 1);
console.log(odd("ooudddbd"), 2);
console.log(odd("ouddddbo"), 1);

// best
/* 
const odd = s => /o.*d.*d/.test(s) ? 1 + odd( s.slice( s.indexOf("o")+1 ).replace("d","").replace("d","") ) : 0 ;
*/