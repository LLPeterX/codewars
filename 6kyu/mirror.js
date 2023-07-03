/* 
6kyu - Framed Reflection
https://www.codewars.com/kata/581331293788bc1702001fa6/train/javascript

You are given a message (text) that you choose to read in a mirror (weirdo).
Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:
*********
* olleH *
* dlrow *
*********

Words in your solution should be left-aligned.
*/

function mirror(text) {
  let words = text.split(' ');
  let maxLen = Math.max(...words.map(w => w.length));
  let result = '*'.repeat(maxLen + 4) + "\n";
  for (let w of words) {
    result += '* ' + [...w].reverse().join('').padEnd(maxLen) + ' *\n';
  }
  result += '*'.repeat(maxLen + 4);
  return result;
}

console.log(mirror('Hello World'), '*********\n* olleH *\n* dlroW *\n*********');
console.log(mirror('Codewars'), '************\n* srawedoC *\n************');

// best

/* 
function mirror(s){
  let a = s.split(' ');
  let m = Math.max(...a.map(x=>x.length));
  a = a.map(x=>'* '+[...x].reverse().join('')+' '.repeat(m-x.length)+' *');
  return ['*'.repeat(m+4),...a,'*'.repeat(m+4)].join('\n');
}
*/

/*
function mirror(text) {
  const words = text.split(' ');
  const width = Math.max.apply(null, words.map(w => w.length));
  const tb = '*'.repeat(width + 4);
  const revs = words.map(w => `* ${Array.from(w).reverse().join('')}${' '.repeat(width - w.length)} *`).join('\n');
  return `${tb}\n${revs}\n${tb}`;
}
*/
