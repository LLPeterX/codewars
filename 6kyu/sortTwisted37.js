/* 
6kyu - Sorting on planet Twisted-3-7
https://www.codewars.com/kata/58068479c27998b11900056e

#Sorting on planet Twisted-3-7

There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference: #The values of the digits 3 and 7 are twisted. Our 3 means 7 on the planet Twisted-3-7. And 7 means 3.

Your task is to create a method, that can sort an array the way it would be sorted on Twisted-3-7.

7 Examples from a friend from Twisted-3-7:

[1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
[12,13,14] -> [12,14,13]
[9,2,4,7,3] -> [2,7,4,3,9]
*/

function sortTwisted37(array) {
  let ix = {};
  array.map((n, k) => {
    let strNum = "" + n, res = "";
    for (let i = 0; i < strNum.length; i++) {
      if (strNum[i] === '3') res += '7';
      else if (strNum[i] === '7') res += '3';
      else res += strNum[i];
    }
    ix[k] = +res;
    return res;
  });
  return Object.entries(ix).sort((a, b) => a[1] - b[1]).map(x => array[x[0]]);
}

console.log(sortTwisted37([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 7, 4, 5, 6, 3, 8, 9]);
console.log(sortTwisted37([12, 13, 14]), [12, 14, 13]);
console.log(sortTwisted37([9, 2, 4, 7, 3]), [2, 7, 4, 3, 9]);

// best

/* 
function sortTwisted37(array) {
  const MAPPING = {7:3,3:7};
  
  return array.slice().sort((a,b) => twist(a) - twist(b));
  
  function twist(number) {
    return parseInt(number.toString().replace(/[37]/g,a=>MAPPING[a]));
  }
}
*/

/* 
const twist=n=>+(n+"").replace(/./g,x=>x=="-"?x:"0127456389"[x]),
      sortTwisted37=arr=>arr.slice().sort((a,b)=>twist(a)-twist(b))
*/