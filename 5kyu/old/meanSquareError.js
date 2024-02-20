/* 
5kyu - Mean Square Error
https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

Complete the function that

* accepts two integer arrays of equal length
* compares the value each member in one array to the corresponding member in the other
* squares the absolute value difference between those two values
* and returns the average of those squared absolute value difference between each member pair.
*/

var solution = (firstArray, secondArray) => firstArray.reduce((sum, v, i) => sum + (v - secondArray[i]) ** 2, 0) / firstArray.length;

console.log(solution([1, 2, 3], [4, 5, 6]), 9)
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]), 16.5)
console.log(solution([0, -1], [-1, 0]), 1)