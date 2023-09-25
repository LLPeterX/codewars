/* 
6kyu - Factorial length
https://www.codewars.com/kata/59f34ec5a01431ab7600005a

In this Kata, you will implement a function count that takes an integer and returns the number of digits in factorial(n).
*/

const count = (n) => Math.ceil(Math.log10(2 * Math.PI * n) / 2 + n * Math.log10(n / Math.E));


console.log(count(5), 3);
console.log(count(50), 65);
console.log(count(500), 1135);
console.log(count(5000), 16326);
console.log(count(50000), 213237);
console.log(count(500000), 2632342);
console.log(count(5000000), 31323382);
console.log(count(50000000), 363233781);