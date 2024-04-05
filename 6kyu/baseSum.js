/* 
6kyu - Sum of numbers in radix / base n
https://www.codewars.com/kata/648c74dc7d6fb400446ec6e1/train/javascript

Create a function baseSum that given an array of string 
in base n and the number n, return the result of summing 
all items of the array when changed to decimal (base-10) and changing it to base n again.

Additional Notes
- The string in the array when being converted to base-10 number 
   can be really big that it exceeds the number size limit, leading to inaccurate result. 
   Find a way to optimize your function.
- You're not allowed to use BigInt, require, eval, or any other functions 
  that may help you cheat through this challenge.
- You will have to deal with leading zeros in the numbers.
- There will be 231 random tests waiting for you.
- Don't worry, this kata is not focused on performance. 
  Most inefficient solution should still be able to pass this kata. However, it's still important to not use inefficient solution.
*/

/* 
надо применить символьную арифметику
*/

const BASE = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function strSum(a, b, base, map) {
  let maxLen = Math.max(a.length, b.length),
    aArr = [...(a || '0').padStart(maxLen, '0')],
    bArr = [...(b || '0').padStart(maxLen, '0')],
    result = "", carry = 0;
  for (let i = maxLen - 1; i >= 0; i--) {
    let k = map[aArr[i]] + map[bArr[i]];
    result = BASE[(k + carry) % base] + result;
    carry = k + carry >= base ? 1 : 0;
  }
  if (carry) result = '1' + result;
  return result;
}

function baseSum(array, n) {
  const map = [...BASE].reduce((o, c, i) => { o[c] = i; return o; }, {}); // for speedup
  return array.reduce((sum, v) => strSum(sum, v, n, map), "0").replace(/^0+/g, '') || '0';
}

console.log(baseSum(['321', 'go'], 25), '3j0');
console.log(baseSum(['00', '00'], 2), '0'); // 
