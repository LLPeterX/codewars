/* 
7kyu - Sorting Arrays
https://www.codewars.com/kata/57fe864854685b1c420002e0/train/javascript

Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

Each element in the arrays will start with a unique letter so there will only be a single match for each element.
*/

function sortArray(a1, a2) {
  return a2.sort((a, b) => a1.findIndex(e => e[0] === a[0]) - a1.findIndex(e => e[0] === b[0]));

}

var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
console.log(sortArray(a1, a2), ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']);

// best
/* 
const sortArray = (a1, a2) => a1.map( v => a2.find( w => v[0]===w[0] ) );
*/