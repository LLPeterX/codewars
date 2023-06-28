/* 
7kyu - Odd Ones Out!
https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/train/javascript

Удалить из массива числа, которые встречаются четное количество раз
*/

function oddOnesOut(nums) {
  let count = nums.reduce((o, v) => { o[v] = (o[v] || 0) + 1; return o; }, {});
  // let rem = Object.entries(count).filter(v => v[1] % 2).map(v => v[0]);
  return nums.filter(n => count[n] % 2 === 0);
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);

// best
/* 
function oddOnesOut(nums) {
  return nums.filter(n => nums.filter(x => x === n).length % 2 === 0);
}
*/