/* 
6kyu - Complete The Pattern #16
https://www.codewars.com/kata/55ae997d1c40a199e6000018/train/javascript
*/

function pattern(n) {
  if (n < 1) return "";
  let output = [String(n % 10).repeat(n)], m = n;
  while (--m > 0) output.push(output[output.length - 1].slice(0, n - m) + String(m % 10).repeat(m));
  return output.join("\n");
}

