/* 
7kyu - Chicken Sexing
https://www.codewars.com/kata/57ed40e3bd793e9c92000fcb/train/javascript
*/

function correctness(bobsDecisions, expertDecisions) {
  return [...bobsDecisions].reduce((score, b, i) => score + (b === expertDecisions[i] ? 1 : (b === '?' || expertDecisions[i] === '?') ? 0.5 : 0), 0);
}

console.log(correctness(['M', '?', 'M'], ['M', 'F', '?']));