/* 
6kyu - Simpson's Rule - Approximate Integration
https://www.codewars.com/kata/565abd876ed46506d600000d

*/

const f = (x) => (Math.sin(x) ** 3) * 3 / 2;
// function simpson(n) {
//   let a = 0, b = Math.PI;
//   let h = b / n;
//   let sum1 = 0, sum2 = 0;
//   for (let i = 1; i <= n / 2; i++) {
//     sum1 += f(a + (2 * i - 1) * h);
//   }
//   sum1 *= 4;
//   for (let i = 1; i <= n / 2 - 1; i++) {
//     sum2 += f(a + 2 * i * h);
//   }
//   sum2 *= 2;
//   return (f(a) + f(b) + sum1 + sum2) * b / 3 / n
// }

function simpson(n) {
  let h = Math.PI / n, sum1 = sum2 = 0;
  for (let i = 1; i <= n / 2; i++) sum1 += f((2 * i - 1) * h);
  for (let i = 1; i <= n / 2 - 1; i++) sum2 += f(2 * i * h);
  return (f(Math.PI) + sum1 * 4 + sum2 * 2) * Math.PI / 3 / n
}


console.log(simpson(290), 1.9999999986);
console.log(simpson(72), 1.9999996367);
console.log(simpson(252), 1.9999999975);
console.log(simpson(40), 1.9999961668);

// best

/* 
function simpson(n) {
    return (Math.PI/n)*(1 + 2*Math.pow(Math.cos((Math.PI/n)),3) + 3*Math.cos(2*(Math.PI/n)))/(Math.sin(3*(Math.PI/n)))
}
*/