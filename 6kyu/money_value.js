/* 
6kyu - Unwanted dollars
https://www.codewars.com/kata/587309155cfd6b9fb60000a0/train/javascript

*/

function money_value(s) {
  let n = s.replace(/[$ ]/g, '');
  return isNaN(+n) ? 0 : +n;
}

console.log(money_value("12.34"), 12.34);
console.log(money_value(" $5.67"), 5.67);
console.log(money_value("-0.89"), -0.89)
console.log(money_value("-$ 0.1"), -0.10);
console.log(money_value("$-2.3456"), -2.3456);
console.log(money_value("007"), 7.00);
console.log(money_value(" $ 89"), 89.0);
console.log(money_value("   .11"), 0.11);
console.log(money_value("$.2"), 0.20);
console.log(money_value("-.34"), -0.34);
console.log(money_value("$$$"), 0.0);

// best
// const money_value = s => +s.replace(/[$ ]/g, '') || 0