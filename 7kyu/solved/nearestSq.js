/* 
8kyu - Find Nearest square number
https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/train/javascript
*/

function nearestSq(n) {
  let lower = Math.floor(Math.sqrt(n)) ** 2;
  let upper = Math.ceil(Math.sqrt(n)) ** 2;
  return upper - n > n - lower ? lower : upper;
}

console.log(nearestSq(1), 1, "nearestSq(1) = 1");
console.log(nearestSq(2), 1, "nearestSq(2) = 1");
console.log(nearestSq(10), 9, "nearestSq(10) = 9");
console.log(nearestSq(111), 121, "nearestSq(111) = 121");
console.log(nearestSq(9999), 10000, "nearestSq(9999) = 10000");

// best
/* 
function nearestSq(n){
    return Math.round(n**0.5)**2
}
*/
