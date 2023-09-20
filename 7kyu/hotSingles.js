/* 
7kyu - noobCode 04: HOT SINGLES...compare two arrays, return the unpaired items !
https://www.codewars.com/kata/57475353facb0e7431000651/train/javascript

Write a function that takes two arguments, 
and returns a new array populated with the elements 
that only appear once, in either one array or the other, 
taken only once; 
display order should follow what appears in arr1 first, then arr2:

hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]) // [4, 5]
hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]) // ["tartar", "domino"]
hotSingles([77, "ciao"], [78, 42, "ciao"]) // [77, 78, 42]
hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]) // [4,5]
*/

function hotSingles(arr1, arr2) {
  return [...new Set(arr1.filter(e => !arr2.includes(e))), ...new Set(arr2.filter(e => !arr1.includes(e)))]
}

console.log(hotSingles([10, 200, 30], [10, 20, 3, 4, 5, 5, 5, 200]));

// best

/* 
const hotSingles = (arr1, arr2) =>
  [...new Set([...arr1, ...arr2])].filter(val => !arr1.includes(val) || !arr2.includes(val));
*/