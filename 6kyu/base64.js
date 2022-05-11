/* 
6kyu - Base64 Numeric Translator
https://www.codewars.com/kata/5632e12703e2037fa7000061

Our standard numbering system is (Base 10). That includes 0 through 9. Binary is (Base 2), only 1’s and 0’s. 
And Hexadecimal is (Base 16) (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F). 
A hexadecimal “F” has a (Base 10) value of 15. 
(Base 64) has 64 individual characters which translate in value in (Base 10) from between 0 to 63.

####Write a method that will convert a string from (Base 64) to it's (Base 10) integer value.

The (Base 64) characters from least to greatest will be

ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
*/

function base64toBase10(str) {
  const b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  return [...str].reduce((res, v, i) => res * 64 + b64.indexOf(v), 0);
}

console.log(base64toBase10('/'), 63);
console.log(base64toBase10('BA'), 64);
console.log(base64toBase10('BC'), 66);

