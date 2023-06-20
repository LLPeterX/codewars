/* 
6kyu - Run-length encoding
https://www.codewars.com/kata/546dba39fa8da224e8000467

*/

function runLengthEncoding(str) {
  if (!str) return [];
  let prevChar = [0, str[0]];
  const result = [];
  for (let char of str) {
    if (char === prevChar[1]) {
      prevChar[0]++;
    } else {
      result.push(prevChar);
      prevChar = [1, char];
    }
  }
  result.push(prevChar);
  return result;
}

console.log(runLengthEncoding(""), []);
console.log(runLengthEncoding("abc"), [[1, 'a'], [1, 'b'], [1, 'c']]);
console.log(runLengthEncoding("aab"), [[2, 'a'], [1, 'b']]);
console.log(runLengthEncoding("hello world!"),
  [[1, 'h'], [1, 'e'], [2, 'l'], [1, 'o'], [1, ' '], [1, 'w'], [1, 'o'], [1, 'r'], [1, 'l'], [1, 'd'], [1, '!']]);
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"),
  [[34, 'a'], [3, 'b']]);
console.log(
  runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"),
  [[12, 'W'], [1, 'B'], [12, 'W'], [3, 'B'], [24, 'W'], [1, 'B'], [14, 'W']]);

  // best

/*
function runLengthEncoding(str) {
  var arr = [],
      counter = 1;

  for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
          counter++;
      } else {
          arr.push([counter, str[i]]);
          counter = 1;
      }
  }

  return arr;
}
*/

// function runLengthEncoding(str) {
//   return (str.match(/(.)\1*/g) || []).map(function (c) {
//     return [c.length, c[0]];
//   });
// }
