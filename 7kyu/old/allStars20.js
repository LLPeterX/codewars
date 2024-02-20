/* 
7kyu All Star Code Challenge #20
https://www.codewars.com/kata/5865a75da5f19147370000c7

Создать функцию, которая комбинирует 2 массива равного размера,
суммируя элементы обоих массивов
*/

function addArrays(array1, array2) {
  if(array1.length != array2.length) {
    throw new Error();
  }
  return array1.map((e,i) => e+array2[i]);
}

 