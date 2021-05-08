/* 
6kyu - Count characters in your string
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

Обработать строку и вернуть объект с числом символов
*/

// function count (string) {  
//    return [...string].reduce((obj,v) => {
//      if(obj[v]) {
//        obj[v]++;
//      } else {
//        obj[v]=1;
//      }
//      return obj;
//    },{});
// }
function count (string) {  
  return [...string].reduce((obj,v) => {
    obj[v] = obj[v] ? obj[v]+1 : 1;
    return obj;
  },{});
}

console.log(count('aba')); // { a: 2, b: 1 }
console.log(count('')); //{}

// best
/* 
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
*/

/* 
function count (string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}
 */

/* 
const count = string =>
  [...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});
*/

/* 
const count = require('lodash').countBy;
*/