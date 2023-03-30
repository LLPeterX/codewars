/* 
7kyu - Sums of consecutive integers
https://www.codewars.com/kata/55b54be931e9ce28bc0000d6/train/javascript

Есть последовательность целых чисел.
Вход:
 * count - количество последовательных целых (сами числа неизвестны)
 * sum - сумма этих последовательных чисел
 * pos - позиция (индекс) запрашиваемого числа
 Вернуть целое, которое находится в n-й позиции (n < x)
 
 Если последовательность [2, 3, 4, 5], то count=4, sum=14, то число для позиции pos=3 => 5.

 Решение: если [x, x1+1, ... x+n-1]
 то SUM = x + x+1 + x+2 + ... x+(n-1)
 или SUM = (S-A)/n
 где A=(n-1)*n/2
*/

function position(x, y, n) {
  return (y - ((x - 1) * x / 2)) / x + n;
}



console.log(position(4, 14, 3), 5); // [2, 3, 4, 5]
console.log(position(2, 25, 0), 12); // [12, 13]
console.log(position(7, 749, 5), 109);
console.log(position(3, -9, 1), -3); // [-4, -3, -2]
console.log(position(5, 0, 0), -2); // [-2, -1, 0, 1, 2]

// best
/* 
function position(x, y, n) {
  return y / x - (x - 1) / 2 + n;
}
*/

/* 
function position(x, y, n) {
  
  const startValue = Math.ceil(y / x) - Math.floor(x / 2);
  
  return startValue + n;
}
*/