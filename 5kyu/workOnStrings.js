/* 
5kyu - Play with two Strings
https://www.codewars.com/kata/56c30ad8585d9ab99b000c54

Input Strings A and B: 
For every character in string A swap the casing of every occurrence 
of the same character in string B. 

Then do the same casing swap with the inputs reversed. 

Return a single string consisting of the changed version 
of a followed by the changed version of b.

A char of a is in b regardless if it's in upper or lower case - see the testcases too.
*/

function workOnStrings(a, b) {
  // вспомогательная функция изменения регистра второй строки s2
  const swapCase = (s1, s2) => {
    let a2 = [...s2];
    for (let i = 0; i < s1.length; i++) {
      for (let j = 0; j < s2.length; j++) {
        if (s1[i].toUpperCase() === a2[j].toUpperCase()) {
          a2[j] = a2[j] === a2[j].toUpperCase() ? a2[j].toLowerCase() : a2[j].toUpperCase();
        }
      }
    }
    return a2.join``;
  }
  return swapCase(b, a) + swapCase(a, b);
}


console.log(workOnStrings("abc", "cde"), '=>', "abCCde");
console.log(workOnStrings("ab", "aba"), '=>', "aBABA");
console.log(workOnStrings("abab", "bababa"), '=>', "ABABbababa");

// best

/* 
/ Case insensitive letter occurrences count
const count = str => str
        .toLowerCase()
        .split('')
        .reduce((R, x) => (R[x] = (R[x]||0) + 1, R), {});

// Invert character case
const changeCase = char => char > 'Z' ? char.toUpperCase() : char.toLowerCase();

// Rule-based string processing
const strConv = (str, rules) => str
        .split('')
        .map(x => rules[x.toLowerCase()] % 2 ? changeCase(x) : x)
        .join('');

const workOnStrings = (a, b) => strConv(a, count(b)) + strConv(b, count(a));
*/

/* 
function workOnStrings(a,b){
    var arra=a.split(''), arrb=b.split(''), r, res;
    res =  arra.map(x=>{r=new RegExp(x,'gi'); return (b.match(r)||[]).length%2?cc(x):x}).join('');
    res += arrb.map(x=>{r=new RegExp(x,'gi'); return (a.match(r)||[]).length%2?cc(x):x}).join('');
    return res;
}
const cc=x=>x==x.toLowerCase()?x.toUpperCase():x.toLowerCase();
*/

/* 
const swapCase=m => String.fromCharCode(m.charCodeAt(0) % 97 % 65 + (m<'a'?97:65));

const regExer=s =>{
    let o = [...s.toLowerCase()].reduce((o,c)=>(o[c]=o[c]+1||1,o),{});
    s = Object.keys(o).filter(c=>o[c]&1).join('');
    return new RegExp(`[${ s }]`,'gi')
}
const player=(a,b) => a.replace(regExer(b), swapCase);

const workOnStrings=(a,b) => player(a,b)+player(b,a);
*/