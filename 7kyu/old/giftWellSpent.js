/* 
7kyu - A Gift Well Spent
https://www.codewars.com/kata/54554846126a002d5b000854

Есть скидочная карта с лимитом N рублей. На неё можно купить ровно 2 подарка.
Дано: N - лимит и массив стоимостей товаров.
Вычислить индексы в массиве элементов, сумма которых = N
Перый индекс должен быть всегда меньше второго

buy(5,[1,2,3,4,5]) = [0,3] // the values at [1,2] also adds up to five, but [0,3] < [1,2]
*/

var buy = function (x, arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === x) {
        return [i, j];
      }
    }
  }
  return null;
};

console.log(buy(5, [1, 2, 3, 4, 5]), [0, 3]);