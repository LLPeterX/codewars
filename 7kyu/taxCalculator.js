/* 
7kyu - Tax Calculator
https://www.codewars.com/kata/56314d3c326bbcf386000007/train/javascript

Write a function to calculate compound tax using the following table:

- For $10 and under, the tax rate should be 10%.
- For $20 and under, the tax rate on the first $10 is %10, and the tax on the rest is 7%.
- For $30 and under, the tax rate on the first $10 is still %10, 
  the rate for the next $10 is still 7%, 
  and everything else is 5%.
- Tack on an additional 3% for the portion of the total above $30.

Return 0 for invalid input(anything that's not a positive real number).

Examples:
- An input of 10, should return 1 (1 is 10% of 10)
- An input of 21, should return 1.75 (10% of 10 + 7% of 10 + 5% of 1)

 Note that the returned value should be rounded to the nearest penny.
*/

function taxCalculator2(total) {
  let tax = 0;
  if (!Number.isFinite(total) || total < 1) {
    tax = 0;
  } else if (total <= 10) {
    tax = total * 0.1;
  } else if (total <= 20) {
    tax = 1 + (total - 10) * 0.07;
  }
  else if (total <= 30) {
    tax = 1.7 + (total - 20) * 0.05
  } else {
    tax = 2.2 + (total - 30) * 0.03;
  }
  return +tax.toFixed(2);
}

// это можно сократить:
function taxCalculator(total) {
  if (!Number.isFinite(total) || total < 1) return 0;
  let [m, p, a] = [[30, 0.03, 2.2], [20, 0.05, 1.7], [10, 0.07, 1], [0, 0.1, 0]].find(v => total > v[0]);
  return +((total - m) * p + a).toFixed(2);
}


console.log(taxCalculator(10), 1);
console.log(taxCalculator(15), 1.35);
console.log(taxCalculator(25), 1.95);
console.log(taxCalculator(35), 2.35);

// best

/* 
function taxCalculator(total) {
  if(!(total > 0)) return 0;
  let rates = [.1, .07, .05, .03], tax = 0;
  for(var i = 0; total > 0 && i < rates.length - 1; i++) {
    tax += Math.min(10, total) * rates[i];
    total -= Math.min(10, total);
  }
  return parseFloat((tax + rates[i] * total).toFixed(2));
}
*/
