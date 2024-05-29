/* 
6kyu - Hofstadter Q
https://www.codewars.com/kata/5897cdc26551af891c000124/train/javascript
*/

function hofstadterQ(n) {
  let Q = [1, 1];
  if (n < 3) return 1;
  for (let i = 3; i <= n; i++) {
    let j = i - 1;
    Q[j] = Q[j - Q[j - 1]] + Q[j - Q[j - 2]];
  }
  return Q[n - 1];
}

console.log(hofstadterQ(1000));
