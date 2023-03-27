/* 
6kyu - Coordinates Validator
https://www.codewars.com/kata/5269452810342858ec000951/train/javascript
*/

function check(value, max) {
  if (!/^-?(\d+)\.?\d*$/.test(value)) return false;
  let num = parseFloat(value);
  return (num >= -max && num <= max);
}
function isValidCoordinates(coordinates) {
  let parts = coordinates.split(',');
  if (parts.length !== 2) return false;
  return check(parts[0].trim(), 90) && check(parts[1].trim(), 180);
}

var ValidCoordinates = [
  "-23, 25",
  "4, -3",
  "24.53525235, 23.45235",
  "04, -23.234235",
  "43.91343345, 143",
];
for (let i in ValidCoordinates) {
  console.log(ValidCoordinates[i], isValidCoordinates(ValidCoordinates[i]));
}

console.log('-- inv ---');
var InvalidCoordinates = [
  "23.234, - 23.4234",
  "2342.43536, 34.324236",
  "N23.43345, E32.6457",
  "99.234, 12.324",
  "6.325624, 43.34345.345",
  "0, 1,2",
  "0.342q0832, 1.2324",
  "23.245, 1e1",
  "74.3730822746611, 170-40343572329078" // must be fail
];
for (let i in InvalidCoordinates) {
  console.log(InvalidCoordinates[i], '=>', isValidCoordinates(InvalidCoordinates[i]));
}

// best
/* 
function isValidCoordinates(coordinates){
  var match = coordinates.match(/^[-]?(\d+(?:\.\d+)?), [-]?(\d+(?:\.\d+)?)$/);
  if (!match) { return false; }
  var lat = Math.abs(parseFloat(match[1]));
  var lng = Math.abs(parseFloat(match[2]));
  return lat >= 0 && lat <= 90 && lng >= 0 && lng <= 180;
}
*/

/* 
function isValidCoordinates(coordinates){
  return /^-?((\d)|([0-8]\d)|(90))(\.\d+)?, ?-?((\d\d?)|(1[0-7]\d)|(180))(\.\d+)?$/.test(coordinates)
}
*/

/* 
function isValidCoordinates(coordinates){
  var coords = coordinates.split(', ')
  return (coords.length === 2 &&
  /^[0-9,.-\s]+$/.test(coordinates) &&
  Number(coords[0])>=-90 && Number(coords[0])<=90 &&
  Number(coords[1])>=-180 && Number(coords[1])<=180)
}
*/