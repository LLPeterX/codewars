/* 
https://www.codewars.com/kata/597d75744f4190857a00008d/train/javascript
 */

var paintLetterboxes = function(start, end) {
  let res = [0,0,0,0,0,0,0,0,0,0]; // или Array(10).fill(0)
  for(let num = start; num<=end; num++) {
    num.toString().split('').forEach(digit => res[+digit]++);
  }
  return res;
};

console.log(paintLetterboxes(125,132));


