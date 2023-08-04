/* 
7kyu - Log without dates
https://www.codewars.com/kata/64cac86333ab6a14f70c6fb6/train/javascript

You will be given an array of events, which are represented by strings. 
The strings are dates in HH:MM:SS format.

It is known that all events are recorded in chronological order 
and two events could not occur in the same second. 

Define the minimum number of days during which the log is written.

Example:
Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"] => 1
Input -> ["12:12:12"] => 1
Input -> ["12:00:00", "23:59:59", "00:00:00"] => 2

*/

/*
function checkLogs(log) {
  const secs = log.map(time => time.split(':').reverse().reduce((s, v, i) => s + v * 60 ** i, 0));
  // also works:
  // let count = 1;
  // for (let i = 1; i < secs.length; i++) {
  //   if (secs[i] <= secs[i - 1]) count++;

  // }
  //return count;
  return secs.reduce((t, v, i, a) => t + (v <= (a[i - 1] ?? -1) ? 1 : 0), 1);
}
*/

//final:
const checkLogs = (log) => log.map(time => time.split(':').reverse().reduce((s, v, i) => s + v * 60 ** i, 0)).reduce((t, v, i, a) => t + (v <= (a[i - 1] ?? -1) ? 1 : 0), 1);

console.log(checkLogs(["12:12:12"]), 1);
console.log(checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]), 1);
console.log(checkLogs(["12:00:00", "23:59:59", "00:00:00"]), 2);
console.log(checkLogs(["12:00:00", "12:00:00", "00:00:00"]), 3);
console.log(checkLogs(["00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00"]), 5);

//best

/* 
function checkLogs(log) {
  let prev = "99:99:99";
  let days = 0;
  log.forEach(t => {
    if (t <= prev) days++;
    prev = t;
  });
  return days;
}
*/

/* 
const  = log =>
  log.filter((num, idx, arr) => !(num > arr[idx-1])).length;
*/

/* 
const

  isTomorrow = (t1,t2) => new Date(`3000-01-01T${t2}`) <= new Date(`3000-01-01T${t1}`),
  checkLogs  = ( log ) => Array.from({length:log.length-1}, (_,i) => i).reduce((d,i)=>d + +(isTomorrow(log[i],log[i+1])),1)
*/

