/* 
5kyu - T.T.T.57: Reverse a number
https://www.codewars.com/kata/57c786e858da9e5ed20000ea

Given a string representing an integer, return a string 
with every sequence of ascending or descending digits reversed.
*/

function reverseNumber(n) {
  let sign = n[0] === '-' ? '-' : '';
  let sequences = [];
  let digits = [...(sign === '-' ? n.slice(1) : n)].map(Number);
  let current = [digits[0]];
  for (let i = 1; i < digits.length; i++) {
    let d = digits[i];
    if (d === digits[i - 1]) {
      current.push(d);
    } else if (d > digits[i - 1]) {
      if (current[0] <= current[current.length - 1]) {
        current.push(d);
      } else {
        sequences.push(current.reverse());
        current = [d];
      }
    } else {
      if (current[0] >= current[current.length - 1]) {
        current.push(d);
      } else {
        sequences.push(current.reverse());
        current = [d];
      }
    }
  }

  if (current.length > 0) {
    sequences.push(current.reverse());
  }
  return sign + sequences.reduce((n, v) => n + v.join``, '');
}

console.log(reverseNumber("123456"), "654321");
console.log(reverseNumber("135246"), "531642");
console.log(reverseNumber("642531"), "246135");
console.log(reverseNumber("12333"), "33321");
console.log(reverseNumber("66654"), "45666");
console.log(reverseNumber("133555224466"), "555331664422");
console.log(reverseNumber("12321"), "32112");
console.log(reverseNumber("135642"), "653124");
console.log(reverseNumber("-123"), "-321");
console.log(reverseNumber("-520025"), "-2552");
console.log(reverseNumber("420135"), "24531");