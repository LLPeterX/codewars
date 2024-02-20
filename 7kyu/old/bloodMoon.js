/* 
7kyu - Blood Moon
https://www.codewars.com/kata/5cba04533e6dce000eaf6126
*/

function bloodMoon(r) {
  return +((r * r - (Math.hypot(r, r) / 2) ** 2) / 2).toFixed(2);
}


// best
/* 
function bloodMoon(r){
  return r*r/4;
}
*/

/* 
function bloodMoon(r){
  for (var i=0,c=0.25,s=0; i<r; s+=c,c+=0.5,i++);
  return s;
}
*/