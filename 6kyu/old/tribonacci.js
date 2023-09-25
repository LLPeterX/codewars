/* 
6kyu - Tribonacci Sequence
https://www.codewars.com/kata/556deca17c58da83c00002db/solutions/javascript

Tribonacci sequence starts with  [1, 1, 1] as a starting input (AKA signature), we have this sequence:
[1, 1 ,1, 3, 5, 9, 17, 31, ...]

But what if we started with [0, 0, 1] as a signature? 
As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence 
by once place, you may be tempted to think that we would get the same sequence 
shifted by 2 places, but that is not the case and we would get:
[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

Well, you may have guessed it by now, but to be clear: 
you need to create a fibonacci function that given a signature array/list,
returns the first n elements - signature included of the so seeded sequence.
*/

function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) { // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
