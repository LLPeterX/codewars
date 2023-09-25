/* 
6kyu - N smallest elements in original order
https://www.codewars.com/kata/5aec1ed7de4c7f3517000079/train/javascript

Дан массив и число N.
Вернуть массив[N] наименьших членов в том порядке, в котором они были в 
оригинальном массиве

Also:

* the number of elements to be returned cannot be higher than the array/list/vector length;
* elements can be duplicated;
* in case of duplicates, just return them according to the original order 
  (see third example for more clarity).

firstNSmallest([1,2,3,4,1],3) === [1,2,1]
*/

function firstNSmallest(array, n) {
  if (n === 0) return [];
  let pos = array.reduce((o, v, i) => {
    if (v in o) {
      o[v].push(i);
    } else {
      o[v] = [i];
    }
    return o;
  }, {});
  let result = [];
  //console.log(' pos=', pos);
  while (n) {
    let minValue = Math.min(...array);
    let k = array.indexOf(minValue);
    let j = pos[minValue].shift();
    result.push([minValue, j]);
    array.splice(k, 1);
    n--;
  }
  return result.sort((a, b) => a[1] - b[1]).map(v => v[0]);
}

console.log(firstNSmallest([1, 2, 3, 4, 5], 3), [1, 2, 3]);
console.log(firstNSmallest([5, 4, 3, 2, 1], 3), [3, 2, 1]);
console.log(firstNSmallest([1, 2, 3, 1, 2], 3), [1, 2, 1]); // !!
console.log(firstNSmallest([1, 2, 3, -4, 0], 3), [1, -4, 0]);
console.log(firstNSmallest([1, 2, 3, 4, 5], 0), []);
console.log(firstNSmallest([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
console.log(firstNSmallest([1, 2, 3, 4, 2], 4), [1, 2, 3, 2]);
console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 2), [2, 1]);
console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 3), [2, 1, 2]);
console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 4), [2, 1, 2, 2]);

// best
/* 
function firstNSmallest(array, n){
 while(array.length != n) {
   array.splice(array.lastIndexOf(Math.max(...array)), 1)
   }
   return array
 }
*/

/* 
function firstNSmallest(arr, n) {
  return arr.map((e,i) => ({e,i}))
    .sort((a,b) => a.e - b.e || a.i - b.i)
    .slice(0,n)
    .sort((a,b) => a.i - b.i)
    .map(w => w.e);
}
*/