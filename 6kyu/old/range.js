/* 
6kyu - Range function
https://www.codewars.com/kata/584ebd7a044a1520f20000d5/train/javascript

Create range generator function that will take up to 3 parameters - 
start value, step and stop value. 

This function should return an iterable object with numbers. 
For simplicity, assume all parameters to be positive numbers.

Examples:

range(5) --> 1,2,3,4,5
range(3, 7) --> 3,4,5,6,7
range(2, 3, 15) --> 2,5,8,11,14
*/

function* range(...args) {
  let start = 1, end, step = 1;
  if (args.length < 2) {
    end = args[0];
  } else if (args.length < 3) {
    start = args[0];
    end = args[1];
  } else {
    [start, step, end] = args;
  }
  for (let n = start; n <= end; n += step) yield n;
}

console.log(Array.from(range(5)), [1, 2, 3, 4, 5]);
console.log(Array.from(range(3, 7)), [3, 4, 5, 6, 7]);
console.log(Array.from(range(2, 3, 15)), [2, 5, 8, 11, 14]);

// best

/* 
function range(min, step, max) {
  if (arguments.length === 1) return range(1, 1, min)
  if (arguments.length === 2) return range(min, 1, step)
  const result = []
  for (let i = min; i <= max; i += step) {
    result.push(i)
  }
  return result
}
*/

