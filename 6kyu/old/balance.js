/* 
6kyu - Balance the arrays
https://www.codewars.com/kata/58429d526312ce1d940000ee/train/javascript

Check that the two provided arrays both contain the same number of different 
unique items, regardless of order. 

For example in the following:
[a,a,a,a,b,b] and [c,c,c,d,c,d]
Both arrays have four of one item and two of another, so balance should return true.
*/

function balance(arr1, arr2) {
  const getCount = arr => JSON.stringify(Object.values(arr.reduce((c, v) => { c[v] = (c[v] || 0) + 1; return c; }, {})).sort((a, b) => a - b));
  return getCount(arr1) === getCount(arr2);
}

let array1 = ["a", "a", "a", "a", "a", "b", "b", "b"],
  array2 = ["c", "c", "c", "c", "c", "d", "d", "d"];
console.log(balance(array1, array2), true);
array1 = ["a", "a"],
  array2 = ["c"];
console.log(balance(array1, array2), false);
array1 = ["a", "b", "c", "d", "e", "f", "g", "g"];
array2 = ["h", "h", "i", "j", "k", "l", "m", "n"];
console.log(balance(array1, array2), true);
array1 = ["a"];
array2 = ["c"];
console.log(balance(array1, array2), true);
array1 = ["a", "b", "c", "d", "e", "f", "g", "g"];
array2 = ["h", "h", "i", "j", "k", "l", "m", "m"];
console.log(balance(array1, array2), false);

// best

/* 
const balance = (arr1, arr2) => balanceHash(arr1) == balanceHash(arr2)

const balanceHash = arr => {
  let values = {}
  arr.forEach( string => values[string] = values[string] + 1 || 1 )
  return Object.keys(values)
    .map(key => values[key])
    .sort((a, b) => a - b)
    .join()
}
*/