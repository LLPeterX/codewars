/* 
7kyu - Time Degrees
https://www.codewars.com/kata/5782a87d9fb2a5e623000158

Your task is to write a function that will return the degrees
on a analog clock from a digital time that is passed in as parameter.

The digital time is type string and will be in the format 00:00. 
You also need to return the degrees on the analog clock in type string
and format 360:360. 

Remember to round of the degrees. 
Remeber the basic time rules and format like 24:00 = 00:00 
and 12:60 = 13:00. 

Create your own validation that should return "Check your time !" 
in any case the time is incorrect or the format is wrong, 
remember this includes passing in negatives times like "-01:-10".

360' = 24h
x'   = 20h

360' = 24h
x'   = 20h
*/

function clockDegree(s) {
  let [h, m] = s.split(':').map(Number);
  if (isNaN(h) || isNaN(m) || h < 0 || h >= 24 || m < 0 || m >= 60) return "Check your time !";
  h %= 12;
  if (h === 0) h = 12;
  if (m === 0) m = 60;
  return `${360 * h / 12}:${360 * m / 60}`;
}

console.log(clockDegree("01:01"), "30:6");
console.log(clockDegree("00:00"), "360:360");
console.log(clockDegree("01:03"), "30:18");
console.log(clockDegree("01:30"), "30:180");
console.log(clockDegree("12:05"), "360:30");
console.log(clockDegree("26:78"), "Check your time !");
console.log(clockDegree("23:60"), "Check your time !");
console.log(clockDegree("24:60"), "Check your time !");
console.log(clockDegree("16:25"), "120:150");
console.log(clockDegree("17:09"), "150:54");
console.log(clockDegree("19:00"), "210:360");
console.log(clockDegree("20:34"), "240:204");
console.log(clockDegree("23:20"), "330:120");
console.log(clockDegree("0-2:49"), "Check your time !");

// best

/* 
function clockDegree(s){
  let [h,m] = s.split(":").map(Number);
  return /^([01]\d|2[0-3]):([0-5]\d)$/.test(s) ? (h%12*30||"360")+":"+(m*6||"360") : "Check your time !"
}
*/