/* 
6kyu - Triangle type
https://www.codewars.com/kata/53907ac3cd51b69f790006c5

In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

* If all angles are less than 90°, this triangle is acute and function should return 1.
* If one angle is strictly 90°, this triangle is right and function should return 2.
* If one angle more than 90°, this triangle is obtuse and function should return 3.
* If three sides cannot form triangle, or one angle is 180° 
  (which turns triangle into segment) - function should return 0.

*/

/*
function triangleType(a, b, c) {
  const A90 = Math.PI / 2;
  let [h, k1, k2] = [a, b, c].sort((a, b) => b - a);
  if (k1 + k2 <= h) return 0;
  if (k1 ** 2 + k2 ** 2 === h ** 2) return 2;

  let alfa = Math.acos((Math.pow(k1, 2) + Math.pow(k2, 2) - Math.pow(h, 2)) / (2 * k1 * k2));
  let beta = Math.acos((Math.pow(h, 2) + Math.pow(k2, 2) - Math.pow(k1, 2)) / (2 * h * k2));
  let gama = Math.acos((Math.pow(h, 2) + Math.pow(k1, 2) - Math.pow(k2, 2)) / (2 * h * k1));
  return alfa < A90 && beta < A90 && gama < A90 ? 1 : 3;

}
*/

/*
function triangleType(a, b, c) {
  const A90 = Math.PI / 2;
  let [h, k1, k2] = [a, b, c].sort((a, b) => b - a);
  if (k1 + k2 <= h) return 0;
  if (k1 ** 2 + k2 ** 2 === h ** 2) return 2;
  return [Math.acos((k1 ** 2 + k2 ** 2 - h ** 2) / (2 * k1 * k2)),
  Math.acos((h ** 2 + k2 ** 2 - k1 ** 2) / (2 * h * k2)),
  Math.acos((h ** 2 + k2 ** 2 - k2 ** 2) / (2 * h * k1))].every(v => v < Math.PI / 2) ? 1 : 3
  //return alfa < A90 && beta < A90 && gama < A90 ? 1 : 3;

}
*/

function triangleType(a, b, c) {
  let [h, k1, k2] = [a, b, c].sort((a, b) => b - a);
  return k1 + k2 <= h ? 0 : (k1 ** 2 + k2 ** 2 === h ** 2) ? 2 : [Math.acos((k1 ** 2 + k2 ** 2 - h ** 2) / (2 * k1 * k2)),
  Math.acos((h ** 2 + k2 ** 2 - k1 ** 2) / (2 * h * k2)), Math.acos((h ** 2 + k2 ** 2 - k2 ** 2) / (2 * h * k1))].every(v => v < Math.PI / 2) ? 1 : 3
}


console.log(triangleType(2, 4, 6), 0);
console.log(triangleType(8, 5, 7), 1);
console.log(triangleType(3, 4, 5), 2);
console.log(triangleType(7, 12, 8), 3);


// best
/* 
function triangleType(a, b, c){
  var max = Math.max(a,b,c);
  
  if (a+b+c <= 2*max) return 0;
  if (2*max*max == a*a+b*b+c*c) return 2;
  if (2*max*max >  a*a+b*b+c*c) return 3;
  return 1;
}
*/

/* 
function triangleType(a, b, c){
    if (!(a+b>c && a+c>b && b+c>a)) return 0;
    if (a*a == b*b+c*c || b*b == a*a+c*c || c*c == b*b+a*a) return 2;
    if(a*a > b*b+c*c || b*b > a*a+c*c || c*c > b*b+a*a) return 3;
    return 1;
}
*/