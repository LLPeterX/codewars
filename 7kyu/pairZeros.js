/* 
7kyu - Pair Zeros
https://www.codewars.com/kata/54e2213f13d73eb9de0006d2/train/javascript

For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.

input: [0, 1, 7, 0, 2, 2, 0, 0, 1, 0]
paired: ^--------^        ^--^
    -> [0, 1, 7,    2, 2, 0,    1, 0]
  kept: ^                 ^        ^
*/

function pairZeros(arr) {
  let res = [], p = false;
  for (let digit of arr) {
    if (digit === 0) {
      if (!p) res.push(0);
      p = !p;
    } else {
      res.push(digit);
    }
  }
  return res;
}

console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0]), [1, 0, 1, 2, 0, 3, 0]);

// best
/* 
function pairZeros(arr) {
  var seenZero = 0;
  return arr.filter(function(num){
    return num != 0 || seenZero++ % 2 == 0;
  });
}
*/

/* 
var pairZeros = (a, f) => a.filter(n => n || (f = !f));
*/

/* 
var pairZeros = arr => 
  arr
    .join('')
    .replace(/0([^0]*)0/g, '0$1')
    .split('')
    .map(Number)
*/