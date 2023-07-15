/* 
7kyu - Converting 12-hour time to 24-hour time
https://www.codewars.com/kata/59b0a6da44a4b7080300008a/train/javascript

You will have to define a function named "to24hourtime", 
and you will be given an hour (always in the range of 1 to 12, inclusive), 
a minute (always in the range of 0 to 59, inclusive), and a period (either "am" or "pm") as input.

Your task is to return a four-digit string that encodes that time in 24-hour time.

*/
/*
function to24hourtime(hour, minute, period) {
  // if (period === 'pm') {
  //   hour = hour % 12 + 12;
  // } else {
  //   hour %= 12;
  // }
  let h = period === 'pm' ? hour % 12 + 12 : hour % 12;
  return `${String(h).padStart('2', 0)}${String(minute).padStart('2', '0')}`;
}
*/
// final:
function to24hourtime(hour, minute, period) {
  return `${String(period === 'pm' ? hour % 12 + 12 : hour % 12).padStart(2, '0')}${String(minute).padStart(2, '0')}`;
}

console.log(to24hourtime(1, 0, "am"), "0100", "Input =  1:00 am");
console.log(to24hourtime(1, 0, "pm"), "1300", "Input =  1:00 pm");
console.log(to24hourtime(12, 0, "am"), "0000", "Input = 12:00 am");
console.log(to24hourtime(12, 0, "pm"), "1200", "Input = 12:00 pm");
console.log(to24hourtime(6, 30, "am"), "0630", "Input =  6:30 am");
console.log(to24hourtime(9, 45, "pm"), "2145", "Input =  9:45 pm");

// other
/* 
to24hourtime=(h,m,p)=>String(h%12+(p==='pm'?12:0)).padStart(2,'0')+String(m).padStart(2,'0')
*/