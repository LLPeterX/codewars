/* 
7kyu - Simple Fun #270: Evil Code Medal
https://www.codewars.com/kata/5915686ed2563aa6650000ab/train/javascript
*/

function evilCodeMedal(userTime, gold, silver, bronze) {
  const getSeconds = time => {
    const [h, m, s] = time.split(':').map(Number);
    return h * 3600 + m * 60 + s;
  }
  const userSeconds = getSeconds(userTime);
  if (userSeconds < getSeconds(gold)) return "Gold";
  if (userSeconds < getSeconds(silver)) return "Silver";
  if (userSeconds < getSeconds(bronze)) return "Bronze";
  return "None";
}

console.log(evilCodeMedal("00:30:00", "00:15:00", "00:45:00", "01:15:00"), "Silver")
console.log(evilCodeMedal("01:15:00", "00:15:00", "00:45:00", "01:15:00"), "None")

console.log(evilCodeMedal("00:00:01", "00:00:10", "00:01:40", "01:00:00"), "Gold")
console.log(evilCodeMedal("00:10:01", "00:00:10", "00:01:40", "01:00:00"), "Bronze")
console.log(evilCodeMedal("00:00:01", "00:00:02", "00:00:03", "00:00:04"), "Gold")
console.log(evilCodeMedal("90:00:01", "60:00:02", "70:00:03", "80:00:04"), "None")
console.log(evilCodeMedal("03:15:00", "03:15:00", "03:15:01", "03:15:02"), "Silver")
console.log(evilCodeMedal("99:59:58", "99:59:57", "99:59:58", "99:59:59"), "Bronze")
console.log(evilCodeMedal("01:23:45", "01:01:01", "02:02:02", "03:03:03"), "Silver")
console.log(evilCodeMedal("14:49:03", "77:39:08", "92:11:36", "94:07:41"), "Gold")
console.log(evilCodeMedal("61:01:40", "64:19:53", "79:30:02", "95:24:48"), "Gold")

// best

/* 
function evilCodeMedal(userTime, gold, silver, bronze) {
  if(userTime < gold) return "Gold";
  if(userTime < silver) return "Silver";
  if(userTime < bronze) return "Bronze";
  return "None";
}
*/