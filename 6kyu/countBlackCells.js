/* 
6kyu - Simple Fun #19: Count Black Cells
https://www.codewars.com/kata/588475d575431d0a0e000023

Дан прямогульник N * M. Проведена диагональ.
Сколько квадратов она пересекает? (вклюячая границы и углы)
*/

// см. https://www.youtube.com/watch?v=sTBDVBsfX78
/* 
 Если N и M простые числа (НОД=1), то  n+m-1
 (или площадь/2)
  Но у нас есть случаи с НОД!=2 (касания диагонали угла клетки)
 */
const gcd = (a, b) => b ? gcd(b, a % b) : a;
function countBlackCells(n, m) {
  return n + m + gcd(n, m) - 2;
}

console.log(countBlackCells(3, 4), 6)
console.log(countBlackCells(3, 3), 7) // 2 точки касания углов (+2*2 = +4 клетки)
console.log(countBlackCells(2, 5), 6)
console.log(countBlackCells(2, 4), 6) // 1 точка касания (+2)
console.log(countBlackCells(1, 1), 1)
console.log(countBlackCells(1, 2), 2)
console.log(countBlackCells(1, 239), 239)
console.log(countBlackCells(33, 44), 86)
console.log(countBlackCells(16, 8), 30)
console.log(countBlackCells(6666, 8888), 17774)
