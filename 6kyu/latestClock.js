/* 
6kyu - The latest clock
https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/javascript

Write a function which receives 4 digits and returns the latest time 
of day that can be built with those digits.

The time should be in HH:MM format.

Examples:

digits: 1, 9, 8, 3 => result: "19:38"
digits: 9, 1, 2, 5 => result: "21:59"
Notes
Result should be a valid 24-hour time, between 00:00 and 23:59.
Every input has a valid answer.

*/

function latestClock(a, b, c, d) {
  let abc = [a, b, c, d];
  let time = {};
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i !== j) {
        let h = abc[i] * 10 + abc[j];
        if (h < 24) {
          time[h] = [];
          for (let k = 0; k < 4; k++) {
            if (k != i && k !== j) {
              for (let l = 0; l < 4; l++) {
                if (l !== k && l !== i && l !== j && abc[k] * 10 + abc[l] < 60) {
                  time[h].push(abc[k] * 10 + abc[l]);
                }
              }
            }
          }
        }
      }
    }
  }
  console.log(time);
  let max = Object.entries(time)
    .filter(([k, v]) => v.length > 0)
    .sort((a, b) => +b[0] - +a[0])[0];
  return `${max[0].padStart(2, '0')}:${("" + max[1].sort((a, b) => b - a)[0]).padStart(2, '0')}`;
}

console.log(latestClock(1, 9, 8, 3), "19:38");
console.log(latestClock(9, 1, 2, 5), "21:59");
console.log(latestClock(0, 0, 0, 0), "00:00");
console.log(latestClock(2, 4, 0, 0), "20:40");
console.log(latestClock(5, 2, 3, 2), "23:52");

// best
/* 
const latestClock = (a, b, c, d) => {
  const validTimeReg = /(?:[01]\d|2[0-3]):[0-5]\d/;
  
  const allCombos = [];
  const makeCombos = (dgts, str = '') => {
    !dgts.length && validTimeReg.test(str) && allCombos.push(str);
    dgts.length === 2 && (str += ':');
    dgts.forEach((dgt, idx) => makeCombos(dgts.filter((_, i) => i !== idx), str + dgt));
  }
  
  makeCombos([a, b, c, d]);
  
  return allCombos.sort().at(-1) || '';
}
*/

/* 
function latestClock(a, b, c, d) {
  const times = [
    `${a}${b}:${c}${d}`,
    `${a}${b}:${d}${c}`,
    `${a}${c}:${b}${d}`,
    `${a}${c}:${d}${b}`,
    `${a}${d}:${b}${c}`,
    `${a}${d}:${c}${b}`,
    `${b}${a}:${c}${d}`,
    `${b}${a}:${d}${c}`,
    `${b}${c}:${a}${d}`,
    `${b}${c}:${d}${a}`,
    `${b}${d}:${a}${c}`,
    `${b}${d}:${c}${a}`,
    `${c}${a}:${b}${d}`,
    `${c}${a}:${d}${b}`,
    `${c}${b}:${a}${d}`,
    `${c}${b}:${d}${a}`,
    `${c}${d}:${a}${b}`,
    `${c}${d}:${b}${a}`,
    `${d}${a}:${b}${c}`,
    `${d}${a}:${c}${b}`,
    `${d}${b}:${a}${c}`,
    `${d}${b}:${c}${a}`,
    `${d}${c}:${a}${b}`,
    `${d}${c}:${b}${a}`,
  ];
  const time = times.filter(el => {
    const test = el.split(":")
    if (test[0] >= 24) return false
    if (test[1] >= 60) return false
    return true
  })
  time.sort((a, b) =>  (b.split(":")[0] - a.split(":")[0] || b.split(":")[1] - a.split(":")[1]))
  return time[0]
}
*/