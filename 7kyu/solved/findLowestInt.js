/* 
7kyu - Multiples By Permutations II
https://www.codewars.com/kata/5ba178be875de960a6000187/train/javascript

We have two consecutive integers k1 and k2, k2 = k1 + 1
We need to calculate the lowest strictly positive integer n, 
such that: the values n*k1 and n*k2 have the same digits but in different order.
*/

const toSortedString = n => [..."" + n].sort().join``;
function findLowestInt(k) {
  for (let n = k + 2; ; n++) {
    if (toSortedString(n * k) === toSortedString(n * (k + 1))) return n;
  }
}

console.log(findLowestInt(325), 477);
console.log(findLowestInt(599), 2394);
console.log(findLowestInt(855), 999);
console.log(findLowestInt(1), 125874);
console.log(findLowestInt(100), 8919);
console.log(findLowestInt(1000), 89919);
console.log(findLowestInt(10000), 899919)

// best
/* 
function findLowestInt(k) {
  let n = 1;
  const x = k + 1;
  const string = n => n.toString().split``.sort().join``;
  while (1) if (string(n * k) === string(n++ * x)) return --n;
}
*/

/* 
function findLowestInt(k) {
  const l = Math.log10(k);
  if ( Number.isInteger(l) ) {
    const r = [125874,459,8919,89919,899919,8999919,89999919,899999919,8999999919,89999999919,899999999919,8999999999919,89999999999919,899999999999919,8999999999999919,89999999999999919][l];
    if ( ! Number.isSafeInteger(k*r+r) ) console.warn(`overflow: ${k+1} * ${r} ~ ${k*r+r}`);
    return r;
  }
  const sort = n => Array.from(String(n),Number).sort( (v,w) => v-w ).join("") ;
  for ( let i=1; ; i++ )
    if ( sort(k*i)===sort(k*i+i) ) {
      if ( ! Number.isSafeInteger(k*i+i) ) console.warn(`overflow: ${k+1} * ${i} ~ ${k*i+i}`);
      return i;
    }
}
*/