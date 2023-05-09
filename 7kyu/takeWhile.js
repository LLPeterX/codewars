/* 
7kyu - The takeWhile Function
https://www.codewars.com/kata/54f9173aa58bce9031001548/train/javascript

Дан массив и функция. Вернуть первые элементы, для которых функция возвращает true
 */

function takeWhile(arr, pred) {
  let res = [];
  for (let a of arr) {
    if (pred(a)) {
      res.push(a);
    } else {
      return res;
    }
  }
  return res;
}





function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(takeWhile([2, 6, 4, 10, 1, 5, 4, 3], isEven), [2, 6, 4, 10])

// best

/* 
function takeWhile (arr, pred, valid = !0) {
  return arr.filter(x => valid ? valid = pred(x) : false);
}
*/

/* 
var takeWhile = (arr, pred) => { take = true; return arr.filter(v => take &= pred(v)); }
*/