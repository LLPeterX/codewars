/* 
7kyu - Formatting decimal places #1
https://www.codewars.com/kata/5641c3f809bf31f008000042/train/javascript
*/

function twoDecimalPlaces(number) {
  return (number < 0 ? Math.ceil(number * 100) : Math.floor(number * 100)) / 100
}


// best
/* 
const twoDecimalPlaces = number => Math.trunc(number*100)/100
*/