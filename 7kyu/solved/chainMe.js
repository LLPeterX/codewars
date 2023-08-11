/* 
7kyu - Chain me
https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript

Write a generic function chainer that takes a starting value, and an array of functions to execute on it 
(array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90;
*/

function chain(input, fs) {
  // let result = input;
  // for (func of fs) {
  //   result = func(result);
  // }
  // return result;
  return fs.reduce((result, f) => f(result), input);
}


function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

console.log(chain(2, [add, mult])) // 90;