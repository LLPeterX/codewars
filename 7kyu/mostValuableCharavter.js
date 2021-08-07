/* 
7kyu - Most valuable character
https://www.codewars.com/kata/5dd5128f16eced000e4c42ba/train/javascript

Найти символ, у которого разница индексов первый/последний в строке - макс.
*/
// function solve(st) {
//  let letters = new Map();
//  for(let i=0; i<st.length; i++) {
//    if(!letters.has(st[i])) {
//      let i1 = st.lastIndexOf(st[i]);
//      if(i1-i > letters.get(st[i])) {
//        letters.set(st[i], i1-i);
//      }
//    }
//  }
//  return letters;
// }

function solve(st) {
  const dist = {};
  for (let i = 0; i < st.length; i++) {
    dist[st[i]] = dist[st[i]] ? [Math.min(i, dist[st[i]][0]), Math.max(i, dist[st[i]][1])] : [i, i];
  }
  return Object.keys(dist).map(k => [k, dist[k][1] - dist[k][0]]).sort((a, b) => (a[1] != b[1]) ? b[1] - a[1] : a[0].localeCompare(b[0]))[0][0];
}


// console.log(solve('a'), 'a');
// console.log(solve('aa'), 'a');
// console.log(solve('bcd'), 'b');
// console.log(solve('axyzxyz'), 'x');
// console.log(solve('aabccc'), 'c');
// console.log(solve('bcd'), 'b');
console.log(solve('dcbadcba'), 'd');

//best
/*
function solve(str) {
  let maxDiff = 0, result = 'z';
  for (let el of str) {
    let diff = str.lastIndexOf(el) - str.indexOf(el);
      if (maxDiff < diff || maxDiff == diff && el <= result) {
        result = el;
        maxDiff = diff;
      }
    }
  return result;
}
*/

/*
const solve = function( str ) {
  let arr = [...str].map( el => str.lastIndexOf(el) - str.indexOf(el) )
  arr = arr.map( (el, i)=> el === Math.max(...arr) ? str[i] : '' )
  return arr.filter(el => el).sort()[0]
}
*/