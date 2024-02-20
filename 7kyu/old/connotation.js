/* 
7kyu - Negative Connotation
https://www.codewars.com/kata/5ef0456fcd067000321baffa/train/javascript

You will be given a string with sets of characters, (i.e. words), 
seperated by between one and four spaces (inclusive).

Looking at the first letter of each word (case insensitive-"A" and "a" 
should be treated the same), you need to determine whether 
it falls into the positive/first half of the alphabet ("a"-"m") 
or the negative/second half ("n"-"z").

Return True/true if there are more (or equal) positive words 
than negative words, False/false otherwise
*/

function connotation(str) {
  let c = str
    .trim()
    .split(/\s+/)
    .map(w => w[0])
    .reduce((r, c) => { if (/[a-m]/i.test(c)) r[0]++; else r[1]++; return r; }, [0, 0]);
  return c[0] >= c[1];
}

// best
/* 
function connotation(str) {
  let positiveMatches = str.match(/\b[a-m]/ig) || []
  let negativeMatches = str.match(/\b[n-z]/ig) || []
  return positiveMatches.length >= negativeMatches.length
}
*/