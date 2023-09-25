/* 
6kyu - Binary Coded Decimal
https://www.codewars.com/kata/5521d84b95c172461d0000a4/train/javascript

Convert a number to a binary coded decimal (BCD).

You can assume input will always be an integer. 
If it is a negative number then simply place a minus sign in front of the output string. 
Output will be a string with each digit of the input represented as 4 bits (0 padded) with a space between each set of 4 bits.
*/

function toBcd(number) {
  return (Math.sign(number) < 0 ? '-' : '') + [..."" + Math.abs(number)].map(d => Number(d).toString(2).padStart(4, '0')).join(' ');
}

