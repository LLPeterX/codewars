/* 
6kyu - Pell Numbers
https://www.codewars.com/kata/5818d00a559ff57a2f000082/train/javascript
*/

function pell(n) {
  if (n == 0n) return 0n;
  if (n == 1n) return 1n;
  let a = 0n, b = 1n, c;
  for (let i = 1; i < n; i++) {
    c = 2n * b + a;
    a = b;
    b = c;
  }
  return c;
}



console.log(pell(0), 0n);
console.log(pell(1), 1n);
console.log(pell(2), 2n);
console.log(pell(3), 5n);
console.log(pell(4), 12n);
console.log(pell(100), 66992092050551637663438906713182313772n);

// best
/* 
function pell(n) {
  n = BigInt(n);
  let [a,b]=[0n,1n];
  while ((n=n-1n)>=0n) [a,b]=[b,2n*b+a];
  return a;
}
*/

/* 
function pell(n) {
  let a = 0n, b = 1n
  while (n --> 0) {
    [a, b] = [b, b + b + a]
  }
  return a
}
*/