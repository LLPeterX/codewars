/* 
7kyu - Array - squareUp b!
https://www.codewars.com/kata/5a8bcd980025e99381000099/train/javascript

Given an integer n greater than or equal to 0, create and return an array with the following pattern:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
*/

function squareUp(n) {
  let result = [];
  for (let i = n - 1; i >= 0; i--) {
    let arr = Array.from({ length: n }, (_, k) => k < i ? 0 : n - k);
    result = [...result, ...arr];
  }
  return result;
}

console.log(squareUp(4), [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]);
console.log(squareUp(9), [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 0, 0, 6, 5, 4, 3, 2, 1, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(squareUp(1), [1]);

// best
/* 
function squareUp(n) {

  let res = [];

  for (let i = 1; i <= n; i++)
    for (let j = n; j >= 1; j--)
      res.push(j <= i ? j : 0);

  return res;
      
}
*/