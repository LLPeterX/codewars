/* 
7kyu - Rearrange Number to Get its Maximum
https://www.codewars.com/kata/563700da1ac8be8f1e0000dc/train/javascript

Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

Return -1 if the argument is not valid
Return null (nil for Ruby, nothing for Julia) if the argument is not valid.
*/

var maxRedigit = function (num) {
  return (num < 100 || num > 999) ? null : +[...String(num)].sort((a, b) => b - a).join``;
};

console.log(maxRedigit(123), 321, "123 => 321");

// Edge cases test
console.log(maxRedigit(-1), null, "-1 => null");
console.log(maxRedigit(0), null, "0 => null");