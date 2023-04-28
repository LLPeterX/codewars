/* 
6kyu - String average
https://www.codewars.com/kata/5966847f4025872c7d00015b/train/javascript
*/

function averageString(str) {
  const d = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let arr = str.split(' ').map(word => d.indexOf(word));
  return arr.some(v => v < 0) ? 'n/a' : d[~~(arr.reduce((s, v) => s + v, 0) / arr.length)];
}

console.log(averageString("zero nine five two"), "four");
console.log(averageString("four six two three"), "three");
console.log(averageString("one two three four five"), "three");
console.log(averageString("five four"), "four");
console.log(averageString("zero zero zero zero zero"), "zero");
console.log(averageString("one one eight one"), "two");
console.log(averageString(""), "n/a");