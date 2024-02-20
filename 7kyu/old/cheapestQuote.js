/* 
7kyu - Paperboy
https://www.codewars.com/kata/56ed5f13c4e5d6c5b3000745/train/javascript

You'll be delivering newspapers to your neighbourhood on weekends.

The cost of deliveries is:

$3.85 for 40 newspapers
$1.93 for 20
$0.97 for 10
$0.49 for 5
$0.10 for 1

Write a function that's passed an integer representing the amount of newspapers 
and returns the cheapest price. 
The returned number must be rounded to two decimal places.
*/

function cheapestQuote(newspapers) {
  const cost = [[1, 0.1], [5, 0.49], [10, 0.97], [20, 1.93], [40, 3.85]];
  let amount = 0;
  for (let i = 4; i >= 0; i--) {
    let n = Math.floor(newspapers / cost[i][0]);
    amount += n * cost[i][1];
    newspapers -= n * cost[i][0];
  }
  return +amount.toFixed(2);
}


console.log(cheapestQuote(20), 1.93);
console.log(cheapestQuote(10), 0.97);
console.log(cheapestQuote(5), 0.49);
console.log(cheapestQuote(1), 0.10);

console.log(cheapestQuote(41), 3.95, '41 newspapers should be priced as 40 bundle and a 1 bundle');
console.log(cheapestQuote(80), 7.70, '80 newspapers should be priced as two 40 bundles');
console.log(cheapestQuote(26), 2.52, '26 newspapers should be priced as a 20 bundle, a 5 bundle and a 1 bundle');
// 26 = 1.93 + 0.49 + 0.1 = 2.52