/* 
6kyu - Missing Angle
https://www.codewars.com/kata/58417e9ab9c25c774500001f/train/javascript

 |\
  | \
  |  \
  |   \ 
o |    \ h 
  |     \
  |    θ \
  |_______\ 
     a
Your challange is to write a function that calculates the angle θ in degrees to the nearest integer. 
You will be given three arguments representing each side: o, h and a. 
One of the arguments equals zero. 
Use the length of the two other sides to calculate θ. 
You will not be expected to handle any erronous data in your solution.
*/

//const rad2deg = (r) => Math.round(r * 180 / Math.PI);
function missingAngle(h, a, o) {
  if (!h) h = Math.hypot(a, o);
  else if (!a) a = Math.sqrt(h ** 2 - o ** 2);
  return Math.round(Math.acos(a / h) * 180 / Math.PI);
}

console.log(missingAngle(0, 400, 300), 37);
console.log(missingAngle(5, 4, 0), 37);
console.log(missingAngle(8, 0, 5), 39);
console.log(missingAngle(16.7, 0, 12.3), 47);
console.log(missingAngle(7, 5, 0), 44);


// best

/* 
function missingAngle(h,a,o){
  //  a/h = cos teta = sin alpha
  //  a/o = tan alpha
  //  o/a = tan teta
  //  o/h = sin teta = cos alpha
  
  if(h==0) return Math.round(Math.atan(o/a)*(180/Math.PI))
  if(a==0) return Math.round(Math.asin(o/h)*(180/Math.PI))
  if(o==0) return Math.round(Math.acos(a/h)*(180/Math.PI))
}
*/