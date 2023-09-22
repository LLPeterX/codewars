/* 
7kyu - Infinitely Nested Radicals
https://www.codewars.com/kata/5af2b240d2ee2764420000a2/train/javascript

precision up to 1e-9
*/

/* 
sqrt(x+sqrt(x+...  = x^2-x
см. https://www.youtube.com/watch?v=FrZD8QnvTaY  
*/
function fn(x) {
  let res = (1 + Math.sqrt(1 + 4 * x)) / 2;
  return res;
}
/* 
const fn = (x) => (1+Math.sqrt(1+4*x))/2;
*/

console.log(fn(2), 2);
console.log(fn(6), 3);
console.log(fn(12), 4);
console.log(fn(1), 1.618033988749895);
console.log(fn(69), 8.82165848854662);