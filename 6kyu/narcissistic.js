/* 
6kyu - Does my number look big in this?
https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, 
each raised to the power of the number of digits in a given base. 
In this Kata, we will restrict ourselves to decimal (base 10).
*/

const narcissistic = value => [..."" + value].reduce((sum, v, i) => sum + v ** (Math.ceil(Math.log10(value))), 0) === value;

