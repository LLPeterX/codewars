/* 
7kyu - Nice Array
https://www.codewars.com/kata/59b844528bcb7735560000a0/train/javascript
*/

function isNice(arr) {
  return arr.length == 0 ? false : arr.every((item, _, a) => a.map(e => e + 1).includes(item) || a.map(e => e - 1).includes(item));
}

console.log(isNice([2, 10, 9, 3]), true);
console.log(isNice([3, 4, 5, 7]), false);
console.log(isNice([]), false);

// best

/* 
function isNice(arr){
  return !!arr.length && arr.every(x => arr.some(y => y === x - 1 ||  y === x + 1));
}
*/

