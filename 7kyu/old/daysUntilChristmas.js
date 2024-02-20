/* 
7kyu - Countdown to Christmas
https://www.codewars.com/kata/56f6b23c9400f5387d000d48/train/javascript

Your function should take 1 argument (a Date object) which will be the day 
of the year it is currently. 
The function should then work out how many days it is until Christmas.
*/

function daysUntilChristmas(days) {
  let chistmasDate = new Date(days.getFullYear(), 11, 25);
  if (chistmasDate - days < 0) {
    chistmasDate = new Date(days.getFullYear() + 1, 11, 25);
  }
  return Math.floor((chistmasDate - days) / 86400000);
}

console.log((daysUntilChristmas(new Date(2016, 11, 9))), 16);
console.log((daysUntilChristmas(new Date(2016, 11, 8))), 17);
console.log((daysUntilChristmas(new Date(1996, 11, 7))), 18);
console.log((daysUntilChristmas(new Date(2015, 1, 23))), 305);
console.log((daysUntilChristmas(new Date(2001, 6, 11))), 167);
console.log((daysUntilChristmas(new Date(2000, 11, 9))), 16);
console.log((daysUntilChristmas(new Date(1978, 2, 18))), 282);
console.log((daysUntilChristmas(new Date(2016, 11, 25))), 0);
console.log((daysUntilChristmas(new Date(2016, 11, 26))), 364);
console.log((daysUntilChristmas(new Date(2015, 11, 26))), 365);