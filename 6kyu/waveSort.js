/* 
6kyu - Wave Sorting
https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1/train/javascript

Волновая сортировка
Пример: [4, 1, 7, 5, 6, 2, 3] (4 >= 1, then 1 <= 7, then 7 >= 5, then 5 <= 6, then 6 >= 2, and finally 2 <= 3.)
Волновые списки должны начинаться с элемента не ниже следующего: [1, 4, 5, 3] - неверно

Your task is to implement a function that takes a list of integers and sorts it into wave order in place; 
your function shouldn't return anything.
*/



function waveSort(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i += 2) {
    // let tmp = arr[i];
    // arr[i] = arr[i];
    // arr[i + 1] = tmp;
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return arr;
}


let arr = [1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4];
console.log(waveSort(arr));