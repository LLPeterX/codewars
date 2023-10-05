/* 
6kyu - Reach Me and Sum my Digits
https://www.codewars.com/kata/55ffb44050558fdb200000a4/train/javascript

We have the first value of a certain sequence, we will name it init_val. 
We define pattern list, pattern_l, an array that has the differences 
between contiguous terms of the sequence.  
E.g: pattern_l = [k1, k2, k3, k4]

The terms of the sequence will be such values that:

term1 = init_val
term2 - term1 = k1
term3 - term2 = k2
term4 - term3 = k3
term5 - term4 = k4
term6 - term5 = k1
term7 - term6 = k2
term8 - term7 = k3
term9 - term8 = k4
....  - ..... = ...

So the values of the differences between contiguous terms 
are cyclical and are repeated as the differences values 
of the pattern list stablishes.
*/

function sumDigNthTerm(initval, patternl, nthterm) {
  let k = -1;
  while (k < nthterm - 2) initval += patternl[++k % patternl.length];
  return [...String(initval)].reduce((s, v) => s + +v, 0);
}

console.log(sumDigNthTerm(10, [2, 1, 3], 6), 10);
console.log(sumDigNthTerm(10, [2, 1, 3], 15), 10);
console.log(sumDigNthTerm(10, [2, 1, 3], 50), 9);
console.log(sumDigNthTerm(10, [2, 1, 3], 78), 10);
console.log(sumDigNthTerm(10, [2, 1, 3], 157), 7);
