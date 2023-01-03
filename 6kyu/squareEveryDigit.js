/* 
6kyu - One line task: Square Every Digit
https://www.codewars.com/kata/5acd142a2ec8c48521000104

 Your goal here is precisely the same (to square every digit in the given number), in 36 or fewer characters (JavaScript), or 47 or fewer in Ruby
*/
sd = x => +('' + x).replace(/\d/g, k => k * k);

console.log(sd(1234), 14916);
console.log(sd(77455754), 4949162525492516);
