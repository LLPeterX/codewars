/* 
6kyu - N-th Fibonacci
https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.
*/

const fibonacci = (a, b = {}) => b[a] ? b[a] : b[a] = a < 2 ? a : fibonacci(--a, b) + fibonacci(--a, b);
function nthFibo(n) {
  let f = [], i = 0;
  while (f.length < n) f.push(fibonacci(i++));
  return f.pop();
}

console.log(nthFibo(1), 0, "1-st Fibo");
console.log(nthFibo(2), 1, "2-nd Fibo");
console.log(nthFibo(3), 1, "3-rd Fibo");
console.log(nthFibo(4), 2, "4-th Fibo");

// best

/* 
function nthFibo(n) {
  return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
}
*/

/* 
function nthFibo(n) {
  return Math.round((1/Math.sqrt(5))*Math.pow((1+Math.sqrt(5))/2,n-1))
} 
*/