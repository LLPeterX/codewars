/* 
7kyu - The Skiponacci Sequence
https://www.codewars.com/kata/580777ee2e14accd9f000165/train/javascript
*/

function skiponacci(n) {
  let a = 1, b = 1, c = 2, res = [1, 1];
  if (n < 2) return "1";
  while (n-- > 2) {
    c = a + b;
    a = b;
    b = c;
    res.push(c);
  }
  return res.map((c, i) => i % 2 ? 'skip' : c).join(' ');
}

console.log(skiponacci(1), '=>', "1");
console.log(skiponacci(5), '=>', "1 skip 2 skip 5");
console.log(skiponacci(7), '=>', "1 skip 2 skip 5 skip 13");

// best

/*
function skiponacci(n) {
  let a = 1;
  let b = 1;
  const result = [];

  for (let i = 0; i < n; i++) {
    let t = a;
    a = b;
    b = t + a;
    result.push(i  % 2 == 0 ? t : 'skip');
  }
  return result.join(' ');
}
*/

// cool
/* 
const skiponacci = n =>
  [...Array(n)].map((_, idx) => ++idx & 1 ? Math.round(((1 + 5 ** .5) / 2) ** idx / 5 ** .5) : `skip`).join(` `);
*/