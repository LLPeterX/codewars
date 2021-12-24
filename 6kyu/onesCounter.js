/* 
7kyu - Counter of neighbor ones
https://www.codewars.com/kata/56ec1e8492446a415e000b63/train/javascript

Tranform of input array of zeros and ones to array in which counts number of continuous ones. 
If there is none, return an empty array
*/

function onesCounter(input) {
  return input.join('').split('0').filter(e => e.length).map(e => e.length);
}

console.log(onesCounter([0, 0, 0, 0, 0, 0, 0, 0]), [])
console.log(onesCounter([1, 1, 1, 1, 1]), [5])
console.log(onesCounter([1, 1, 1, 0, 0, 1, 0, 1, 1, 0]), [3, 1, 2])
console.log(onesCounter([0, 0, 0, 1, 0, 0, 1, 1]), [1, 2])
console.log(onesCounter([1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1]), [1, 2, 4, 1])

/* best */

/* 
const onesCounter = inp => inp.join('').split('0').map(e=>e.length).filter(e=>e);
*/