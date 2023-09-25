/* 
6kyu - Simple arithmetic progression
https://www.codewars.com/kata/5a903c0557c562cd7500026f

In this Kata, you will be given an array of integers 
and your task is to return the number of arithmetic progressions 
of size 3 that are possible from that list. 
In each progression, the differences between the elements must be the same.

[1, 2, 3, 5, 7, 9] ==> 5
// [1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]
All array elements will be unique and sorted. More examples in test cases.
*/


// решение "в лоб:" для d=[1...arr.length] для всех чисел в массиве считаем, 
// есть ли числа, у которых разница значений = d. Если набралось 3 шт. увеличиваем счетчик
function solve(arr) {
  let count = 0, i, j, n, c, cd;
  for (let d = 1; d < arr.length; d++) {
    cd = 0;
    for (i = 0; i < arr.length; i++) {
      for (j = i + 1, c = 0, n = arr[i]; j < arr.length; j++) {
        if (arr[j] - n === d) {
          c++;
          n = arr[j];
          if (c === 2) {
            count++;
            cd++;
            break;
          }
        }
      }
    }
  }
  return count;
}

console.log(solve([1, 2, 3, 4, 5]), 4); // 1: [1,2,3], [2,3,4], [3,4,5], 2: [1,3,5]
console.log(solve([1, 2, 3, 5, 7, 9]), 5); // 1: [1, 2, 3], 2: [1, 3, 5], [3, 5, 7], [5, 7, 9], 4: [1, 5, 9]
console.log(solve([0, 5, 8, 9, 11, 13, 14, 16, 17, 19]), 10);
console.log(solve([0, 1, 2, 3, 5, 6, 7, 11, 13, 15, 17, 19]), 17);
console.log(solve([0, 1, 4, 5, 7, 9, 10, 13, 15, 16, 18, 19]), 15);
console.log(solve([0, 1, 2, 3, 5, 8, 11, 13, 14, 16, 18, 19]), 13);
console.log(solve([0, 1, 2, 4, 5, 9, 10, 11, 13, 14, 20]), 10);
console.log(solve([0, 1, 2, 3, 7, 9, 10, 11, 13, 14, 20]), 11);

// best
/* 
function solve(arr){
 let result = 0;
 
 for (let i = 0; i < arr.length; i++){
   for (let j = i + 1; j < arr.length; j++){
     if (arr.indexOf(2 * arr[j] - arr[i]) > 0) result ++;
   }
 }
 
 return result;
}
*/