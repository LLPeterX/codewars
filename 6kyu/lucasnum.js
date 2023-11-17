/* 
6kyu - Lucas Numbers
https://www.codewars.com/kata/55a7de09273f6652b200002e
*/

function lucasnum(n) {
  if (n === 0) return 2;
  if (Math.abs(n) === 1) return n;
  let a = 2;
  let b = 1;
  let c;
  for (let i = 3; i <= Math.abs(n) + 1; i++) {
    if (n > 0) {
      c = a + b;
      a = b;
      b = c;
    } else {
      c = b - a;
      b = a;
      a = c;
    }
  }
  return n < 0 ? b - c : b;
}

console.log(lucasnum(-10), 123)
console.log(lucasnum(10), 123)
console.log(lucasnum(-1), -1)
console.log(lucasnum(5), 11)
console.log(lucasnum(-5), -11)
console.log(lucasnum(0), 2)
console.log(lucasnum(1), 1)

// best
/* 
function lucasnum(n){
  var d = n < 0 ? -1 : 1;
  if (n == 0) return 2;
  if (n == 1) return 1;
  return lucasnum.cache[n]
    ? lucasnum.cache[n]
    : lucasnum.cache[n] = lucasnum(n - d * 2) + d * lucasnum(n - d * 1);
}

lucasnum.cache = {};
*/

/* 
const lucasnum = n => {
    const phi = (1 + Math.sqrt(5)) / 2
    const psi = (1 - Math.sqrt(5)) / 2

    return Math.round(Math.pow(phi, n) + Math.pow(psi, n))
}
*/

/* 
function lucasnum(n){
  var ret = [2,1], pre = 1;
  if (n < 0 && n % 2) pre = -1;
  n = Math.abs(n);
  for (var i = 2; i <=n; i++) ret.push(ret[i-1]+ret[i-2]);
  return pre * ret[n];
}
*/