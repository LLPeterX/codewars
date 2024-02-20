/* 
6kyu - Dividers of primes
https://www.codewars.com/kata/64600b4bbc880643faa343d1/train/javascript

Find all the dividers!
You are given a list of prime numbers (e.g. [5, 7, 11]) 
and a list of their associated powers (e.g. [2, 1, 1]). 
The product of those primes at their specified power 
forms a number x (in our case x = 5^2 * 7^1 * 11^1 = 1925).

Your goal is to find all of the dividers for this number!

To do so, you have to multiply each prime number, 
from its power 0 to its power p in the power list, 
to every other prime, from their power 0 to their associated power p.

Each result of those products is a divider of x!

In our example: [1, 5, 7, 11, 25, 35, 55, 77, 175, 275, 385, 1925]

Once you find those dividers, sort them in ascending order, and VOILA!
*/



function getDividers(values, powers) {
  const x = values.reduce((s, v, i) => s * (v ** powers[i]), 1);
  const result = [1];
  for (let n = 2; n <= x; n++) {
    if (x % n === 0) result.push(n);
  }
  return result;
}

//console.log(getDividers([5, 7, 11], [2, 1, 1]), [1, 5, 7, 11, 25, 35, 55, 77, 175, 275, 385, 1925]);
//console.log(getDividers([2, 5, 11], [2, 1, 1]), [1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110, 220]);
//console.log(getDividers([11, 113], [1, 1]), [1, 11, 113, 1243]);
// console.log(getDividers([2, 5, 13], [4, 3, 1]), [1, 2, 4, 5, 8, 10, 13, 16, 20, 25, 26, 40, 50, 52, 65, 80, 100, 104, 125, 130, 200, 208, 250, 260, 325, 400, 500, 520, 650, 1000, 1040, 1300, 1625, 2000, 2600, 3250, 5200, 6500, 13000, 26000]);