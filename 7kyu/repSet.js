/* 
7kyu - Natural Emptiness
https://www.codewars.com/kata/64b8c6c09416795eb9fbdcbf

In abstract set theory, a construction due to von Neumann 
represents the natural numbers by sets, as follows:

0 = [ ] is the empty set
1 = 0 ∪ [ 0 ] = [ 0 ] = [ [ ] ]
2 = 1 ∪ [ 1 ] = [ 0, 1 ] = [ [ ], [ [ ] ] ]
n = n−1 ∪ [ n−1 ] = ...

Write a function that receives an integer n and produces the representing set.

Examples
  rep_set(0) ➞ []
  rep_set(1) ➞ [[]]
  rep_set(2) ➞ [[], [[]]]
  rep_set(3) ➞ [[], [[]], [[], [[ ]]]]

  Input Constraints
0 <= n <= 15
*/

function repSet(n) {
  let result = [], a = [];
  for (let i = 0; i < n; i++) {
    result.push(a);
    a = [...result.slice(0, i), a];
  }
  return result;
}

// можно решить рекурсией!

console.log(repSet(0));
console.log(repSet(1));
console.log(repSet(2));
console.log(repSet(3), '=>', [[], [[]], [[], [[]]]]);

//best
/* 
const repSet = (n) => Array.from({ length: n }, (_, i) => repSet(i));
*/

/* 
function repSet( n ) {
  if( n === 0 ) return [];
  else {
    let next = repSet( n - 1 );
    return next.concat( [ next ] );
  }
}
*/