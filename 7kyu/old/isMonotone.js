/* 
7kyu - Monotone travel
https://www.codewars.com/kata/54466996990c921f90000d61/train/javascript

You're given a list of compareable elements:

heights = [h1, h2, h3, …, hn]
Your job is to check whether for any x all successors are greater or equal to x.

isMonotone([1,2,3]) == true
isMonotone([1,1,2]) == true
isMonotone([1])     == true
isMonotone([3,2,1]) == false
isMonotone([3,2,2]) == false
*/

var isMonotone = function (arr) {
  //return arr.slice(1).some((v, i) => v < arr[i]);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

console.log(isMonotone([1, 2, 3]), true);
console.log(isMonotone([1, 1, 2]), true);
console.log(isMonotone([1]), true);
console.log(isMonotone([3, 2, 1]), false);
console.log(isMonotone([3, 2, 2]), false);

//best

/* 
const isMonotone = $ => $.slice(1).some((e,i) => e < $[i]) ? false : true
*/