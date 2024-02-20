/* 
7kyu - Keypad horror
https://www.codewars.com/kata/5572392fee5b0180480001ae/train/javascript

Computer keypad's layout:
7 8 9
4 5 6
1 2 3

Cell phone keypad's layout:
1 2 3
4 5 6
7 8 9

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.
*/

function computerToPhone(numbers) {
  let o = { 7: 1, 8: 2, 9: 3, 1: 7, 2: 8, 3: 9 };
  return [...numbers].map(e => o[e] || e).join``;
}

console.log(computerToPhone("0789456123"), "0123456789")
console.log(computerToPhone("000"), "000")
console.log(computerToPhone("94561"), "34567")
console.log(computerToPhone(""), "")