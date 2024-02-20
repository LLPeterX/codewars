/* 
5kyu Common Denominators
https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript

Дан массив дробей в виде [[n1, d1], [n2, d2], ...]
Вычислить НОК (D) и вернуть в виде `(N1,D)(N2,D),...' (в виде строки, D общий для всех)

*/
function NOK(arr) {
  let n = arr.length, a = Math.abs(arr[0]);
  for (let i = 1; i < n; i++) {
    var b = Math.abs(arr[i]), c = a;
    while (a && b) { a > b ? a %= b : b %= a; }
    a = Math.abs(c * arr[i]) / (a + b);
  }
  return a;
}

function convertFrac(lst) {
  function getLCM(arr) {
    let n = arr.length, a = Math.abs(arr[0]);
    for (let i = 1; i < n; i++) {
      var b = Math.abs(arr[i]), c = a;
      while (a && b) { a > b ? a %= b : b %= a; }
      a = Math.abs(c * arr[i]) / (a + b);
    }
    return a;
  }

  let lcm = getLCM(lst.map(e => e[1]));
  return lst.map(e=>`(${lcm / e[1] * e[0]},${lcm})`).join("");
}

console.log(convertFrac([[1, 2], [1, 3], [1, 4]]));

//best
/* 
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function convertFrac(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
}
*/