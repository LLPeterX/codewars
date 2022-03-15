/* 
7ky - "Center yourself", says the monk.
https://www.codewars.com/kata/596b8a3fc4cb1de46b000001/train/javascript

Implement a function center that takes a string strng, an integer width, 
and an optional character fill (default: ' ') and returns a new string of length width 
where strng is centered and on the right and left padded with fill.

*/

// function center(strng, width, fill = ' ') {
//   let p = (width - strng.length) / 2; 
//   return p <= 0 ? strng : fill.repeat(Math.ceil(p)) + strng + fill.repeat(Math.floor(p));
// }

const center = (strng, width, fill = ' ', p = (width - strng.length) / 2) => p < 1 ? strng : fill.repeat(Math.ceil(p)) + strng + fill.repeat(Math.floor(p));


console.log(center("a", 3, '_'), " a ");
console.log(center("a", 3), " a ");
console.log(center("", 3, '_'), "___");
console.log(center("abc", 10, '_'), "____abc___");
console.log(center("____abc___", 10, '_'), "____abc___");
console.log(center("abcdefg", 2, ' '), "abcdefg");
console.log(center("abcdefg", 2, ' '), "abcdefg");