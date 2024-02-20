/* 
6kyu - Simple Fun #132: Number Of Carries
https://www.codewars.com/kata/58a6568827f9546931000027/train/javascript
*/

function numberOfCarries(a, b) {
  let sa = String(a), sb = String(b), count = 0;
  for (let i = sa.length - 1, j = sb.length - 1, c = 0; i >= 0 || j >= 0; i--, j--) {
    let r = +(sa[i] || 0) + +(sb[j] || 0) + c;
    if (r > 9) {
      c = 1;
      count++;
    } else c = 0;
  }
  return count;
}

console.log(numberOfCarries(543, 3456), 0)
console.log(numberOfCarries(1927, 6426), 2)
console.log(numberOfCarries(9999, 1), 4)
console.log(numberOfCarries(1234, 5678), 2)
