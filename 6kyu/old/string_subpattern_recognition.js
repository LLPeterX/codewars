/* 
6kyu - String subpattern recognition I
https://www.codewars.com/kata/5a49f074b3bfa89b4c00002b

In this kata you need to build a function to return either true/True 
or false/False if a string can be seen as the repetition 
of a simpler/shorter subpattern or not.

hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
*/

function hasSubpattern(str) {
  for (let i = 1; i < str.length; i++) {
    let pattern = str.slice(0, i);
    let rest = pattern.repeat((str.length - i) / pattern.length);
    if (str.slice(i) === rest) return true;
  }
  return false;
}

console.log(hasSubpattern("a"), false);
console.log(hasSubpattern("aaaa"), true);
console.log(hasSubpattern("abcd"), false);
console.log(hasSubpattern("abababab"), true);
console.log(hasSubpattern("ababababa"), false);
console.log(hasSubpattern("123a123a123a"), true);
console.log(hasSubpattern("123A123a123a"), false);
console.log(hasSubpattern("abbaabbaabba"), true);
console.log(hasSubpattern("abbabbabba"), false);
console.log(hasSubpattern("abcdabcabcd"), false);

// best
/* 
const hasSubpattern = string => /^(.*)\1+$/.test(string);
*/

/* 
function hasSubpattern(string) {
  return (string + string).indexOf(string, 1) != string.length;
}
*/