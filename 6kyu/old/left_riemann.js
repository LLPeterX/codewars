/* 
6kyu - riemann sums I (left side rule)
https://www.codewars.com/kata/5562ab5d6dca8009f7000050/train/javascript
https://en.wikipedia.org/wiki/Riemann_sum
*/

function left_riemann(f, n, a, b) {
  let delta = (b - a) / n, sum = 0;
  for (let i = 0; i < n; i++) {
    sum += f(a + delta * i);
  }
  return sum * delta;
}

console.log(left_riemann(x => x * x, 1, 0, 1), 0, "f(x) = x^2 with n = 1 on [0, 1]");
console.log(left_riemann(x => x * x, 4, 1, 2), 1.96875, 1e-4, "f(x) = x^2 with n = 4 on [1, 2]");
console.log(left_riemann(x => x ** 3, 2, -1, 1), -1, "f(x) = x^3 with n = 2 on [-1, 1]");
console.log(left_riemann(x => x ** 3, 20, -2, 1), -4.441875, 1e-4, "f(x) = x^3 with n = 20 on [-2, 1]");