/* 
7kyu - Identical Elements
https://www.codewars.com/kata/583ebb9328a0c034490001ba

Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.
*/

function duplicateElements(m, n) {
  return m.some(e => n.includes(e));
}

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]), true);
console.log(duplicateElements([9, 8, 7], [8, 1, 3]), true);


