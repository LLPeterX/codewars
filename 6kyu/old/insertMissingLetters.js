/* 
6kyu - Missing Alphabet
https://www.codewars.com/kata/5ad1e412cc2be1dbfb000016

In this Kata you have to create a function insertMissingLetters(),
that takes in a string and outputs the same string processed in a particular way.

The function should insert only after the first occurrence of each character 
of the input string, all the alphabet letters that:

-are NOT in the original string
-come after the letter of the string you are processing

Each added letter should be in uppercase, 
the letters of the original string will always be in lowercase.

Example:

input: "holly"
missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"
output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

You don't need to validate input, the input string will always contain 
a certain amount of lowercase letters (min 1 / max 50).
*/

function insertMissingLetters(str) {
  let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  let processed = new Set();
  let result = "";
  for (let char of str) {
    result += char;
    if (char !== 'z' && !processed.has(char)) {
      let add = alphabet.slice(alphabet.indexOf(char) + 1).filter(v => !str.includes(v)).join``;
      result += add.toUpperCase();
      processed.add(char);
    }
  }
  return result;
}

console.log(insertMissingLetters("hello"), "hIJKMNPQRSTUVWXYZeFGIJKMNPQRSTUVWXYZlMNPQRSTUVWXYZloPQRSTUVWXYZ");

// best

/* 
const insertMissingLetters = str => str
  .split``
  .map((e, i, a) => 
    i === a.indexOf(e) ? e + 'abcdefghijklmnopqrstuvwxyz'
      .split`` 
      .filter(x => !str.includes(x) && x.charCodeAt() > e.charCodeAt())
      .join``
      .toUpperCase() : e)
  .join``;  
*/

/* 
const insertMissingLetters = (str, charSet = "abcdefghijklmnopqrstuvwxyz") => 
    [...new Set(str.split(""))]
        .reduce((p,c) => p.replace(c,c+charSet.slice(charSet.indexOf(c)+1).toUpperCase()),str)
        .replace(new RegExp("["+str.toUpperCase()+"]","g"),"");
*/

