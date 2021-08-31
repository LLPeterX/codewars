/* 
7kyu - Pandemia
https://www.codewars.com/kata/5e2596a9ad937f002e510435/train/javascript
 */

function infected(s) {
  let a = s.split('X'), infected = a.reduce((sum, p) => sum + p.length * p.includes('1'), 0), total = a.reduce((sum, p) => sum + p.length, 0);
  return total ? infected / total * 100 : 0;
}

console.log(infected("01000000X000X011X0X"), 73.33333333333333);
console.log(infected("01X000X010X011XX"), 72.72727272727273);
console.log(infected("XXXXX"), 0);
console.log(infected("0000000010"), 100);
console.log(infected("X00X000000X10X0100"), 42.857142857142854);

// best
/*
function infected(s) {
  return 100 * (s.split('X').filter((c,i)=>c.indexOf(1) > -1).join('').length / s.split('X').join('').length) || 0
}
*/

/*
const infected = s =>
  s.split(`X`).filter(Number).join(``).length / s.replace(/\D/g, ``).length * 100 || 0;
*/