/* 
6kyu - Even Fibonacci Sum

Give the summation of all even numbers in a Fibonacci sequence up to, but not including, 
the number passed to your function. Or, in other words, sum all the even Fibonacci numbers 
that are lower than the given number n (n is not the nth element of Fibonnacci sequence) 
without including n.

*/

function fibonacci(max) {
  if (max < 2) return 0;
  let evens = [2], next = 8;
  for (let i = 1; next < max; i++) {
    evens.push(next);
    next = evens[i] * 4 + evens[i - 1];
  }
  return evens.reduce((sum, v) => sum + v, 0);
}

console.log(fibonacci(2147483647), 1485607536);
// console.log(fibonacci(1000000000), 350704366);
// console.log(fibonacci(100000000), 82790070);
// console.log(fibonacci(1000000), 1089154);
// console.log(fibonacci(1000), 798);
console.log(fibonacci(5), 2);
console.log(fibonacci(8), 2);
console.log(fibonacci(10), 10);
console.log(fibonacci(1), 0);
console.log(fibonacci(100), 44);

// best

/* 
function fibonacci(max) {
    if (max < 2) return 0;
    let [a, b] = [1,0],
    sum = 0;
    while (b < max) {
         [a,b] = [b, a + b];
        if (b % 2 === 0 && b < max) sum+=b;
           }
    return sum;
}
*/

/* 
function fibonacci(m) {
  let [a,b,n] = [0,1,0];
  while (b<m) [a,b,n] = [b,a+b,b&1?n:n+b];
  return n;
}
*/