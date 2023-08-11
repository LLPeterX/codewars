/* 
7kyu - Odd-Even String Sort
https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript

Given a string s. 
You have to return another string such that even-indexed and odd-indexed characters 
of s are grouped and groups are space-separated
*/

function sortMyString(S) {
  const evens = [], odds = [];
  for (let i = 0; i < S.length; i++) {
    if (i % 2) odds.push(S[i]); else evens.push(S[i]);
  }
  return [...evens, ' ', ...odds].join``;
}



console.log(sortMyString("CodeWars"), "CdWr oeas");
console.log(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");

// best
/* 
function sortMyString(S) {
  let evenS = S.split('').filter((x,i) => i % 2).join('')
  let oddS = S.split('').filter((x,i) => !(i % 2)).join('')
  return oddS + ' ' + evenS
}
*/