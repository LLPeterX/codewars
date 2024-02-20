/* 
7kyu - Perfect squares, perfect fun
https://www.codewars.com/kata/5705ca6a41e5be67720012c0/train/javascript

Given an integer, if the length of it's digits is a perfect square, 
return a square block of sqroot(length) * sqroot(length). 
If not, simply return "Not a perfect square!".

Examples:
1212 => "12\n12" ( 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.)
123123123 => "123\n123\n123";

*/

function squareIt(int) {
  let strNum = String(int);
  let sqLen = Math.sqrt(strNum.length);
  if (Number.isInteger(sqLen)) {
    let re = new RegExp(`.{${sqLen}}`, 'g');
    return strNum.match(re).join("\n");
  }
  return "Not a perfect square!"
}

console.log(squareIt(123123123));