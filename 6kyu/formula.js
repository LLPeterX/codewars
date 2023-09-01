/* 
6kyu - (a+b)^n
https://www.codewars.com/kata/61419e8f0d12db000792d21a

Create a function that takes a integer number n and returns the formula for 
(a+b)^n as a string.

formula(0)  --> "1"
formula(1)  --> "a+b"
formula(2)  --> "a^2+2ab+b^2"
formula(-2) --> "1/(a^2+2ab+b^2)"
formula(3)  --> "a^3+3a^2b+3ab^2+b^3"
formula(5)  --> "a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5"

Бином Еьютона
(a+b)^n = SUM[k=0...N]C(k,n)*a^(n-k)*b^k
C(k,n) = n!/(n-k)! (биноминальный коэффициент). Вычисляется из треугольника Паскаля
*/

function pascal(n) {
  let p = [[1n], [1n, 1n]];
  for (let row = 2n; row < n; row++) {
    p[row] = [1n];
    for (let col = 1n; col <= row - 1n; col++) {
      p[row][col] = p[row - 1n][col] + p[row - 1n][col - 1n];
      p[row].push(1n);
    }
  }
  return p[p.length - 1];
}

function formula(n) {
  let n1 = BigInt(Math.abs(n));
  let c = pascal(n1 + 1n);
  let eq = [];
  for (let k = 0n; k <= n1; k++) {
    let m = c[k] > 1n ? c[k] : "";
    if (n1 - k > 0) m += 'a';
    if (n1 - k > 1) m += `^${n1 - k}`;
    if (k > 0) m += 'b';
    if (k > 1n) m += `^${k}`;
    eq.push(m || '1');
  }
  //console.log(` eq=${eq}`);
  let res = eq.join('+');
  return n < 0 ? `1/(${res})` : res;
}

// console.log(formula(0), "1");
console.log(formula(1), "a+b");
console.log(formula(-1), "1/(a+b)");
//console.log(formula(169));
