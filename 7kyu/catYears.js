/* 
https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript
*/
var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears=15, dogYears=15;
  if(humanYears>1) {
    catYears += 9;
    dogYears += 9;
  }
  if(humanYears > 2 ) {
    catYears += (humanYears - 2)*4;
    dogYears += (humanYears - 2)*5;
  }
  return [humanYears,catYears,dogYears];
};

console.log(humanYearsCatYearsDogYears(10));
console.log(humanYearsCatYearsDogYears(2));
