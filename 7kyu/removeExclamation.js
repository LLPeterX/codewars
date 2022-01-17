/* 
7kyu - Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
https://www.codewars.com/kata/57faefc42b531482d5000123/train/javascript
*/

function remove(string) {
  let end = string.match(/!+$/) || "";
  return string.replace(/!/g, '') + end;
}

console.log(remove("Hi!"), "Hi!");
console.log(remove("Hi!!!"), "Hi!!!");
console.log(remove("!Hi"), "Hi");
console.log(remove("!Hi!"), "Hi!");
console.log(remove("Hi! Hi!"), "Hi Hi!");
console.log(remove("Hi"), "Hi");

// best
/* 
function remove(s){
  return s.replace(/!+([^!])/g, '$1')
}
*/