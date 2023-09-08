/* 
5kyu - Base-2
https://www.codewars.com/kata/54c14c1b86b33df1ff000026

In this Kata you must convert integers numbers from and to 
a negative-base binary system.

Negative-base systems can accommodate all the same numbers 
as standard place-value systems, but both positive and negative numbers
are represented without the use of a minus sign 
(or, in computer representation, a sign bit); 
this advantage is countered by an increased complexity of arithmetic operations.

To help understand, the first eight digits (in decimal) of the Base(-2) system is:

[1, -2, 4, -8, 16, -32, 64, -128]

Example conversions:

Decimal, negabinary

6,   '11010'
-6,  '1110'
4,   '100'
18,  '10110'
-11, '110101'
*/

// see https://en.wikipedia.org/wiki/Negative_base

function intToNegabinary(i) {
  //let result = "";
  //while (i != 0) {
  //   let remainder = i % -2;
  //   i = ~~(i / -2);
  //   if (remainder < 0) {
  //     remainder += 2;
  //     i += 1;
  //   }
  //   result = remainder + result;
  // }

  // return result;

  return ((i + 0xAAAAAAAA) ^ 0xAAAAAAAA).toString(2);
}

function negabinaryToInt(s) {
  // let result = 0;
  // for (let i = 0; i < s.length; i++) {
  //   result += s[i] * Math.pow(-2, s.length - i - 1);
  // }
  // return result;
  return [...s].reduce((n, b, i, a) => n + b * Math.pow(-2, a.length - i - 1), 0);
}

console.log(intToNegabinary(6), "11010", "Convertion from int to negabinary");
console.log(intToNegabinary(-6), "1110", "Convertion from int to negabinary");

console.log(negabinaryToInt("11010"), 6, "Convertion from negabinary to int");
console.log(negabinaryToInt("1110"), -6, "Convertion from negabinary to int");

// best
/* 
b=0xAAAAA;intToNegabinary=a=>((a+b)^b).toString(2);negabinaryToInt=a=>(parseInt(a,2)^b)-b
*/

/* 
function intToNegabinary( number ) {
    var Schroeppel4 = 0xAAAAAAAA;
    // Convert to NegaQuaternary String
    return ( ( number + Schroeppel4 ) ^ Schroeppel4 ).toString(2);
}
function negabinaryToInt(s) {
  return [...s].reduce((i,d)=>+d-i*2, 0);
}
*/
