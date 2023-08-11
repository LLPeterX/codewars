/* 
7kyu - Simple Fun #34: Numbers Grouping
https://www.codewars.com/kata/588711735ea0b4649e000001/train/javascript

Дан массив чисел. Распределить по группам:
 1: 1 ...10^4 (1...10000) - why?
 2: 10^4+1 ... 2*10^4 (100001-20000)
 3: 2*10^4 ... (20001 - 30000)
 100: 99*10^4+1 ... 10^6
*/

function numbersGrouping(a) {
  let groups = new Set();
  for (let i = 0; i < a.length; i++) {
    groups.add(Math.floor((a[i] - 1) / 10000));
  }
  return groups.size + a.length;
}

console.log(numbersGrouping([20000, 239, 10001, 999999, 10000, 20566, 29999]), 11)

console.log(numbersGrouping([10000, 20000, 30000, 40000, 50000, 60000, 10000, 120000, 150000, 200000, 300000, 1000000]), 23)

console.log(numbersGrouping([10000]), 2)

console.log(numbersGrouping([10000, 1]), 3) // почему?

// best
/* 
const numbersGrouping = a =>
  new Set(a.map(val => --val / 1e4 ^ 0)).size + a.length;
*/