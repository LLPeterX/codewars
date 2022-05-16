/* 
7kyu - Find all pairs
https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3

You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. 
E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
[1, 2, 5, 6, 5, 2]  -->  2
*/

function duplicates(array) {
  // let counts = {};
  // for (let v of array) {
  //   if (counts[v]) {
  //     counts[v]++;
  //   } else {
  //     counts[v] = 1;
  //   }
  // }
  let counts = array.reduce((o, v) => {
    if (o[v]) o[v]++; else o[v] = 1;
    return o;
  }, {});
  return Object.entries(counts).map(([k, v]) => ~~(v / 2)).reduce((s, v) => s + v, 0);
}

console.log(duplicates([1, 2, 5, 6, 5, 2]), 2);
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]), 4);
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]), 3);
console.log(duplicates([1000, 1000]), 1);
console.log(duplicates([]), 0);
console.log(duplicates([54]), 0);

// cool
/*
const duplicates = a => (a.sort((x,y)=>x-y).join('_').match(/(?<=_|^)(\d+)_\1(?=_|$)/g)||[]).length
*/

// best 
/* 
function duplicates(array) {
  let res = 0, odd = new Set();
  for (let x of array) {
    if (odd.delete(x))
      res++;
    else
      odd.add(x);
  }
  return res;
}
*/

/* 
const duplicates = array => {
  let numberOf = array.reduce((acc,c) => (acc[c] = (acc[c] ||0) + 1, acc), {});
  return Object.values(numberOf).reduce((acc,c) => acc + Math.floor(c / 2), 0);
};
*/

/* 
function duplicates(array){
  return Array.from(new Set(array)).reduce((a,b) => a + Math.floor(array.filter(elem => elem===b).length / 2), 0)
}
*/