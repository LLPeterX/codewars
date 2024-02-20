/* 
7kyu - Hero's root
https://www.codewars.com/kata/55efecb8680f47654c000095
*/

const intRac = (n, guess, count = 1) => {
  let temp = Math.floor((guess + n / guess) / 2)
  return Math.abs(guess - temp) < 1 ? count : intRac(n, temp, ++count)
}
