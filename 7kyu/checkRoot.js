/* 
7kyu - Always perfect
https://www.codewars.com/kata/55f3facb78a9fd5b26000036/train/javascript
*/

function checkRoot(string) {
  let arr = string.split(',').map(Number);
  if (arr.length !== 4 || arr.some(n => isNaN(n) || !n)) return 'incorrect input';
  if (!(arr[1] === arr[0] + 1 && arr[2] === arr[1] + 1 && arr[3] == arr[2] + 1)) return 'not consecutive';
  let n = arr.reduce((m, v) => m * v, 1) + 1;
  return `${n}, ${Math.sqrt(n)}`;
}

console.log(checkRoot('4,5,6,7'), '841, 29')
console.log(checkRoot('3,s,5,6'), 'incorrect input')
console.log(checkRoot('11,13,14,15'), 'not consecutive')
console.log(checkRoot('11,a,14,15'), "incorrect input")
console.log(checkRoot('0,1,2,3'), "incorrect input")