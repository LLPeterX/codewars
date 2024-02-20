/* 
7kyu - Say "Hello World" JS Style
https://www.codewars.com/kata/53a20af2e0afd3e2cd000333/train/javascript

Write the definition of the function "say" such that calling this:
say("Hello")("World")

*/

var say = function (string1) {
  return (x) => string1 + ' ' + x;
}

console.log(say('Hello')('World'));