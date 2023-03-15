/* 
7kyu - Decimal Time Conversion
https://www.codewars.com/kata/6397b0d461067e0030d1315e/train/javascript
*/

function toIndustrial(time) {
  if (Number.isInteger(time)) {
    return +(time / 60).toFixed(2);
  }
  let [h, m] = time.split(':').map(Number);
  return +(h + m / 60).toFixed(2);
}

function toNormal(time) {
  return `${Math.floor(time)}:${String(Math.round((time - Math.floor(time)) * 60)).padStart(2, '0')}`;
}


console.log(toIndustrial(1), 0.02);
console.log(toIndustrial(2), 0.03);
console.log(toIndustrial(105), 1.75);
console.log(toIndustrial("1:45"), 1.75);
console.log(toIndustrial("0:03"), 0.05);
console.log(toIndustrial("0:04"), 0.07);

console.log('----');
console.log(toNormal(1.50), "1:30");
console.log(toNormal(0.33), "0:20");