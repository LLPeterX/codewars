/* 
7kyu - Where's Wally
https://www.codewars.com/kata/55f91a98db47502cfc00001b/train/javascript

Write a function that returns the index of the first occurence of the word "Wally".
"Wally" must not be part of another word, but it can be directly 
followed by a punctuation mark. If no such "Wally" exists, return -1.
*/

function wheresWally(string) {
  if (string.match(/^Wally[!?.:;,]*?\b/)) return 0;
  let m = string.match(/\b[\s]Wally[!?.:;,]*?\b/);
  if (!m) return -1;
  return m.index + 1;
}

console.log(wheresWally(""), -1)
console.log(wheresWally("DWally"), -1)
console.log(wheresWally(",Wally"), -1)

console.log(wheresWally("Wally"), 0)
console.log(wheresWally("Where's Wally"), 8)
console.log(wheresWally("Hi Wally."), 3)
console.log(wheresWally("'Wally Wally"), 7)
console.log(wheresWally("Wallyd"), -1)

// best
/* 
function wheresWally(string){
  return (" "+string).search(/ Wally\b/) 
}
*/
/* 
function wheresWally(string) {
  var match = /(^|[ ])Wally\b/.exec(string)
  return match ? match.index + match[1].length : -1
} 
*/

/* 
const wheresWally = string =>
  string.search(/(?<!\S)Wally\b/);
*/