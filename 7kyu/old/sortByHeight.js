/* 
7kyu - Simple Fun #88: Sort By Height
https://www.codewars.com/kata/589577f0d1b93ae32a000001/train/javascript
*/

function sortByHeight(a) {
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] >= 0) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] > 0 && a[j] < a[i]) {
          let tmp = a[i];
          a[i] = a[j];
          a[j] = tmp;
        }
      }
    }
  }
  return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]), [-1, 150, 160, 170, -1, -1, 180, 190])
// best
/* 
function sortByHeight(a) {
   var na=a.slice().sort((a,b)=>a-b).filter(a=>a!=-1), p=0;
   return a.map(a=>a==-1?-1:na[p++])
}
*/