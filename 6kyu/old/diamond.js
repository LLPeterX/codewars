/* 
6kyu - Give me a Diamond
https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
You need to return a string that looks like a diamond shape when printed on the screen, 
using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated 
with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible 
to print a diamond of even or negative size.
*/

function diamond(n) {
  if (n < 1 || n % 2 === 0) return null;
  let top = [];
  for (let i = n; i > 0; i -= 2) {
    top.push(' '.repeat((n - i) / 2) + '*'.repeat(i) + "\n");
  }
  return [...top.slice(1).reverse(), ...top].join("");
}

console.log(diamond(3));
console.log(diamond(5));

// best

/* 
function diamond (n) {
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}
*/