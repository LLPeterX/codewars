/* 
7kyu - Find Duplicates
https://www.codewars.com/kata/5558cc216a7a231ac9000022

Given an array, find the duplicates in that array, and return a new array of those duplicates. 
The elements of the returned array should appear in the order when they first appeared as duplicates.
*/

function duplicates(arr) {
  let count = new Map();
  let result = [];
  for (let a of arr) {
    if (count.has(a)) {
      count.set(a, count.get(a) + 1);
      if (count.get(a) > 1 && !result.includes(a)) {
        result.push(a);
      }
    } else {
      count.set(a, 1);
    }
  }
  return result;
}


console.log(duplicates([1, 2, 3, 4, 5]), [], "arr = [1, 2, 3, 4, 5]");
console.log(duplicates([]), [], "arr = []");
console.log(duplicates(['no', 'duplicates', 'here']), [], "arr = ['no', 'duplicates', 'here']");
console.log(duplicates([1, 2, 3, 4, 3]), [3], "arr = [1, 2, 3, 4, 3]");
console.log(duplicates([1, 2, 3, 3, 2, 1]), [3, 2, 1], "arr = [1, 2, 3, 3, 2, 1]");
console.log(duplicates([1, 2, 1, 2, 1, 2, 1]), [1, 2], "arr = [1, 2, 1, 2, 1, 2, 1]");
console.log(duplicates([1, 2, 3, 4, '3']), [], "arr = [1, 2, 3, 4, '3']");
console.log(duplicates(['1', 2, 3, 3, '2', 1]), [3], "arr = ['1', 2, 3, 3, '2', 1]");
console.log(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']), [4, 3, 'zut'], "arr = ['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']");

// best

/* 
function duplicates(arr) {
  return arr.reduce(function(prev, cur, i, a) {
    if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
      prev.push(cur);
    }
    return prev;
  }, []);
}
*/

/* 
const duplicates = arr => [...new Set(arr.filter((el, i) => i !== arr.indexOf(el)))];
*/