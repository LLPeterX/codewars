/* 
8kyu - Tip Calculator
https://www.codewars.com/kata/56598d8076ee7a0759000087/train/javascript

Complete the function, which calculates how much you need to tip 
based on the total amount of the bill and the service

You need to consider the following ratings:

- Terrible: tip 0%
- Poor: tip 5%
- Good: tip 10%
- Great: tip 15%
- Excellent: tip 20%

The rating is case insensitive.
If an unrecognised rating is received, then you need to return "Rating not recognised"
*/

function calculateTip(amount, rating) {
  const ratings = { "terrible": 0, "poor": 5, "good": 10, "great": 15, "excellent": 20 };
  return rating.toLowerCase() in ratings ? Math.ceil(amount * ratings[rating.toLowerCase()] / 100) : "Rating not recognised";
}
console.log(calculateTip(20, "Excellent"), 4);
console.log(calculateTip(26.95, "good"), 3);
console.log(calculateTip(107.65, "GReat"), 17);