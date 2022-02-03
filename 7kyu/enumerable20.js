/* 
8kyu - Enumerable Magic #20 - Cascading Subsets
https://www.codewars.com/kata/545af3d185166a3dec001190/train/javascript

Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
*/
function eachCons(array, n) {
  let res = [];
  for (let i = 0; i < array.length - n + 1; i++) {
    res.push(array.slice(i, i + n));
  }
  return res;
}

const lst = [3, 5, 8, 13];
console.log(eachCons(lst, 1), '=>', [[3], [5], [8], [13]]);
console.log(eachCons(lst, 2), [[3, 5], [5, 8], [8, 13]]);
console.log(eachCons(lst, 3), '=>', [[3, 5, 8], [5, 8, 13]]);

// best

/* 
function eachCons(array, n) {
  return Array.from({length: array.length - n + 1}, (_, i) => array.slice(i, i + n))
}
*/