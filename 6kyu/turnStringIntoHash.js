/* 
6kyu - Turn String Input into Hash
https://www.codewars.com/kata/52180ce6f626d55cf8000071/train/javascript
*/

function strToHash(str) {
  let res = {};
  str.replace(/\s/g, '').split(',').forEach(e => {
    let x = e.split('=');
    res[x[0]] = +x[1];
  });
  return str ? res : {};
}
console.log(strToHash("a=1, b=2, c=3, d=4"), { 'a': 1, 'b': 2, 'c': 3, 'd': 4 });
console.log(strToHash(""), {});
// my best