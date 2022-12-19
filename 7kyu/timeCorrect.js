/* 
7kyu - Correct the time-string
https://www.codewars.com/kata/57873ab5e55533a2890000c7/train/javascript

Дана срока со временем "HH:MM:SS". Некторые строки ошибочные типа "19:99:99" -> "20:40:39"  
Привести к нормальному виду
*/


function timeCorrect(timestring) {
  if (!timestring) return timestring;
  let [hh, mm, ss] = [...timestring.split(':')].map(Number);
  if (hh == undefined || mm == undefined || ss == undefined || isNaN(hh) || isNaN(mm) || isNaN(ss)) return null;
  if (ss > 59) {
    mm += Math.floor(ss / 60);
    ss = ss % 60;
  }
  if (mm > 59) {
    hh += Math.floor(mm / 60);
    mm = mm % 60;
  }
  hh = hh % 24;
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
}


console.log(timeCorrect(null), null);
console.log(timeCorrect(""), "");

// Invalid Format
console.log(timeCorrect("001122"), null);
console.log(timeCorrect("00;11;22"), null);
console.log(timeCorrect("0a:1c:22"), null);

// Correction Tests
console.log(timeCorrect("09:10:01"), "09:10:01");
console.log(timeCorrect("11:70:10"), "12:10:10");
console.log(timeCorrect("19:99:09"), "20:39:09");
console.log(timeCorrect("19:99:99"), "20:40:39");
console.log(timeCorrect("24:01:01"), "00:01:01");
console.log(timeCorrect("52:01:01"), "04:01:01");

// best
/* 
function timeCorrect(str) {
  const date = new Date(); 
  if (str == '') return str;
  if (!/^\d{2}\:\d{2}\:\d{2}$/g.test(str)) return null;
  date.setUTCHours(...str.split(':'));
  return date.toLocaleTimeString('en', {hour12: false});
}
*/