/* 
7kyu - Determine the logarithm base
https://www.codewars.com/kata/5ae1dcde9c0e489ae00019fc/train/javascript

Define a function that will receive a logarithm function, and returns the base of that logarithm.

guessBase(ln) == e
Base is a real number (not only integers) guaranteed to be less than 1e6.
*/

// function determineBase(logFunc) {
//   let log = logFunc(10);
//   return Math.pow(10, 1 / log);
// }

// function determineBase(logFunc) {
//   return Math.pow(2, 1 / logFunc(2));
// }

// или даже так:

const determineBase = logFunc => 2 ** (1 / logFunc(2));

console.log(determineBase(Math.log), Math.E);
console.log(determineBase(Math.log10), 10);
console.log(determineBase(Math.log2), 2);
console.log(determineBase((n) => Math.log(n) / Math.log(77)), 77);

// cool
/* 
function determineBase(fn){
  var i=0,j=1e6
  while(i<j){
    var m=(i+j)/2
    if(fn(m)==1) return m
    else if(fn(m)<1) i=m
    else j=m
  }
  return i
}
*/