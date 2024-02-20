/* 
5kyu - Map and Filter to Get a Special Sequence of Integers
https://www.codewars.com/kata/58224b5334c53a4294000b5a/train/javascript
*/

function f(num) {
  let digits = [...String(num)];
  let value = i = 0;
  for (i = 0; i < digits.length - 1; i++) {
    let d1 = +digits[i];
    let d2 = +digits[i + 1];
    let sign = d1 > d2 ? -1 : 1;
    value += (d1 ** Math.abs((d1 - d2))) * sign;
  }
  value += +digits[i];
  return value === 0;
}

function prevNext(n) {
  let min = 0, max;
  const result = [];
  if (f(n)) result.push(n);
  for (let num = n - 1; num >= 100; num--) {
    if (f(num)) {
      min = num;
      break;
    }
  }
  if (min) result.unshift(min);
  for (let num = n + 1; ; num++) {
    if (f(num)) {
      max = num;
      break;
    }
  }
  result.push(max);
  return result;
}

//console.log(prevNext(186599));

console.log(prevNext(150), [143, 154]);
console.log(prevNext(154), [143, 154, 165]); // FAIL
console.log(prevNext(99), [100]);
console.log(prevNext(100), [100, 101]); 