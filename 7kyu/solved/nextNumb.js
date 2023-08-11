/* 
7kyu - Next Featured Number Higher than a Given Value
https://www.codewars.com/kata/56abc5e63c91630882000057

Make a function that receives a value, val and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:
* their digits occur only once
* they are odd
* they are multiple of three

*/

function nextNumb(n) {
  for (let x = n + 1; x < (n << 1); x++) {
    let arr = [..."" + x];
    if (new Set(arr).size === arr.length && x % 2 && !(x % 3)) return x;
  }
  return "There is no possible number that fulfills those requirements";
}
// console.log(nextNumb(12), 15)
// console.log(nextNumb(13), 15)
// console.log(nextNumb(99), 105)
// console.log(nextNumb(999999), 1023459);
console.log(nextNumb(34689), 34695); // my 34689
// console.log(nextNumb(9999999999), "There is no\
//  possible number that fulfills those requirements");

//best

/* 
function nextNumb(val) { 
  while (val < 9876543210) {
    val++;
    if(val%2 && !(val%3) && val.toString().match(/^(?!.*(.).*\1)\d{1,10}$/)) {
      return val;
    }
  }
  return 'There is no possible number that fulfills those requirements';
}
*/

/* 
function nextNumb(val) {
  for (let i = val + 1; i < 9999999999; i++) {
    if (new Set([...String(i)]).size == [...String(i)].length && i % 2 && i % 3 == 0) {
      return i
    }
  }
  return 'There is no possible number that fulfills those requirements'
}
*/

/* 
function nextNumb(val) { 
  
  if (val >= 9876543210)
    return "There is no possible number that fulfills those requirements";
  
  val = 6 * Math.floor((val - 3) / 6) + 3;
  
  do {
    val += 6;
  } while (/(.).*\1/.test(`${val}`));
  
  return val;
  
}
*/