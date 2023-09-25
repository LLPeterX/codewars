/* 
6kyu - A for Apple
https://www.codewars.com/kata/55de3f83e92c3e521a00002a/train/javascript
*/

function a(n) {
  if (n < 4) return "";
  if (n % 2) --n;
  const width = 2 * n - 1; // 7
  let m = Array(n).fill().map(_ => Array(width).fill(' '));
  m[0][Math.floor(width / 2)] = 'A';
  for (let i = n - 1, l = 0, r = width - 1; i; i--, l++, r--) {
    m[i][l] = 'A';
    m[i][r] = 'A';
    if (i === Math.floor(n / 2)) {
      for (j = l; j < r; j += 2) {
        m[i][j] = 'A';
      }
    }
  }
  return m.map(row => row.join("")).join("\n");
}

console.log(a(7));
console.log('     A     \n    A A    \n   A   A   \n  A A A A  \n A       A \nA         A\n');
// nado  : '     A     \n    A A    \n   A   A   \n  A A A A  \n A       A \nA         A'
// my:     '      A      \n     A A     \n    A   A    \n   A A A A   \n  A       A  \n A         A \nA           A'