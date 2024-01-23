/* 
6kyu - Summarize ranges
https://www.codewars.com/kata/55fb6537544ae06ccc0000dc

Given a sorted array of numbers, return the summary of its ranges.

Examples:
summaryRanges([1, 2, 3, 4]) === ["1->4"]
summaryRanges([1, 1, 1, 1, 1]) === ["1"]
summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]) === ["0->7"]
*/

function summaryRanges(nums) {
  if (nums.length === 0) return [];
  const result = [[nums[0], nums[0]]];
  for (let i = 1, k = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    else if (nums[i] === nums[i - 1] + 1) result[k][1] = nums[i];
    else {
      result.push([nums[i], nums[i]]);
      k++;
    }
  }
  return result.map(([start, end]) => start === end ? `${start}` : `${start}->${end}`);
}

console.log(summaryRanges([]), []);
console.log(summaryRanges([1, 1, 1, 1]), ['1']);
console.log(summaryRanges([1, 2, 3, 4]), ['1->4']);
console.log(summaryRanges([0, 1, 2, 5, 6, 9]), ["0->2", "5->6", "9"]);
console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]), ["0->7"]);
console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7]), ["0->7"]);
console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]), ["0->7", "9->10"]);
console.log(summaryRanges([-2, 0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]), ["-2", "0->7", "9->10", "12"]);