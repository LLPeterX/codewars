/* 
7kyu - Area of an annulus
https://www.codewars.com/kata/5896616336c4bad1c50000d7/train/javascript

Найти площадь кольца по длине хорды.
S = PI*(1/2*L)^2
 */

function annulusArea(a) {
  return +(Math.PI * (a / 2) ** 2).toFixed(2);
}

console.log(annulusArea(7), 38.48);
console.log(annulusArea(13), 132.73);