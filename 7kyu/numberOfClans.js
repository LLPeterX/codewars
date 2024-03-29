/* 
7kyu - Simple Fun #21: Number Of Clans
https://www.codewars.com/kata/5886cab0a95e17e61600009d/train/javascript

Let's call two integers A and B friends if each integer from the array divisors 
is either a divisor of both A and B or neither A nor B. 

If two integers are friends, they are said to be in the same clan. 
How many clans are the integers from 1 to k, inclusive, broken into?
*/

function numberOfClans(divisors, k) {
  let clans = new Set();
  for (let i = 1; i <= k; i++) {
    //let hash = divisors.map(d => i % d === 0 ? 'Y' : 'N').join('');
    let hash = divisors.reduce((x, v) => x + !!(i % v), '');
    clans.add(hash);
  }
  return clans.size;
}

console.log(numberOfClans([2, 3], 6), 4) // [1,5] [2,4] [3], [6]
console.log(numberOfClans([2, 3, 4], 6), 5)
console.log(numberOfClans([1, 3], 10), 2) // 
console.log(numberOfClans([6, 2, 2, 8, 9, 2, 2, 2, 2], 10), 5)

// best

/* 
const numberOfClans = (divisors, k) =>
  new Set([...Array(k)].map((_, idx) => `${divisors.map(val => !((idx + 1) % val))}`)).size;

*/