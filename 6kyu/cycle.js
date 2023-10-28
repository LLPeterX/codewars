/* 
6kyu - Cycle a list of values
https://www.codewars.com/kata/5456812629ccbf311b000078/train/javascript

*/

function cycle(dir, arr, cur) {
  let k = arr.indexOf(cur);
  if (k < 0) return null;
  k = (k + dir + arr.length) % arr.length;
  return arr[k];
}
