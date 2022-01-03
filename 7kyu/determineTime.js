/* 
7kyu - Can Santa save Christmas?
https://www.codewars.com/kata/5857e8bb9948644aa1000246/train/javascript

You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .
*/

function determineTime(durations) {
  return durations.reduce((totalSeconds, timeString) => {
    let hms = timeString.split(':');
    return totalSeconds + +hms[2] + hms[1] * 60 + hms[0] * 3600;
  }, 0) <= 86400;
}

console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"]), true);
console.log(determineTime([]), true);
console.log(determineTime(["12:00:00", "12:00:00"]), true);
console.log(determineTime(["06:00:00", "12:00:00", "06:30:00"]), false);

// best
/* 
const determineTime = durations => durations.map(val => val.split(`:`)).reduce((pre, [h, m, s]) => pre + h * 3600 + m * 60 + +s, 0) <= 8.64e4;
*/