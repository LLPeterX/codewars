/* 
6kyu - Collapse Left
https://www.codewars.com/kata/65f1c009e44a0f0777c9fa06/train/javascript

Write a function that takes an array containing numbers and functions. 
The output of the function should be an array of only numbers. 

So how are we to remove the functions from the array?
All functions must be applied to the number before it prior 
to the function being discarded from the array. 
It is as if the functions are collapsing left in the array modifying 
the first number to the left of the function. 
The functions should apply in order of index in the array. 
After a function has been applied to the number before it, 
it should be "removed" from the array to allow any following functions to also modify that new number.

Example
[ 3, f(x) = x + 2, f(x) = x * 5, 4, f(x) = x - 1 ] => [ 25, 3 ]
because

[ (3 + 2) * 5, 4 - 1 ]
Note how all functions collapsed into the closest number to the left; 
they did not produce new numbers into the array, but modified existing ones.

Notes
If a function comes first in the array, it should behave as if it were passed in 0:
[ f(x) = x + 2, 4 ] => [0 + 2, 4]
An empty array passed in must return an empty array.
Functions will always take exactly one, number, parameter.
If an array only contains numbers, the array should be returned without any modifications.
*/

function operationArguments(arr) {
  const result = [];
  for (let arg of arr) {
    if (typeof arg === 'function') {
      result.push(result.length ? arg(result.pop()) : arg(0));
    } else {
      result.push(arg);
    }
  }
  return result;
}

// ---- TESTS ----
const add2 = n => n + 2;
const mul7 = n => n * 7;
console.log(operationArguments([1, 5, 87, 45, 8, 8]), [1, 5, 87, 45, 8, 8]);
console.log(operationArguments([1, add2, 5, add2, mul7, 4, mul7]), [3, 49, 28]);