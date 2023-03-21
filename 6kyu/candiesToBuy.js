/* 
6kyu - Kids and candies
https://www.codewars.com/kata/56cca888a9d0f25985000036/train/javascript

I've invited some kids for my son's birthday, during which I will give to each kid some amount of candies.

Every kid hates receiving less amount of candies than any other kids,
 and I don't want to have any candies left - giving it to my kid would be bad for his teeth.

However, not every kid invited will come to my birthday party.

What is the minimum amount of candies I have to buy, 
so that no matter how many kids come to the party in the end, 
I can still ensure that each kid can receive the same amount of candies, while leaving no candies left?
*/

// function gcd(...numbers) {
//   return numbers.reduce((a, b) => b === 0 ? a : gcd(b, a % b));
// }
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function candiesToBuy(kids) {
  return Array.from({ length: kids }, (_, i) => i + 1).reduce((a, b) => Math.abs(a * b) / gcd(a, b));
}


console.log(candiesToBuy(1), 1)
console.log(candiesToBuy(2), 2)
console.log(candiesToBuy(3), 6)
console.log(candiesToBuy(4), 12)
console.log(candiesToBuy(5), 60)
console.log(candiesToBuy(10), 2520)
console.log(candiesToBuy(11), 27720)
console.log(candiesToBuy(12), 27720)
console.log(candiesToBuy(20), 232792560)

// best
/* 
const candiesToBuy = (() => {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const lcm = (a, b) => a * b / gcd(a, b);
  return n => Array(n).fill(0).reduce((acc, _, i) => lcm(acc, i + 1), 1);
})();
*/