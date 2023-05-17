/* 
5kyu - Find the unique string
https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript
*/

const hash = (str) => [...new Set(str.toLowerCase())].sort().join``;
function findUniq(arr) {
  let m = arr.reduce((o, v) => {
    let key = hash(v);
    o[key] = (o[key] || 0) + 1;
    return o;
  }, {});
  let h = Object.keys(m).filter(k => m[k] === 1)[0];
  return arr.find(v => hash(v) === h);
}

console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']), 'BbBb');
console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo');
console.log(findUniq(['silvia', 'vasili', 'victor']), 'victor');
console.log(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']), 'Harry Potter');
console.log(findUniq(['    ', 'a', ' ']), 'a');

// best

/* 
function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3)
  
  if (!similar(a,b) && !similar(a,c)) return a
  for (d of arr) if (!similar(a,d)) return d
}

function similar (x, y) {
  x = new Set(x.toLowerCase())
  y = new Set(y.toLowerCase())

  if (x.size !== y.size) return false
  for (z of x) if (!y.has(z)) return false

  return true
}
*/

/* 
const getUnique = (x, i, arr) => arr.indexOf(x) === arr.lastIndexOf(x);
const getUniques = (x) => [...new Set([...x.toLowerCase()].sort())].join('');
const findUniq = (arr) => arr[arr.map(getUniques).findIndex(getUnique)];
*/

/* 
function findUniq(arr) {
   return arr.sort().filter((e, i, a) => e.match(new RegExp(`[^${a[1]}]`, 'gi')))[0];
 }
*/
