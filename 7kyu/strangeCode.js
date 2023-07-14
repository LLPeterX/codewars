/* 
7kyu - Simple Fun #241: Strange Code
https://www.codewars.com/kata/590a7f2be8e86e1240000068
*/

// function strangeCode(s, e) {
//   let result = '', letter = '';
//   while (s < e - 1) {
//     s++;
//     e--;
//     letter = letter === 'a' ? 'b' : 'a';
//     result += letter;
//   }
//   return result;
// }

// shorten
function strangeCode(s, e) {
  let result = '';
  while (s < e - 1) {
    s++;
    e--;
    result += result.slice(-1) === 'a' ? 'b' : 'a';
  }
  return result;
}


console.log(strangeCode(4, 8), 'ab')
console.log(strangeCode(10, 15), 'ab')
console.log(strangeCode(10, 16), 'aba')

// best
/* 
let strangeCode = (s, e) => e < s ? '' : 'ab'.repeat(e).slice(0, e - s >> 1)
*/

/* 
function strangeCode(s, e) {
  let cnt = 0;
  const result = []
  while (s++ < --e)
    result.push(++cnt % 2 ? 'a' : 'b');
  return result.join('')
}
*/