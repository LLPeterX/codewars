/* 
7kyu - Mobile Display Keystrokes
https://www.codewars.com/kata/59564a286e595346de000079/train/javascript
*/

function mobileKeyboard(str) {
  const layout = ['1', '2abc', '3def', '4ghi', '5jkl', '6mno', '7pqrs', '8tuv', '9wxyz', '*', '0', '#'];
  let count = 0;
  for (let symbol of str) {
    let button = layout.find(buttonChars => buttonChars.includes(symbol));
    count += button.indexOf(symbol) + 1;
  }
  return count;
}

console.log(mobileKeyboard(""), 0);
console.log(mobileKeyboard("123"), 3);
console.log(mobileKeyboard("codewars"), 26);
console.log(mobileKeyboard("zruf"), 16);
console.log(mobileKeyboard("thisisasms"), 37);
console.log(mobileKeyboard("longwordwhichdontreallymakessense"), 107);

// best
/* 
const map = ['1234567890*#','adgjmptw','behknqux','cfilorvy','sz']

function mobileKeyboard(str){
  return [...str].reduce((s,c)=>s+map.findIndex(l=>l.includes(c)),str.length);
}
*/

/* 
const mobileKeyboard = (function() {
  const keys = {
    a:2, b:3, c:4, d:2, e:3, f:4, g:2, h:3, i:4, j:2, k:3, l:4, m:2, 
    n:3, o:4, p:2, q:3, r:4, s:5, t:2, u:3, v:4, w:2, x:3, y:4, z:5,
    '*': 1, '#':1, 1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 0:1
  };
  
  return function(str) {
    return str.split('').reduce((amt, ch) => amt+keys[ch], 0);    
  };
})();
*/