/* 
6kyu - # Counting 1: I Want Some Subsets, Not All!
https://www.codewars.com/kata/591392af88a4994caa0000e0/train/javascript

We have a set of consecutive numbers from 1 to n. 
We want to count all the subsets that do not contain consecutive numbers.
*/

// based on https://www.youtube.com/watch?v=aLWH2EtKHdk
/* 
Например, [1,2,3,4]
Все подмножества, удовлетворяющие условию, можно разбить на 2 класса:
1) содержат 1 (и не содержат 2) - т.е. 3,4 = 3 шт. - 2,3, 3,4
2) не содержат 1 - т.е. из [2,3,4] = 2,3,4, 2,4 = 4 шт
a(n) = a(n-2)+a(n-1)

Это вариант последовательности Фибоначчи
*/


function f(n, cache = new Map()) {
  if (cache.has(n)) return cache.get(n);
  if (n < 1) return 0;
  if (n < 3) return n;
  cache.set(n, f(n - 1, cache) + f(n - 2, cache) + 1);
  return cache.get(n);
}

console.log(f(1), 1, 2); // 1
console.log(f(2), 2, 3); // 1,2
console.log(f(3), 4, 5); // 1,2,3, 1.3 = 4
console.log(f(5), 12); // 1,2,3,4,5, 1.3, 1.4, 1.5, 2.4, 2.5, 3.5, 1.3.5
console.log(f(20), 17710, '?');

//best
/* 
var m = [0,1,2,4,7,12];
for (let i=6; i<=75; i++) {
  m.push(m[i-1]+m[i-2] +1);
}

const f = n => m[n];
*/

/* 
function f(n) {
  let [m, b] = [0, 1];
  
  for (let i = 1; i <= n; i++)
    [m, b] = [b, m + b + 1];
    
  return m;
}
*/
