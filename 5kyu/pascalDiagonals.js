/* 
5kyu - Pascal's Diagonals
https://www.codewars.com/kata/576b072359b1161a7b000a17/train/javascript

Create a function that returns an array containing the first l numbers from the nth diagonal of Pascal's triangle.

n = 0 should generate the first diagonal of the triangle (the ones).
The first number in each diagonal should be 1.
If l = 0, return an empty array.
Both n and l will be non-negative integers in all test cases.
*/


function pascal(n) {
  let p = [[1]]
  while (--n) p.push(p[p.length - 1].map((n, i, a) => i ? a[i - 1] + n : 1).concat(1))
  return p
}

function generateDiagonal(n, l) {
  let triangle = pascal(n + l + 1);
  let res = [], i = 0;
  while (res.length < l) res.push(triangle[n++][i++]);
  return res;
}

//console.log(pascal(7));
console.log(generateDiagonal(2, 5), [1, 3, 6, 10, 15]);
console.log(generateDiagonal(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(generateDiagonal(3, 7), [1, 4, 10, 20, 35, 56, 84]);

//best

/* 
function generateDiagonal(n, l) {
  let arr = Array(l).fill(1)
  for (let i = 0; i < n; ++i) {
    for (let j = 1; j < l; ++j) {
      arr[j] += arr[j-1]
    }
  }
  return arr
}
*/

/* 
function generateDiagonal(n, l){
  let r=Array(l).fill(1)
  while(n--) for(let i=1;i<l;i++) r[i]+=r[i-1]
  return r
}
*/