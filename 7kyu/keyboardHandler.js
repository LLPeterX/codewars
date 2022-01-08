/* 
7kyu - Keyboard Handler
https://www.codewars.com/kata/609d17f9838b2c0036b10e89/train/javascript
*/

function handler(key, isCaps = false, isShift = false) {
  if (!key || key.length != 1 || typeof key != 'string') return 'KeyError';
  let uDigits = ")!@#$%^&*(", k;
  let lChars = "`-=[]\\;',./";
  let uChars = "~_+{}|:\"<>?";
  // digits
  if (key.match(/[0-9]/)) return isShift ? uDigits[key] : key;
  // letters
  if (key.match(/[a-z]/)) return ((isShift && isCaps) || (!isShift && !isCaps)) ? key : key.toUpperCase();
  //if (key.match(/[A-Z]/)) return ((isShift && isCaps) || (!isShift && !isCaps)) ? key : key.toLowerCase();
  // symbols
  if ((k = lChars.indexOf(key)) >= 0) return isShift ? uChars[k] : key;
  return "KeyError";
}
console.log(handler('a', true), 'A'); // A (capsLock)
console.log(handler('1', true), '1'); // 1 (capsLock dont work)
console.log(handler('1', true, true), '!'); // ! (shift+caps)
console.log(handler('a', false, true), 'A'); // A
console.log(handler('a', true, true), 'a'); // a
console.log(handler('a', false, false), 'a'); // a
console.log(handler('-', false, true), '_'); // *** FAIL ***
console.log(handler('[', false, true), '{'); // *** FAIL ***


// best

/* 
function handler(k,c=0,s=0) {
  const l = "abcdefghijklmnopqrstuvwxyz1234567890-=[];'\\/.,` ";
  const h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:"|?><~ ';
  const i = l.indexOf(k);
  
  return ~i && k.length == 1 ? s ^ (i<26) & c ? h[i] : l[i] : 'KeyError';
}
*/

