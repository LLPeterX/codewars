/* 
6kyu - Reducing by rules to get the result
https://www.codewars.com/kata/585ba6dff59b3cef3f000132/train/javascript
*/

function reduceByRules(numbers, rules) {
  // let result = numbers[0];
  // for (let i = 1; i < numbers.length; i++) {
  //   result = rules[(i - 1) % rules.length](result, numbers[i]);
  // }
  // return result;

  // or
  //return numbers.slice(1).reduce((r, n, i) => rules[i % rules.length](r, n), numbers[0]);

  // or
  return numbers.reduce((r, n, i) => rules[(i - 1) % rules.length](r, n));
}

let rules = [(a, b) => a + b,
(a, b) => a - b];
console.log(reduceByRules([2.0, 2.0, 3.0, 4.0], rules), 5.0);

rules = [(a, b) => a + b];

console.log(reduceByRules([2.0, 2.0, 2.0], rules), 6.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0], rules), 8.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], rules), 10.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rules), 12.0);

rules = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];

console.log(reduceByRules([2.0, 2.0, 2.0], rules), 2.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0], rules), 4.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], rules), 6.0);
console.log(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rules), 4.0);

rules = [(a, b) => Math.min(a, b), (a, b) => Math.max(a, b)];

console.log(reduceByRules([1.3, 2.0, 3.3], rules), 3.3);
console.log(reduceByRules([4.1, 2.2, 2.1, 2.5], rules), 2.2);
console.log(reduceByRules([8.0, 8.1, 4.1, 12.0, 2.0], rules), 8.0);
console.log(reduceByRules([2.9, 2.8, 2.7, 2.6, 2.5, 2.4], rules), 2.4);