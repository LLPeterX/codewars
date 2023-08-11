/* 
7kyu - Collatz Conjecture (3n+1)
https://www.codewars.com/kata/577a6e90d48e51c55e000217
*/

var hotpo = function (n) {
  if (n == 0) return 0; //Optional Handler to n = 0
  let count = 0;
  while (n > 1) {
    n = n % 2 ? 3 * n + 1 : n / 2;
    count++;
  }
  return count;
}

console.log(hotpo(1), 0);
console.log(hotpo(5), 5);
console.log(hotpo(6), 8);
console.log(hotpo(23), 15);

// best

/* 
var hotpo = function(n, acc = 0) {
  if (n <= 1) {
    return acc;
  } else {
    return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
  }
}
*/