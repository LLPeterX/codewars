/* 
6kyu - Thue-Morse Sequence
https://www.codewars.com/kata/591aa1752afcb02fa300002a

Given a positive integer n, return first n dgits of Thue-Morse sequence, as a string.
*/

function thueMorse(n) {
  let arr = [0];
  do {
    arr = arr.concat(arr.map(d => 1 - d));
  } while (arr.length < n)
  return arr.slice(0, n).join``;
}

console.log(thueMorse(1), '0'); // 
console.log(thueMorse(2), '01'); // 
console.log(thueMorse(5), '01101'); // 
console.log(thueMorse(10), '0110100110'); // 