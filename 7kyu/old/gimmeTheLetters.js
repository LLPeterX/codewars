/* 
7kyu - From A to Z
https://www.codewars.com/kata/6512b3775bf8500baea77663/train/javascript
*/

function gimmeTheLetters(sp) {
  let [a, b] = sp.split('-').map(c => c.charCodeAt());
  return Array(b - a + 1).fill().map((_, i) => String.fromCharCode(a + i)).join('');
}

console.log(gimmeTheLetters('J-J'), 'J', `'J-J'`)
console.log(gimmeTheLetters('g-i'), 'ghi', `'g-i'`)