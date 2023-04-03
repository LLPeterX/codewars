/* 
6kyu - Simple Fun #156: Rotate Paper By 180 Degrees
https://www.codewars.com/kata/58ad230ce0201e17080001c5/train/javascript
*/

function rotatePaper(number) {
  const rot = {
    '0': '0',
    '2': '2',
    '5': '5',
    '6': '9',
    '8': '8',
    '9': '6'
  };
  return number === [...number].reverse().map(d => rot[d]).join``;
}
console.log(rotatePaper("000"), true)
console.log(rotatePaper("1"), false)
console.log(rotatePaper("96"), true)
console.log(rotatePaper("689"), true)
console.log(rotatePaper("56789"), false)
console.log(rotatePaper("65859"), true)
console.log(rotatePaper("9065828558285906"), true)
console.log(rotatePaper("26226650900605992292"), true)

