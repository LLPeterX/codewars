/* 
7kyu - Simple Fun #39: Switch Lights
https://www.codewars.com/kata/5888145122fe8620950000f0/train/javascript

*/

function switchLights(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]) {
      a = a.slice(0, i + 1).map(k => +!k).concat(a.slice(i + 1));
    }
  }
  return a;
}

console.log(switchLights([1, 1, 1, 1, 1]), [0, 1, 0, 1, 0])
console.log(switchLights([0, 0]), [0, 0])
console.log(switchLights([1, 0, 0, 1, 0, 1, 0, 1]), [1, 1, 1, 0, 0, 1, 1, 0])
console.log(switchLights([1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1]), [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0])

// best

/* 
const switchLights = a =>
  a.map((_, idx, arr) => arr.slice(++idx).reduce((pre, val) => val ^ pre, 0));
*/