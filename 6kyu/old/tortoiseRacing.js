/* 
6kyu Tortoise racing
https://www.codewars.com/kata/55e2adece53b4cdcb900006c

Бегут две черепашки A и B.
"A" начинает бежать со скоростью 720 ф/ч.
"B" знает, что бежит быстрее, поэтому пока ест капусту. Когда она начичинает бежать,
A уже пробежала 70 футов, но ее скорость B = 850 ф/ч.
Рассчитать время, когда B догонит A.

Даны 2 скорости v1 и v2, и фора g
*/

function race(v1, v2, g) {
  if(v1>=v2) {
    return null;
  }
  // distance1 = t * v1 + g
  // distance2 = t * v2
  // next, calculate time (t) when distance1 = distance2
  // t*v1+g = t*v2
  // t= g/(v2-v1), in hours
  let resHours = Math.floor(g/(v2-v1)*3600);
  let seconds = resHours%60, minutes = Math.floor(resHours/60%60), hours = Math.floor(resHours / 60 / 60 % 60);
  return [hours, minutes, seconds];
}

console.log(race(720, 850, 70)); // 0 32 18 => 1938 sec
console.log(race(80, 91, 37)); // [3, 21, 49]

//best
/* 
function race(v1, v2, g){
  let time=g/(v2-v1);
  return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
}
*/