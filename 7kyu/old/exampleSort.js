/* 
7kyu - Sort by Example
https://www.codewars.com/kata/5747fcfce2fab91f43000697/train/javascript
*/

function exampleSort(arr, exampleArr) {
  let result = [];
  for (let e of exampleArr) {
    let x = arr.filter(y => y === e);
    result = [...result, ...x];
    arr = arr.filter(y => y !== e);
  }
  return [...result, ...arr];
}

console.log(exampleSort([1, 2, 3, 4, 5], [2, 3, 4, 1, 5]), [2, 3, 4, 1, 5]);
console.log(exampleSort([1, 2, 3, 3, 3, 4, 5], [2, 3, 4, 1, 5]), [2, 3, 3, 3, 4, 1, 5]);
console.log(exampleSort([1, 2, 3, 3, 3, 5], [2, 3, 4, 1, 5]), [2, 3, 3, 3, 1, 5]);
console.log(exampleSort([1, 2, 3, 3, 3, 5], [3, 4, 5, 6, 9, 11, 12, 13, 1, 7, 8, 2, 10]), [3, 3, 3, 5, 1, 2]);

// best
/* 
function exampleSort(arr, exampleArr){
  arr.sort( (x,y) => exampleArr.indexOf(x) - exampleArr.indexOf(y) );
  return arr;
}
*/