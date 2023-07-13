/* 
5kyu - WordSquare
https://www.codewars.com/kata/578e07d590f2bb8d3300001d/solutions/javascript

A Word Square is a set of words written out in a square grid, 
such that the same words can be read both horizontally and vertically. 
The number of words, equal to the number of letters in each word, 
is known as the order of the square.

Given a string of various uppercase letters, check whether a Word Square can be formed from it.
*/

function wordSquare(letters) {
  if (!Number.isInteger(Math.sqrt(letters.length))) return false;
  let counts = Object.entries([...letters].reduce((c, l) => { c[l] = (c[l] || 0) + 1; return c; }, {}));
  let div2 = counts.filter(e => e[1] % 2 === 0).length;
  let div1 = counts.filter(e => e[1] === 1).length;
  return div1 <= div2;
}

// best

/* 
function wordSquare(letters) {
   var len = letters.length, num = Math.sqrt(len);
   if(num % 1) return false;
   while(/([a-z]).*?\1/i.test(letters)) {
     letters = letters.replace(/([a-z])(.*?)\1/i, '$2');
   }
   return letters.length <= num;
}
*/

/* 
function wordSquare(s) {
    var n = Math.sqrt(s.length), c = new Set(s).size;
    return !(n%1) && n<=c && c<=n*(n+1)/2;
}
*/