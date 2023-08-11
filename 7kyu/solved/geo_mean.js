/* 
7kyu - Mean Means
https://www.codewars.com/kata/57c6b44f58da9ea6c20003da/train/javascript

* Arithmetic mean (or average) is the sum of these numbers divided by n.
* Geometric mean (or average) is the product of these numbers taken to the nth root.

You will be given a list of numbers and their arithmetic mean. 
However, the list is missing one number. 
Using this information, you must figure out and return the geometric mean of the FULL LIST, 
including the number that's missing.


*/

function geo_mean(nums, arith_mean) {
  let missing = arith_mean * (nums.length + 1) - nums.reduce((sum, v) => sum + v);
  return [...nums, missing].reduce((mult, v) => mult * v, 1) ** (1 / (nums.length + 1));
}

console.log(geo_mean([2], 10), 6);
console.log(geo_mean([1, 2], 3), 2.2894284851066637);
console.log(geo_mean([4, 6, 7, 2], 5), 4.580344097847165);