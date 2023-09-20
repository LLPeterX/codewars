/* 
7kyu - Permutation Average
https://www.codewars.com/kata/56b18992240660a97c00000a

A number is simply made up of digits.
The number 1256 is made up of the digits 1, 2, 5, and 6.
For 1256 there are 24 distinct permutations of the digits:
1256, 1265, 1625, 1652, 1562, 1526, 2156, 2165, 2615, 2651, 2561, 2516,
5126, 5162, 5216, 5261, 5621, 5612, 6125, 6152, 6251, 6215, 6521, 6512.

Your goal is to write a program that takes a number, n, 
and returns the average value of all distinct permutations of the digits in n. 
Your answer should be rounded to the nearest integer. 
For the example above the return value would be 3889.
*/
//const factorial = (n) => (n != 1) ? n * factorial(n - 1) : 1;

/* 
from: https://ru.stackoverflow.com/questions/138717/%D0%9A%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%BA%D0%B0-%D0%BF%D0%B5%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BD%D0%B0-javascript
*/

function perm(arr) {
  if (arr.length > 1) {
    let a0 = arr[0], arr1 = perm(arr.slice(1)), arr2 = [];
    for (let i = 0; i < arr1.length; i++) for (let j = 0; j <= arr1[0].length; j++)  arr2.push(arr1[i].slice(0, j).concat(a0, arr1[i].slice(j)));
    return arr2;
  } else return [arr];
}

function permutationAverage(n) {
  let digits = [...`${n}`];
  let permArray = perm(digits);
  let sum = permArray.map(n => +n.join``).reduce((s, v) => s + v, 0);
  return Math.round(sum / permArray.length);
}

console.log(permutationAverage(2), 2);
console.log(permutationAverage(25), 39);
console.log(permutationAverage(737), 629);
console.log(permutationAverage(1397), 5555);
console.log(permutationAverage(76853), 64444);

// best

/* 
function permutationAverage(n){
  var sum = 0;
  
  n = n.toString();
  for (var i = 0; i < n.length; i++) {
    sum += parseInt(n);
    n = n.slice(-1) + n.substring(0, n.length - 1)
    }
  return Math.round(sum/(n.length));
}
*/

/* 
const permutationAverage = n =>
  (val => Math.round([...`${n}`].reduce(pre => pre * 10 + val, 0)))
  ([...`${n}`].reduce((pre, val, _, arr) => pre + val / arr.length, 0));
*/