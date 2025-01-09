/* 
6kyu - Interlace an arbitrary Number of Strings
https://www.codewars.com/kata/5836ebe4f7e1c56e1a000033/train/javascript

Write a function that takes an arbitrary number of strings and interlaces them (combines them by alternating characters from each string).
*/

function combineStrings() {
  let strings = [...arguments].map((s) => s.split(''));
  let tmp = '',
    result;
  while (true) {
    result = tmp;
    for (let i = 0; i < strings.length; i++) {
      result += strings[i].shift() || '';
    }
    if (tmp == result) break;
    tmp = result;
  }
  return result;
}

console.log(combineStrings('abcd', '123', '£$%'));

// best

/* 
function combineStrings(...xs) {
  const max = Math.max(...xs.map(s => s.length))
  let str = ""
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < xs.length; j++) {
      str += xs[j].charAt(i)
    }
  }
  return str
}
*/
