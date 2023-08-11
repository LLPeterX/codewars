/* 
7kyu - CubeSummation
https://www.codewars.com/kata/550e9fd127c656709400024d

Напишите функцию cubeSum(n, m), которая будет вычислять сумму кубов чисел в заданном диапазоне, 
начиная от меньшего (но не включая его) и заканчивая большим (включая его). 
Первый аргумент не обязательно является большим числом.

Если оба числа совпадают, то диапазон пуст и результат должен быть равен 0.
*/

// function cubeSum(n, m) {
//   if (n === m) return 0;
//   //let sum = 0;
//   //for (let x = Math.min(n, m) + 1; x <= Math.max(n, m); x++) sum += x * x * x;

//   //return sum;
//   let min = Math.min(n, m), max = Math.max(n, m);
//   let sum = max * max * (Math.pow(max + 1, 2)) / 4 - min * min * (Math.pow(min + 1, 2)) / 4;
//   return sum;
// }

function cubeSum(n, m) {
  let min = Math.min(n, m), max = Math.max(n, m);
  return max * max * (Math.pow(max + 1, 2)) / 4 - min * min * (Math.pow(min + 1, 2)) / 4;
}

console.log(cubeSum(5, 0), 225, "cubeSum(5,0)");
console.log(cubeSum(2, 3), 27, "cubeSum(2,3)");