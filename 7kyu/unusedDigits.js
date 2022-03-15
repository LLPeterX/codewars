/* 
7kyu - Filter unused digits
https://www.codewars.com/kata/55de6173a8fbe814ee000061/train/javascript
Given a list of integers, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
*/

// function unusedDigits(...args) {
//   let nums = [...new Set(args.join('').split(''))];
//   return [..."0123456789"].filter(d => nums.indexOf(d) < 0).sort().join``;
// }

const unusedDigits = (...args) => [..."0123456789"].filter(d => [...new Set(args.join('').split(''))].indexOf(d) < 0).sort().join``;


console.log(unusedDigits(12, 34, 56, 78), "09")
console.log(unusedDigits(2015, 8, 26), "3479")

// best

/* 
function unusedDigits(...args){
  return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '')
}
*/

/* 
const unusedDigits = (...n) => [...'0123456789'].filter(v => [...`${n}`].indexOf(v) == -1).join('');
*/