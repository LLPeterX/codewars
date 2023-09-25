/* 
6kyu - Triple trouble
https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript

Write a function tripledouble(num1,num2) which takes numbers num1 and num2
and returns 1 if there is a straight triple of a number at any place in num1 
and also a straight double of the same number in num2.
*/

function tripledouble(num1, num2) {
  //  let counters = String(num1).match(/(.)\1{2,}/g);
  return (`${num1}`.match(/(.)\1{2,}/g) || []).find(x => new RegExp(x[0] + "{2,}").test(`${num2}`)) ? 1 : 0;
}

console.log(tripledouble(451999277, 41177722899), 1);
console.log(tripledouble(4519992777, 41177722899), 1);
console.log(tripledouble(1222345, 12345), 0);
console.log(tripledouble(12345, 12345), 0);
console.log(tripledouble(666789, 12345667), 1);
console.log(tripledouble(10560002, 100), 1);
console.log(tripledouble(1112, 122), 0)

// best

/* 
function tripledouble(num1, num2) {
  return ~~/(.)(\1{2})(?=.*?,.*?\1{2})/.test(num1 + "," + num2);
}
*/
