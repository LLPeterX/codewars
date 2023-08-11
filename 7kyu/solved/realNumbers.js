/* 
7kyu - Mysterious Singularity Numbers
https://www.codewars.com/kata/6409aa6df4a0b773ce29cc3d/train/javascript

The point is that a natural number N (1 <= N <= 10^9) is given. 
You need to write a function which finds the number of natural numbers 
not exceeding N and not divided by any of the numbers [2, 3, 5].

Найти кол-во чисел от 1 до N, не делящихся на 2,3 и 5
*/

const realNumbers = (n) => n - (~~(n / 2) + ~~(n / 3) + ~~(n / 5) - ~~(n / 6) - ~~(n / 10) - ~~(n / 15) + ~~(n / 30))

console.log(realNumbers(5), 1);
console.log(realNumbers(10), 2);
console.log(realNumbers(30), 8);
console.log(realNumbers(100), 26);
