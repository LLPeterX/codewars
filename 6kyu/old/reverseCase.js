/* 
6kyu - Case Reversal of Consecutive Duplicates
https://www.codewars.com/kata/577c2d68311a24132a0002a5/train/javascript

he aim of this Kata is to write a function which will reverse 
the case of all consecutive duplicate letters in a string. 
That is, any letters that occur one after the other and are identical.


*/

function reverseCase(string) {
  return string.replace(/(.)\1+/g, (x) => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase());
}
