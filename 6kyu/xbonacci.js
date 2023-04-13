/* 
6kyu - Fibonacci, Tribonacci and friends
https://www.codewars.com/kata/556e0fccc392c527f20000c5

You have to build a Xbonacci function that takes a signature of X elements
 - and remember each next element is the sum of the last X elements
- and returns the first n elements of the so seeded sequence.

xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
xbonacci {1,1} produces the Fibonacci sequence
*/

function Xbonacci(signature, n) {
  const result = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (i < signature.length) {
      result[i] = signature[i];
    } else {
      for (let j = 1; j <= signature.length; j++) {
        result[i] += result[i - j];
      }
    }
  }
  return result;
}

console.log(Xbonacci([0, 1], 10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
console.log(Xbonacci([1, 1], 10), [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
console.log(Xbonacci([0, 0, 0, 0, 1], 10), [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]);
console.log(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10), [1, 0, 0, 0, 0, 0, 1, 2, 3, 6]);
console.log(Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256]);

//best
/* 
const Xbonacci = (sig, n) => {
  let len = sig.length;
  for (let i = len; i < n; i++) 
    sig[i] = sig.slice(i - len).reduce((a, b) => a + b);
  return sig.slice(0, n);
}
*/