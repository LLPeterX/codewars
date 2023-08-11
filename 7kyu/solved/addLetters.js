/* 
7kyu - Alphabetical Addition
https://www.codewars.com/kata/5d50e3914861a500121e1958/train/javascript

Сложить буквы, заданные в аргументах.
Смотреть за overflow

*/

function addLetters(...letters) {
  if(!letters) {
    return 'z';
  }
   let n = letters.reduce((s,v)=>s+v.charCodeAt(0)-96,0) % 26;
   return n ? String.fromCharCode(n+96) : 'z';
}

console.log(addLetters('a', 'b'), 'c'); // c
console.log(addLetters('a', 'b', 'c'), 'f'); // f
console.log(addLetters('z'),'z'); // z
console.log(addLetters('c'),'c'); // c
console.log(addLetters('y', 'c', 'b'),'d'); // d
console.log(addLetters(),'z'); // z

//best
/* 
function addLetters(...letters) {
    return String.fromCharCode((letters.reduce( (a,b) => a+b.charCodeAt(0)-96, 0)+25)%26+97);
}
*/