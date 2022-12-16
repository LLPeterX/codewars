/* 
7kyu - Nth Root of a Number
https://www.codewars.com/kata/5520714decb43308ea000083/train/javascript

Given two numbers x and n, calculate the (positive) nth root of x; 
this means that being r = result, r^n = x
*/

function root(x, n) {
  return x ** (1 / n);
}