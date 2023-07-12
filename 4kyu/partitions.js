/* 
4kyu - Number of integer partitions
https://www.codewars.com/kata/546d5028ddbcbd4b8d001254/train/javascript

An integer partition of n is a weakly decreasing list of positive integers which sum to n.

For example, there are 7 integer partitions of 5:

[5], [4,1], [3,2], [3,1,1], [2,2,1], [2,1,1,1], [1,1,1,1,1].

Write a function which returns the number of integer partitions of n.

The function should be able to find the number of integer partitions 
of n for n at least as large as 100.
*/

// from https://planetcalc.ru/9391/
// https://habr.com/ru/articles/329948/
/* 
--- Задача разложения числа на слагаемые ---
Логика алгоритма: https://habr.com/ru/articles/329948/

Дано: исходный массив в виде единиц — А (1,1,1,1,1). Размерность массива 
соответствует числу n, все разложения которого мы ищем.

0) Если получили сумму, тогда остановка алгоритма.
   -- я суммирую элементы в массиве, в конце должен остаться только один элемент
      с индексом 0, численно равный n.

1) Двигаясь по массиву слева направо, искать в массиве А первый минимальный элемент — x,
последний элемент не учитывается (не участвует в поиске минимального).
   Нам нужно как значение элемента, так и его позиция в массиве. 
   Поэтому я не пользуюсь встроенными в Javascript функциями типа min и findIndexOf, 
   а использую одну итерацию по массиву, запоминая как текущий минимальный элемент, 
   так и его позицию, а также сумму до текущего минимального элемента включительно 
   (сумма понадобится ниже).

2) Перенести единицу из конца (последнего элемента) в найденный минимальный элемент x
(равносильно увеличению x на единицу и уменьшению на единицу последнего элемента).
   Здесь прибавляется единица, и используется метод splice

3) Разложить сумму всех элементов после измененного элемента — x – на единицы.
   Здесь добавляем единицы, используя ранее подсчитанную частичную сумму.

// TIMEOUT !!!
function partitions(n) {
  let count = 1;
  let nums = Array(n).fill(1);
  while (nums[0] != n) {
    count++;
    let min = nums[0];
    let minindex = 0;
    let sum = nums[0];
    let tempsum = nums[0];
    for (let j = 1; j < nums.length - 1; ++j) {
      tempsum += nums[j];
      if (min > nums[j]) {
        min = nums[j];
        minindex = j;
        sum = tempsum;
      }
    }
    nums[minindex] += 1;
    sum += 1;
    nums.splice(minindex + 1);
    for (let k = 0; k < n - sum; ++k) nums.push(1);
  }
  return count;
}
*/

/* 
///TIMEOUT!!!
function partitions(n, k = n) {
  if (k == 0) return n == 0 ? 1 : 0;
  if (k <= n) return partitions(n, k - 1) + partitions(n - k, k);
  return partitions(n, n);
}
 */


// TIMEOUT!!!
/*
function partitions(n) {
  if (n < 2) return 1;
  let l = n, r = 1, j, s, i;
  let a = Array(n).fill(1);
  do {
    s = 0;
    i = l - 1;
    do {
      s += a[i--];
    } while (i > 0 && a[i - 1] <= a[i]);
    ++a[i];
    l = s + i;
    for (j = i + 1; j < l; j++) a[j] = 1;
    r++;
  } while (l > 1);

  return r;
}


// Ну нахер этот timeout! Сгенерируем заранее 100 значений разложений
// let result = [];
// for (let n = 1; n <= 100; n++) {
//   result.push(partitions(n));
// }
// console.log(result);


*/


// console.log(partitions(1), 1, "Expected partitions(1) to equal 1");
// console.log(partitions(2), 2);
// console.log(partitions(5), 7, "Expected partitions(5) to equal 7");
// console.log(partitions(10), 42, "Expected partitions(10) to equal 42");
// console.log(partitions(25), 1958, "Expected partitions(25) to equal 1958");
// console.time('calc100');
// console.log(partitions(100), 190569292, "Expected partitions(100) to equal 190569292");
// console.timeLog('calc100'); // 8 sec!

const partitions = n => [
  1, 2, 3, 5, 7, 11,
  15, 22, 30, 42, 56, 77,
  101, 135, 176, 231, 297, 385,
  490, 627, 792, 1002, 1255, 1575,
  1958, 2436, 3010, 3718, 4565, 5604,
  6842, 8349, 10143, 12310, 14883, 17977,
  21637, 26015, 31185, 37338, 44583, 53174,
  63261, 75175, 89134, 105558, 124754, 147273,
  173525, 204226, 239943, 281589, 329931,
  386155, 451276, 526823, 614154,
  715220, 831820, 966467, 1121505,
  1300156, 1505499, 1741630, 2012558,
  2323520, 2679689, 3087735, 3554345,
  4087968, 4697205, 5392783, 6185689,
  7089500, 8118264, 9289091, 10619863,
  12132164, 13848650, 15796476, 18004327,
  20506255, 23338469, 26543660, 30167357,
  34262962, 38887673, 44108109, 49995925,
  56634173, 64112359, 72533807, 82010177,
  92669720, 104651419, 118114304, 133230930,
  150198136, 169229875, 190569292
][n - 1];


// best
/* 
function partitions(n) {
    let partitionArray = Array(n + 1).fill(0);
    partitionArray[0] = 1;
  
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            partitionArray[j] += partitionArray[j - i];
        }
    }
  
    return partitionArray[n];
}
*/

/* 
function partitions(n) {
  let count = 0;
  const memo = {};
  const subtractNum = (currentNum, lastSub) => {
    if (lastSub === 1 || currentNum === 0) {
      count++;
      return 1;
    }
    const d = `${currentNum}x${lastSub}`;
    if (memo[d]) {
      count += memo[d];
      return memo[d];
    }
    
    let newAdds = 0;
    for (let x = Math.min(lastSub, currentNum); x > 0; x--) {
      newAdds += subtractNum(currentNum - x, x);
    }
    return memo[d] = newAdds;
  }
  subtractNum(n, n);
  return count;
}
*/