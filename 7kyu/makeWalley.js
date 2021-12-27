/* 
7kyu - How Green Is My Valley?
https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4/train/javascript

Input : an array of integers.

Output : this array, but sorted in such a way that there are two wings:

- the left wing with numbers decreasing,
- the right wing with numbers increasing.
- the two wings have the same length. 
-- If the length of the array is odd the wings are around the bottom, 
-- if the length is even the bottom is considered to be part of the right wing.
- each integer l of the left wing must be greater or equal to its counterpart r in the right wing, 
  the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing.

  a = [79, 35, 54, 19, 35, 25], make_valley(a) --> [79, 35, 25, *19*, 35, 54]
*/

function makeValley(arr) {
  let incr = [...arr].sort((a, b) => a - b);
  let decr = [...incr].reverse();
  let res = [], v;
  while (incr.length) {
    v = decr.pop();
    if (v) {
      res.push(v);
      incr.shift();
    }
    v = incr.shift();
    if (v) {
      res.unshift(v);
      decr.pop();
    }
  }
  return res.length % 2 ? res.reverse() : res;
}

console.log(JSON.stringify(makeValley([79, 35, 54, 19, 35, 25])));

console.log(JSON.stringify(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1])), JSON.stringify([17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]));
console.log(JSON.stringify(makeValley([20, 7, 6, 2])), JSON.stringify([20, 6, 2, 7]));
console.log(JSON.stringify(makeValley([14, 10, 8])), JSON.stringify([14, 8, 10]));
console.log(JSON.stringify(makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1])), JSON.stringify([20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18]));
console.log(JSON.stringify(makeValley([20, 16, 14, 10, 1])), JSON.stringify([20, 14, 1, 10, 16]));
console.log(JSON.stringify(makeValley([19, 19, 18, 14, 12, 11, 9, 7, 4])), JSON.stringify([19, 18, 12, 9, 4, 7, 11, 14, 19]));
console.log(JSON.stringify(makeValley([20, 18, 16, 15, 14, 14, 13, 13, 10, 9, 4, 4, 4, 1])), JSON.stringify([20, 16, 14, 13, 10, 4, 4, 1, 4, 9, 13, 14, 15, 18]));
console.log(JSON.stringify(makeValley([20, 20, 16, 14, 12, 12, 11, 10, 3, 2])), JSON.stringify([20, 16, 12, 11, 3, 2, 10, 12, 14, 20]));
console.log(JSON.stringify(makeValley([19, 17, 16, 15, 13, 8, 5, 5, 4, 4, 4])), JSON.stringify([19, 16, 13, 5, 4, 4, 4, 5, 8, 15, 17]));
console.log(JSON.stringify(makeValley([19, 8, 6])), JSON.stringify([19, 6, 8]));

// best

/* 
function makeValley(arr) {
    var leftWing = []
    var rightWing = []
    arr.sort((a, b) => b - a)
      .forEach((el, i) => i % 2 == 0 ? leftWing.push(el) : rightWing.unshift(el))
    
    return [...leftWing, ...rightWing]
}
*/
/* 
function makeValley(arr) {
  arr.sort((a, b)=> b - a )
  const arr1 = [], arr2 = []
  
  for ( let i = 0; i < arr.length; i++ ){
    if ( i % 2 ){
      arr2.push(arr[i])
    } else {
      arr1.unshift(arr[i])
    }
  }
  
  return (arr2.concat(arr1)).reverse()
}
 */

/* 
const makeValley = arr =>
  [...arr.sort((a, b) => b - a).filter((_, idx) => !(idx % 2)), ...arr.filter((_, idx) => idx % 2).reverse()];

   */

