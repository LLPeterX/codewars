/* 
7kyu - Insert Dashes 2
https://www.codewars.com/kata/55c3026406402936bc000026/train/javascript

This is a follow up from my kata Insert Dashes.
Write a function insertDashII(num) that will insert dashes ('-') between each two odd numbers and asterisk ('*') between each even numbers in num
For example:
insertDashII(454793) --> 4547-9-3
insertDashII(1012356895) --> 10123-56*89-5

Zero shouldn't be considered even or odd.
*/

function insertDashII(num) {
  let s = String(num), res = s[0];
  for (let i = 1; i < s.length; i++) {
    //    let s[i] = +s[i];
    if (s[i] === '0') {
      res += '0';
    } else {
      if (s[i] % 2 && s[i - 1] != 0 && s[i - 1] % 2) {
        res += '-' + s[i];
      } else if (s[i] % 2 === 0 && s[i - 1] != 0 && s[i - 1] % 2 === 0) {
        res += '*' + s[i];
      } else {
        res += s[i];
      }
    }
  }
  return res;
}

console.log(insertDashII(454793), '4547-9-3');
console.log(insertDashII(123456), '123456');
console.log(insertDashII(40546793), '4054*67-9-3');
console.log(insertDashII(1012356895), '10123-56*89-5');

// best

/* 
function insertDashII(num) {
  return String(num)
    .replace(/([13579])(?=[13579])/g, "$1-")
    .replace(/([2468])(?=[2468])/g, "$1*")
}
*/