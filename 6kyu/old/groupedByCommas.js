/* 
6kyu - Grouped by commas
https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript

Отфориматировать число
1  ->           "1"
35235235  ->  "35,235,235"
*/

const groupByCommas = (n) => ("" + n).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");


console.log(groupByCommas(1), '1');
console.log(groupByCommas(10), '10');
console.log(groupByCommas(100), '100');
console.log(groupByCommas(1000), '1,000');
console.log(groupByCommas(10000), '10,000');
console.log(groupByCommas(100000), '100,000');
console.log(groupByCommas(1000000), '1,000,000');
console.log(groupByCommas(35235235), '35,235,235');

//best
/*
function groupByCommas(n) {
  return n.toLocaleString()
}
*/

/*
function groupByCommas(n) {
  return n.toLocaleString("en-GB");
}
*/