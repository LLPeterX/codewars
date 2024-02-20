/* 
7kyu - ASCII letters from Number
https://www.codewars.com/kata/589ebcb9926baae92e000001/train/javascript
*/

function convert(number) {
  return number.match(/.{2}/g).map(n => String.fromCharCode(n)).join``;
}

console.log(convert("65"), "A")
console.log(convert("656667"), "ABC")
console.log(convert("676584"), "CAT")
console.log(convert("73327673756932858080698267658369"), "I LIKE UPPERCASE")

// best

/* 
function convert(number) {
  return String.fromCharCode(...number.match(/../g))
}
*/