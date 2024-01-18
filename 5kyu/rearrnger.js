/* 
5kyu - Rearrangement of Numbers to Have The Minimum Divisible by a Given Factor
https://www.codewars.com/kata/569e8353166da6908500003d/train/javascript

A function receives a certain numbers of integers n1, n2, n3 ..., np
(all positive and different from 0) and a factor k, k > 0

The function rearranges the numbers n1, n2, ..., np in such order 
that generates the minimum number concatenating the digits and this number should be divisible by k.

If there are more than one possible arrangements for the same minimum number, 
your code should be able to handle those cases:

6, [19, 32, 2, 124, 20, 22] --> "Rearrangements: 124, 19, 20, 2, 22, 32 and 124, 19, 20, 22, 2, 32 generate: 124192022232 divisible by 6"

The arrangements should be in sorted order, 
as you see: 124, 19, 20, 2, 22, 32 
comes first than 124, 19, 20, 22, 2, 32.
*/

function* permutator(permutation) {
  var length = permutation.length,
    c = new Array(length).fill(0),
    i = 1, k, p;
  yield permutation.slice();
  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      yield permutation.slice();
    } else {
      c[i] = 0;
      ++i;
    }
  }
}

function rearranger(k, arr) {
  const divisibles = {};
  const bigK = BigInt(k);
  let minNum = Infinity;
  let count = 0;
  for (let p of permutator(arr)) {
    let str = p.join('');
    let bigNum = BigInt(str);
    if (bigNum % bigK === 0n) {
      if (bigNum > minNum) continue;
      count++;
      if (!divisibles[str]) divisibles[str] = [];
      divisibles[str].push(p);
      if (bigNum < minNum) minNum = bigNum;
    }
  }
  if (count === 0) return "There is no possible rearrangement";
  let combos = divisibles[minNum].map(a => a.join(', ')).join(' and ');
  let n = divisibles[minNum].length;
  return `Rearrangement${n > 1 ? 's' : ''}: ${combos} generate${n > 1 ? '' : 's'}: ${minNum} divisible by ${k}`;
}

// my best


// other

/* 
function rearranger(k, ns) {
  if (k == 6 && ns.join(',') == "19,32,2,124,20,22") return "Rearrangements: 124, 19, 20, 2, 22, 32 and 124, 19, 20, 22, 2, 32 generate: 124192022232 divisible by 6";
  let m = Infinity, r = [];
  k = BigInt(k);
  for (let p of permutations(ns)) {
    let n = BigInt(p.join(""));
    if (n % k == 0) {
      if (n <= m) {
        if (n < m) r = [];
        r.push(p);
        m = n;
      }
    }
  }
  if (r.length == 0) return "There is no possible rearrangement";
  if (r.length == 1) return `Rearrangement: ${r[0].join(', ')} generates: ${m} divisible by ${k}`;
  return `Rearrangements: ${r.map(e => e.join(', ')).join(' and ')} generate: ${m} divisible by ${k}`;
}

const permutations = arr => 
  arr.length ? arr.reduce((a, x, i) => {
    let p = arr.slice();
    p.splice(i, 1);
    return a.concat(permutations(p).map(e => e.concat(x)))
  }, []) : [[]];
*/