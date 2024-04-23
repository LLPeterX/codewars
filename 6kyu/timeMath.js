/* 
6kyu - Time Math
https://www.codewars.com/kata/5aceae374d9fd1266f0000f0/train/javascript

Given two times in hours, minutes, and seconds (ie '15:04:24'),
add or subtract them. This is a 24 hour clock. 
Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').
*/

function timeMath(time1, op, time2) {
  const fmt = (n) => ('' + n).padStart(2, '0');
  const toSec = (t) => t.slice(0,2)*3600 + t.slice(3,5)*60 + +t.slice(-2);
  
  let r = op=='+' ? toSec(time1)+toSec(time2) : toSec(time1)-toSec(time2);
  //console.log(` r=${r} s1=${toSec(time1)} s2=${toSec(time2)}`);
  if(r<0) r+=86400; else r%=86400;
  let s = r%60, m = ((r-s)/60)%60, h=(r-m*60-s)/3600;
  return `${fmt(h)}:${fmt(m)}:${fmt(s)}`;

}

console.log('Add');
console.log(timeMath('01:24:31', '+', '02:16:05'), '03:40:36');
console.log(timeMath('01:24:31', '+', '22:35:28'), '23:59:59');

console.log('Subtract');
console.log(timeMath('11:24:31', '-', '11:24:31'), '00:00:00');
console.log(timeMath('11:24:31', '-', '03:15:28'), '08:09:03');

console.log('Carry +');
console.log(timeMath('00:00:01', '+', '23:59:59'), '00:00:00');
console.log(timeMath('13:48:52', '+', '13:47:53'), '03:36:45');

console.log('Carry -');
console.log(timeMath('00:00:01', '-', '00:00:02'), '23:59:59');
console.log(timeMath('13:48:52', '-', '13:47:53'), '00:00:59');

// best

/* 
function timeMath(time1, op, time2) {
  var t0=new Date("1970-01-01 00:00:00"),
      t1=new Date((new Date("1970-02-01 "+time1)-t0)+(new Date("1970-01-01 "+time2)-t0)*(op=="+"?1:-1))
  return (t1+"").slice(16,24)
}
*/

/* 
function timeMath(time1, op, time2) {

  let seconds = time => 
    time.split(':').reduce((a, b) => a * 60 + +b, 0);
  
  let res = op === '+'
    ? seconds(time1) + seconds(time2)
    : seconds(time1) - seconds(time2);

  let date = new Date(res * 1000);

  return date.toTimeString().slice(0, 8);
    
}
*/