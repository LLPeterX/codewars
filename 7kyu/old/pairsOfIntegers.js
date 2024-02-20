/* 
7kyu - Pairs of integers from m to n
https://www.codewars.com/kata/588e2a1ad1140d31cb00008c
*/

function generatePairs(m, n) {
  let pairs = [];
  for (let i = m; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      pairs.push([i, j]);
    }
  }
  return pairs.sort((a, b) => (a[0] === b[0]) ? a[1] - b[1] : a[0] - b[0])
}

console.log(generatePairs(2, 4));