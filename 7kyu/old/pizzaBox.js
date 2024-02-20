/* 
7kyu - Thinkful - Number Drills: Congo warehouses
https://www.codewars.com/kata/5862e7c63f8628a126000e18/train/javascript

Коробка пиццы квадратная 16 дюймов.
Сколько коробок уместится на складе length * width * height футов

(1 дюйм = 1/12 фута)
*/

function boxCapacity(length, width, height) {
  return ~~(length * 12 / 16) * ~~(width * 12 / 16) * ~~(height * 12 / 16);
}

console.log(boxCapacity(32, 64, 16), 13824);
console.log(boxCapacity(20, 20, 20), 3375);
console.log(boxCapacity(80, 40, 20), 27000);

//best
/* 
const boxCapacity = (...args) =>
  args.reduce((pre, val) => pre * (val * 3 >> 2), 1);
*/

/* 
function boxCapacity(l,h,w) {
 return Math.floor(l*3/4) * Math.floor(w*3/4) * Math.floor(h*3/4) 

}

*/