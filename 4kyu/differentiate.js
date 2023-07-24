/* 
4kyu - Differentiate a polynomial
https://www.codewars.com/kata/566584e3309db1b17d000027

Create a function that differentiates a polynomial for a given value of x.

differenatiate("12x+2", 3)      ==>   returns 12
differenatiate("x^2+3x+2", 3)   ==>   returns 9

If f(x) = an*x^n + ... a1*x + a0
D(x) = n*an*x^(n-1) + ....2*a2 + a1
*/


/* 
Решение:
1) Разбиваем выражение на токены.
2) Формируем массив значений производных величиной макс.степень, заполняем 0
1) Формируем массив der[], в котором индекс = степень-1, значение=An
2) Суммируем значения der[i]*степень*point^(степень-1)

*/

/*
// first working solution
function differentiate(equation, point) {
  let tokens = equation.match(/([+-]?\d*)x(\^\d+)?/g);
  let der = Array(tokens.length).fill(0);
  for (let t of tokens) {
    let k = t.indexOf('x');
    let exp = 1, a = 1;
    if (t[k + 1] === '^') {
      exp = +t.slice(k + 2);
    }
    if (k > 0) {
      if (t[k - 1] === '-') {
        a = -1;
      } else if (t[k - 1] === '+') {
        a = 1;
      } else a = +t.slice(0, k);
    }
    //fd[tokens.length - exp] = a;
    der[exp - 1] = a;
  }
  const L = der.length;
  //console.log(' der=', der);
  // let sum = 0;
  // for (let i = 0; i < der.length; i++) {
  //   let a = der[i];
  //   //let n = L - i;
  //   let n = i + 1;
  //   let xpow = point ** i;
  //   let z = a * n * xpow;
  //   console.log(` i=${i} a=${a} n=${n} a*n*${point}^${i}=${z}`);
  //   sum += z;
  // }
  // return sum;
  return der.reduce((sum, a, i) => sum + a * (i + 1) * (point ** i), 0)
}
*/

// final sulution
function differentiate(equation, point) {
  const tokens = equation.match(/([+-]?\d*)x(\^\d+)?/g);
  const der = Array(tokens.length).fill(0);
  for (let t of tokens) {
    let k = t.indexOf('x');
    let exp = (t[k + 1] === '^') ? +t.slice(k + 2) : 1;
    let a = 1;
    if (k > 0) {
      if (t[k - 1] === '-') {
        a = -1;
      } else if (t[k - 1] === '+') {
        a = 1;
      } else a = +t.slice(0, k);
    }
    der[exp - 1] = a;
  }
  return der.reduce((sum, a, i) => sum + a * (i + 1) * (point ** i), 0)
}

console.log(differentiate("12x+2", 3), 12);
console.log(differentiate("x^2-x", 3), 5);
console.log(differentiate("-5x^2+10x+4", 3), -20);
console.log(differentiate("66x^3+3x^2+3", 441), 38509884);

// best

/* 
function differentiate( equation, point )
{
  const standardize = equation =>
  {
    return equation
    .replace( /(?<=^|\+|-)(?=x)/g, "1" )
    .replace( /(?<=\d+)$/, "x^0" )
    .replace (/x(?=\+|-|$)/, "x^1" )
    .split( /\+|(?=-)/ )
    .map( term => term.split( /x\^/ ) );
  };
  const derivative = ( [coeff, exp] ) => [coeff * exp, exp - 1];
  const evaluate = ( sum, [coeff, exp] ) => sum + coeff * point**exp;
  return standardize( equation ).map(derivative).reduce(evaluate, 0);
}
*/

/* 
function differentiate(equation, point){
  var parse = equation.match(/(\-?\d*x|\-?\d+)(\^\d+)?/g)
    .map(i => i.match(/(\-?\d*x|\-?\d+)(\^\d+)?/));
  return parse
    .filter(([_,term]) => term.indexOf('x') >= 0)
    .reduce((s,[_,a,b]) => {
      var coe = (a == '-x' ? -1 : a == 'x' ? 1 : +a.slice(0,-1));
      var exp = (b == null ? 1 : +b.slice(1));
      return s + coe * exp * Math.pow(point, exp - 1);
    }, 0);
}
*/