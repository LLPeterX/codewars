/* 
6kyu - The Three Amigos
https://www.codewars.com/kata/59922d2ab14298db2b00003a

Given a list of random integers, return the Three Amigos.

These are 3 numbers that live next to each other in the list, 
and who have the most in common with each other by these rules:
- lowest statistical range (equal difference)
- same parity

Notes
The list will contain at least 3 numbers
If there is more than one answer then return the first one found (reading the list left to right)
If there is no answer (e.g. no 3 adjacent numbers with same parity) then return an empty list.
*/

function threeAmigos(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let [a, b, c] = numbers.slice(i, i + 3);
    if (Math.abs(a % 2) === Math.abs(b % 2) && Math.abs(a % 2) === Math.abs(c % 2)) {
      result.push([a, b, c]);
    }
  }
  console.log('res=', result);
  return result.sort(([a1, b1, c1], [a2, b2, c2]) => (Math.abs(Math.max(a1, b1, c1) - Math.min(a1, b1, c1))) - Math.abs((Math.max(a2, b2, c2) - Math.min(a2, b2, c2))))[0] || [];
}


console.log(threeAmigos([-8, -25, 21, -7, -5]), [21, -7, -5]);