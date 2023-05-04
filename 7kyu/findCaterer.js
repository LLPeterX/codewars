/* 
7kyu - Find your caterer
https://www.codewars.com/kata/6402205dca1e64004b22b8de/train/javascript

The first caterer offers only a basic buffet which costs $15 per person. 
The second one has an economy buffet at $20 per person
third one has a premium buffet at $30 per person. 
  The third one gives a 20% discount if the number of persons to be served is greater than 60. 
You want to spend the maximum that fits into the budget.

*/

function findCaterer(budget, people) {
  if (budget <= 0 || people <= 0) return -1;
  let arr = [people * 15, people * 20, people > 60 ? people * 30 * 0.8 : people * 30].map(x => budget - x);
  let min = Math.min(...arr.filter(x => x >= 0));
  return min == Infinity ? -1 : arr.indexOf(min) + 1;
}

