/* 
7kyu - Pairs of integers from 0 to n
https://www.codewars.com/kata/588e27b7d1140d31cb000060/train/javascript

Write a function generatePairs() that accepts an integer argument n 
and generates an array containing the pairs of integers [a, b] that satisfy the following conditions:

0 <= a <= b <= n
The pairs should be sorted by increasing values of a then increasing values of b.

For example, generatePairs(2) should return
[ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]
*/

function generatePairs(n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      res.push([i, j]);
    }
  }
  return res;
}

console.log(generatePairs(2), ' => ', [[0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2]]);

// fun

/*
// recursion & IIFE & destructuring

                                                                      const
                                                                  generatePairs
                                                                   = (ဝ , ο) =>
                                                               (ο =( {o , о} ) =>
                                                                      о < ဝ
                                                                   ?[[o , о],
                                                                  ... ο( {о :++
                                                                      о , o
                                                                })]: o <=  ဝ ? [
                                                                   [ o  ,  о ]
                                                               ,... ο  (  { o :++
                                                                    o   ,   о
                                                                 : o})]:[])({o :
                                                                 0o0   ,о:   0o0})

*/


// short

/* 
const generatePairs = (n, a = 0) => a > n ? [] : Array.from({length: n-a+1}, (_, i) => [a, a+i]).concat(generatePairs(n, a+1));
 */