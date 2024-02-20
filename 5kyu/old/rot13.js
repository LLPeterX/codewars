/* 
5kyu - ROT13
https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript


*/

function rot13(str) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const rotated = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  return [...str].map(c => {
    let i = rotated.indexOf(c);
    return i >= 0 ? letters[i] : c;
  }).join``;
}

console.log(rot13("EBG13 rknzcyr."))

// best

/* 
function rot13(str) {
 var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return str.replace(/[a-z]/gi, c => a[b.indexOf(c)])
}
*/

/* 
function rot13(str) {
  return str.replace(/[a-z]/ig, function(x){
    return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13));
  });
}
*/