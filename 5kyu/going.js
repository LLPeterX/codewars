/* 
5kyu - Going to zero or to infinity?
https://www.codewars.com/kata/55a29405bc7d2efaff00007c/train/javascript

*/

//from https://stackoverflow.com/questions/72657176/going-to-zero-or-to-infinity-kotlin

function going(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result /= i;
    result++;
  }
  return Math.trunc(result * 1e6) / 1e6;
}


console.log(going(5), 1.275)
console.log(going(6), 1.2125)
console.log(going(7), 1.173214)
console.log(going(8), 1.146651)