/* 
7kyu - Cogs
https://www.codewars.com/kata/59e1b9ce7997cbecb9000014/train/javascript

You are given a list of cogs in a gear train

Each element represents the number of teeth of that cog

e.g. [100, 75] means:
* 1st cog has 100 teeth
* 2nd cog has 75 teeth

If the first cog rotates clockwise at 1 RPM what is the RPM of the final cog?
*/

function cogRpm(cogs) {
  // let rpm = 1;
  // for (let i = 1; i < cogs.length; i++) {
  //   rpm = rpm * cogs[i - 1] / cogs[i];
  // }
  let rpm = cogs.reduce((r, v, i, a) => i ? r * a[i - 1] / v : 1, 1) * (cogs.length % 2 === 0 ? -1 : 1);
  // if (cogs.length % 2 === 0) rpm *= -1;
  return rpm;
}

// 0:1
// 1:-1
// 2: 1
// 3:-1

console.log(cogRpm([100, 75]), -1.333);
console.log(cogRpm([100, 100, 75]), 1.333);
console.log(cogRpm([100, 100, 75]), 1.333);
console.log(cogRpm([100, 100, 100, 100, 100]), 1);
console.log(cogRpm([
  85, 88, 59, 20, 74, 89, 85,
  94, 92, 83, 23, 10, 92, 63,
  88, 76, 53, 27, 87
]), 0.977);

// best
/* 
const cogRpm = c => c[0] / c[c.length - 1] * (c.length % 2 ? 1 : -1)
*/
