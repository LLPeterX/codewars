/* 
7kyu - Simple Fun #3: Late Ride
https://www.codewars.com/kata/588422ba4e8efb583d00007d/train/javascript
*/

function lateRide(n) {
  // let hours = Math.floor(n / 60);
  // let mins = n % 60;
  // return [hours, mins];
  return [...`${Math.floor(n / 60)}${n % 60}`].reduce((s, v) => s + +v, 0);
}

console.log(lateRide(240), 4)
console.log(lateRide(808), 14)
console.log(lateRide(1439), 19)
console.log(lateRide(0), 0)
console.log(lateRide(23), 5)
console.log(lateRide(8), 8)