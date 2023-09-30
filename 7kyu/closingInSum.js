/* 
7kyu - Closing in Sum
https://www.codewars.com/kata/65126d52a5de2b11c94096d2
*/

function closingInSum(n) {
  let s = n.toString(), l = 0, r = s.length - 1, sum = 0;
  while (l < r) sum += +(s[l++] + s[r--]);
  return sum + (s.length % 2 ? +s[l] : 0);
}

// my best!
