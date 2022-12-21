/* 
7kyu - Hex Hash Sum
https://www.codewars.com/kata/5ab363ff6a176b29880000dd/train/javascript

Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value 
of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).
*/

const hexHash = code => [...[...code].map(letter => letter.charCodeAt().toString(16)).join('').replace(/\D/g, '')].reduce((sum, v) => sum + +v, 0);


console.log(hexHash('Yo'), 20);
console.log(hexHash('Forty4Three'), 113);