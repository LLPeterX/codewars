/* 
6kyu - Number Format
https://www.codewars.com/kata/565c4e1303a0a006d7000127/train/javascript

Format any integer provided into a string with "," (commas) in the correct places.
*/

var numberFormat = function (number) {
  return Intl.NumberFormat('en-US').format(number);
};

console.log(numberFormat(100000), '100,000');
console.log(numberFormat(5678545), '5,678,545');
console.log(numberFormat(-420902), '-420,902');