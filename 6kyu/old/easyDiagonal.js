/* 
https://www.codewars.com/kata/559b8e46fa060b2c6a0000bf
Построить треугольник Пскаля для N
И посчитать сумму P-й диагонали
*/

function diagonal(n,p) {
  // create trianle
  let pas=[[1],[1,1]];
  for(let i=2; i<=n; i++) {
    let prev = pas[i-1];
    let p=[1];
    for(let j=0; j<prev.length-1; j++) {
      p.push(prev[j] + prev[j+1]);
    }
    p.push(1);
    pas.push(p);
  }
  // calc sum
  let sum=0;
  for(let i=p; i<pas.length; i++) {
    sum += pas[i][p];
  }
  return sum;
}

console.log(diagonal(100,0));
// best
/* 
const f = n => 
  n > 1 ? n * f(n - 1) : n;

const diagonal = (n, p) => 
  Math.round(f(n + 1) / f(p + 1) / f(n - p));

*/

/* 
function choose(n, k){
  var res = 1;
  for (var i = 1; i <= k; i++){
    res *= (n - i + 1) / i;
  }
  return Math.round(res);
}
function diagonal(n, p) {
    return choose(n + 1, p + 1);
}
*/

/* 
var fact = n => n<2 ? 1 : n*fact(n-1),
    diagonal = (n,p) => Math.round(fact(++n)/(fact(++p)*fact(n-p)));
*/