/* 
7kyu - Bubblesort Once
https://www.codewars.com/kata/56b97b776ffcea598a0006f2

Выполнить 1 проход пузыриковой сортировки. Вернуть массив.
*/

function bubblesortOnce(a) {
  let b = a.slice();
  for (let i = 1; i < b.length; i++) {
    if (b[i] < b[i - 1]) {
      [[b[i], b[i - 1]]] = [[b[i - 1], b[i]]];
    }
  }
  return b;
}

console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])); // [7, 5, 3, 1, 2, 4, 6, 8, 9]