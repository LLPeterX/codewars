/* 
7kyu - Numbers Which Sum of Powers of Its Digits Is The Same Number
https://www.codewars.com/kata/560a4962c0cc5c2a16000068/train/javascript

Not considering number 1, the integer 153 is the first integer having this property: 
the sum of the third-power of each of its digits is equal to 153. 
Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

The next number that experiments this particular behaviour is 370 with the same power.

Write the function eq_sum_powdig(), that finds the numbers below a given 
upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the digits.
*/

function eqSumPowdig(hMax, exp) {
  const result = [];
  for (let n = 2; n <= hMax; n++) {
    if ([..."" + n].reduce((sum, x) => sum + Math.pow(+x, exp), 0) === n) {
      result.push(n);
    }
  }
  return result;
}

console.log(eqSumPowdig(100, 2), [])
console.log(eqSumPowdig(1000, 2), [])
console.log(eqSumPowdig(2000, 2), [])
console.log(eqSumPowdig(200, 3), [153])
console.log(eqSumPowdig(370, 3), [153, 370])
console.log(eqSumPowdig(400, 3), [153, 370, 371])
console.log(eqSumPowdig(500, 3), [153, 370, 371, 407])
console.log(eqSumPowdig(1000, 3), [153, 370, 371, 407])
console.log(eqSumPowdig(1500, 3), [153, 370, 371, 407])