/* 
5kyu - Convert A Hex String To RGB
https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript

Дана строка типа "#FF9933" => {r:255, g:153, b:51}

 */

function hexStringToRGB(hexString) {
  let n = parseInt(hexString.slice(1), 16);
  return { r: (n & 0xff0000) >> 16, g: (n & 0xff00) >> 8, b: (n & 0xff) };
}

console.log(hexStringToRGB("#FF9933"));