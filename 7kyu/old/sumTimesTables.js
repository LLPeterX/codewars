/* 
7kyu - Sum Times Tables
https://www.codewars.com/kata/551e51155ed5ab41450006e1/train/javascript

Write a function sumTimesTables which sums the result of the sums 
of the elements specified in tables multiplied by all the numbers 
in between min and max including themselves.

For example, for sumTimesTables([2,5],1,3) the result should be the same as

2*1 + 2*2 + 2*3 +
5*1 + 5*2 + 5*3
i.e. the table of two from 1 to 3 plus the table of five from 1 to 3
*/

function sumTimesTables(tables, min, max) {
  let sumTab = tables.reduce((sum, value) => sum + value, 0);
  let count = (min + max) * (max - min + 1) / 2;
  return sumTab * count;
}

console.log(sumTimesTables([2, 3], 1, 3), 30); //s=5; 1*5 + 2*5 + 3*5 = 5*(1+2+3)
console.log(sumTimesTables([1, 3, 5], 1, 1), 9);
console.log(sumTimesTables([1, 3, 5], 1, 10), 495);
console.log(sumTimesTables([2, 4, 7], 1, 100000000), 65000000650000000);