/* 
7kyu - Breaking chocolate problem
https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript

Your task is to split the chocolate bar of given dimension n x m into small squares. 
Each square is of size 1x1 and unbreakable. 
Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, 
but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). 
Input will always be a non-negative integer.
*/

function breakChocolate(n, m) {
  return !n || !m || n + m === 2 ? 0 : (n - 1) + n * (m - 1);
}

console.log(breakChocolate(2, 1), 1)
console.log(breakChocolate(1, 3), 2)
console.log(breakChocolate(5, 5), 24)
console.log(breakChocolate(1, 1), 0)

// best

/* 
var breakChocolate = function(n, m) {
 return (n*m === 0) ? 0 : n * m - 1;
};
*/

/* 
var breakChocolate = function(n, m) {
  if(n === 0 || m === 0) return 0
  return n*m - 1;
 };
 
 */

/*
var breakChocolate = function(n, m) {
  return Math.max(n*m-1,0);
};
*/