/* 
5kyu - Binary Contiguous Array
https://www.codewars.com/kata/60aa29e3639df90049ddf73d

An array consisting of 0s and 1s, also called a binary array, is given as an input.

Task
Find the length of the longest contiguous subarray which consists of equal number of 0s and 1s.
*/

function binarray(a) {
  if (a.length < 2) return 0;
  const sumsMap = { 0: -1 };
  let sum = maxLen = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] ? 1 : -1;
    if (sum in sumsMap) maxLen = Math.max(maxLen, i - sumsMap[sum]);
    else sumsMap[sum] = i;
  };
  return maxLen;
}
/* 
Code Explanation
Here, we thought of 0 as -1 and 1 as 1, and calculated the sum 
for different windows, when sum is 0, 
we knew that subarray must have the same number of 0 and 1.
*/
console.log(binarray([1, 1, 0, 1, 1, 0, 1, 1]), 4);
console.log(binarray([1, 0, 0, 1, 0, 1, 0, 0]), 6);