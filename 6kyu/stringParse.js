/* 
6kyu - Bracket Duplicates
https://www.codewars.com/kata/5411c4205f3a7fd3f90009ea/train/javascript

Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.
*/

function stringParse(string) {
  if (!string) return string;
  if (typeof string !== 'string') return "Please enter a valid string";
  let prevCh = string[0], count = 1, isOpen = false;
  let result = prevCh;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === prevCh) {
      ++count;
      if (count > 2) {
        if (!isOpen) {
          result += '[';
          isOpen = true;
        }
      }
    } else {
      if (isOpen) {
        result += ']';
        isOpen = false;
      }
      prevCh = string[i];
      count = 1;
    }
    result += string[i];
  }
  return result + (isOpen ? ']' : '');
}
// жопой чую, можно решить regexp'ом

console.log(stringParse("aaaabbcdefffffffg"), "aa[aa]bbcdeff[fffff]g")
console.log(stringParse("boopdedoop"), "boopdedoop")
console.log(stringParse("helloookat"), "helloo[o]kat")

// best
/* 
function stringParse(string){
  if(string + "" !== string) return "Please enter a valid string";
  return string.replace(/(.)\1(\1+)/g,"$1$1[$2]");
}
*/