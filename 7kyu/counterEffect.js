/* 
7kyu - Hit Count
https://www.codewars.com/kata/57b6f850a6fdc76523001162/train/javascript


*/

function counterEffect(hitCount) {
  return [...hitCount].map(e => Array.from({ length: +e + 1 }, (_, i) => i));
}

console.log(counterEffect("1250"), '=>', [[0, 1], [0, 1, 2], [0, 1, 2, 3, 4, 5], [0]]);
console.log(counterEffect("0050"), '=>', [[0], [0], [0, 1, 2, 3, 4, 5], [0]]);
console.log(counterEffect("0000"), '=>', [[0], [0], [0], [0]]);