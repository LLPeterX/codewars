/* 
6kyu - Get match by pattern
https://www.codewars.com/kata/637d1d6303109e000e0a3116/train/javascript

mplement a function find_matched_by_pattern(pattern) that returns a predicate function, 
testing a string input and returning true if the string is matching the pattern, false otherwise.

A word is considered a match for a given pattern if the first occurrence of each letter of the pattern
is found in the same order in the word. 
If a character in the pattern is duplicated, the same logic applies further.

The pattern will always be a string of size 3.
*/

function findMatchedByPattern(pattern) {
  return (str) => {
    const p = [...pattern];
    for (let c of str) {
      let i = p.indexOf(c);
      if (i > 0) return false;
      else if (i === 0) {
        p.splice(0, 1);
      }
    }
    return p.length === 0;
  }
}
const predicate = findMatchedByPattern("acs");

console.log(predicate("access"), true, "'access' is a word that matched pattern 'acs'");
console.log(predicate("sacrifice"), false, "'sacrifice' is not a word that matched pattern 'acs'");

const predicate2 = findMatchedByPattern("qqq");
console.log(predicate2("quaquaqua"), true);

const predicate3 = findMatchedByPattern("yjk");
console.log(predicate3("skyjack"), false);

// best

/* 
findMatchedByPattern= ([a, b, c]) => s => new RegExp(`^[^${b}${c}]*${a}[^${c}]*${b}.*${c}`).test(s);
*/

/* 
function findMatchedByPattern(pattern) {
  return function match(pattern) {
    return function(word) {
      const [p,...attern] = pattern, [w,...ord] = word;
      return p ? w ? w===p ? match(attern)(ord) : pattern.includes(w) ? false : match(pattern)(ord) : false : true ;
    } ;
  } ( pattern ) ;
}
*/