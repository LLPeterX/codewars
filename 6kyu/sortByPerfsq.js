/* 
6kyu - Sorting Arrays by the Amount of Perfect Squares that Each Element May Generate
https://www.codewars.com/kata/582fdcc039f654905400001e/train/javascript

You will be given an array of positive integers. 
The array should be sorted by the amount of distinct perfect squares and reversed, 
that can be generated from each number permuting its digits.

E.g.: arr = [715, 112, 136, 169, 144]

Number   Perfect Squares w/ its Digits   Amount
 715                -                       0
 112               121                      1
 136               361                      1
 169           169, 196, 961                3
 144             144, 441                   2
So the output will have the following order: [169, 144, 112, 136, 715]

When we have two or more numbers with the same amount of perfect squares 
in their permutations, we sorted by their values.

In the example given above, we can see that 112 and 136 both generate a perfect square. So 112 comes first.
*/

function* permute(a, n = a.length) {
  if (n <= 1) yield a.slice();
  else for (let i = 0; i < n; i++) {
    yield* permute(a, n - 1);
    const j = n % 2 ? 0 : i;
    [a[n - 1], a[j]] = [a[j], a[n - 1]];
  }
}

function getSquares(number) {
  return [...new Set(Array.from(permute([...String(number)]))
    .map(e => +e.join('')))]
    .filter(n => Number.isInteger(Math.sqrt(n))).length;
}

function sortByPerfsq(arr) {
  return arr.sort((a, b) => getSquares(b) - getSquares(a) || a - b);
}

// console.log(getSquares(136), 1);
// console.log(getSquares(196), 3);
// console.log(getSquares(715), 0);
//console.log(getSquares(169), 3);
//console.log(getSquares(144), 2);

console.log(sortByPerfsq([715, 112, 136, 169, 144]), [169, 144, 112, 136, 715]);
console.log(sortByPerfsq([234, 61, 16, 441, 144, 728]), [144, 441, 16, 61, 234, 728]);
var arr = [4468, 446689, 169, 4477, 1345689];
console.log(sortByPerfsq(arr), [1345689, 169, 4468, 4477, 446689]);


// best

/* 
const digitOrder = n=>[...n.toString()].sort().join('');
const mem = {};
for(let i=0; i<3163; i++) {// 3162^2 < 1e7 < 3163^2
  var s = digitOrder(i*i);
  mem[s] = mem[s]+1||1;
}
function sortByPerfsq(arr) {
    return arr.map(n=>[n,mem[digitOrder(n)]||0]).sort((a,b)=>b[1]-a[1]||a[0]-b[0]).map(p=>p[0]);
}
*/

/* 
function sortByPerfsq(arr) {
  return arr.map(n => {
    let perms = []
    let perm = (digits,s) => {
      if (!digits.length) perms.push(+s)
      else digits.forEach((d,i)=>perm(digits.filter((_,j)=>i!=j), ''+s+d))
    }
    perm((''+n).split(''),'')
    let c = perms.filter((v,i,a)=>i==a.indexOf(v)&&Math.sqrt(v)%1==0).length
    return {n,c}
  }).sort((a,b)=>b.c-a.c||a.n-b.n).map(o=>o.n)
}
*/

/* 
const sortByPerfsq = arr => {
  const swap = (a, i, j) => [a[i], a[j]] = [a[j], a[i]];
  const perms = n => 
    [...new Set(generate([...(n + '')]))]
      .filter(n => !(Math.sqrt(n) % 1))
      .length;
  function* generate(a, n = a.length) {
    if (n < 2) yield a.join('');
    else 
      for (let i = 0; i < n; i++) {
        yield *generate(a, n - 1);
        swap(a, n % 2 && i, n - 1);
      }
  }
  return arr.sort((a, b) => perms(b) - perms(a) || a - b);
}
*/

/* 
const count = {}
const sortNum = n => n.toString().split('').sort().join('') 
for(let i = 1; i < 100000; i++) {
  const sq = sortNum(i*i)
  count[sq] = (count[sq]||0) + 1
}
function sortByPerfsq(arr) {
  return arr.sort((a, b) => (count[sortNum(b)]||0) - (count[sortNum(a)]||0) || a - b);
}
*/