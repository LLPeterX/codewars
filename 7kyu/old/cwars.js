/* 
7kyu - C.Wars
https://www.codewars.com/kata/55968ab32cf633c3f8000008/train/javascript
Преобразовать стоку "firstname middle name" в инициалы, причем name может состоять из нескольких слов

*/

function initials(n) {
  let arr = n.split(' ');
  if(arr.length==1) {
    return n[0].toUpperCase() + n.slice(1);
  }
  let last = arr.slice(-1)[0];
  last = last[0].toUpperCase() + last.slice(1);
  return arr.slice(0,arr.length-1).map(v => v[0].toUpperCase()).join('.') + '.' + last;
}

console.log(initials('wars'), 'Wars');
console.log(initials('code wars'), 'C.Wars');
console.log(initials('Barack hussain obama'), 'B.H.Obama');
console.log(initials('Donald Divinyl Trump bad guy'), 'D.D.Trump bad guy');

//best

/* 
function initials(n) {
  return n.split(' ').map((v, i, a) => v.charAt(0).toUpperCase() + (i == a.length - 1 ? v.slice(1) : '.')).join('');
}
*/

/* 
const initials = str => str
  .replace(/\b\w/ig, m => m.toUpperCase())
  .replace(/\w+\s/ig, m => m[0] + '.');
*/