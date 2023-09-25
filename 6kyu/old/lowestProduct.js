/* 
6kyu - Lowest product of 4 consecutive numbers
https://www.codewars.com/kata/554e52e7232cdd05650000a0/train/javascript

Create a function that returns the lowest product 
of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. 
If not, return "Number is too small".
*/

function lowestProduct(input) {
  let s = String(input);
  if (s.length < 4) return "Number is too small";
  let result = Infinity;
  for (let i = 0; i < s.length - 3; i++) {
    let p = s[i] * s[i + 1] * s[i + 2] * s[i + 3];
    result = Math.min(result, p);
  }
  return result;
}

console.log(lowestProduct("123456789"), 24);
console.log(lowestProduct("234567899"), 120);
console.log(lowestProduct("2345611117899"), 1);
console.log(lowestProduct("333"), "Number is too small");
console.log(lowestProduct("1234111"), 4, "Numbers should be consecutives");

// best

/* 
function lowestProduct(input) {
  let arr = input.split``.map((x,i,a) => a.length - i < 4 ? Infinity : x * a[i+1] * a[i+2] * a[i+3]);
  return input < 1000 ? "Number is too small" : Math.min(...arr);
}
*/
