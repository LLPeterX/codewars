/* 
7kyu - Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript


*/

function alienLanguage(str) {
  return str.split(' ').map(word => word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase()).join(' ');
}

console.log(alienLanguage("My name is John"), "My NAMe Is JOHn");
console.log(alienLanguage("this is an example"), "THIs Is An EXAMPLe");
console.log(alienLanguage("Hello World"), "HELLo WORLd");
console.log(alienLanguage("HELLO WORLD"), "HELLo WORLd");