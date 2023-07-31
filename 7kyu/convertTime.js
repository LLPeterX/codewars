/* 
7kyu - Time Converter: hours, minutes, seconds and milliseconds
https://www.codewars.com/kata/56b8b0ae1d36bb86b2000eaa/train/javascript

Дано время.
Вернуть в формате "16:42:59,000"
It should return a string including milliseconds with 3 decimals.
*/

//new Date().
function convert(time) {
  //return `${new Intl.DateTimeFormat('ru-RU', { hour: 'numeric', minute: 'numeric', second: 'numeric' }).format(time)},${('' + time.getMilliseconds()).padStart(3, '0')}`;
  const pad = (value, width) => ("" + value).padStart(width, '0');
  return `${pad(time.getHours(), 2)}:${pad(time.getMinutes(), 2)}:${pad(time.getSeconds(), 2)},${pad(time.getMilliseconds(), 3)}`;
}

console.log(convert(new Date(2016, 2, 8, 16, 42, 59)), "16:42:59,000");
console.log(convert(new Date(1951, 10, 31, 2, 2, 24, 399)), "02:02:24,399");
console.log(convert(new Date(1523, 5, 29, 23, 2, 2, 9)), "23:02:02,009");
console.log(convert(new Date(1, 1, 1, 1, 1, 1, 110)), "01:01:01,110");
console.log(convert(new Date(9999, 9, 9, 9, 9, 9, 999)), "09:09:09,999");
console.log(convert(new Date(2, 12, 30, 23, 59, 59, 875)), "23:59:59,875");
console.log(convert(new Date(1850, 12, 30, 13, 39, 19)), "13:39:19,000");
console.log(convert(new Date(1978, 3, 18, 12, 0, 0, 0)), "12:00:00,000");
console.log(convert(new Date(1850, 12, 30, 11, 11, 11, 123)), "11:11:11,123");
console.log(convert(new Date(1850, 12, 30, 0, 0, 0, 321)), "00:00:00,321");

// best
/* 
const convert = time => time.toJSON().replace(/.*T(.*)\.(.*)Z/, '$1,$2');
*/

/* 
const convert = time =>
  time.toISOString().slice(11,23).replace(`.`, `,`);
*/