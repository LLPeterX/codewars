/* 
7kyu - Find Factors Down to Limit
https://www.codewars.com/kata/58f6024e1e26ec376900004f/train/javascript

In this Kata you have to find the factors of integer down to the limit +
including the limiting number. 
There will be no negative numbers. 
Return the result as an array of numbers in ascending order.

If the limit is more than the integer, return an empty list

As a challenge, see if you can do it in one line
*/


// function factors(integer, limit) {
//   if (limit > integer) return [];
//   let result = [];
//   for (let i = limit; i <= integer; i++)
//     if (integer % i === 0) result.push(i);

//   return result;
// }

const factors = (integer, limit) =>
  limit > integer
    ? []
    : Array.from({ length: integer + 1 }, (_, x) => integer / (x + 1))
      .filter(x => Number.isInteger(x) && x >= limit)
      .sort((a, b) => a - b);



console.log(factors(5, 1), [1, 5]);
console.log(factors(30, 2), [2, 3, 5, 6, 10, 15, 30]);
console.log(factors(100, 75), [100]);
console.log(factors(40, 5), [5, 8, 10, 20, 40]);
console.log(factors(1, 5), []);

// best
/* 
function factors(m, n) {
  // Challenge Accepted ;)
  return Array(m).fill(0).map((_, i) => i + 1).filter(x => x >= n && m % x === 0);
}
*/

/* 
factors=(n,l)=>[...Array(Math.max(n-l+1,0))].map((_,i)=>l+i).filter(x=>!(n%x))
*/

/* 
const factors = (x, l) => Array.from({ length: x - l + 1 }, (_, i) => l + i).filter(c => !(x % c));
*/