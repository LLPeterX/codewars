/* 
7kyu - String reverse slicing 101
https://www.codewars.com/kata/586efc2dcf7be0f217000619/train/javascript

You'll be given a string of characters as an input. 
Complete the function that returns a list of strings: 
(a) in the reverse order of the original string, and 
(b) with each successive string starting one character further 
in from the end of the original string.

Assume the original string is at least 3 characters long. 
Try to do this using slices and avoid converting the string to a list.
*/

function reverseSlice(str) {
  const result = [""];
  for (let i = str.length - 1; i >= 0; i--) result[0] += str[i];
  for (let i = 1; i < str.length; i++) result.push(result[0].slice(i));
  return result;
}

console.log(reverseSlice('123'), ['321', '21', '1']);
console.log(reverseSlice('abcde'), ['edcba', 'dcba', 'cba', 'ba', 'a']);

// best
/* 
function reverseSlice(s) {
  return Array(s.length).fill(0).map((e, i) => s.split("").reverse().join("").slice(i));
}
*/

/* 
function reverseSlice(str) {
  var rev = str.split('').reverse().join('');;
  var result = [];
  for(var i=0;i<str.length;i++)
  {
    result.push(rev.slice(i));
  }
  return result;
}
*/