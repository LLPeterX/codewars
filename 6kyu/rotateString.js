/* 
6kyu - All Star Code Challenge #15
https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript

Create a function named rotate() that accepts a string argument 
and returns an array of strings with each letter from the input string being rotated to the end.

rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
*/

function rotate(str) {
  return [...str].map((_, i) => str.slice(i + 1) + str.slice(0, i + 1));
}

console.log(rotate("Hello"));