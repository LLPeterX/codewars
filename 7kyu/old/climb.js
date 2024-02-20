/* 
7kyu - Number Climber
https://www.codewars.com/kata/559760bae64c31556c00006b/train/javascript
*/
function climb(n) {
  let result = [n];
  while (n > 1) {

    // if (n % 2 === 0) {
    //   n /= 2;
    // } else {
    //   n = (n - 1) / 2;
    // }

    result.push(n = (n - n % 2) / 2);
  }
  return result.reverse();
}


console.log(climb(1), [1]);
console.log(climb(6), [1, 3, 6]);
console.log(climb(10), [1, 2, 5, 10]);
console.log(climb(13), [1, 3, 6, 13]);

// best
/* 
function climb(n) {
  var res = [n];
  
  while (n > 1) {
    n = Math.floor(n / 2);
    res.push(n)
  }
  
  return res.reverse();
}
*/

/* 
const climb = n =>
  [...n.toString(2)].map((_, idx, arr) => n >> arr.length - ++idx);
*/


