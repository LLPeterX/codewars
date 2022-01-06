/* 
7kyu - Folding your way to the moon
https://www.codewars.com/kata/58f0ba42e89aa6158400000e/train/javascript

You know that a piece of paper has a thickness of 0.0001m. 
Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.

2^x*0.0001 = 384000000
*/

function foldTo(distance) {
  if (distance < 0) return null;
  if (distance < 0.0001) return 0;
  return Math.round(Math.log2(distance * 10000));
}

console.log(foldTo(384000000), 42);
console.log(Math.log2(4_398_046_511_104));