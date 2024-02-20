/* 
7kyu - After(?) Midnight
https://www.codewars.com/kata/56fac4cfda8ca6ec0f001746/train/javascript

Write a function that takes a negative or positive integer, 
which represents the number of minutes before (-) or after (+) Sunday midnight, 
and returns the current day of the week and the current time 
in 24hr format ('hh:mm') as a string.

     0  =>  should return 'Sunday 00:00'
     -3  =>  should return 'Saturday 23:57'
     45  =>  should return 'Sunday 00:45'
    759  =>  should return 'Sunday 12:39'
   1236  =>  should return 'Sunday 20:36'
   1447  =>  should return 'Monday 00:07'
   7832  =>  should return 'Friday 10:32'
  18876  =>  should return 'Saturday 02:36'
 259180  =>  should return 'Thursday 23:40' 
-349000  =>  should return 'Tuesday 15:20'
*/

// function dayAndTime(n) {
//   let ms = new Date(1971, 7, 1).getTime() + n * 60 * 1000;
//   let d1 = new Date(ms);
//   let w = Intl.DateTimeFormat("en-US", { weekday: "long" }).format(d1);
//   let h = d1.getHours();
//   let m = d1.getMinutes();
//   return `${w} ${('' + h).padStart(2, '0')}:${('' + m).padStart(2, '0')}`;
// }

// shorten
function dayAndTime(n) {
  let d = new Date(new Date(1971, 7, 1).getTime() + n * 60 * 1000);
  return `${Intl.DateTimeFormat("en-US", { weekday: "long" }).format(d)} ${('' + d.getHours()).padStart(2, '0')}:${('' + d.getMinutes()).padStart(2, '0')}`;
}


console.log(dayAndTime(0), 'Sunday 00:00');
console.log(dayAndTime(-3), 'Saturday 23:57');
console.log(dayAndTime(45), 'Sunday 00:45');
console.log(dayAndTime(759), 'Sunday 12:39');
console.log(dayAndTime(1236), 'Sunday 20:36');
console.log(dayAndTime(1447), 'Monday 00:07');
console.log(dayAndTime(7832), 'Friday 10:32');
console.log(dayAndTime(18876), 'Saturday 02:36');

// best
/* 
const dayAndTime = minutes => {
    var date = new Date(0, 0, 0),
      daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    date.setTime(date.getTime() + minutes * 60 * 1000);
    return `${daysOfWeek[date.getDay()]} ${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`;
}

const formatNumber = number => (number < 10 ? "0" : "") + number;
*/

/* 
function dayAndTime(n) {
  const date = new Date('March 17, 2019 00:00:00');
  date.setTime(date.getTime() + n * 60 * 1000);
  return date.toLocaleDateString('en', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12 : false });
}
*/

/* 
const dayAndTime = n=>
  new Date(new Date(1970, 0, 4).setMinutes(n)).toLocaleDateString('en-US', {weekday: `long`, hour12 : false, hour: `2-digit`, minute: `2-digit`});
*/