/* 
4kyu Magnet particules in boxes
https://www.codewars.com/kata/56c04261c3fcf33f2d000534

Дана матрица KxN (K строк и N столбцов)
В каждой ячейке (k,n) сила  v(1,N)= 1/k(n+1)^2k, в кажой строке общая сумма u(1,N)= сумма всех сил ячеек.
Общая сила матрицы S(K,N)= сумме всех сил строк матрицы

Задача: даны параметры maxk и maxn. Рассчитать S(K,N)
*/

function doubles(maxk, maxn) {
  let s = 0;
  for(let k=1; k<=maxk; k++) { 
    for(let n = 1; n <= maxn; n++) {
      s += 1/(k * Math.pow((n + 1), 2*k));
    }
  }
  return s;
}

console.log(doubles(1, 3));
console.log(doubles(1, 10));
console.log(doubles(10, 100)); // 0.6832948559787737 (fail)