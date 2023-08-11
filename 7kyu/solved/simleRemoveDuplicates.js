/* 
7kyu - Simple Remove Duplicates
https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript

Дан массив. 
Удалить левые дубликаты
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
 */

function solve(arr) {
  let res = [];
  while (arr.length) {
    let v = arr.pop();
    if (!res.includes(v)) {
      res.push(v);
    }
  }
  return res.reverse();
}

console.log(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
console.log(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
console.log(solve([1, 2, 3, 4]), [1, 2, 3, 4]);
console.log(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
console.log(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);

//best
/* 
function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}
*/

/* 
const solve = arr => [...new Set(arr.reverse())].reverse()
*/

/* 
const solve = a => Array.from(new Set(a.reverse())).reverse() ;
 */