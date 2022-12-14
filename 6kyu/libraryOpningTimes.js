/* 
6kyu - Library Opening Times
https://www.codewars.com/kata/56898ff4c115980dd8000051/train/javascript


*/

function openingTimes(str) {
  const min2str = (mins) => {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    return `${("" + h).padStart(2, '0')}:${("" + m).padStart(2, '0')}`;
  }
  const times = [
    ["monday", 480, 1200],
    ["tuesday", 480, 1200],
    ["wednesday", 480, 1200],
    ["thursday", 480, 1200],
    ["friday", 480, 1200],
    ["saturday", 600, 1080],
    ["sunday", 720, 990]
  ];
  let [day, timeStr] = str.split(' ');
  day = day.toLowerCase();
  let [h, m] = timeStr.split(':').map(Number);
  let index = times.findIndex(row => row[0] === day);
  if (h < 0 || h > 23 || m < 0 || m > 59 || index < 0) return "Invalid time!";
  let minutes = h * 60 + m;
  if (minutes > times[index][1] && minutes < times[index][2]) {
    return `Library closes at ${min2str(times[index][2])}`;
  } else if (minutes <= times[index][1]) {
    return `Library opens: today ${min2str(times[index][1])}`;
  }
  index = (index + 1) % 7;
  return `Library opens: ${times[index][0][0].toUpperCase() + times[index][0].slice(1)} ${min2str(times[index][1])}`;

}


console.log(openingTimes("Monday 09:30"), "Library closes at 20:00");
console.log(openingTimes("Saturday 00:00"), "Library opens: today 10:00");
console.log(openingTimes("Tuesday 20:00"), "Library opens: Wednesday 08:00");
console.log(openingTimes("MoNDay 07:59"), "Library opens: today 08:00");
console.log(openingTimes("Tuesday 13:61"), "Invalid time!");
console.log(openingTimes("wednsay 12:40"), "Invalid time!");

// best
/* 
function openingTimes(str) {
  const times = {
    Monday: {open: "08:00", close: "20:00"},
    Tuesday:  {open: "08:00", close: "20:00"},
    Wednesday:  {open: "08:00", close: "20:00"},
    Thursday:  {open: "08:00", close: "20:00"},
    Friday:  {open: "08:00", close: "20:00"},
    Saturday:  {open: "10:00", close: "18:00"},
    Sunday:  {open: "12:00", close: "16:30"},
  }
  const convert = (s) => s.split(":").reduce((a,c) => +a + c/60);
  const tomorrow = (today) => Object.keys(times)[(Object.keys(times).indexOf(today) + 1)%7];
  const [day_unfiltered,time] = str.split(/ /);
  const day = day_unfiltered.toLowerCase().replace(/^./, (match) => match.toUpperCase());
  const [hh,mm] = time.split(/:/);
  if (!times[day] || hh > 23 || mm > 59) return "Invalid time!"
  if (convert(time) < convert(times[day].open)) return `Library opens: today ${times[day].open}`
  if (convert(time) < convert(times[day].close)) return `Library closes at ${times[day].close}`
  if (convert(time) >= convert(times[day].close)) return `Library opens: ${tomorrow(day)} ${times[tomorrow(day)].open}`
}
*/