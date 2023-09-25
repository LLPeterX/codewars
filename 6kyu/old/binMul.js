/* 
6kyu - Binary multiplication.
https://www.codewars.com/kata/596a81352240711f3b00006e/train/javascript

The goal of this kata is to multiply two integers using 
the ancient Egyptian method, which only requires 
divisions and multiplications by two, and additions.

Your function takes two integers as input. 
It shall return a list of the steps in the multiplication.

Let M be the largest and N the smallest. 
While M>0, at each step:

- if m is not divisible by 2, add n to the list
- divide m by 2 (integer division)
- multiply n by 2

At the end, return the list in ascending order. 
The result of the multiplication is the sum of the list elements, 
but you have to return only the list.
*/

function binMul(m, n) {
  let result = [];
  let m1 = Math.max(m, n);
  let n1 = Math.min(m, n);
  while (m1 > 0) {
    if (m1 % 2 && n1) result.push(n1);
    m1 >>= 1;
    n1 <<= 1;
  }
  return result.reverse();
}

console.log(binMul(100, 15), [960, 480, 60]);
console.log(binMul(15, 100), [960, 480, 60]);
console.log(binMul(15, 0), []);
console.log(binMul(0, 0), []);


// best

/* 
function binMul(...x) {
  let [m, n] = x.sort((a,b) => b-a)
  if (m * n == 0) return []
  let res = []
  for (let unit = 1; m; unit *= 2)
    if (m & unit) res.push(n * unit), m -= unit
  return res.reverse()
}
*/

/* 
const binMul = (m, n) => {
  if (n > m) [m, n] = [n, m];
  
  const result = [];
  
  while (m && n) {
    if (m % 2) result.unshift(n);
    m >>= 1;
    n <<= 1;
  }
  
  return result;
}
*/