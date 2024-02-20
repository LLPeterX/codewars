/* 
7kyu - What time is it?
https://www.codewars.com/kata/57729a09914da60e17000329/train/javascript

Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.
*/

function getMilitaryTime(input) {
  //let [, h, m, s, pm] = input.match(/(\d{2}):(\d{2}):(\d{2})(AM|PM)/i);
  let [, h, ms, pm] = input.match(/(\d{2}):(\d{2}:\d{2})(AM|PM)/i);
  if (pm === 'PM') {
    //h = (+h + 12) % 12 + 12;
    h = h % 12 + 12;
  } else {
    h %= 12;
  }
  return `${String(h).padStart(2, '0')}:${ms}`;
};

console.log(getMilitaryTime('12:00:01AM'), '00:00:01')
console.log(getMilitaryTime('11:46:47PM'), '23:46:47')
console.log(getMilitaryTime('07:05:45PM'), '19:05:45')
console.log(getMilitaryTime('12:24:25PM'), '12:24:25')

// best
/* 
var getMilitaryTime = function(input) {

  var hour = (input.slice(-2) === 'AM' ? 0 : 12)
           + +input.slice(0, 2) % 12;
  
  var time = ('00' + hour).slice(-2) 
           + input.slice(2, -2)
  
  return time;
  
};
*/