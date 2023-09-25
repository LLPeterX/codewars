/* 
6kyu - T.T.T.39: Cut rope
https://www.codewars.com/kata/57b2a9631fae8a30fa000013/train/javascript
*/

/* function cutRope(length, m, n) {
  let rope1 = [];
  for (let i = 0, j = 0; i < length; i++) {
    rope1.push('-');
    if (++j % m === 0 && i < length - 1) rope1.push('.');
  }
  let rope2 = [];
  for (let i = 0, j = 0; i < rope1.length; i++) {
    rope2.push(rope1[i]);
    if (rope1[i] === '-') {
      j++;
      if (j === n) {
        rope2.push('.');
        j = 0;
      }
    }
  }
  const counter = rope2
    .join``
    .split('.')
    .map(e => e.length)
    .filter(e => e > 0)
    .reduce((acc, s) => { acc[s] = (acc[s] || 0) + 1; return acc }, {});

  return Object.entries(counter)
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, v) => { acc[`${v[0]}cm`] = v[1]; return acc }, {});
}
 */
function cutRope(length, m, n) {
  const cuttedRope = [];
  for (let i = 0; i < length; i++) {
    cuttedRope.push('-');
    if ((i + 1) % m === 0 || (i + 1) % n == 0) {
      cuttedRope.push('.');
    }
  }

  return Object.entries(cuttedRope
    .join``
    .split('.')
    .map(e => e.length)
    .filter(e => e > 0)
    .reduce((acc, s) => { acc[s] = (acc[s] || 0) + 1; return acc }, {}))
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, v) => { acc[`${v[0]}cm`] = v[1]; return acc }, {});

}

console.log(cutRope(10, 2, 3));
console.log(cutRope(10000, 3, 5), { "1cm": 1334, "2cm": 1333, "3cm": 2000 })

// best

/* 
function cutRope(length, m, n) {

  let last = 0;
  let lens = {};

  for (var i = 1; i <= length; i++) {
    if (i === length || i % m === 0 || i % n === 0) {
      lens[(i - last) + 'cm'] = (lens[(i - last) + 'cm'] || 0) + 1;
      last = i;
    }
  }

  return lens;

}
*/

/* 
function cutRope(l, m, n) {
  let set = new Set([0, l])
  for (let i = m; i < l; i += m) set.add(i)
  for (let i = n; i < l; i += n) set.add(i)
  set = [...set].sort((a,b) => a-b)
  
  let obj = {}
  for (let i = 1; i < set.length; ++i) {
    let key = set[i] - set[i-1] + 'cm'
    obj[key] ? obj[key]++ : obj[key] = 1
  }
  return obj
}
*/