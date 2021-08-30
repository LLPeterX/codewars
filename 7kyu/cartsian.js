/* 
7ky - Functions of Integers on Cartesian Plane
https://www.codewars.com/kata/559e3224324a2b6e66000046/train/javascript
*/
function sumin(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      sum += Math.min(x, y);
    }
  }
  return sum;
}
function sumax(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      sum += Math.max(x, y);
    }
  }
  return sum;
}

function sumsum(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      sum += x + y;
    }
  }
  return sum;
}

console.log(sumin(5000)); // 41679167500
console.log(sumax(5000)); // 83345832500
console.log(sumsum(5000)); // 125025000000

//best
/*
function sumin(n) {
    return n * n * n / 3 + n * n / 2 + n / 6;
}
function sumax(n) {
    return 2 * n * n * n / 3 + n * n / 2 - n / 6;
}
function sumsum(n) {
    return n * n * n + n * n;
}
*/

/*
const sumin = n =>
  n * (2 * n + 1) / 6 * ++n;

const sumax = n =>
  n * (4 * n - 1) / 6 * ++n;

const sumsum = n =>
  n ** 2 * ++n;
*/