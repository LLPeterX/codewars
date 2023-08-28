/* 
6kyu - Find the integer sequences
https://www.codewars.com/kata/582aad136755daf91a000021/train/javascript

Complete function findSequences. 
It accepts a positive integer n. 

Your task is to find such integer sequences:
- Continuous positive integer and their sum value equals to n

For example, n = 15 
valid integer sequences:
[1,2,3,4,5]  (1+2+3+4+5==15)
[4,5,6]          (4+5+6==15)
[7,8]              (7+8==15)
*/

function findSequences(n) {
  let result = [], i, j;
  if (n < 3) return [];
  for (i = 1; i <= Math.ceil(n / 2); i++) {
    let s = i;
    for (j = i + 1; j <= Math.ceil(n / 2) && s < n; j++) {
      s += j;
    }
    if (s === n) {
      result.push(Array.from({ length: j - i }, (_, k) => i + k));
    }
  }
  return result.sort((a, b) => a.length - b.length);
}


console.log(findSequences(3), [[1, 2]])
console.log(findSequences(15), [[7, 8], [4, 5, 6], [1, 2, 3, 4, 5]])
console.log(findSequences(20), [[2, 3, 4, 5, 6]])
console.log(findSequences(100), [[18, 19, 20, 21, 22], [9, 10, 11, 12, 13, 14, 15, 16]])
console.log(findSequences(1), [])