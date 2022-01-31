/* 
6kyu - The Non-Discriminate Factorial
https://www.codewars.com/kata/53fe2171d5679bff300007d9/train/javascript

Создать функцию факториала как для положительных, так и для отрицательных чисел.
1) n=0: 1
2) n>0 : factorial(n) = n*(n-1)*...*2*1.
3) n<0 :                n*(n+1)*...*(-2)*(-1)
*/

const factorial = n => !n ? 1 : Math.abs(n) < 2 ? 1 * Math.sign(n) : n * factorial(n - 1 * Math.sign(n));

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(2), 2);
console.log(factorial(3), 6);
console.log(factorial(4), 24);
console.log(factorial(5), 120);
console.log(factorial(10), 3628800);

console.log(factorial(-1), -1);
console.log(factorial(-2), 2);
console.log(factorial(-3), -6);
console.log(factorial(-4), 24);
console.log(factorial(-5), -120);
console.log(factorial(-9), -362880);
console.log(factorial(-10), 3628800);

// best
/* 
const factorial = (n) => n ? factorial(n - Math.sign(n)) * n : 1;
*/