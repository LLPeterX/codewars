/* 
6kyu - Minutes to Midnight
https://www.codewars.com/kata/58528e9e22555d8d33000163/train/javascript

he function minutesToMidnight(d) will take a date object as parameter. 
Return the number of minutes in the following format:

"x minute(s)"

You have to round the number of minutes.
*/

function minutesToMidnight(d) {
  let nextDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
  let minutes = Math.round((nextDate - d) / 60000);
  return `${minutes} minute${minutes === 1 ? '' : 's'}`;
}


var dateBeforeMidnight = new Date(new Date().setHours(23, 59, 0, 0));
console.log(minutesToMidnight(dateBeforeMidnight), "1 minute");


var fullDay = new Date(new Date().setHours(0, 0, 0, 0));
console.log(minutesToMidnight(fullDay), "1440 minutes");

// best

/* 
const minutesToMidnight = d =>
  (val => `${val} minute${val - 1 ? `s` : ``}`)
  (Math.round((new Date().setHours(24, 0, 0, 0) - d) / 6e4));
*/

/* 
function minutesToMidnight(d){
  var minute = Math.round((new Date().setHours(0, 0, 0, 0) + 1000*60*60*24 - d)/1000/60);
  return `${minute} minute${minute===1? '' : 's'}`;
}
*/