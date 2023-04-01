/* 
6kyu - WeIrD StRiNg CaSe
https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
and returns the same string with all even indexed characters in each word 
upper cased, and all odd indexed characters in each word lower cased. 
The indexing just explained is zero based, so the zero-ith index is even, 
therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' ').
Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string) {
  // return string.split(' ').map(word => {
  //   let result = "";
  //   for (let i = 0; i < word.length; i++) {
  //     result += (i % 2) ? word[i].toLowerCase() : word[i].toUpperCase();
  //   }
  //   return result;
  // }).join(' ');
  return string.split(' ').map(word => [...word].reduce((result, c, i) => result + (i % 2 ? c.toLowerCase() : c.toUpperCase()), "")).join(' ');
}

console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');

// cool
/* 
function toWeirdCase(string){
  return string.replace(/(\w{1,2})/g,(m)=>m[0].toUpperCase()+m.slice(1))
}
*/