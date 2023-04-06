/* 
6kyu - Find the missing term in an Arithmetic Progression
https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript

*/

/*
// падает на отрицательных значениях в массиве
var findMissing = function (list) {
  let s = Math.sign(list[0]) < 0 ? -1 : 1;
  let mi = +Infinity, ma = -Infinity;
  for (let i = 0; i < list.length - 1; i++) {
    let d = Math.abs(list[i + 1] - list[i]);
    mi = Math.min(mi, d);
    ma = Math.max(ma, d);
  }
  console.log(`  mi=${mi} ma=${ma} s=${s}`);
  //return list.find((v, i, a) => Math.abs(a[i + 1]) === Math.abs(v + mi));
  return list.find((v, i, a) => a[i + 1] === v + ma * s) + mi * s;
}
*/


// from https://vk.com/@unilecs-task-168-resheniya-podpischikov
// https://gist.github.com/Sergey140146659/7c630a20d944b56f8f185d81e751fded
function findMissing(list) {
  let step = (list[list.length - 1] - list[0]) / list.length;
  for (let i = 0, c = list[0]; i < list.length; i++, c += step) if (list[i] != c) return c;
}


console.log(findMissing([1, 3, 4]), 2);
console.log(findMissing([1, 3, 5, 9, 11]), 7);
console.log(findMissing([-11, -25, -32]), -18);
console.log(findMissing([0, 2, 3]), 1);

// best
/* 
var findMissing = function (list) {
  var step = (list[list.length - 1] - list[0]) / (list.length);
  return list.filter(function(val, index) { return val !== (list[0] + index * step); })[0] - step;
}
*/

/* 
var findMissing = function (list) {  
  var expected_sum = (list[0] + list[list.length - 1]) * (list.length + 1) / 2;
  var sum = list.reduce(function(acc, x) { return acc + x; });
  return expected_sum - sum;
}
*/