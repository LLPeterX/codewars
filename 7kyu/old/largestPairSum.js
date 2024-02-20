/* 
7kyu - Largest pair sum in array
https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript
*/

function largestPairSum(numbers) {
  let maxSum = -Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < numbers.length - 1; i++) {
      maxSum = Math.max(maxSum, numbers[i] + numbers[i+1]);
  }
  return maxSum;
}

console.log(largestPairSum([10, 14, 2, 23, 19]), 42, "Sum should be 42");
console.log(largestPairSum([-100, -29, -24, -19, 19]), 0, "Sum should be 0");
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]), 10, "Sum should be 10");
console.log(largestPairSum([-10, -8, -16, -18, -19]), -18, "Sum should be -18");

// best
/* 
function largestPairSum(numbers){
  numbers.sort(function(a, b){ return b - a });
  return numbers[0] + numbers[1];
}
*/