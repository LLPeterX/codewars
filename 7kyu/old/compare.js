/* 
7kyu - Compare Strings by Sum of Chars
https://www.codewars.com/kata/576bb3c4b1abc497ec000065/train/javascript

Compare two strings by comparing the sum of their values (ASCII character code).

- For comparing treat all letters as UpperCase
- null/NULL/Nil/None should be treated as empty strings
- If the string contains other characters than letters, treat the whole string as it would be empty

Your method should return true, if the strings are equal and false if they are not equal.
*/

function compare(s1, s2) {
  const toCode = (s) => s && s.match(/^[A-Z]+$/i) ? [...s.toUpperCase()].reduce((sum, c) => sum + c.charCodeAt(), 0) : 0;
  return toCode(s1) === toCode(s2);
}

console.log(compare("AD", "BC"), true);
console.log(compare("AD", "DD"), false);
console.log(compare("gf", "FG"), true);
console.log(compare("Ad", "DD"), false);
console.log(compare("zz1", ""), true);
console.log(compare("ZzZz", "ffPFF"), true);
console.log(compare("kl", "lz"), false);
console.log(compare("!!", "7476"), true);
console.log(compare("##", "1176"), true);

console.log(compare(null, "BC"), false);
console.log(compare(null, null), true);
console.log(compare(null, ""), true);
console.log(compare("", ""), true);

// cool

/* 
compare=(a,b,f=s=>s&&!s.match(/[^a-z]/i)?[...s.toUpperCase()].reduce((t,c)=>t+c.charCodeAt(),0):0)=>f(a)==f(b)
*/