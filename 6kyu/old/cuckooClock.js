/* 
6kyu - Cuckoo Clock
https://www.codewars.com/kata/656e4602ee72af0017e37e82/train/javascript

The cuckoo bird pops out of the cuckoo clock and chimes once on the quarter hour, 
half hour, and three-quarter hour. 
At the beginning of each hour (1-12), it chimes out the hour. 

Given the current time and a number n, determine the time when 
the cuckoo bird has chimed n  times.

Input Parameters:
initial_time - a string in the format "HH:MM", where 1 ≤ HH ≤ 12 and 0 ≤ MM ≤ 59, 
with leading 0’s if necessary.
n - an integer representing the target number of chimes, with 1 <= n <= 200.

Return Value: The time when the cuckoo bird has chimed n  times - 
a string in the same format as initial_time.

If the cuckoo bird chimes at initial_time, include those chimes in the count. 

If the nth chime is reached on the hour, report the time at the start of that hour 
(i.e. assume the cuckoo finishes chiming before the minute is up).

Example: "03:38", 19   should return "06:00".
Explanation: It chimes once at "03:45", 4 times at "04:00", 
once each at "04:15", "04:30", "04:45", 5 times at "05:00", 
and once each at "05:15", "05:30", "05:45". 
At this point it has chimed 16 times, so the 19th chime occurs 
when it chimes 6 times at "06:00".
*/

// first variant. Can't figure out how to simlify this.
function cuckooClock(inputTime, chimes) {
  let [h, m] = inputTime.split(':').map(Number);
  if (m > 0) {
    m += (60 - m) % 15;
    if (m === 60) {
      h++;
      if (h === 13) {
        h = 1;
        chimes--;
      } else chimes -= h;
      m = 0;
    } else chimes--;
  } else {
    chimes -= h % 12;
  }
  while (chimes > 0) {
    m += 15;
    if (m === 60) {
      m = 0;
      h++;
      if (h === 13) {
        h = 1;
        chimes--;
      } else {
        chimes -= h;
      }
    } else chimes--;
  }
  return `${String(h > 12 ? h - 12 : h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}



console.log(cuckooClock("12:59", 76), "10:00");

//console.log(cuckooClock("03:00", 19), "06:00");
console.log("Simple Tests");
{
  const initialTimes = ["07:22", "12:22", "01:30", "04:01", "03:38"];
  const chimes = [1, 2, 2, 10, 19];
  const expectedTimes = ["07:30", "12:45", "01:45", "05:30", "06:00"];

  for (let i = 0; i < initialTimes.length; i++) {
    console.log(cuckooClock(initialTimes[i], chimes[i]), expectedTimes[i]);
  }
}

console.log("Starting on the Hour");
{
  const initialTimes = ["10:00", "10:00", "10:00", "10:00", "10:00"];
  const chimes = [1, 10, 11, 13, 20];
  const expectedTimes = ["10:00", "10:00", "10:15", "10:45", "11:00"];

  for (let i = 0; i < initialTimes.length; i++)
    console.log(cuckooClock(initialTimes[i], chimes[i]), expectedTimes[i]);
}


console.log("Crossing Twelve");
{
  const initialTimes = ["12:30", "12:30", "12:30", "12:30", "09:53"];
  const chimes = [1, 2, 3, 4, 50];
  const expectedTimes = ["12:30", "12:45", "01:00", "01:15", "02:30"];

  for (let i = 0; i < initialTimes.length; i++)
    console.log(cuckooClock(initialTimes[i], chimes[i]), expectedTimes[i]);
}

console.log("Around the Clock");
{
  const initialTimes = ["08:17", "08:17", "08:17", "08:17", "08:17"];
  const chimes = [113, 114, 115, 150, 200];
  const expectedTimes = ["08:00", "08:15", "08:30", "11:00", "05:45"];

  for (let i = 0; i < initialTimes.length; i++)
    console.log(cuckooClock(initialTimes[i], chimes[i]), expectedTimes[i]);
};

// best

/* 
const cuckooClock = (inputTime, chimes) => {
  let [hh, mm] = inputTime.split`:`.map(Number);
  
  mm % 15 || (chimes -= !!mm || hh);
  chimes %= 114;
  mm -= mm % 15;
  
  while (chimes > 0) {
    (mm = (mm + 15) % 60) || (hh = hh % 12 + 1);
    chimes -= !!mm || hh;
  }
  
  return [hh, mm].map(val => `${val}`.padStart(2, '0')).join`:`;
}
*/