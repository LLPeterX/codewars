/* 
7kyu - Can I play right now?
https://www.codewars.com/kata/59ca888aaeb284bb8f0000aa/train/javascript


 */

function canIPlay(now, start, end) {
  if (end < start) end += 24;
  if (now < start) now += 24;
  return now >= start && now <= end && end - now >= 1;
}

console.log(canIPlay(12, 10, 14), true, "12:00 should match to 10:00-14:00 prime-time");
console.log(canIPlay(12, 13, 14), false, "12:00 shouldn't match to 13:00-14:00 prime-time");
console.log(canIPlay(15, 12, 15), false, "15:00 shouldn't match to 12:00-15:00 prime-time");
console.log(canIPlay(23, 22, 1), true, "23:00 should match to 22:00-01:00 prime-time");
console.log(canIPlay(15, 12, 15), false);
console.log(canIPlay(12, 12, 13), true);
console.log(canIPlay(0, 22, 1), true);
console.log(canIPlay(9, 20, 11), true);
console.log(canIPlay(3, 21, 18), true);
