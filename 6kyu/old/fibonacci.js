/* 
6kyu - Complete Fibonacci Series
https://www.codewars.com/kata/5239f06d20eeab9deb00049b/train/javascript

The function 'fibonacci' should return an array of fibonacci numbers. 
The function takes a number as an argument to decide how many no. of elements to produce. 
If the argument is less than or equal to 0 then return empty array

Example:

fibonacci(4) // should return  [0,1,1,2]
fibonacci(-1) // should return []
*/

//const fib = (a, b = {}) => b[a] ? b[a] : b[a] = a < 2 ? a : fib(--a, b) + fib(--a, b); // stack overflow
function* fibonacciGenerator() {
  let a = 1, b = 1;
  yield a;
  yield b;
  while (true) {
    let c = a + b;
    a = b;
    b = c;
    yield c;
  }
}

function fibonacci(n) {
  if (n < 1) return [];
  const g = fibonacciGenerator(), res = [0];
  while (res.length < n) res.push(g.next().value);
  return res;
}


console.log(fibonacci(4)); // [0,1,1,2]
// Test.expect(fibonacci(5).length === 5, "Expected 5 elements");
// Test.expect(fibonacci(5)[4] === 3, "Last element for input 5 should be 3");
// Test.expect(fibonacci(13)[12] === 144, "Last element for input 13 should be 144");
// Test.expect(fibonacci(-5).length === 0, "Expected 0 elements for negative input");
// Test.expect(fibonacci(0).length === 0, "Expected 0 elements for 0 input");

// best
/* 
function fibonacci(n) {
  if(n <= 0)
    return [];
  if(n == 1)
    return [0];
  var arr = [0, 1];
  for(var i = 2; i < n; i++)
    arr.push(arr[i - 2] + arr[i - 1]);
  return arr;
}
*/

/* 
function fibonacci(n) {
   return [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765].slice(0,n>0?n:0);
}
*/

/* 
function fibonacci(n) {
  if (n > 0) {
    var results = [0]
    for (var _i = 1; _i <= n -1; _i += 1) {
      if (_i > 2) {
        results.push(results[_i - 1] + results[_i - 2]);
      } else {
        results.push(1);
      }
    }
    return results;
  } else {
    return [];
  }
}
*/

/* 
const fibonacci = n =>
  n < 1 ? [] : n < 2 ? [0] : [...Array(n - 2)].reduce((pre, _, idx) => (pre.push(pre[idx] + pre[++idx]), pre), [0, 1]);
*/