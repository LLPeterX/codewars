/* 
7kyu - Smallest Product
https://www.codewars.com/kata/5b6b128783d648c4c4000129
*/

function smallestProduct(arr) {
  //let mul = arr.map(sub => sub.reduce((m, v) => m * v, 1));
  return Math.min(...arr.map(sub => sub.reduce((m, v) => m * v, 1)));

}

console.log(smallestProduct([[3, 2], [1, 2, 1], [7, 8]]), 2);
console.log(smallestProduct([[10], [3, 0], [-1, -6, 2]]), 0);
