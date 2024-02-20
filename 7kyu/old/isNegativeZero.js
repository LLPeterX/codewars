/* 
7kyu - Is It Negative Zero (-0)?
https://www.codewars.com/kata/5c5086287bc6600001c7589a/train/javascript

check if argument === -0
*/

function isNegativeZero(n) {
  return n === 0 && n.toLocaleString().includes('-');
}

// best

/* 
const isNegativeZero = n => Object.is(n, -0);
*/

/* 
const isNegativeZero = n =>  1 / Math.sign(n) === -Infinity;
*/

/* 
isNegativeZero=Q=>!Q&&9/Q==9/-0
*/