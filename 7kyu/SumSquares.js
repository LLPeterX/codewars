/* 
7kyu - Sum squares of numbers in list that may contain more lists
https://www.codewars.com/kata/57882daf90b2f375280000ad/train/javascript
*/

function SumSquares(l) {
  let sum = 0;
  for (let i = 0; i < l.length; i++) {
    if (Array.isArray(l[i])) {
      sum += SumSquares(l[i]);
    } else {
      sum += l[i] ** 2;
    }
  }
  return sum;
}

var l = [1, 2, 3]
console.log(SumSquares(l), 14)
l = [[1, 2], 3]
console.log(SumSquares(l), 14)
l = [[[[[[[[[1]]]]]]]]]
console.log(SumSquares(l), 1)
l = [10, [[10], 10], [10]]
console.log(SumSquares(l), 400)
l = [1, [[3], 10, 5, [2, [3], [4], [5, [6]]]], [10]]
console.log(SumSquares(l), 325)