/* 
6kyu - Letter triangles
https://www.codewars.com/kata/635e70f47dadea004acb5663/train/javascript


*/

function triangle(row) {
  if (row.length === 1) return row;
  let codes = [...row].map(c => c.charCodeAt() - 97), newCodes;
  do {
    newCodes = [];
    for (let i = 0; i < codes.length - 1; i++) {
      newCodes.push((codes[i] + codes[i + 1] + 1) % 26);
    }
    codes = newCodes;
  } while (newCodes.length > 1);
  return String.fromCharCode(97 + newCodes[0]);
}


console.log(triangle("abcd"), 't');
console.log(triangle("codewars"), 'l');
console.log(triangle("triangle"), 'd');
console.log(triangle("b"), 'b');
console.log(triangle("ab"), 'c');
console.log(triangle("zz"), 'z');

console.log('z'.charCodeAt() - 96);