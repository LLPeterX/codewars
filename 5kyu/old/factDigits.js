/* 
5kyu - Simple Fun #206: Factor Digits
Calculate the number of digits in n!, where n is given.
*/
function factDigits(n) {
  return n < 4 ? 1 : Math.ceil(Math.log10(2 * Math.PI * n) / 2 + n * (Math.log10(n / Math.E)));
}

console.log(factDigits(0), 1);
console.log(factDigits(1), 1);
console.log(factDigits(2), 1);
console.log(factDigits(10), 7);
console.log(factDigits(777), 1911);
console.log(factDigits(187894), 909339);