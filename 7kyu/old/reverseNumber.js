/* 
7kyu - Reverse a number in any base
https://www.codewars.com/kata/6469e4c905eaefffd44b6504/train/javascript

Write a function which when given a non-negative integer n and an arbitrary base b, returns the number reversed in that base.
*/


function reverseNumber(n, b) {
  if (b === 1n) return n;
  let rev = [];
  while (n > 0n) {
    rev.unshift(Number(n % b));
    n = (n - n % b) / b;
  }
  let result = 0n;
  for (let i = 0; i < rev.length; i++) {
    result += BigInt(rev[i] * Math.pow(Number(b), i));
  }
  return result;
}

// best
/* 
function reverseNumber(n, b){
  if(b == 1) return n
  let [m, ans] = [n, 0n]
  while(m){
    ans *= b
    ans += m % b
    m = ~~(m / b)
  }
  return ans
}
*/
