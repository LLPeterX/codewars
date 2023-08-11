/* 
7kyu - Mountains of Hoiyama
https://www.codewars.com/kata/617bfa617cdd1f001a5cadc9

Вычислить сумму всех чисел в прямоугольнике с основанием width
width = 5

          5          ->  5
        3,4,3        -> 10
      1,2,3,2,1      ->  9
                      +___
               weight:  24
*/

function mountainsOfHoiyama(width) {
  let weight = 0;
  for (let row = 0; row < Math.ceil(width / 2); row++) {
    let center = Math.ceil(width / 2) + row;
    let centerSum = center * (center - 1) + center;
    let sideSum = row * (row * 2 + 1) * 2;
    weight += centerSum - sideSum;
  }
  return weight;
}
console.log(mountainsOfHoiyama(5), 24)
console.log(mountainsOfHoiyama(17), 693)

// My best!
// other:

/* 
function mountainsOfHoiyama (width) {
  const sum1toN = n => n * (n + 1) / 2;
  const sumRange = (from, to) => (from > to) ? 0 : (sum1toN(to) - sum1toN(from) + from);

  let total = 0, min = 1, max = (width + 1) / 2;

  for (let i = 0; i < (width + 1) / 2; i++) {
    total += 2 * sumRange(min, max) - max;
    min += 2, max += 1;
  }
  return total;
}
*/

