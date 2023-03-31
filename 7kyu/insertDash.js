/* 
7kyu - Insert dashes
https://www.codewars.com/kata/55960bbb182094bc4800007b/train/javascript

Write a function insertDash(num) that will insert dashes ('-') 
between each two odd digits in num. 
For example: if num is 454793 the output should be 4547-9-3. 
Don't count zero as an odd digit.
*/

// function insertDash(num) {
//   let result = "", str = String(num);
//   for (let i = 0; i < str.length - 1; i++) {
//     result += str[i] + ((str[i] % 2 && str[i + 1] % 2) ? '-' : '');
//   }
//   return result + str % 10;
// }

function insertDash(num) {
  return [..."" + num].reduce((str, char, i, arr) => str + char + ((char % 2 && arr[i + 1] % 2) ? '-' : ''), "");
}

console.log(insertDash(454793), '4547-9-3');
console.log(insertDash(123456), '123456');
console.log(insertDash(1003567), '1003-567');

// best
/* 
function insertDash(num) {
   return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}
*/