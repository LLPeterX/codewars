/* 
https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript
*/

function vertMirror(strng) {
  return strng.split('\n').map(s => s.split('').reverse().join('')).join('\n');
}
function horMirror(strng) {
return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
  return fct(s);
}

let s = "abcd\nefgh\nijkl\nmnop";
console.log(vertMirror(s));