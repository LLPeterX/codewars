/* 
7kyu - Down Arrow With Numbers
https://www.codewars.com/kata/5645b24e802c6326f7000049/train/javascript

Given a number n, make a down arrow shaped pattern.

For example, when n = 5, the output would be:

123454321
 1234321
  12321
   121
    1
*/

function getADownArrowOf(n) {
  if (n < 1) return "";
  let row = Array.from({ length: n }, (_, i) => (i + 1) % 10);
  row = [...row, ...row.slice(0, -1).reverse()];
  let result = "";
  for (let i = 0; i < n; i++) {
    result += ' '.repeat(i) + row.join`` + "\n";
    row.splice(n - i - 1, 2);
  }
  return result.trimEnd();
}

console.log(getADownArrowOf(5));
console.log(getADownArrowOf(11));

