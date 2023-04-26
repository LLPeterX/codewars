/* 
7kyu - Check three and two
https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript

Given an array with exactly 5 strings "a", "b" or "c" ,
check if the array contains three and two of the same values.
*/

function checkThreeAndTwo(array) {
  let m = array.reduce((m, v) => { m.set(v, (m.get(v) || 0) + 1); return m; }, new Map());
  return m.size == 2 && (m.get('a') === 3 || m.get('b') === 3 || m.get('c') === 3);
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]), true);
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"]), false);
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]), false);
console.log(checkThreeAndTwo(['a', 'a', 'a', 'b', 'a']), false);

// cool
/* 
function checkThreeAndTwo(array) {
  var [a,b,c,d,e]=[...array].sort();
  return a!==e&&((a===b&&c===e)||(a===c&&d===e));
}
*/

/* 
const checkThreeAndTwo = arr => new Set(arr).size == 2 && [2, 3].includes(arr.filter(s => s == arr[0]).length);
*/