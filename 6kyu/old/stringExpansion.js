/* 
6kyu - Simple Simple Simple String Expansion
https://www.codewars.com/kata/5ae326342f8cbc72220000d2/train/javascript

Given a string that includes alphanumeric characters ("3a4B2d") 
return the expansion of that string: The numeric values represent 
the occurrence of each letter preceding that numeric value. T
here should be no numeric characters in the final string.

Notes
* The first occurrence of a numeric value should be the number 
  of times each character behind it is repeated, until the next numeric value appears
* If there are multiple consecutive numeric characters, only the last one 
  should be used (ignore the previous ones)
* Empty strings should return an empty string.
*/

function stringExpansion(s) {
  let parts = s.match(/(\d+[a-z]+)|([a-z]+)/ig);
  if (!parts) return '';
  let result = "";
  for (let p of parts) {
    let m = p.match(/(\d+)([a-z]+)/i);
    if (m) {
      result += m[1] % 10 ? [...m[2]].map(e => e.repeat(m[1] % 10)).join`` : "";
    } else result += p;
  }
  return result;
}

console.log(stringExpansion('3abc'), 'aaabbbccc');
console.log(stringExpansion('3D2a5d2f'), 'DDDaadddddff');
console.log(stringExpansion('0d0a0v0t0y'), '=>', '');
console.log(stringExpansion('3d332f2a'), 'dddffaa');
console.log(stringExpansion('abcde'), 'abcde');
console.log(stringExpansion('a2bcde'), 'abbccddee');
console.log(stringExpansion('abcde3f'), 'abcdefff');
console.log(stringExpansion('11111'), '=>', '');

// best
 
// function stringExpansion(s) {
//   return s.replace(/\d\D*/g, m => m.slice(1).replace(/./g, n => n.repeat(m[0])))
//}
