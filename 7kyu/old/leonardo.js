/* 
7kyu - Leonardo numbers
https://www.codewars.com/kata/5b2117eea454c89d4400005f/train/javascript

he Leonardo numbers are a sequence of numbers defined by:

L(0) = 1 || 0
L(1) = 1 || 0
L(x) = L(x - 1) + L(x - 2) + 1
Generalizing the above a bit more:

L(x) = L(x - 1) + L(x - 2) + a
Assume a to be the add number.

Return the first n Leonardo numbers as an array (vector<int> in C++)

Input:
n : The number of Leonardo numbers to be shown
L0 : The initial value of L(0)
L1 : The initial value of L(1)
add : The add number
*/



function L(n, L0, L1, add) {
  let arr = [L0, L1];
  while (arr.length < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2] + add)
  }
  return arr.slice(0, n);
}

console.log(L(5, 1, 1, 1), [1, 1, 3, 5, 9]);
console.log(L(5, 0, 0, 2), [0, 0, 2, 4, 8]);
console.log(L(5, 0, 0, 0), [0, 0, 0, 0, 0]);