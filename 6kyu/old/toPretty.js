/* 
6kyu - Pretty date
https://www.codewars.com/kata/53988ee02c2414dbad000baa/train/javascript
*/
// first solution
//
// function toPretty(seconds) {
//   const fmt = (value, text) => `${value === 1 ? (text === 'hour' ? 'an' : 'a') : value} ${text}${value > 1 ? 's' : ''} ago`;
//   if (seconds === 0) return "just now";
//   let weeks = Math.floor(seconds / 3600 / 24 / 7);
//   if (weeks > 0) return fmt(weeks, 'week');
//   let days = Math.floor(seconds / 3600 / 24);
//   if (days > 0) return fmt(days, 'day');
//   let hours = Math.floor(seconds / 3600);
//   if (hours > 0) return fmt(hours, 'hour');
//   let minutes = Math.floor(seconds / 60);
//   if (minutes > 0) return fmt(minutes, 'minute');
//   return fmt(seconds, 'second');
// }

// second solution
const fmt = (value, text) => `${value === 1 ? (text === 'hour' ? 'an' : 'a') : value} ${text}${value > 1 ? 's' : ''} ago`;
function toPretty(seconds) {
  if (seconds === 0) return "just now";
  const data = { 'week': 604800, 'day': 86400, 'hour': 3600, 'minute': 60, 'second': 1 };
  for (let x in data) {
    if (Math.floor(seconds / data[x]) > 0) return fmt(Math.floor(seconds / data[x]), x);
  }
}

