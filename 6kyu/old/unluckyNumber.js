/* 
6kyu - Simple Fun #174: Unlucky Number
https://www.codewars.com/kata/58b65c5e8b98b2e4fa000034/train/javascript

The number is considered to be unlucky if it does not have digits 
4 and 7 and is divisible by 13. 

Please count all unlucky numbers not greater than n.

Example
For n = 20, the result should be 2 (numbers 0 and 13).

For n = 100, the result should be 7 (numbers 0, 13, 26, 39, 52, 65, and 91)

Input/Output
[input] integer n
1 ≤ n ≤ 10^8(10^6 in Python)
*/

// TIMEOUT !!!
function unluckyNumber(n) {
  if (n < 13) return 1;
  let count = 1;
  for (let i = 13; i <= n; i += 13) {
    let strNum = "" + i;
    //console.log(` ${strNum} ${!strNum.includes('4') && !strNum.includes('7')} `);
    if (!strNum.includes('4') && !strNum.includes('7')) count++;
  }
  return count;
}

// тоже timeout
// function unluckyNumber(n) {
//   if (n < 13) return 1;
//   let count = 1;
//   for (let i = 13; i <= n; i += 13) {
//     let strNum = "" + i;
//     let flag = true;
//     for (let j = 0; j < strNum.length; j++) {
//       if (strNum[j] === '4' || strNum[j]==='7') { flag = false; break; }
//     }
//     if (flag) count++;
//   }
//   return count;
// }

console.log(unluckyNumber(100), 7)
console.log(unluckyNumber(400), 22)
console.log(unluckyNumber(500), 22)
console.log(unluckyNumber(600), 27)
console.log(unluckyNumber(700), 31)
console.log(unluckyNumber(800), 31)
console.log(unluckyNumber(900), 35)
console.log(unluckyNumber(1000), 40)
console.log(unluckyNumber(1100), 44)
console.log(unluckyNumber(1200), 49)
console.log(unluckyNumber(1300), 54)
console.log(unluckyNumber(1400), 60)
console.log(unluckyNumber(1500), 60)
console.log(unluckyNumber(1600), 65)
// console.log(unluckyNumber(1000000), 20182)
// console.log(unluckyNumber(73182257), 967977)
// console.log(unluckyNumber(60119653), 809777)