/* 
6kyu - Simple Fun #258: Is Divisible By 6
https://www.codewars.com/kata/5911385598dcd432ae000004

A masked number is a string that consists of digits 
and one asterisk (*) that should be replaced by exactly one digit. 
Given a masked number s, find all the possible options to replace 
the asterisk with a digit to produce an integer divisible by 6.

*/

/* 
Признак делимости на 6:
1) Число заканчивается на 0, 2, 4, 6 или 8 (т.е. последняя цифра n%2===0)
2) Сумма цифр делится на 3
*/

// function isDivisible(array) {
//   if (array[array.length - 1] % 2) return false;
//   return array.reduce((s, v) => s + +v, 0) % 3 === 0;
// }

function isDivisibleBy6(s) {
  const a = [...s];
  const starIndex = a.indexOf('*');
  const result = [];
  for (let n = 0; n <= 9; n++) {
    a[starIndex] = n;
    if (a[a.length - 1] % 2 === 0 && a.reduce((s, v) => s + +v, 0) % 3 === 0) {
      result.push(a.join(''));
    }
  }
  return result;
}


console.log(isDivisibleBy6("1234567890123456789012345678*0"), ["123456789012345678901234567800", "123456789012345678901234567830", "123456789012345678901234567860", "123456789012345678901234567890"])

// best
/* 
function isDivisibleBy6(s) {
  let num, res = [];
  
  for (let i = 0; i < 10; i++)
    if (isDivisibleBy(num = s.replace('*', i), 6))
      res.push(num);
      
  return res;
}

function isDivisibleBy(s, d) {
  let rem = 0;
  
  for (let char of s)
    rem = +(rem + char) % d;

  return !rem;
}
*/