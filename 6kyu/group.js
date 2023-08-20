/* 
6kyu - Organise duplicate numbers in list
https://www.codewars.com/kata/5884b6550785f7c58f000047/train/javascript

Given an array of numbers, your function should return an array of arrays, 
where each subarray contains all the duplicates of a particular number. 
Subarrays should be in the same order as the first occurence of the number they contain:

group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]
*/

function group(arr) {
  const result = [];
  while (arr.length > 0) {
    let n = arr[0], l1 = arr.length, l2
    arr = arr.filter(x => x !== n);
    l2 = arr.length;
    result.push(Array(l1 - l2).fill(n));
  }
  return result;
}

console.log(group([3, 2, 6, 2, 1, 3]), [[3, 3], [2, 2], [6], [1]]);
