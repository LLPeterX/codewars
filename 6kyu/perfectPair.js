/* 
6kyu - Simple Fun #162: Pair Wise
https://www.codewars.com/kata/58afa8185eb02ea2a7000094

Given an array arr and a number n. Call a pair of numbers from the array a Perfect Pair if their sum is equal to n.

Find all of the perfect pairs and return the sum of their indices.
*/

function pairwise(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] !== null && arr[j] !== null && arr[i] + arr[j] === n) {
        sum += (i + j);
        arr[i] = null;
        arr[j] = null;
      }
    }
  }
  return sum;
}

console.log(perfectPair([1, 4, 2, 3, 0, 5], 7));