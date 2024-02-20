/* 
6kyu - Coding 3min: Collatz Array(Split or merge)
https://www.codewars.com/kata/56fe9d579b7bb6b027000001/train/javascript

Give you an number array arr, and a number n (n>=0), 
In accordance with the rules of kata, returns the array after n times changes .

Rules: In every time of change, 
- when the element of array is an odd number, 
  it changed by x*3+1 (element is x), and merge with next element arr[i]+arr[i+1]
  (i is index of element, if it's the last element of array, do not merge with other element);
- when the element is a even number, changed by x=x/2,and split to two element.


*/


function sc(arr, n) {
  while (n > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        if (i < arr.length - 1) {
          arr[i] = arr[i] * 3 + 1 + arr[i + 1];
          arr.splice(i + 1, 1);
        } else {
          arr[i] = arr[i] * 3 + 1;
        }
      } else {
        let v = arr[i] / 2;
        arr[i] = v;
        arr.splice(i + 1, 0, v);
        i++;
      }
    }
    n--;
  }
  return arr;
}

console.log(sc([3, 4, 5], 3), [29, 4, 4, 4, 4], "good luck!");
console.log(sc([3, 4, 5], 4), [92, 2, 2, 2, 2, 2, 2], "good luck!");
console.log(sc([3, 4, 5], 5), [46, 46, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "good luck!");
console.log(sc([3, 4, 5], 6), [23, 23, 23, 23, 5, 5, 5, 5, 5, 5], "good luck!");
console.log(sc([3, 4, 5], 7), [93, 93, 21, 21, 21], "good luck!");

// best

/* 
const sc = (arr, num) =>
  num ? sc(arr.reduce((pre, val, idx) => pre.concat(val % 2 ? (arr.shift(), val * 3 + 1 + (arr[idx] || 0) ) : [val / 2, val / 2]), []), --num) : arr;
*/

/* 
function sc(arr, n){
  for (var step = 0; step < n; step++){
    for (var index = 0; index < arr.length; index++){
      if (arr[index] % 2){
        arr[index] = arr[index] * 3 + 1 + (index + 1 < arr.length ? arr[index + 1] : 0);
        arr.splice(index + 1, 1);
      } else {
        arr[index] /= 2;
        arr.splice(index, 0, arr[index]);
        index++;
      }
    }
  }
  return arr;
}
*/