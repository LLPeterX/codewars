/* 
6kyu - Compute cube as sums
https://www.codewars.com/kata/58af1bb7ac7e31b192000020/train/javascript

Дано число N. Найти N последовательных нечетных чисел, сумма которых = N^3

findSummands(3) = [7,9,11] // 7 + 9 + 11 = 27, 3^3=27 (3-длина массива).
*/

function findSummands(n) {
  let n3 = n ** 3;
  for (let i = 1; i < n3; i += 2) {
    let s = (i + (n - 1)) * n;
    if (s === n3) {
      return Array(n).fill().map((_, k) => k * 2 + i);
    }
    //console.log(`i=${i} n1=${n1} (n3=${n3}, n2=${n2}) s=${s}`);

  }
  return [1];
}

console.log(findSummands(3), [7, 9, 11]);


console.log(findSummands(1).length, 1, 'Incorrect length for n = 1');
console.log(findSummands(1).reduce((a, c) => a + c, 0), 1, 'Incorrect sum for n = 1');

console.log(findSummands(3).length, 3, 'Incorrect length for n = 1');
console.log(findSummands(3).reduce((a, c) => a + c, 0), 27, 'Incorrect sum for n = 1');
console.log(findSummands(3).every((a) => a % 2 == 1), 'all summands have to be odd');

// best
/* 
const findSummands = n =>
  Array.from(
    { length: n }, 
    (_, i) => n * n - n + i * 2 + 1
  );
*/