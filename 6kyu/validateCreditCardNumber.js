/* 
6kyu - Validate Credit Card Number
https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript


*/

function validate(n) {
  return [..."" + n].reverse().map((n, i) => {
    let v = i % 2 ? n * 2 : +n;
    if (v > 9) v -= 9;
    return v;
  }
  ).reduce((s, v) => s + v) % 10 === 0;
}

// console.log(validate(1714), false);
// console.log(validate(12345), false);
// console.log(validate(891), false);
console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);