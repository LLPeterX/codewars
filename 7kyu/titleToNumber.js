/* 
7kyu - Excel sheet column numbers
https://www.codewars.com/kata/55ee3ebff71e82a30000006a/train/javascript

titleTonumber('A') === 1
titleTonumber('Z') === 26
titleTonumber('AA') === 27
*/

function titleToNumber(title) {
  return [...title].reduce((sum, v) => sum + (v.charCodeAt() - 64) + sum * 25, 0);
}

