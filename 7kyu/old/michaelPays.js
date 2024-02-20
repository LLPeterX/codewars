/* 
7kyu - Pizza Payments
https://www.codewars.com/kata/5b043e3886d0752685000009/train/javascript

Kate and Michael want to buy a pizza and share it. 
Depending on the price of the pizza, they are going to divide the costs:

- If the pizza is less than €5, Michael invites Kate, so Michael pays the full price.
- Otherwise Kate will contribute 1/3 of the price, 
  but no more than €10 (she's broke :-) and Michael pays the rest.

How much is Michael going to pay? Calculate the amount with two decimals, if necessary.
*/

// function michaelPays(costs) {
//   if (costs >= 5) {
//     costs -= Math.min(10, costs / 3);
//   }
//   return +costs.toFixed(2);
// }
function michaelPays(costs) {
  return +(costs >= 5 ? (costs - Math.min(10, costs / 3)) : costs).toFixed(2);
}



console.log(michaelPays(15), 10)
console.log(michaelPays(4), 4)
console.log(michaelPays(30), 20)
console.log(michaelPays(80), 70)
console.log(michaelPays(22), 14.67)
console.log(michaelPays(5.9181), 3.95)
console.log(michaelPays(28.789), 19.19)
console.log(michaelPays(4.325), 4.33)

// best

/* 
const michaelPays = costs => Math.round(Math.max(costs < 5 && costs, 2 / 3 * costs, costs - 10) * 1e2) / 1e2;
*/