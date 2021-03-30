/* 
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
Определить век по номеру года
Первый век охватывает период с 1 года по 100 год включительно, 
второй - с 101 года по 200 год включительно и т.д.

 */

function century(year) {
  let y = String(year).padStart(4, '0');
  return +y.slice(-2) > 0 ? +y.slice(0, y.length-2) + 1 : + y.slice(0, y.length-2);
}

console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');
console.log(century(848709), 8488);

//best - я еблан!
/* 
const century = year => Math.ceil(year/100)
*/