/* 
3kyu https://www.codewars.com/kata/540d0fdd3b6532e5c3000b5b/train/javascript
Разложить биноминальное уравнение на множители

*/

function expand(expr) {
  function pascalTrinangle(n) {
    let result = [];
    result[0] = [1];
    result[1] = [1, 1];
    for (let row = 2; row < n; row++) {
      result[row] = [1];
      for (let col = 1; col <= row - 1; col++) {
        result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
        result[row].push(1);
      }
    }
    return result[result.length - 1];
  }

  let [, axb, pw] = expr.match(/\((.+)\)\^(.+)/);
  if (Number(pw) === 0) {
    return '1';
  }
  let [, a, op, b] = axb.match(/^(\-*.+?)([+-])(.+)/);
  let [, sn, num, x] = a.match(/(\-?)(\d*)(\D+)/); // multiplier and var name
  num = ((num.length === 0) ? 1 : parseInt(num)) * (sn == '-' ? -1 : 1);
  b = (op == '-') ? -1 * b : +b;
  if (b == 0) {
    return ((num != 1) ? String(num ** pw) : "") + `${x}^${pw}`;
  }
  if (pw == 1) {
    return `${a}${b > 0 ? '+' : ''}${b}`;
  }
  let res = "";
  let pt = pascalTrinangle((+pw) + 1);
  for (let i = pw; i > 0; i--) {
    let numPfx = pt[pw - i] * (num ** i) * (b ** (pw - i));
    if (numPfx == 1) {
      numPfx = "";
    } else {
      if (numPfx > 0 && i != pw) {
        res += '+';
      } else if (numPfx === -1) {
        numPfx = "-";
      }
    }
    let varPart = (i > 1) ? `${x}^${i}` : x;
    res = res + `${numPfx}${varPart}`;
  }
  b = b ** pw;
  if (b > 0) {
    res += '+';
  }
  res += String(b);
  return res;
}