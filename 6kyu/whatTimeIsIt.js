/* 
6kyu - Clocky Mc Clock-Face
https://www.codewars.com/kata/59752e1f064d1261cb0000ec/train/javascript

Дан градус часовой стролки 0...360. Вернуть время "HH:MM"
 Round down to the nearest minute.
*/

/* 
24h = 360
xh - angle
*/
function whatTimeIsIt(angle) {
  console.log(angle);
  let hours = Math.floor(angle * 12 / 360);
  let mins = Math.floor((angle * 12 / 360 - hours) * 60 + 0.00005);
  return `${hours ? ("" + hours).padStart(2, '0') : '12'}:${("" + mins).padStart(2, '0')}`;
}
// console.log(whatTimeIsIt(0), "12:00");
// console.log(whatTimeIsIt(360), "12:00");
// console.log(whatTimeIsIt(90), "03:00");
// console.log(whatTimeIsIt(270), "09:00");
// console.log(whatTimeIsIt(180), "06:00");
console.log(whatTimeIsIt(40), "01:20");
console.log(whatTimeIsIt(266.4266139331308), "08:52");

// best
/* 
var whatTimeIsIt = function(angle) {
let hour = Math.floor(angle/30), minutes = Math.floor((angle%30)*2);
if (hour < 10){hour = "0"+ hour;}
if (hour <= 0){hour = 12;}
if (minutes < 10){minutes = "0" + minutes;}
  return hour + ":" + minutes;
}
*/

/* 
var whatTimeIsIt = function(angle) {
  let h = ~~(angle/30), m = ~~((angle%30)*2);
  return `${h==0?12:h>9?h:"0"+h}:${m>9?m:"0"+m}`
}
*/