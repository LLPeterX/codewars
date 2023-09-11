/* 
6kyu - Palindromic Numbers
https://www.codewars.com/kata/52a0f488852a85c723000aca

Non-palindromic numbers can be paired with palindromic ones 
via a series of operations. First, the non-palindromic number 
is reversed and the result is added to the original number. 
If the result is not a palindromic number, 
this is repeated until it gives a palindromic number.

This Kata is about actually finding a palindromic number out of an original seed.
You will be given a number as input and in the output you must return 
a string containing the number of iterations (i.e. additions) 
you had to perform to reach the palindromic result 
and the palindromic number itself, separated by a space. 

*/

function palindromize(n) {
  let count = 0;
  while (true) {
    let pal = [...("" + n)].reverse().join``;
    if (pal === "" + n) break;
    n += +pal;
    count++;
  }
  return `${count} ${n}`;
}

console.log(palindromize(195), [4, 9339]);
console.log(palindromize(265), [5, 45254]);
console.log(palindromize(750), [3, 6666]);

// best
/* 
function palindromize(n, i){
  a = +((n + '').split('').reverse().join(''));
  return (n == a) ? (i || 0) + ' ' + n : palindromize(n + a, i ? ++i : 1);
}
*/