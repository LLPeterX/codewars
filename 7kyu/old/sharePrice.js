/* 
7kyu - Share prices
https://www.codewars.com/kata/5603a4dd3d96ef798f000068/train/javascript

our task:
Write the function sharePrice() that calculates, and returns 
the current price of your share, given the following two arguments:

* invested(number), the amount of money you initially invested in the given share
* changes(array of numbers), contains your shares daily movement percentages

The returned number, should be in string format, and it's precision should be fixed at 2 decimal numbers
*/

const sharePrice = (invested, changes) => (changes.reduce((sum, p) => sum + sum * p / 100, invested)).toFixed(2);

console.log(sharePrice(100, []), '100.00');
console.log(sharePrice(100, [-50, 50]), '75.00');
console.log(sharePrice(100, [-50, 100]), '100.00');
console.log(sharePrice(100, [-20, 30]), '104.00');
console.log(sharePrice(1000, [0, 2, 3, 6]), '1113.64');