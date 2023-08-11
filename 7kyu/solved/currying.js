/* 
7kyu Currying functions: multiply all elements in an array
https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

Каррирование.
Написать функцию multiplyAll(), которая приниает аргументом массив чисел
и возвращает функцию, которая в свою очередь принимает аргумент
Результат - массив чисел, перемноженный на аргумент внутренней функции
*/

// function multiplyAll(arr) {
//   return (n) => arr.map(v => v*n);
//  }

const multiplyAll = (arr) => (n) => arr.map(v => v*n);

console.log(multiplyAll([1, 2, 3])(2)); // [2,4,6]