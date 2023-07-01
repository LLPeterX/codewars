/* 
6kyu - Split and then add both sides of an array together.
https://www.codewars.com/kata/5946a0a64a2c5b596500019a/train/javascript

Task:
You will receive an array as parameter that contains 1 or more integers and a number n.
   Here is a little visualization of the process:

- Step 1: Split the array in two:
  [1, 2, 5, 7, 2, 3, 5, 7, 8]
        /            \
  [1, 2, 5, 7]    [2, 3, 5, 7, 8]

- Step 2: Put the arrays on top of each other:

     [1, 2, 5, 7]
  [2, 3, 5, 7, 8]
 
 -  Step 3: Add them together:

  [2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array.
*/

function splitAndAdd(arr, n) {
  while (n-- > 0 && arr.length > 1) {
    if (arr.length % 2) arr.unshift(0);
    arr = arr.slice(0, arr.length / 2).map((e, i) => e + arr[i + arr.length / 2]);
  }
  return arr;
}


console.log(splitAndAdd([4, 2, 5, 3, 2, 5, 7], 2), [10, 18]);
console.log(splitAndAdd([1, 2, 3, 4, 5], 2), [5, 10])
console.log(splitAndAdd([1, 2, 3, 4, 5], 3), [15])
console.log(splitAndAdd([15], 3), [15])
console.log(splitAndAdd([32, 45, 43, 23, 54, 23, 54, 34], 2), [183, 125])
console.log(splitAndAdd([32, 45, 43, 23, 54, 23, 54, 34], 0), [32, 45, 43, 23, 54, 23, 54, 34])
console.log(splitAndAdd([3, 234, 25, 345, 45, 34, 234, 235, 345], 3), [305, 1195])
console.log(splitAndAdd([3, 234, 25, 345, 45, 34, 234, 235, 345, 34, 534, 45, 645, 645, 645, 4656, 45, 3], 4), [1040, 7712])
console.log(splitAndAdd([23, 345, 345, 345, 34536, 567, 568, 6, 34536, 54, 7546, 456], 20), [79327])