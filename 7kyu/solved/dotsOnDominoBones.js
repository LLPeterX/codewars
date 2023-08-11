/* 
7kyu - Dots on Domino's Bones
https://www.codewars.com/kata/6405f2bb2894f600599172fd

When making this set of dominoes, the manufacturer faced the problem of counting 
the total number of points on all dominoes. This is due to the fact that the dominoes
 are decorated with diamonds, which are dots on the tiles and the cost of which 
 must be estimated during manufacture.

Input data:
The function receives a parameter n, which indicates the maximum number of points on one domino tile.

Test values are -10 < n < 1000

Output data:
Your function should return the optional number of diamond stones to be made for a given set of dice.

If a number less than zero is passed to the function, it should return -1, in Rust return None

Example:
For n=2 the possible knuckles will be as follows --> 0 | 1, 0 | 2, 1 | 1, 1 | 2, 2 | 2 
therefore, the sum of all values on the knuckles will be 1 + 2 + 1 + 1 + 1 + 2 + 2 + 2 = 12
*/

function dotsOnDominoBones(n) {
  if (n < 0) return -1;
  return n * (n + 1) * (n + 2) / 2;
}

console.log(dotsOnDominoBones(2), 12);
console.log(dotsOnDominoBones(3), 30);
console.log(dotsOnDominoBones(20), 4620);