/* 
7kyu - ONE ONe One one
https://www.codewars.com/kata/588ac50727eb94c87700001f/train/javascript

Write function consecutiveOnes(nums) {} that takes in array nums and returns the maximum consecutive 1's

For example: consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
*/

/* 
// Error: Maximum call stack
function consecutiveOnes(nums) {
  let ones = nums.join('').match(/1+/g);
  return ones ? Math.max(...ones.map(e => e.length)) : 0;
};
 */

function consecutiveOnes(nums) {
  let count = max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }
  return max;
}

// best

/* 
function consecutiveOnes(a) {
  var result = 0, counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      counter++;
    } else {
      result = Math.max(counter, result);
      counter = 0;
    }
  }
  return Math.max(result, counter);
}
*/

console.log(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]), 3);
console.log(consecutiveOnes([1, 1, 0, 0, 1]), 2);
console.log(consecutiveOnes([1, 1, 1, 1, 1]), 5);
console.log(consecutiveOnes([0, 0, 0, 0, 0]), 0);
console.log(consecutiveOnes([0, 0, 0, 0, 1]), 1);
