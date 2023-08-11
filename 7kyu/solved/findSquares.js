/* 
7kyu - Find the Squares
https://www.codewars.com/kata/60908bc1d5811f0025474291

Дано нечетное число N, которое представляет собой разницу между двумя идеальными квадратами a=X^2 и b= Y^2
Найти эти квадраты вернуть строку в виде "b-a"
Например: N=9, -->  "25-16"
(идеальный квадрат - целое, которое представляет собой квадрат другого целого)
9  -->  "25-16"
5  -->  "9-4"
7  -->  "16-9"

*/

/* function findSquares(n) {
  for (let i = n - 1; i > 0; i--) {
    for (let j = n - 2; j > 0; j--) {
      if (i * i - j * j === n) {
        return `${i * i}-${j * j}`;
      }
    }
  }
  return null;
} */


function findSquares(n) {
  const i = (n - 1) / 2;
  return ((i + 1) ** 2) + '-' + (i ** 2);
}


console.log(findSquares(9), "25-16");
console.log(findSquares(5), "9-4"); // 3*3-2*2
console.log(findSquares(81), '1681-1600');
console.log(findSquares(25), '169-144'); 