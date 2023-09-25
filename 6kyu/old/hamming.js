/* 
6kyu - Hamming Distance
https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/train/javascript

The Hamming Distance is a measure of similarity between two strings of equal length. 
Complete the function so that it returns the number of positions where the input strings do not match.
*/

function hamming1(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) sum++;
  }

  return sum;
}

const hamming = (a, b) => [...a].map((e, i) => e.charCodeAt() ^ b.charCodeAt(i)).filter(Boolean).length;


console.log(hamming("I like turtles", "I like turkeys"), 3);
console.log(hamming("Hello World", "Hello World"), 0);
console.log(hamming("hello world", "hello tokyo"), 4);
console.log(hamming("a man a plan a canal", "a man a plan sobanal"), 3);
console.log(hamming("hamming and cheese", "Hamming and Cheese"), 2);
console.log(hamming("espresso", "Expresso"), 2);
console.log(hamming("old father, old artificer", "of my soul the uncreated "), 24);

// best

/* 
function hamming(a,b) {
  return a.split('').filter(function(v,i) {return a[i]!=b[i]}).length;
}
*/

/* 
const hamming = (a, b) =>
  [...a].reduce((pre, val, idx) => pre + (val !== b[idx]), 0);
*/