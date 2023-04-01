/* 
5kyu - First non-repeating character
https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

Write a function named first_non_repeating_letter that takes a string input, 
and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', 
since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, 
but the function should return the correct case for the initial letter. 
For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("")
or None -- see sample tests.
*/

function firstNonRepeatingLetter(s) {
  let counts = [];
  for (let c of s) {
    let k = counts.findIndex(v => v[0].toLowerCase() === c.toLowerCase());
    if (k < 0) {
      counts.push([c, 1]);
    } else {
      counts[k][1]++;
    }
  }
  let result = counts.find(v => v[1] === 1);
  return result ? result[0] : "";
}



console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('sTreSS'), 'T');
console.log(firstNonRepeatingLetter('moonmen'), 'e');

// best
/* 
function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}
*/

/* 
function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}
*/