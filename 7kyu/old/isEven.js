/* 
7kyu - isEven? - Bitwise Series
https://www.codewars.com/kata/592a33e549fe9840a8000ba1/javascript

If the numbers is even return true. If it's odd, return false.
Oh yeah... the following symbols/commands have been disabled!
- use of %
- use of .even? in Ruby
- use of mod in Python
*/

/* 

fun solutions:

const isEven = n => !(n & 1);

const isEven=n=>(n|1)!=n;

var isEven = function (n) { //if n is even return true, otherwise, return false
  return Math.floor(n / 2) * 2 === n ? true : false;
}

var isEven = function (n) { //if n is even return true, otherwise, return false
 return n == 0 || n == 1? n == 0 : isEven(n - 2);
}

//const isEven = n => (n|1) === n+1;
//const isEven = n => ~~(n/2)*2 === n;
// No, these are too complicated! 
const isEven = kitty => /0$/.test(kitty.toString(2));

var isEven = function (n) { //if n is even return true, otherwise, return false
  return !(n / 2).toString().includes('.')
}

var isEven = function (n) {
 return /^\d*[02468]$/g.test(n);
}

*/