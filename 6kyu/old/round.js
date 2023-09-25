/* 
6kyu - Round by 0.5 steps
https://www.codewars.com/kata/51f1342c76b586046800002a/train/javascript

Round any given number to the closest 0.5 step
*/

function solution(n) {
  let x = Math.floor(n), d = n - x;
  if (d < 0.25) return x;
  if (d < 0.75) return x + 0.5;
  return Math.ceil(n);
}

console.log(solution(4.2), 4)
console.log(solution(4.4), 4.5)
console.log(solution(4.6), 4.5)
console.log(solution(4.8), 5)
// best

/* 
function solution(n){
  return Math.round(n*2)/2;
}
*/

/* 
function solution(n) {
  var d = n % 1;
  return Math.floor(n) + (d < .25 ? 0 : d >= .75 ? 1 : .5);
}
*/

/* 
const solution = n => ((n * 2 + .5) >> 0) / 2;
*/