/* 
7kyu - Sum of integers in string
https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript
*/

function sumOfIntegersInString(s) {
  let arr = s.match(/(\d+)/g);
  return arr ? arr.reduce((sum, v) => sum + +v, 0) : 0;
}

console.log(sumOfIntegersInString("12.4")); // 16
console.log(sumOfIntegersInString("h3ll0w0rld")); // 3
console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy")); // 3635

//best
/*
function sumOfIntegersInString(s) {
  return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);
}
*/