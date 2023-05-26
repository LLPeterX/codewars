/* 
7kyu - What dominates your array?
https://www.codewars.com/kata/559e10e2e162b69f750000b4/train/javascript

*/

/* 
1) create Map with count of numbers
2) convert Map to array [num, count]
3) sort array by count - descending
4) take first elemen (bigger)
5) check if it greather than 1/2 of array length
*/

function dominator(arr) {
  let a = [...arr.reduce((x, v) => { x.set(v, (x.get(v) || 0) + 1); return x; }, new Map())].sort((a, b) => b[1] - a[1])[0];
  return a[1] > arr.length / 2 ? a[0] : -1;
}
