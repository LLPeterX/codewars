/* 
6kyu - Length of longest subsequence of same incrementing values
https://www.codewars.com/kata/5496033fbecf8ad838000336/train/javascript
*/

function longestSequenceIn(string) {
  if (!string) return 0;
  const nums = string.split(' ');
  let maxCount = delta = prevdelta = count = 0;
  for (let i = 1; i < nums.length; i++) {
    delta = nums[i] - nums[i - 1];
    if (delta !== prevdelta) {
      maxCount = Math.max(maxCount, count);
      prevdelta = delta;
      count = 1;
    } else {
      count++;
    }
  }
  return Math.max(maxCount, count) + 1;
}

console.log(longestSequenceIn("10 11 12"), 3, 'Normal chain');
console.log(longestSequenceIn("1 3 9"), 2, '2 solutions chain');
console.log(longestSequenceIn("7 8 9 2 5 8 11"), 4, 'Increment of 3 chain');
console.log(longestSequenceIn("1 3 9 15 21 7 8 2 3 4"), 4, 'Increment of 6 chain');
console.log(longestSequenceIn("10 11"), 0);