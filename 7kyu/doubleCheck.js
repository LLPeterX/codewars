/* 
7kyu - Are there doubles?
https://www.codewars.com/kata/56a24b4d9f3671584d000039/train/javascript

Your job is to build a function which determines whether or not 
there are double characters in a string (including whitespace characters). 
For example 'aa', '!!' or '  '.

*/

function doubleCheck(str) {
  return /(.)\1/i.test(str);
}

console.log(doubleCheck("abca"), false);
console.log(doubleCheck("aabc"), true);
console.log(doubleCheck("a 11 c d"), true);
console.log(doubleCheck("AabBcC"), true);
console.log(doubleCheck("a b  c"), true);
console.log(doubleCheck("a b c d e f g h i h k"), false);