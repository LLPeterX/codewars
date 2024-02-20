/* 
7kyu - The Most Amicable of Numbers
https://www.codewars.com/kata/56b5ebaa26fd54188b000018/train/javascript


*/

function getDivSum(n) {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}

function amicableNumbers(num1, num2) {
  return getDivSum(num1) === num2 && getDivSum(num2) === num1;
}


console.log(amicableNumbers(220, 284), true);
console.log(amicableNumbers(220, 280), false);
console.log(amicableNumbers(1184, 1210), true);
console.log(amicableNumbers(220221, 282224), false);