/* 
7kyu - Incrementer
https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript

Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 (and not 0).

Your result can only contain single digit numbers, so if adding a digit with it's position gives you a multiple-digit number, only the last digit of the number should be returned.
*/

const incrementer = nums => nums.map((v, i) => (v + i + 1) % 10);


console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]), [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]);