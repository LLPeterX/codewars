/* 
7kyu - Sum of digits
https://www.codewars.com/kata/59cf805aaeb28438fe00001c/train/javascript
*/


function sum1(digits) {
  if (!digits && typeof digits !== 'number') return "";
  let arr = [..."" + digits];
  return arr.join(' + ') + ' = ' + arr.reduce((s, v) => s + +v, 0);
}

const sum = (digits) => (!digits && typeof digits !== 'number') ? "" : [..."" + digits].join(' + ') + ' = ' + [..."" + digits].reduce((s, v) => s + +v, 0);


console.log(sum("5906918088430057")); // "6 + 4 + 3 + 2 + 3 = 18"

//best
/*
const sum = digits =>
  digits || digits === 0 ? [...`${digits}`].join(` + `) + ` = ` + [...`${digits}`].reduce((pre, val) => +val + pre, 0) : ``;
*/