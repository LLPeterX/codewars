/* 
7kyu - Sorting Dictionaries
https://www.codewars.com/kata/53da6a7e112bd15cbc000012/train/javascript

Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).
The list must be sorted by the value and be sorted largest to smallest.
*/

function sortDict(dict) {
  return Object.keys(dict).sort((a, b) => dict[b] - dict[a]).map(k => [/^\d+$/.test(k) ? +k : k, dict[k]]);
}

console.log(sortDict({ 1: 3, 2: 2, 3: 1 }), [[1, 3], [2, 2], [3, 1]]);
console.log(sortDict({ 3: 1, 2: 2, 1: 3 }), [[1, 3], [2, 2], [3, 1]]);
console.log(sortDict({ 1: 2, 2: 4, 3: 6 }), [[3, 6], [2, 4], [1, 2]]);
console.log(sortDict({ 1: 5, 3: 10, 2: 2, 6: 3, 8: 8 }), [[3, 10], [8, 8], [1, 5], [6, 3], [2, 2]]);

console.log(' -- str -- ');
console.log(sortDict({ 'a': 6, 'b': 2, 'c': 4 }), [['a', 6], ['c', 4], ['b', 2]]);
console.log(sortDict({ 'aldo': 6, 'boris': 2, 'igor': 6 }), [['aldo', 6], ['igor', 6], ['boris', 2]]);

//best

/* 
function sortDict(dict){
  return Object.keys(dict)
    .map(function(v){ return [+v || v, dict[v]] })
    .sort(function(a, b){ return a[1] < b[1] });
}
*/

/* 
const sortDict = dict =>
  Object.keys(dict).map(val => [+val || val, dict[val]]).sort((a, b) => b[1] - a[1]);
*/