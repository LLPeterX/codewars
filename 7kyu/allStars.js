/* 
7kyu  All Star Code Challenge #22
https://www.codewars.com/kata/5865cff66b5699883f0001aa

Дано число в секундах.
Вернуть время в часах и минутах. Секунды игнорировать

*/

function toTime(seconds) {
  return `${Math.floor(seconds / 3600)} hour(s) and ${Math.floor(seconds % 3600 / 60)} minute(s)`;
}

