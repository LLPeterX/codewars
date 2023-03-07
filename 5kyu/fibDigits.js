/* 
5kyu - Calculate Fibonacci return count of digit occurrences
https://www.codewars.com/kata/5779f894ec8832493f00002d
*/

function fibDigits(n) {
  // calc big fibonacci
  let a = 1n, b = 1n;
  for (let i = 3n; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  let counter = [...String(b)].reduce((o, v) => {
    o[v] = (o[v] || 0) + 1; return o;
  }, {});
  return Object.entries(counter).sort((a, b) => b[1] === a[1] ? b[0] - a[0] : b[1] - a[1]).map(e => [e[1], +e[0]]);
}

console.log(fibDigits(10000));
console.log(fibDigits(10));

// best
/* 
function fibDigits(n) {
  let n1 = 0, n2 = 1, next;

  for (let i = 1; i <= n; i++) {
    next = BigInt(n1 + n2);
    n1 = BigInt(n2);
    n2 = BigInt(next);
  }
  let arr = n1.toString().split(""), list = {}
  
  for (let e of arr) {
    if (list[e]) list[e] += 1
    else list[e] = 1
  }
  
  let res = Object.entries(list).map((e) => {return [e[1], parseInt(e[0])]})
  res.sort(function(a, b){return b[0] - a[0] || b[1] - a[1]})
  return res
}
*/

/* 
function fibDigits(n) {
  let fib = 0n, next = 1n
  for (let i = 0; i < n; ++i) [fib, next] = [next, fib + next]
  let counters = Array(10).fill(0)
  fib.toString().split('').forEach(d => ++counters[parseInt(d)])
  return counters.map((n, i) => [n, i]).filter(n => n[0] > 0).sort((a, b) => b[0] === a[0] ? b[1] - a[1] : b[0] - a[0])
}
*/