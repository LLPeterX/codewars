/* 
6kyu - Rooks
https://www.codewars.com/kata/5bc2c8e230031558900000b5/train/javascript

given two numbers n and k, your job is to determine the number of ways one can put k rooks 
on an NxN chessboard so that no two of them are in attacking positions.
*/

const factorial = (n) => (n != 1) ? n * factorial(n - 1) : 1;

function rooks(n, k) {
  let count = 1;
  for (let i = 0; i < k; i++) {
    count *= n * n;
    n--;
  }
  return count / factorial(k);
}

console.log(rooks(1, 1), 1);
console.log(rooks(4, 1), 16);
console.log(rooks(4, 2), 72);
console.log(rooks(5, 3), 600);
console.log(rooks(8, 5), 376320);

//best

/* 
function rooks(n, k) {
  let res = 1n;
  for (let i = 1n, j = n; i <= k; i++, j--)
    res = res * j * j / i;
  return res;
}
*/