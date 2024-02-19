/* 
6kyu - Permutations and Dot Products
https://www.codewars.com/kata/5457ea88aed18536fc000a2c/train/javascript

dot a b = a1 * b1 + a2 * b2 + … + an * bn.

Your task is to find permutations of a and b, 
such that dot(a,b) is minimal, and return that value. 

For example, the dot product of [1,2,3] and [4,0,1] is minimal if we switch 0 and 1 in the second vector.
*/


function minDot(a, b) {
  a.sort((x, y) => x - y);
  b.sort((x, y) => y - x);
  return a.reduce((sum, v, i) => sum + v * b[i], 0);
}

