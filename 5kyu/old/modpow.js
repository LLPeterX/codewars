/* 
5kyu - Efficient Power Modulo n
https://www.codewars.com/kata/52fe629e48970ad2bd0007e6/train/javascript

Your task is to create a new implementation of modpow so that it computes (x^y)%n for large y. The problem with the current implementation is that the output of Math.pow is so large on our inputs that it won't fit in a 64-bit float.

You're also going to need to be efficient, because we'll be testing some pretty big numbers.
*/

// solution from https://www.geeksforgeeks.org/modular-exponentiation-power-in-modular-arithmetic/

function modpow(x, y, n) {
  let res = 1;
  x = x % n;
  if (x == 0) return 0;
  while (y > 0) {
    if (y & 1) res = (res * x) % n;
    y = y >> 1;
    x = (x * x) % n;
  }
  return res;
}

console.log(modpow(2, 3, 5), 3)
console.log(modpow(4, 12, 3), 1)
console.log(modpow(11, 10, 300), 1)
console.log(modpow(11, 100000, 49), 32)
console.log(modpow(5, 100000000, 19), 5)

//others

/* 
function modpow(x, y, n) {
    var b = 1;
    while (y) ((!(y % 2)) && (y /= 2) && (x = (x * x) % n)) || ((y--) && (b = (b * x) % n));
    return b;
}
 */

/* 
function modpow(x, y, n) {
  let res = 1
  while(y){
    if(y % 2)
      res = res * x % n
    y = Math.floor(y / 2)
    x = x * x % n
  }
  return res
}
*/