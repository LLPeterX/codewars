/* 
6kyu - Basics 08: Find next higher number with same Bits (1's)
https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5

find the next higher number (int) with same '1'- Bits.
*/

function nextHigher(n) {
  if (n === 0) return 0;
  let rightBit = n & -Math.abs(n)
  let nextBit = n + rightBit;
  //let rightOnesPattern = ((x ^ nextBit)/rightBit)>>2;
  //rightOnesPattern = (rightOnesPattern) / rightBit;
  //rightOnesPattern >>= 2;
  return nextBit | (((n ^ nextBit) / rightBit) >> 2);
}

console.log(nextHigher(129), 130);
console.log(nextHigher(127), 191);
console.log(nextHigher(1), 2);
console.log(nextHigher(0), 2);

//best
/* 
function nextHigher(n) {
  let s = n.toString(2).replace(/0?1(1*)(0*)$/, "10$2$1");
  return parseInt(s,2);
}
*/

/* 
function nextHigher(n) {
  function bits(b) {
    return b.toString(2).replace(/0/g, '').length
  }
  const num = bits(n++);
  while(bits(n++) !== num);
  return n-1
}
*/