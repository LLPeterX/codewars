/* 
7kyu - Squeaky Window
https://www.codewars.com/kata/55f8b5b09ec923860200000f/train/javascript
*/

function sliding(nums, k) {
  let result = [];
  for (let i = 0; i < nums.length - k + 1; i++) {
    result.push(Math.max(...nums.slice(i, i + k)));
  }
  return result;
}
