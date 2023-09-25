/* 
6kyu - Derivatives of type x^n
https://www.codewars.com/kata/55e2de13b668981d3300003d

Вычислить производную функции f(x) = a*x^n
f'(x) = n*a*x^(n-1)
Аргумент строка; может быть числом
*/

function differentiate(f) {
  let [ax, pwr] = f.split('^');
  if (!pwr) pwr = 1; else pwr = +pwr;
  let [a, x] = ax.split('x');
  if (!a) a = 1; else if (a === '-') a = -1;
  if (x === undefined) return '0';
  a *= pwr--;
  let prefix = ""
  if (a === -1) prefix = "-";
  else if (a === 1) prefix = ""
  else prefix = "" + a;
  if (!pwr && !x) {
    prefix = prefix === '-' ? '-1' : !prefix ? 1 : prefix;
  }
  return `${prefix}${Math.abs(pwr) > 0 ? "x" : ""}${Math.abs(pwr) > 1 ? '^' + pwr : ""}`;
}

console.log(differentiate("3x^2"), "6x")
console.log(differentiate("-5x^3"), "-15x^2")
console.log(differentiate("6x^-2"), "-12x^-3")
console.log(differentiate("-x"), "-1")
console.log(differentiate("42"), "0")
console.log(differentiate("x"), "1");
console.log(differentiate("x^-2"), "-2x^-3");
console.log(differentiate("x^-1"), "-x^-2");
console.log(differentiate("6x"), "6");

// best
/* 
function differentiate(f) {
  let [_, a, x, b] = f.match(/(-?\d+)?(-?x)?\^?(-?\d+)?/)
  !a && (a = 1), !b && (b = 1), !x && (a = 0), x == '-x' && (a = -1), a *= b--
  return (a + 'x^' + b).replace('x^0', '').replace('x^1', 'x').replace(/\b1x/, 'x')
}
*/

/* 
function differentiate(f) {
  const arr = f.replace(/^x/, '1x').replace(/-x/, '-1x').replace(/x$/, 'x^1').split('x^');
  if (arr.length === 2) {
    arr[0] = parseInt(arr[0]) * parseInt(arr[1]);
    arr[1] = parseInt(arr[1]) - 1;
  } else return '0';
  return arr.join('x^')
    .replace(/^1x/, 'x')
    .replace(/^-1x/, '-x')
    .replace(/\^1$/, '')
    .replace(/-x\^0/, '-1')
    .replace(/^x\^0/, '1')
    .replace(/x\^0/, '');
}
*/