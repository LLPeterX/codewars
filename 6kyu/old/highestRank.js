/* 
6kyu - Highest Rank Number in an Array
https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.
*/

function highestRank(arr) {
  const m = arr.reduce((c, v) => { c[v] = (c[v] || 0) + 1; return c }, {});
  console.log(m);
  return Object.entries(m).sort((a, b) => a[1] === b[1] ? b[0] - a[0] : b[1] - a[1])[0][0];
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12);
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12);

//best

/* 
function highestRank(arr){
  return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
}
*/